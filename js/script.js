//businesslogic
function Place(name, about) {
  this.locationName = name;
  this.aboutLocation = about;
}
Place.prototype.location = function() {
  return this.locationName;
}
// user interface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-location-name").val();
    var inputtedComment = $("input#comment").val();

    var newLocation = new Place(inputtedName, inputtedComment);


    $("ul#contacts").append("<li><span class='contact'>" + newLocation.location() + "</span></li>");

    $("input#new-location-name").val("");
    $("input#comment").val("");
    $(".contact").click(function() {
      $("#show-info").last().show();
      $("#show-info h2").text(newLocation.locationName);
      $(".location-name").text(newLocation.locationName);
      $(".about-location").text(newLocation.aboutLocation);
    })
  })
})
