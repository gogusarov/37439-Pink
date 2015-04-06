(function () {
  ymaps.ready(init);
 
  function init(){
    var myMap,
        myPlacemark;
 
    myMap = new ymaps.Map("yandex-map", {
        center: [59.9343, 30.3329],
        zoom: 15,
        controls: []
    });
  
    myPlacemark = new ymaps.Placemark([59.9343, 30.3329], { 
      hintContent: 'Мы здесь!'
    },{
      iconLayout: 'default#image',
      iconImageHref: 'https://raw.githubusercontent.com/gogusarov/Pink/master/img/balloon.png',
      iconImageSize: [36, 36],
      iconImageOffset: [0, -60]
    });

    myMap.geoObjects.add(myPlacemark);
 
    myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
}
})();
