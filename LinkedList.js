// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

//     function invite(greeting1, greeting2) {
//         console.log(
//           greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//         );
//       }

//       invite.apply(employee1,["Hello", "How are you?"] ); // Hello John Rodson, How are you?
//       invite.apply(employee2,[ "Hello", "How are you?"]); // Hello Jimmy Baily, How are you

//   var employee1 = { firstName: "John", lastName: "Rodson" };
//   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

//   function invite(greeting1, greeting2) {
//     console.log(
//       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//     );
//   }

//   var inviteEmployee1 = invite.bind(employee1);
//   var inviteEmployee2 = invite.bind(employee2);
//   inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
//   inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// function snehal(){
//     if(1=="2"){
//         alert("1 is true with ==")
//     }
//     else{
//         alert("1 is false with ==")
//     }
//     if(1==="1"){
//         alert("1 is true     with ===")
//     }
//     else{
//         alert("1 is false with ===")
//     }
// }
// snehal();
//     var intervalId;
//     var runCount=0;
//     function message(){
//         runCount++;
//         if(runCount>5){
//         clearInterval(intervalId)
//         }
//         console.log("message is shown after thre seconds");
//     }
//    intervalId=setInterval(message,1000);

// var myFun=function(){
//     console.log("This runs after 1 sec")
// }
// setInterval(myFun,1000)

// function init(){
//     var name='Snehal';
//     function displayNAme(){
//         alert(name);
//     }
//     displayNAme()
// }
// init();

// function makeFunc() {
//     var name = "koli";
//     function displayName() {
//         alert(name);
//     }
//     return displayName;
// }
// var myFunc = makeFunc();
// myFunc();

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }

//   var myFunc = makeFunc();
//   myFunc();

// var e=10;
// function f1(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                return a+b+c+d+10;
//             }
//         }
//     }

// }
// console.log(f1(1)(2)(3)(4));

// var snehal = function (s1, s2) {
//     s1 = 20;
//     s2 = 30;
//     var s3 = s1 + s2;
//     console.log(s3);

// };snehal()

// var myFun=(a,...args)=>{
//     console.log(a+" "+args);
// }
// myFun(10,20,30,40,50)
// var myfun= a  =>{
//   document.write(a+"<br>");
//   document.write("snehalkoli")
// };
// myfun(10)

var myfun = c => {
    return c;
};
console.log(myfun(10));

var snehal=c=>c;
console.log(snehal(20))
/**var myfunc=c=> //work
 * var myfunc=c=>{c} //won't work
 * var myfunc=c=>{return c}//work
 * 
*/
var snehal=(a,b)=>{return a+b}
console.log(snehal(10,20));
var snehal=(a,b)=> a+b
console.log(snehal(10,20));

// fun()
// var fun=(s1,s2)=>{s1=10;s2=40;var s3=s1+s2;console.log(s3);};
//arrow function is a shorter version of annonymous function


//----------------------------------->
//comparison with function declaration
//--------------------------------------->

//function declaration
function snehal(a,b){
    return a+b;
}
console.log(snehal(10,50));

//arrow function

var snehal=(a,b)=>{return a+b};
console.log(snehal(70,10));

//shorter way of above code using arrow func
var a=20;
var b=30;
(a,b)=>a+b;





