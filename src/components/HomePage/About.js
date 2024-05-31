import Skills from './Skills';
import Button from '../UI/Button';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-16 pb-16 lg:pt-20 ">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>{t('aboutMee')}</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0 ">
          {t('aboutMeeDescription')}
        </p>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col space-y-12 px-4 sm:px-10 lg:flex-row lg:space-y-0 lg:space-x-16">
        <div className="w-full">
          <h3 className="mb-6">{t('getToKnowMe')}</h3>
          <div className="flex flex-col items-center space-y-4 mb-8 text-lg text-gray-800 lg:mb-10">
            <p>{t('knowMeFirstPart')}</p>
            <p>
              {t('knowMeSecondPart')}

              {/* <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/armanzavvari/"
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 font-bold"
                >
                  LinkedIn
                </a> */}
            </p>
          </div>
          <Button link="mailto:armanzavvari@gmail.com" text={t('contact')} />
        </div>
        <div className="w-full">
          <h3 className="mb-6">{t('mySkills')}</h3>
          <div className="grid grid-cols-2 gap-2.5 mb-2.5 xs:grid-cols-3 sm:grid-cols-4">
            <Skills text="HTML" />
            <Skills text="CSS" />
            <Skills text="JavaScript" />
            <Skills text="React" />
            <Skills text="TypeScript" />
            <Skills text="Redux" />
            <Skills text="Next.js" />
            <Skills text="Git" />
            <Skills text="GitHub" />
            <Skills text="REST API" />
            <Skills text="Webpack" />
            <Skills text="SASS" />
            <Skills text="Tailwind" />
            <Skills text="Bootstarp" />
            <Skills text="Responsive CSS" />
            <Skills text="PWA" />
          </div>
          {/* <div className="grid grid-cols-1 gap-2.5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            <Skills text="Tailwind CSS" />
            <Skills text="Bootstarp" />
            <Skills text="Responsive Design" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
