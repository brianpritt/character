
// Business
var heroChoice = function(val1,val2,val3) {

  var answer = (val1 + val2 + val3);
  if (answer <= 5) {
    return("#batman");
  } else if (answer === 6){
    return("#superman");
  } else if (answer >= 7) {
    return("#flash")
  }
};


$(document).ready(function(){
    $("#main form").submit(function(event){
      var q1Input = parseInt($("#q1").val());
      var q2Input = parseInt($("#q2").val());
      var q3Input = parseInt($("#q3").val());

      var finalhero = heroChoice(q1Input, q2Input, q3Input);
      $("#superman, #batman, #flash").hide();
      $(finalhero).show();



    event.preventDefault();
  });
});
