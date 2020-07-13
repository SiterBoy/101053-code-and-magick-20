'use strict';

(function () {

  var IMAGES_TYPES = ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/png'];

  var fileChooser = document.querySelector('.upload input[name="avatar"]');
  var avatarElem = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileType = file.type;

    var matches = IMAGES_TYPES.some(function (it) {
      return fileType === it;
    });

    if (matches) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', function () {
        avatarElem.src = reader.result;
      });
    }
  });

})();
