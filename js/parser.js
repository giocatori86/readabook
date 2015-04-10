var movie = {};

function makeMovieArray() {

fetchMovieRecommendations(function(movieRecommendation) {

for	(index = 0; index < 6; index++) {
	movieName = movieRecommendation["Similar"].Results[index];


 	fetchMovieInformation(function(MovieInformation,movieName) {
	movie[index] = MovieInformation;
	



		});
	};
  });
	
};
