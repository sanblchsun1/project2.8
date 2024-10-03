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
