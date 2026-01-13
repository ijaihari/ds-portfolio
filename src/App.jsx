
import { AboutSection } from "./pages/AboutSection.jsx";
import { ContactSection } from "./pages/ContactSection.jsx";
import { HeroSection } from "./pages/HeroSection.jsx";
import { Navbar } from "./pages/NavBar.jsx";
import { SkillsSection } from "./pages/SkillsSection.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection/>
    </div>
  );
}

export default App;