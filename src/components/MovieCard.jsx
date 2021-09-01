import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
    console.log({movie})
  return (
    <Card style={{ height: "100%" }}>
      {movie.Search.Poster && <Card.Img src={movie.Search.Poster} />}
      <h4>{movie.Search.Title}</h4>
    </Card>
  );
};

export default MovieCard;
