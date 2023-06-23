import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { FaStar } from 'react-icons/fa';

export const SearchResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q');

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      const apiEndpoints = {
        all: {
          url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
          bearerToken: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },

        movie: {
          url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          bearerToken:  `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        tv: {
          url: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
          bearerToken:  `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        
        
      };

      const searchresultTypes = Object.keys(apiEndpoints);
      const matchingresultType = searchresultTypes.find((resultType) =>
        searchTerm.toLowerCase().includes(resultType.toLowerCase())
      );

      if (matchingresultType) {
        const { url, bearerToken } = apiEndpoints[matchingresultType];

        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: bearerToken,
              'Content-Type': 'application/json',
            },
            params: {
              q: searchTerm,
            },
          });

          setSearchResults(response.data.results);
        } catch (error) {
          console.log(error);
        }
      } else {
        setSearchResults([]);
      }
    };

    if (searchTerm) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className='bg-black overflow-hidden'>
      <h2 className='bg-black text-white md:mx-60 mx-4 pt-8 text-2xl font-serif'>Search Results for "{searchTerm}"</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <div key={result.id} className='pb-4'>
              <div className='flex flex-wrap'>
            <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt={result.title} loading="lazy" className="mr-4 md:ml-72 ml-4 mt-6 " />
            <div>
             <h2 className="text-yellow-300 text-lg md:mx-64 mx-4 font-bold mt-6 md:w-fit md:h-fit w-1/3 ">{result.title}{result.name}</h2>
              <p className="text-gray-500 md:mx-64 mx-4">{result.release_date}{result.first_air_date}</p>
              {/* <div className='flex mt-2'>
              <FaStar className='text-yellow-300 mr-1 mt-1 md:mx-64 mx-4'/>   
              <p className="text-yellow-300 mr-72 mx-0">{result.vote_average}</p></div> */}
              <p className="text-pink-500 md:text-lg text-xl md:mr-72 mt-4 md:w-fit w-80 mr-10 md:mx-64 mx-4">{result.overview}</p> 
                </div>
            </div>
            </div>
          ))}
        </ul>
      ) : (
        <p className='text-white pb-4 pt-4 mx-60 text-xl font-serif'>No results found for "{searchTerm}".</p>
      )}
    </div>
  );
};
