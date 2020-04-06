var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//delete item
itemList.addEventListener('click', removeItem);

//filter item
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //getting single item in form
    var newItem = document.getElementById('item').value;

    //create li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete btn
    var deleteBtn = document.createElement('button');

    //add className to del btn

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

//removeItem

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

//filter item
function filterItems(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();

    //get list
    var items = itemList.getElementsByTagName('li');
    
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}