let num1=12
let num2=0
let no
let operation="/"
function calculator(a,b,operations){
    if(operations == "+")
      return a+b;
    if(operations == "-")
      return a-b;
    if(operations == "*")
      return a*b;
    if(operations == "/" &&  b==0)
      return no;
    else
        return a/b;
}
console.log(calculator(num1,num2,operation))

let age=20;
if(age>=18){
    console.log("You are eligible")
}
else{
    console.log("You are not eligible")
}


 let marks=70;
if(marks>90 && marks<=100){
    console.log("S")
}
else if(marks>80 && marks<=90){
    console.log("A")
}
else if(marks>70 && marks<=80){
    console.log("B")
}
else if(marks>60 && marks<=70){
    console.log("C")
}
else if(marks>50 && marks<=60){
    console.log("D")
}
else if(marks>35 && marks<=50){
    console.log("E")
    }
else{
    console.log("F")
}

let i=0;
while(i<1){
    console.log(i);
    i++;
}
let factorial=6
for(let i=factorial-1;i>=1;i--){
     factorial=factorial*i;
}
console.log(factorial);