'use strict';

(function () {

  var createWizard = function (wizard) {
    var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var newWizard = templateWizard.cloneNode(true);
    newWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    newWizard.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    newWizard.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return newWizard;
  };

  var renderWizards = function (data) {
    var wizards = data;
    var similarListElement = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.app.COL_WIZARDS; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var dialogWindow = document.querySelector('.setup');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var onWizardCoatClick = function () {
    var color = window.app.getRandomElem(window.app.COAT_COLORS);
    wizardCoat.style.fill = color;
    dialogWindow.querySelector('[name="coat-color"]').value = color;
  };

  var onWizardEyesClick = function () {
    var color = window.app.getRandomElem(window.app.EYE_COLORS);
    wizardEyes.style.fill = color;
    dialogWindow.querySelector('[name="eyes-color"]').value = color;
  };

  var onWizardFireballClick = function () {
    var color = window.app.getRandomElem(window.app.FIREBALL_COLORS);
    wizardFireball.style.background = color;
    dialogWindow.querySelector('[name="fireball-color"]').value = color;
  };

  // renderWizards();

  window.setup = {
    renderWizards: renderWizards,
    onWizardCoatClick: onWizardCoatClick,
    onWizardEyesClick: onWizardEyesClick,
    onWizardFireballClick: onWizardFireballClick
  };

})();
