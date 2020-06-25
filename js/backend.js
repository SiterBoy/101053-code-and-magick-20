'use strict';

(function () {

  var LOADURL = 'https://javascript.pages.academy/code-and-magick/data';
  var SAVEURL = 'https://javascript.pages.academy/code-and-magick';

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = '10000';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Код ответа на ваш запрос: ' + xhr.status);
      }
    });

    xhr.open('GET', LOADURL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Код ответа на ваш запрос: ' + xhr.status);
      }
    });

    xhr.open('POST', SAVEURL);
    xhr.send();
  };

  window.backend = {
    load: load,
    save: save
  };

})();
