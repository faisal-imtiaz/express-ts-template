import express from 'express';
import userController from '../controllers/user.controller';

const userRoutes = express.Router();

userRoutes.get('/create', userController.createUser);
userRoutes.get('/', userController.getUsers);


export default userRoutes;