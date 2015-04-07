
var query = "Reservoir Dogs";
var likes = {};
var titleBook = "";
var movieName="Reservoir Dogs";
var moviename ="";
var movieTitle=[];


function Movie(movieTitle, movieGenre) {
        this.movieTitle = movieTitle;
        this.movieGenre = movieGenre;
};



function fetchMovieRecommendations(callback) {
			var baseUrl = "http://www.tastekid.com/api/";
			var type 	=	"movie";
			var key = "131520-ReadAMov-GLLWO1NB";
			console.log("START Recommendation (movie)");

			var url = baseUrl + "/similar?q=";
			url += encodeURIComponent(query)+"&type="+type+"&k="+key;
     return $.ajax({
        	dataType: 'jsonp',
		url: url,
		async: false
    })
    .done(callback)
    .fail(function(jqXHR, textStatus, errorThrown) {
        // Handle error
    });
}

function fetchMovieInformation(callback) {
var baseUrl = "http://www.omdbapi.com/"
var url = baseUrl+"/?t="+encodeURIComponent(moviename.Name)+"&type=movie&r=json&tomatoes=true";
        return $.ajax({
        dataType: 'json',
		url: url,
		async: false
    })
    .done(callback)
    .fail(function(jqXHR, textStatus, errorThrown) {
        // Handle error
    });
}

function fetchBookRecommendations(callback) {

var baseUrl = "http://www.tastekid.com/api/"
			var type 	=	"book";
			var key = "131520-ReadAMov-8Z16J8NJ";
		
			/ read in array /

			var url = baseUrl + "/similar?q=";
			url += encodeURIComponent(query)+"&type="+type+"&k="+key;
     return $.ajax({
        dataType: 'jsonp',
		url: url,
		async: false
    })
    .done(callback)
    .fail(function(jqXHR, textStatus, errorThrown) {
        // Handle error
    });
}



function fetchBookInformation(callback) {
var baseUrl = "https://www.goodreads.com/book/"
var titleBook = "taken"
var key = "wCFJJNFqLT034b7Nqw0duQ";
var url = baseUrl+"title.json?&title="+titleBook +"key="+key;
console.log(url);

        return $.ajax({
        dataType: 'jsonp',
		url: url,
		async: false
    })
    .done(callback)
    .fail(function(jqXHR, textStatus, errorThrown) {
        // Handle error
    });
}

function makeMovieArray() {
	console.log("START");
	console.log("START Recommendation (fetching Movie Information about Recommended Movies)");
	fetchMovieRecommendations(function(movieRecommendation) {

for	(index = 0; index < 6; index++) {

	moviename = movieRecommendation["Similar"].Results[index];	
 	
 	fetchMovieInformation(function(MovieInformation) {
	
	movieTitle.push(MovieInformation.Title)
		});
	};
  });	
console.log("FINISHED making Recommendation for Movies");
console.log(movieTitle);
}



