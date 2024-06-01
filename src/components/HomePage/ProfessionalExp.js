import { useTranslation } from 'react-i18next';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const ProfessionalExp = () => {
  const { t } = useTranslation();
  return (
    <section id="professional" className="pt-16 pb-16 bg-[#fdf2e9]">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>{t('experience')}</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          {t('experienceDescription')}
        </p>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg xs:p-6 xs:rounded-3xl">
          <div className="flex flex-col mb-4 font-semibold">
            <div className="flex flex-col justify-between xs:flex-row">
              <span className="text-xl">{t('quera')}</span>
              <span className="font-normal">{t('firstWorkDate')}</span>
            </div>
            <span className="text-lg">{t('firstJobTitle')}</span>
            <span>{t('iranLocation')}</span>
          </div>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Incorporate React and JavaScript into smaller projects, as well
                as the final project.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Utilizing the Tailwind CSS Framework to appropriately design and
                style the websites.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Using Git as a project management and sharing it with the team
                facilitates simultaneous work on the project.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                collaborate with the Backend team to utilize the provided APIs
                and manage the exchange of user information.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Leveraging the Trello platform to streamline task allocation and
                management within the team.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Building both technical skills and soft skills is crucial for
                effective collaboration and communication with mentors,
                colleagues, and team leads.
              </span>
            </li>
          </ul>
          <div className="grow shrink" />
          <div className="grid grid-cols-2 gap-1 text-[14.5px] font-semibold xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:flex">
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              JavaScript
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              React
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              Tailwind
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              Axios
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              ContextApi
            </span>
          </div>
        </div>

        <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg xs:p-6 xs:rounded-3xl">
          <div className="grow shrink" />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExp;
