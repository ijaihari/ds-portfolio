
import { AboutSection } from "./pages/AboutSection.jsx";
import { AchievementsSection } from "./pages/AchievementsSection.jsx";
import { ContactSection } from "./pages/ContactSection.jsx";
import { HeroSection } from "./pages/HeroSection.jsx";
import { Navbar } from "./pages/NavBar.jsx";
import { ProjectsSection } from "./pages/ProjectsSection.jsx";
import { SkillsSection } from "./pages/SkillsSection.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}

export default App;