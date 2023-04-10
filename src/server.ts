import express, {Express, Request, Response} from 'express';
import userRoutes from './routes/user.routes';

const app: Express = express();
const port = 3100;

app.use('/user', userRoutes);

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});