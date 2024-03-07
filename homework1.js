"use strict"

//Задание 1. Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции. Для этого создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку. Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска).

const alboms = [
  {
    title: "Название1",
    artist: "Исполнитель1",
    year: "2021",
  },
  {
    title: "Название2",
    artist: "Исполнитель2",
    year: "2022",
  },
  {
    title: "Название3",
    artist: "Исполнитель3",
    year: "2023",
  },
];

const musicCollection = {
  alboms: [...alboms],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.alboms.length) {
          return { value: this.alboms[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const albom of musicCollection) {
  console.log(`${albom.title} - ${albom.artist}(${albom.year})`);
}

// Задание 2. Сконвертировать коллекцию DOM-элементов в массив(собрать все элементы div на странице) и отфильтровать по наличию атрибута data-active.
const array = Array.from(document.querySelectorAll('div'));
const result = array.filter( (div) => div.hasAttribute('data-active'))
console.log(result);


// Задание 3. Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда. Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент. 
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

const chefs = new Map();
chefs.set("Пицца", "Виктор");
chefs.set("Суши", "Ольга");
chefs.set("Десерты", "Дмитрий");

const dishesChef = new Map();
dishesChef.set("Пицца Маргарита", `Повар: ${chefs.get("Пицца")}`);
dishesChef.set("Пицца Пепперони", `Повар: ${chefs.get("Пицца")}`);
dishesChef.set("Суши Филадельфия", `Повар: ${chefs.get("Суши")}`);
dishesChef.set("Суши Калифорния", `Повар: ${chefs.get("Суши")}`);
dishesChef.set("Тирамису", `Повар: ${chefs.get("Десерты")}`);
dishesChef.set("Чизкейк", `Повар: ${chefs.get("Десерты")}`);

console.log(dishesChef.entries());

const Alexey = {
    name: "Алексей",
}

const Maria = {
    name: "Мария",
}

const Irina = {
    name: "Ирина",
}


const clientOrders = new Map();
clientOrders.set(Alexey.name, ["Пицца Пепперони", "Тирамису"]);
clientOrders.set(Maria.name, ["Суши Калифорния", "Пицца Маргарита"]);
clientOrders.set(Irina.name, ["Чизкейк"]);


console.log(clientOrders.entries());