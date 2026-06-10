import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationAndHours() {
  return (
    <section id="location-hours" className="py-24 bg-neutral-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Left Pane: Google Map */}
          <div className="w-full lg:w-1/2 h-96 lg:h-auto min-h-[400px] relative bg-gray-200 rounded-3xl overflow-hidden p-2">
            <iframe 
              className="w-full h-full min-h-[350px] rounded-2xl shadow-md border-0" 
              src="https://maps.google.com/maps?q=6411%20Haven%20Ave,%20Rancho%20Cucamonga,%20CA%2091737&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>

          {/* Right Pane: Operational Hours Matrix */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-neutral-dark mb-8">Visit Our Facility</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-chevron-blue rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark text-lg">Location</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    6411 Haven Ave<br />
                    Rancho Cucamonga, CA 91737
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-chevron-red rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark text-lg">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:9099480102" className="text-xl font-medium hover:text-chevron-red transition-colors">(909) 948-0102</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-neutral-dark mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" /> Operational Hours Matrix
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="font-medium text-gray-800">Fuel &amp; Convenience Store</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">Open 24/7</span>
                </div>
                
                <div className="pb-3 border-b border-gray-100 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">NAPA AutoCare Bays</span>
                    <span className="text-gray-600 text-sm font-medium">Mon - Sat: 8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-red-500 font-semibold tracking-wide text-sm bg-red-50 px-2 py-0.5 rounded">Sunday: CLOSED</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="font-medium text-gray-800">Propane Refills</span>
                  <span className="text-gray-600 text-sm font-medium">Mon - Sun: 7:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=6411+Haven+Ave,+Rancho+Cucamonga,+CA+91737"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-neutral-dark hover:bg-black text-white py-4 rounded-md font-bold text-lg transition-colors"
                >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
