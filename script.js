$( document ).ready(function() {
    jsonpQuote();
    $("#newQuote").on("click", jsonpQuote);
});
function jsonpQuote(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=getQuote&?callback=?");
}
function getQuote(response){
    var quoteText = response.quoteText.trim();
    var quoteAuthor = response.quoteAuthor;
    var twitterLink="https://twitter.com/intent/tweet?button_hashtag=quote&text="
    $(".quoteText").html("<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>&nbsp;"+quoteText);
    $(".quoteAuthor").html(quoteAuthor);
    $(".quoteTwitter").prop("href",twitterLink+"\""+quoteText+"\" "+quoteAuthor);
}