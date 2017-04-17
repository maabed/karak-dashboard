Template.googleMaps.onRendered(function formsOnRendered() {
  GoogleMaps.load();
});

Template.googleMaps.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
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
