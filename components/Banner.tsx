import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from '../i18n/index.js';

const Banner = () => {

  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        {t("Olá, meu nome é")}
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        {t("Felipe Kreulich")}
        <span className="text-textDark mt-2 lgl:mt-4">
          {t("Eu construo coisas para web.")}
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {t('Sou um desenvolvedor fullstack. Tenho uma sólida base em desenvolvimento front-end e back-end e sou habilidoso na criação de aplicativos web bonitos e responsivos usando React e seu ecossistema.')}
      </motion.p>
      <a href="https://github.com/FelipeKreulich" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          {t('Veja meus Projetos!')}
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
