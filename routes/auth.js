import express from 'express';
import { celebrate, errors } from 'celebrate';

import Auth from '../controllers/Auth';
import JoiSchemas from '../middleware/JoiSchemas';

const auth = express.Router();

auth.post(
  '/users/signup',
  celebrate(JoiSchemas.signUp()),
  Auth.signUp,
);

auth.post(
  '/users/signin',
  celebrate(JoiSchemas.signIn()),
  Auth.signIn,
);

auth.use(errors);

export default auth;
