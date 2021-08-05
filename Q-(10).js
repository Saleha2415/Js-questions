
/*
Consider below as an example of constructor function where we want name and level to be
referred to a function itself, is below example correct or not? Please explain?
*/

function Hero(name, level)
{
name = name;
level = level;
}

/*
Output 

In Js a constructor function is a function that creates an object. 
As in above code either the syntax is wrong or incomplete. 

In the below mentioned constructor function the name and level is referred to the function itself. 
*/


function Hero(name, level)
{
this.name = name;
this.level = level;
console.log(name, level);
}
const a= new Hero ("Spider Man", 3);

/*
Output

Spider Man
3

*/
