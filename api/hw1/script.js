// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

const scheduleData = [
    {
        lesson: "Linux",
        date: "05.12.2023",
        maxPerson: 40,
        currentPerson: 38,
    },
    {
        lesson: "Python",
        date: "08.12.2023",
        maxPerson: 35,
        currentPerson: 25,
    },
    {
        lesson: "Java Script",
        date: "13.12.2023",
        maxPerson: 35,
        currentPerson: 34,    
    },
    {
        lesson: "Vue.js",
        date: "15.12.2023",
        maxPerson: 40,
        currentPerson: 38,
    },
    {
        lesson: "Unit-test",
        date: "25.12.2023",
        maxPerson: 35,
        currentPerson: 31,
    },
    
];

const schedule = document.querySelector(".schedule");

const contentHtml = scheduleData.
    map((el) => `<article class="row">
                    <div class="lesson card card-body col-sm-6 mb-3 mb-sm-0" style="width: 19rem;">
                        <h2 class="card-title">${el.lesson}</h2>
                        <p class="card-text">${el.date}</p>
                        <p class="card-text">Кол-во мест: ${el.maxPerson}</p>
                        <p class="student">Кол-во участников: ${el.currentPerson}</p>
                        <p class="freeSpace">Свободных мест: ${el.maxPerson - el.currentPerson}</p>
                        <p class="error"></p>
                        <div class="d-grid gap-2 d-md-block">
                            <button class="buttonAdd btn btn-primary" >Записаться на занятие</button>
                            <button class="buttonOut btn btn-outline-danger" >Отменить запись</button>
                        </div>
                    </div>
                    </article>`
    ).join(" ");

schedule.innerHTML = contentHtml;

const buttonAddAll = document.querySelectorAll(".buttonAdd");
const buttonOutAll = document.querySelectorAll(".buttonOut");
const errorAll = document.querySelectorAll(".error");
const freeSpaceAll = document.querySelectorAll(".freeSpace");
const studentAll = document.querySelectorAll(".student");


buttonAddAll.forEach((el, index) => {
    el.addEventListener("click", () => {
        
        let currentPerson = scheduleData[index].currentPerson;
        let maxPerson = scheduleData[index].maxPerson;
        scheduleData[index].currentPerson += 1;
        let freeSpace = (maxPerson - currentPerson) - 1;
        if(freeSpace === 0) {
            el.disabled = true;
            errorAll[index].textContent = "!!!Запись закончена!!!";
        } else {
            errorAll[index].textContent = " ";
            buttonOutAll[index].disabled = false;
        }
        freeSpaceAll[index].textContent = `Свободных мест: ${freeSpace}`;
        studentAll[index].textContent = `Кол-во участников: ${currentPerson + 1}`;

    })
})
    
buttonOutAll.forEach((el, index) => {
    el.addEventListener("click", () => {
        let currentPerson = scheduleData[index].currentPerson;
        let maxPerson = scheduleData[index].maxPerson;
        let freeSpace = (maxPerson - currentPerson) + 1 ;
        scheduleData[index].currentPerson -= 1;
        
        if(freeSpace > 0 && freeSpace < maxPerson) {
            errorAll[index].textContent = " ";
            buttonAddAll[index].disabled = false;
            
        } else {
            el.disabled = true;
            errorAll[index].textContent = "!!!Список пуст!!! ";
        }
        freeSpaceAll[index].textContent = `Свободных мест: ${freeSpace}`;
        studentAll[index].textContent = `Кол-во участников: ${currentPerson - 1}`;
    })
})