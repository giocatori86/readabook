
var query = "Reservoir Dogs";
var likes = {};
var titleBook = "";
var movieName="Reservoir Dogs";
var moviename ="";
var movieTitle=[];
var XML;
function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

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
console.log(url);        
        $.get("http://query.yahooapis.com/v1/public/yql",
    {
        q: "select * from xml where url=\""+url+"\"",
        format: "xml"
    },
    callback
   );
 }
    
   
