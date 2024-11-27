import React, { useState, useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Travels from "./pages/Travels";
import About from "./pages/About";
import Admin from "./pages/Admin";
import LoginPage from "./pages/LoginPage";
import ShowAllUsers from "./pages/ShowAllUsers";
import ShowUser from "./pages/ShowUser";
import ChangePassword from "./pages/ChangePassword";
import ChangeRole from "./pages/ChangeRole";

const url = "http://localhost:3000/users/";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [selectedUser, setSelectedUser] = useState({}); // State for selected user

  // useEffect til at hente brugerne fra API'et, når komponenten bliver monteret
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((usersData) => {
        setUsers(usersData);
      });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout users={users} />}>
        <Route index element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/login"
          element={
            <LoginPage users={users} setLoginSuccess={setLoginSuccess} />
          }
        />
        <Route path="/showallusers" element={<ShowAllUsers users={users} />} />
        <Route path="/showuser/:id" element={<ShowUser users={users} />} />
        <Route
          path="/changepassword/:id"
          element={<ChangePassword users={users} />}
        />
        <Route path="/changerole/:id" element={<ChangeRole users={users} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
