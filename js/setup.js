'use strict';

(function () {

  var generateWizardsData = function () {
    var wizards = [];
    for (var i = 0; i < window.app.COL_WIZARDS; i++) {
      var nameWizard = window.app.getRandomElem(window.app.NAMES) + ' ' + window.app.getRandomElem(window.app.SURNAMES);
      var colorOfCoat = window.app.getRandomElem(window.app.COAT_COLORS);
      var colorOfEye = window.app.getRandomElem(window.app.EYE_COLORS);
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
    for (var i = 0; i < window.app.COL_WIZARDS; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  renderWizards();

})();
