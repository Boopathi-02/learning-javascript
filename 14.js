// var dhoni={
//     fullname:"ms dhoni",
//     DOB:"July 07 1981",
//     age:42
// }
// var virat={
//     fullname:"ms dhoni",
//     DOB:"July 07 1981",
//     age:42
// }
// function cricket( player){
//     console.log(player); 
// }
// cricket(dhoni);
// cricket(virat);

// _+__++_+_+_+++++___________________+_+_+_+_+_+_+_+_+
// function person(name,age){
//     this.name=name,
//     this.age=age
// }
// var person1=new person("jeeva",16);
// var person2=new person("aravindh",16);
// var person3=new person("boopathi",16);
// console.log(person1)
// console.log(person2)
// console.log(person3)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var emp=new Object()
emp.a=12,
emp.b=2
function emp1(){
    // if(a==1){
    //     console.log("number is one")
    // }
    // else{
    //     console.log("invalid")
    // }
    console.log(emp.a+emp.b)
    console.log(emp.a-emp.b)
    console.log(emp.a*emp.b)
}
emp1(emp)