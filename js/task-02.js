const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(element => {
  const ingredientUl = document.getElementById('ingredients');
  const createLi = document.createElement('li');
  createLi.textContent = element;
  createLi.classList.add('item');
  ingredientUl.append(createLi);
})
