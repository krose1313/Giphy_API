
console.log("break");

$("#animalSubmit").on("click", function(event) {

  var userInput = $("#animal-input").val();
  console.log(userInput);

  event.preventDefault()

    // QueryURL for Giphy API
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=3wKenppRyR1EFaboTMHpQY5TvK6BffJj&limit=5";
    $.ajax({
      url: queryURL,
      method: 'GET'
    })
      .done(function(response) {
      console.log(response);

      var returnedGifs = response.data;

      for (var i = 0; i < returnedGifs.length; i++) {

        if (returnedGifs[i].rating = "g") {

          var displayedGifs = $("<div class='item'>");
          
          var rating = returnedGifs[i].rating;

          var p = $("<p>").text("Rating; " + rating);

          var gifImage = $("<img>");

          gifImage.attr("src", returnedGifs[i].images.fixed_height.url); 

          displayedGifs.append(p);
          displayedGifs.append(gifImage);

          $("#gifs-appear-here").prepend(displayedGifs);

        }
      }

    });

});

