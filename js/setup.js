'use strict';

(function () {

  var COL_WIZARDS = 4;
  var dialogWindow = document.querySelector('.setup');
  var wizardCoat = dialogWindow.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = dialogWindow.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = dialogWindow.querySelector('.setup-fireball-wrap');
  var coatColorElem = dialogWindow.querySelector('[name="coat-color"]');
  var eyesColorElem = dialogWindow.querySelector('[name="eyes-color"]');
  var fireballColorElem = dialogWindow.querySelector('[name="fireball-color"]');

  var createWizard = function (wizard) {
    var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var newWizard = templateWizard.cloneNode(true);
    newWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    newWizard.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    newWizard.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return newWizard;
  };

  var renderWizards = function () {
    var wizards = window.data.wizards;
    var similarWizards = window.similarWizards.filter(wizards);
    var similarListElement = document.querySelector('.setup-similar-list');
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < COL_WIZARDS; i++) {
      fragment.appendChild(createWizard(similarWizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var onWizardCoatClick = window.debounce(function () {
    var color = window.app.getRandomElem(window.app.COAT_COLORS);
    wizardCoat.style.fill = color;
    coatColorElem.value = color;
    renderWizards();
  });

  var onWizardEyesClick = window.debounce(function () {
    var color = window.app.getRandomElem(window.app.EYE_COLORS);
    wizardEyes.style.fill = color;
    eyesColorElem.value = color;
    renderWizards();
  });

  var onWizardFireballClick = function () {
    var color = window.app.getRandomElem(window.app.FIREBALL_COLORS);
    wizardFireball.style.background = color;
    fireballColorElem.value = color;
  };

  window.setup = {
    coatColorElem: coatColorElem,
    eyesColorElem: eyesColorElem,
    renderWizards: renderWizards,
    onWizardCoatClick: onWizardCoatClick,
    onWizardEyesClick: onWizardEyesClick,
    onWizardFireballClick: onWizardFireballClick
  };

})();
