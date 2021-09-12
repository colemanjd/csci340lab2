$(document).ready(function() {
  $('.animebutton').click(function() {
    $.ajax({
      dataType: "jsonp",
      jsonpCallback: "parseQuote",
      url: "https://animechan.vercel.app/api/random",
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
