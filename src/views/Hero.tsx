// // assets
// import homePageImg from "../assets/home-page.svg";
// import homePageIllustation from "../assets/hero-illustration.svg";
// import downloadIcon from "../assets/download-btn-icon.svg";

// // components
// import { Button } from "../components";

// // react-simple-typewriter
// import { Typewriter } from "react-simple-typewriter";

// // framer-motion
// import { motion } from "framer-motion";

// // utils
// import { transition } from "../utils/transition";
// import { fadeIn, scale } from "../utils/variants";

// const Hero = () => {
//   return (
//     <div
//       id="home"
//       className="min-h-screen flex items-center justify-center relative"
//       style={{
//         background: `url(${homePageImg})`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div
//         className="max-w-screen-2xl flex flex-col
//           xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
//       >
//         <div className="w-full xl:w-fit">
//           <motion.h1
//             variants={fadeIn("down")}
//             transition={transition()}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false }}
//             className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl
//               font-bolt text-textPrimary uppercase"
//           >
//             Aroian
//             <br />
//             <span className="text-secondary">
//               <Typewriter
//                 words={["Isaac", "Sahag"]}
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={250}
//                 deleteSpeed={150}
//                 loop
//               />
//             </span>
//           </motion.h1>
//           <motion.div
//             variants={fadeIn("up")}
//             transition={transition()}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false }}
//             className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
//           >
//             <Button secondary>Hire me</Button>
//             <Button icon={downloadIcon}>Download CV</Button>
//           </motion.div>
//         </div>

//         <motion.img
//           variants={scale()}
//           transition={transition()}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false }}
//           src={homePageIllustation}
//           alt=""
//           className="max-w-full sm:max-w-[401px]"
//         />
//       </div>

//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { Button } from "../components";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

// Replace these with your actual image paths
import homePageImg from "../assets/home-page.svg";
import homePageIllustration from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";

const Hero = () => {
  const handleDownloadCV = () => {
    // Logic to handle download or any other action on Download CV button click
    console.log("Downloading CV...");
    // Add your logic for downloading the CV PDF file here
  };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bold text-textPrimary uppercase"
          >
            Aroian
            <br />
            <span className="text-secondary">
              <Typewriter
                words={["Isaac", "Sahag"]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Button secondary onClick={() => console.log("Hire me clicked")}>
              Hire me
            </Button>
            <Button
              icon={downloadIcon}
              downloadLink="C:\Users\sahag\Desktop\POF\portfolio-typescript-main\src\views\CV.pdf"
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustration}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
