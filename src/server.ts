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

app.use(cors({
    origin: [
        '*'
    ]
}
));

app.use(morgan('dev'));

// const dbURI: string = 'mongodb://localhost:27017/expressTS';
// mongoose
//   .connect(dbURI)
//   .then(() => console.log('Connected to database'))
//   .catch((err: Error) => console.log(err));

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`[Server]: I am running at localhost:${port}`);
});