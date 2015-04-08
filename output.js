$(document).ready(function () {
    fetchBookRecommendations(function(da) {
        bookArray = [];
        var x2js = new X2JS();
         for(index = 0; index < 6; index++) {
            currentTitle = da["Similar"].Results[index].Name;
            fetchBookInformation(function(da) {
            var jsonObj = x2js.xml2json(da);
            bookArray.push(jsonObj);
           
            });
        }
        

    fetchMovieRecommendations(function(data) {
        movieArray = [];
        for(index = 0; index < 6; index++) {
            currentTitle = data["Similar"].Results[index].Name;
            fetchMovieInformation(function(d) {
                movieArray.push(d);
            });
        }
        buildTemplate(movieArray,bookArray);
        console.log(bookArray);
    });

});

    function buildTemplate(movieArray,bookArray){
        var output = $("#output");    
        var template = $("#test2").html();


            var data = {
            books: [
            {   nameOfBook_home:"Christophe",
                nameOfBook_holiday: "Christophe",
                nameOfBook_adventure: "Christophe",
                nameOfBook_advance: "Christophe",
                nameOfBook_crime: "Christophe",
                nameOfBook_history: "Christophe",

                explanationOfBook_home:"Christophe",
                explanationOfBook_holiday: "Christophe",
                explanationOfBook_adventure: "Christophe",
                explanationOfBook_advance: "Christophe",
                explanationOfBook_crime: "Christophe",
                explanationOfBook_history: "Christophe",

                authorOfBook_home: "Christophe",
                authorOfBook_holiday: "Christophe",
                authorOfBook_adventure: "Christophe",
                authorOfBook_advance: "Christophe",
                authorOfBook_crime: "Christophe",
                authorOfBook_history: "Christophe",

                DateOfBook_home: "Christophe",
               	DateOfBook_holiday: "Christophe",
                DateOfBook_adventure: "Christophe",
                DateOfBook_advance: "Christophe",
                DateOfBook_crime: "Christophe",
                DateOfBook_history: "Christophe",

                themeOfBook_home: "Christophe",
               	themeOfBook_holiday: "Christophe",
                themeOfBook_adventure: "Christophe",
                themeOfBook_advance: "Christophe",
                themeOfBook_crime: "Christophe",
                themeOfBook_history: "Christophe",

                ratingOfBook_home: "Christophe",
               	ratingOfBook_holiday: "Christophe",
                ratingOfBook_adventure: "Christophe",
                ratingOfBook_advance: "Christophe",
                ratingOfBook_crime: "Christophe",
                ratingOfBook_history: "Christophe",

                posterOfBook_home: "Christophe",
                posterOfBook_holiday: "Christophe",
                posterOfBook_adventure: "Christophe",
                posterOfBook_advance: "Christophe",
                posterOfBook_crime: "Christophe",
                posterOfBook_history: "Christophe",

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
        output.append(html);

    }
});