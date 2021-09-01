//to get back the array of Harry Potter Movies
import { getMovies } from "../Movies";
import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const goGetMovies = async () => {
    const Movies = await getMovies();
    setMovies(Movies.Search);
    console.log("Movies", Movies);
    console.log("movies", movies);
  };

  useEffect(() => {
    goGetMovies();
  }, []);
  return <div>{movies.length > 0 && <MovieGrid movies={movies} />}</div>;
};

export default Home;
