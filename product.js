const prod=(num1,num2)=>{
    return num1*num2;
}
console.log(prod(2,3));
const student={
    name:"arun",
    age:"21",
    marks:100,
    greet(){
        console.log(this.name);
    }
}
student.greet();