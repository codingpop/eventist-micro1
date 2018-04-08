import express from 'express';

import Auth from '../controllers/Auth';

const auth = express.Router();

auth.post('/users/signup', Auth.signUp);
auth.post('/users/signin', Auth.signIn);

export default auth;
