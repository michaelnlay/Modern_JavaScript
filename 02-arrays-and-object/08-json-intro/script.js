//JSON stands for JavaScript Object Notation, it is a lightweight data interchange format, storing data in a way that human can read

//Array of JSON objects, which are similar to JavaScript object 
//both have Key value pair 

//the different is for JSON is that the key has double quote around it, and have to have double quote around the value as well
//example: "login":"happy"

const post ={
    id:1,
    title:'Post One',
    body:'This is the boyd',
}

//Convert to JSON string //{"id":1,"title":"Post One","body":"This is the boyd"}

const str = JSON.stringify(post)

// Parse JSON => convert back to object literal //{ id: 1, title: 'Post One', body: 'This is the boyd' }
const obj = JSON.parse(str)

const posts = [
    {
        id:1,
        title:'Post One',
        body:'This is the body',
    },
    {
        id:2,
        title:'Post Two',
        body:'This is two ',
    },

    {
        id:3,
        title:'Post 3',
        body:'This is the 3',
    }
]

const strs = JSON.stringify(posts)

console.log(strs);