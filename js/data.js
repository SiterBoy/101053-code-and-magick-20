'use strict';

(function () {

  var wizards = [];

  var onError = function (error) {
    window.dialog.warningWindow('Не удалось подключиться к серверу! Код ошибки: ' + error);
  };

  var onLoad = function (data) {
    window.data.wizards = data;
    window.setup.renderWizards();
  };

  var load = function () {
    window.backend.load(onLoad, onError);
  };

  window.data = {
    load: load,
    wizards: wizards
  };

})();
