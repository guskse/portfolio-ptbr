import heroImg from "../assets/hero2.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-sky-300 py-16">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">Oi, eu sou o Gustavo</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700  tracking-wide">
            Criando experiências com <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>{" "}
            e <b>React</b>
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/guskse" target="_blank">
              <FaGithubSquare className="h-10 w-10 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-carvalho-752b93255/"
              target="_blank"
            >
              <FaLinkedin className="h-10 w-10 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96"></img>
        </article>
      </div>
    </div>
  );
};

export default Hero;
