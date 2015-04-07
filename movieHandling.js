
var query = "Reservoir Dogs";
var likes = {};
var titleBook = "";
var movieName="Reservoir Dogs";
var moviename ="";
var movieTitle=[];


function fetchMovieRecommendations(callback) {
    var baseUrl = "http://www.tastekid.com/api/";
    var type ="movie";
    var key = "131520-ReadAMov-GLLWO1NB";

    var url = baseUrl + "/similar?q=";
    url += encodeURIComponent(query)+"&type="+type+"&k="+key;
        return $.ajax({
            dataType: 'jsonp',
    url: url,
    async: false
        })
        .done(callback)
        .fail(function(jqXHR, textStatus, errorThrown) {
    });
};

/**
 * Callback for fetchMovieRecommendations
 * @param  uri {               movieArray Contains all movie info
 * @return {callback in callback}       Calls on success fetchMovieInformation which has a callback to movieArray.push(d); -JK
 */


function fetchMovieInformation(callback) {
var baseUrl = "http://www.omdbapi.com/"
var url = baseUrl+"/?t="+encodeURIComponent(currentTitle)+"&type=movie&r=json&tomatoes=true";
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


/* Books below this line -JK */
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