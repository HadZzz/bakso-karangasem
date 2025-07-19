import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
