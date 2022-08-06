
// ATIVIDADE 01

// Definindo a função que retorna apenas os admins da empresa
function getAdmins(map){

    let admins = []; // Array auxiliar

    // iterando com For...Of
    for ([key, value] of map){

        if(value === 'Admin'){
            admins.push(key); // populando array
        }
    }

    return admins;
}

// Definindo um Map
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));