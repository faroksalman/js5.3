for (const movie of movies) {
      if (movie.rating > highestRating) {
        highestRating = movie.rating;
        topRatedMovies = [movie.title];
      } else if (movie.rating === highestRating) {
        topRatedMovies.push(movie.title);
      }
    }
    