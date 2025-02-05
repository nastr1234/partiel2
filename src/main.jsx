import React from "react"
import ReactDOM from "react-dom/client"
import router from "./rooter/root.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)