import React, { useState } from 'react';
import SearchIcon from '@rsuite/icons/Search';
import { Link,  useNavigate } from 'react-router-dom';
import {HiFilm} from "react-icons/hi2";
import {HiTv} from "react-icons/hi2";
import {HiViewList} from "react-icons/hi";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate =  useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      navigate(`/search?q=${encodedSearchTerm}`);
      setSearchTerm('')
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };
  

  return (
    <div className="overflow-x-hidden">
      <nav className="flex bg-gray-800 p-1 md:p-4 text-white items-center">
        <div>
          <Link
            to="/"
            className="navbar-brand self-center text-lg md:text-3xl font-semibold my-2 p-4 md:bold md:p-4 md:my-2 text-pink-500 hover:text-yellow-300 md:mx-1 pl-8 md:pl-56 md:pr-0"
          >
           WiKiPro
          </Link>
        </div>
        <div
          className="hamburger inline-block md:p-1 cursor-pointer role-button "
          onClick={toggleMenu}
        >
          <div className="line h-0.5 w-6 my-1 bg-white hover:bg-pink-500"></div>
          <div className="line h-0.5 w-6 my-1 bg-white hover:bg-pink-500"></div>
          <div className="line h-0.5 w-6 my-1 bg-white hover:bg-pink-500"></div>
        </div>
        <div className="mx-1 md:block cursor-pointer hover:text-pink-500" onClick={toggleMenu}>Menu 
        </div>

        <div className="relative mx-1 md:block cursor-pointer text-black">
        <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="pl-10 pr-4 py-2 md:w-96 w-40  rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <SearchIcon className="absolute top-3 left-3 text-gray-500 pointer-events-none"/>
          </form>
          
        </div>
        {isOpen && (
          <div className="mega-menu absolute top-0 left-0 w-full h-screen bg-black z-50 overflow-hidden">
            <div className="container md:mx-28 mx-8 px-0">
              <div className="flex justify-between items-center">
                <h2 className="text-pink-500 md:text-5xl text-3xl font-semibold pt-16 md:mx-36">WikiPro</h2>
                <button
                  className="cursor-pointer text-white text-2xl font-bold focus:outline-none absolute top-14 bg-pink-500 hover:bg-yellow-400  md:right-72 right-8 border p-3  rounded-md border-bg-white"
                 onClick={toggleMenu}
                >
                  X
                </button>
              </div>
              <div className="flex">
                {/* Section 1 */}
                <div className="w-1/4 p-4">
                <div className="flex items-center justify-center mt-1">
                  <HiFilm className="absolute md:text-3xl text-2xl md:mx-32 md:left-40 left-4 mt-10 bg-black text-pink-600"/>
                  <h3 className="container text-white md:text-3xl text-lg font-bold pt-10 md:ml-48 ml-0 ">MOVIES</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/moviedetail1" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-6 md:mx-48 mx-1"  onClick={handleLinkClick}>
                        Now Playing
                      </Link>
                    </li>
                    <li>
                      <Link to="/moviedetails2" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-48 mx-1"  onClick={handleLinkClick}>
                       Popular
                      </Link>
                    </li>
                    <li>
                      <Link to="/moviedetails3" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-48 mx-1"  onClick={handleLinkClick}>
                        Top Rated
                      </Link>
                    </li>
                    <li>
                      <Link to="/moviedetails4" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-48 mx-1"  onClick={handleLinkClick}>
                        Upcoming
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Section 2 */}
                <div className="w-1/4 p-4">
                   <HiTv className="absolute md:text-3xl md:mx-12 mx-6 text-2xl mt-11 bg-black text-pink-600"/>
                  <h3 className="text-white md:text-3xl text-lg font-bold mb-4 pt-10 mx-14 md:mx-20">TV SHOWS</h3>
                  <ul>
                    <li>
                      <Link to="/tvdetails" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-20 mx-14"  onClick={handleLinkClick}>
                       Featured Today
                      </Link>
                    </li>
                    <li>
                      <Link to="/tvdetails2" className="block py-2  text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-20 mx-14 " onClick={handleLinkClick}>
                        On The Air
                      </Link>
                    </li>
                    <li>
                      <Link to="/tvdetails3" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-20 mx-14" onClick={handleLinkClick}>
                       Popular
                      </Link>
                    </li>
                    <li>
                      <Link to="/tvdetails4" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-20 mx-14"  onClick={handleLinkClick}>
                       Top Rated
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Section 3 */}
                <div className="w-1/4 p-4">
                <HiViewList className="absolute md:text-3xl text-2xl md:mx-0 mx-14 mt-11 bg-black text-pink-600"/>
                  <h3 className="text-white md:text-3xl text-lg font-bold mb-4 pt-10 md:mx-8 mx-20">GENRE</h3>
                  <ul>
                    <li>
                      <Link to="/movielist" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-8 mx-20"  onClick={handleLinkClick}>
                       Movie List
                      </Link>
                    </li>
                    <li>
                      <Link to="/tvlist" className="block py-2 text-pink-500 hover:text-yellow-400 hover:underline pt-2 md:mx-8 mx-20"  onClick={handleLinkClick}>
                        TV List
                      </Link>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar; 
