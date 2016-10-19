
$(document).ready(function(){

    $('form#appointment').submit(function(event){
    var name = $("input#name").val();
    var date = $("input#date").val();
    var starttime = $("input#starttime").val();
    var endtime = $("input#endtime").val();

    var result = "<p>"+ name + "</p> " + date + " "
    + starttime + " " + endtime;
    $("#output").empty().append(result);
    event.preventDefault();
  });
});
