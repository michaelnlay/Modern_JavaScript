function first(){
    const x = 100;

    function second(){
        const y=200;
        console.log(x+y); //you can access parent variable but you can't access child variables
    }
    second()
}
first()

if (true) {
    const x =100;
    if (x===100){
        const y = 200;
        console.log(x + y);
    }

    // console.log(y)  won't work since it is it a different scope
}