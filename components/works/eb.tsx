import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const EB = () => {

  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {t('Exército Brasileiro')}
        <span className="text-textGreen tracking-wide">@EB</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Ago 2021 - Ago 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
            {t('Trabalhei como técnico de redes e de informática no 9° Batalhão de Polícia do Exército, mais especificamente na secção de Tecnologia e Informática e Comunicações (STIC), onde adquiri muito conhecimento e coloquei em prática muita coisa que aprendi em meu curso de Rede de Computadores. 🚀')}
        </li>
      </ul>
    </motion.div>
  );
};

export default EB;
