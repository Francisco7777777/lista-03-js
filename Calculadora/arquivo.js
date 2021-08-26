function inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function linparTudo() {
    document.getElementById('resultado').innerHTML = "";
}

function apagarUm() {
    let res = document.getElementById('resultado').innerHTML;
    
    // O  método substring() e a propriedade "length" é utilizado para extrair os últimos caracteres da específica. 
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}

function calcular() {

    let valor = document.getElementById('resultado').innerHTML;
    
    if(valor) {
        //A função eval() computa um código JavaScript representado como uma string.
        document.getElementById('resultado').innerHTML = eval(valor);
    } else {
        document.getElementById('resultado').innerHTML = 'Null';
    }
}