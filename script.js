$( document ).ready(function() {
    var dpt = window.devicePixelRatio;
    var widthM = window.screen.width;
    var widthH = window.screen.height;
    if (widthM*dpt < 976) {
        document.write('<meta name="viewport" content="width=600, user-scalable=yes">');
    }
    
    jsonpQuote();
    $("#newQuote").on("click", jsonpQuote);
});
function jsonpQuote(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=getQuote&?callback=?");
}
function getQuote(response){
    var quoteText = response.quoteText
    var quoteAuthor = response.quoteAuthor;
    $(".quoteText").html(quoteText);
    $(".quoteAuthor").html(quoteAuthor);
}