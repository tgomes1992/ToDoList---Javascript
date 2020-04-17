const botao = document.querySelector('#cadastroAtividade');




 botao.addEventListener('click',()=>{
    let lista = document.querySelector('#atividades');
    let natividade = document.createElement('li');
    let textonatividade = document.querySelector("#atividade");
    let deadlinedata = document.querySelector("#deadline").value
    event.preventDefault()
    natividade.textContent = textonatividade.value
    natividade.className = "atividade"
    natividade.append(" - " + deadlinedata)
    lista.appendChild(natividade)
    console.log(natividade.textContent)
    console.log(deadlinedata)
    console.log("Nova Atividade Cadastrada")
    textonatividade.value = ""
    deadlinedata = ""
 })


