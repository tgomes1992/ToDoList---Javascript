const botao = document.querySelector('#cadastroAtividade');

 botao.addEventListener('click',()=>{
    let lista = document.querySelector('#atividades');
    let natividade = document.createElement('li');
    let textonatividade = document.querySelector("#nova-atividade");
    natividade.textContent = textonatividade.value
    natividade.className = "atividade"
    lista.appendChild(natividade)
    console.log(natividade)
    textonatividade.value = ""
 })


