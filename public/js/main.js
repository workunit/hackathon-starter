$(document).ready(function() {

  // some examples
  //$( "email").val()
  $(function () {
  $('#email').val("fgg");
  });

  $( "#email" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
    alert(value);
  })
  .keyup();
  
});