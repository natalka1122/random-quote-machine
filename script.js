$( document ).ready(function() {    
    jsonpQuote();
    $("#newQuote").on("click", jsonpQuote);
});
function jsonpQuote(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=getQuote&?callback=?");
}
function getQuote(response){
    var quoteText = "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>&nbsp;"+response.quoteText.trim();
    var quoteAuthor = response.quoteAuthor;
    $(".quoteText").html(quoteText);
    $(".quoteAuthor").html(quoteAuthor);
}