ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.938674,30.322858],zoom:18},{searchControlProvider:"yandex#search"}),a=(ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),new ymaps.Placemark(e.getCenter(),{hintContent:"Cat Energy",balloonContent:""},{iconLayout:"default#image",iconImageHref:"../img/map-pin-google.png",iconImageSize:[100,85],iconImageOffset:[-5,-38]}));e.geoObjects.add(a)});