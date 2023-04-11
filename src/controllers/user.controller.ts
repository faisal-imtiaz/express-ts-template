import { Request, Response } from 'express';
import UserService from '../services/user.service';
import User from '../models/user.model';

const userService = new UserService(User);

export default class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const userExist = await userService.findUserByEmail(req.body.email);
      if (userExist) {
        res.status(403).json({
          data: null,
          message: "User already exists"
        });
      } else {
        const user = await userService.createUser(req.body);
        res.status(201).json({
          data: user,
          message: "User created!"
        });
      }
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(500).json({
        data: null,
        message: "Internal server error"
      });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({
        data: users
      });
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(500).json({
        data: null,
        message: "Internal server error"
      });
    }
  }
}