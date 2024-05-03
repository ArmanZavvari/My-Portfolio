import { Fragment } from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import About from '../components/HomePage/About';
import ProfessionalExp from '../components/HomePage/ProfessionalExp';
import Projects from '../components/HomePage/Projects/Projects';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <ProfessionalExp />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
