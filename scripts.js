

function generateRandomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}


$('#random-button').on('click', function() {
  var randomColor = generateRandomColor();

  $('body').css('background-color', randomColor);

});

$('#reset-button').on('click', function() {

  $('body').css('background-color', 'white');

});
