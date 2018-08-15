ymaps.ready(function () {
    var myMap = new ymaps.Map("map__yandex", {
		center: [59.940136, 30.315882],
		zoom: 11,
    });

    //метки
    var myPlacemark1 = new ymaps.Placemark([59.917045, 30.486170]);
    var myPlacemark2 = new ymaps.Placemark([59.944615, 30.376994]);
    var myPlacemark3 = new ymaps.Placemark([59.973882, 30.311076]);
    var myPlacemark4 = new ymaps.Placemark([59.929454, 30.330988]);

    var myCollection = new ymaps.GeoObjectCollection({}, {
	    iconLayout: 'default#image',
	    iconImageHref: '../img/map-marker.svg',
	    iconImageSize: [46, 57],
	    iconImageOffset: [-20, -40]
	});

	myCollection.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4);
	myMap.geoObjects.add(myCollection);

    //отменяем действия по умолчанию
    myMap.behaviors.disable([
    	'drag', 
    	'rightMouseButtonMagnifier',
    	'scrollZoom'
	]);
});