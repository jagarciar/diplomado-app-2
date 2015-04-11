/* Comparación de dos números enteros bajo una función */

function max(numero1, numero2){
	if(numero1>numero2){
		alert("El número 1 con valor : "+numero1+" es mayor que el número 2 con valor : "+numero2);
	}
	else if(numero2>numero1){
		alert("El número 2 con valor : "+numero2+" es mayor que el número 1 con valor : "+numero1);
	}
	else{
		alert("Los dos números tienen igual valor");
	}
}

max(5,4);
max(6,9);
max(5,5);