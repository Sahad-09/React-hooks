import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const footer = () => {
  return (
    <div className="flex mt-auto bottom-2 px-6">
      <div className=" w-[80%] mx-auto "></div>
      <div className=" flex gap-3">
        <a href="https://github.com/Sahad-09" target="_blank">
          <Image
            src="https://img.icons8.com/?size=512&id=zehXPLJSAbBB&format=png"
            alt="github"
            height={30}
            width={30}
            className="text-white"
          />
        </a>
        <a href="https://www.linkedin.com/in/sahad-pop/" target="_blank">
          <Image
            src="https://img.icons8.com/?size=512&id=447&format=png"
            alt="linkedin"
            height={30}
            width={30}
          />
        </a>
        <a href="https://www.instagram.com/sahad__.x/?next=%2F" target="_blank">
          <Image
            src="https://img.icons8.com/?size=512&id=32292&format=png"
            alt="instagram"
            height={30}
            width={30}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCVOR8gU2bH6oU3kRCPX1Cvw"
          target="_blank"
        >
          <Image
            src="https://img.icons8.com/?size=512&id=37325&format=png"
            alt="youtube"
            height={30}
            width={30}
          />
        </a>
      </div>
    </div>
  );
};

export default footer;
