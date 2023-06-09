import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMeduimScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS*/}
          <div className="md:-mt-20">
            <div className="relative">
              <motion.div
                className=" before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={HomePageText} alt="home-page-text" />
                <p className="mt-8 text-sm">
                  Unrivaled Gym. Unparalleled Training Fitness Classes. World
                  Class Studios to get the Body Shaped That you Dream Of. Get
                  Your Dream Body Now.
                </p>
              </motion.div>
              {/* ACTIONS */}
              <motion.div
                className="mt-8 flex items-center gap-8 md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ActionButton
                  children={"Join Now"}
                  setSelectedPage={setSelectedPage}
                />
                <AnchorLink
                  href={`#${SelectedPage.ContactUs}`}
                  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                  className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                >
                  <p>Learn More</p>
                </AnchorLink>
              </motion.div>
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </motion.div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMeduimScreens && (
        <div className=" mt-16 h-[130px] w-full bg-primary-100 py-10 drop-shadow-lg">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-center gap-32">
              <motion.img
                src={SponsorRedBull}
                alt="redbull-sponsor"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 },
                }}
              />
              <motion.img
                src={SponsorForbes}
                alt="forbes-sponsor"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
              <motion.img
                src={SponsorFortune}
                alt="fortune-sponsor"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 0 },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
