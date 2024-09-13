'use client';
import ReactIcons from "@/utils/reactIcons";

const WhyChooseUs = () => {
  return (
    <section className="text-gray-100 bg-gradient-to-tr from-yellow-900 to-yellow-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold title-font text-white mb-4">
            Why Choose Us?
          </h1>
          <p className="text-xl sm:text-2xl font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-100 text-opacity-80">
            At Salon Name, we&apos;re dedicated to providing an exceptional grooming
            experience for men.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 mx-auto justify-center -mt-4 md:space-y-0 space-y-6 md:mb-4">
          <div className="p-4 md:w-30 mx-3 flex flex-col text-center items-center shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 bg-zinc-200 dark:bg-zinc-700">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
            <ReactIcons name="HiScissors" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-800 dark:text-white text-lg title-font font-medium mb-3">
                Expert Barbers
              </h2>
              <p className="leading-relaxed text-base text-zinc-700 dark:text-white">
                Our team of skilled barbers are trained to deliver precision
                cuts, shaves, and styles that meet your unique needs.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-30 mx-3 flex flex-col text-center items-center shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 bg-zinc-200 dark:bg-zinc-700">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
              <ReactIcons name="BsFillPersonLinesFill" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-800 dark:text-white text-lg title-font font-medium mb-3">
                Personalized Service
              </h2>
              <p className="leading-relaxed text-base text-zinc-700 dark:text-white">
                We take the time to understand your preferences and provide
                tailored advice to enhance your look.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-30 mx-3 flex flex-col text-center items-center shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 bg-zinc-200 dark:bg-zinc-700">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
              <ReactIcons name="FaLeaf" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-800 dark:text-white text-lg title-font font-medium mb-3">
                High-Quality Products
              </h2>
              <p className="leading-relaxed text-base text-zinc-700 dark:text-white">
                We use only the finest products to ensure your hair and skin
                receive the best care.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 mx-auto justify-center -mb-10 md:space-y-0 space-y-6 mt-6 md:mt-5">
          <div className="p-4 md:w-30 mx-3 flex flex-col text-center items-center shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 bg-zinc-200 dark:bg-zinc-700">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
              <ReactIcons name="GiSofa" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-800 dark:text-white text-lg title-font font-medium mb-3">
                Relaxing Atmosphere
              </h2>
              <p className="leading-relaxed text-base text-zinc-700 dark:text-white">
                Our salon is designed to provide a calm and welcoming space for
                you to unwind.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-30 mx-3 flex flex-col text-center items-center shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 bg-zinc-200 dark:bg-zinc-700">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
              <ReactIcons name="FaListCheck" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-800 dark:text-white text-lg title-font font-medium mb-3">
                Attention to Detail
              </h2>
              <p className="leading-relaxed text-base text-zinc-700 dark:text-white">
                We&apos;re meticulous about every aspect of your grooming experience,
                ensuring you leave feeling refreshed and revitalized.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-30 mx-3 flex flex-col text-center items-center shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 bg-zinc-200 dark:bg-zinc-700">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5 flex-shrink-0">
              <ReactIcons name="FaIndianRupeeSign" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-800 dark:text-white text-lg title-font font-medium mb-3">
                Competitive Pricing
              </h2>
              <p className="leading-relaxed text-base text-zinc-700 dark:text-white">
                We offer fair and transparent pricing without compromising on
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
