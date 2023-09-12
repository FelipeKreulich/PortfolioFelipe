import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import App from './../../pages/_app';

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Perícia Forense Computacional
        <span className="text-textGreen tracking-wide">@CruzeiroDoSul</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2023 - Ago 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Em março de 2023, iniciei minha investigação no mundo da Perícia Forense Computacional,
          e em apenas alguns meses, em agosto de 2023, conlui meu curso. 🔍💻🕵️‍♂️
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
