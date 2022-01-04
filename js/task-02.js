const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientUl = document.getElementById('ingredients');

const elements = ingredients.map(ingredient => {
  const createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.textContent = ingredient;
  
  return createLi
})

ingredientUl.append(...elements)