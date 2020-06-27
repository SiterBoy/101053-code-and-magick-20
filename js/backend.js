'use strict';

(function () {

  var LOADURL = 'https://javascript.pages.academy/code-and-magick/data';
  var SAVEURL = 'https://javascript.pages.academy/code-and-magick';

  var xhrConnection = function (method, url, onLoad, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = '10000';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError(xhr.status);
      }
    });

    xhr.open(method, url);

    if (data) {
      xhr.send();
    } else {
      xhr.send(data);
    }

  };

  var load = function (onLoad, onError) {
    xhrConnection('GET', LOADURL, onLoad, onError);
  };

  var save = function (data, onLoad, onError) {
    xhrConnection('POST', SAVEURL, onLoad, onError, data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
