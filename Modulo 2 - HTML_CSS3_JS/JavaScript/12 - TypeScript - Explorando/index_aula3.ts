
// Tratando a tag INPUT 

// Definindo para o TypeScript o que o elemento salvo na variavel é de fato, neste caso um elemento HTML de entrada de dados
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (Event) => {
    const i = Event.currentTarget as HTMLInputElement;
    console.log(i.value);
});