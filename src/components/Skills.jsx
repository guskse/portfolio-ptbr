import SectionTitle from "./SectionTitle";
import Skillscard from "./Skillscard";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text='Tecnologias e Habilidades' />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <Skillscard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
