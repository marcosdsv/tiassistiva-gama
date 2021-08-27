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