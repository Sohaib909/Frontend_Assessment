import React from "react";

export default function CTASection() {
  return React.createElement(
    "section",
    {
      className:
        "relative min-h-[50vh] flex items-center justify-center px-4 py-20 md:py-32",
      style: {
        backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
     React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-br from-[#E5745D]/90 to-[#1C1F26]/90",
      "aria-hidden": "true",
    }),

     React.createElement(
      "div",
      {
        className: "relative z-10 max-w-4xl mx-auto text-center text-white",
      },
      React.createElement(
        "p",
        { className: "text-lg md:text-xl italic mb-6 font-light" },
        "Ready to take your brand to the next level?"
      ),
      React.createElement(
        "h2",
        {
          className:
            "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 leading-tight",
        },
        "WE CAN'T WAIT TO",
        React.createElement("br"),
        "HEAR FROM YOU"
      ),
      React.createElement(
        "button",
        {
          className:
            "border-white text-white hover:bg-white hover:text-black transition-colors border px-6 py-3 text-lg",
        },
        "GET STARTED"
      )
    )
  );
}
