
var my_array = new Array();
var other_array = [1,"Jeisson",3,"Andres",5];
my_array = [1,2,3,4,5,6,7,8,9];
console.log(my_array);
console.log(my_array[3]);
other_array = ['a', 'n', 'ggjggjjggjgj', 'fjfjfjf'];
console.log(other_array);
console.log(typeof(my_array));
my_array.push(10);
for(i=0;i<my_array.length; i++)
	console.log("Aqui voy : "+my_array[i]);
my_array.pop();
other_array.sort();
console.log(other_array);
var tasks = ['comer', 'dormir', 'jugar'];

console.log(tasks);

tasks.splice(1,3, "Estudiar", "saltar", "correr");

console.log(tasks);