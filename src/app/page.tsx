"use client"
import Certifications from "./component/Certifications";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Interest from "./component/Interests";
import Languages from "./component/Languages";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Ref from "./component/Reference";
import Skills from "./component/Skills";

// Inside pages/index.tsx
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Skills />
      <Contact />
      <Interest />
      <Languages />
      <Ref />
      <Footer />
    </>
  );
};

export default Home;
