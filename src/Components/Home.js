import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  const [carouselData, setCarouselData] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  const [gridData, setGridData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(gridData.length / itemsPerPage);
  const [newGridData, setNewGridData] = useState([]);
  const [gridCurrentPage, setGridCurrentPage] = useState(1);
  const itemsPerGrid = 6;
  const totalGridPages = Math.ceil(newGridData.length/ itemsPerGrid);
  const [gridsData, setGridsData] = useState([]);
  const [gridsCurrentPage, setGridsCurrentPage] = useState(1);
  const itemsPerGrids = 6;
  const totalGridsPages = Math.ceil(gridsData.length/ itemsPerGrids)
  
  useEffect(() => {
    fetchData();
    fetchGridData();
    fetchNewGridData();
    fetchGridsData();
    
  }, []);

  const fetchData = async () => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzMzZWQxY2NlOGMxMDMwNDQ5N2UyNzg4YTYwNDIxYiIsInN1YiI6IjY0NmEzODFiYTUwNDZlMDEwNThiZjZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYqyCI7ZTaEawRt_iulQgvOja6jm2i5voF9xqie-GM8'
      }
    };
    const totalPages = 50;

    try {
      const movies = [];
      for (let page = 1; page <= totalPages; page++) {
        const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
        const response = await axios.get(url, config);
        movies.push(...response.data.results);

        if (movies.length >= 5) {
          break; 
        }
      }
      const data = movies.map((movie) => ({
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        title: movie.title,
        averageVote:movie.vote_average,
        releaseDate: movie.release_date
      }));
      setCarouselData(data);
    } catch (error) {
      console.log(error);
    }
  }; 

  const fetchGridData = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/trending/all/day', {
        params: {
          language: 'en-US',
          page: 1
        },
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzMzZWQxY2NlOGMxMDMwNDQ5N2UyNzg4YTYwNDIxYiIsInN1YiI6IjY0NmEzODFiYTUwNDZlMDEwNThiZjZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYqyCI7ZTaEawRt_iulQgvOja6jm2i5voF9xqie-GM8'
        }
      });
    
      
      const data = response.data.results
          .filter((item) => item.poster_path !== null && item.poster_path !== undefined)
          .map((item) => ({
            id: item.id,
            title: item.title || item.name,
            poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            voterAverage: item.vote_average,
            releaseDate: item.release_date
          }));
  
        setGridData(data);
      } catch (error) {
        console.log(error);
      }
    };
   
    const fetchNewGridData = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', {
          params: {
            language: 'en-US',
            page: 1
          },
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzMzZWQxY2NlOGMxMDMwNDQ5N2UyNzg4YTYwNDIxYiIsInN1YiI6IjY0NmEzODFiYTUwNDZlMDEwNThiZjZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYqyCI7ZTaEawRt_iulQgvOja6jm2i5voF9xqie-GM8'
          }
        });
      
        
        const data = response.data.results
            .filter((item) => item.poster_path !== null && item.poster_path !== undefined)
            .map((item) => ({
              id: item.id,
              title: item.title || item.name,
              poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              voterAverage: item.vote_average,
              firstAirDate: item.first_air_date
            }));
    
          setNewGridData(data);
        } catch (error) {
          console.log(error);
        }
      };
    
     
     const fetchGridsData = async () => {
      try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
        params: {
          language: 'en-US',
          page: 1
        },
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzMzZWQxY2NlOGMxMDMwNDQ5N2UyNzg4YTYwNDIxYiIsInN1YiI6IjY0NmEzODFiYTUwNDZlMDEwNThiZjZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYqyCI7ZTaEawRt_iulQgvOja6jm2i5voF9xqie-GM8'
        }
      });
    
      
      const data = response.data.results
          .filter((item) => item.poster_path !== null && item.poster_path !== undefined)
          .map((item) => ({
            id: item.id,
            title: item.title || item.name,
            poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            voterAverage: item.vote_average,
            releaseDate: item.release_date
          }));
  
        setGridsData(data);
      } catch (error) {
        console.log(error);
      }
    };
 
  
    

  
  const goToNextItem = () => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === carouselData.length - 1 ? 0 : prevActiveItem + 1
    );
  };

  const goToPrevItem = () => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === 0 ? carouselData.length - 1 : prevActiveItem - 1
    );
  };

  
  

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const openMoviePage = (id) => {
    navigate(`/movies/${id}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGridData = gridData.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setGridCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setGridCurrentPage((prevPage) => prevPage + 1);
  };
  
  const firstIndex = (gridCurrentPage - 1) * itemsPerGrid;
  const lastIndex = firstIndex + itemsPerGrids;
  const currentNewGridData = newGridData.slice(firstIndex, lastIndex);
  
  const handlePrevGrid = () => {
    setGridsCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextGrid = () => {
    setGridsCurrentPage((prevPage) => prevPage + 1);
  };

  const openIndex = (gridsCurrentPage - 1) * itemsPerGrids;
  const closeIndex = openIndex + itemsPerGrid;
  const currentGridsData = gridsData.slice(openIndex, closeIndex);
  

  return (
    <div>
    <div className="bg-black overflow-hidden">
      <div className="flex items-center justify-center md:py-1 py-0 md:ml-32 md:h-full md:w-full ml-0">
        <div className="relative  md:w-4/5 md:h-full mb-px pl-8">
          <div
            id="controls-carousel"
            className="relative  md:ml-20 mx-1 md:mx-24 my-auto md:w-full md:inset-y-0  md:h-full md:items-end "
            data-carousel="static"
          >
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 left-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={goToPrevItem}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-pink-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={goToNextItem}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-pink-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none cursor-pointer ">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
           
            <div className="relative  pb-[75%] bg-gray-800">
              {carouselData.map((item, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out rounded-lg  mx-1 my-2 h-32 w-48 flex items-start ${
                    index === activeItem ? 'carousel-item' : 'carousel-item hidden'
                  }`}
                  data-carousel-item={index === activeItem ? 'active' : ''}
                  onClick={() => openMoviePage(item.id)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={item.poster}
                      className="relative inset-0 w-full h-full"
                      alt="Movie Poster" loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0  left-0 right-0 px-4 py-2 bg-black bg-opacity-70 text-white text-center text-lg cursor-pointer ">
                  <p className="md:text-4xl text-xl text-center text-white hover:text-pink-400">{item.title}</p>
                  <div className="flex items-center justify-center mt-1">
                  <FaStar className="text-yellow-400 mr-1" />
                  <p className="text-sm text-white">{item.averageVote}</p>
                </div>
                <p className="text-sm text-white">Release Date: {item.releaseDate}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-2/3">
          <div>
            <Link to='/trending' className="text-pink-600 font-bold md:text-2xl text-lg text-start mx-4 md:mx-28 md:py-3 py-0 md:my-0 my-0 cursor-pointer hover:text-yellow-400" onClick={goToNextItem}>Up Next</Link>
            </div>
        
          <div className="flex flex-col justify-between mt-0 ml-4 pr-6 md:ml-24 md:pr-96 my-0  md:items-center w-4/5 h-full">
            {carouselData
              .slice(activeItem, activeItem + (window.innerWidth >= 768 ? 6 : 4))
              .map((item, index) => (
                <div
                  key={index}
                  className="card border md:p-1 border-bg-gray-900  md:mx-5  md:h-full md:w-full flex  flex-col items-center w-full  h-full font-sans text-sm  overflow-hidden  p-1 my-2 md:my-3"
                  onClick={() => openMoviePage(item.id)}
                >
                  <img src={item.backdrop} alt="Movie Poster" className="w-full h-full  object-cover" loading="lazy"/>
                  
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-0 md:pr-96 my-0 sm:items-center rounded-md md:items-start">
        <h1 className='font-bold text-pink-700 md:text-6xl text-3xl md:mt-24 my-12 pl-8 md:pl-64 font-sans'>What to watch</h1>
        <Link to="/top-picks" className="text-white font-bold text-2xl pl-8 mb-4 md:pl-64 md:pr-60  cursor-pointer">   <HiOutlineChevronRight className=' absolute text-white mx-32 my-2 text-3xl hover:text-pink-700' />
        <span className="font-bold text-3xl text-pink-700">|</span> Top picks     
        </Link>
        <p className='text-gray-400 md:pl-64 pl-8'>Tv shows and movies just for you</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 grid-cols-2 md:pl-60 md:my-8 my-8 cursor-pointer pr-8 pl-8">
          {currentGridData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-2 border border-gray-200 rounded-md overflow-hidden"
              onClick={() => openMoviePage(item.id)}
            >
              <img src={item.poster} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="mt-2 text-center">
                <p className="text-lg font-bold text-white hover:text-pink-500">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500">Release Date:{item.releaseDate}</p>
                <div className="flex items-center justify-center mt-1">
                  <FaStar className="text-yellow-400 mr-1" />
                  <p className="text-sm text-white">{item.voterAverage}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
    </div>
      <div className="flex items-center justify-between flex-col px-8">
        <div className='flex md:mx-auto mx-auto'>
        <button
          type="button"
          className="text-white bg-transparent border border-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-pink-500 hover:text-black focus:outline-none md:my-3 cursor-pointer "
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white bg-transparent border border-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-pink-500 hover:text-black focus:outline-none md:my-3 cursor-pointer md:mx-4 mx-3"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      </div>
       {/* second grid */}
       <div className="flex flex-col justify-between mt-0 md:pr-96 my-0 sm:items-center rounded-md md:items-start">
        <h1 className='font-bold text-pink-700 md:text-6xl text-3xl md:mt-24 my-12 pl-8 md:pl-64 font-sans'>Explore Top Rated TV shows & Movies </h1>
        <Link to='/popularTvShows' className="text-white font-bold text-2xl pl-8  mb-4 md:pl-64 md:pr-60 cursor-pointer"><HiOutlineChevronRight className=' absolute text-white mx-32 my-2 text-3xl hover:text-pink-700' />
          <span className="font-bold text-3xl text-pink-700">|</span> TV Shows
        </Link> 
        <p className='text-gray-400 md:pl-64 pl-8'>Top rated tv shows just for you</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 grid-cols-2 md:pl-60 md:my-8 my-8 cursor-pointer pr-8 pl-8">
          {currentNewGridData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-2 border border-gray-200 rounded-md overflow-hidden"
              onClick={() => openMoviePage(item.id)}
            >
              <img src={item.poster} alt={item.title} className="h-full w-full object-cover" loading="lazy"/>
              <div className="mt-2 text-center">
                <p className="text-lg font-bold text-white hover:text-pink-500">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item.firstAirDate}</p>
                <div className="flex items-center justify-center mt-1">
                <FaStar className="text-yellow-400 mr-1" />
                <p className="mt-1 text-sm text-yellow-500">{item.voterAverage}</p>
               </div>
              </div>
            </div>
          ))}
        </div>
    </div>
      <div className="flex items-center justify-between flex-col px-8">
      <div className='flex md:mx-auto mx-auto'>
        <button
          type="button"
          className="text-white bg-transparent border border-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-pink-500 hover:text-black focus:outline-none md:my-3 cursor-pointer"
          onClick={handlePrevious}
          disabled={gridCurrentPage === 1}
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white bg-transparent border border-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-pink-500 hover:text-black focus:outline-none md:my-3 mx-3 cursor-pointer md:mx-4"
          onClick={handleNext}
          disabled={gridCurrentPage === totalPages}
        >
          Next
        </button>
      </div>
      </div>
      {/* third grid */}
      <div className="flex flex-col justify-between mt-0 md:pr-96 my-0 sm:items-center rounded-md md:items-start">
        <Link to='/popularMovies' className="text-white font-bold text-2xl pl-8  mb-4 md:pl-64 md:pr-60  cursor-pointer my-9"><HiOutlineChevronRight className=' absolute text-white mx-32 my-2 text-3xl hover:text-pink-700' />
          <span className="font-bold text-3xl text-pink-700 ">|</span> Movies
        </Link> 
        <p className='text-gray-400 md:pl-64 pl-8'>Top rated movies just for you</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 grid-cols-2 md:pl-60 md:my-8 my-8 cursor-pointer pr-8 pl-8">
          {currentGridsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-2 border border-gray-200 rounded-md overflow-hidden"
              onClick={() => openMoviePage(item.id)}
            >
              <img src={item.poster} alt={item.title} className="h-full w-full object-cover" loading="lazy"/>
              <div className="mt-2 text-center">
                <p className="text-lg font-bold text-white hover:text-pink-500">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item.releaseDate}</p>
                <div className="flex items-center justify-center mt-1">
                <FaStar className="text-yellow-400 mr-1" />
                <p className="mt-1 text-sm text-yellow-500">{item.voterAverage}</p>
               </div>
               
              </div>
            </div>
          ))}
        </div>
    </div>
      <div className="flex items-center justify-between flex-col px-8 pb-7">
      <div className='flex md:mx-auto mx-auto'>
        <button
          type="button"
          className="text-white bg-transparent border border-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-pink-500 hover:text-black focus:outline-none md:my-3  cursor-pointer"
          onClick={ handlePrevGrid}
          disabled={gridsCurrentPage === 1}
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white bg-transparent border border-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-pink-500 hover:text-black focus:outline-none md:my-3 mx-3 cursor-pointer md:mx-4"
          onClick={handleNextGrid}
          disabled={gridsCurrentPage === totalPages}
        >
          Next
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};


export default Home





