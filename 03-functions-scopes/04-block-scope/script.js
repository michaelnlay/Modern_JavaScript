// Var is not block level scopped

const x = 100;

if (true){
    var y=200;
     x = 1;
    console.log(x + y);
}

console.log(x + y);