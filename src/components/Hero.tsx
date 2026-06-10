import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Wrench, Droplet, Coffee, Fuel, Clock, Activity } from 'lucide-react';

export default function Hero() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getStatuses = () => {
    let hour = currentDate.getHours();
    let day = currentDate.getDay();
    try {
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        weekday: 'short',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(currentDate);
      const hourPart = parts.find(part => part.type === 'hour');
      const weekdayPart = parts.find(part => part.type === 'weekday');
      
      if (hourPart) {
        hour = parseInt(hourPart.value, 10);
        hour = hour === 24 ? 0 : hour;
      }
      if (weekdayPart) {
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const foundIndex = weekdays.indexOf(weekdayPart.value);
        if (foundIndex !== -1) day = foundIndex;
      }
    } catch (e) {
      // Fallback if timezone is not supported
    }

    const isPropaneOpen = hour >= 7 && hour < 19;
    const isAutoShopOpen = day > 0 && hour >= 8 && hour < 17;
    
    return {
      gasStation: {
        text: "Gas Station: Open 24/7",
        color: "bg-green-400",
        animate: "animate-pulse"
      },
      propane: {
        text: isPropaneOpen ? "Propane Station: Open Until 7 PM" : "Propane Station: Closed (Opens 7 AM)",
        color: isPropaneOpen ? "bg-green-400" : "bg-red-500",
        animate: isPropaneOpen ? "animate-pulse" : ""
      },
      autoShop: {
        text: isAutoShopOpen ? "NAPA AutoCare: Open Until 5 PM" : (day === 0 ? "NAPA AutoCare: Closed (Opens Mon 8 AM)" : "NAPA AutoCare: Closed (Opens 8 AM)"),
        color: isAutoShopOpen ? "bg-green-400" : "bg-red-500",
        animate: isAutoShopOpen ? "animate-pulse" : ""
      }
    };
  };

  const status = getStatuses();

  return (
    <section className="relative bg-neutral-dark text-white" aria-label="Haven Chevron clean refueling lanes at 6411 Haven Ave">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=1200")' }}
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
              href="https://www.google.com/maps/search/?api=1&query=6411+Haven+Ave,+Rancho+Cucamonga,+CA+91737"
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row justify-center items-center text-sm md:text-base font-medium">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full justify-center">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.gasStation.color} ${status.gasStation.animate}`}></span>
              <span>{status.gasStation.text}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-blue-800"></div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.propane.color} ${status.propane.animate}`}></span>
              <span>{status.propane.text}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-blue-800"></div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.autoShop.color} ${status.autoShop.animate}`}></span>
              <span>{status.autoShop.text}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
