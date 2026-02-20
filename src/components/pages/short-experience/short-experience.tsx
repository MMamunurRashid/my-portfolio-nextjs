"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const shortExperiences = [
    {
        role: "Software Engineer",
        company: "eManager IT LTD",
        period: "August 2025 - Present",
        description: [
            "Develop and maintain scalable web applications using MongoDB, Express.js, React.js, Next.js and Node.js.",
            "Design and implement RESTful APIs with efficient data structures and optimized database queries.",
            "Build responsive, interactive front-end interfaces with React.js, ensuring cross-browser compatibility and performance.",        
            "Collaborate with UI/UX teams to deliver seamless user experiences.",
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
    },    
];

export default function ShortExperience() {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
                    Experiences
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-5 md:mb-10">
                    A journey of learning, building, and solving problems with modern technologies.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {shortExperiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group p-[2px] rounded-2xl bg-gradient-to-br from-blue-500/50 via-purple-500/30 to-pink-500/30 transition duration-300 hover:shadow-[0_0_40px_4px_rgba(99,102,241,0.3)]"
                        >
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-[inherit] border border-gray-200 dark:border-gray-700 transition-colors duration-300 h-full flex flex-col">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                                        <Briefcase className="text-blue-600 dark:text-blue-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {exp.company}{" "}
                                            <span className="text-sm text-gray-500">| {exp.period}</span>
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-1 text-gray-700 dark:text-gray-400 flex-1">
                                    {exp.description.map((point, j) => (
                                        <li key={j} className="flex items-start">
                                            <span className="text-blue-500 dark:text-blue-400 mr-2">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/experience"
                        className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline transition"
                    >
                        View Full Experience →
                    </Link>
                </div>
            </div>
        </section>
    );
}
