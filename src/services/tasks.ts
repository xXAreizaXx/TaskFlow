// Axios
import { axiosInstance } from "./instance";

export async function getTasks() {
    return await axiosInstance.get("/tasks");
}

export async function getOneTask(id: string) {
    return await axiosInstance.get(`/tasks/${id}`);
}

export async function createTask(data: DtoTask) {
    return await axiosInstance.post("/tasks", data);
}

export async function updateTask(id: string, data: DtoTask) {
    return await axiosInstance.put(`/tasks/${id}`, data);
}

export async function deleteTask(id: string) {
    return await axiosInstance.delete(`/tasks/${id}`);
}