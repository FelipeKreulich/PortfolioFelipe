import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Análise e Desenvolvimento de Sistemas
        <span className="text-textGreen tracking-wide">@Estácio</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2023 - Jul 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Inciei minha faculdade de Análise e Desenvolvimento de Sistemas
          em Março de 2023, navegando pelo mundo do código e da inovação.
          Com a graduação prevista para 2025, estou construindo meu caminho
          para me tornar um desenvolvedor web excepcional. Venha explorar
          meu crescimento e paixão pelo código em meu portfólio. 🚀💻
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
