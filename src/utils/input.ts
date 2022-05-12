import type { InputType } from "types/input.type";

import * as yup from "yup";

const inputProps: InputType = {
    required: {
        email: "email is required",
        userName: "name is required",
        userSurname: "surname is required",
        userPassword: "password is required",
    },
};

export { inputProps };

export const userLoginInitialState = {
    email: "",
    password: "",
};

export const userLoginValidationSchema = yup.object().shape({
    email: yup.string().email().required("email is required!!"),
    password: yup.string().min(8).required("password is required!!"),
});

export const userRegisterInitialState = {
    userName: "",
    userSurname: "",
    email: "",
    userPassword: "",
    userRepassword: "",
};

export const userRegisterValidationSchema = yup.object().shape({
    userName: yup.string().required("name is required!!"),
    userSurname: yup.string().required("surname is required!!"),
    email: yup.string().email().required("email is required!!"),
    userPassword: yup.string().min(8).required("password is required!!"),
    userRepassword: yup
        .string()
        .required("re-password is required!!")
        .test("password-match", "Password must match", function (value) {
            return this.parent.userPassword === value;
        }),
});
