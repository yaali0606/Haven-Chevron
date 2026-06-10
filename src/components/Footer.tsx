export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div className="col-span-1 md:col-span-2">
             <h3 className="text-white text-xl font-bold mb-4">
                <span className="text-chevron-blue">Haven Chevron</span> &amp; <span className="text-chevron-red">NAPA AutoCare</span>
             </h3>
             <p className="max-w-md mb-6 text-sm leading-relaxed">
               Your complete automotive and roadside hub in Rancho Cucamonga, delivering top-tier mechanical repair, premium fuels, and 24/7 convenience.
             </p>
             <a href="tel:9099480102" className="text-white font-bold text-lg hover:text-napa-yellow transition-colors">
               (909) 948-0102
             </a>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#service-scheduler" className="hover:text-white transition-colors">Schedule Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Propane Refills</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Smog Checks</a></li>
              <li><a href="#location-hours" className="hover:text-white transition-colors">Location &amp; Hours</a></li>
            </ul>
          </div>
          <div itemScope itemType="http://schema.org/AutoRepair">
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact Info</h4>
            <address className="not-italic text-sm space-y-2">
              <span itemProp="name" className="hidden">Haven Chevron & NAPA AutoCare Center</span>
              <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span itemProp="streetAddress">6411 Haven Ave</span><br />
                <span itemProp="addressLocality">Rancho Cucamonga</span>, <span itemProp="addressRegion">CA</span> <span itemProp="postalCode">91737</span>
              </p>
              <p>
                <span itemProp="telephone">(909) 948-0102</span>
              </p>
            </address>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Haven Chevron &amp; NAPA AutoCare Center. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
