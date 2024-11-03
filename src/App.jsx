import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Feedback from './sections/Feedback.jsx';
import Services from './sections/Services.jsx';
import Portfolio from './sections/Portfolio.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <About />
        <WorkExperience />
      </section>
      <section id="services" className="min-h-screen">
        <Services />
      </section>
      <section id="portfolio" className="min-h-screen">
        <Portfolio />
      </section>
      <section id="feedback" className="min-h-screen pb-20">
        <Feedback />
      </section>
      <Footer />
    </main>
  );
};

export default App;
