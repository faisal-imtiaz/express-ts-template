import express from 'express';
import userController from '../controllers/user.controller';

const userRoutes = express.Router();

userRoutes.get('/', userController.createUser);
userRoutes.get('/:id', userController.getUser);

export default userRoutes;