import React, {useState, useEffect} from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import fetchApiData from '../Controller/data';

const TVDetails4 = () => {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState("topratedtv");
    const navigate = useNavigate('');

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        try{
          const response = await fetchApiData("/tv/top_rated")
        
          
          const data = response.data.results
              .filter((item) => item.poster_path !== null && item.poster_path !== undefined)
              .map((item) => ({
                id: item.id,
                title: item.title || item.name,
                poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                voterAverage: item.vote_average,
                firstAirDate: item.first_air_date
              }));
      
            setData(data);
          } catch (error) {
            console.log(error);
          }
        };
   
        const handleTabChange = (tab) => {
            setActiveTab(tab);
          };

        const handleClick = (id) => {
            navigate(`/topratedtv/${id}`);
         };

  return (
    <div className='bg-black flex flex-col justify-between mt-0 md:pr-64 my-0 items-center md:items-start'>
        <h1 className='text-white md:text-3xl text-2xl font-semibold  cursor-pointer md:ml-60 ml-0 md:mt-8 mt-4'><span className="font-bold text-3xl  text-pink-700">|</span>TOP RATED SHOWS</h1>
         <Link
          to='/topratedtv'
          className={`text-white md:text-3xl text-xs hover:text-pink-800 cursor-pointer md:ml-60 ml-9 ${
            activeTab === 'topratedtv' ? 'font-bold text-yellow-400' : ''
          }`}
          onClick={() => handleTabChange('topratedtv')}
        >
        </Link>
       
       {activeTab === 'topratedtv' && (
        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-8 grid-cols-2 md:pl-60 md:my-8 my-8 cursor-pointer pr-8 pl-8'>
          {data.map((item) => (
            <div key={item.id} onClick={() => handleClick(item.id)} className='flex flex-col justify-between  overflow-hidden bg-gray-900'>
              <img src={item.poster} alt={item.title} className='w-full h-full' loading="lazy"/>
              <div className='mt-2 text-center'>
                <p className='text-lg font-bold text-white hover:text-pink-500'>{item.title}</p>
                <p className='text-sm font-bold text-gray-500'>{item.firstAirDate}</p>
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


export default TVDetails4
