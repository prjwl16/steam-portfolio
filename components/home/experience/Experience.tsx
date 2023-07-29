import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Cleartrip",
    position: "Software Engineer",
    time: "Nov 2021 - Present",
    location: "Bengaluru",
    description: "I will add the description later",
    tech: ["React", "Node", "MongoDB", "SpringBoot", "VertX"],
  },
  {
    title: "TFB",
    position: "Software Engineer",
    time: "Aug 2021 - Nov 2021",
    location: "WFH",
    description:
      "Full Stack Engineer. Created a service from scratch to handle flight booking system. Also played some ping pong. It was fun.",
    tech: ["React", "Node", "MOngoDB", "Springboot"],
  },
];
