let i =4; 

function multiplier() {
  let i = +document.getElementById('input').value;

  let ingredientAmount = [250, 100, 100, 50, 50, 0, 2, 0.25, 10, 5]

  let result1 = i * ingredientAmount[0]
  let result2 = i * ingredientAmount[1]
  let result3 = i * ingredientAmount[2]
  let result4 = i * ingredientAmount[3]
  let result5 = i * ingredientAmount[4]
  let result6 = i * ingredientAmount[5]
  let result7 = i * ingredientAmount[6]
  let result8 = i * ingredientAmount[7]
  let result9 = i * ingredientAmount[8]
  let result10 = i * ingredientAmount[9]

  document.getElementById('ingredient1').innerHTML = `${result1} g Penne Nudeln`;
  document.getElementById('ingredient2').innerHTML = `${result2} g Tomaten`;
  document.getElementById('ingredient3').innerHTML = `${result3} g Brokkoli`;
  document.getElementById('ingredient4').innerHTML = `${result4} g Champignons`;
  document.getElementById('ingredient5').innerHTML = `${result5} g Spargel`;
  document.getElementById('ingredient6').innerHTML = `${result6} Petersilie, Kräutermix und Salz`;
  document.getElementById('ingredient7').innerHTML = `${result7} Knoblauchzehen`;
  document.getElementById('ingredient8').innerHTML = `${result8} Zwiebel(n)`;
  document.getElementById('ingredient9').innerHTML = `${result9} ml Olivenöl`;
  document.getElementById('ingredient10').innerHTML = `${result10} ml Kokusnussdrink`;
}