import React from 'react'

function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
             <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/src/assets/HeroBg.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                 <div className="absolute left-1/4 top-1/3 hidden transform md:block">
                     
                </div>
                <div className="absolute right-1/4 top-1/2 hidden transform md:block">
                     
                </div>
            </div>

             <div className="relative flex min-h-screen items-center justify-center px-4">
                <div className="text-center">
                    <p className="mb-6 font-serif text-base italic text-white opacity-90 sm:text-lg md:text-xl">
                        Accelerate business growth with us
                    </p>
                    <h1 className="mb-8 text-4xl font-bold tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        ELEVATE YOUR
                        <br className="sm:hidden" />
                        {' '}BRAND
                    </h1>
                    <button
                        className="border border-white px-8 py-3 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                        onClick={() => console.log('Get Started clicked')}
                    >
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero

