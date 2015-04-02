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
      hintContent: 'Мы здесь!', 
      balloonContent: 'Pink luxury office' 
    });

    myMap.geoObjects.add(myPlacemark);
 
    myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
}