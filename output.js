$(document).ready(function () {


    var output = $("#output");    
    var template = $("#test2").html();
    
   


    fetchMovieInformation(function(data) {
    makeMovieArray();
    
    var data = {
    books: [
    {   nameOfBook_home:data.Plot,
        nameOfBook_holiday: "Christophe",
        nameOfBook_adventure: "Christophe",
        nameOfBook_advance: "Christophe",
        nameOfBook_crime: "Christophe",
        nameOfBook_history: "Christophe",

        explanationOfBook_home: data.Plot,
        explanationOfBook_holiday: "Christophe",
        explanationOfBook_adventure: "Christophe",
        explanationOfBook_advance: "Christophe",
        explanationOfBook_crime: "Christophe",
        explanationOfBook_history: "Christophe",

        authorOfBook_home: data.Director,
        authorOfBook_holiday: "Christophe",
        authorOfBook_adventure: "Christophe",
        authorOfBook_advance: "Christophe",
        authorOfBook_crime: "Christophe",
        authorOfBook_history: "Christophe",

        DateOfBook_home: data.Released,
       	DateOfBook_holiday: "Christophe",
        DateOfBook_adventure: "Christophe",
        DateOfBook_advance: "Christophe",
        DateOfBook_crime: "Christophe",
        DateOfBook_history: "Christophe",

        themeOfBook_home: data.Genre,
       	themeOfBook_holiday: "Christophe",
        themeOfBook_adventure: "Christophe",
        themeOfBook_advance: "Christophe",
        themeOfBook_crime: "Christophe",
        themeOfBook_history: "Christophe",

        ratingOfBook_home: data.imdbRating,
       	ratingOfBook_holiday: "Christophe",
        ratingOfBook_adventure: "Christophe",
        ratingOfBook_advance: "Christophe",
        ratingOfBook_crime: "Christophe",
        ratingOfBook_history: "Christophe",

        posterOfBook_home: data.Poster,
        posterOfBook_holiday: "Christophe",
        posterOfBook_adventure: "Christophe",
        posterOfBook_advance: "Christophe",
        posterOfBook_crime: "Christophe",
        posterOfBook_history: "Christophe",

        nameOfMovie_home:data.Plot,
        nameOfMovie_holiday: "Christophe",
        nameOfMovie_adventure: "Christophe",
        nameOfMovie_advance: "Christophe",
        nameOfMovie_crime: "Christophe",
        nameOfMovie_history: "Christophe",

        explanationOfMovie_home: data.Plot,
        explanationOfMovie_holiday: "Christophe",
        explanationOfMovie_adventure: "Christophe",
        explanationOfMovie_advance: "Christophe",
        explanationOfMovie_crime: "Christophe",
        explanationOfMovie_history: "Christophe",

        authorOfMovie_home: data.Director,
        authorOfMovie_holiday: "Christophe",
        authorOfMovie_adventure: "Christophe",
        authorOfMovie_advance: "Christophe",
        authorOfMovie_crime: "Christophe",
        authorOfMovie_history: "Christophe",

        DateOfMovie_home: data.Released,
        DateOfMovie_holiday: "Christophe",
        DateOfMovie_adventure: "Christophe",
        DateOfMovie_advance: "Christophe",
        DateOfMovie_crime: "Christophe",
        DateOfMovie_history: "Christophe",

        themeOfMovie_home: data.Genre,
        themeOfMovie_holiday: "Christophe",
        themeOfMovie_adventure: "Christophe",
        themeOfMovie_advance: "Christophe",
        themeOfMovie_crime: "Christophe",
        themeOfMovie_history: "Christophe",

        ratingOfMovie_home: data.imdbRating,
        ratingOfMovie_holiday: "Christophe",
        ratingOfMovie_adventure: "Christophe",
        ratingOfMovie_advance: "Christophe",
        ratingOfMovie_crime: "Christophe",
        ratingOfMovie_history: "Christophe",

        posterOfMovie_home: data.Poster,
        posterOfMovie_holiday: "Christophe",
        posterOfMovie_adventure: "Christophe",
        posterOfMovie_advance: "Christophe",
        posterOfMovie_crime: "Christophe",
        posterOf_history: "Christophe",
    }
    ]};
    

    html = Mustache.render(template, data);
    output.append(html);
    });
});