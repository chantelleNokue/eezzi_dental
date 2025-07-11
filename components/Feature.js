import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Debt Collection",
  "Banking Law",
  "Commercial Law",
  "Family Law",
  "Criminal Law Litigation"
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto "
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12  ">
        
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600  pb-4  ">
            Our Practice Areas
          </h3>
          <p className="my-2 text-black-500 pb-4">
          The firm provides various legal services to its valued clients.
          Below are some of the major areas of our practice:
          </p>
          <ul className="text-black-500 self-start list-inside ml-8 ">
            {features.map((feature, index) => (
              <li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
