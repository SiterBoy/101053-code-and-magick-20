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

  window.data = {
    generateWizardsData: generateWizardsData
  };

})();
