'use strict';

(function () {

  var onError = function () {
    // console.log(error); Тут будет отрисовка окна с ошибкой
  };

  var onLoad = function (data) {
    var wizards = [];
    for (var i = 0; i < window.app.COL_WIZARDS; i++) {
      wizards[i] = window.app.getRandomElemObj(data);
    }
    window.setup.renderWizards(wizards);
  };

  window.backend.load(onLoad, onError);

})();
