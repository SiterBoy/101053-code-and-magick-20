'use strict';

(function () {

  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COL_WIZARDS = 4;

  var findMaxElement = function (array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  };

  var getRandomElem = function (array) {
    var min = 0;
    var max = array.length;
    var randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return array[randomNumber];
  };

  window.app = {
    NAMES: NAMES,
    SURNAMES: SURNAMES,
    COAT_COLORS: COAT_COLORS,
    EYE_COLORS: EYE_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    COL_WIZARDS: COL_WIZARDS,
    findMaxElement: findMaxElement,
    getRandomElem: getRandomElem
  };

})();
