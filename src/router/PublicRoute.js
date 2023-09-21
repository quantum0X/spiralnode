import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import Post from "../components/Post";
import CreatePost from "../pages/CreatePost";
import Layout from "../Layout";
import IndexPage from "../pages/IndexPage";
import ReadPost from "../pages/ReadPost";
import EditPost from "../pages/EditPost";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<Layout />} >
            <Route index element={<IndexPage />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/createpost"} element={<CreatePost />} />
            <Route path={"/post/:id"} element={<ReadPost />} />
            <Route path={"/edit/:id"} element={<EditPost />} />
        </Route>
    )
)