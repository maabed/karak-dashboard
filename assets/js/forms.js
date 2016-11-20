$(function() {
  $('#summernote').summernote({
    height: 200
  });

});
                     
$('#toggleCheckbox-1').checkboxpicker();
$('#toggleCheckbox-1').change(function() {       
  $('#toggleCheckbox-1').prop('disabled', false);
});

$('#toggleCheckbox-2').checkboxpicker();
$('#toggleCheckbox-2').change(function() {     
  $('#toggleCheckbox-2').prop('disabled', false);
});

$('#toggleCheckbox-3').checkboxpicker();
$('#toggleCheckbox-3').change(function() { 
  $('#toggleCheckbox-3').prop('disabled', false);
});

$('#toggleCheckbox-4').checkboxpicker();
$('#toggleCheckbox-4').change(function() {   
  $('#toggleCheckbox-4').prop('disabled', false);
});

$('#toggleCheckbox-5').checkboxpicker();
$('#toggleCheckbox-5').change(function() {   
  $('#toggleCheckbox-5').prop('disabled', false);
});

/* start of rayan's JS file */

var cities = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'assets/vendors/tag-input/cities.json'
});
cities.initialize();

var elt = $('.colored-tags');
elt.tagsinput({
  tagClass: function(item) {
    switch (item.continent) {
      case 'Europe'   : return 'label label-primary';
      case 'America'  : return 'label label-danger label-important';
      case 'Australia': return 'label label-success';
      case 'Africa'   : return 'label label-default';
      case 'Asia'     : return 'label label-warning';
    }
  },
  itemValue: 'value',
  itemText: 'text',
  typeaheadjs: {
    name: 'cities',
    displayKey: 'text',
    source: cities.ttAdapter()
  }
});
elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });


var cities = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'assets/vendors/tag-input/cities.json'
});
cities.initialize();

var elt = $('.objects-as-tags');
elt.tagsinput({
  itemValue: 'value',
  itemText: 'text',
  typeaheadjs: {
    name: 'cities',
    displayKey: 'text',
    source: cities.ttAdapter()
  }
});
elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });

                
