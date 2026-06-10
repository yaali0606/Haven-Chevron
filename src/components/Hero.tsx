import { ArrowRight, MapPin, Wrench, Droplet, Coffee, Fuel } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-neutral-dark text-white">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1625049354027-2c974dd1d908?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark via-neutral-dark/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Your Complete <span className="text-napa-yellow">Automotive</span> &amp; Roadside Hub in Rancho Cucamonga
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-10 text-lg md:text-xl text-gray-200">
            <ul className="flex flex-col gap-2 font-medium">
              <li className="flex items-center gap-2"><Fuel className="w-5 h-5 text-chevron-blue" /> Techron Fuel 24/7</li>
              <li className="flex items-center gap-2"><Wrench className="w-5 h-5 text-napa-yellow" /> Certified NAPA AutoCare Repairs</li>
              <li className="flex items-center gap-2"><Droplet className="w-5 h-5 text-blue-400" /> Daily Propane Refills</li>
              <li className="flex items-center gap-2"><Coffee className="w-5 h-5 text-chevron-red" /> Fully Stocked Snack Shop</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#service-scheduler"
              className="inline-flex justify-center items-center gap-2 bg-napa-yellow hover:bg-yellow-500 text-neutral-dark px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Car Service
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://maps.google.com/?q=6411+Haven+Ave,+Rancho+Cucamonga,+CA+91737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              <MapPin className="w-5 h-5" />
              Get Driving Directions
            </a>
          </div>
        </div>
      </div>

      {/* Status Ticker */}
      <div className="relative z-20 bg-chevron-blue border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-center text-sm md:text-base font-medium">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>Propane Station: Open Until 7 PM</span>
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <Fuel className="w-4 h-4" />
            <span>Fuel Status: Regular, Plus, Supreme &amp; Diesel In Stock</span>
          </div>
        </div>
      </div>
    </section>
  );
}
