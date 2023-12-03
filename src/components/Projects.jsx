import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";

const Project = () => {
  return (
    <section className="py-20 px-5 align-element relative" id="projects">
      <SectionTitle text="Projetos" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      <a href="#home">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-5 right-1 ">
          Voltar ao início
        </button>
      </a>
    </section>
  );
};

export default Project;
