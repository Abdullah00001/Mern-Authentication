import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.models.js';

export const signupController = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ userName, password: hashPassword });
    await newUser.save();
    return res.status(201).json({ message: 'User Created Successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
