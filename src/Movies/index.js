//get back array of movies
export const getMovies = async () => {
  //fetch Harry Potter Movies
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=55818844&s=Harry Potter&type=movie&page=1"
    );
    if (response.ok) {
      const movie_json = await response.json();
      return movie_json;
    } else {
      throw new Error("Movies could not be fetched!");
    }
  } catch (error) {
    console.log(error);
  }
};

// get back movie detail
export const getMoviesDetails = async (id) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=55818844&i=${id}`
    );
    if (response.ok) {
      const movie_details_json = await response.json();
      return movie_details_json;
    } else {
      throw new Error("Movies could not be fetched!");
    }
  } catch (error) {
    console.log(error);
  }
};
