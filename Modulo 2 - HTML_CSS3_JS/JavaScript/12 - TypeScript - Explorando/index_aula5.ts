
// Desenvolvendo condicionais a partir de parâmetros

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecionar(usuario: IUsuario | IAdmin) {

    if ('cargo' in usuario){
        return "Redirecionando para a área de Administração....."
    }

    return "Redirecionando para área do Usuário ....";
}

console.log(redirecionar)