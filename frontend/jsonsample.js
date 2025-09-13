let student={
    name:"sharvani",
    age:20,    
    marks:[85,90,78],
};
let jsonstring=JSON.stringify(student);
console.log("JSON string:",jsonstring)
let parsedObj=JSON.parse(jsonstring);
console.log("Parsed Object:",parsedObj);

fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response => response.json())
.then(data => console.log("Fetched Posts:",data))
.catch(error => console.error("Error:",error));

fetch("https://jsonplaceholder.typicode.com/users/")
.then(response => response.json())
.then(users => {
    let output = "";
    users.forEach(user => {
        output += `${user.name} - ${user.email}\n`;
    });
    console.log(output);
});

