import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Introdução a Rede de Computadores
        <span className="text-textGreen tracking-wide">@FundaçãoBradesco</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2021 - Jul 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Embarquei na jornada da Rede de Computadores em junho de 2021, mergulhando
          nas entranhas da conectividade digital. Em apenas um mês, transformei meu
          conhecimento em um ativo poderoso.💡
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
