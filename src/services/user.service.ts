interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const userService = {
  
    createUser(req: any, res: any ): void {
        console.log("CREATING USER...");
        res.send("User Created!");
    },
    getAllUsers(req: any, res: any): void {
      console.log("Getting all USERS...");
      res.send("Users List!");
  },
  };
  
  export default userService;