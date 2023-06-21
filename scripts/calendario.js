// Função para atualizar o calendário com os dados atuais
function atualizarCalendario() {
    var dataAtual = new Date();
    var mes = dataAtual.toLocaleString('pt-br', { month: 'long' });
    var ano = dataAtual.getFullYear();
    var diasNoMes = new Date(ano, dataAtual.getMonth() + 1, 0).getDate();

    document.getElementById('mesAtual').textContent = mes + ' de ' + ano;

    var calendario = document.getElementById('calendario');
    calendario.innerHTML = '';

    var cabecalho = '<tr>' +
        '<th>Domingo</th>' +
        '<th>Segunda</th>' +
        '<th>Terça</th>' +
        '<th>Quarta</th>' +
        '<th>Quinta</th>' +
        '<th>Sexta</th>' +
        '<th>Sábado</th>' +
        '</tr>';

    calendario.innerHTML += cabecalho;

    var linha = '';
    var dia = 1;
    var primeiroDiaSemana = new Date(ano, dataAtual.getMonth(), 1).getDay();

    for (var i = 0; i < 6; i++) {
        linha += '<tr>';

        for (var j = 0; j < 7; j++) {
            if (dia > diasNoMes) {
                break;
            }

            if (i === 0 && j < primeiroDiaSemana) {
                linha += '<td></td>';
            } else {
                linha += '<td>' + dia + '</td>';
                dia++;
            }
        }

        linha += '</tr>';
    }

    calendario.innerHTML += linha;
}

// Atualizar o calendário ao carregar a página
window.addEventListener('load', atualizarCalendario);