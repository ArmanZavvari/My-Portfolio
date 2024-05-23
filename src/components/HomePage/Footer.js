import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="container mx-auto max-w-7xl pt-12 pb-8 px-4 text-gray-800 lg:pt-16 md:px-10 lg-pt-20">
      <div className="flex flex-col-reverse items-start justify-between space-y-reverse space-y-12 mb-10 sm:flex-row sm:space-y-0">
        <div>
          <h4 className="mb-4 text-2xl font-bold ">Arman Zavvari</h4>
          <p className="max-w-lg">
            A Frontend Developer focused on building the frontend of websites
            that leads to the success of the overall product
          </p>
        </div>
        <div className="flex flex-col items-start md:items-center">
          <h4 className="mb-4 text-2xl font-bold uppercase">Social</h4>
          <div className="flex space-x-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/armanzavvari/"
              className="inline-block transition-all hover:scale-110"
            >
              <BsLinkedin size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ArmanZavvari"
              className="inline-block transition-all hover:scale-110"
            >
              <BsGithub size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://t.me/Arman_Z77"
              className="inline-block transition-all hover:scale-110"
            >
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="mt-8 text-center text-sm">
        <p>
          &copy; Copyright {currentYear}. Made by{' '}
          <span>
            <a href="" className="inlne-block font-bold underline">
              Arman Zavvari
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
