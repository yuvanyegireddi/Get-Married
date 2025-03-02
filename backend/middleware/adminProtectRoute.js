import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const adminProtectRoute = (req, res, next) => {
    //const token = req.headers['authorization'];
    const completeToken = req.header('Authorization');
    const token = completeToken.split('Bearer ')[1].trim();

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    // Verify token and check if it's an admin token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    next(); // Proceed to the next middleware or route
  } catch (error) {
    console.error('Error in adminProtectRoute middleware: ', error.message);
    return res.status(401).json({ message: 'Unauthorized access' });
  }
};
