export interface IUser{
    userID?: string,
    name: string,
    isLoad?: boolean,
    token?: string,
    email: string,
    isAuth?: boolean,
    error?: string,
    password?: string,
    [key: string]: unknown
}

export interface IUserActionProps{
    email:string,
    password: string,
    remember?: boolean
}