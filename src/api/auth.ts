import type { LoginCredentials, RegisterCredentials, User } from "../types";
import api from "./client";

interface AuthResponse {
  jwt: string;
  user?: User;
}

export const authApi = {
  login: (credentials: LoginCredentials): Promise<AuthResponse> =>
    api.post<AuthResponse>('/auth/login', credentials) as unknown as Promise<AuthResponse>,

  register: (credentials: RegisterCredentials): Promise<AuthResponse> =>
    api.post<AuthResponse>('/auth/register', credentials) as unknown as Promise<AuthResponse>
};