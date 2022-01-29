const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0
};

const campoEntradaOrcamento = document.querySelector('.formsEntradaOr input');
const buttonOrcamento = document.querySelector('.formsEntradaOr button');

buttonOrcamento.addEventListener('click', capturarValorOrcamento);

function capturarValorOrcamento() {
    const valorOrcamento = Number(campoEntradaOrcamento.value);

    controleGastos.orcamento = valorOrcamento;
    controleGastos.saldo = valorOrcamento;

    atualizarInterface();
}

const campoNomeDespesa = document.querySelector('.formEntradaDes_nome');
const campoValorDespesa = document.querySelector('.formEntradaDes_valor');
const buttonDespesa = document.querySelector('.formsEntradaDes button');

buttonDespesa.addEventListener('click', capturarValoresDepesa);

function capturarValoresDepesa() {
    const nomeDespesa = campoNomeDespesa.value;
    const valorDepesa = Number(campoValorDespesa.value);

    controleGastos.despesas += valorDepesa;
    controleGastos.saldo -= valorDepesa;

    atualizarInterface();

    adicionarDespesaInterface(nomeDespesa, valorDepesa);
}

const orcamento = document.querySelector('.resultadosOr p');
const despesas = document.querySelector('.resultadosDes p');
const saldo = document.querySelector('.resultadosSal p');

function atualizarInterface() {
    // orcamento.innerText = '+ R$' + controleGastos.orcamento;
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}`;
    despesas.innerText = `- R$ ${controleGastos.despesas}`;
    saldo.innerText = `R$ ${controleGastos.saldo}`;
}

const listaDespesas = document.querySelector('.containerDes_lista');

function adicionarDespesaInterface(nomeDespesa, valorDespesa) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h3.innerText = nomeDespesa;
    p.innerText = `R$ ${valorDespesa}`;

    img.src = './assets/img/trash.svg';
    img.alt = 'Icone lixeira';

    img.addEventListener('click', removerDespesa);

    li.dataset.valor = valorDespesa;
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);

    listaDespesas.appendChild(li);
}

function removerDespesa(evento) {
    const despesaClicada = evento.target.parentNode;
    const valorDespesaClicada = Number(despesaClicada.dataset.valor);

    controleGastos.despesas -= valorDespesaClicada;
    controleGastos.saldo += valorDespesaClicada;

    atualizarInterface();
    despesaClicada.remove();
}