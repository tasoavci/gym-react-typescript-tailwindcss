import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, deleniti.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, deleniti.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Export And Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, deleniti.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-24" id="benefits">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:mb-5 md:mt-12 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to ultimate fitness goals with ease. We provide true care
            into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}

          <motion.img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
          />

          {/* DESCRIPTION */}
          <div className="mt-8">
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, x: 80 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                accusamus quibusdam eos deleniti recusandae et sed delectus
                perferendis iusto ea dolores sapiente quas repellat sit placeat,
                laudantium accusantium commodi earum.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                facilis deleniti earum. Qui voluptatum repellendus molestiae
                sunt iusto, beatae et?
              </p>
            </motion.div>

            {/* BUTTON */}
            <motion.div
              className="relative mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
