//Interfaces are like classes - they can define properties
//UNLIKE clasess, they may NOT add functions or properties to a run time.. prevent random functions from making their way in to our code.
//Angular loves interfaces since they will behave consistently.
//With interfaces, every property must get a value.
//We must use this syntax since interfaces cannot use constructors
var m = { name: "Everest", height: 29000 };
var mtn = [
    { name: "Everest", height: 29029 },
    { name: "Kilimanjaro", height: 19341 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(set) {
    //FUNCTION: findNameOfTallestMountain. It takes one parameter, an array of Mountain objects. It returns a string:
    //SYNTAX: ( VARNAME : INTERFACENAME[]) :RETURNTYPE{ }
    var current = 0;
    var highest = "";
    for (var i = 0; i < set.length; i++) {
        if (set[i].height > current) {
            current = set[i].height;
            highest = set[i].name;
        }
    }
    return highest;
}
var mtnheight = findNameOfTallestMountain(mtn);
console.log(mtnheight);
var products = [{ name: "Chicken", price: 3.00 },
    { name: "Bread", price: 4.00 },
    { name: "Cheese", price: 6.00 },
    { name: "Lettuce", price: 2.00 },
    { name: "Mustard", price: 3.50 },
    { name: "Tomato", price: 2.50 }
];
//FUNCTION calcAverageProductPrice. It takes one parameter, an array of Product objects. It returns a number(AVG)
//SYNTAX: ( VARNAME : INTERFACENAME[]) :RETURNTYPE{ }
function calcAverageProductPrice(currentProducts) {
    var total = 0;
    for (var i = 0; i < currentProducts.length; i++) {
        total += currentProducts[i].price;
    }
    var avg = total / currentProducts.length;
    return avg;
}
var avg = calcAverageProductPrice(products);
console.log(avg);
var inventory = [
    { product: products[0], quantity: 10 },
    { product: products[1], quantity: 4 },
    { product: products[2], quantity: 20 }
];
//FUNCTION: calcInventoryValue. It takes one parameter, an array of InventoryItem objects.
// It returns a number, the total value of all the products in the inventory array provided as an argument.
//SYNTAX: ( VARNAME : INTERFACENAME[]) :RETURNTYPE{ }
function calcInventoryValue(set) {
    var totalValue = 0;
    for (var i = 0; i < set.length; i++) {
        totalValue += set[i].product.price * set[i].quantity;
    }
    return totalValue;
}
var totVal = calcInventoryValue(inventory);
console.log(totVal);
