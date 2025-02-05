import "./css/normalize.css"
import "./css/style.css"
import logo from "./assets/pokemon.png"

import Footer from "./components/Footer/Footer"
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Link to="/">
        <h1>
          <img src={logo} alt="logo" />
        </h1>
      </Link>
      <div className="lmj-layout-inner">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
export default App

