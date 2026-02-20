"use client";

import MovingBorderButton from "@/components/button/moving-border-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow, FaGraduationCap, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import Footer from "@/components/footer/footer";
import { About } from "@/components/pages/about/about";

export default function AboutPage() {
    return (
        <div>
            <About/>
            <section className="min-h-screen py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/mamun-con.jpg"
                            alt="Md Mamunur Rashid"
                            width={500}
                            height={500}
                            className="rounded-2xl w-full object-cover shadow-xl"
                        />
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            About Me
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            Hey! I&apos;m <span className="font-semibold text-blue-600 dark:text-blue-400">Md Mamunur Rashid</span>, a passionate <span className="font-semibold">Full Stack Developer</span> crafting performant, scalable web apps with modern tools like React, Node.js, and MongoDB.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            I&apos;m always exploring new tech and building things that make people&apos;s lives better. Whether it’s designing sleek UIs or solving backend logic, I love every bit of the process.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link href="/projects" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-2 rounded-full transition">
                                View My Projects
                            </Link>
                            <Link href="/contact">
                                <MovingBorderButton title="Contact Me" icon={<FaLocationArrow />} position="right" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* More Details */}
                <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <FaGraduationCap /> Education
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            🎓 B.Sc. in Computer Science<br />
                            📍 IUBAT - International University of Business Agriculture and Technology, Dhaka<br />
                            📅 Graduation: December 2023
                        </p>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <FaMapMarkerAlt /> Location
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            📍 Dhaka, Bangladesh<br />
                            Available for remote & freelance opportunities.
                        </p>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <BiCodeAlt /> Skills
                        </h2>
                        <ul className="text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-y-2 list-disc list-inside">
                            <li>JavaScript / TypeScript</li>
                            <li>React / Next.js</li>
                            <li>Node.js / Express</li>
                            <li>MySQL / MongoDB</li>
                            <li>Tailwind CSS / SCSS</li>
                            <li>REST APIs / Firebase</li>
                        </ul>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <FaBriefcase /> Experience
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            💼 Software Engineer @ eManager IT LTD<br />
                            🗓️ August 2025 – Present<br />
                            <span >🚀 Develop and maintain scalable web applications using MERN stack, design RESTful APIs, and build responsive front-end interfaces.</span>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-5">
                            💼 Full Stack Developer @ Halcyon Digital<br />
                            🗓️ June 2024 – August 2025<br />
                            🚀 Built scalable dashboards, APIs, and responsive UIs with React & Node.js.
                        </p>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
