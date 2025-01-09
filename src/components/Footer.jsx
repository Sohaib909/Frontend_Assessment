import React from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    const navigationLinks = {
        main: [
            { name: "WHAT WE DO", href: "#" },
            { name: "HOW WE DO IT", href: "#" },
            { name: "OUR AREAS OF FOCUS", href: "#" },
            { name: "WHY MONOLITH?", href: "#" },
            { name: "ABOUT", href: "#" },
        ],
        legal: [
            { name: "TERMS OF SERVICE", href: "#" },
            { name: "PRIVACY POLICY", href: "#" },
        ],
    };

    const socialLinks = [
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "Facebook", icon: Facebook, href: "#" },
        { name: "Instagram", icon: Instagram, href: "#" },
    ];

    return React.createElement(
        "footer",
        { className: "bg-[#2A2D36] text-white py-16" },
        React.createElement(
            "div",
            { className: "container mx-auto px-4 md:px-6" },
            React.createElement(
                "div",
                { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" },
                 React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "a",
                        { href: "/", className: "inline-block" },
                        React.createElement("img", {
                            src: "/src/assets/flogo.svg",
                            alt: "Monolith",
                            className: "h-10"
                        })
                    )
                ),
                 React.createElement(
                    "div",
                    { className: "space-y-4" },
                    React.createElement(
                        "nav",
                        { className: "space-y-3" },
                        navigationLinks.main.map((link) =>
                            React.createElement(
                                "div",
                                { key: link.name },
                                React.createElement(
                                    "a",
                                    {
                                        href: link.href,
                                        className:
                                            "text-sm hover:text-gray-300 transition-colors",
                                    },
                                    link.name
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "nav",
                        { className: "space-y-3 pt-4" },
                        navigationLinks.legal.map((link) =>
                            React.createElement(
                                "div",
                                { key: link.name },
                                React.createElement(
                                    "a",
                                    {
                                        href: link.href,
                                        className:
                                            "text-sm hover:text-gray-300 transition-colors",
                                    },
                                    link.name
                                )
                            )
                        )
                    )
                ),
                 React.createElement(
                    "div",
                    { className: "space-y-6" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h3",
                            { className: "text-sm mb-4" },
                            "GET IN TOUCH"
                        ),
                        React.createElement(
                            "div",
                            { className: "flex space-x-4" },
                            socialLinks.map((social) =>
                                React.createElement(
                                    "a",
                                    {
                                        key: social.name,
                                        href: social.href,
                                        className: "hover:text-gray-300 transition-colors",
                                        "aria-label": social.name,
                                    },
                                    React.createElement(social.icon, { className: "h-5 w-5" })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            {
                                href: "#",
                                className:
                                    "text-lg font-semibold hover:text-gray-300 transition-colors",
                            },
                            "WE'RE HIRING!"
                        )
                    )
                )
            )
        )
    );
}
