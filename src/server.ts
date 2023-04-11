import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';

const app: Express = express();
const port = 3100;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Allowed all origins for now
app.use(cors({
    origin: ['*']
}));

app.use(morgan('dev'));

// const dbURI: string = '';
// mongoose
//   .connect(dbURI)
//   .then(() => console.log('Connected to database'))
//   .catch((err: Error) => console.log(err));

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});