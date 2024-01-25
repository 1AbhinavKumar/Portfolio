import Navbar from "./components /navbar";
import Home from "./components /home"
import Sociallinks from "./components /sociallinks";
import About from "./components /about";
import Portfolio from "./components /portfolio";
import Experience from "./components /experience";
import Contact from "./components /contact"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Sociallinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
