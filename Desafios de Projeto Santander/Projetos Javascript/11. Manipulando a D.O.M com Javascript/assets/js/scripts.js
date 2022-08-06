
// Função que troca as classes para o 'dark-mode'
function changeMode(){
    changeClasses();
    changeText();
}

// Função que muda as classes de cada elemento da página
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

// Função que troca o estilo dos textos
function changeText(){

    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = "dark-mode";

// Obtendo os valores de cada elemento da página HTML pelo ID
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');

// como resultado da busca por body e footer retornam uma coleção de elementos, precisamos acessar pelo seu index que será 0, neste caso apenas um elemento retornado
const body = document.getElementsByTagName('body')[0]; 
const footer = document.getElementsByTagName('footer')[0]; 

button.addEventListener('click', changeMode);