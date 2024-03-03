import Link from "next/link";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. {t('Próximo Passo?')}
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">{t('Entrar em Contato')}</h2>
      <p className="max-w-[600px] text-center text-textDark">
        {t('Quer entrar em contato? Caso tenha interesse, entre em contato comigo, estarei disposto a ajudar. Ou se você quiser entrar em contato para tirar dúvidas, darei o meu melhor!')}
      </p>

      <a href="mailto:contato.felipe.kreulich@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          {t('Diga Oi')}
        </button>
      </a>
    </section>
  );
};

export default Contact;
