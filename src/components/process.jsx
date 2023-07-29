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
        <div className="relative px-28">
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
    <div className="relative mx-auto mb-48">
      <div className="w-2/3 z-20">
        <img
          src={image ? image : "/images/process/collab.jpg"}
          className="duration-700 transition-all h-full object-cover relative z-10"
        />
      </div>
      <div
        ref={cardRef}
        onMouseMove={(e) => handleMouseMove(e)}
        className="absolute left-1/2 top-2/4 z-30 rounded-lg process-card cursor-pointer bg-zinc-800/50 backdrop-blur-lg p-8"
        style={{
          "--mouse-x": `${mousePos.x}px`,
          "--mouse-y": `${mousePos.y}px`,
        }}
      >
        <p className="font-bold text-xl mb-2">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Process;

const processData = [
  {
    title: "Cinematography",
    content:
      "Villeneuve frequently works with renowned cinematographers like Roger Deakins and Bradford Young to create visually stunning and atmosphericfilms. His use of striking visuals and deliberate framing often enhances the narrative, adding depth to the characters and the overall story. Pay attention to how he employs lighting to evoke different moods and emotions, particularly in darker or more intense scenes.",
    imge: "",
  },
  {
    title: "Sound & music",
    content:
      "Denis Villeneuve has worked with talented composers like Jóhann Jóhannsson (Sicario, Arrival) and Hans Zimmer (Blade Runner 2049) to craft powerful and emotionally resonant scores. He skillfully incorporates moments of silence or minimal sound to create tension and draw attention to specific scenes. Villeneuve's films often feature intricate sound design, enhancing the atmosphere and immersing the audience in the story's world.",
    imge: "",
  },
  {
    title: "Collaboration with Actors",
    content:
      "Villeneuve elicits powerful performances from his actors, allowing them to explore their characters' emotional complexities fully. Empathy and Connection: He emphasizes the importance of the emotional connection between the audience and the characters, enabling viewers to empathize with their journeys.",
    imge: "/images/process/collab.jpg",
  },
  {
    title: "Storytelling and Themes",
    content:
      "Villeneuve's films are known for their well-developed, multi-dimensional characters, each with their own struggles and conflicts. Many of his films explore themes of identity, moral ambiguity, and the consequences of one's actions. Pay attention to how he leaves some aspects of the story open to interpretation, allowing audiences to engage in deeper discussions and analysis.",
    imge: "",
  },
  {
    title: "Production Design",
    content:
      "Villeneuve's films often showcase meticulous attention to production design, contributing to the creation of believable and immersive worlds. He prefers using practical effects and sets whenever possible, which adds authenticity to the storytelling.",
    imge: "",
  },
  {
    title: "Editing",
    content:
      "Villeneuve's films exhibit a deliberate pacing that allows for contemplation and reflection, often enhancing the emotional impact of key moments.	Pay attention to how he uses smooth and seamless transitions to link scenes and evoke a sense of continuity.",
    imge: "",
  },
];