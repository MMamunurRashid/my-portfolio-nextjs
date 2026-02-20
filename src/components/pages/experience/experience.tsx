"use client";

import { useEffect, useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const experiences = [
    {
        role: "Software Engineer",
        company: "eManager IT LTD",
        period: "August 2025 - Present",
        description: [
            "Develop and maintain scalable web applications using MongoDB, Express.js, React.js, Next.js and Node.js.",
            "Design and implement RESTful APIs with efficient data structures and optimized database queries.",
            "Build responsive, interactive front-end interfaces with React.js, ensuring cross-browser compatibility and performance.",
            "Integrate authentication and authorization mechanisms such as JWT and role-based access control.",
            "Optimize backend performance and ensure scalability through effective query handling and API design.",
            "Collaborate with UI/UX teams to deliver seamless user experiences.",
        ],
        projects: [
            {
                name: "ERP Solution",
                details: [
                    "Implemented a modular, scalable ERP system integrating CRM, HRM, Accounting, Taxation, and Task Management into a unified platform.",
                    "Developed role-based dashboards and workflow automation to streamline operations, employee management, financial tracking, and compliance processes.",
                    "Optimized database performance and reporting through structured API architecture and efficient data handling.",                    
                ],
                tech: ["Next.js", "TypeScript", "Redux", "NodeJs", "ExpressJs", "Zod", "TailwindCSS", "MongoDB"],
            },
            {
                name: "E-commerce Solution",
                details: [
                    "Built a comprehensive e-commerce platform with features like product management, shopping cart, order processing, and user dashboards.",
                    "Implemented secure authentication, payment integration, and optimized performance for a seamless shopping experience.",
                    "Implemented CI/CD pipelines, Dockerized applications, and automated deployments.",

                ],
                tech: ["Next.js", "TypeScript", "NodeJs", "ExpressJs", "MongoDB", "TailwindCSS", "SCSS"],
            }
        ],
    },
    {
        role: "Full Stack Developer",
        company: "Halcyon Digital",
        period: "June 2024 - August 2025",
        description: [
            "Developed scalable APIs and database solutions with Node.js, Express, and MySQL.",
            "Building modern, fast, and accessible web applications with Next.js, TypeScript, Redux, TailwindCSS, etc.",
            "Implemented CI/CD pipelines, Dockerized applications, and automated deployments.",
        ],
        projects: [
            {
                name: "Gcart - E-commerce",
                details: [
                    "Built engaging Add to Cart, Wishlist, and Checkout features for a seamless shopping experience.",
                    "Designed dynamic User and Admin Dashboards for efficient management.",
                    "Optimized e-commerce workflows for performance and user satisfaction.",
                ],
                tech: ["Next.js", "TypeScript", "NodeJs", "ExpressJs", "MongoDB", "TailwindCSS", "SCSS"],
            },
        ],
    },
    {
        role: "Frontend Engineer Intern",
        company: "Qwik IT Services",
        period: "November 2023 - December 2023",
        description: [
            "Built modern, fast, and accessible web applications with Next.js, TypeScript, and TailwindCSS.",
            "Collaborated with backend and ui teams to improve API performance and UX.",
        ],
        projects: [
            {
                name: "Quick - Mart",
                details: [
                    "Designed and managed functionalities of Add To Cart, Wishlist.",
                    "Implemented order processing, checkout, and user dashboard management.",
                ],
                tech: ["Next.js", "JavaScript", "Django", "Django REST Framework", "MySQL", "TailwindCSS", "SwiperJs"],
            },
        ],
    },
];

export default function Experiences() {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <section ref={ref} className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
                    Experiences
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-5 md:mb-10">
                    A journey of learning, building, and solving problems with modern technologies.
                </p>
                <div className="relative border-l-4 border-gray-300 dark:border-gray-700 pl-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={controls}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            className="relative mb-10"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-8 top-0 bg-gray-300 dark:bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
                                <Briefcase className="text-gray-900 dark:text-gray-100" size={18} />
                            </div>

                            {/* Experience Card */}
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{exp.role}</h2>
                                <h3 className="text-md font-medium text-gray-700 dark:text-gray-400">
                                    {exp.company} <span className="text-gray-500">| {exp.period}</span>
                                </h3>

                                {/* Role Description with Custom Bullet Points */}
                                <ul className="mt-3 space-y-1 text-gray-700 dark:text-gray-400">
                                    {exp.description.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-blue-500 dark:text-blue-400 mr-2">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Desktop View: Always Show Projects */}
                                <div className="hidden md:block mt-4">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Projects I Worked On:</h4>
                                    {exp.projects.map((project, i) => (
                                        <div key={i} className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                            <h5 className="text-md font-medium text-gray-900 dark:text-gray-100">{project.name}</h5>
                                            <ul className="list-disc list-inside mt-1 text-gray-700 dark:text-gray-400">
                                                {project.details.map((point, j) => (
                                                    <li key={j}>{point}</li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Tech Stack:</span>
                                                {project.tech.map((tech, j) => (
                                                    <span
                                                        key={j}
                                                        className="text-xs px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile View: Accordion for Projects */}
                                <div className="md:hidden mt-4">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded-lg"
                                    >
                                        <span>{openIndex === index ? "Hide Details" : "See Details"}</span>
                                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>

                                    <motion.div
                                        animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={`overflow-hidden mt-2 bg-gray-100 dark:bg-gray-800 rounded-lg ${openIndex === index ? "p-3" : "p-0"
                                            }`}
                                    >
                                        {openIndex === index &&
                                            exp.projects.map((project, i) => (
                                                <div key={i} className="mt-2">
                                                    <h5 className="text-md font-medium text-gray-900 dark:text-gray-100">{project.name}</h5>
                                                    <ul className="list-disc list-inside mt-1 text-gray-700 dark:text-gray-400">
                                                        {project.details.map((point, j) => (
                                                            <li key={j}>{point}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
