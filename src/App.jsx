import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    /* This wrapper ensures the footer stays at the bottom */
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />
      
      {/* flex-grow-1 fills the empty space to push the footer down */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;