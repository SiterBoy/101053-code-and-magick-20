'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COL_WIZARDS = 4;

var getRandomElem = function (array) {
  var min = 0;
  var max = array.length;
  var randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return array[randomNumber];
};

var generateWizardsData = function () {
  var wizards = [];
  for (var i = 0; i < COL_WIZARDS; i++) {
    var nameWizard = getRandomElem(NAMES) + ' ' + getRandomElem(SURNAMES);
    var colorOfCoat = getRandomElem(COAT_COLORS);
    var colorOfEye = getRandomElem(EYE_COLORS);
    wizards[i] = {
      name: nameWizard,
      coatColor: colorOfCoat,
      eyesColor: colorOfEye
    };
  }
  return wizards;
};

var createWizard = function (wizard) {
  var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var newWizard = templateWizard.cloneNode(true);
  newWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  newWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  newWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return newWizard;
};

var renderWizards = function () {
  var wizards = generateWizardsData();
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < COL_WIZARDS; i++) {
    fragment.appendChild(createWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards();

var dialogWindow = document.querySelector('.setup');
dialogWindow.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

//  popup

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  evt.preventDefault();
  if (evt.key === 'Escape' && evt.target.className !== 'setup-user-name') {
    setup.classList.add('hidden');
  }
};

var changeWizardCoatColor = function () {
  var color = getRandomElem(COAT_COLORS);
  wizardCoat.style.fill = color;
  setup.querySelector('[name="coat-color"]').value = color;
};

var changeWizardEyesColor = function () {
  var color = getRandomElem(EYE_COLORS);
  wizardEyes.style.fill = color;
  setup.querySelector('[name="eyes-color"]').value = color;
};

var changeWizardFireballColor = function () {
  var color = getRandomElem(FIREBALL_COLORS);
  wizardFireball.style.background = color;
  setup.querySelector('[name="fireball-color"]').value = color;
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  wizardCoat.addEventListener('click', changeWizardCoatColor);
  wizardEyes.addEventListener('click', changeWizardEyesColor);
  wizardFireball.addEventListener('click', changeWizardFireballColor);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  wizardCoat.removeEventListener('click', changeWizardCoatColor);
  wizardEyes.removeEventListener('click', changeWizardEyesColor);
  wizardFireball.removeEventListener('click', changeWizardFireballColor);
};


setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setup.classList.remove('hidden');
  }
});
