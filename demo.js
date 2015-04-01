$(document).ready(function () {
    var output = $("#output");    
    var template = $("#test2").html();
    
    var data2 = [1];
    html = Mustache.render(template, data2);
    output.append(html);
});