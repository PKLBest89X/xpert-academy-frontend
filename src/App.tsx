import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// <---------- import layout ----------->
import UserLayout from "components/layouts/UserLayout";
import AuthLayout from "components/layouts/AuthLayout";
import AdminLayout from "components/layouts/AdminLayout";

// <---------- import protect route ------------>
import { ProtectedRoute } from "routes/ProtectedRoute";

// <---------- import pages ------------>
import Home from "pages";
import Courses from "pages/Courses";
import Articles from "pages/Articles";

import Login from "pages/Login";
import Register from "pages/Register";

import Dashboard from "pages/admin/dashboard";

import NotFound from "pages/NotFound";

const App: FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<UserLayout />}>
                        <Route index element={<Home />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="articles" element={<Articles />} />
                    </Route>

                    <Route path="auth" element={<AuthLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route path="admin" element={<AdminLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
