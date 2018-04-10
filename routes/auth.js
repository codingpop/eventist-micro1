import express from 'express';
import { celebrate, errors } from 'celebrate';

import Auth from '../controllers/Auth';
import RequestValidator from '../middleware/RequestValidator';

const auth = express.Router();

auth.post(
  '/users/signup',
  celebrate(RequestValidator.userSchema()),
  Auth.signUp,
);

auth.post('/users/signin', Auth.signIn);

auth.use(errors);

export default auth;
