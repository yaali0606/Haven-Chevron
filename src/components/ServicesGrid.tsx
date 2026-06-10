import React from 'react';
import { Settings, Droplet, Coffee, Fuel, ShieldCheck } from 'lucide-react';

export default function ServicesGrid() {
  const services: {
    title: string;
    icon: React.ReactNode;
    image: string;
    image2?: string;
    alt: string;
    description: string;
    features: string[];
    badge: string;
    badgeColor: string;
    containOverflow?: boolean;
    imageFit?: "contain" | "cover" | "fill";
    imagePosition?: string;
    stamp?: boolean;
  }[] = [
    {
      title: "NAPA AutoCare Center",
      icon: <Settings className="w-10 h-10 text-napa-yellow" />,
      image: "/Mechanic.jpg",
      alt: "NAPA AutoCare certified repair and smog service bays at Haven Chevron",
      description: "Certified ASE mechanics providing full-service automotive care. From routine oil changes to complex engine diagnostics.",
      features: ["Official California Smog Checks", "Brake System Repairs", "Check Engine Light Diagnostics"],
      badge: "Backed by the NAPA Peace of Mind Warranty",
      badgeColor: "bg-napa-yellow text-neutral-dark"
    },
    {
      title: "Propane Refills",
      icon: <Droplet className="w-10 h-10 text-blue-500" />,
      image: "/propone.jpg",
      alt: "Drive-up propane cylinder filling and tank exchange station",
      description: "Fast, convenient propane refilling services (no tank exchanges). Available seven days a week from 7:00 AM to 7:00 PM.",
      features: ["Refills: $3.99 / Gallon (~4.5 gal for 20lb)", "$10 Min. for Tanks (2.5 Gal)", "$15 Min. for RVs (3.75 Gal)", "New Full Tanks: $69.99 + tax"],
      badge: "Open Daily 7 AM - 7 PM",
      badgeColor: "bg-blue-100 text-blue-800",
      imageFit: "cover",
      imagePosition: "object-top"
    },
    {
      title: "Snack Shop & Convenience",
      icon: <Coffee className="w-10 h-10 text-chevron-red" />,
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600",
      alt: "Haven Chevron fully stocked snack shop and food center",
      description: "Your perfect pit stop for fresh provisions, hot coffee, and travel necessities.",
      features: ["Fresh Premium Coffee", "Chilled Beverages & Energy Drinks", "Rapid Grab-and-Go Snacks"],
      badge: "Chevron Rewards Accepted",
      badgeColor: "bg-red-100 text-chevron-red"
    },
    {
      title: "Chevron Techron Fuel",
      icon: <Fuel className="w-10 h-10 text-chevron-blue" />,
      image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=600",
      alt: "Haven Chevron clean refueling lanes at 6411 Haven Ave",
      description: "Unbeatable cleaning power for your engine. High-performance fuels backed by Techron technology.",
      features: ["Techron Additive Technology", "Clean Diesel Lanes Available", "Safe, Well-Lit Nighttime Pumps"],
      badge: "Open 24/7",
      badgeColor: "bg-blue-100 text-chevron-blue"
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-4">Everything You Need, All in One Place</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From professional ASE-certified auto repairs to high-quality fuel and a quick snack, Haven Chevron has you covered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100 ${service.containOverflow !== false ? 'overflow-hidden' : ''} ${service.stamp ? 'mt-6 relative' : ''}`}>
              <div className={`w-full h-[248px] relative group ${service.containOverflow !== false ? 'overflow-hidden rounded-t-lg' : 'rounded-t-lg bg-cover bg-center'}`}>
                {service.image2 ? (
                  <div className="flex w-full h-full">
                    <img 
                      src={service.image} 
                      alt={service.alt} 
                      className="w-1/2 h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <img 
                      src={service.image2} 
                      alt={service.alt + " details"} 
                      className="w-1/2 h-full object-cover object-center border-l-2 border-white transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    className={`w-full h-full ${service.imagePosition || 'object-center'} transition-transform duration-500 group-hover:scale-110 ${service.imageFit === 'contain' ? 'object-contain bg-gray-50' : service.imageFit === 'fill' ? 'object-fill' : (service.containOverflow !== false ? 'object-cover' : 'object-cover rounded-t-lg')}`}
                  />
                )}
                <div className="absolute top-4 left-4 p-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm z-10">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-neutral-dark mb-3 lg:mt-2">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <ShieldCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
