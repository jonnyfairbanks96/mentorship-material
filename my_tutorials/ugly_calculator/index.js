window.addEventListener('DOMContentLoaded', (event) => {
  var buttons = document.querySelectorAll('.button');
  var calculatorScreen = document.querySelector('.calculatorScreen')
  var enterButton = document.querySelector('.enter')
  var clearButton = document.querySelector('.clear')

  buttons.forEach(function(element) {
    element.addEventListener('click', function(event) {
      calculatorScreen.value += event.currentTarget.value;
    });
  });

  enterButton.addEventListener('click', function(event) {
    calculatorScreen.value = eval(calculatorScreen.value);
  });

  clearButton.addEventListener('click', function(event) {
    calculatorScreen.value = "";
  });
});
