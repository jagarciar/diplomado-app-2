/** 
	Objetos y funciones
**/

var my_object = new Object();
var other_object = {};

var my_object = {
	firstName : "Jeisson",
	lastName: "Garcia",
	phone: 3004724639
};

console.log(my_object.firstName);

console.log(my_object['lastName']);

var key;

for(key in my_object){
	console.log(my_object[key]);
}

// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();