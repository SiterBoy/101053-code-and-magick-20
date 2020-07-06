'use strict';

(function () {
  var COAT_POINTS = 2;
  var EYE_POINTS = 1;

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.setup.coatColorElem.value) {
      rank += COAT_POINTS;
    }

    if (wizard.colorEyes === window.setup.eyesColorElem.value) {
      rank += EYE_POINTS;
    }

    return rank;
  };

  var filter = function (data) {

    var wizards = data;

    var filtredWizards = wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });

    return filtredWizards;
  };

  window.similarWizards = {
    filter: filter
  };

})();
