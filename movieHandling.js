var query = prompt("Give name of like", "Harry Potter");
jQuery.ajaxSetup({async:false});
function fetchMovieRecommendations(callback) {
	var baseUrl = "http://www.tastekid.com/api/";
	var type ="movies";
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

 	var baseUrl = "http://www.tastekid.com/api/";
 	var type ="books";
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

 function fetchBookInformation(callback) {
 	var baseUrl = "https://www.goodreads.com/search/"
 	var key = "wCFJJNFqLT034b7Nqw0duQ";
 	var url = baseUrl+"index.xml?&key="+key+"&q="+encodeURIComponent(currentTitle);      
 	$.get("http://query.yahooapis.com/v1/public/yql",
 	{
 		q: "select * from xml where url=\""+url+"\"",
 		format: "xml"
 	},
 	callback
 	);
 }
 
 
