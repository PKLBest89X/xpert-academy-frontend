export type InputType = {
    name?: "email" | "userName" | "userSurname" | "userPassword" | "userRepassword",
    required?: {
        email: string;
        userName: string;
        userSurname: string;
        userPassword: string;
    },
}