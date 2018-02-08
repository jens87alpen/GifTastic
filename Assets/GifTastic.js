
 // Initial array of athlete
      var athletes = ["LeBron James", "Rob Gronkowski", "Nick Foles"];

      // displayathleteInfo function re-renders the HTML to display the appropriate content
      
    $(document).on('click', '.athlete', function() {
        var athlete = $(this).attr("data-person",);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=aNoILBo6ilz0ZAyFWGh5yBBbNhMK5gE3";

        // Creating an AJAX call for the specific athlete button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {


            console.log(response);
            console.log(rating);
 
       

            var results = response.data;

            for (var i = 0; i < 6; i++) {
                
                // Creating a div to hold the athlete
                var athleteDiv = $("<div class='athlete_gif'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");

                personImage.attr("class","gif");
                personImage.attr("src", results[i].images.fixed_height_still.url);
                personImage.attr("data-state","still");
                personImage.attr("data-still", results[i].images.fixed_height_still.url);
                personImage.attr("data-animate", results[i].images.fixed_height.url);


                          
                athleteDiv.prepend(p);
                athleteDiv.prepend(personImage);

                $("#athlete-view").prepend(athleteDiv);
            }
            $(".gif").on("click", function() {
             console.log('animate click');
              // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
              var state = $(this).attr("data-state");
              // If the clicked image's state is still, update its src attribute to what its data-animate value is.
              // Then, set the image's data-state to animate
              // Else set src to the data-still value
              if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
              } 
              else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
              console.log(this);
              }
              });
              });

                 
         
        $('#athlete-view').empty();    
       });

     

      // Function for displaying athlete data
      function renderButtons() {
        

        // Deleting the athlete prior to adding new athlete
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of athlete
        for (var i = 0; i < athletes.length; i++) {

          // Then dynamicaly generating buttons for each athlete in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of athlete to our button
          a.addClass("athlete");
          // Adding a data-attribute
          a.attr("data-person", athletes[i]);

          a.css({
            'background-color': 'transparent',
            'color': 'white',
            'width': '200px',
            'padding': '5px',
            'margin': '5px',
            'border': '1px solid white',
            'border-radius': '25px',
            'margin-top': '20px'

        });         
          // Providing the initial button text
          a.text(athletes[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a athlete button is clicked
      $("#add-athlete").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var athlete = $("#athlete-input").val().trim();

        // Adding athlete from the textbox to our array
        athletes.push(athlete);

        // Calling renderButtons which handles the processing of our athlete array
        renderButtons();


      });

     

      // Calling the renderButtons function to display the intial buttons
      renderButtons();


//       $(document).ready(function() {
   
//     $('.container').fadeIn(3000);
// });
 
    
    
