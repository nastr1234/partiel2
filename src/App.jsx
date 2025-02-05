import "./css/style.css";
import Footer from "./assets/components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <header>
        <nav className="desktop-nav">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
          <ul>
            <li><Link to="/films">Films</Link></li>
            <li><Link to="/series">Séries</Link></li>
            <li><Link to="/populaires">Populaires</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;