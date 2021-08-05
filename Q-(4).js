/*
Consider the two functions below. Will they both return the same thing? Why or why
not?
*/

function foo1()
{
 return {
  bar: "hello"
 };
}

function foo2()
{
 return                //automatic insertion of semicolon 
 { 
  bar: "hello"
 };
}

console.log(foo1());
console.log(foo2());

/*
Output

Object { bar: "hello" }    //foo1() 
undefined                  //foo2() 

*/

/*
as return statement in Js is followed by block creation (which is ignored in runtime). Not as "return an object".
So after the return in foo2() there is automatic insertion of semicolon resulting in undefined. 
So the rest of the code is never reached. 
*/
