import { UserModel } from '../models/user.models.js';

export const isSignupUserExist = async (req, res, next) => {
  try {
    console.log(req.body);
    const { userName } = req.body;
    const isUser = await UserModel.findOne({ userName });
    if (!isUser) {
      return next();
    }
    return res
      .status(400)
      .json({ message: 'User With This Username Already Exist' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
