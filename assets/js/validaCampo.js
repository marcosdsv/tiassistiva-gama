function proximo1(){
var nome = document.getElementById("nome").value;
var telefone = document.getElementById("telefone").value;
var celular = document.getElementById("celular").value;
var cpf = document.getElementById("cpf").value;
var rg = document.getElementById("rg").value;
//pego os caracteres da máscara do telefone
var resultadoTelefone1 = telefone.substring(0, 1);
var resultadoTelefone2 = telefone.substring(3, 4);
var resultadoTelefone3 = telefone.substring(8, 9);
//pego os caracteres da máscara do celular.
var resultadoCelular1 = celular.substring(0, 1);
var resultadoCelular2 = celular.substring(3, 4);
var resultadoCelular3 = celular.substring(9, 10);
console.log(resultadoCelular1);
console.log(resultadoCelular2);
console.log(resultadoCelular3);
if(nome.length <= 5){
	document.getElementById("nome").focus();
}
else if(!(!(!(resultadoTelefone1 == "(") && resultadoTelefone2 == ")") && resultadoTelefone3 == "-") || telefone.length <= 12){
    document.getElementById("telefone").focus();
}
else if(!(!(!(resultadoCelular1 == "(") && resultadoCelular2 == ")") && resultadoCelular3 == "-") || celular.length <= 13){
    document.getElementById("celular").focus();
}
/*else{
    document.getElementById("div1").style.display = 'none';
    document.getElementById("div2").style.display = 'block';
}*/

}