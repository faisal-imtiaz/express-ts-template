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
  };
  
  export default userService;