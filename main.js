const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Develte Event
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.getElementById('item').value;

    // Create new li element
    const li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Creat delete button
    const delButton = document.createElement('button');
    // Add class to the button
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    delButton.appendChild(document.createTextNode('\327'));
    // Append button to li
    li.appendChild(delButton);
    // Append li to itemList
    itemList.appendChild(li);
}

// Delete item
function removeItem(e) {
    e.preventDefault();

    // Get element
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e) {
    // convert text to lowercase
    const text = e.target.value.toLowerCase();
    // Get lis
    const items = itemList.getElementsByTagName('li');
    // Convert objects to an array
    Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent;

        if(itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}