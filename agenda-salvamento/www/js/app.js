function SalvarContato(){
    nome = document.getElementById("nome").value 
    telefone = document.getElementById("telefone").value 

 novoContato = nome + " - " + telefone
 document.getElementById("lista-Contato").innerHTML = novoContato


}

btSalvar = document.getElementById ("salvar")
btSalvar = addEventListener ("click",function(){
    SalvarContato()

})