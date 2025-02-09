import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { useTranslation } from 'react-i18next';

const CSTC = () => {

  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {t('Desenvolvedor Fullstack')}
        <span className="text-textGreen tracking-wide">@CSTC.Consulting</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Fev 2024 - Set 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {t('Meu percurso como desenvolvedor full stack na CSTC.Consulting tem sido uma jornada fascinante, onde a cada linha de código, mergulho mais fundo nas complexidades do universo tecnológico. Desde meu ingresso na empresa, tenho tido o privilégio de contribuir para projetos inovadores e desafiadores, moldando meu caminho como profissional de desenvolvimento. Cada dia na CSTC.Consulting é uma oportunidade para aprender e crescer. Colaborar com colegas talentosos e líderes visionários tem sido fundamental para meu desenvolvimento profissional. A empresa não é apenas um local de trabalho, mas um ambiente que nutre o florescimento das ideias, encorajando a exploração de novas tecnologias e metodologias. 🚀')}
        </li>
      </ul>
    </motion.div>
  );
};

export default CSTC;
