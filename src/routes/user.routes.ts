import express from 'express';
import UserController from '../controllers/user.controller';

const userRoutes = express.Router();

const userController = new UserController();

userRoutes.post('/create', userController.createUser);
userRoutes.get('/', userController.getAllUsers);

export default userRoutes;