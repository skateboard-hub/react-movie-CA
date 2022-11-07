import React from "react";
//import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import {createRoot} from 'react-dom/client';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PeoplePage from './pages/peoplePage'
import PeopleDetailsPage from './pages/peopleDetailsPage'
import TopRatedMoviesPage from './pages/topRatedMoviesPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/peoples" element={<PeoplePage />} />
        <Route path="/peoples/:id" element={<PeopleDetailsPage />} />
        <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
      </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);

