import React, { useState } from 'react'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      subtitle: "What We Do",
      title: "Taking Brands to the Next Level",
      description: "With access to our capital, distribution channels, and talent, you're empowered to take your brand to new heights."
    },
    {
      subtitle: "Our Process",
      title: "Strategic Brand Development",
      description: "We leverage industry expertise and innovative solutions to elevate your brand's market presence and drive sustainable growth."
    },
    {
      subtitle: "Our Impact",
      title: "Measurable Results",
      description: "Our proven track record shows consistent success in transforming brands and achieving remarkable market outcomes."
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative">
         <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-400">
            {slides[currentSlide].subtitle}
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[56px]">
            {slides[currentSlide].title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {slides[currentSlide].description}
          </p>
        </div>

         <button 
          onClick={prevSlide}
          className="group absolute left-0 top-1/3 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
          aria-label="Previous slide"
        >
          <svg 
            className="h-6 w-6 text-gray-400 transition-colors group-hover:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="group absolute right-0 top-1/3 flex h-12 w-12 translate-x-1/2 transform items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
          aria-label="Next slide"
        >
          <svg 
            className="h-6 w-6 text-gray-400 transition-colors group-hover:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

         <div className="mt-12 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-gray-900 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider

