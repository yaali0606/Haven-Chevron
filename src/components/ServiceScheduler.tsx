import React from 'react';
import { Phone, Wrench } from 'lucide-react';

export default function ServiceScheduler() {
  return (
    <section id="service-scheduler" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-4">Schedule Your Service Bay</h2>
          <p className="text-lg text-gray-600">Give us a call to book your appointment with our certified NAPA AutoCare team.</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100 shadow-md">
           <Wrench className="w-16 h-16 text-chevron-blue mx-auto mb-6" />
           <h3 className="text-2xl font-bold text-neutral-dark mb-4">Ready for Service?</h3>
           <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
             Our friendly staff is ready to help you schedule your next oil change, smog check, repairs, estimates, or diagnostics. Call us today to lock in your spot.
           </p>
           <a href="tel:9099480102" className="inline-flex items-center gap-3 bg-chevron-red text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl">
             <Phone className="w-6 h-6" />
             (909) 948-0102
           </a>
        </div>
      </div>
    </section>
  );
}
