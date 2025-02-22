// NextJS
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        expires: Date;
        user: IUser;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        token: string;
        user: IUser;
    }
}
