import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home.js';
import { AllmoviesandTvshows } from './Components/AllmoviesandTvshows';
import { DetailsPage } from './Components/DetailsPage';
import { DetailsPage2 } from './Components/DetailsPage2';
import { DetailsPage3 } from './Components/DetailsPage3';
import { DetailsPage4 } from './Components/DetailsPage4';
import { SearchResult } from './Components/SearchResult';
import { MovieDetails1 } from './Components/MovieDetails1';
import { Nowplaying } from './Components/Nowplaying';
import { MovieDetails2 } from './Components/MovieDetails2';
import { Popular } from './Components/Popular';
import { MovieDetails3 } from './Components/MovieDetails3';
import { TopRatedMovies } from './Components/TopRatedMovies';
import { MovieDetails4 } from './Components/MovieDetails4';
import { UpcomingMovies } from './Components/UpcomingMovies';
import TVDetails from './Components/TVDetails';
import TVFeaturedToday from './Components/TVFeaturedToday';
import TVDetails2 from './Components/TVDetails2';
import { OnTheAir } from './Components/OnTheAir';
import TVDetails3 from './Components/TVDetails3';
import { PopularTv } from './Components/PopularTv';
import TVDetails4 from './Components/TVDetails4';
import { TvTopRated } from './Components/TvTopRated';
import MovieList from './Components/MovieList';
import GenrePage from './Components/GenrePage';
import GenrePage2 from './Components/GenrePage2';
import GenrePage3 from './Components/GenrePage3';
import TVList from './Components/TVList';
import Footer from './Components/Footer';



function App() {
  
  return (
    <Router>
    <div>
      <Navbar/>
       <Routes>
        <Route exact path='/' element={<Home title="WikiProgram"/>}></Route>
        <Route exact path='/top-picks' element={<AllmoviesandTvshows/>}></Route>
        <Route exact path='/popularTvShows' element={<AllmoviesandTvshows/>}></Route>
        <Route exact path='/popularMovies' element={<AllmoviesandTvshows/>}></Route>
        <Route exact path='/trending' element={<AllmoviesandTvshows/>}></Route> 
        <Route exact path='/details/:id' element={<DetailsPage/>}></Route> 
        <Route exact path='/details2/:id' element={<DetailsPage2/>}></Route> 
        <Route exact path='/details3/:id' element={<DetailsPage3/>}></Route> 
        <Route exact path='/details4/:id' element={<DetailsPage4/>}></Route> 
        <Route exact path='/search' element={<SearchResult/>}></Route> 
        <Route exact path='/moviedetail1' element={<MovieDetails1/>}></Route>
        <Route exact path='/nowplaying/:id' element={<Nowplaying/>}></Route> 
        <Route exact path='/moviedetails2' element={<MovieDetails2/>}></Route>
        <Route exact path='/popular/:id' element={<Popular/>}></Route> 
        <Route exact path='/moviedetails3' element={<MovieDetails3/>}></Route>
        <Route exact path='/toprated/:id' element={<TopRatedMovies/>}></Route>
        <Route exact path='/moviedetails4' element={<MovieDetails4/>}></Route>
        <Route exact path='/upcoming/:id' element={<UpcomingMovies/>}></Route>
        <Route exact path='/tvdetails' element={<TVDetails/>}></Route>
        <Route exact path='/featuredtoday/:id' element={<TVFeaturedToday/>}></Route>
        <Route exact path='/tvdetails2' element={<TVDetails2/>}></Route>
        <Route exact path='/ontheair/:id' element={<OnTheAir/>}></Route>
        <Route exact path='/tvdetails3' element={<TVDetails3/>}></Route>
        <Route exact path='/populartv/:id' element={<PopularTv/>}></Route>
        <Route exact path='/tvdetails4' element={<TVDetails4/>}></Route>
        <Route exact path='/topratedtv/:id' element={<TvTopRated/>}></Route>
        <Route exact path='/movielist' element={<MovieList/>}></Route>
        <Route exact path='/genre/:genreId' element={<GenrePage/>}></Route>
        <Route exact path='/genre2/:genreId' element={<GenrePage2/>}></Route>
        <Route exact path='/genre3/:genreId' element={<GenrePage3/>}></Route>
        <Route exact path='/tvlist' element={<TVList/>}></Route>
       </Routes>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;
