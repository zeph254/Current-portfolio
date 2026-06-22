import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-20 px-6 max-w-7xl mx-auto"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    Experience
                </h2>
            </div>

            <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-8"
            >
                <h3 className="text-2xl font-semibold text-blue-400">
                    Volunteer ICT Software Developer
                </h3>

                <p className="text-emerald-400 mt-2">
                    Taita Taveta County Government
                </p>

                <p className="text-gray-500 mb-4">
                    2026 – Present
                </p>

                <ul className="space-y-2 text-gray-300">
                    <li>
                        • Supporting software development initiatives within the ICT Department.
                    </li>

                    <li>
                        • Assisting with digital transformation projects and system implementation.
                    </li>

                    <li>
                        • Collaborating with ICT professionals on county technology solutions.
                    </li>

                    <li>
                        • Gaining practical experience in public-sector software engineering.
                    </li>
                </ul>
            </motion.div>
        </section>
    );
}