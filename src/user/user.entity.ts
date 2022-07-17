import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: 'varchar', length: 50})
    name: string

    @Column({type: 'varchar', length: 50, unique: true})
    email: string

    @Column()
    password: string
}
