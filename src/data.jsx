import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

//project img
import doclabIMG from "./assets/hospital-website.png";
import loginreactIMG from "./assets/login-react.png";
import memorygameIMG from "./assets/memory-game.jpg";
import manausIMG from "./assets/manaus-website.jpg";
import maplewebsiteIMG from "./assets/maple-website.jpg";
import loginIMG from "./assets/login-project.jpg";
import mixdrinkPNG from "./assets/mixdrink.png";
import unsplash from "./assets/unsplash.png";
import gameon from "./assets/gameon.jpg"
import educa from "./assets/educa.png";

export const links = [
  { id: nanoid(), href: "#home", text: "Início" },
  { id: nanoid(), href: "#skills", text: "Skills" },
  { id: nanoid(), href: "#about", text: "Sobre mim" },
  { id: nanoid(), href: "#projects", text: "Projetos" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-sky-500" />,
    text: "Hábil em HTML e CSS, criando habilmente sites visualmente atraentes e responsivos para experiências de usuário ideais.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-sky-500" />,
    text: "Conhecimento em JavaScript, construindo aplicações web interativas e dinâmicas com foco em interações e funcionalidades perfeitas do usuário.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-500" />,
    text: "Atualmente aprendendo React, desenvolvendo aplicações front-end eficientes e interativas com forte ênfase em arquitetura baseada em componentes.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: doclabIMG,
    url: "https://doc-lab.netlify.app/",
    github: "https://github.com/guskse/doclab-website",
    title: "Site de Hospital Institucional",
    text: "Site Institucional Responsivo criado em HTML, CSS e Javascript.",
  },
  {
    id: nanoid(),
    img: gameon,
    url: "https://gameon-store.netlify.app/",
    github: "https://github.com/guskse/gameOn",
    title: "GameOn Store",
    text: "Projeto feito com HTML, CSS e Javascript.",
  },
  {
    id: nanoid(),
    img: educa,
    url: "https://educa-webcourses.netlify.app/",
    github: "https://github.com/guskse/educa-web",
    title: "Educa Web Courses",
    text: "Site Educacional Responsivo com HTML, CSS e Javascript.",
  },
  {
    id: nanoid(),
    img: mixdrinkPNG,
    url: "https://mixdrink.netlify.app/",
    github: "https://github.com/guskse/mixDrink",
    title: "MixDrink App",
    text: "App com chamada à API TheCocktailDB. Criado com React e Styled Components.",
  },
  {
    id: nanoid(),
    img: loginreactIMG,
    url: "https://loginpage-react-project.netlify.app/",
    github: "https://github.com/guskse/Login-page-react",
    title: "Página de Login com React",
    text: "Aplicativo de login responsivo criado com React.",
  },
  {
    id: nanoid(),
    img: unsplash,
    url: "https://unsplash-imagesearch.netlify.app/",
    github: "https://github.com/guskse/Unsplash",
    title: 'App Unsplash Pesquisa de Imagens',
    text: "Aplicativo criado com React, que utiliza a API do Unsplash para pesquisar imagens.",
  },
  {
    id: nanoid(),
    img: manausIMG,
    url: "https://welcome-to-manaus.netlify.app/",
    github: "https://github.com/guskse/manaus-website",
    title: "Manaus Tour Website",
    text: "Projeto inicial criado para praticar e aprender mais sobre grid layout, mostrando atrações turísticas da minha cidade natal: Manaus.",
  },
  {
    id: nanoid(),
    img: memorygameIMG,
    url: "https://mario-memory-game.netlify.app/",
    github: "https://github.com/guskse/mario-memory-game",
    title: "Jogo de Memória Mágica Mario",
    text: "Um projeto de jogo de memória criado com React. Divirta-se!",
  },
  {
    id: nanoid(),
    img: maplewebsiteIMG,
    url: "https://maplestory-project.netlify.app/",
    github: "https://github.com/guskse/maplestory-website",
    title: "Site MapleStory",
    text: "Um projeto inicial que criei após concluir um curso web de HTML e CSS para praticar o que aprendi. Inclui uma funcionalidade (simples) de modo noturno.",
  },
  {
    id: nanoid(),
    img: loginIMG,
    url: "https://loginpage-project.netlify.app/",
    github: "https://github.com/guskse/login-project",
    title: "Página de login (HTML e CSS)",
    text: "Um dos meus primeiros projetos, criado com HTML e CSS!",
  },
];

