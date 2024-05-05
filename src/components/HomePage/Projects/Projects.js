import QueraTaskImg from '../../../assets/QueraTask.webp';

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16 bg-[#fdf2e9]">
      <div className="px-2 mb-12 text-center md:mb-16">
        <h2>Projects</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find my projects that I created from scratch based on my
          current skillset.
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
      </div>
    </section>
  );
};

export default Projects;
