import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-16" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about section image" className="w-full h-64" />
        <article>
          <SectionTitle text="Sobre Mim" />
          <p className="text-slate-600 mt-8 leading-loose">
            Sou um desenvolvedor web front-end focado em proporcionar a melhor
            experiência aos usuários! Meu principal objetivo é criar aplicativos
            e sites interativos e intuitivos. As principais tecnologias que
            utilizo são HTML, CSS e Javascript.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            Atualmente estou aprendendo React e nodeJS para criar aplicativos
            ainda mais incríveis no futuro! Adoro aprender novas tecnologias e
            procuro melhorar sempre.
          </p>

          <p className="text-slate-600 mt-8 leading-loose">
            Quando não estou aprendendo algo novo ou programando, provavelmente
            estou fazendo alguma atividade física (caminhada ou academia) ou
            tocando violão (Oasis, Wonderwall). Outra coisa que gosto muito de
            fazer é jogar quando quero relaxar.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
