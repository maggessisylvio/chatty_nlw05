import {Request, response, Response} from "express";
import { MessagesService } from "../services/MessagesService";


class MessagesController {

    async create(req: Request, res: Response) {
        const { admin_id, text, user_id }  = req.body;
        
        const messageService = new MessagesService();

        const messages = await messageService.create({
            admin_id,
            text,
            user_id
        })

        return res.json(messages);
    }

    // localhost:3333/messages/idDoUsuario
    async showByUser(req: Request, res: Response) {
        const { id } = req.params;

        const messageService = new MessagesService();

        const list = await messageService.listByUser(id);

        return res.json(list);
    }
}

export { MessagesController };