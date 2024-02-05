//Question 1
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of Movie
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Example for getPG method
  const moviesArray = [
    new Movie("Shawsank Redemption", "Castle Rock Entertainment", "PG"),
    new Movie("Seven Samurai", "Toho", "PG"),
    new Movie("Goodfellas", "Warner Bros. Pictures", "R"),
    new Movie("Raging Bull", "Chartoff-Winkler Productions, Inc", "R"),
  ];
  
  const pgMoviesArray = Movie.getPG(moviesArray);
  
  console.log(casinoRoyale);
  console.log(pgMoviesArray);
  