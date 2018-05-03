import express from 'express';
import bcrypt from 'bcryptjs';
import { celebrate, errors } from 'celebrate';

import { User } from '../models';
import excludeProperties from '../helpers/excludeProperties';
import Auth from '../controllers/Auth';
import createToken from '../helpers/createToken';
import JoiSchemas from '../middleware/JoiSchemas';

const auth = express.Router();
const authController = new Auth({
  User,
  createToken,
  bcrypt,
  excludeProperties,
});

auth.post(
  '/users/signup',
  celebrate(JoiSchemas.signUp()),
  authController.signUp.bind(authController),
);

auth.post(
  '/users/signin',
  celebrate(JoiSchemas.signIn()),
  authController.signIn.bind(authController),
);

auth.use(errors);

export default auth;
