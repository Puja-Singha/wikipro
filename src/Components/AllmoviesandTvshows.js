import React, {useEffect, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import fetchApiData  from "../Controller/data"


export const AllmoviesandTvshows = () => {
  const [data, setData] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [trending, setTrending] = useState([])
  const [activeTab, setActiveTab] = useState("topPicks");
  const navigate = useNavigate();

 



  useEffect(() => {
  fetchData();
  fetchPopularTvShows();
  fetchPopularMovies();
  fetchTrending();
  // fetchTrend()
  }, [])

  // const fetchTrend = async() => {
  //   const trendingData = await fetchApiData("/trending/all/day");
  //   console.log(trendingData);
  // }


  

   const fetchData = async () => {
    try{
      const response = await fetchApiData("/trending/all/day")

      const data = response.data.results
          .filter((item) => item.poster_path !== null && item.poster_path !== undefined)
          .map((item) => ({
            id: item.id,
            title: item.title || item.name,
            poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            voterAverage: item.vote_average,
            releaseDate: item.release_date
          }));
  
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPopularTvShows = async () => {
      try {
        const response = await fetchApiData("/tv/top_rated")
    
        const data = response.data.results
          .filter((item) => item.poster_path !== null && item.poster_path !== undefined)
          .map((item) => ({
            id: item.id,
            title: item.name,
            poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            voterAverage: item.vote_average,
            firstAirDate: item.first_air_date
          }));
    
        setPopularTvShows(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    
    const fetchPopularMovies = async () => {
      try {
        const response = await fetchApiData("/movie/top_rated")
      
        
        const data2 = response.data.results
            .filter((item) => item.poster_path !== null && item.poster_path !== undefined)
            .map((item) => ({
              id: item.id,
              title: item.title || item.name,
              poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              voterAverage: item.vote_average,
              releaseDate: item.release_date
            }));
    
        setPopularMovies(data2);
        } catch (error) {
          console.log(error);
        }
    }

   const fetchTrending = async () => {
    try {
      const response = await fetchApiData("/movie/now_playing")
    
      
      const data3 = response.data.results
          .filter((item) => item.poster_path !== null && item.poster_path !== undefined)
          .map((item) => ({
            id: item.id,
            title: item.title || item.name,
            poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            voterAverage: item.vote_average,
            releaseDate: item.release_date
          }));
  
        setTrending(data3);
      } catch (error) {
        console.log(error);
      }
    };
   
  

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
    
    const handleClick = (id) => {
      navigate(`/details/${id}`);
    };
    
    const openTvPage = (id) => {
      navigate(`/details2/${id}`);
    }

    const openMoviePage = (id) => {
      navigate(`/details3/${id}`);
    }

    const openTrendingPage = (id) => {
      navigate(`/details4/${id}`);
    }



  return (
    <div className='bg-black flex flex-col justify-between mt-0 md:pr-64 my-0 items-center md:items-start'>
     <h1 className=' text-white font-serif md:text-6xl text-2xl text-start md:mx-60 md:py-8 py-4 md:my-0 my-0 cursor-pointer'>
          What to Watch - WikiPro
        </h1>
      <div className='heading-container flex '>
      <Link
          to='/top-picks'
          className={`text-white md:text-sm text-xs hover:text-pink-800 cursor-pointer md:ml-60 ml-9   ${
            activeTab === 'topPicks' ? 'font-bold text-yellow-400' : ''
          }`}
          onClick={() => handleTabChange('topPicks')}
        >
          TOP PICKS
        </Link>
      
        <Link
          to="/popularTvShows"
          className={`text-white md:text-sm text-xs hover:text-pink-800 cursor-pointer md:ml-8 mx-5 ${
            activeTab === 'popularTvShows' ? 'font-bold text-yellow-400' : ''
          }`}
          onClick={() => handleTabChange('popularTvShows')}
        >
          POPULAR-TV SHOWS
        </Link>
      
      <Link to='/popularMovies'
          className={`text-white md:text-sm text-xs hover:text-pink-800 cursor-pointer md:ml-4 mx-4 ${
            activeTab === 'popularMovies' ? 'font-bold text-yellow-400' : ''
          }`}
          onClick={() => handleTabChange('popularMovies')}> POPULAR-MOVIES</Link>
      
      <Link to='/trending'className={`text-white md:text-sm text-xs hover:text-pink-800 cursor-pointer md:ml-4  mr-8 ${
            activeTab === 'trending' ? 'font-bold text-yellow-400' : ''
          }`}
          onClick={() => handleTabChange('trending')}>IN-THEATERS</Link>
      </div>
     
      {activeTab === 'topPicks' && (
        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-8 grid-cols-2 md:pl-60 md:my-8 my-8 cursor-pointer pr-8 pl-8'>
          {data.map((item) => (
            <div key={item.id} onClick={() => handleClick(item.id)} className='flex flex-col justify-between  overflow-hidden bg-gray-900'>
              <img src={item.poster} alt={item.title} className='w-full h-full' />
              <div className='mt-2 text-center'>
                <p className='text-lg font-bold text-white hover:text-pink-500'>{item.title}</p>
                <p className='text-sm font-bold text-gray-500'>{item.releaseDate}</p>
                <div className='flex items-center justify-center mt-1'>
                  <FaStar className='text-yellow-400 mr-1' />
                  <p className='mt-1 text-sm text-yellow-500'>{item.voterAverage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
        {activeTab === 'popularTvShows' && (
        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-8 grid-cols-2 md:pl-60 md:my-8 my-8 cursor-pointer pr-8 pl-8'>
          {popularTvShows.map((item) => (
            <div key={item.id} onClick={() => openTvPage(item.id)} className='flex flex-col justify-between  overflow-hidden bg-gray-900'>
              <img src={item.poster} alt={item.title} className='h-full w-full' />
              <div className='mt-2 text-center'>
                <p className='text-lg font-bold text-white hover:text-pink-500'>{item.title}</p>
                <p className='mt-1 text-sm text-gray-500'>{item.firstAirDate}</p>
                <div className='flex items-center justify-center mt-1'>
                  <FaStar className='text-yellow-400 mr-1' />
                  <p className='mt-1 text-sm text-yellow-500'>{item.voterAverage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
        {activeTab === 'popularMovies' && (
        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-8 grid-cols-2 md:pl-60 md:my-8 my-8 cursor-pointer pr-8 pl-8'>
          {popularMovies.map((item) => (
            <div key={item.id} onClick={() => openMoviePage(item.id)} className='flex flex-col justify-between  overflow-hidden bg-gray-900'>
              <img src={item.poster} alt={item.title} className='h-full w-full' />
              <div className='mt-2 text-center'>
                <p className='text-lg font-bold text-white hover:text-pink-500'>{item.title}</p>
                <p className='mt-1 text-sm text-gray-500'>{item.releaseDate}</p>
                <div className='flex items-center justify-center mt-1'>
                  <FaStar className='text-yellow-400 mr-1' />
                  <p className='mt-1 text-sm text-yellow-500'>{item.voterAverage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
       {activeTab === 'trending' && (
        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-8 grid-cols-2 md:pl-60 md:my-8 my-8 cursor-pointer pr-8 pl-8'>
          {trending.map((item) => (
            <div key={item.id} onClick={() => openTrendingPage(item.id)} className='flex flex-col justify-between  overflow-hidden bg-gray-900'>
              <img src={item.poster} alt={item.title} className='h-full w-full' />
              <div className='mt-2 text-center'>
                <p className='text-lg font-bold text-white hover:text-pink-500'>{item.title}</p>
                <p className='mt-1 text-sm text-gray-500'>{item.releaseDate}</p>
                <div className='flex items-center justify-center mt-1'>
                  <FaStar className='text-yellow-400 mr-1' />
                  <p className='mt-1 text-sm text-yellow-500'>{item.voterAverage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
