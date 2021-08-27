function proximo1(){
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

if(nome.length <= 5){
	document.getElementById("nome").focus();
}
else if(!(!(!(resultadoTelefone1 == "(") && resultadoTelefone2 == ")") && resultadoTelefone3 == "-") || telefone.length <= 12){
    document.getElementById("telefone").focus();
}
else if(!(!(!(resultadoCelular1 == "(") && resultadoCelular2 == ")") && resultadoCelular3 == "-") || celular.length <= 13){
    document.getElementById("celular").focus();
}
else if(!(!(!(resultadoCpf1 == ".") && resultadoCpf2 == ".") && resultadoCpf3 == "-") || cpf.length <= 13){
    document.getElementById("cpf").focus();
}
else if(rg == ""){
	document.getElementById("rg").focus();
}
else if(sexo == ""){
	document.getElementById("sexo").focus();
}else{
    document.getElementById("div1").style.display = 'none';
    document.getElementById("div2").style.display = 'block';
	document.getElementById("cep").focus();
}

}

function proximo2(){
	var cep = document.getElementById("cep").value;
	var endereco = document.getElementById("endereco").value;
	var bairro = document.getElementById("bairro").value;
	var numero = document.getElementById("numero").value;
	if(cep == ""){
		document.getElementById("cep").focus();
	}
	else if(endereco == ""){
		document.getElementById("endereco").focus();
	}
	else if(bairro == ""){
		document.getElementById("bairro").focus();
	}
	else if(cidade == ""){
		document.getElementById("cidade").focus();
	}
	else if(estado == ""){
		document.getElementById("estado").focus();
	}
	else if(numero == ""){
		document.getElementById("numero").focus();
	}else{
		document.getElementById("div2").style.display = 'none';
		document.getElementById("div3").style.display = 'block';
		document.getElementById("email").focus();
	}
}
function proximo3(){
	var email = document.getElementById("email").value;
	var senha1 = document.getElementById("senha1").value;
	var senha2 = document.getElementById("senha2").value;
	if(email == ""){
		document.getElementById("email").focus();
	}
	else if(senha1 == ""){
		alert("O campo senha está em branco");
		document.getElementById("senha1").focus();
	}
	else if(senha2 == ""){
		alert("O campo senha está em branco");
		document.getElementById("senha2").focus();
	}
	else if(senha1 != senha2){
		alert("as senhas não confere! Digite novamente");
		document.getElementById("senha1").focus();
	}
	else if(senha1.length < 8){
		alert("a senha deve ter mais que 8 caracteres");
		document.getElementById("senha1").focus();
	}
	else if(senha2.length < 8){
		alert("a senha deve ter mais que 8 caracteres");
		document.getElementById("senha2").focus();
	}else{
		if(confirm("tem certeza que deseja se cadastrar?")){
	window.location="cadastrado.html";
		}
	}

}