//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

console.log(list);
function removeItemsFromList() {
    var item = setTimeout(list.pop(),2000);
 
    if (item) {
        removeItemsFromList();
    }
};
 
removeItemsFromList();
