
/*Todos los campos son obligatorios, excepto los dos últimos.
//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
//Para los campos nombre y apellido la primera letra debe ser mayúscula
//Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas
Si algún campo presenta error debe informarse al usuario por medio de un alert.*/


var letras 
var validaEmail
var nombre=document.getElementById("name").value;
var apellido=document.getElementById("lastname").value;
var correo=document.getElementById("input-email").value;
var contrasena=document.getElementById("input-email").value;
var bicicleta=document.getElementsByTagName('select')[0].value;


function validateForm(){

	
	if(nombre === ""){
		alert ('El campo nombre está vacío'); //valida que no esté vacío
		return false;
	}

	if(apellido === ""){
		alert ('El campo apellido está vacío');
		return false;
	}

	if(correo === ""){
		alert ('El campo correo está vacío');
		return false;
	}

	if(contrasena === ""){
		alert ('El campo contraseña está vacío');
		return false;
	}


	
}

