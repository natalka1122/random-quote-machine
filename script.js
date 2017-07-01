$( document ).ready(function() {
    $("#newQuote").on("click", function() {
        $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
            var html = "Hi json";
            // Only change code below this line.
            
            // Only change code above this line.
            $(".quoteText").html(html);
        });
    });
});