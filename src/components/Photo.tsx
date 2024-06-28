"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "@/components/images/about.jpeg";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[28px] xl:w-[368px] xl:h-[400px] mix-blend-lighten"
        >
          <Image
            src={img}
            alt=""
            priority
            quality={20}
            className=" object-contain rounded-full "
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
