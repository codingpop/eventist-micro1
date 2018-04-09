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

  static async signIn(req, res, next) {
    res.send('Also here');
  }
}
