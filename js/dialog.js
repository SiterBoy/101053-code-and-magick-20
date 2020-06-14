'use strict';

(function () {

  var dialogWindow = document.querySelector('.setup');
  document.querySelector('.setup-similar').classList.remove('hidden');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var onPopupEscPress = function (evt) {
    evt.preventDefault();
    if (evt.key === 'Escape' && evt.target.className !== 'setup-user-name') {
      dialogWindow.classList.add('hidden');
    }
  };

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

  var openPopup = function () {
    dialogWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    wizardFireball.addEventListener('click', onWizardFireballClick);
  };

  var closePopup = function () {
    dialogWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', onWizardCoatClick);
    wizardEyes.removeEventListener('click', onWizardEyesClick);
    wizardFireball.removeEventListener('click', onWizardFireballClick);
    dialogWindow.style.left = '';
    dialogWindow.style.top = '';
  };


  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      dialogWindow.classList.remove('hidden');
    }
  });

  var movingTargetPoint = dialogWindow.querySelector('.upload');

  movingTargetPoint.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var isMoved = false;

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (evtMove) {
      evtMove.preventDefault();

      isMoved = true;

      var deltaCoords = {
        x: evtMove.clientX - startCoords.x,
        y: evtMove.clientY - startCoords.y
      };

      startCoords = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };

      dialogWindow.style.left = (dialogWindow.offsetLeft + deltaCoords.x) + 'px';
      dialogWindow.style.top = (dialogWindow.offsetTop + deltaCoords.y) + 'px';

    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();
      movingTargetPoint.removeEventListener('mousemove', onMouseMove);
      movingTargetPoint.removeEventListener('mouseup', onMouseUp);

      if (isMoved) {
        var onClickPreventDefault = function (evtClick) {
          evtClick.preventDefault();
          movingTargetPoint.removeEventListener('click', onClickPreventDefault);
        };
        movingTargetPoint.addEventListener('click', onClickPreventDefault);
      }
    };

    movingTargetPoint.addEventListener('mousemove', onMouseMove);
    movingTargetPoint.addEventListener('mouseup', onMouseUp);
  });

})();
