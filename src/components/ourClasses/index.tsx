import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, distinctio? Explicabo ducimus minus illo sunt voluptatum sint doloremque quidem voluptatibus!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, distinctio? Explicabo ducimus minus illo sunt voluptatum sint doloremque quidem voluptatibus!",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, distinctio? Explicabo ducimus minus illo sunt voluptatum sint doloremque quidem voluptatibus!",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, distinctio? Explicabo ducimus minus illo sunt voluptatum sint doloremque quidem voluptatibus!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, distinctio? Explicabo ducimus minus illo sunt voluptatum sint doloremque quidem voluptatibus!",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, distinctio? Explicabo ducimus minus illo sunt voluptatum sint doloremque quidem voluptatibus!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className=" mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur repudiandae iure explicabo et laboriosam earum minus
              dicta! Voluptate perspiciatis tempore iste, ab quibusdam delectus
              quas aperiam totam id, saepe temporibus?
            </p>
          </div>
        </motion.div>
        {/* IMAGES */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name} - ${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
