const categories = document.querySelectorAll('.menu__category');

const categoriesOnclick = (evt) => {
  evt.currentTarget.classList.toggle('menu__category--opened');
};

categories.forEach((el) => {
  el.addEventListener('click', categoriesOnclick);
});