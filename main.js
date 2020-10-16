let items = JSON.parse(localStorage.getItem('items')) || []
let input = document.querySelector('.input');
let container = document.querySelector('.container')

const print = () => {
    let containerContent = ''

    items.map((item) => {
        containerContent = containerContent + `<div class="item">
            <div class="text">${item}</div>
            <div class="row">
                <button class="editButton">Edit</button>
                <div class="divider"></div>
                <button class="removeButton">Remove</button>
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

print()