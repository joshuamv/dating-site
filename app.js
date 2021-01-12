
//////////////// global vars /////////////////

var nameValue;

//////////////// run when html loads /////////////////

$(document).ready(function() {

  //open tab 2
  $('#fname').keypress(function() {
    //activate button
    $("#button1").removeClass('inactivebutton');
    $("#button1").addClass('activebutton');
    //when button is clicked
    $('#button1').click(function(){
        nameValue = $('#fname').val();
          //open tab2
          $('#button1').click(function() {
            $("#tab1").addClass('inactive');
            $("#tab1").removeClass('active');
            $("#tab2").removeClass('inactive');
            $("#tab2").addClass('active');
          });
    });
  });

  //link select photos button to file input click
  $('#photobutton').click(function() {
    $('#myphoto').click()

    //open tab3 when button2 is clicked
    $('#button2').click(function() {
      $("#tab2").addClass('inactive');
      $("#tab2").removeClass('active');
      $("#tab3").removeClass('inactive');
      $("#tab3").addClass('active');
    });
    $("#button2").removeClass('inactivebutton');
    $("#button2").addClass('activebutton');

    $('#title3').html("How malevolent! Your gender now");

  });

  //tab3

  $("input[name='gender']").on('change', function() {
    //activate button
    $("#button3").removeClass('inactivebutton');
    $("#button3").addClass('activebutton');
    //when button is clicked
    $('#button3').click(function(){
        var radioValue = $("input[name='gender']:checked").val();
        if(radioValue){
          $('#title4').html("A nefarious " + radioValue + " looking for...");
          //open tab4
          $("#tab3").addClass('inactive');
          $("#tab3").removeClass('active');
          $("#tab4").removeClass('inactive');
          $("#tab4").addClass('active');
        }
    });
  });


  //tab4
  $("input[name='gender2']").on('change', function() {
    //activate button
    $("#button4").removeClass('inactivebutton');
    $("#button4").addClass('activebutton');
    //when button is clicked
    $('#button4').click(function(){
        var checkValue = $("input[name='gender2']:checked").val();
        if(checkValue){
          $('#title5').html("Repulsive. Lastly, weapon of choice?");
          //open tab4
          $("#tab4").addClass('inactive');
          $("#tab4").removeClass('active');
          $("#tab5").removeClass('inactive');
          $("#tab5").addClass('active');
        }
    });
  });

  //tab5
  $("input[list='weapons']").on('change', function() {
    //activate button
    $("#button5").removeClass('inactivebutton');
    $("#button5").addClass('activebutton');
    //when button is clicked
    $('#button5').click(function(){
        var listValue = $("input[list='weapons']:checked").val();
        $('#title6').html("How vile, you're all set!");
        $('#main-title').html("All Done!");
        $('#p6').html("That's all for now " + nameValue + ". A raven will come by your window in the next 10 days with the name of your first match and you'll be scheming with a match made in hell in no time at all!");
        //open tab4
        $("#tab5").addClass('inactive');
        $("#tab5").removeClass('active');
        $("#tab6").removeClass('inactive');
        $("#tab6").addClass('active');
    });
  });


});

//////////////// functions /////////////////
