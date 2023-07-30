import { FC, useRef, useState } from "react";
import { Container } from "./layout";

const Process = () => {
  return (
    <div className="py-16">
      <Container>
        <div>
          <p>Process</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="relative md:px-28">
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
      <div className="md:w-2/3 z-20">
        <img
          src={image ? image : "/images/process/collab.jpg"}
          className="duration-700 transition-all h-full object-cover relative z-10"
        />
      </div>
      <div
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
          <p className="font-bold text-xl mb-2">{title}</p>
          <p className="text-zinc-400">{content}</p>
        </div>
      </div>
      <div className="hidden absolute opacity-5 pb-4 whitespace-nowrap text-ellipsis truncate w-1/2">
        <p className="text-6xl capitalize font-bold tracking-widest">{title}</p>
      </div>
    </div>
  );
};

export default Process;

const processData = [
  {
    title: "Cinematography",
    image: "/images/process/cinema.jpg",
    content:
      " His use of striking visuals and deliberate framing often enhances the narrative, adding depth to the characters and the overall story. Pay attention to how he employs lighting to evoke different moods and emotions, particularly in darker or more intense scenes.",
  },
  {
    title: "Sound & music",
    image: "/images/process/sound.jpg",
    content:
      "Denis Villeneuve has worked with talented composers like Jóhann Jóhannsson and Hans Zimmer to craft powerful and emotionally resonant scores. He skillfully incorporates moments of silence or minimal sound to create tension and draw attention to specific scenes.",
  },
  {
    title: "Collaboration with Actors",
    image: "/images/process/collab.jpg",
    content:
      "Villeneuve elicits powerful performances from his actors, allowing them to explore their characters' emotional complexities fully. He emphasizes the importance of the emotional connection between the audience and the characters.",
  },
  {
    title: "Storytelling and Themes",
    image: "/images/process/story.png",
    content:
      "Many of his films explore themes of identity, moral ambiguity, and the consequences of one's actions. Pay attention to how he leaves some aspects of the story open to interpretation, allowing audiences to engage in deeper discussions and analysis.",
  },
  {
    title: "Production Design",
    image: "/images/process/design.jpg",
    content:
      "Villeneuve's films often showcase meticulous attention to production design, contributing to the creation of believable and immersive worlds. He prefers using practical effects and sets whenever possible, which adds authenticity to the storytelling.",
  },
  {
    title: "Editing",
    image: "/images/process/editing.jpg",
    content:
      "His films exhibit a deliberate pacing that allows for contemplation and reflection, often enhancing the emotional impact of key moments.	Pay attention to how he uses smooth and seamless transitions to link scenes and evoke a sense of continuity.",
  },
];
