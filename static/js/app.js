// variáveis gerais

const botao = document.querySelector('#cadastroAtividade');
const form = document.querySelector(".cadastro-atividades");
let tabela = document.querySelector('#atividades');

let detalheAtividade = document.querySelector("#detalhe-atividade");
let modificar = document.querySelectorAll('.modificar')
let deadline = document.querySelectorAll(".prazo-atividade")
let remover = document.querySelectorAll('.remover')


// execuções obrigatórias





for (i=0; i<modificar.length ; i++){
   let atividade = document.querySelector("#nome")
   let description = document.querySelector("#msg")
   let deadline = document.querySelector("#deadline")
   let dataid = modificar[i].getAttribute('data-id')
   modificar[i].addEventListener('click',()=>{
      $.get('/get_atividade/'+dataid,(data)=>{
         botao.value = "Concluir Modificação"
         form.setAttribute('action','/modificar/'+dataid)
         let date = new Date(data['deadline']).toISOString().substr(0,10)
         atividade.value = data['atividade']
         description.value = data['descricao']
         deadline.value = date
      })
   })
}


for(i=0;i<deadline.length;i++){
   let ndate =deadline[i].textContent.substring(8,10) + "/" + deadline[i].textContent.substring(6,7) + "/"+ deadline[i].textContent.substring(0,4)
   deadline[i].textContent = ndate
}



for (i=0;i<remover.length;i++){
   
   let id = remover[i].getAttribute('data-id')
   remover[i].addEventListener("click",()=>{
      let msg = confirm('Deseja Realmente Excluir Essa Atividade');
      
      if(msg== true){         
         $.post("/excluir/"+id,()=>{
            document.location.reload(true);

         })
         console.log("Exclusão Confirmada")
      } else {
         console.log("Exclusão não confirmada")
      }
   })


}

