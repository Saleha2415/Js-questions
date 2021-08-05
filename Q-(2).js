/*
Write a JavaScript program to display the reading status (i.e. display book name, author
name and reading status) of the following books.
*/


var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];

for(let i=0;i<library.length;i++)
{
  console.log("Author: " +library[i].author +"\n"+ "Title: "+ library[i].title +"\n"+ "Reading Status: " +library[i].readingStatus);
}

/*
Output

Author: Bill Gates
Title: The Road Ahead
Reading Status: true

Author: Steve Jobs
Title: Walter Isaacson
Reading Status: true

Author: Suzanne Collins
Title: Mockingjay: The Final Book of The Hunger Games
Reading Status: false

*/
