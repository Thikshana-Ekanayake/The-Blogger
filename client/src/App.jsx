import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Regsiter.jsx";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import Login from "./pages/Login.jsx";
import Write from "./pages/Write.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/Register",
    element: <Register/>,
  },

  {
    path: "/Single",
    element: <Single/>,
  },

  {
    path: "/Login",
    element: <Login/>,
  },

  {
    path: "/write",
    element: <write/>,
  },
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
