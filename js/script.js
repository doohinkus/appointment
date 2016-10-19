
$(document).ready(function(){

    $('form#appointment').submit(function(event){
    var name = $("input#name").val();
    var date = $("input#date").val();
    var starttime = $("input#starttime").val();
    var endtime = $("input#endtime").val();

    var result = "<p class='final'>"+ name + "</p>"
    + "<p class='final'>" + date + "</p>"
    + "<p class='final'>" + starttime + "</p>"
    + "<p class='final'>" + endtime + "</p>";
    $("#output").empty().append(result).show();

    event.preventDefault();
  });
});
