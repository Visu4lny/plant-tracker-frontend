import type { LoginCredentials, RegisterCredentials, User } from "../types";
import api from "./client";

interface AuthResponse {
  token: string;
  user?: User;
}

export const authApi = {
  login: (credentials: LoginCredentials) =>
    api.post<AuthResponse>('/auth/login', credentials),

  register: (credentials: RegisterCredentials) =>
    api.post<AuthResponse>('/auth/register', credentials)
};