import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
import GitHubcle from "./components/Githubcal";
import Stats from "./components/Stats";
import GitHub from "./components/Githubcalender";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <GitHubcle/>
      <Stats/>
      <GitHub/>
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
