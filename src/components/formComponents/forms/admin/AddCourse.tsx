import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

// <--------------- import svg icons -------------->
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { HiOutlineUserCircle } from "react-icons/hi";

// <---------------- import formik and formik's utils ---------------->
import { Formik, Form, Field } from "formik";
import { userLoginInitialState, userLoginValidationSchema } from "utils/input";

// <----------------- import form components --------------->
import { Button } from "components/formComponents/Button";
import { TextFieldFormik } from "components/formComponents/TextFieldFormik";
import { Checkbox } from "components/formComponents/Checkbox";

// <----------------- import types ------------------------>
import type { RoutesType } from "types/routes.type";

// <----------------- import hooks and fetching function ---------------------->
import { useLogin } from "hooks/useAuth";

const AddCourse: FC = () => {
    // <-------------- Initial defined variables ----------------->
    const location = useLocation();
    const state = (location.state as RoutesType).from!.pathname;

    // <--------------------- defined hooks ------------------------->
    const {
        isLoading: loginLoading,
        mutate: onLogin,
        error: loginError,
    } = useLogin();

    // <---------------------- functions ----------------------->
    return (
        <Formik
            validationSchema={userLoginValidationSchema}
            initialValues={userLoginInitialState}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                setTimeout(() => {
                    onLogin(values);
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
                            ເພີ່ມ course
                        </h1>
                        <HiOutlineUserCircle className="w-60 h-60" />
                    </section>
                    <section className="flex flex-col gap-4 mt-10">
                        <Field
                            name="email"
                            type="text"
                            placeholder="email"
                            disabled={isSubmitting}
                            leftIcon={"circle-user"}
                            component={TextFieldFormik}
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <Field
                            name="password"
                            placeholder="password"
                            disabled={isSubmitting}
                            leftIcon={"lock"}
                            rightIcon={"eye-slash"}
                            component={TextFieldFormik}
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />

                        <Button
                            text={`${
                                isSubmitting || loginLoading
                                    ? `Loading...`
                                    : `LOGIN`
                            }`}
                            type="submit"
                            disabled={isSubmitting}
                        />

                        <Checkbox />

                        {loginError && (
                            <span className={`text-red-color`}>
                                {loginError.message}
                            </span>
                        )}

                        {!state.includes("admin") && (
                            <div className="flex gap-2">
                                <span className="text-text-color">
                                    Don't have an account?
                                </span>
                                <Link
                                    to="register"
                                    className="text-text-color underline"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </section>
                </Form>
            )}
        </Formik>
    );
};

export default AddCourse;
