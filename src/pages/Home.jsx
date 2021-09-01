//to get back the array of Harry Potter Movies
import { getMovies } from "../Movies";
import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const goGetMovies = async () => {
      const HPMovies = await getMovies();
      setMovies(HPMovies);
    };

    goGetMovies();
  }, []);
  return <div>{movies.length > 0 && <MovieGrid movies={movies} />}</div>;
};

export default Home;
