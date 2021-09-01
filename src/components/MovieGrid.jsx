import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
    // console.log(movies)
  return (
    <Row>
      {/* i to give each movie a unique key */}
      {movies.map((movie, i) => (
        <Col xs={12} md={6} lg={3} key={i} className="mb-2">
          {/* <MovieCard movie={movie} /> */}
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieGrid;
