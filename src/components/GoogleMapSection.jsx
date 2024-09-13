'use client';
const GoogleMapSection = () => {
  return (
    <section className="isolate bg-gray-900">
      <div className="w-full h-full">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Gorakhnath%20road,%20Gorakhpur,%20Uttar%20Pradesh,%20India+(Next%20App)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </div>
    </section>
  );
};

export default GoogleMapSection;
