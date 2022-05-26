import { FC, createContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// <------------ import responsive hooks ------------->
import { useResponsiveScreen } from "hooks/effects/useResponsiveScreen";

// <---------- import layout ----------->
import UserLayout from "components/layouts/UserLayout";
import AuthLayout from "components/layouts/AuthLayout";
import AdminLayout from "components/layouts/AdminLayout";

// <---------- import protect route and persist route ------------>
import { ProtectedRoute } from "routes/ProtectedRoute";
import { PersistRoute } from "routes/PersistRoute";

// <---------- import pages ------------>
import Home from "pages";
import Courses from "pages/course";
import CourseDetails from "pages/course/CourseDetails";
import Articles from "pages/articles";
import ArticleDetails from "pages/articles/ArticleDetails";

import Login from "pages/Login";
import Register from "pages/Register";

import Dashboard from "pages/admin/dashboard";
import AdminCourses from "pages/admin/course";
import AdminArticle from "pages/admin/article";
import AdminAccount from "pages/admin/adminAccount";
import CoursePayment from "pages/admin/coursePayment";
import CourseReport from "pages/admin/report";

import NotFound from "pages/NotFound";

// <------------ import global svg icons ------------------>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faCheckSquare,
    faCoffee,
    faCircleUser,
    faEnvelope,
    faEye,
    faEyeSlash,
    faLock,
    faHome,
    faBook,
    faFileLines,
    faBasketShopping,
    faChartLine,
    faUsers,
    faClock,
    faSearch,
    faChevronLeft,
    faChevronRight,
    faPlus,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faCircleUser,
    faEnvelope,
    faEye,
    faEyeSlash,
    faLock,
    faHome,
    faBook,
    faFileLines,
    faBasketShopping,
    faChartLine,
    faUsers,
    faClock,
    faSearch,
    faChevronLeft,
    faChevronRight,
    faPlus,
    faXmark
);

const ThemeContext = createContext<{ sm: boolean; md: boolean; lg: boolean }>({
    sm: false,
    md: false,
    lg: false,
});

const App: FC = () => {
    // <------------------ defined initial values ------------------->
    let location = useLocation();

    // <-------------------- defined hooks-------------------->
    const { sm, md, lg } = useResponsiveScreen();

    return (
        <ThemeContext.Provider value={{ sm, md, lg }}>
            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                    {/* <Route element={<ProtectedRoute allowedRole={["student"]} />}>
                        
                    </Route> */}
                    <Route path="courses" element={<Courses />} />
                    <Route
                        path="courses/:courseId"
                        element={<CourseDetails />}
                    />
                    <Route path="articles" element={<Articles />} />
                    <Route
                        path="articles/:articleId"
                        element={<ArticleDetails />}
                    />
                </Route>

                <Route path="auth" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                {/* <-------------- admin layout -----------------> */}

                <Route element={<PersistRoute />}>
                    <Route
                        element={
                            <ProtectedRoute allowedRole={["superadmin"]} />
                        }
                    >
                        <Route path="admin" element={<AdminLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route
                                path="manage-course"
                                element={<AdminCourses />}
                            />
                            <Route
                                path="manage-article"
                                element={<AdminArticle />}
                            />
                            <Route
                                path="manage-account"
                                element={<AdminAccount />}
                            />
                            <Route
                                path="course-payment"
                                element={<CoursePayment />}
                            />
                            <Route path="report" element={<CourseReport />} />
                        </Route>
                    </Route>
                </Route>

                {/* <------------------ redirect route -------------------> */}

                <Route
                    path="login"
                    element={
                        <Navigate
                            to="/auth"
                            state={{ from: location }}
                            replace
                        />
                    }
                />
                <Route
                    path="register"
                    element={
                        <Navigate
                            to="/auth/register"
                            state={{ from: location }}
                            replace
                        />
                    }
                />

                {/* <-------------------- not found route --------------------> */}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </ThemeContext.Provider>
    );
};

export { ThemeContext };
export default App;
