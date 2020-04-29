// variáveis gerais

const botao = document.querySelector('#cadastroAtividade');
const form = document.querySelector(".cadastro-atividades")
let tabela = document.querySelector('#atividades')
let prazo = document.querySelector("#deadline")
let nomeatividade = document.querySelector("#atividade")
let detalheAtividade = document.querySelector("#detalhe-atividade")


//funções

function formatardata(){
   let data = prazo.value
   let ano = data.slice(0,4)
   let mes = data.slice(5,7)
   let dia  = data.slice(8,10)
   let dataTotal = dia +"/"+mes+"/"+ano
   return dataTotal
}

// criação de itens
// criação botao de exclusao

function criarbotaoexclusao(){
   let botao = document.createElement("button")
   botao.textContent="Botão Remover"
   botao.addEventListener("click",()=>{
      var exclusao = botao.parentNode
      exclusao.remove()
   })

return botao

}

// criação botao de modificação

function criarbotaomodificar(){
   let butao = document.createElement("button")
   butao.className="modificar"
   butao.textContent="Modificar Atividade"
      butao.addEventListener("click",()=>{
         botao.textContent = "Atualizar Atividade"
         botao.addEventListener("click",()=>{
               let excluir = butao.parentNode
               excluir.remove()
               botao.textContent = "Adicionar Atividade"
            })
         let modificar = butao.parentNode.childNodes
         let data = modificar[2].textContent
         let datatrans = data.slice(6,10)+"-"+data.slice(3,5)+"-"+data.slice(0,2)
         nomeatividade.value  = modificar[0].textContent
         detalheAtividade.value= modificar[1].textContent
         console.log(datatrans)
         prazo.value = datatrans
   })
return butao
}

// cria o tr da atividade

function criarTrAtividade(){
   let trAtividade = document.createElement("tr")
   let tdAtividade = document.createElement("td")
   let tddetalhe = document.createElement("td")
   let tdprazo = document.createElement("td")
   let botaodelete = criarbotaoexclusao()
   let botaomodificar = criarbotaomodificar()
   tdAtividade.textContent = nomeatividade.value
   tddetalhe.textContent = detalheAtividade.value
   tdprazo.textContent = formatardata()
   trAtividade.append(tdAtividade,tddetalhe,tdprazo,botaodelete,botaomodificar)
   return trAtividade
}

//principais

//cria ativade
function criarAtividade(){
   event.preventDefault()
   tabela.appendChild(criarTrAtividade())
   form.reset()
   console.log("Nova Atividade Cadastrada")
}

function cadastroDefault(){

   botao.textContent = "Adicionar Atividade"
   botao.addEventListener('click',()=>{
      criarAtividade()
      event.preventDefault()
   })

}

// eventos

cadastroDefault()

