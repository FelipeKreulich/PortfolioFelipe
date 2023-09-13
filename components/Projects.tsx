import { image1, image2, image3 } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Coisas que já criei" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://githubfinder-user.vercel.app"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={image1}
                alt="image1"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Projeto em Destaque
              </p>
              <h3 className="text-2xl font-bold">Github Finder</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Desenvolvi um web app que utiliza a API
              do GitHub para buscar usuários e exibir
              informações dele na tela.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Typescript</li>
              <li>Framer Motion</li>
              <li>React Router</li>
              <li>Vite</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/FelipeKreulich"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.youtube.com/channel/UCdFEsnKLFvM5gQPGXbEJlMw"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://githubfinder-user.vercel.app"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/FelipeKreulich/todolist-fullstack"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={image2}
                alt="image2"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Projeto Destaque
              </p>
              <h3 className="text-2xl font-bold">To Do List - Fullstack</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Um projeto que teve como objetivo criar um site para
              criar lista de atividades utilizando API própria e
              banco de dados para subir as atividades
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Nodejs</li>
              <li>Express</li>
              <li>MySQL2</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/FelipeKreulich/todolist-fullstack"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.youtube.com/channel/UCdFEsnKLFvM5gQPGXbEJlMw"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://gym-fitclub.vercel.app"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://weather-app-felipe.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={image3}
                alt="image3"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Projeto Destaque
              </p>
              <h3 className="text-2xl font-bold">Weather App</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              Esse projeto foi desenvolvido com o intuito de aprender um
              pouco sobre consumo de API, no caso uma API que disponibiliza
              informações do tempo de uma cidade que o usuário buscar.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwindcss</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/FelipeKreulich"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.youtube.com/channel/UCdFEsnKLFvM5gQPGXbEJlMw"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://weather-app-felipe.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
