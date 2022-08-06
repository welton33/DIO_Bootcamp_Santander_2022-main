
// Obtendo os status dos elementos do HTML
const btn = document.getElementById('myBtn');
const btn2 = document.getElementById('myBtn2');
const body = document.getElementsByTagName('body')[0];

// Criando funções que irá modificar o body da página

// BLACK
const listener = function () {
	btn.addEventListener('click', async () => {
		const { paintBlack } = await import('./modules/metodo.js');
		paintBlack(body);
	});
};

// BLUE
const listener2 = function () {
	btn2.addEventListener('click', async () => {
		const { paintBlue } = await import('./modules/metodo.js');
		paintBlue(body);
	});
};

// Inicializando as funções
listener();
listener2();