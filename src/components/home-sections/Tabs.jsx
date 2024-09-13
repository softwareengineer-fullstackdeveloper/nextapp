"use client";

import { useState } from "react";
import {
  FaScissors,
  FaWandSparkles,
  FaRegFaceSmileBeam,
  FaHands,
} from "react-icons/fa6";
import { HiColorSwatch } from "react-icons/hi";
import { GiRazor } from "react-icons/gi";

const services = [
  {
    name: "Trend Haircut",
    icon: FaScissors,
    content: "Content for Trend Haircut",
  },
  {
    name: "Hair Washing",
    icon: FaWandSparkles,
    content: "Content for Hair Washing",
  },
  {
    name: "Hair Color",
    icon: HiColorSwatch,
    content: "Content for Hair Color",
  },
  {
    name: "Facial hair trim",
    icon: FaRegFaceSmileBeam,
    content: "Content for Facial Hair Trim",
  },
  { name: "Lather shave", icon: GiRazor, content: "Content for Lather Shave" },
  { name: "Head Massage", icon: FaHands, content: "Content for Head Massage" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(3);
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Popular Hair Cutting And Salon
      </h2>
      <div className="flex justify-center space-x-4 mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer p-6 border rounded-lg shadow-md transition ${
              activeTab === index ? "bg-yellow-500 text-white" : "bg-white"
            }`}
          >
            <service.icon
              className={`w-8 h-8 mx-auto ${
                activeTab === index ? "text-white" : "text-yellow-500"
              }`}
            />
            <p
              className={`text-center mt-4  ${
                activeTab === index ? "text-white" : "text-black-dark"
              }`}
            >
              {service.name}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="/slide1.webp" // Replace this with the actual image path
          alt={services[activeTab].name}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h3 className="text-2xl font-semibold">{services[activeTab].name}</h3>
          <p className="mt-4 text-gray-600">{services[activeTab].content}</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="text-yellow-500">&#10003;</span>
              <span className="ml-2 text-gray-700">
                Easy to use salon special offer navigation
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500">&#10003;</span>
              <span className="ml-2 text-gray-700">
                We care about our customers satisfaction
              </span>
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
