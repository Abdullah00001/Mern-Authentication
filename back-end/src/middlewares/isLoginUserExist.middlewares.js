import { UserModel } from '../models/user.models.js';

export const isLoginUserExist = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const isUser = await UserModel.findOne({ userName });
    if (isUser) {
        req.user=isUser
      return next();
    }
    return res
      .status(404)
      .json({ message: 'User With This Username Not Found' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
