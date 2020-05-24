'use strict';
(function () {
  var ESC_KEYCODE = 27;
  // Показ увеличенной фотографии
  var showBigPicture = function (smallPicture) {
    var bigPicture = document.querySelector('.big-picture');
    var bigPictureCancelBtn = bigPicture.querySelector('.big-picture__cancel');

    bigPicture.classList.remove('hidden');
    document.querySelector('.big-picture__img')
      .querySelector('img')
      .src = smallPicture.url;

    bigPicture.querySelector('.likes-count').textContent = smallPicture.likes;
    bigPicture.querySelector('.comments-count').textContent = smallPicture.comments.length;
    bigPicture.querySelector('.social__caption').textContent = smallPicture.description;

    // Функция отрисовки комментов
    var renderComments = function (comment) {
      var socialCommentElement = bigPicture.querySelector('.social__comment').cloneNode(true);

      socialCommentElement.querySelector('.social__picture').src = comment.avatar;
      socialCommentElement.querySelector('.social__text').textContent = comment.message;

      return socialCommentElement;
    };
    // Добавляем загруженные комменты в список на странице
    var socialCommentList = bigPicture.querySelector('.social__comments');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < smallPicture.comments.length; i++) {
      fragment.appendChild(renderComments(smallPicture.comments[i]));
    }

    socialCommentList.appendChild(fragment);

    // Обработчик закрытия большой картинки
    var closeBigPicture = function () {
      bigPicture.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    };
    var onPopupEscPress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closeBigPicture();
      }
    };

    document.addEventListener('keydown', onPopupEscPress);
    bigPictureCancelBtn.addEventListener('click', closeBigPicture);
  };

  document.querySelector('.social__comment-count').classList.add('visually-hidden');
  document.querySelector('.social__comments-loader').classList.add('visually-hidden');

  // Показ увеличенной фотографии при клике на маленькую
  var successHandler = function (pictures) {
    window.picturesList = window.picturesListELement.querySelectorAll('.picture');

    for (var i = 0; i < window.picturesList.length; i++) {
      (function (picture) {
        window.picturesList[i].addEventListener('click', function () {
          showBigPicture(picture);
        });
      })(pictures[i]);
    }
  };

  // Скопируем функцию successHandler для использования в модуле show-filters
  window.addShowBigPictureListener = successHandler;

  window.backend.load(successHandler, window.errorHandler);
})();
