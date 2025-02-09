import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { useTranslation } from 'react-i18next';

const AZ = () => {

  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {t('Analista de Suporte')}
        <span className="text-textGreen tracking-wide">@AZ</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2024 - Mar 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {t('Gerencio chamados técnicos com soluções ágeis e eficientes. O Google Workspace é essencial no fluxo de trabalho e tem sido fundamental para meu crescimento profissional. O contato com clientes e equipe reforçou a importância da comunicação e empatia. 🚀')}
        </li>
      </ul>
    </motion.div>
  );
};

export default AZ;
