document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  // Função para criar mensagem de erro embaixo do input
  function showError(input, message) {
    clearError(input);

    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '0.9rem';
    error.textContent = message;

    input.parentNode.appendChild(error);
  }

  // Limpar mensagem de erro anterior
  function clearError(input) {
    const parent = input.parentNode;
    const error = parent.querySelector('.error-message');
    if (error) error.remove();
  }

  // Limpar todas mensagens
  function clearAllErrors() {
    form.querySelectorAll('.error-message').forEach(el => el.remove());
  }

  // Exibir mensagem de sucesso
  function showSuccess() {
    alert('Formulário enviado com sucesso! Obrigado pela participação.');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // previne envio padrão

    clearAllErrors();

    let valid = true;

    // Campos para validar
    const name = form.elements['name'];
    const email = form.elements['email'];
    const age = form.elements['age'];
    const status = form.elements['status'];
    const selection = form.elements['selection'];
    const statusFav = form.elements['status-fav'];

    // Valida nome
    if (!name.value.trim()) {
      showError(name, 'Por favor, preencha seu nome.');
      valid = false;
    }

    // Valida email simples
    if (!email.value.trim()) {
      showError(email, 'Por favor, preencha seu e-mail.');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      showError(email, 'Por favor, insira um e-mail válido.');
      valid = false;
    }

    // Valida idade
    if (!age.value || age.value < 0) {
      showError(age, 'Por favor, insira uma idade válida.');
      valid = false;
    }

    // Valida status
    if (!status.value) {
      showError(status, 'Selecione sua situação atual.');
      valid = false;
    }

    // selection é NodeList se vários com mesmo name, precisa checar qual está checked
    const radios = form.querySelectorAll('input[name="selection"]');
    const radioChecked = Array.from(radios).some(r => r.checked);
    if (!radioChecked) {
      // Mostra erro no último radio (ou outro jeito)
      showError(radios[radios.length - 1].parentNode, 'Selecione uma opção.');
      valid = false;
    }

    // Valida status-fav
    if (!statusFav.value) {
      showError(statusFav, 'Selecione seu recurso favorito.');
      valid = false;
    }

    if (valid) {
      showSuccess();
      form.reset();
    }
  });
});
