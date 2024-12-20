import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';
import { Link } from 'react-router-dom';
import logos from '../../../assets/logo/logos.png';
import logod from '../../../assets/logo/logod.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" dark:bg-slate-900 dark:text-white p-4 bg-slate-200 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          {/*logo for small screen*/}
          <h1 className="head lg:hidden md:hidden">
            <a href="#">
              <img src={logos} alt="IT Blog" className='w-28 h-24  dark:hidden' />
            </a>
          </h1>

          <h1 className="head lg:hidden md:hidden">
            <a href="#">
              <img src={logod} alt="IT Blog" className='w-28 h-24  hidden dark:block ' />
            </a>
          </h1>

          {/* Hamburger menu */}
          <div className="md:hidden flex justify-end w-screen duration-1000">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </div>

          {/* Links for larger screens */}
          <div className=" items-center justify-center max-w-screen-2xl h-12 pt-2 mt-10  mx-auto  bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-lg font-semibold text-gray-900 dark:text-white hidden lg:flex lg:w-full ">
          <h1 className="head hidden mb-4 lg:flex md:hidden">
            <a href="#">
              <img src={logos} alt="IT Blog" className='w-28 h-24  dark:hidden' />
            </a>
          </h1>

          <h1 className="head hidden mb-4 lg:flex md:hidden">
            <a href="#">
              <img src={logod} alt="IT Blog" className='w-28 h-24  hidden dark:block ' />
            </a>
          </h1>
            <nav className=" nav">
              <ul className="list ">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Single Post</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
              <span className="mr-7 mt-1 justify-end grow flex  m-0  relative h-7">
                <input
                  type="search"
                  name=""
                  id="search"
                  placeholder="search"
                  title="search"
                  autoComplete="off"
                  className="w-32 m-0 p-0 border-2 rounded-lg pl-3 "
                />

                <button
                  type="submit"
                  className="ml-3 absolute top-0 right-0 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                </button>
              </span>
              <ThemeToggle />
            </nav>
          </div>
        </div>

        {/* Links for medium screens */}
        <div className=" dark:text-white hidden lg:hidden md:flex font-semibold text-gray-900 w-full dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 mt-3  bg-gray-100 ">
        <h1 className="head lg:hidden md:flex sm:hidden">
            <a href="#">
              <img src={logos} alt="IT Blog" className='w-24 h-16  dark:hidden' />
            </a>
          </h1>

          <h1 className="head lg:hidden md:flex sm:hidden">
            <a href="#">
              <img src={logod} alt="IT Blog" className='w-24 h-16  hidden dark:block ' />
            </a>
          </h1>
          <nav className=" nav">
            <ul className="list">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Single Post</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <span className="mr-3 mt-5 justify-end grow flex  m-0  relative h-7">
              <input
                type="search"
                name=""
                id="search"
                placeholder="search"
                title="search"
                autoComplete="off"
                className="w-24 m-0 p-0 border-2 rounded-lg pl-3 text-black "
              />

              <button
                type="submit"
                className="ml-3 absolute top-0 right-0 items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </button>
            </span>
            <span className='mt-5'><ThemeToggle/></span>
            
          </nav>
        </div>

        {/* Menu for small screens */}
        {isOpen && (
          <div className="md:hidden small ">
            <a
              href="#"
              className="block px-4 py-2 text-gray-900 dark:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-900 dark:text-white"
            >
              Blog
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-900 dark:text-white"
            >
              Single Post
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-900 dark:text-white"
            >
              Pages
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-900 dark:text-white"
            >
              Contact
            </a>
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
