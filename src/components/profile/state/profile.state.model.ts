export interface IProfile {
    orders: [];
    isAuth: boolean;
    error: string;
    user: IProfileUser;
}

export interface IProfileUser {
    preview?: string;
    email: string;
    phone: string;
    name: string;
    address: string;
    userID: string;
}
