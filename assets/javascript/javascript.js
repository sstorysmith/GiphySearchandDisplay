
  // Initial array of movies
  const movies = ["sunrise", "sunset", "tropical storms", "storm chasers", "flooding"];

  // Function for dumping the JSON content for each button into the div
  function displayMovieInfo() {

    // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.
    let movieName = $(this).data('name'); // $(this).attr('data-name');
    movieName = movieName.replace(' ', '+');
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=vGNioWrNlBT1qhho361JM3kxmUvX8x4F`;
    const method = 'GET';

    $.ajax({ url, method })
      .then(function(response) {
        $('#movie-view').text(JSON.stringify(response));
      })
      .catch(function(err) {

      })

  }

  // Function for displaying movie data
  function renderButtons() {

    // Deleting the buttons prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();


    // Looping through the array of movies
    for (let i = 0; i < movies.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      let a = $("<button>");
      // Adding a class of movie to our button
      a.addClass("movie");
      // Adding a data-attribute
      a.attr("data-name", movies[i]);
      // Providing the initial button text
      a.text(movies[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }

          // get giffy images and display
    // for(i=0; i<10; ++) {
   
    $(".movie").on("click", function() {
alert('topic clicked');
        const  max=10;
        let searchTopic= $(this).attr("data-name");
        
    //  empty the previous gifs
        $("#movie-view").empty();

        // construct giffy api
         let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
             searchTopic + "&api_key=vGNioWrNlBT1qhho361JM3kxmUvX8x4F&limit=10&=rating=G";
         
        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
          
        })

            // After data comes back from the request
            .then(function(response) {
            console.log(queryURL);
             console.log(response);
            // storing the data from the AJAX request in the results variable
            let results = response.data;
            // Looping through each result item
            for (let i = 0; i < results.length; i++) {
                // Creating and storing a div tag
                let gifDiv = $("<div>");
                // Creating a paragraph tag with the result item's rating in upperCase
                // upCaseRating= changeto.upperCase(results[i].rating);
                // conole.log (upCaseRating);
                // let p = $("<p>").text("Rating: " + upCaseRating);
                let p = $("<p>").text("Rating: " + results[i].rating);
           
                // Creating and storing an image tag
                let gifImage = $("<img class='gifClass'> ");
                // Setting the src attribute of the image to a property pulled off the result item
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                // Appending the paragraph and image tag to the gifDiv
                gifImage.attr("data-state","still");
                gifImage.attr("data-animate", results[i].images.fixed_height.url);
               

    
                gifDiv.append(p);
                gifDiv.append(gifImage);
                // Prependng the gifDiv to the HTML page in the "#gifs-appear-here" div
                $("#movie-view").prepend(gifDiv);
            }
             // animate/still the .gif that was clicked on
               $(".gifClass").on("click", function() {
       

             // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
             let state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
           $(this).attr("src", $(this).attr("data-animate"));
           $(this).attr("data-state", "animate");
            } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            }
});

            });
    });
  }

  // This function handles events where one button is clicked
  $("#add-movie").on("click", function(event) {
    event.preventDefault();
    
    // This line grabs the input from the textbox
    let movie = $("#movie-input").val().trim();

    // The movie from the textbox is then added to our array
    movies.push(movie);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

  });

  

  // Calling the renderButtons function to display the intial buttons
  renderButtons();


    