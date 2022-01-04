const nome ="Ronielson Braga"
let nome2 = "Ronielson"
let nomes = ["Marcelo","Maria Silva","Pedro silva"]
let pessoas = [
{
    nome: "roni",
    idade: 24,
    trabalho:"militar",

},
{
    nome: "maria Silva",
    idade: 22,
    trabalho:"UX/UI DESIGN"
}

]
let pessoadefault ={
    nome: "roni",
    idade: 24,
    trabalho:"militar"
} 


function alterarNome(){
    nome2 = "Debora"
    console.log("Valor alterado")
    console.log(nome2)
}
function recebeAlteraNome(novoNome){
    nome2 = novoNome
    console.log("Valor alterado recebendo um nome")
    console.log(nome2)
}
recebeAlteraNome("joao Silva")
recebeAlteraNome("maria silva")
//alterarNome()

function imprimirPessoa(pessoa){
    console.log(pessoa)

    console.log("Nome:")
    console.log(pessoa.nome)
    
    console.log("Idade:")
    console.log(pessoa.idade)
    
    console.log("trabalho:")
    console.log(pessoa.trabalho)    
}
imprimirPessoa(pessoadefault)
imprimirPessoa({nome: "Maria joana",
idade: 24,
trabalho:"programadora"})

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)

}
adicionarPessoa({
    nome: "Icaro",
    idade: 13,
    trabalho: "motoboy"
})

function imprimirPessoas(){
    console.log("------------Imprimir Pessoas")
    pessoas.forEach((item)=>{
        console.log("Nome:")
        console.log(item.nome)
        console.log("Idade:")
    console.log(item.idade)
    
    console.log("trabalho:")
    console.log(item.trabalho)  
    })
}

imprimirPessoas()