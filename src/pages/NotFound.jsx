import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
            <motion.h1
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-8xl font-bold text-blue-400"
            >
                404
            </motion.h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-400 mt-4 max-w-lg">
                The page you are looking for does not exist or may have been moved.
            </p>

            <Link
                to="/"
                className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg text-white"
            >
                Return Home
            </Link>
        </div>
    );
}