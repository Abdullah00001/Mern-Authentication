import jwt from 'jsonwebtoken';

const generateRefreshToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: '7d',
  });
  return token;
};

const verifyRefreshToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY);
    return decoded;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.error('Message : ', 'Token Has Expired');
      return null;
    }
    console.error('Error Message : ', error.message);
    return null;
  }
};

export { generateRefreshToken, verifyRefreshToken };
