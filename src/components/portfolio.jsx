import React from 'react'

function Portfolio() {
    const portfolioItems = [
        {
            category: "BABY AND TODDLER",
            description: "We'll extend your reach on e-commerce platforms, capturing new audiences and increasing sales.",
            imageUrl: "/src/assets/image1.jpg"
        },
        {
            category: "PETS",
            description: "We'll extend your reach on e-commerce platforms, capturing new audiences and increasing sales.",
            imageUrl: "/src/assets/image2.jpg"
        },
        {
            category: "HEALTH AND PERSONAL CARE",
            description: "Our experts help you refine and enhance your product offer, integrating new technologies and innovations.",
            imageUrl: "/src/assets/images3.jpg"
        }
    ]

    return (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
             <div className="mb-16 text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-400">
                    Our Portfolio
                </p>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                    Explore our brands in transformation
                </h2>
                <p className="mx-auto max-w-2xl text-base text-gray-600">
                    Please add new text. This is from 'Branded' page. Dive in to see how our brands are growing. We're just getting started.
                </p>
            </div>

             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="group">
                         <div className="mb-6 overflow-hidden">
                            <div className="aspect-w-4 aspect-h-3 relative">
                                 <div className="h-full w-full bg-gray-100">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.category}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                         <div>
                            <h3 className="mb-4 text-xl font-bold text-gray-900">
                                {item.category}
                            </h3>
                            <p className="text-base text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio

