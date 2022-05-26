import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// <------------------ import svg icons ----------------->
import { RiUserAddLine } from "react-icons/ri";

// <----------------- import formik and formik's utils ------------------>
import { Formik, Form, Field } from "formik";
import {
    userRegisterInitialState,
    userRegisterValidationSchema,
} from "utils/input";

// <------------------ import form components ------------->
import { TextFieldFormik } from "components/formComponents/TextFieldFormik";
import { Button } from "components/formComponents/Button";

// <----------------- import types ---------------------->
import type { RoutesType } from "types/routes.type";

const Register: React.FC = () => {
    // <--------------- defined initial variables ---------------->

    // <-------------- defined hooks and mounted ----------------->

    return (
        <Formik
            validationSchema={userRegisterValidationSchema}
            initialValues={userRegisterInitialState}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    console.log(values);
                    setSubmitting(false);
                    resetForm({});
                }, 3000);
            }}
        >
            {({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form
                    className="flex flex-col p-8 rounded-md shadow-lg w-full max-w-md"
                    onSubmit={handleSubmit}
                >
                    <section className="flex flex-col items-center text-text-color">
                        <h1 className="text-text-color font-semibold text-xl">
                            REGISTER
                        </h1>
                        <RiUserAddLine className="w-60 h-60" />
                    </section>
                    <section className="flex flex-col gap-4 mt-10">
                        <Field
                            name="userName"
                            type="text"
                            placeholder="name"
                            disabled={isSubmitting}
                            component={TextFieldFormik}
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Field
                            type="text"
                            name="userSurname"
                            placeholder="surname"
                            disabled={isSubmitting}
                            component={TextFieldFormik}
                            value={values.userSurname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Field
                            name="email"
                            type="text"
                            placeholder="email"
                            rightIcon={"envelope"}
                            disabled={isSubmitting}
                            component={TextFieldFormik}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Field
                            type="password"
                            name="userPassword"
                            placeholder="password"
                            rightIcon={"lock"}
                            disabled={isSubmitting}
                            component={TextFieldFormik}
                            value={values.userPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Field
                            type="password"
                            name="userRepassword"
                            placeholder="comfirm password"
                            rightIcon={"lock"}
                            disabled={isSubmitting}
                            component={TextFieldFormik}
                            value={values.userRepassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <Button
                            text={`${isSubmitting ? `Loading...` : `Sign up`}`}
                            type="submit"
                            disabled={isSubmitting}
                        />

                        <div className="flex gap-2">
                            <span className="text-text-color">
                                Already have an account?
                            </span>
                            <Link
                                to="/login"
                                className="text-text-color underline"
                            >
                                Login
                            </Link>
                        </div>
                    </section>
                </Form>
            )}
        </Formik>
    );
};

export default Register;
