import { Fragment } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import Navigation from './Navigation/Navigation';
import Button from '../UI/Button';
import ArmanImg from '../../assets/Arman.webp';

const HeroSection = () => {
  return (
    <Fragment>
      <header className="relative px-4 pb-16 bg-[#fdf2e9]">
        <Navigation />
        <div className="container mx-auto animate-heroMoveInBottom md:py-10 lg:px-10 xl:px-24">
          <div className="flex flex-col-reverse items-center justify-between space-y-reverse space-y-10 md:flex-row md:space-x-4 md:space-y-0 lg:ml-8 xl:space-x-14 xl:ml-20">
            <div className="w-11/12 text-center bg-orange-200 shadow-[inset_0_0_50px_50px_#fdf2e9]">
              <h1 className="mb-3 text-3xl text-gray-800 font-bold  transition-all animate-moveInLeft sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                Hi, I'm Arman Zavvari
              </h1>
              <p className="mb-8 max-w-xl flex text-lg text-center mx-auto text-gray-800 transition-all animate-moveInRight sm:text-xl md:text-lg lg:text-xl lg:mb-10">
                I love diving into new challenges and learning from
                collaborations.
              </p>
              <div className="animate-btnMoveInBottom">
                <Button link="#projects" text="Projects" />
              </div>
            </div>

            <div className="w-3/4  rounded-lg shadow-[inset_0_0_50px_50px_#fdf2e9] animate-imgMoveInRight sm:w-3/5 sm:ml-6 md:w-1/2">
              <div className=" rounded-lg">
                <img src={ArmanImg} alt="Arman" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="hidden absolute top-1/2 flex-col space-y-4 -translate-y-1/2 px-2 py-4 bg-white rounded-full shadow-2xl sm:flex md:hidden lg:flex">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/armanzavvari/"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <BsLinkedin size={28} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/ArmanZavvari"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <BsGithub size={28} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://t.me/Arman_Z77"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <FaTelegram size={28} />
        </a>
      </div>
    </Fragment>
  );
};

export default HeroSection;
