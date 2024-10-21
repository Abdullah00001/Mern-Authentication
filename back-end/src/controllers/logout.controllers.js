import { UserModel } from '../models/user.models.js';

export const logoutController = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(
      req.user_id,
      {
        $set: {
          refreshToken: null,
        },
      },
      { new: true }
    );
    const cookieOption = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .clearCookie('accesstoken', cookieOption)
      .clearCookie('refreshtoken', cookieOption)
      .json({ message: 'User Logout Successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
