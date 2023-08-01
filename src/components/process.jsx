import { FC, useRef, useState } from "react";
import { Container } from "./layout";
import { motion } from "framer-motion";
import { cardImage, cardText } from "../assets/animation";
const Process = () => {
  return (
    <div className="py-16" id="process">
      <Container>
        <div className="mb-6">
          <p className="text-3xl font-bold">
            {" "}
            The <span className="text-rose-600">Process</span>
          </p>
          <p className="text-zinc-500 text-sm">How does he do it?</p>
        </div>
        <div className="relative sm:px-12 md:px-28">
          {processData.map((pro, index) => {
            return <Card key={index} {...pro} />;
          })}
        </div>
      </Container>
    </div>
  );
};

const Card = ({ title, content, image }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // const rect =e.target.getBoundingClien
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    console.log();
  };

  return (
    <div className="relative w-full mx-auto mb-12 md:mb-56">
      <motion.div
        variants={cardImage}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "some" }}
        className="md:w-2/3 z-30 relative group"
      >
        <div>
          <img
            src={image}
            alt="image of process"
            className="duration-700 transition-all h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 -z-30 mix-blend-lighten blur-xl">
            <img
              src={image}
              alt="blurred bg"
              className=" duration-1000 transition-all h-full object-cover -z-50"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={cardText}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "some" }}
        ref={cardRef}
        onMouseMove={(e) => handleMouseMove(e)}
        className="md:absolute left-1/2 top-3/4 z-30 rounded-lg process-card cursor-pointer group"
        style={{
          "--mouse-x": `${mousePos.x}px`,
          "--mouse-y": `${mousePos.y}px`,
        }}
      >
        <div className="card-border opacity-0 group-hover:opacity-100 duration-150 transition-opacity"></div>
        <div className="m-[1px] bg-zinc-800 p-4 md:p-8 rounded-lg relative z-[2]">
          <p className="font-bold text-xl mb-2 group-hover:text-rose-500 duration-300 transition-all">
            {title}
          </p>
          <p className="text-zinc-400">{content}</p>
        </div>
      </motion.div>
      <div className="hidden md:block absolute opacity-5 pb-4 whitespace-nowrap text-ellipsis truncate w-1/2">
        <p className="text-6xl capitalize font-bold tracking-widest text-rose-300">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Process;

const processData = [
  {
    title: "Cinematography",
    image: "/images/process/cinema.webp",
    content:
      " His use of striking visuals and deliberate framing often enhances the narrative, adding depth to the characters and the overall story. Pay attention to how he employs lighting to evoke different moods and emotions, particularly in darker or more intense scenes.",
  },
  {
    title: "Sound & music",
    image: "/images/process/sound.webp",
    content:
      "Denis Villeneuve has worked with talented composers like Jóhann Jóhannsson and Hans Zimmer to craft powerful and emotionally resonant scores. He skillfully incorporates moments of silence or minimal sound to create tension and draw attention to specific scenes.",
  },
  {
    title: "Collaboration with Actors",
    image: "/images/process/collab.webp",
    content:
      "Villeneuve elicits powerful performances from his actors, allowing them to explore their characters' emotional complexities fully. He emphasizes the importance of the emotional connection between the audience and the characters.",
  },
  {
    title: "Storytelling and Themes",
    image: "/images/process/story.webp",
    content:
      "Many of his films explore themes of identity, moral ambiguity, and the consequences of one's actions. Pay attention to how he leaves some aspects of the story open to interpretation, allowing audiences to engage in deeper discussions and analysis.",
  },
  {
    title: "Production Design",
    image: "/images/process/design.webp",
    content:
      "Villeneuve's films often showcase meticulous attention to production design, contributing to the creation of believable and immersive worlds. He prefers using practical effects and sets whenever possible, which adds authenticity to the storytelling.",
  },
  {
    title: "Editing",
    image: "/images/process/editing.webp",
    content:
      "His films exhibit a deliberate pacing that allows for contemplation and reflection, often enhancing the emotional impact of key moments.	Pay attention to how he uses smooth and seamless transitions to link scenes and evoke a sense of continuity.",
  },
];
