import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "EXPERIENCE A MILE WIDE",
      description:
        "We're a team of experts in building digital storefront environments, websites, and fly-wheels to help you grow your business.",
      imagePath: "/src/assets/f1.png",
    },
    {
      title: "BUILDING SUCCESSFUL TEAMS",
      description:
        "To help you thrive in a complex digital world, we need to help you attract talent to your business. We'll help you build the right team.",
      imagePath: "/src/assets/f2.png",
    },
    {
      title: "PRODUCT DEVELOPMENT EXPERTISE",
      description:
        "Innovation drives you, we help make your startup products more successful through our proven portfolio of work.",
      imagePath: "/src/assets/f3.png",
    },
    {
      title: "TAILORING DEALS TO BRAND OWNERS",
      description:
        "With flexible acquisition structures, we work with you to create and execute business plans and growth strategies.",
      imagePath: "/src/assets/f4.png",
    },
    {
      title: "BUILDING LEGACIES",
      description:
        "At Monolith, we're passionate about helping entrepreneurs grow their business, and we're here to help you build to the future.",
      imagePath: "/src/assets/f5.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1F26] text-white py-16 px-4 md:px-8 lg:px-16">
       <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
          Why Monolith?
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Building a legacy with your brand's magic
        </h1>
        <p className="text-gray-400 text-lg">
          You're running a unique business with products people love. Now it's
          time to build the business you've always wanted. We'll show you how
          to grow your business with proven methods, and help you build to the
          future.
        </p>
      </div>

       <div className="max-w-4xl mx-auto space-y-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 md:gap-16`}
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-square relative">
                <div className="w-56 h-56 mx-auto   flex items-center justify-center rounded-lg">
                  <img
                    src={feature.imagePath}
                    alt={feature.title}
                    className="w-100 h-56 object-contain p-4"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h3 className="text-lg font-semibold tracking-wider">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

       <div className="max-w-4xl mx-auto text-center mt-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Ready to realise your brand vision?
        </h2>
        <button className="px-8 py-3 border border-white/20   hover:bg-white/10 transition-colors duration-300">
          LET'S CONNECT
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;
