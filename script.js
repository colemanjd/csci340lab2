<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
$(document).ready(function() {
  $('.animebutton').click(function() {
    $.ajax({
      dataType: "jsonp",
      jsonpCallback: "parseQuote",
      url: "https://animechan.vercel.app/guide#random-quote",
      success: function(results) {
        $('.animepick').text(results["quoteText"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});


$(document).ready(function() {
  $('.activitybutton').click(function() {
    $.ajax({
      dataType: "jsonp",
      jsonpCallback: "parseQuote",
      url: "http://www.boredapi.com/api/activity/",
      success: function(results) {
        $('.activitypick').text(results["quoteText"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});

 <div id="counts"></div>
  <div id="results"></div>
  <script>
    var numyes = 0;
     $("#counts").text("You clicked " + numyes + " times");
    $("#yesbutton").on("click", function(event){
        numyes++;
     $("#results").text("The Anime Quote and Activity have Correlated " + numyes + " times");
    
     });
    
    var numno = 0;
     $("#counts").text("You clicked " + numno + " times");
    $("#nobutton").on("click", function(event){
        numyes++;
    $("#results").text("The Anime Quote and Activity haven't Correlated " + numyes + " times");
     });
    
  
     $("#results").text("Your page has a " + (numyes/(numyes+numno)) + "% Correlation Percentage");
    
 
    
    </script>
