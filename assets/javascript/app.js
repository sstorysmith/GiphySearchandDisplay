//fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// Function Declarations:

// Function for displaying topic buttons -----------------
function renderButtons() {
  //Deleting the buttons prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (let i = 0; i < topics.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of topic to our button
    a.addClass("topic");
    // Adding a data-attribute
    a.attr("data-name", topics[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }

  // get gif images and display
  $(".topic").on("click", function() {
    const max = 10;
    let searchTopic = $(this).attr("data-name");

    //  empty the previous gifs
    $("#giphy-view").empty();

    // construct gif api
    let queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      searchTopic +
      "&api_key=vGNioWrNlBT1qhho361JM3kxmUvX8x4F&limit=10&=rating=G";

    // Performing an AJAX request with the queryURL for .gif
    $.ajax({
      url: queryURL,
      method: "GET",
    })

      // After data comes back from the request
      .then(function(response) {
        // storing the data from the AJAX request in the results variable
        let results = response.data;
        // Looping through each result item
        for (let i = 0; i < results.length; i++) {
          // Creating and storing a div tag
          let gifDiv = $("<div>");
          // Creating a paragraph tag with the result item's rating in upperCase
          let upCaseRating = results[i].rating.toUpperCase();
          let p = $("<p>").text("Rating: " + upCaseRating);
          //let p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          let gifImage = $("<img class='gifClass'> ");
          // Setting the src attribute of the image to a property pulled off the result item
          gifImage.attr("src", results[i].images.fixed_height_still.url);
          gifImage.attr("data-still", results[i].images.fixed_height_still.url);
          // Appending the paragraph and image tag to the gifDiv
          gifImage.attr("data-state", "still");
          gifImage.attr("data-animate", results[i].images.fixed_height.url);
          gifDiv.append(p);
          gifDiv.append(gifImage);
          // Prependng the gifDiv to the HTML page in the "#gifs-appear-here" div
          $("#giphy-view").prepend(gifDiv);
        }
        // animate/still the .gif that was clicked on
        $(".gifClass").on("click", function() {
          //--------------------

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
//ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

// Initial array of topics
const topics = [
  "sunrise",
  "sunset",
  "tropical storms",
  "storm chasers",
  "flooding",
];

// Calling the renderButtons function to display the intial buttons
renderButtons();

// This function handles events where one button is clicked
$("#add-topic").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  let topic = $("#topic-input")
    .val()
    .trim();

  // The topic from the textbox is then added to our array
  topics.push(topic);

  // Calling renderButtons which handles the processing of our topics array
  renderButtons();
});
