import { AboutSection } from "./pages/AboutSection.jsx";
import { HeroSection } from "./pages/HeroSection.jsx";
import { Navbar } from "./pages/NavBar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="scroll-mt-10">
        <HeroSection />
      </section>
      <section id="about" className="scroll-mt-10">
        <AboutSection />
      </section>
    </div>
  );
}

export default App;