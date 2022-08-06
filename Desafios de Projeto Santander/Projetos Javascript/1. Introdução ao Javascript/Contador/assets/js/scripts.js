
/* Obtendo o Id do número atual do elemento span e armazena*/
var currentNumberWrapper = document.getElementById("currentNumber")

/* Variavel que armazena o valor incrementado ou decrementado */
var currentNumber = 0;

/* Função para determinar se a contagem está positiva ou negativa */
function cor(){

    /* NEGATIVA */
    if(currentNumber<0){
        currentNumberWrapper.style.color='red'
    }
    
    /* POSITIVA */
    else{
        currentNumberWrapper.style.color='gold'
    }
}

/* Função para incrementar valor */
function increment() {
    currentNumber = currentNumber + 1;
    cor();
    currentNumberWrapper.innerHTML = currentNumber;
}

/* Função para decrementar valor */
function decrement() {
    currentNumber = currentNumber - 1;
    cor();
    currentNumberWrapper.innerHTML = currentNumber;
}