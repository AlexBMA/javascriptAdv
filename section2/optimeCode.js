/*
We need to be carefull with:

eval()
arguments
for in
with
delete

*/

// inline caching ex

function findUser(user){
    return 'found ${user.firstName} ${user.lastName}'
}

const userData = {
    firstName: 'Alex',
    lastName: 'Junior'
}

findUser(userData)


// hidden classes ex

function Animal(x,y){
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,5);

obj1.a = 30;
obj1.b = 100;

obj2.b = 30;
obj1.a = 100;
// it will run slower 
// you want to instantiated properties in the same order
// you should you predictable code
