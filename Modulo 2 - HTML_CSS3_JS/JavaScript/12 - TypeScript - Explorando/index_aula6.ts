// Utilizando o caracter "?" para variaveis opcionais

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecionar(usuario: IUsuario) {

    if (usuario.cargo){
        return "Redirecionando para (usuario.cargo)....."
    }

    return "Redirecionando para área do Usuário ....";
}

console.log(redirecionar)