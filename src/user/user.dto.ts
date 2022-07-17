import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    public name: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Length(3, 100)
    public email: string

    @IsString()
    @IsNotEmpty()
    @Length(3, 500)
    public password: string

    @IsString()
    @Length(0, 1500)
    photourl: string
}
