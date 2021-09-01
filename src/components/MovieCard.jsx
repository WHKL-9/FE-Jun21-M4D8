import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  console.log({ movie });
  return (
    <Link to={`/movie/${movie.imdbID}`}>
        <Card style={{ height: "100%" }} className="mx-1">
          {movie.Poster && <Card.Img src={movie.Poster} />}
        </Card>
    </Link>
  );
};

export default MovieCard;
