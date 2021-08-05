/*
How to delete 'Beethoven' from set
*/

const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
console.log (set.delete('Beethoven')) ;
console.log (set.has('beethoven'));


/*
Output

"true"          //deleting 
"false"         //checking if set has beethoven 

*/
