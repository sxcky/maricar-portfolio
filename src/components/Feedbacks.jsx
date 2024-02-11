import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { p } from "maath/dist/misc-7d870b3c.esm";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  source_code_link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-pink-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <p className="text-black tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="cursor-pointer"
          >
            <p className="text-black font-medium text-[16px]">
              <span className="blue-text-gradient">@ </span>
              {name}
            </p>
          </div>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} {company}
          </p>
        </div>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-paragraph rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with me!</p>
          <h2 className={styles.sectionHeadText}>Socials</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
