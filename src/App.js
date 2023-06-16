import ProductList from "./features/ProductList/ProductList";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";






import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },

  {
    path: "/login",
    element: <LoginPage>
    </LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage>
    </SignUpPage>,
  },
]);


export default function App() {
  return (
    <>
    {/* <Home/> */}
    {/* <LoginPage/> */}
    <RouterProvider router={router}/>

    </>
  )
}