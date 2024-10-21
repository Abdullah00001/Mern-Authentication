import { UserModel } from '../models/user.models.js';
import { verifyAccessToken } from '../utils/accessTokenGenerator.utils.js';

export const checkAuth = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.accesstoken;
    if (!accessToken)
      return res.status(401).json({ message: 'Unauthorize Request' });
    const decode = verifyAccessToken(accessToken);
    if (!decode)
      return res.status(401).json({ message: 'Unauthorized AceessToken' });
    const user = await UserModel.findById(decode);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
