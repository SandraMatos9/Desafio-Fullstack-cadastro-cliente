import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Contact } from "./contact.entities"


@Entity("users")
class User{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column()
    name:string
    @Column({unique:true})
    email: string
    @Column()
    password: string
    @Column()
    telephone:number
    @CreateDateColumn()
    readonly registrationDate: Date

    

    @OneToMany(() => Contact, contact => contact.user)
    contacts :Contact[]


}
export {User}