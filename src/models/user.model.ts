export type UserModel = {
    id: number;
    email: string;
    userType: "tourist";
}

export type TouristModel = {
    id: number;
    name: string;
    nationality: string;
    phone: string;
    birthDate: string;
    gender: "m" | "f";
    language: string;
}