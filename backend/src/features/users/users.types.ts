export interface User{
    id:number;
    email:string;
    password:string;
    user_type:string;
    fname:string;
    mname:string;
    lname:string;
    date_of_birth:Date;
    address:string;
    profile_picture_url:string;
    create_at:Date;
    updated_at:Date;
}

export interface CreateUserDTO{
    email:string;
    password:string;
    user_type?:string;
    fname:string,
    mname?:string;
    lname:string
    date_of_birth:Date;
}

export interface UpdateUserDTO{
    id?:number;
    email?:string;
    password?:string;
    fname?:string;
    mname?:string;
    lname?:string;
    date_of_birth?:Date;
    address?:string;
    profile_picture_url?:string;
}

export interface UserResponseDTO{
    id:number;
    email:string;
    password:string;
    user_type:string;
    fname:string;
    mname:string;
    lname:string;
    date_of_birth:Date;
    address:string;
    profile_picture_url:string;
    create_at:Date;
    updated_at:Date;
}