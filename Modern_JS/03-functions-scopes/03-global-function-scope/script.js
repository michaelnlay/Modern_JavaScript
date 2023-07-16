//Global variable scope
const x = 100;

function run(){

    console.log(window.innerHeight);
    console.log(x, " in function"); //can access here
}
run();

if (true){
    console.log(x, "in block"); // can access here
}

function add(){
    const x = 1;
    const y = 50;
    console.log(x + y); // return 150 but after initiated the const x inside the function code block, x + y = 51
}