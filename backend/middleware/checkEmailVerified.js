import User from '../models/user.model.js';

export const checkEmailVerified = async (req, res, next) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        if (!user.isEmailVerified) {
            return res.status(403).json({ msg: 'Email not verified. Please verify your email to access this resource.' });
        }

        next(); 
    } catch (error) {
        console.error("Error in email verification middleware: " + error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
