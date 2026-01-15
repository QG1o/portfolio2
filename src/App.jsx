import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import CustomCursor from './common/CustomCursor';
import LoadingScreen from './common/LoadingScreen';
import ThemeTransition from './common/ThemeTransition';

function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ThemeTransition />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
