interface IUser {
    id: number;
    email: string;
    name: string;
    password: string;
}

interface DtoSignUp {
    email: string;
    name: string;
    password: string;
}