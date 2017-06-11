$(document).ready(function() {
  $("form#travelquiz").submit(function(event) {
    event.preventDefault();

    $(".output").hide();

    var exploringOrRelax = $("input:radio[name=exploringOrRelax]:checked").val();
    var terrain = $("input:radio[name=terrain]:checked").val();
    var unknownOrPopular = $("input:radio[name=unknownOrPopular]:checked").val();
    var usNavigation = $("input:radio[name=usNavigation]:checked").val();
    var season = $("input:radio[name=season]:checked").val();

    //if (exploreOrRelax === 'relax') {
      //if (terrain === 'coastal') {
        //$(".output#beach").show();
        $("button").click(function() {
          alert("this works");
        });
      //} else {
    //    $(".output#npark").show();
      //}

   //if (exploreOrRelax === 'explore') {
  //    $(".output#sandiego").show();
  });
});
