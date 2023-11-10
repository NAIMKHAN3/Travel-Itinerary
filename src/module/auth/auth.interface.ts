export interface IUser{
    _id?:string;
    phoneNumber: string;
    password: string;
    name: string;
    email: string;
    address: string;
    createdAt?: string;
    updatedAt?: string;
}