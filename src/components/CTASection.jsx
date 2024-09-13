import React from "react";

const CTASection = () => {
  return (
    <section id="cta" className="cta-section bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-16">
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-zinc-800 dark:text-white mb-6">
            Get Started
          </h2>
          <p className="text-center text-xl sm:text-2xl font-medium text-yellow-700 mb-0">
          Ready to Experience the Ultimate Grooming Destination?
          </p>
          <p className="text-center text-base sm:text-lg font-medium text-zinc-700 dark:text-gray-400 mt-2">
          Take the first step towards transforming your look and feeling your best. Book your appointment today and discover why [Salon Name] is the go-to destination for men's grooming.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
          <div className="flex justify-center mt-6">
            <a href="/contact" className="bg-yellow-700 text-white py-2 px-4 rounded hover:bg-yellow-600 font-semibold">
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
