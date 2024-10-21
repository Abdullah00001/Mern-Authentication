import bcrypt from 'bcrypt';
import { generateRefreshToken } from '../utils/refreshTokenGenerator.utils.js';
import { generateAccessToken } from '../utils/accessTokenGenerator.utils.js';
import { UserModel } from '../models/user.models.js';

export const signinController = async (req, res) => {
  try {
    const { password } = req.body;
    const user = req.user;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const refreshToken = generateRefreshToken(user._id);
      const accessToken = generateAccessToken(user._id);
      await UserModel.findByIdAndUpdate(
        user._id,
        {
          $set: {
            refreshToken: refreshToken,
          },
        },
        {
          new: true,
        }
      );
      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
      };
      return res
        .status(200)
        .cookie('accesstoken', accessToken, cookieOptions)
        .cookie('refreshtoken', refreshToken, cookieOptions)
        .json({ message: 'User Login Successful' });
    }
    return res.status(400).json({ message: 'Password Is Incorrect' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
