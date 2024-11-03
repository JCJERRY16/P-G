import { motion } from "framer-motion";
import { Copyright, FbIcon, IgIcon, InIcon, TwIcon } from "../assets/Icons";

const Footer = () => {
  return (
    <section
      className={`mx-[30px] mt-[60px] pb-[50px] lg:mx-[76px] lg:mt-[150px]`}
    >
      {/* line */}
      <div className="lg:max-w-[13000px] lg:mx-[71px] h-[2px] mt-[63.37px] bg-[#0A1C20]"></div>
      <div className="mt-[63px] flex flex-col md:flex md:flex-row justify-between items-center ">
        <div className="flex items-center gap-[10px]">
          <span>
            <Copyright
              className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px]`}
            />
          </span>
          <p className={`text-[#FFFFFF99] md:text-xl text-lg font-medium`}>
            JC JERRY<span> {new Date().getFullYear()} </span>
          </p>
        </div>
        <div className="mt-[35px] md:mt-[65px] flex justify-start items-center  gap-[26px] md:gap-[40px]">
          <motion.a
            href="https://www.instagram.com/jc_jerryy?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className={`h-auto w-auto`}
          >
            <IgIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#0a1c20]`}
            />
          </motion.a>
          
          <motion.a
           // href="https://www.linkedin.com/in/samuel-ume-805b37258/"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className={`h-auto w-auto`}
          >
            <TwIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-[#0a1c20]`}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
