import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ServiceScheduler from './components/ServiceScheduler';
import Testimonials from './components/Testimonials';
import LocationAndHours from './components/LocationAndHours';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-neutral-dark bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <ServiceScheduler />
        <Testimonials />
        <LocationAndHours />
      </main>
      <Footer />
    </div>
  );
}

