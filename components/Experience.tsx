import { useState } from "react";
import SectionTitle from "./SectionTitle";
import EB from "./works/eb";
import CSTC from "./works/cstc";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [workCSTC, setWorkCSTC] = useState(true);
  const [workEB, setWorkEB] = useState(false);

  const handleCSTC = () => {
    setWorkCSTC(true);
    setWorkEB(false);
  };

  const handleEB = () => {
    setWorkCSTC(false);
    setWorkEB(true);
  };

  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title={t('Carreira com TI')} titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleEB}
            className={`${
              workEB
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            {t('Exército Brasileiro')}
          </li>
          <li
            onClick={handleCSTC}
            className={`${
              workCSTC
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            CSTC.Consulting
          </li>
        </ul>
        {workCSTC && <CSTC />}
        {workEB && <EB />}
      </div>
    </section>
  );
};

export default Experience;
