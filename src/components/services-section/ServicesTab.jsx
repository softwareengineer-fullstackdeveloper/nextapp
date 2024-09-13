"use client";
import { useState } from "react";
import tabservices from "@/dummy-data/tabservices.json";
import ReactIcons from "@/utils/reactIcons";

const ServicesTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="services"
      className="services-section bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-16">
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-zinc-700 dark:text-white mb-8">
            Our Services
          </h2>
          <p className="text-center text-xl sm:text-2xl font-medium text-zinc-600 dark:text-gray-400 mb-0">
            Popular Hair Cutting And Salon
          </p>
          <div className="flex mt-6 mb-10 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabservices.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer p-4 sm:p-6 border border-gray-700 rounded-lg transition-all duration-300 transform ${
                  activeTab === index
                    ? "bg-yellow-700 text-white scale-105 shadow-lg"
                    : "bg-zinc-800 shadow-lg text-gray-300 hover:scale-105"
                }`}
              >
                <ReactIcons
                  name={service.icon}
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                />
                <p className="text-center mt-3 sm:mt-4">{service.name}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-zinc-800 rounded-lg shadow-xl">
            <img
              src={`/${tabservices[activeTab].imageName}`}
              alt={tabservices[activeTab].name}
              className="rounded-xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="px-6">
              <h3 className="text-2xl font-semibold text-white">
                {tabservices[activeTab].name}
              </h3>
              <p className="mt-4 text-gray-400">
                {tabservices[activeTab].content}
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-500">&#10003;</span>
                  <span className="ml-3 text-gray-300">
                    Easy to use salon special offer navigation
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500">&#10003;</span>
                  <span className="ml-3 text-gray-300">
                    We care about our customers satisfaction
                  </span>
                </li>
              </ul>
              <a href="tel:+123456789" className="inline-block mt-6 px-6 py-3 bg-yellow-700 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section id="services" className="services-section bg-gradient-to-tr from-zinc-900 to-zinc-800">
    //   <div className="container">
    //     <div className="max-w-5xl mx-auto py-12">
    //       <h2 className="text-center text-5xl font-semibold mb-8">
    //         Our Services
    //       </h2>
    //       <h3 className="text-center text-2xl font-semibold mb-8">Popular Hair Cutting And Salon</h3>
    //       <div className="flex justify-center space-x-4 mb-12">
    //         {tabservices.map((service, index) => (
    //           <div
    //             key={index}
    //             onClick={() => setActiveTab(index)}
    //             className={`cursor-pointer p-6 border rounded-lg transition ${
    //               activeTab === index ? "bg-yellow-700 text-white" : ""
    //             }`}
    //           >
    //             <ReactIcons name={service.icon} className="w-8 h-8 mx-auto" />
    //             <p className="text-center mt-4">{service.name}</p>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-black-light p-4">
    //     <img
    //       src={`/${tabservices[activeTab].imageName}`} // Replace this with the actual image path
    //       alt={tabservices[activeTab].name}
    //       className="rounded-xl"
    //     />
    //     <div className="px-6">
    //       <h3 className="text-2xl font-semibold">{tabservices[activeTab].name}</h3>
    //       <p className="mt-4 text-gray-300">{tabservices[activeTab].content}</p>
    //       <ul className="mt-4 space-y-2">
    //         <li className="flex items-center">
    //           <span className="text-yellow-700">&#10003;</span>
    //           <span className="ml-2 text-gray-300">
    //             Easy to use salon special offer navigation
    //           </span>
    //         </li>
    //         <li className="flex items-center">
    //           <span className="text-yellow-700">&#10003;</span>
    //           <span className="ml-2 text-gray-300">
    //             We care about our customers satisfaction
    //           </span>
    //         </li>
    //       </ul>
    //       <button className="mt-6 px-6 py-2 bg-yellow-700 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition">
    //         Book Now
    //       </button>
    //     </div>
    //   </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ServicesTab;
