// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = "123";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');

// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = "Goodbye"
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR !!!very important!!!//
// const header = $('header-title');
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px #ccc';

// const input = document.querySelector('input');
// input.value = 'hello world';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTALL //
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[1].textContent = 'Hello';

// const odd = document.activeElement.querySelectorAll('li:nth-child(odd)');
// const even = document.activeElement.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#ccc';
//     even[i].style.backgroundColor = '#f4f4f4';
// }

// TRAVERSING THE DOM //
// const itemList = document.querySelector('#items');
// parentNode
// console.log(itemList);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);  // includes whitespaces

// children -------- this is recommanded
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild ------- gets the whitespace
// console.log(itemList.firstChild);
// itemList.firstChild.style.backgroundColor = 'red'; // error

// firstElementChild ------ recommanded
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild ------- gets the whitespace
// console.log(itemList.lastChild);
// itemList.lastChild.style.backgroundColor = 'red'; // error

// lastElementChild ------ recommanded
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling -------- gets whitespace
// const itemNode1 = itemList.firstElementChild;
// console.log(itemNode1.nextSibling);

// nextElementSibling ------ recommanded
// console.log(itemNode1.nextElementSibling);

// previousSibling ------ gets whitespace
// const itemNode2 = itemList.children[1];
// itemNode2.previousSibling.style.color = 'green';

// previousElementSibling ------ revommanded
// itemNode2.previousElementSibling.style.color = 'green';


// createElement

// create a div
const newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
// newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title', 'hello div');

// create textNode
const newDivText = document.createTextNode('hello world');

// add text to div
newDiv.appendChild(newDivText);

// insert div to the DOM
const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');  
// h1 is grandchild of header

// insert created div before h1 in container
container.insertBefore(newDiv, h1);

newDiv.style.color = '#636363';













