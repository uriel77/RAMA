$( function() {
    $( "#menu" ).menu();
  } );

$( function() {
    $( "#tabs" ).tabs();
  } );

$( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );

function Hongos() {
    document.getElementById("hongos").innerHTML = "Hello World";
}