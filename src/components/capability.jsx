import React from "react";

const BrandImpact = () => {
  return (
    <section className="w-full bg-white">
       <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="space-y-4">
            <img
              src="/src/assets/b1.jpg"
              alt="Dynamic workspace strategy"
              className="w-full h-[300px] object-cover"
            />
            <h3 className="text-xl font-semibold">DYNAMIC WORKSPACE STRATEGY</h3>
            <p className="text-gray-600">
              Transform your workspace into a hub of innovation and collaboration
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="/src/assets/b2.jpg"
              alt="Direct to consumer"
              className="w-full h-[300px] object-cover"
            />
            <h3 className="text-xl font-semibold">DIRECT TO CONSUMER</h3>
            <p className="text-gray-600">
              Connect directly with your audience through innovative channels
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="/src/assets/b3.jpg"
              alt="Retail operations"
              className="w-full h-[300px] object-cover"
            />
            <h3 className="text-xl font-semibold">RETAIL</h3>
            <p className="text-gray-600">
              Optimize your retail operations for maximum efficiency and impact
            </p>
          </div>
        </div>

         <div className="mb-20">
          <img
            src="/src/assets/b4.jpg"
            alt="Team photo"
            className="w-full h-[600px] object-cover mb-8"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Success is a team sport
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            We believe in the power of collaboration and teamwork. Our success is measured
            by the collective achievements of our partners and the lasting impact we create together.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="space-y-8">
            <img
              src="/src/assets/b5.jpg"
              alt="Team meeting"
              className="w-full aspect-square object-cover"
            />
            <div>
              <h4 className="font-semibold mb-2">Strategic Planning</h4>
              <p className="text-gray-600">
                Developing comprehensive strategies for sustainable growth
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="/src/assets/b6.jpg"
              alt="Team building"
              className="w-full aspect-square object-cover"
            />
            <div>
              <h4 className="font-semibold mb-2">Team Building</h4>
              <p className="text-gray-600">
                Creating strong bonds and collaborative environments
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="/src/assets/b7.jpg"
              alt="Office collaboration"
              className="w-full aspect-square object-cover"
            />
            <div>
              <h4 className="font-semibold mb-2">Collaborative Workspace</h4>
              <p className="text-gray-600">
                Fostering innovation through dynamic work environments
              </p>
            </div>
          </div>
        </div>

         <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Increase the impact of your brand
          </h2>
          <p className="text-gray-600 mb-8">
            Transform your brand's potential into measurable success through our proven
            strategies and collaborative approach to growth.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandImpact;
