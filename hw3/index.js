// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const productInput = document.querySelector(".review-title");
const reviewInput = document.querySelector(".user-input");
const sendBtn = document.querySelector(".send-btn");

const infoBox = document.querySelector(".info-box");

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let productName = productInput.value;
  let reviewItem = reviewInput.value;

  addToStorage(productName, reviewItem);
  productInput.value = "";
  reviewInput.value = "";
});

function addToStorage(product, review) {
  if (product !== "" && review !== "") {
    let reviews = JSON.parse(localStorage.getItem(product));
    console.log(reviews);
    if (reviews === null) {
      reviews = [];
    }
    reviews.push(review);
    console.log(review);
    console.log(product, JSON.stringify(reviews));
    localStorage.setItem(product, JSON.stringify(reviews));
    infoBox.textContent = "Отзыв успешно добавлен";
  } else {
    infoBox.textContent = "Все поля должны быть заполнены";
  }
}