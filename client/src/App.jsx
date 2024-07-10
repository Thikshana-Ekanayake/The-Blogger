import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import Login from "./pages/Login.jsx";
import Write from "./pages/Write.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "./style.scss";
const Layout = () => {
  return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/post/:id",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      }

    ]
  },

    {
        path : "/login",
        element: <Login />
    }
]);

function App() {
  return (
      <div className="app">
          <div className="container">
              <RouterProvider router={router} />
          </div>
      </div>
  );
}

export default App;
