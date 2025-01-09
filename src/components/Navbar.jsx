import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                     <a href="/" className="flex items-center gap-2">
                        <img src="/src/assets/logo.svg" alt="Monolith Logo" className="h-8" />
                        <span className="text-lg font-bold tracking-wider">MONOLITH</span>
                    </a>

                     <div className="hidden lg:flex items-center space-x-8">
                        <a href="#what-we-do" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                            WHAT WE DO
                        </a>
                        <a href="#how-we-do-it" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                            HOW WE DO IT
                        </a>
                        <a href="#why-monolith" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                            WHY MONOLITH?
                        </a>
                        <a href="#product-categories" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                            PRODUCT CATEGORIES
                        </a>
                        <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                            ABOUT
                        </a>
                        <a href="#talent" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                            TALENT
                        </a>
                    </div>

                     <div className="hidden lg:block">
                        <a
                            href="#contact"
                            className="rounded bg-gray-100 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                        >
                            GET IN TOUCH
                        </a>
                    </div>

                     <button
                        className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                 <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a
                            href="#what-we-do"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            WHAT WE DO
                        </a>
                        <a
                            href="#how-we-do-it"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            HOW WE DO IT
                        </a>
                        <a
                            href="#why-monolith"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            WHY MONOLITH?
                        </a>
                        <a
                            href="#product-categories"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            PRODUCT CATEGORIES
                        </a>
                        <a
                            href="#about"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            ABOUT
                        </a>
                        <a
                            href="#talent"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            TALENT
                        </a>
                        <a
                            href="#contact"
                            className="block mt-4 rounded bg-gray-100 px-4 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

