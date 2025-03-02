import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connectToMongoDb from './db/connectToMongoDB.js';

import authRoutes from './routes/auth.route.js'
import profileRoutes from './routes/profile.route.js'
import adminRoutes from './routes/admin.route.js'




const app = express();

app.use(express.json());  // to parse the incoming requests with JSON payloads (from req.body)
app.use(cors());
dotenv.config();
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/admin', adminRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`);
});
