import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-tr from-yellow-700 to-yellow-600 dark:from-yellow-900 dark:to-yellow-700"
    >
      <div className="container px-6 py-20">
        <div className="columns-1 md:columns-2">
          <div className="column-left">
            <h2 className="text-5xl font-bold text-center mb-0 text-white">
              Who We Are
            </h2>
            <div className="flex mt-6 mb-12 justify-center">
              <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
            <div className="about-text-content text-white">
              <p className="mb-4">
                Welcome to <span>Salon Name</span>, the ultimate grooming
                destination for the modern man. Our mission is to provide a
                luxurious and rejuvenating experience, tailored to meet the
                unique needs of every gentleman who walks through our doors.
              </p>
              <p className="mb-4">
                At <span>Salon Name</span>, we believe that grooming is not just
                about looking good, but feeling great too. Our team of expert
                stylists and technicians are dedicated to delivering exceptional
                service, using only the finest products and latest techniques to
                ensure you leave feeling refreshed, revitalized, and ready to
                take on the world.
              </p>
              <p className="mb-4">
                From stylish haircuts and precision shaving to rejuvenating spa
                treatments and personalized grooming advice, we offer a
                comprehensive range of services designed to help you look and
                feel your absolute best. Whether you&apos;re a busy professional, a
                stylish socialite, or simply someone who appreciates the finer
                things in life, we invite you to experience the
                <span> Salon Name</span> difference.
              </p>
              <h3 className="mb-4">Our Values:</h3>
              <ul>
                <li>
                  <strong>Quality:</strong> We&apos;re committed to delivering
                  exceptional service and unparalleled quality in everything we
                  do.
                </li>
                <li>
                  <strong>Style:</strong> We&apos;re passionate about helping you
                  look and feel your absolute best.
                </li>
                <li>
                  <strong>Relaxation:</strong> We believe that grooming should
                  be a rejuvenating experience, not a chore.
                </li>
                <li>
                  <strong>Community:</strong> We&apos;re dedicated to building a
                  welcoming and inclusive environment for all our clients.
                </li>
              </ul>
            </div>
          </div>
          <div className="column-right">
            <Image
              src="/istockphoto-1397799794-612x612.jpg"
              alt="About Us"
              width={500}
              height={500}
              className="rounded-full m-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
