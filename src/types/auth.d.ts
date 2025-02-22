interface IUser {
    id: string;
    email: string;
    name: string;
    password: string;
}

interface DtoSignUp {
    email: string;
    name: string;
    password: string;
}