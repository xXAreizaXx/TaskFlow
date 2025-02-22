// Axios
import { axiosInstance } from "./instance";

export async function signIn() {
    return await axiosInstance.get("/users");
}

export async function signUp(data: DtoSignUp) {
    return await axiosInstance.post("/users", data);
}
