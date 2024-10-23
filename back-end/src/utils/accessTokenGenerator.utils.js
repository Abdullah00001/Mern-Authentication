import jwt from 'jsonwebtoken';

const generateAccessToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: '1h',
  });
  return token;
};

const verifyAccessToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
    return decoded.userId;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.error('Message : ', 'Token Has Expired');
      return null;
    }
    console.error('Error Message : ', error.message);
    return null;
  }
};

export { generateAccessToken, verifyAccessToken };
