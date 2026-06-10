import React, { useState } from 'react';
import { Calendar, CheckCircle, ChevronRight, Clock, User, Wrench, Settings } from 'lucide-react';

type Step = 1 | 2 | 3 | 4;

export default function ServiceScheduler() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    serviceTier: '',
    year: '',
    make: '',
    model: '',
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep((prev) => (prev + 1) as Step);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          subject: "New Service Request for Haven Chevron & NAPA AutoCare",
          from_name: formData.name,
          ...formData
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setCurrentStep(4);
      } else {
        alert("There was an error submitting the form. Please call us directly at (909) 948-0102.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please call us directly at (909) 948-0102.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="service-scheduler" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-4">Schedule Your Service Bay</h2>
          <p className="text-lg text-gray-600">Skip the wait. Book your appointment securely online through our NAPA AutoCare portal.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Progress Bar */}
          {currentStep < 4 && (
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center flex-1 relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 ${
                    currentStep >= step ? 'bg-chevron-blue text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  <span className={`text-xs mt-2 font-medium hidden sm:block ${currentStep >= step ? 'text-chevron-blue' : 'text-gray-400'}`}>
                    {step === 1 ? 'Service' : step === 2 ? 'Vehicle' : 'Contact'}
                  </span>
                  {step < 3 && (
                    <div className={`absolute top-4 w-full h-1 -right-1/2 -z-0 ${
                      currentStep > step ? 'bg-chevron-blue' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="p-6 md:p-10">
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-chevron-blue" /> Select Service Tier
                </h3>
                <div className="space-y-4">
                  {['California Smog Check', 'Synthetic Oil Change', 'Brake System Repair', 'Engine Diagnostics', 'General Maintenance'].map((service) => (
                    <label key={service} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${formData.serviceTier === service ? 'border-chevron-blue bg-blue-50 ring-1 ring-chevron-blue' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input 
                        type="radio" 
                        name="serviceTier" 
                        value={service} 
                        checked={formData.serviceTier === service}
                        onChange={handleChange}
                        className="w-4 h-4 text-chevron-blue focus:ring-chevron-blue"
                      />
                      <span className="ml-3 font-medium text-gray-800">{service}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={nextStep} 
                    disabled={!formData.serviceTier}
                    className="flex items-center gap-2 bg-chevron-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next Step <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-chevron-blue" /> Vehicle Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="e.g. 2018" className="w-full border border-gray-300 rounded-md p-3 focus:ring-chevron-blue focus:border-chevron-blue outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                    <input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="e.g. Honda" className="w-full border border-gray-300 rounded-md p-3 focus:ring-chevron-blue focus:border-chevron-blue outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                    <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="e.g. Civic" className="w-full border border-gray-300 rounded-md p-3 focus:ring-chevron-blue focus:border-chevron-blue outline-none" required />
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button onClick={prevStep} className="px-6 py-3 rounded-md font-semibold text-gray-600 hover:bg-gray-100 transition-colors">Back</button>
                  <button 
                    onClick={nextStep} 
                    disabled={!formData.year || !formData.make || !formData.model}
                    className="flex items-center gap-2 bg-chevron-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next Step <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <form onSubmit={handleSubmit} className="animate-fade-in">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-chevron-blue" /> Contact & Schedule
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-chevron-blue focus:border-chevron-blue outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-chevron-blue focus:border-chevron-blue outline-none" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4"/> Preferred Date</label>
                    <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-chevron-blue focus:border-chevron-blue outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"><Clock className="w-4 h-4"/> Preferred Time</label>
                    <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 focus:ring-chevron-blue focus:border-chevron-blue outline-none" required>
                      <option value="">Select a time</option>
                      <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                      <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                      <option value="Any time">Any time</option>
                    </select>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-100 flex-wrap gap-4">
                  <div className="text-sm">
                    <p className="text-gray-500">Service selected:</p>
                    <p className="font-bold text-neutral-dark">{formData.serviceTier}</p>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <button type="button" onClick={prevStep} className="px-4 py-2 rounded-md font-semibold text-gray-600 hover:bg-gray-200 transition-colors">Back</button>
                    <button type="submit" disabled={isSubmitting} className="bg-chevron-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {currentStep === 4 && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 flex flex-col items-center text-center animate-fade-in shadow-inner">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-extrabold text-green-800 mb-4">Thank you!</h3>
                <p className="text-xl text-green-700 max-w-lg mx-auto leading-relaxed">
                  Our NAPA AutoCare team will text or call you within 15 minutes at <strong className="whitespace-nowrap">{formData.phone}</strong> to lock in your service bay.
                </p>
                <div className="mt-8">
                  <button onClick={() => {
                    setCurrentStep(1);
                    setFormData({ serviceTier: '', year: '', make: '', model: '', name: '', phone: '', preferredDate: '', preferredTime: '' });
                  }} className="text-green-600 hover:text-green-800 font-semibold underline">
                    Schedule another service
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
