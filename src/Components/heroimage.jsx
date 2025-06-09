import React from 'react'
import { motion } from "framer-motion";
import logo from "../assets/photo.png";

const heroimage = () => {
  return (
    <div className="relative flex items-center justify-center mt-20 mb-0">
      {/* SVG Circle with Gradient Stroke */}
      <svg
        width="506"
        height="506"
        viewBox="0 0 506 506"
        className="absolute z-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" /> {/* indigo-500 */}
            <stop offset="100%" stopColor="#14B8A6" /> {/* teal-400 */}
          </linearGradient>
        </defs>

        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="url(#gradStroke)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: "24 10 0 0",
          }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 12, // slower animation
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Main Profile Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] z-10"
      >
        <img
          src={logo}
          alt="Hero"
          className="object-contain w-full h-full"
        />
      </motion.div>
    </div>
  )
}

export default heroimage