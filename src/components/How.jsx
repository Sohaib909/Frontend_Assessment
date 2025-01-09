import React from "react";

const HowWeDoIt = () => {
  return (
    <section className="bg-rose-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
          How we do it
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
           <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/src/assets/how1.svg"
                alt="Sharing Expertise Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">
              Sharing Expertise
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-sm">
              We give you access to insights from our experts in operations,
              supply chain, retail, and marketing.
            </p>
          </div>

          {/* Accelerating Growth */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/src/assets/how2.svg"
                alt="Accelerating Growth Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">
              Accelerating Growth
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-sm">
              Through our multi-channel, data-driven approach, we help you reach
              new markets and customers.
            </p>
          </div>

           <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/src/assets/how3.svg"
                alt="Promoting Teamwork Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">
              Promoting Teamwork
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-sm">
              By leveraging our operational insights and your industry expertise,
              we'll build a world-class team that achieves excellent results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
