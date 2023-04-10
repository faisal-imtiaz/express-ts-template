"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService = {
    createUser(req, res) {
        console.log("CREATING USER...");
        res.send("User Created!");
    },
};
exports.default = userService;
