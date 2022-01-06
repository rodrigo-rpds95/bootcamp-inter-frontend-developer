let toDoList = document.querySelector('.to-do-list');
let inputListName = document.querySelector('.to-do-list .listName');
let list = document.querySelector('.list ul');

toDoList.addEventListener('submit', (e) => {

	e.preventDefault();

	let listName = inputListName.value;
	list.innerHTML += `<li><input type="checkbox" /> <span>${listName}</span></li>`;

});