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
// const newDiv = document.createElement('div');

// add class
// newDiv.className = 'hello';

// add id
// newDiv.id = 'hello1';

// add attribute
// newDiv.setAttribute('title', 'hello div');

// create textNode
// const newDivText = document.createTextNode('hello world');

// add text to div
// newDiv.appendChild(newDivText);

// insert div to the DOM
// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');  
// h1 is grandchild of header

// insert created div before h1 in container
// container.insertBefore(newDiv, h1);

// newDiv.style.color = '#636363';



// EVENTS //

// const button = document.getElementById('button');
// button.addEventListener('click', buttonClick);

// function buttonClick(e){
    // console.log(button);
    // console.log('button clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // const output = document.getElementById('output');
    // output.innerHTML = '<h3>' + e.target.id + '</h3>';
    
    // console.log(e.type);

    // From browser
    // console.log(e.clientX);
    // console.log(e.clientY);

    // from the item
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey); // dosen't work on mac
    // console.log(e.shiftKey);


// }

// const button = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// const box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent); //only for the element itself
// box.addEventListener('mouseleave', runEvent); //only for the element itself

// box.addEventListener('mouseover', runEvent);  //for any of the inner elements too
// box.addEventListener('mouseout', runEvent);  //for any of the inner elements too
// box.addEventListener('mousemove', runEvent);  //for any of the inner elements too

// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector('form');
// const select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent); //opposite of focus

// itemInput.addEventListener('cut', runEvent); 
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent); //everything you do to the input


// select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     e.preventDefault();
//     console.log('EVENT TYPE: ' + e.type);

    // console.log(e.target.value);
    // output.innerHTML = '<h3>' + e.target.value + '</h3>';

    // it works even no definition of output exist because it's an id
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

    // document.body.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)';
}


























