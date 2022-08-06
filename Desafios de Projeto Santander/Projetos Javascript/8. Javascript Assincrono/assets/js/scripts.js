
// Definindo as variáveis 
const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById('change-cat');

// Função que recebe a url da imagem da API
const getCats = async () => {

    try {

        // Armazena a URL
        const data = await fetch(BASE_URL);

        // Converte a informação
        const json = await data.json();

        return json.webpurl;
    }

    catch (erro){

        // Caso ocorra erro imprimi ele
        console.log(erro.message);
    }

};

// Função assincrona que troca a imagem atual
const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

// Adicionando um evento ao botão
catBtn.addEventListener('click', loadImg);

// Ao abrir a página já carrega uma imagem
loadImg();

