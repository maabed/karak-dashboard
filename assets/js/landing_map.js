(function($) {
  'use strict';
  $(document).ready(function() {
    function initMap() {
      var uluru = {
        lat: -25.363,
        lng: 131.044
      };
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  });
})(window.jQuery);