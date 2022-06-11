export interface User{
    users_id: string;
    users_name: string; 
    users_email:  string; 
    users_password: number ;
}

export interface CreateUserDTO extends Omit<User, 'users_id'>{}

export interface LoginUserDTO extends Omit<User, 'users_id' | 'users_name'>{}

export interface UserId {
    users_id: string;
}