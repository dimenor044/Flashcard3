function criaCartão(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    cartão.className = 'cartão'

    cartão.innerHTML = '
    <div class="cartao__conteudo">
    <h3>$(categoria)</h3>
    <div class="cartao__conteudo__pergunta">
        <p>$(pergunta)</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>$(resposta)</p>
    </div>
    </div>
    .

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        viraCartao.classList.toggle('active', respostaEstaVisivel)
    }
    viraCartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
