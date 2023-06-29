import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import fetchApiData from '../Controller/data';


const GenrePage2 = () => {
    const { genreId } = useParams();
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
              const genreResponse = await fetchApiData("/genre/movie/list")

              console.log('Genre Response:', genreResponse.data);
              
              const selectedGenre = genreResponse.data.genres.find((genre) => genre.name === genreId);
              const genreIdFilter = selectedGenre ? selectedGenre.id : null;
    
            
    
              const topMoviesResponse = await fetchApiData("/movie/top_rated")
    
              console.log('Top Movie Response:', topMoviesResponse.data);
    
    
              const  nowplayingMovieResponse = await fetchApiData("/movie/now_playing")

              console.log('Now-Playing Movie Response:',  nowplayingMovieResponse.data);
              
    
              const  upcomingMovieResponse = await fetchApiData("/movie/upcoming")
    
              console.log('Upcoming Movie Response:', upcomingMovieResponse.data);
      
              
              const filteredData = [...nowplayingMovieResponse.data.results, ...upcomingMovieResponse.data.results, ...topMoviesResponse.data.results].filter((item) => {
                const itemGenreIds = item.genre_ids || item.genre_id || [];
                return itemGenreIds.includes(genreIdFilter);
              });
      
              console.log('Filtered Data:', filteredData);
            
            
            setData(filteredData);
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
        };
    
        fetchData();
      }, [genreId]);

      if (!data || data.length === 0) {
        return <div className='flex flex-col items-center md:ml-4 min-h-screen'>Loading...</div>;
      }
    
      return (
        <div className='bg-black  overflow-hidden'>
      <h1 className="text-white md:text-4xl text-2xl font-serif text-left md:ml-64 ml-4 mt-6 mb-5 hover:text-pink-500 hover:underline cursor-pointer">GENRE - {genreId}</h1>
      <div className="container md:ml-8 mt-4">
        <ul>
          {data.map((item) => (
            <li key={item.id}  className="mb-4">
              <div className="flex">
                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} className="mr-4 md:ml-56 ml-2 mt-6 " loading="lazy"/>
                <div>
                  <h2 className="text-yellow-300 text-lg font-bold mt-6 md:w-fit md:h-fit w-1/3 ">{item.title}{item.name}</h2>
                  <p className="text-gray-500">{item.genre_Ids}</p>
                  <p className="text-gray-500">{item.release_date}{item.first_air_date}</p>
                  <div className='flex mt-2'>
                    <FaStar className='text-yellow-300 mr-1 mt-1'/>   
                    <p className="text-yellow-300 mr-72">{item.vote_average}</p></div>
                  <p className="text-pink-500 md:text-lg text-xs md:mr-72 mt-4 md:w-fit w-36 mr-12">{item.overview}</p> 
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default GenrePage2
