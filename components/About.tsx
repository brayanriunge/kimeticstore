import { FaBullseye, FaEye, FaTrophy } from "react-icons/fa";
import Card from "./Card";

type CardType = {
  title: string;
  content: string;
  icon: JSX.Element;
};

const storys: Array<CardType> = [
  {
    icon: <FaBullseye className="h-6 w-6" />,
    title: "Mission",
    content:
      "At Kemetic Amezan, our mission is deeply rooted in leveraging technological advancements to revolutionize the global marketplace. ",
  },
  {
    icon: <FaTrophy className="h-6 w-6" />,
    title: "Vision",
    content:
      "Our vision at Kemetic Amezan is to become the foremost catalyst for global economic integration, leveraging digital technology to create a world where opportunities are accessible to all.",
  },
  {
    icon: <FaEye className="h-6 w-6" />,
    title: "Goal",
    content:
      "Enhance communication skills. Forge meaningful relationships. Promote equality and inclusivity. Environmental stewardship. Empowerment through employment.Facilitate global connectivity",
  },
];

export default function About() {
  return (
    <section className="mx-auto min-h-full w-5/6 mb-4">
      <div className="md:flex items-center justify-between gap-8 mt-2">
        {storys.map((story: CardType) => (
          <Card
            key={story.title}
            icon={story.icon}
            title={story.title}
            content={story.content}
          />
        ))}
      </div>
    </section>
  );
}
