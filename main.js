const dados=[
    {
    id:1,
    nome:"Nicolas Gabriel",
    profissao:"Desenvolvedor de Software",
    avaliacao:"Este serviço é incrivelmente útil, permitiu-me verificar todos os detalhes do veículo antes de comprá-lo, incluindo histórico de acidentes e multas.",
    img:"imagens/foto_1.jpg"}
    ,
    {
    id:2,
    nome: "João Pedro",
    profissao:"Tatuador",
    avaliacao:"A pesquisa é rápida e fácil de usar, e as informações são precisas e atualizadas.",
    img:"imagens/foto_2.png",
    },
    {
    id:3,
    nome:"Maria Eduarda",
    profissao:"Enfermeira",
    avaliacao:"Eu recomendo este serviço a todos os compradores de carros usados, pois é fundamental ter informações confiáveis antes de tomar uma decisão de compra.",
    img:"imagens/foto_3.png",
    },
    {
    id:4,
    nome:"Ana Costa",
    profissao:"Professora",
    avaliacao:"Este serviço é uma verdadeira bênção para a indústria automotiva, economiza tempo e ajuda a evitar compras arrependidas.",
    img:"imagens/foto_4.png",
    },
    {
    id:5,
    nome:"Marcelo Nunes",
    profissao:"Arquiteto",
    avaliacao:"Eu usei o serviço para verificar a placa de um carro que eu estava interessado em comprar e fiquei impressionado com a quantidade de informações disponíveis.",
    img:"imagens/foto_5.png",
    },
    {
    id:6,
    nome: "Juliana Martins",
    profissao:"Veterinaria",
    avaliacao:"Este serviço é uma excelente opção para qualquer pessoa que deseje verificar as informações de um veículo antes de comprá-lo, altamente recomendado.",
    img:"imagens/foto_6.png",
    },
    {
    id:7,
    nome: "Daila Santos",
    profissao:"Desenvolvedora Front-end",
    avaliacao:"Eu recentemente usei um site de consulta de placa para obter informações sobre um veículo. Em geral, fiquei satisfeito com a minha experiência. O site apresentou informações completas e precisas sobre o veículo, incluindo modelo, ano, marca, cor, etc. Além disso, o processo de busca foi rápido e fácil de usar, com resultados apresentados de forma clara e organizada.",
    img:"imagens/foto_7.png"
    }
]
let contador = 0
const botao_voltar = document.querySelector("#voltar")
botao_voltar.addEventListener("click",function(){
    if (contador == 0){
        contador = 6
        document.getElementById("nome").innerHTML=(dados[contador].nome)
        document.getElementById("profissao").innerHTML=(dados[contador].profissao)
        document.getElementById("texto").innerHTML=(dados[contador].avaliacao)
        document.getElementById("imagem").src=(dados[contador].img)
    }
    else{
    contador=contador-1
    document.getElementById("nome").innerHTML=(dados[contador].nome)
    document.getElementById("profissao").innerHTML=(dados[contador].profissao)
    document.getElementById("texto").innerHTML=(dados[contador].avaliacao)
    document.getElementById("imagem").src=(dados[contador].img)}
});
const botao_avanca=document.querySelector("#seguinte")
botao_avanca.addEventListener("click",function(){
    if (contador == dados.length)
    {
        contador=0
        document.getElementById("nome").innerHTML=(dados[contador].nome)
        document.getElementById("profissao").innerHTML=(dados[contador].profissao)
        document.getElementById("texto").innerHTML=(dados[contador].avaliacao)
        document.getElementById("imagem").src=(dados[contador].img)

    }
    else{
    contador=contador+1
    document.getElementById("nome").innerHTML=(dados[contador].nome)
    document.getElementById("profissao").innerHTML=(dados[contador].profissao)
    document.getElementById("texto").innerHTML=(dados[contador].avaliacao)
    document.getElementById("imagem").src=(dados[contador].img)
    }
})
const aleatorio=document.querySelector("#aleatorio")
aleatorio.addEventListener("click",function(){
    numero_aleatorio=Math.floor(Math.random()*dados.length)
    contador= numero_aleatorio
    document.getElementById("nome").innerHTML=(dados[contador].nome)
    document.getElementById("profissao").innerHTML=(dados[contador].profissao)
    document.getElementById("texto").innerHTML=(dados[contador].avaliacao)
    document.getElementById("imagem").src=(dados[contador].img)
})

