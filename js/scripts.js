$(document).ready(function() {
  $("form#travelquiz").submit(function(event) {
    event.preventDefault();

    $(".output").hide();

    var exploringOrRelax = $("input:radio[name=exploringOrRelax]:checked").val();
    var terrain = $("input:radio[name=terrain]:checked").val();
    var unknownOrPopular = $("input:radio[name=unknownOrPopular]:checked").val();
    var usNavigation = $("input:radio[name=usNavigation]:checked").val();
    var season = $("input:radio[name=season]:checked").val();

    if (exploreOrRelax === 'relax') {
      if (terrain === 'coastal') {
        $(".output#beach").show();
      }

    } else if (exploreOrRelax === 'explore') {
      if (terrain === 'coastal') {
        $(".output#sandiego").show();
      }
    }
    if (exploreOrRelax === "explore") {
      if (terrain === "mountain") {
        $(".output#npark").show();
      }
    }
    });
  });
