import express, { Request, Response } from 'express';
import userService from '../services/user.service'

interface User {
  id: number;
  name: string;
  email: string;
}


const userController = {

    createUser(req: Request, res: Response) {
        userService.createUser(req, res);
    },

  getUser(req: Request, res: Response) {
    //Get User
  },

};

export default userController;