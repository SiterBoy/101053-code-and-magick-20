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

  var openPopup = function () {
    dialogWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', window.setup.onWizardCoatClick);
    wizardEyes.addEventListener('click', window.setup.onWizardEyesClick);
    wizardFireball.addEventListener('click', window.setup.onWizardFireballClick);
  };

  var closePopup = function () {
    dialogWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', window.setup.onWizardCoatClick);
    wizardEyes.removeEventListener('click', window.setup.onWizardEyesClick);
    wizardFireball.removeEventListener('click', window.setup.onWizardFireballClick);
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
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isMoved) {
        var onClickPreventDefault = function (evtClick) {
          evtClick.preventDefault();
          movingTargetPoint.removeEventListener('click', onClickPreventDefault);
        };
        movingTargetPoint.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
