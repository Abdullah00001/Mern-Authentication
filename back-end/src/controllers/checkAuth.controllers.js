export const checkAuthController = (req, res) => {
  return res.status(200).json({ message: 'User Is Authenticated' });
};
