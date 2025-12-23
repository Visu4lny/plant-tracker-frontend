export type Plant =  {
    id: string; // UUID
    name: string;
    lastWateredAt: string;
}

export type PlantInput = {
    name: string;
}

export type User = {
    id: string; // UUID
    email: string;
    username: string;
    password: string;
}

export type LoginCredentials = {
    email: string;
    password: string;
}

export type RegisterCredentials = {
    email: string;
    password: string;
    confirmedPassword: string;
    // TODO add username
}