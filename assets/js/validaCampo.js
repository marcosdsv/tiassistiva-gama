//Função é executada ao ser acionada pelo botão.
function proximo1(){
	//declaração de variáveis.
var nome = document.getElementById("nome").value;
var telefone = document.getElementById("telefone").value;
var celular = document.getElementById("celular").value;
var cpf = document.getElementById("cpf").value;
var rg = document.getElementById("rg").value;
var sexo = document.getElementById("sexo").value;
//pego os caracteres da máscara do telefone
var resultadoTelefone1 = telefone.substring(0, 1);
var resultadoTelefone2 = telefone.substring(3, 4);
var resultadoTelefone3 = telefone.substring(8, 9);

//pego os caracteres da máscara do celular.
var resultadoCelular1 = celular.substring(0, 1);
var resultadoCelular2 = celular.substring(3, 4);
var resultadoCelular3 = celular.substring(9, 10);

// pega os caracteres da máscara do cpf
var resultadoCpf1 = cpf.substring(3, 4);
var resultadoCpf2 = cpf.substring(7, 8);
var resultadoCpf3 = cpf.substring(11, 12);
//Verifica se o campo nome atende todos os argumentos.
if(nome.length <= 5){
	alert("Digite seu nome completo");
	document.getElementById("nome").focus();
}
//Verifica se o campo telefone atende todos os argumentos.
else if(!(!(!(resultadoTelefone1 == "(") && resultadoTelefone2 == ")") && resultadoTelefone3 == "-") || telefone.length <= 12){
	alert("Digite somente números");
    document.getElementById("telefone").focus();
}
//Verifica se o campo celular atende todos os argumentos.
else if(!(!(!(resultadoCelular1 == "(") && resultadoCelular2 == ")") && resultadoCelular3 == "-") || celular.length <= 13){
	alert("Digite somente números");
    document.getElementById("celular").focus();
}
//Verifica se o campo CPF atende todos os argumentos.
else if(!(!(!(resultadoCpf1 == ".") && resultadoCpf2 == ".") && resultadoCpf3 == "-") || cpf.length <= 13){
	alert("Digite seu CPF completo, não precisa de digitar pontos e nem hífen");
    document.getElementById("cpf").focus();
}
//Verifica se está em branco.
else if(rg == ""){
	alert("Digite seu RG");
	document.getElementById("rg").focus();
}
//Verifica se o campo sexo está em branco.
else if(sexo == ""){
	alert("Escolha seu sexo");
	document.getElementById("sexo").focus();
}else{
	//Oculta a div1 e mostra a div2.
    document.getElementById("div1").style.display = 'none';
    document.getElementById("div2").style.display = 'block';
	document.getElementById("cep").focus();
}

}
//Função é executada ao ser acionada pelo botão.
function proximo2(){
	//Declaração de variáveis.
	var cep = document.getElementById("cep").value;
	var endereco = document.getElementById("endereco").value;
	var bairro = document.getElementById("bairro").value;
	var numero = document.getElementById("numero").value;
	//Verifica se o campo CEP está em branco.
	if(cep == ""){
		alert("Digite seu CEP");
		document.getElementById("cep").focus();
	}
	//Verifica se o campo endereço está em branco.
	else if(endereco == ""){
		alert("Digite seu endereço");
		document.getElementById("endereco").focus();
	}
	//Verifica se o campo Bairro está em branco.
	else if(bairro == ""){
		alert("Digite seu bairro");
		document.getElementById("bairro").focus();
	}
	//Verifica se o campo cidade está em branco.
	else if(cidade == ""){
		alert("Digite sua cidade");
		document.getElementById("cidade").focus();
	}
	//Verifica se o campo estado está em branco.
	else if(estado == ""){
		alert("Digite seu estado");
		document.getElementById("estado").focus();
	}
	//Verifica se o campo número está em branco.
	else if(numero == ""){
		alert("Digite seu número");
		document.getElementById("numero").focus();
	}else{
		////Oculta a div2 e mostra a div3.
		document.getElementById("div2").style.display = 'none';
		document.getElementById("div3").style.display = 'block';
		document.getElementById("visual").focus();
	}
}
//Função é executada ao ser acionada pelo botão.
function proximo3(){
	//Declaração de variáveis.
var visual = document.getElementById("visual").checked;
var surdo = document.getElementById("surdo").checked;
var fisica = document.getElementById("fisica").checked;
var intelectual = document.getElementById("intelectual").checked;
var php = document.getElementById("php").checked;
var java = document.getElementById("java").checked;
var python = document.getElementById("python").checked;
//Verifica se o radio está marcado.
if(visual != true && surdo != true && fisica != true &&intelectual != true){
alert("Pelo menos deve selecionar uma deficiência!");
document.getElementById("visual").focus();
}
//Verifica se algum checkbox está marcado.
else if(php != true && java != true && python != true){
alert("Selecione pelo menos um curso!");
document.getElementById("php").focus();
}else{
	//Oculta a div3 e mostra a div4
	document.getElementById("div4").style.display = 'block';
	document.getElementById("div3").style.display = 'none';
	document.getElementById("email").focus();
}
}
//Função é executada ao ser acionada pelo botão.
function proximo4(){
	//declaração de variáveis.
	var email = document.getElementById("email").value;
	var senha1 = document.getElementById("senha1").value;
	var senha2 = document.getElementById("senha2").value;
	//Verifica se o campo e-mail está em branco.
	if(email == ""){
		alert("Digite seu e-mail");
		document.getElementById("email").focus();
	}
	//Verifica se o primeiro input de senha está em branco.
	else if(senha1 == ""){
		alert("Digite sua senha");
		document.getElementById("senha1").focus();
	}
	//Verifica se o segundo input de senha está em branco.
	else if(senha2 == ""){
		alert("Digite sua senha");
		document.getElementById("senha2").focus();
	}
	//Verifica se a primeira senha é diferente da segunda.
	else if(senha1 != senha2){
		alert("As senhas não confere! Digite novamente");
		document.getElementById("senha1").focus();
	}
	//Verifica se a primeira senha é menor que 8.
	else if(senha1.length < 8){
		alert("A senha deve ter pelo menos 8 caracteres");
		document.getElementById("senha1").focus();
	}
	//Verifica se a segunda senha é menor que 8.
	else if(senha2.length < 8){
		alert("A senha deve ter pelo menos 8 caracteres");
		document.getElementById("senha2").focus();
	}else{
		//mostra um alert com dois botões.
		if(confirm("Tem certeza que deseja se cadastrar?")){
	window.location="cadastrado.html";
		}
	}

}