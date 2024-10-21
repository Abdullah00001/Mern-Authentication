import { Router } from 'express';

const router = Router();

/* ====================================
-------------MIDDLEWARES---------------
=======================================*/

import { isSignupUserExist } from '../middlewares/isSignupUserExist.middlewares.js';
import { isLoginUserExist } from '../middlewares/isLoginUserExist.middlewares.js';
import { checkAuth } from '../middlewares/auth.middlewares.js';

/* ====================================
-------------Controllers---------------
=======================================*/

import { signupController } from '../controllers/signup.controllers.js';
import { signinController } from '../controllers/signin.controllers.js';
import { logoutController } from '../controllers/logout.controllers.js';
import { refreshTokenController } from '../controllers/refreshToken.controllers.js';

router.post('/signup', isSignupUserExist, signupController);
router.post('/signin', isLoginUserExist, signinController);

/* ======================================
-------------Protected Routes------------
========================================*/

router.post('/logout', checkAuth, logoutController);
router.post('refreshtokens/', refreshTokenController);
export default router;
