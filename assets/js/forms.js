$(function() {
  $('#summernote').summernote({
    height: 200
  });

});

$(function() {
  $('#summernote-compose').summernote({
    height: 200,
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

        
$(function() {
    $('input[name="birthdate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: false
    });
});
        
$(function() {
    $('input[name="daterange"]').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        }
    });
    $(".daterangepicker").find(".calendar.left").css("width","50%");
    $(".daterangepicker").find(".calendar.right").css("width","49%");
});


$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);
    $(".cancelBtn.btn.btn-sm.btn-default").remove();
});   

$('.clockpicker').clockpicker();
/* ranges */

$("#no-params").ionRangeSlider();

$("#double").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"
});

$("#strings").ionRangeSlider({
    grid: true,
    from: 5,
    values: [
        "zero", "one",
        "two", "three",
        "four", "five",
        "six", "seven",
        "eight", "nine",
        "ten"
    ]
});
$(document).ready(function(){
    $(".bootstrap-tagsinput").find("input").addClass("normal-text");
    $(".dropdown-toggle").find(".caret").addClass("caret-static");
    $(".caret-static").removeClass("caret");
    $(".select-display").click(function(){
        $(".select-display").find(".selected").removeClass("active");
    });
});


/* Select2 */

$(document).ready(function() {
    $(".js-example-basic-single").select2();
    $(".js-example-basic-multiple").select2();
});

function formatState (state) {
    if (!state.id) { return state.text; }
    var $state = $(
        '<span><img src="assets/images/' + state.element.value.toLowerCase() + '.png" width="30px" class="img-flag" /> ' + state.text + 
        '</span>'
    );
    return $state;
};
$(".js-example-templating").select2({
    templateResult: formatState
});       
        
function formatRepo (repo) {
    if (repo.loading) return repo.text;
    var markup = '<div class="clearfix">' +
        '<div class="row">'+
        '<div class="col-sm-6">' +
        '<img src="' + repo.owner.avatar_url + '" style="max-width: 100%" />' +
        '</div>' +
        '<div class="col-sm-6">' +
        '<div class="clearfix">' +
        '<div class="row">'+
        '<div class="col-sm-12">' + repo.full_name + '</div><br>' +
        '</div>'+
        '</div>'+
        '</div>';
    if (repo.description) {
        markup += '<div>' + repo.description + '</div>';
    }

    markup += '</div></div><div class="row">'+
        '<div class="col-sm-6"><i class="fa fa-code-fork"></i> ' + repo.forks_count + '</div>' +
        '<div class="col-sm-6"><i class="fa fa-star"></i> ' + repo.stargazers_count + '</div></div>';
    return markup;
}
function formatRepoSelection (repo) {
    return repo.full_name || repo.text;
}

$(document).ready(function(){
    $(".js-data-example-ajax").select2({
        ajax: {
            url: "https://api.github.com/search/repositories",
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    q: params.term, // search term
                    page: params.page
                };
            },
            processResults: function (data, page) {
                // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data
                return {
                    results: data.items  
                };
            },
            cache: true
        },
        escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 1,
        templateResult: formatRepo, // omitted for brevity, see the source of this page
        templateSelection: formatRepoSelection // omitted for brevity, see the source of this page  
        
    });
}); 