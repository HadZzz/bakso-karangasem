import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import InternalLinks from './components/InternalLinks';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Blog />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
        <InternalLinks />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
