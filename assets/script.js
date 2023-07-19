// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(document).ready(function() {
      var saveBtn = $(".saveBtn");

      saveBtn.on("click", function() {
  
      });
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    $(document).ready(function(){
      var currentHour = dayjs().hour();

      $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if(blockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    $(".saveBtn").each(function(){
      var row = $(this).parent().attr("id");
      var text = $($(this).siblings()[1]).val();
      console.log(text)
      localStorage.setItem(row, text);
    }); 
    
    $("#hour-9 .description").text(localStorage.getItem("hour-9"));
    $("#hour-10 .description").text(localStorage.getItem("hour-10"));
    $("#hour-11 .description").text(localStorage.getItem("hour-11"));
    $("#hour-12 .description").text(localStorage.getItem("hour-12"));
    $("#hour-13 .description").text(localStorage.getItem("hour-13"));
    $("#hour-14 .description").text(localStorage.getItem("hour-14"));
    $("#hour-15 .description").text(localStorage.getItem("hour-15"));
    $("#hour-16 .description").text(localStorage.getItem("hour-16"));
    $("#hour-17 .description").text(localStorage.getItem("hour-17"));
  
  });

    // TODO: Add code to display the current date in the header of the page.
    $(document).ready(function(){
      var currentDate = dayjs().format("MMMM D, YYYY");

      $("#currentDay").text(currentDate);
    });
  });
  