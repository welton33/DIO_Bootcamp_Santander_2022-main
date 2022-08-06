
// Como importar bibliotecas com typescript

// O coamndo tsc --init -> tsconfig.json

// O comando npm i --save-dev @types/jquery adiciona os tipos para Jquery

// Importando e baixando arquivos do jquery, no caso o parcel fez automaticamente

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função');
    }
});

$('body').novaFuncao();