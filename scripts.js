$(document).ready(function(){
    Show();
});

function Show() {

    var aulas = JSON.parse('[{"id":"1", "nome":"5 seconds of summer - youngblood"},{"id":"2", "nome":"alessia cara - growing pains"},{"id":"3", "nome":"Camila Cabello - OMG ft. Quavo"},{"id":"4", "nome":"ghostt - stolen dance"},{"id":"5", "nome":"Selena Gomez - Same Old Love"},{"id":"6", "nome":"tw3lv - together"}]');

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


