// Array
let listaAtividades = [ ];

function listarTarefas() {
    const lisTarefas = document.getElementById("listaTarefas");

    lisTarefas.innerHTML = "";

    // Para cado atividade da lidta de atividade da "listaAtividades".
    for (const atividade of listaAtividades) {
        
        // Ira criar um novo elemento "li". Os elemento de "li" seram criados dinamicamente.
        const novoElemento = document.createElement("li");

        // Esse novo elemento sera adicionado a lista de tarefas
        lisTarefas.appendChild(novoElemento);
        
        // O texto que sera inserido dentro da "li". Esse texto sera o testo da atividade.
        const novoTexto = document.createTextNode(atividade);
        novoElemento.appendChild(novoTexto);                         // novoElemento receber novoTexto.

        novoElemento.appendChild(butaoExcluir(atividade));
    }
}


function adicionarTarefa() {
    const novaAtivide = document.getElementById('nova_tarefa').value;
    
    // O metodo "psh" ira adicionar um elemento ao array.
    listaAtividades.push(novaAtivide); 
    listarTarefas();                                     
}


function butaoExcluir(atividade) {

    let butao = document.createElement("button");
    const texto = document.createTextNode("Excluir");

    // Associando a função excluirAtividade() ao butão.
    butao.setAttribute("href", "#");                         // Adicionar atributos.
    const posicao = listaAtividades.indexOf(atividade);      // Capiturando a posiçao do elementeto.
    butao.setAttribute('onclick', `excluirAtividade(${posicao})`)

    butao.appendChild(texto);
    
    return butao;
}

function excluirAtividade(posicao) {
    listaAtividades.splice(posicao, 1);
    listarTarefas();
}

listarTarefas();
