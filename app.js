const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
  e.preventDefault();
  //We can use 'this' because in the context of the event listener, 'this' refers to the constant 'addItems' which refers to the class of .add-items, which is our form. That means we can grab properties from the form directly. But since we don't want to select every potential form tag with the class of add-items, we need to specify which form we need. Because the form has multiple inputs, it creates an array of the attributes. We then take the value.
  const text = this.querySelector('[name=item]').value;
  const item = {
    text: text,
    //In ES6, we can just say 'text' without quotes.
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items',JSON.stringify(items));
  this.reset();
  console.log(item);
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
  }

function toggleDone(e){
  //Skip unless clicked item is an input
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index
  //Now we do the toggling. True will become false, and false,true.
  items[index].done = !items[index].done;
  localStorage.setItem('items',JSON.stringify(items));
  populateList(items, itemsList);

  console.log(e.target);
}


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
