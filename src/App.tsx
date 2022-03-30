import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// <---------- import protect route ------------>
import { ProtectedRoute } from "routes/ProtectedRoute";

// <---------- import pages ------------>
import Home from "pages";
import Login from "pages/Login";

const App: FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
