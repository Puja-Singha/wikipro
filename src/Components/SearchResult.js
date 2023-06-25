import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { FaStar } from 'react-icons/fa';

export const SearchResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q');


  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const query = encodeURIComponent(searchTerm);

        const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
        const bearerToken = `Bearer ${process.env.REACT_APP_API_KEY}`;

        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: bearerToken,
              'Content-Type': 'application/json',
            },
          });

          setSearchResults(response.data.results || []);
          setIsLoading(false);
        } catch (error) {
          console.log(error.response);
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className='bg-black overflow-hidden min-h-screen flex flex-col'>
      <h2 className='bg-black text-white md:mx-60 mx-4 pt-8 text-2xl font-serif'>
        Search Results for "{searchTerm}"
      </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <div key={result.id} className='pb-4'>
              <div className='flex flex-wrap'>
                <img
                  src={`https://image.tmdb.org/t/p/w200${result.poster_path || result.profile_path || result.backdrop_path}`}
                  alt={result.title || result.name}
                  loading='lazy'
                  className='mr-4 md:ml-72 ml-4 mt-6'
                />
                <div>
                  <h2 className='text-yellow-300 text-lg md:mx-64 md:flex flex-col mx-4 font-bold mt-6 md:w-fit md:h-fit w-1/3'>
                    {result.title || result.name || result.known_for.original_title}
                  </h2>
                  <p className='text-gray-500 md:mx-64 mx-4'>
                    {result.release_date || result.first_air_date}
                  </p>
                  <p className='text-pink-500 md:text-lg text-xl md:mr-72 mt-4 md:w-fit w-80 mr-10 md:mx-64 mx-4'>
                    {result.overview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p className='text-white pb-4 pt-4 md:mx-60 mx-4 text-xl font-serif'>
          No results found for "{searchTerm}".
        </p>
      )}
    </div>
  );
};