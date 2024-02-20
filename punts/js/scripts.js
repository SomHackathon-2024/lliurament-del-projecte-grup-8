var slider = document.getElementById("myRange");
var outputMin = document.getElementById("contMin");
var outputDin = document.getElementById("contDin");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  var x = parseInt(this.value); // Parseamos el valor del slider a un número entero
  var minuts = 60 + 30 * x;
  var diners = minuts * 0.03;
  // Redondeamos hacia arriba los valores
  minuts = Math.ceil(minuts);
  diners = Math.ceil(diners);
  outputMin.innerHTML = minuts+" minuts";
  outputDin.innerHTML = diners+"€";
}
