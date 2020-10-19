let items = JSON.parse(localStorage.getItem('items')) || []
let input = document.querySelector('.input');
let container = document.querySelector('.container')
let editable = -1

const print = () => {
    let containerContent = ''

    items.map((item, index) => {
        containerContent = containerContent + `<div class="item">
            <div class="text" contenteditable="${editable===index}" >${item}</div>
            <div class="row">
                <button class="editButton" onclick="edit(${index})" style="display: ${editable===index && editable>=0 ? "none" : "initial"}">Edit</button>
                <button class="saveButton" onclick="save(${index}, this)" style="display: ${editable===index && editable>=0 ? "initial" : "none"}">Save</button>
                <div class="divider"></div>
                <button class="removeButton" onclick="remove(${index})">Remove</button>
            </div>
        </div>`
    })

    container.innerHTML = containerContent;
};



const add = () => {

    items.push(input.value);
    localStorage.setItem('items', JSON.stringify(items));
    print();
};

const edit = (index) => {
    editable = index;
    print();
};

const save = (index, that) => {
    items[index] = that.parentElement.parentElement.querySelector(".text").innerHTML
    editable = -1;
    localStorage.setItem('items', JSON.stringify(items));
    print();
};

const remove = (index) => {
    items.splice(index, 1)
    localStorage.setItem('items', JSON.stringify(items));
    print();
};


print()