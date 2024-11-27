import React from "react";
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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/showallusers" element={<ShowAllUsers />} />
        <Route path="/showuser" element={<ShowUser />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/changerole" element={<ChangeRole />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
