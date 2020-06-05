'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COL_WIZARDS = 4;

var getRandomNumber = function (array) {
  var min = 0;
  var max = array.length;
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomElem = function (array) {
  return array[getRandomNumber(array)];
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

var renderWizard = function (index) {
  var wizards = generateWizardsData();

  var similarListElement = document.querySelector('.setup-similar-list');
  var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var wizard = templateWizard.cloneNode(true);

  wizard.querySelector('.setup-similar-label').textContent = wizards[index].name;
  wizard.querySelector('.wizard-coat').style.fill = wizards[index].coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = wizards[index].eyesColor;

  similarListElement.appendChild(wizard);
};

for (var i = 0; i < COL_WIZARDS; i++) {
  renderWizard(i);
}

var dialogWindow = document.querySelector('.setup');
dialogWindow.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

