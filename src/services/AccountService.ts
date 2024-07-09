import axios from "axios";
import { accountInterface } from "../types/accountInterface";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createNewAccount = async (data: accountInterface) => {
    const response = await api.post("/accounts", data);
    return response.data;
}

export const getAllAccounts = async (): Promise<accountInterface[]> => {
    const response = await api.get("/accounts");
    return response.data;
}