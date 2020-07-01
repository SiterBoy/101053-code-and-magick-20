'use strict';

(function () {

  var wizards = [];

  var onError = function (error) {
    window.dialog.warningWindow('Не удалось подключиться к серверу! Код ошибки: ' + error);
  };

  var onLoad = function (data) {
    for (var i = 0; i < window.app.COL_WIZARDS; i++) {
      wizards[i] = window.app.getRandomElemObj(data);
    }
    window.setup.renderWizards(wizards);
  };

  var load = function () {
    window.backend.load(onLoad, onError);
  };

  window.data = {
    load: load,
    wizards: wizards
  };

})();
