import { UserModel } from '../models/user.models.js';
import { generateAccessToken } from '../utils/accessTokenGenerator.utils.js';
import {
  generateRefreshToken,
  verifyRefreshToken,
} from '../utils/refreshTokenGenerator.utils.js';

export const refreshTokenController = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    const clearCookieOption = {
      httpOnly: true,
      secure: true,
    };
    if (!token)
      return res.status(401).json({ message: 'Unauthorized request' });
    const decode = verifyRefreshToken(token);
    if (!decode) {
      return res
        .status(401)
        .clearCookie('accesstoken', clearCookieOption)
        .clearCookie('refreshtoken', clearCookieOption)
        .json({ message: 'Unauthorize Refreshtoken.Please Log In' });
    }

    const refreshToken = generateRefreshToken(decode);
    const accessToken = generateAccessToken(decode);
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
    };
    await UserModel.findByIdAndUpdate(
      decode,
      {
        $set: { refreshToken },
      },
      {
        new: true,
      }
    );
    return res
      .status(200)
      .cookie('accesstoken', accessToken, cookieOptions)
      .cookie('refreshtoken', refreshToken, cookieOptions)
      .json({ message: 'Refreshes Tokens Successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
