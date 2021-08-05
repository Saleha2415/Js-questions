
/*
Create a nested array object called operatingSystem and add below key and values
Name - Ubuntu , version - 18.4 , license - open source
*/




var operatingSystem = [{}];
operatingSystem = [...operatingSystem,{"Name" : "Ubuntu"}];                                      
operatingSystem = [...operatingSystem,{"version" : 18.4}];       
operatingSystem = [...operatingSystem,{"license" : "open source"}];

console.log(operatingSystem);


/*
Output

Array(4) [ {}, {…}, {…}, {…} ]
0: Object {  }
1: Object { Name : "Ubuntu" }
2: Object { version : 18.4 }
3: Object { license : "open source" }
length: 4

*/
