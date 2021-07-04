if(true){
    //Function Scope
    //can redefine
    //can reassign
    var varVariable = 'This is var';
}

console.log(varVariable);

if(true){
    //Block Scope
    //can redefine
    //cannot reassign
    let letVariable = "This is let";
    
}
console.log(letVariable);