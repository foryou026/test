var form = document.getElementById('addForm');
var filter = document.getElementById('filter');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById('taskInput');

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem.value));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    newItem.value = "";
    itemList.appendChild(li);
}


function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        var li = e.srcElement.parentElement;
        itemList.removeChild(li);
    }
}


function filterItems(e) {
    var text = e.target.value.toLowerCase();
    els = itemList.getElementsByTagName('li');
    Array.from(els).forEach(item => {
        var task = item.firstChild.textContent;
        if(task.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
