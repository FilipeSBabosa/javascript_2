const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto')

const azulInverno = {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno'
}
const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}
const meiaNoite = {
    nome: 'Meia-Noire',
    pasta: 'imagens-rosa-claro'
}
const rosaClaro = {
    nome: 'Rosa-Claro',
    pasta: 'imagens-rosa-claro'
}
const verdeCipreste = {
    nome: 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste'
}
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ['41mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagem/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpng';
}

//function trocarTamanho() { 
    //const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    //tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
   // tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de" + opcoesTamanho[tamanhoSelecionado];
//}

