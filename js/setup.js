'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
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

