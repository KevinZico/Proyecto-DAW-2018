var contacto = new Object();//creamos el objeto contacto

////////////////////////////////////////
var nombreArray = [];///////////////////
var apellidoArray= [];////////////////
var correoArray = [];////////////////Creamos arreglos para cada elemento que necesitamos guardar
var asuntoArray = [];///////////////
var comentarioArray = [];/////////////
//////////////////////////////////

var contador = 0; //Creamos una variable que nos servira como 
//contador para generar el indice que usaran los elementos de cada arreglo, inicializado en 0.

function iniciar (){
	var btnEnviar= document.getElementById("enviar");

		if(btnEnviar.addEventListener){
			btnEnviar.addEventListener("click",function(){
				createObject(document.contactar);
			},false);
		}

		else if (btnEnviar.attachEvent){
			btnEnviar.attachEvent("onclick", function(){
				createObject(document.contactar);
			});
		}
}

function createObject(form){
	contacto.nombre = document.getElementById("nombre").value;
	contacto.apellido = document.getElementById("apellido").value;
	contacto.correo = document.getElementById("correo").value;
	contacto.asunto = document.getElementById("asunto").value;
	contacto.comentario = document.getElementById("comentario").value;

	nombreArray[contador] = contacto.nombre;
	apellidoArray[contador] = contacto.apellido;
	correoArray[contador] = contacto.correo;
	asuntoArray[contador] = contacto.asunto;
	comentarioArray[contador] = contacto.comentario;

	mostrarDatos(contacto,"infoContactanos");

}

function mostrarDatos(objeto,objname){

	var infContacto = "";
	var tblContacto = "";
	var info = document.getElementById("bodyTable");
	for(var i in objeto){
		infContacto = infContacto + objname + "."+i+" = " + objeto[i] + "\n";
	}

tblContacto += "<td>"+nombreArray[contador]+"</td>";
tblContacto += "<td>"+apellidoArray[contador]+"</td>";
tblContacto += "<td>"+correoArray[contador] +"</td>";
tblContacto += "<td>"+asuntoArray[contador]+"</td>";
tblContacto += "<td>"+comentarioArray[contador]+"</td>";

info.innerHTML += tblContacto;

}

if(window.addEventListener){
	window.addEventListener("load",iniciar,false);
}
else if (window.attachEvent){
	window.attachEvent("onload",iniciar);
}



//validacines////////////////////////////////////////////////////////////////////////////

	function validar(){
		var valor = document.getElementById("txttitulo").value;
		if (/[˄A-Z]+[$a-z]/.test(valor)) {
			
		}else{
			alert("El Nombre: "+valor+" es INVALIDO, ingresar en formato Aaa");
			showinfo.addEventListener("click", function(){
			createObject(document.frmbook);
		}, false);
		}
	}
		function validar1(){
		var valor = document.getElementById("txtautor").value;
		if (/[˄A-Z]+[$a-z]/.test(valor)) {
			
		}else{
			alert("Autor: "+valor+" es INVALIDO ingresar en formato Aaa");
			showinfo.addEventListener("click", function(){
			createObject(document.frmbook);
		}, false);
		}
	}
	function validar2(){
		var valor = document.getElementById("seleditorial").value;
		if (/[˄A-Z]+[$a-z]/.test(valor)) {
			
		}else{
			alert("Editorial es: "+valor+" INVALIDO");
			showinfo.addEventListener("click", function(){
			createObject(document.frmbook);
		}, false);
		}
	}
	function validar3(){
		var valor = document.getElementById("seledicion").value;
		if (/\d/.test(valor)) {
			
		}else{
			alert("Edicion es: "+valor+" INVALIDO");
			showinfo.addEventListener("click", function(){
			createObject(document.frmbook);
		}, false);
		}
	}
	function validar4(){
		var valor = document.getElementById("txtpais").value;
		if (/[˄A-Z]+[$a-z]/.test(valor)) {
			
		}else{
			alert("El Pais es: "+valor+" es INVALIDO, ingresar en formato Aaa");
			showinfo.addEventListener("click", function(){
			createObject(document.frmbook);
		}, false);
		}
	}
	function validar5(){
		var valor = document.getElementById("txtcod").value;
		if (/[A-Z][A-Z][A-Z]\-[0-9][0-9][0-9]/.test(valor)) {
			
		}else{
			alert("El Codigo es: "+valor+" es INVALIDO, ingresar en formato AAA-000");
			showinfo.addEventListener("click", function(){
			createObject(document.frmbook);
		}, false);
		}
	}
	function validar6(){
		var valor = document.getElementById("txtdui").value;
		if (/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]\-[0-9]/.test(valor)) {
			
		}else{
			alert("El DUI es: "+valor+" es INVALIDO, ingresar en formato 00000000-0");
			showinfo.addEventListener("click", function(){
			createObject(document.frmbook);
		}, false);
		}
	}


	function todo(){
		validar();
		validar1();
		validar2();
		validar3();
		validar4();
		validar5();
		validar6();
	}