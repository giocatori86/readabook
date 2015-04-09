$(document).ready(function () {

    jQuery.ajaxSetup({async:false});

    bootbox.prompt({
      title: "Give in a like of a book or movie",
      value: "Harry Potter",
      callback: function(result) {
        if (result === null) {
          bootstrap.alert("Prompt dismissed");
      } else {
        query = result;
        waitingDialog.show('Fetching Book Recommendations');
        fetchInformation();
    }
}
});

    function fetchInformation() {
        fetchBookRecommendations(function(da) {
            bookArray = [];
            movieArray = [];
            jsonObj="";
            var x2js = new X2JS();
            waitingDialog.show('Fetching Book Details');
            for(index = 0; index < 7; index++) {
                currentTitle = da["Similar"].Results[index].Name;
                fetchBookInformation(function(data) {
                    jsonObj = x2js.xml2json(data);
                    bookArray.push(jsonObj["query"].results.GoodreadsResponse.search.results.work[0]);
                });
                waitingDialog.show('Fetching Movie Recommendations');
            }

            fetchMovieRecommendations(function(data) {
               waitingDialog.show('Fetching Movie Details');
               for(index = 0; index < 6; index++) {
                currentTitle = data["Similar"].Results[index].Name;
                fetchMovieInformation(function(d) {
                    movieArray.push(d);
                });
            }
            waitingDialog.show('Making Recommendation Page');
            buildTemplate(movieArray,bookArray);

        });

        });

}
function buildTemplate(movieArray,bookArray){
    var output = $("#output");    
    var template = $("#test2").html();


    var data = {
        books: [
        {   nameOfBook_home: bookArray[0].best_book.title,
            nameOfBook_holiday: bookArray[1].best_book.title,
            nameOfBook_adventure: bookArray[2].best_book.title,
            nameOfBook_advance: bookArray[3].best_book.title,
            nameOfBook_crime: bookArray[4].best_book.title,
            nameOfBook_history: bookArray[5].best_book.title,

            explanationOfBook_home:"Not Available",
            explanationOfBook_holiday: "Not Available",
            explanationOfBook_adventure: "Not Available",
            explanationOfBook_advance: "Not Available",
            explanationOfBook_crime: "Not Available",
            explanationOfBook_history: "Not Available",

            authorOfBook_home: bookArray[0].best_book.author.name,
            authorOfBook_holiday: bookArray[1].best_book.author.name,
            authorOfBook_adventure: bookArray[2].best_book.author.name,
            authorOfBook_advance: bookArray[3].best_book.author.name,
            authorOfBook_crime: bookArray[4].best_book.author.name,
            authorOfBook_history: bookArray[5].best_book.author.name,

            DateOfBook_home: bookArray[0].original_publication_year.__text,
            DateOfBook_holiday: bookArray[1].original_publication_year.__text,
            DateOfBook_adventure: bookArray[2].original_publication_year.__text,
            DateOfBook_advance: bookArray[3].original_publication_year.__text,
            DateOfBook_crime: bookArray[4].original_publication_year.__text,
            DateOfBook_history: bookArray[5].original_publication_year.__text,

            reviewsOfBook_home: bookArray[0].ratings_count.__text,
            reviewsOfBook_holiday: bookArray[0].ratings_count.__text,
            reviewsOfBook_adventure: bookArray[0].ratings_count.__text,
            reviewsOfBook_advance: bookArray[0].ratings_count.__text,
            reviewsOfBook_crime: bookArray[0].ratings_count.__text,
            reviewsOfBook_history: bookArray[0].ratings_count.__text,

            ratingOfBook_home: bookArray[0].average_rating,
            ratingOfBook_holiday: bookArray[1].average_rating,
            ratingOfBook_adventure: bookArray[2].average_rating,
            ratingOfBook_advance: bookArray[3].average_rating,
            ratingOfBook_crime: bookArray[4].average_rating,
            ratingOfBook_history: bookArray[5].average_rating,

            posterOfBook_home: bookArray[0].best_book.image_url,
            posterOfBook_holiday: bookArray[1].best_book.image_url,
            posterOfBook_adventure: bookArray[2].best_book.image_url,
            posterOfBook_advance: bookArray[3].best_book.image_url,
            posterOfBook_crime: bookArray[4].best_book.image_url,
            posterOfBook_history: bookArray[5].best_book.image_url,

            nameOfMovie_home:movieArray[0].Title,
            nameOfMovie_holiday: movieArray[1].Title,
            nameOfMovie_adventure: movieArray[2].Title,
            nameOfMovie_advance: movieArray[3].Title,
            nameOfMovie_crime: movieArray[4].Title,
            nameOfMovie_history: movieArray[5].Title,

            explanationOfMovie_home: movieArray[0].Plot,
            explanationOfMovie_holiday: movieArray[1].Plot,
            explanationOfMovie_adventure: movieArray[2].Plot,
            explanationOfMovie_advance: movieArray[3].Plot,
            explanationOfMovie_crime: movieArray[4].Plot,
            explanationOfMovie_history: movieArray[5].Plot,

            authorOfMovie_home: movieArray[0].Writer,
            authorOfMovie_holiday: movieArray[1].Writer,
            authorOfMovie_adventure: movieArray[2].Writer,
            authorOfMovie_advance: movieArray[3].Writer,
            authorOfMovie_crime: movieArray[4].Writer,
            authorOfMovie_history: movieArray[5].Writer,

            DateOfMovie_home: movieArray[0].Year,
            DateOfMovie_holiday: movieArray[1].Year,
            DateOfMovie_adventure: movieArray[2].Year,
            DateOfMovie_advance: movieArray[3].Year,
            DateOfMovie_crime: movieArray[4].Year,
            DateOfMovie_history: movieArray[5].Year,

            themeOfMovie_home: movieArray[0].Genre,
            themeOfMovie_holiday: movieArray[1].Genre,
            themeOfMovie_adventure: movieArray[2].Genre,
            themeOfMovie_advance: movieArray[3].Genre,
            themeOfMovie_crime: movieArray[4].Genre,
            themeOfMovie_history: movieArray[5].Genre,

            ratingOfMovie_home: movieArray[0].imdbRating,
            ratingOfMovie_holiday: movieArray[1].imdbRating,
            ratingOfMovie_adventure: movieArray[2].imdbRating,
            ratingOfMovie_advance: movieArray[3].imdbRating,
            ratingOfMovie_crime: movieArray[4].imdbRating,
            ratingOfMovie_history: movieArray[5].imdbRating,

            posterOfMovie_home: movieArray[0].Poster,
            posterOfMovie_holiday: movieArray[1].Poster,
            posterOfMovie_adventure: movieArray[2].Poster,
            posterOfMovie_advance: movieArray[3].Poster,
            posterOfMovie_crime: movieArray[4].Poster,
            posterOfMovie_history: movieArray[5].Poster,

            ratingOfMovie_home: movieArray[0].imdbRating,
            ratingOfMovie_holiday: movieArray[1].imdbRating,
            ratingOfMovie_adventure: movieArray[2].imdbRating,
            ratingOfMovie_advance: movieArray[3].imdbRating,
            ratingOfMovie_crime: movieArray[4].imdbRating,
            ratingrOfMovie_history: movieArray[5].imdbRating,
        }
        ]};

        html = Mustache.render(template, data);
        waitingDialog.hide('Fetching Recommendations');
        output.append(html);

    }
});