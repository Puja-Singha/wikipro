import React from 'react'
import { Link } from 'react-router-dom';

const TVList = () => {
    return(
      <div className='bg-white flex flex-col justify-between mt-0 md:pr-64 my-0 items-center md:items-start h-screen'>
      <div className=' container flex flex-col'>
        <h1 className='text-black md:text-5xl text-lg font-bold text-left md:ml-60 ml-4 mt-6 mb-0'>
          <span className="font-bold md:text-6xl text-2xl text-pink-700">|</span> Popular TV Show and movie genres
        </h1>
        <div className="flex flex-wrap md:ml-60 ml-2 mt-2 overflow-x-hidden">
          <Link to='/genre/Action' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mt-2 md:mr-2'>Action</Link>
          <Link  to='/genre/Adventure' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Adventure</Link>
          <Link  to='/genre/Animation' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col   mx-1 mt-2 md:mr-2'>Animation</Link>
          <Link   to='/genre/Comedy' className='text-black md:text-lg text-sm hover:bg-pink-500 rounded-full border border-pink-600 p-1 flex flex-col mx-1  mt-2 md:mr-2'>Comedy</Link>
          <Link   to='/genre/Crime' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Crime</Link>
          <Link  to='/genre/Drama' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Drama</Link>
          <Link  to='/genre/Fantasy' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Fantasy</Link>
          <Link  to='/genre/Family' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Family</Link>
          <Link  to='/genre/Horror' className='text-black md:text-lg hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Horror</Link>
          <Link  to='/genre/Mystery' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Mystery</Link>
          <Link  to='/genre/Romance' className='text-black md:text-lg text-sm hover:bg-pink-500 rounded-full border border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Romance</Link>
          <Link  to='/genre/Sci-Fi' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Science Fiction</Link>
          <Link  to='/genre/Thriller' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Thriller</Link>
        </div>
      </div>
      <div className='container flex flex-col overflow-hidden top-0'>
        <h1 className='text-black md:text-5xl text-lg font-bold text-left md:ml-60 ml-4 mt-10'>
          <span className="font-bold md:text-6xl text-2xl text-pink-700">|</span> Popular movies by genres
        </h1>
        <div className="flex flex-wrap md:ml-60 ml-4 mt-4 overflow-x-hidden">
          <Link to='/genre2/Action'  className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mt-2 md:mr-2'>Action</Link>
          <Link to='/genre2/Adventure' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Adventure</Link>
          <Link to='/genre2/Animation' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Animation</Link>
          <Link to='/genre2/Documentary' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Documentary</Link>
          <Link to='/genre2/Comedy' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Comedy</Link>
          <Link to='/genre2/Crime' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Crime</Link>
          <Link to='/genre2/Drama' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Drama</Link>
          <Link to='/genre2/Fantasy' className='text-black md:text-lg text-sm md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Fantasy</Link>
          <Link to='/genre2/Horror' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Horror</Link>
          <Link to='/genre2/Mystery' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Mystery</Link>
          <Link to='/genre2/Romance' className='text-black  md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Romance</Link>
          <Link to='/genre2/Science Fiction' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Science Fiction</Link>
          <Link to='/genre2/Thriller' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Thriller</Link>
          <Link to='/genre2/Biography' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Biography</Link>
          <Link to='/genre/History' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>History</Link>
          <Link to='/genre/Music' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Music</Link>
          <Link to='/genre/Western' className='text-black md:text-lg text-sm md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Western</Link>
          <Link to='/genre/War' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>War</Link>
          
        </div>
      </div>
      <div className='container flex flex-col overflow-hidden'>
        <h1 className='text-black md:text-5xl text-lg font-bold text-left md:ml-60 ml-4 mt-10'>
          <span className="font-bold  md:text-6xl text-2xl text-pink-700">|</span> Popular TV shows by genres
        </h1>
        <div className="flex flex-wrap md:ml-60 ml-2 mt-4 mb-4 overflow-x-hidden">
          <Link to='/genre3/Action & Adventure' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl  border-pink-600 p-1 flex flex-col mt-2 md:mr-2'>Action & Adventure</Link>
          <Link to='/genre3/Animation' className='text-black md:text-lg  text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Animation</Link>
          <Link to='/genre3/Documentary' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Documentary</Link>
          <Link to='/genre3/Comedy' className='text-black  md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Comedy</Link>
          <Link to='/genre3/Crime' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Crime</Link>
          <Link to='/genre3/Drama' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Drama</Link>
          <Link to='/genre3/Family' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Family</Link>
          <Link to='/genre3/Mystery' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Mystery</Link>
          <Link to='/genre3/Sci-Fi & Fantasy' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Sci-Fi & Fantasy</Link>
          <Link to='/genre3/Kids' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Kids</Link>
          <Link to='/genre3/Soap' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Soap</Link>
          <Link to='/genre3/Talk' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Talk</Link>
          <Link to='/genre3/News' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>News</Link>
          <Link to='/genre3/Reality' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>Reality</Link>
          <Link to='/genre3/War & Politics' className='text-black md:text-lg text-sm hover:bg-pink-500 md:rounded-full border rounded-2xl border-pink-600 p-1 flex flex-col mx-1 mt-2 md:mr-2'>War & Politics</Link>
        </div>
      </div>
     
    </div>
  );
};

export default TVList
