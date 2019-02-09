$(document).ready(function(){
    Show();
});

function Show() {

    var aulas = JSON.parse('[{"id":"1.01", "nome":"Apresentação pessoal"},{"id":"1.02", "nome":"Em uso"},{"id":"1.03", "nome":"Vocabulário"},{"id":"2.01", "nome":"Cumprimentos"},{"id":"2.02", "nome":"Em uso"},{"id":"2.03", "nome":"Expressões"},{"id":"3.01", "nome":"Vocabulário- Números do 0 ao 19"},{"id":"3.02", "nome":"Números do 20 ao 100"},{"id":"3.03", "nome":"Dias da semana"},{"id":"3.04", "nome":"Expressões"},{"id":"4.01", "nome":"Países"},{"id":"4.02", "nome":"Nacionalidades"},{"id":"4.03", "nome":"Vocabulário"},{"id":"4.04", "nome":"Em uso"},{"id":"5.01", "nome":"Alfabeto"},{"id":"5.02", "nome":"Vocabulário"},{"id":"5.03", "nome":"Perguntas e expresssões"},{"id":"5.04", "nome":"Em uso"}]');

    $(".ListaConteudo").html('');
    $(".ListaConteudo").append('<ul class="list-group list-group-flush Lista">');

    for (var i = 0; i < aulas.length; i++) {
        let id = aulas[i].id;
        let nome = aulas[i].nome;

        let list = ['<li class="list-group-item text-uppercase"><a onclick="ctr(\'' + id + '\',\'' + nome + '\')">' + aulas[i].nome +'</a></li>']

        $(".Lista").append(list);

        id = '';
        nome = '';
    }
    $(".ListaConteudo").append('</ul>');
}

function ctr( id, nomeAula) {
    $(".Midia").html('');

    let list = [`<audio controls="controls" autoplay class="Player"><source src=Midia/${id}.mp3 type="audio/mpeg" /><blockquote class="blockquote"><p class="mb-0">Seu navegador não não oferece suporte para reproduzir este áudio.</p></blockquote></audio>`];

    $(".AulaTitulo").text(`${nomeAula}`);
    $(".Midia").append(list);
}


