import Carousel from "@/components/Carousel";
import CTASection from "@/components/CTASection";
import GoogleMapSection from "@/components/GoogleMapSection";
import AboutSection from "@/components/home-sections/AboutSection";
import ServicesTab from "@/components/services-section/ServicesTab";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <>
    <Carousel />
    <AboutSection />
    <ServicesTab />
    <WhyChooseUs />
    <CTASection />
    <GoogleMapSection />
    </>
  );
}
