import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../components/Post";
import CreatePost from "../pages/CreatePost";

export const route = createBrowserRouter(
    createRoutesFromElements(

        <Route path={"/"} element={<App />} >
            <Route index element={<Post />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/createpost"} element={<CreatePost />} />
        </Route>
    )
)