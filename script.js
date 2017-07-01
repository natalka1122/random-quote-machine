$( document ).ready(function() {
    $("#newQuote").on("click", function() {
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=getQuote&?callback=?");
    });
});
function getQuote(response){
            var html = "Hi json";
            // Only change code below this line.
            
            // Only change code above this line.
            $(".quoteText").html(html);
  console.log (response);
}