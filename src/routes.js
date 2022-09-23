// Importações
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./pages/Profile";
import User from "./pages/User";

export default function Routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<User />} />
                <Route path="/create" element={<Profile />} />
                <Route path="/update/:id" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}