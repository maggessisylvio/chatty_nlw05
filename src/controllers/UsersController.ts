import { UsersService } from "../services/UsersService"
import { Request, response, Response } from "express";

class UsersController {

    async create(req: Request, res: Response) {
        const { email } = req.body;

        const userService = new UsersService();

        const user = await userService.create(email);

        return res.json(user);    
    }

}

export { UsersController }