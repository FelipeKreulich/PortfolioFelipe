import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Curso Dev. Web
        <span className="text-textGreen tracking-wide">@Udemy</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2022 - Ago 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Em março de 2022, iniciei minha jornada no universo do Desenvolvimento
          Web Full Stack, e em apenas alguns meses, em agosto de 2022, transformei
          minha paixão em habilidades excepcionais.💻✨
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
