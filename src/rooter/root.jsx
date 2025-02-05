import App from "../App.jsx"
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

export default router
