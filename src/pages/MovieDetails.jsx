import { Container, Button } from "react-bootstrap";
import { getMoviesDetails } from "../Movies";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const MovieDetails = () => {
  const params = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  const getSelectedMovie = useCallback(async () => {
    try {
      const movieInfo = await getMoviesDetails(params.imdbID);
      setMovie(movieInfo);
      console.log(movieInfo);
    } catch (error) {
      console.log("Page not found.");
    }
  }, [params.imdbID]);

  useEffect(() => {
    getSelectedMovie();
  }, [getSelectedMovie]);

  console.log(movie.Poster)
  return (
    <Container>
      <Button
        className="btn btn-primary"
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </Button>
      <div>{params.imdbID}</div>
      <div>{movie.Title}</div>
      <img style={{ width: "100%" }} src={movie.Poster} alt={movie.Title} />
    </Container>
  );
};

export default MovieDetails;
