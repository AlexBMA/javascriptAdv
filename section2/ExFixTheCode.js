//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

console.log(list);
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        setTimeout(removeItemsFromList(),
        20);
    }
};
 
removeItemsFromList();

list