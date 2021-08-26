function eventoCod(event){
	var cod = event.which || event.keycode;
	var nome = document.getElementById("nome").value;
	//if(cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122){
		if(cod >= 48 && cod <= 57){
			event.preventDefault();
	}
	if(nome.length <= 6){
		document.getElementById("divnome").innerHTML = "Digite seu nome completo";
	}else{
		document.getElementById("divnome").innerHTML = "";
	}
}

function eventoTelefone(event){
	//código dos digitos de 0 a 9 48 57.
var cod = event.which || event.keycode;
var telefone = document.getElementById("telefone").value;
if(cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122){
	event.preventDefault();
}
if(telefone.length == 0 && cod >= 48 && cod <= 57){
telefone = telefone + '(';
document.forms[0].telefone.value = telefone;
}
if(telefone.length == 3){
telefone = telefone + ')';
document.forms[0].telefone.value = telefone;
}
if(telefone.length == 8){
telefone = telefone + '-';
document.forms[0].telefone.value = telefone;
}
}
