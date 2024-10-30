const newDiv = document.createElement('div');
newDiv.textContent = "привет мир";
document.body.appendChild(newDiv);

const newParagraph = document.createElement('p');
newParagraph.textContent = "Это новый параграф";
const container = document.getElementById("container");
container.appendChild(newParagraph);

const elementToDelete = document.getElementById('to-delete');
elementToDelete.remove();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const textToEdit = document.getElementById('edit-color');
const buttonEditColor = document.getElementById('editColorText');
buttonEditColor.addEventListener('click', () => {
    textToEdit.style.color = getRandomColor();
});

const creatElementList = document.createElement('li');
creatElementList.textContent = "Новый элемент";
const getList = document.getElementById('list');
const insertItem = getList.children[2];
getList.insertBefore(creatElementList, insertItem);


// 1. Поиск элементов и изменение содержимого:
// Подсказка: Используйте метод document.querySelector() для поиска
// заголовка и измените его текст с помощью свойства .innerText .
const this_h1_document = document.querySelector('h1');
console.log(this_h1_document.innerText = "333333")
// Найдите все элементы списка ( <ul> с элементами <li> ) с помощью document.querySelectorAll() и
// добавьте к их тексту порядковый номер с помощью цикла.
const listItems = document.querySelectorAll('ul li');
listItems.forEach((item, index) => {
    item.innerText += ` ${index + 1}`;
});
// 2. Редактирование атрибутов:
// Добавьте на страницу HTML изображение с атрибутом src .
const img = document.createElement('img');
img.setAttribute('src', 'profile.png');
document.body.appendChild(img);
// в ссылке с атрибутом href , через JS поменяйте её текст и URL с
// помощью setAttribute() и свойства .innerHTML .
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.google.com');
link.innerHTML = 'На Google';