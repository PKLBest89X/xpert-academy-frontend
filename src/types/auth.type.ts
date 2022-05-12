export type UserRoleType = "superadmin" | "student";

export type UserInfoType = {
    name: string;
    surname: string;
    email: string;
    avatar?: string;
}

export type RegisterUserType = UserInfoType & {
    password: string;
}

export type LoginUserType = Omit<UserInfoType, "name" | "surname" | "avatar"> & {
    password: string;
}

export type AuthInfoType = {
    accessToken: string;
    roles: UserRoleType[]
}