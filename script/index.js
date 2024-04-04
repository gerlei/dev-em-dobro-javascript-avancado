const botao = document.querySelector('.botao')
const titulo = document.querySelector('.titulo')
const mensagem = document.querySelector('.mensagem')


async function buscarApi(){
    const resposta = await fetch('https://api.adviceslip.com/advice')

    const conteudoApi = await resposta.json()
    const tituloApi = `ADVICE #${conteudoApi.slip.id}`
    const mensagemApi = `"${conteudoApi.slip.advice}"`

    titulo.innerHTML = tituloApi
    mensagem.innerHTML = mensagemApi
}

botao.addEventListener('click', buscarApi)

buscarApi()