// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span className="text-secondary"> Me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              Hey there! I'm Isaac, a passionate student diving headfirst into
              the world of web development with a keen eye on becoming a
              full-stack developer. My journey into tech began with a
              fascination for how websites work and has since grown into a deep
              love for crafting seamless, user-friendly experiences. Whether
              it's tinkering with JavaScript frameworks like React or delving
              into the complexities of databases and server-side languages, I'm
              always eager to expand my skill set. Outside of coding, you'll
              often find me buried in lines of code, tackling new challenges, or
              seeking inspiration from the latest tech innovations. I thrive on
              the creativity and problem-solving inherent in development and am
              excited about the endless possibilities the tech world offers.
              Let's connect and explore this ever-evolving digital landscape
              together!
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={linkedinIcon} title="LinkedIn" url="" />
            <SocialMediaIcon imgSrc={githubIcon} title="Github" url="" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" url="" />
            <SocialMediaIcon imgSrc={youtubeIcon} title="YouTube" url="" />
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
