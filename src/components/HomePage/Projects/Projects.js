import QueraTaskImg from '../../../assets/QueraTask.webp';
import BokkingHotelImg from '../../../assets/Booking-Hotel.webp';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="pt-16 pb-16 bg-[#fdf2e9]">
      <div className="px-2 mb-12 text-center md:mb-16">
        <h2>{t('projects')}</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          {t('projectDescription')}
        </p>
      </div>
      <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-y-14 px-4 md:gap-y-20">
        {/* PROJECT 1 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex items-end justify-center bg-white/50 rounded-xl">
            <img
              src={QueraTaskImg}
              alt="Laon E-Commerce"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2">Quera Task Maneger</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              The project is a robust collaboration and task management tool,
              drawing inspiration from well-known platforms such as Clickup and
              Todo.vu. Its primary objective is to offer developers practical
              work exposure. Through involvement in a genuine project like this,
              developers can acquire a profound insight into the actual
              complexities and intricacies inherent in creating and implementing
              a comprehensive application.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                JavaScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                React
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
        {/* PROJECT 1 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex flex-col">
            <h3 className="mb-2">Booking Hotel</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              In this project, users can choose hotels from a list of available
              options and view detailed information about each one. They can
              also see the exact location of each hotel on a map. Additionally,
              users have the ability to add new hotels and bookmark their
              favorites.The Navigator component and json-server, combined with
              react-router-dom and the Context API, ensures efficient state
              management and navigation.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                JavaScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                React
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                ContextApi
              </span>
            </div>
          </div>
          <div className="flex items-end justify-center bg-white/50 rounded-xl">
            <img
              src={BokkingHotelImg}
              alt="Laon E-Commerce"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
