import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "The owner and staff treat everyone fairly! Highly professional, and I plan to have all my service work done here from now on.",
      author: "Jeep Wrangler Owner",
      rating: 5
    },
    {
      text: "The people at this shop are outstanding! They took my car for a smog check and did it in fifteen minutes. Whenever my tires need air, they are right there to help.",
      author: "Honda CR-V Owner",
      rating: 5
    },
    {
      text: "Take your car to this place if you want an honest assessment of what work it needs and get the job done right the first time. I have been going here for years.",
      author: "VW Beetle Owner",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-neutral-dark text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Trusted by Rancho Cucamonga Drivers</h2>
          <p className="text-gray-300 text-lg">Real reviews from our loyal local customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative transition-transform hover:-translate-y-1">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-napa-yellow text-napa-yellow" />
                ))}
              </div>
              <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-chevron-blue flex items-center justify-center font-bold">
                  {review.author.charAt(0)}
                </div>
                <span className="font-semibold text-white">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
