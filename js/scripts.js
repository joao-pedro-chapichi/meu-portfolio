window.onload = function() {
  const grupoInicial = 'card-4ano';

  // Mostrar o grupo inicial
  mostrarCard(grupoInicial);

  // Ajustar o botão ativo conforme o grupo inicial
  const botoes = document.querySelectorAll('.botao-card');
  botoes.forEach(botao => {
    if (botao.getAttribute('onclick').includes(grupoInicial)) {
      botao.classList.add('ativo');
    } else {
      botao.classList.remove('ativo');
    }
  });
};

function mostrarCard(idSelecionado) {
  const grupos = document.querySelectorAll('.cards-disciplinas');
  grupos.forEach(grupo => {
    grupo.style.display = grupo.id === idSelecionado ? 'flex' : 'none';
  });

  const botoes = document.querySelectorAll('.botao-card');
  botoes.forEach(botao => {
    botao.classList.remove('ativo');
  });

  // Aqui, sem event, vamos encontrar o botão correto pelo id
  const botaoSelecionado = Array.from(botoes).find(botao =>
    botao.getAttribute('onclick').includes(idSelecionado)
  );
  if (botaoSelecionado) {
    botaoSelecionado.classList.add('ativo');
  }
}