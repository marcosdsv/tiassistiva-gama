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

