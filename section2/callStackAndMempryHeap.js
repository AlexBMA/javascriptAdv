// call stack + Memory Heap
// memory store

const number = 610; //allocate memory for number
const string = 'some text'//allocate memory for a string
const human  = {//allocate memory for an object... and it's values
    first: 'Andrei',
    last: 'Neagoie'
}

// call stack

function subtractTwo(num){
    return num-2;
}
function calculate(){
    const sumTotal = 4+5;
    return subtractTwo(sumTotal);
}

calculate() // every time use the function we use the call stack

// callstack

// ads the calculate function on top of the stack
// and then remove it