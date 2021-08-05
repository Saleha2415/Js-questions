
/*
How to copy values from one object to another in above mentioned example , merge and
print them?
*/

const name = { 
firstName: 'Philip',
lastName: 'Fry' 
};

const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

const final={...name,...details};
console.log(final);



/*
Output

Object
firstName: "Philip" 
lastName: "Fry"
job: "Delivery Boy"
employer: "Planet Express"

*/
