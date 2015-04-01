$(document).ready(function () {
    var output = $("#output");    
    var template = $("#test2").html();
    
    var data = {
    books: [
    {   nameOfBook_home: "Christophe",
        nameOfBook_holiday: "Christophe",
        nameOfBook_adventure: "Christophe",
        nameOfBook_advance: "Christophe",
        nameOfBook_crime: "Christophe",
        nameOfBook_history: "Christophe",

        explanationOfBook_home: "Christophe",
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

    }
    ]};

    html = Mustache.render(template, data);
    output.append(html);
});