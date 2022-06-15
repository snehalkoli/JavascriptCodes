// var num1=(function(num1,num2){
// console.log(num1+num2)
// console.log('hi i will add 2 functions')
// return 5
// })(1,2)
// console.log(substract())
// var substract=functions(num1,num2){
//     var x=num1
//     var y=num2
//     var result=x-y;
//     return result;

// }
// console.log(substract())
// function abc(){
//     let x="Priti";
//     let y="Snehal";
//     function asd(){
//         console.log(x);
//         console.log(y);

//     }
//     console.dir(asd);
// }
// abc();
// var i=1;
// for(var i=0;i<=2;i++){
//     setTimeout(function(){console.log(i),2000});
//     // console.log(i);
// }

// function n1(){

//     console.log("snehal");
//     n2();
//     return;
// }
// function n2(){
//     console.log("koli");
//     return;
// }
// n1();
// console.log("snehal")
// setTimeout(function() {console.log("koli");},2000)
// console.log("java")
// function one() {
//     setTimeout(function () {
//         console.log("function 1");
//         two();
//     }, 3000);
// }
// function two() {
//     console.log("function 2");
// };
// one();

// function person(friend) {
//     console.log("my friend name is" + friend);
// }
// function person2() {
//     console.log("my name is snehal");
// }
// person("snehal");
// person2();
// function test_divisors(low, high) {
//     //write code here
//     // use console.log to display the output
//         let s ="";
//         for(let i=low; i<=high;i++){
//             if(i%3==0){
//                 s= s+ i+" "+"div3"+" ";
//             }
//             else{
//                 s=s+i+" ";
//             }
//         }
//         console.log(s);
//     }


// function mul (x){
//     // write your code  here
//     return function(y){
//       return function(z){
//         console.log(x*y*z);
//       }
//      }
//     }
 
//     console.log(mul(2)(3)(4));
var head;
class Node{
    constructor(d){
        this.data=d;
        this.next=null;
    }
}
function push(new_data){
    var new_node=new Node(new_data);
    new_node.next=head;
    head=new_node;
}
function isertAfter(prev_node,new_data){
    if(prev_node==null){
        document.write("the given pre node cannot be null");
        return;
    }
    var new_node=new Node(new_data);
    new_node.next=prev_node.next;
    prev_node.next=new_node;
}
function print(){
    var tnode=head;
    while(tnode!=null){
        document.write(tnode.data+" ");
        tnode=tnode.next;
    }
}
push(1)
push(2)
push(3)
push(4)
isertAfter(head.next,8);
isertAfter(head.next,9);
isertAfter(head.next,10);
isertAfter(head.next,11);
print();

 
// A complete working javascript program
// to demonstrate all insertion methods
// on linked list
// var head; // head of list
 
// /* Linked list Node */
//  class Node {
//         constructor(val) {
//             this.data = val;
//             this.next = null;
//         }
//     }

// /* Inserts a new Node at front of the list. */
//  function push(new_data) {
//     /*
//      * 1 & 2: Allocate the Node & Put in the data
//      */
//     var new_node = new Node(new_data);

//     /* 3. Make next of new Node as head */
//     new_node.next = head;

//     /* 4. Move the head to point to new Node */
//     head = new_node;
// }

// /* Inserts a new node after the given prev_node. */
//  function insertAfter(prev_node , new_data) {
//     /* 1. Check if the given Node is null */
//     if (prev_node == null) {
//         document.write(
//         "The given previous node cannot be null"
//         );
//         return;
//     }

//     /*
//      * 2 & 3: Allocate the Node & Put in the data
//      */
//      var new_node = new Node(new_data);

//     /* 4. Make next of new Node as next of prev_node */
//     new_node.next = prev_node.next;

//     /* 5. make next of prev_node as new_node */
//     prev_node.next = new_node;
// }

// /*
//  * Appends a new node at the end.
//    This method is defined inside LinkedList class
//  * shown above
//  */
//  function append(new_data) {
//     /*
//      * 1. Allocate the Node & 2.
//      Put in the data 3. Set next as null
//      */
//      var new_node = new Node(new_data);

//     /*
//      * 4. If the Linked List is empty,
//      then make the new node as head
//      */
//     if (head == null) {
//         head = new Node(new_data);
//         return;
//     }

//     /*
//      * 4. This new node is going to be the last node,
//      so make next of it as null
//      */
//     new_node.next = null;

//     /* 5. Else traverse till the last node */
//     var last = head;
//     while (last.next != null)
//         last = last.next;

//     /* 6. Change the next of last node */
//     last.next = new_node;
//     return;
// }

// /*
//  * This function prints contents of linked list
//  starting from the given node
//  */
//  function printList() {
// var tnode = head;
//     while (tnode != null) {
//         document.write(tnode.data + " ");
//         tnode = tnode.next;
//     }
// }
// append(7)
// push(1)
// push(2)
// push(3)
// push(4)


// printList()