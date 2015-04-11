/**
	CallBack Js
	Llamar a una función y enviarle como parámetro otra función, esperando que la ejecución que se llame se encargue de ejecutar esa función. 
	
**/

function operaciones(sumar, restar, multiplicar, dividir){

	var numero1 = Math.floor((Math.random() * 10) + 1);
	var numero2 = Math.floor((Math.random() * 10) + 1);

	sumar(numero1, numero2);

	restar(numero1, numero2);

	multiplicar(numero1, numero2);

	dividir(numero1, numero2);
}

operaciones(
	
	function(numero1, numero2){
		alert(numero1+"+"+numero2+" = "+(numero1+numero2));
	},

	function(numero1, numero2){
		alert(numero1+"-"+numero2+" = "+(numero1-numero2));
	},

	function(numero1, numero2){
		alert(numero1+"*"+numero2+" = "+(numero1*numero2));
	},

	function(numero1, numero2){
		alert(numero1+"/"+numero2+" = "+(numero1/numero2));
	}
);

