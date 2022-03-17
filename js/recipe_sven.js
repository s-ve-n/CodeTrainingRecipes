function multiplier() {
  let i = document.getElementById('input').value;

  let ingredientAmount = [0.25, 0.25, 125, 0.5, 50, 25, 0.25, 0.25, 31.25, 0.25,];

  let result1 = i * ingredientAmount[0];
  let result2 = i * ingredientAmount[1];
  let result3 = i * ingredientAmount[2];
  let result4 = i * ingredientAmount[3];
  let result5 = i * ingredientAmount[4];
  let result6 = i * ingredientAmount[5];
  let result7 = i * ingredientAmount[6];
  let result8 = i * ingredientAmount[7];
  let result9 = i * ingredientAmount[8];
  let result10 = i * ingredientAmount[9];

  document.getElementById('ingredient1').innerHTML = `${result1} Stk Salatgurke(n)`;
  document.getElementById('ingredient2').innerHTML = `${result2} Stk Paprikaschote(n)`;
  document.getElementById('ingredient3').innerHTML = `${result3} g Tomate(n)`;
  document.getElementById('ingredient4').innerHTML = `${result4} Stk Zwiebeln`;
  document.getElementById('ingredient5').innerHTML = `${result5} g Schafskäse`;
  document.getElementById('ingredient6').innerHTML = `${result6} g Oliven`;
  document.getElementById('ingredient7').innerHTML = `${result7} Prise Salz und Pfeffer`;
  document.getElementById('ingredient8').innerHTML = `${result8} Zitrone(n)`;
  document.getElementById('ingredient9').innerHTML = `${result9} ml Olivenöl`;
  document.getElementById('ingredient10').innerHTML = `${result10} Prise Oregano`;
}
