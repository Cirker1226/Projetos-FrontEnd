(function () {

  // Seus eventos do mês — chave = dia, valor = lista de { text, time }
  var eventos = {
    11: [{ text: 'Prova de Matemática', time: '09:00' }],
    15: [{ text: 'Redação — entrega',   time: '23:59' }],
    20: [{ text: 'Simulado Geral',       time: '14:00' }],
    25: [{ text: 'Revisão de Ciências', time: '10:00' }]
  };

  var hoje      = new Date();
  var mesAtual  = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  var meses     = [
    'Janeiro', 'Fevereiro', 'Março',    'Abril',
    'Maio',    'Junho',     'Julho',    'Agosto',
    'Setembro','Outubro',   'Novembro', 'Dezembro'
  ];

  function renderizarCalendario() {
    var ano = mesAtual.getFullYear();
    var mes = mesAtual.getMonth();

    // Atualiza o título do calendário
    document.getElementById('ctitle').textContent = meses[mes] + ' ' + ano;

    var primeiroDiaDaSemana = new Date(ano, mes, 1).getDay();
    var diasNoMes           = new Date(ano, mes + 1, 0).getDate();
    var diasNoMesAnterior   = new Date(ano, mes, 0).getDate();

    var grade = document.getElementById('ccells');
    grade.innerHTML = '';

    // Dias do mês anterior (cinza, só para preencher a grade)
    for (var i = 0; i < primeiroDiaDaSemana; i++) {
      var celula = document.createElement('div');
      celula.className = 'cal-cell other-month';
      celula.textContent = diasNoMesAnterior - primeiroDiaDaSemana + 1 + i;
      grade.appendChild(celula);
    }

    // Dias do mês atual
    for (var dia = 1; dia <= diasNoMes; dia++) {
      var celula = document.createElement('div');
      celula.className = 'cal-cell';

      var eHoje = dia === hoje.getDate()
               && mes === hoje.getMonth()
               && ano === hoje.getFullYear();

      if (eHoje)          celula.classList.add('today');
      if (eventos[dia])   celula.classList.add('has-event');

      celula.textContent = dia;
      grade.appendChild(celula);
    }

    // Dias do próximo mês (cinza, só para fechar a última linha)
    var totalCelulas   = primeiroDiaDaSemana + diasNoMes;
    var celulasFaltando = totalCelulas % 7 === 0 ? 0 : 7 - (totalCelulas % 7);

    for (var proximo = 1; proximo <= celulasFaltando; proximo++) {
      var celula = document.createElement('div');
      celula.className = 'cal-cell other-month';
      celula.textContent = proximo;
      grade.appendChild(celula);
    }

    // Lista de próximos eventos abaixo do calendário
    var listaEventos = document.getElementById('cevents');
    listaEventos.innerHTML = '';

    var dias = Object.keys(eventos).map(Number).sort(function (a, b) { return a - b; });

    if (dias.length === 0) {
      listaEventos.innerHTML = '<p style="font-size:12px;color:#aaa">Nenhum evento este mês</p>';
      return;
    }

    dias.forEach(function (dia) {
      eventos[dia].forEach(function (evento) {
        var linha = document.createElement('div');
        linha.className = 'cal-event';
        linha.innerHTML =
          '<div class="cal-dot"></div>' +
          '<span class="cal-event-text">Dia ' + dia + ' — ' + evento.text + '</span>' +
          '<span class="cal-event-time">' + evento.time + '</span>';
        listaEventos.appendChild(linha);
      });
    });
  }

  // Navegar entre os meses
  document.getElementById('cprev').addEventListener('click', function () {
    mesAtual.setMonth(mesAtual.getMonth() - 1);
    renderizarCalendario();
  });

  document.getElementById('cnext').addEventListener('click', function () {
    mesAtual.setMonth(mesAtual.getMonth() + 1);
    renderizarCalendario();
  });

  // Renderiza ao carregar a página
  renderizarCalendario();

})();