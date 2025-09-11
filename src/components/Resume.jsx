import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import resumePreview from "../assets/resume.png";
import resumePDF from "../assets/Lavish_Meena.pdf";

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 👇 wrapper to fix navbar overlap
    <div className="scroll-mt-[160px]">
      <div className="mt-20 max-w-5xl mx-auto">
        {/* Gradient Border Card */}
        <div className="bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-600 p-[1px] rounded-[20px] shadow-lg">
          {/* Inner content with dark background */}
          <div className="bg-black-100 rounded-[20px] p-8 lg:p-10">
            {/* Grid: left = content, right = preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT COLUMN */}
              <motion.div
                variants={fadeIn("left", "spring", 0.2, 0.75)}
                className="flex flex-col justify-center items-center text-center px-4 py-6"
              >
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
                  Explore My Resume
                </h2>

                <p className="mt-8 text-secondary text-[17px] md:text-md leading-relaxed max-w-md">
                  My resume provides a structured overview of my professional background, highlighting key skills, experiences, and academic milestones.
                  It reflects my growth, capabilities, and dedication to continuous learning and excellence.
                </p>

                {/* Download Button */}
                <div className="mt-16">
                  <motion.a
                    variants={fadeIn("up", "spring", 0.4, 0.75)}
                    href={resumePDF}
                    download="Lavish_Meena_Resume.pdf"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-md transition"
                  >
                    Download Resume
                  </motion.a>
                </div>
              </motion.div>

              {/* RIGHT COLUMN */}
              <motion.div
                variants={fadeIn("right", "spring", 0.2, 0.75)}
                className="flex justify-center cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <div className="relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(192,192,192,0.8)]">
                  <img
                    src={resumePreview}
                    alt="Lavish Meena Resume Preview"
                    className="w-[300px] lg:w-[340px] h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close resume preview"
              className="absolute top-3 right-3 z-10 text-black text-3xl font-bold px-3 py-1"
            >
              &times;
            </button>
            <iframe
              src={resumePDF}
              title="Lavish Meena Resume"
              className="w-full h-[80vh] border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
