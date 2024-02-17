var slider = document.getElementById("myRange");
var output = document.getElementById("contMin"); // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  var x = document.getElementById("myRange").value;
  var minuts = 60+30*x;
  var diners = minuts*0.03;
  var outputMin = document.getElementById("contMin");
  var outputDin = document.getElementById("contDin");
  outputMin.innerHTML = minuts;
  outputDin.innerHTML = diners;
}