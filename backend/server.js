import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

dotenv.config();

app.use(express.json());

//connect to db
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//mount routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

//middlewares
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log('Server Running'));
