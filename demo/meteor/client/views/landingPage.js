Template.landingPage.onCreated(function landingPageOnCreated() {

});

Template.landingPage.onRendered(function landingPageonRendered() {
  $('.custom1').owlCarousel({
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    nav: true,
    loop: true,
  });
  GoogleMaps.load();
  $('.location-section').find('.map-canvas').css({ 'height': '400px', 'width': '100%' });
});

Template.landingPage.helpers({
  initMap: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: {
          lat: -34.397,
          lng: 150.644,
        },
        scrollwheel: false,
        zoom: 8,
      };
    }
  },
});

Template.landingPage.events({

});
