let quantitiesBrownies = [425, 100, 300, 6, 350, 3, 0.5, 3, 9, 300];
let ingredientsBrownies = [
  ' g Zartbitterschokolade zum Schmelzen',
  ' g Zartbitterschokolade zum klein hacken',
  ' ml Öl, neutrales',
  ' EL Kakaopulver',
  ' g Zucker',
  ' Pck. Vanillezucker',
  ' TL Salz',
  ' EL Milch',
  'Eier',
  ' g Mehl',
];
let quantitiesCurry = [150, 25, 0.25, 0.25, 0.5, 1, 50, 0.25];
let ingredientsCurry = [
  'g Hähnchenbrust',
  'g Bohnen',
  'Paprikaschote(n)',
  'Zucchini',
  ' Möhre(n)',
  'Lauchzwiebel(n)',
  'ml Sahne',
  'Ingwer, gerieben',
  'Salz',
  'Pfeffer',
  'Currypulver',
  'Koriander',
];

let portions;
let quantities = [];
let ingredients = [];

function ingredientsTable(recipe) {
  if (recipe == 'brownies') {
    quantities = quantitiesBrownies;
    ingredients = ingredientsBrownies;
  }
  if (recipe == 'curry') {
    quantities = quantitiesCurry;
    ingredients = ingredientsCurry;
  }

  portions = document.getElementById('portions').value;

  let table = document.getElementById('ingredients_table');
  table.innerHTML = '';

  for (i = 0; i < ingredients.length; i++) {
    let quantPortion = quantities[i] * portions;

    if (i < quantities.length) {
      let tr = document.createElement('tr');
      tr.innerHTML = `<td>${quantPortion} ${ingredients[i]}</td>`;
      table.appendChild(tr);
    } else {
      let tr = document.createElement('tr');
      tr.innerHTML = `<td>${ingredients[i]}</td>`;
      table.appendChild(tr);
    }
  }
}
