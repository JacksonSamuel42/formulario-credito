const card = document.querySelector('#card'),
  btnOpenForm = document.querySelector('#btn-open-form'),
  formCard = document.querySelector('#form-card'),
  cardNumber = document.querySelector('#card .number'),
  cardName = document.querySelector('#card .name'),
  logoMarca = document.querySelector('#logo-marca'),
  firma = document.querySelector('#card .firma p'),
  monthExpiration = document.querySelector('#card .month'),
  yearExpiration = document.querySelector('#card .year'),
  ccv = document.querySelector('#card .ccv');

// virar o cartao para o usuario ver a frente
const showFront = () => {
  if (card.classList.contains('active')) {
    card.classList.remove('active');
  }
};
const backFront = () => {
  if (!card.classList.contains('active')) {
    card.classList.add('active');
  }
};

//  Rodar catao
card.addEventListener('click', () => {
  card.classList.toggle('active');
});

// abrir form
btnOpenForm.addEventListener('click', () => {
  btnOpenForm.classList.toggle('active');
  formCard.classList.toggle('active');
});

// select do mes
for (let i = 1; i <= 12; i++) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  formCard.selectMes.appendChild(option);
}

// select ano
const currentYear = new Date().getFullYear();

for (let i = currentYear; i <= currentYear + 8; i++) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  formCard.selectYear.appendChild(option);
}

// input numero do cartao
formCard.inputNumber.addEventListener('keyup', (e) => {
  let valueInput = e.target.value;

  formCard.inputNumber.value = valueInput
    // eliminar espacos em branco
    .replace(/\s/g, '')
    // eliminar as letras
    .replace(/\D/g, '')
    // dando espaco depois de 4 digitos
    .replace(/([0-9]{4})/g, '$1 ')
    // eliminar o ultimo espaco
    .trim();

  cardNumber.textContent = valueInput;

  if (valueInput == '') {
    cardNumber.textContent = '#### #### #### ####';
    logoMarca.innerHTML = '';
  }

  if (valueInput[0] == 4) {
    logoMarca.innerHTML = '';
    let imgLogo = document.createElement('img');
    imgLogo.src = 'img/logos/visa.png';
    logoMarca.appendChild(imgLogo);
  } else if (valueInput[0] == 5) {
    logoMarca.innerHTML = '';
    let imgLogo = document.createElement('img');
    imgLogo.src = 'img/logos/mastercard.png';
    logoMarca.appendChild(imgLogo);
  }

  // virar o cartao para o usuario ver as informacoes
  showFront();
});

// input nome do catao

formCard.inputName.addEventListener('keyup', (e) => {
  let valueInput = e.target.value;

  formCard.inputName.value = valueInput.replace(/[0-9]/g, '');

  cardName.textContent = valueInput;
  firma.textContent = valueInput;

  if (valueInput == '') {
    cardName.textContent = 'JOHN DOE';
  }

  // virar o cartao para o usuario ver as informacoes
  showFront();
});

// select do mes

formCard.selectMes.addEventListener('change', (e) => {
  monthExpiration.textContent = e.target.value;

  showFront();
});

// select ano

formCard.selectYear.addEventListener('change', (e) => {
  yearExpiration.textContent = e.target.value.slice(2);

  showFront();
});

// ccv

formCard.inputCCV.addEventListener('keyup', (e) => {
  let valueInput = e.target.value;

  formCard.inputCCV.value = valueInput.replace(/\D/g, '').replace(/\s/g, '');

  
  if (valueInput == '') {
    cardName.textContent = 'JOHN DOE';
  }
  ccv.textContent = valueInput;

  // virar o cartao para o usuario ver as informacoes
  backFront();
});
