import bcrypt from 'bcryptjs';

import { User } from '../models';

import createToken from '../helpers/createToken';

/**
 * Auth class
 */
export default class Auth {
  /**
   * Registers a new user
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @param {Function} next - Passes execution to the next middleware
   *
   * @memberof Auth
   *
   * @returns {void}
   */
  static async signUp(req, res, next) {
    try {
      const {
        id,
        firstName,
        lastName,
        email,
        avatar,
        isVerified,
        isAdmin,
      } = await User.create(req.body);

      const user = {
        id,
        firstName,
        lastName,
        email,
        avatar,
        isVerified,
        isAdmin,
      };

      res.status(201).json({
        user,
        token: createToken(req, user),
      });
    } catch (err) {
      next(err);
    }
  }

  /**
   * Logs a user in
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @param {Function} next - Passess execution to the next middleware
   *
   * @memberof Auth
   *
   * @returns {void}
   */
  static async signIn(req, res, next) {
    try {
      const { email, password } = req.body;

      const existingUser = await User.findOne({
        where: { email },
        attributes: [
          'id',
          'firstName',
          'lastName',
          'email',
          'avatar',
          'isVerified',
          'isAdmin',
          'password',
        ],
      });

      if (existingUser) {
        const { dataValues } = existingUser;

        const passwordMatches = await bcrypt.compare(
          password,
          dataValues.password,
        );

        if (passwordMatches) {
          const user = { ...dataValues, password: undefined };

          res.status(200).json({
            user,
            token: createToken(req, user),
          });
        } else {
          const err = new Error();
          err.name = 'AuthenticationError';
          err.message = 'incorrect sign in credentials';

          throw err;
        }
      } else {
        const err = new Error();
        err.name = 'NotFoundError';
        err.message = `${email} is not registered`;

        throw err;
      }
    } catch (err) {
      next(err);
    }
  }
}
