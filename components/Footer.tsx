import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Looking forward
          <span className="text-purple">
            <div className="p-4 relative z-10 w-full text-center">
              <Link href={"https://github.com/Shalini06singh"}>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  GitHub
                </Button>
              </Link>
              <Link href={"https://www.linkedin.com/in/shalini06/"}>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  LinkedIn
                </Button>
              </Link>
            </div>
          </span>{" "}
          Contact Me
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center"></p>
        <a href="mailto:singh0605shalini@gmail.com">
          <MagicButton
            title="Let's get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Made with ♡ Shalini Singh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
