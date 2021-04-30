import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;
    
    @Column()
    admin_id: string;

    @Column()
    text: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User) // muitas mensagens para um usuário (many messages to one user)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Message };