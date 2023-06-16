import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const TVFeaturedToday = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today`, {
            params: {
              language: 'en-US',
            },
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzMzZWQxY2NlOGMxMDMwNDQ5N2UyNzg4YTYwNDIxYiIsInN1YiI6IjY0NmEzODFiYTUwNDZlMDEwNThiZjZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYqyCI7ZTaEawRt_iulQgvOja6jm2i5voF9xqie-GM8'
            }
          });
  
          const item = response.data.results.find(item => item.id.toString() === id);
  
          if (item) {
            const { title, name, poster_path, release_date, first_air_date , overview } = item;
  
            const data = {
              id,
              title: title || name,
              poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
              releaseDate: release_date || first_air_date,
              overView: overview
            };
  
            setData(data);
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [id]);
  
    useEffect(() => {
      if (data) {
        const { title, poster, releaseDate, overView } = data;
        console.log('title:', title);
        console.log('poster:', poster);
        console.log('releaseDate:', releaseDate);
        console.log('overView:', overView);
      }
    }, [data]);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    const { title, poster, releaseDate, overView } = data;
  
    return (
      <div className='bg-black flex flex-col justify-between items-center pt-6'>
        <img src={poster} alt={title} className='flex flex-col border p-2 border-gray-200 rounded-md overflow-hidden md:w-1/6 md:h-full w-1/2 h-full items-start pt-2' />
        <h1 className='text-white md:text-lg md:pt-10 pt-4 text-2xl font-serif ml-9 mr-3'>{title}</h1>
        <p className='text-yellow-400'>First air date: {releaseDate}</p>
        <p className='text-pink-600 flex flex-col md:ml-96 md:mr-96 md:pb-40 text-xl md:pt-8 pt-6 pb-28 ml-10 mr-8'>{overView}</p>
      </div>
    );
  };



export default TVFeaturedToday
