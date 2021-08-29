//Função para verificar a tecla digitada.
function eventoCod(event) {
	//Declaração de variáveis.
	var cod = event.which || event.keycode;
	var nome = document.getElementById("nome").value;
	//if(cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122){
	//Verifica se a tecla digitada está de acordo.
	if (cod >= 48 && cod <= 57) {
		event.preventDefault();
	}
	/*if(nome.length <= 5){
		document.getElementById("pnome").innerHTML = "Digite seu nome completo";
	}else{
		document.getElementById("pnome").innerHTML = "";
	}*/
}
//Função para verificar a tecla digitada.
function eventoTelefone(event) {
	//código dos digitos de 0 a 9 48 57.
	var cod = event.which || event.keycode;
	var telefone = document.getElementById("telefone").value;
	if (cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122) {
		event.preventDefault();
	}
	if (telefone.length == 0 && cod >= 48 && cod <= 57) {
		telefone = telefone + '(';
		document.forms[0].telefone.value = telefone;
	}
	if (telefone.length == 3) {
		telefone = telefone + ')';
		document.forms[0].telefone.value = telefone;
	}
	if (telefone.length == 8) {
		telefone = telefone + '-';
		document.forms[0].telefone.value = telefone;
	}
}
//Função para verificar a tecla digitada.
function eventoCelular(event) {
	//código dos digitos de 0 a 9 48 57.
	var cod = event.which || event.keycode;
	var celular = document.getElementById("celular").value;
	if (cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122) {
		event.preventDefault();
	}
	if (celular.length == 0 && cod >= 48 && cod <= 57) {
		celular = celular + '(';
		document.forms[0].celular.value = celular;
	}
	if (celular.length == 3) {
		celular = celular + ')';
		document.forms[0].celular.value = celular;
	}
	if (celular.length == 9) {
		celular = celular + '-';
		document.forms[0].celular.value = celular;
	}
}
//Função para verificar a tecla digitada.
function eventoCpf(event) {
	//código dos digitos de 0 a 9 48 57.
	var cod = event.which || event.keycode;
	var cpf = document.getElementById("cpf").value;
	if (cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122) {
		event.preventDefault();
	}
	if (cpf.length == 3 && cod >= 48 && cod <= 57) {
		cpf = cpf + '.';
		document.forms[0].cpf.value = cpf;
	}
	if (cpf.length == 7) {
		cpf = cpf + '.';
		document.forms[0].cpf.value = cpf;
	}
	if (cpf.length == 11) {
		cpf = cpf + '-';
		document.forms[0].cpf.value = cpf;
	}
}
//Função para verificar a tecla digitada.
function eventoRg(event) {
	//código dos digitos de 0 a 9 48 57.
	var cod = event.which || event.keycode;
	if (cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122) {
		event.preventDefault();
	}
}