import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user.entities"



@Entity("contact")
class Contact{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column()
    name:string
    @Column({unique:true})
    email: string
    @Column()
    telephone:number
    @CreateDateColumn()
    readonly registrationDate: Date

    

    @ManyToOne(() =>User)
    user:User
}
export {Contact}