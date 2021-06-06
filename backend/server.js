import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRoutes from './routes/userRoutes.js';
const app = express();

dotenv.config();

app.use(express.json());
//connect to db
connectDB();

//mount routes
app.use('/api/users', userRoutes);
//middlewares

const PORT = 4000;

app.listen(PORT, console.log('Server Running'));
