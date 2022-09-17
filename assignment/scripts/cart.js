console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// - Create a global variable named `basket` and set it to an empty array.

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added


var basket = [];

function addItem(item){
    basket.push('item')
    return true;
}
addItem();

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

function listItems(items){
    for(items of basket){
        console.log('each individual item', items);
} 
}
listItems();
//  - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array


function empty (){
     while (basket.length > 0) {
        basket.pop(); 
    }
    }
    console.log ('show empty array', empty(basket.length=0));