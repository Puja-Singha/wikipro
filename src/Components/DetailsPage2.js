    import React, {useState, useEffect} from 'react';
    import axios from 'axios';
    import { useParams } from 'react-router-dom';

    export const DetailsPage2 = () => {
        const [data, setData] = useState(null);
        const { id } = useParams();


        useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
                params: {
                language: 'en-US',
             },
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            });
    
            const { name, poster_path, first_air_date, overview } = response.data;

            const showData = {
              id,
              title: name,
              poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
              releaseDate: first_air_date,
              overview,
            };
    
            setData(showData);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [id]);
    
      useEffect(() => {
        if (data) {
          console.log('Show Data:');
          console.log('Title:', data.title);
          console.log('Poster:', data.poster);
          console.log('Release Date:', data.releaseDate);
          console.log('Overview:', data.overview);
        }
      }, [data]);
    
      if (!data) {
        return <div>Loading...</div>;
      }
    
      return (
        <div className='bg-black flex flex-col justify-between items-center pt-6'>
          <img
            src={data.poster}
            alt={data.title}
            className='flex flex-col border p-2 border-gray-200 rounded-md overflow-hidden md:w-1/6 md:h-full w-1/2 h-full items-start pt-2' loading="lazy"
          />
          <h1 className='text-white md:text-lg md:pt-10 pt-4 text-2xl font-serif items-center'>{data.title}</h1>
          <p className='text-yellow-400'>Release Date: {data.releaseDate}</p>
          <p className='text-pink-600 flex flex-col md:ml-96 md:mr-96 md:pb-40 text-xl md:pt-8 pt-6 pb-56 ml-10 mr-8'>{data.overview}</p>
        </div>
      );
    };