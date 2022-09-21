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
    basket.push(item)
    return true;
}
addItem('carrots');
addItem('flowere');
addItem('napkins');
console.log(basket);

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

function listItems(items){
    for(item of items){
        console.log('each individual item:', items);
} 
}
listItems(basket);

//  - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array


function empty (){
     while (basket.length > 0) {
        basket.pop(); 
    }
    }
    empty(basket.length=0)
    console.log(basket);
    