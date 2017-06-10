$(document).ready(function() {
  $("form#travelquiz").submit(function(event) {
    event.preventDefault();

    $(".output").hide();

    var exploringOrRelax = $("input:radio[name=exploringOrRelax]:checked").val();
    var unknownOrPopular = $("input:radio[name=unknownOrPopular]:checked").val();
    var role = $("input:radio[name=role]:checked").val();
    var idenity = $("input:radio[name=identity]:checked").val();
    var combat = $("input:radio[name=combat]:checked").val();

    if (combat === 'lightsaber') {
      if (darkOrLight === 'light') {
        $(".output#luke").show();
      } else {
        $(".output#vader").show();
      }
    } else if (combat === 'force') {
      $(".output#emperor").show();
    } else if (combat === 'blaster') {
      if (darkOrLight === 'light') {
        $(".output#leia").show();
      } else {
        $(".output#stormtroopers").show();
      }

    } else if (combat === 'spaceship') {
      if (darkOrLight === 'light') {
        $(".output#hansolo").show();
      } else {
        $(".output#bobafett").show();
      }

    } else {
      if (gender === 'male') {
        $(".output#r2d2").show();
      } else {
        $(".output#c3p0").show();
      }

    }


    // darkOrLight
    // gender
    // role
    // identity
    // combat
  });
});
