import express from 'express';
import cors from 'cors';
import postRouter from './routes/posts.router.js'
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());
app.use('/posts', postRouter);
app.listen(port, console.log(`corriendo en el puerto: ${port}`));
