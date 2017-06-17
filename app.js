const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

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
  this.reset();
  console.log(item);
}

function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i)=>{
    return `
      <li>
        <label for="">${plate.text}</label>
      </li>
    `;
  }).join('');
}


addItems.addEventListener('submit', addItem);
