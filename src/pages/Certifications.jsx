import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certifications = [
    {
        title: "Software Engineering",
        organization: "Moringa School",
        year: "2025",
    },
    {
        title: "Software Development Internship",
        organization: "Internship Program",
        year: "2025",
    },
];

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="py-20 px-6 max-w-7xl mx-auto"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    Certifications & Training
                </h2>
                <p className="text-gray-400 mt-4">
                    Academic and professional achievements.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-gray-800 border border-gray-700 rounded-xl p-6"
                    >
                        <FiAward className="text-3xl text-emerald-400 mb-4" />

                        <h3 className="text-xl font-semibold">
                            {cert.title}
                        </h3>

                        <p className="text-gray-400">
                            {cert.organization}
                        </p>

                        <span className="text-blue-400">
              {cert.year}
            </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}