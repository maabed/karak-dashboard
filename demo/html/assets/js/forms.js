/*!
Forms JS
Karak dashboard: v1.0.0
Author: New Release
http://newrelease.io
Copyright 2017 New Release
*/
$(function($) {

    'use strict';
    $(document).ready(function() {

        $('#summernote').summernote({
            height: 200
        });

        /* Select2 */
        function formatState(state) {
            if (!state.id) {
                return state.text;
            }
            var $state = $(
                '<span><img src="assets/images/' + state.element.value.toLowerCase() + '.png" width="30px" class="img-flag" /> ' + state.text +
                '</span>'
            );
            return $state;
        }

        function formatRepo(repo) {
            if (repo.loading) return repo.text;
            var markup = '<div class="clearfix">' +
                '<div class="row">' +
                '<div class="col-sm-6">' +
                '<img src="' + repo.owner.avatar_url + '" style="max-width: 100%" />' +
                '</div>' +
                '<div class="col-sm-6">' +
                '<div class="clearfix">' +
                '<div class="row">' +
                '<div class="col-sm-12">' + repo.full_name + '</div><br>' +
                '</div>' +
                '</div>' +
                '</div>';
            if (repo.description) {
                markup += '<div>' + repo.description + '</div>';
            }

            markup += '</div></div><div class="row">' +
                '<div class="col-sm-6"><i class="fa fa-code-fork"></i> ' + repo.forks_count + '</div>' +
                '<div class="col-sm-6"><i class="fa fa-star"></i> ' + repo.stargazers_count + '</div></div>';
            return markup;
        }

        function formatRepoSelection(repo) {
            return repo.full_name || repo.text;
        }

        $('.select2-init-single').select2();

        $('.select2-init-multiple').select2();

        $(".select2-init-images").select2({
            templateResult: formatState
        });

        $(".select2-init-ajax").select2({
            ajax: {
                url: "https://api.github.com/search/repositories",
                dataType: 'json',
                delay: 250,
                data: function(params) {
                    return {
                        q: params.term,
                        page: params.page
                    };
                },
                processResults: function(data, page) {
                    return {
                        results: data.items
                    };
                },
                cache: true
            },
            escapeMarkup: function(markup) {
                return markup;
            },
            minimumInputLength: 1,
            templateResult: formatRepo,
            templateSelection: formatRepoSelection
        });

        /* yes-no checkboxes */
        $('#toggleCheckbox-yes-green').checkboxpicker();
        $('#toggleCheckbox-yes-green').change(function() {
            $('#toggleCheckbox-yes-green').prop('disabled', false);
        });

        $('#toggleCheckbox-yes-primary').checkboxpicker();
        $('#toggleCheckbox-yes-primary').change(function() {
            $('#toggleCheckbox-yes-primary').prop('disabled', false);
        });

        $('#toggleCheckbox-yes-yellow').checkboxpicker();
        $('#toggleCheckbox-yes-yellow').change(function() {
            $('#toggleCheckbox-yes-yellow').prop('disabled', false);
        });

        $('#toggleCheckbox-yes-big').checkboxpicker();
        $('#toggleCheckbox-yes-big').change(function() {
            $('#toggleCheckbox-yes-big').prop('disabled', false);
        });

        $('#toggleCheckbox-like').checkboxpicker();
        $('#toggleCheckbox-like').change(function() {
            $('#toggleCheckbox-like').prop('disabled', false);
        });

        /* Tags input */
        /* Colored tags */
        var cities = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: 'https://raw.githubusercontent.com/bootstrap-tagsinput/bootstrap-tagsinput/master/examples/assets/cities.json'
        });
        cities.initialize();

        /* Objects tags */
        var typeaheadTags = $('.objects-as-tags');
        typeaheadTags.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'cities',
                displayKey: 'text',
                source: cities.ttAdapter()
            }
        });

        typeaheadTags.tagsinput('add', {
            'value': 1,
            'text': 'Amsterdam',
            'continent': 'Europe'
        });
        typeaheadTags.tagsinput('add', {
            'value': 4,
            'text': 'Washington',
            'continent': 'America'
        });
        $('.bootstrap-tagsinput').find('input').addClass('normal-text');

        var typeaheadColored = $('.colored-tags');
        typeaheadColored.tagsinput({
            tagClass: function(item) {
                switch (item.continent) {
                    case 'Europe':
                        return 'label label-primary';
                    case 'America':
                        return 'label label-danger label-important';
                    case 'Australia':
                        return 'label label-success';
                    case 'Africa':
                        return 'label label-default';
                    case 'Asia':
                        return 'label label-warning';
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
        typeaheadColored.tagsinput('add', {
            'value': 1,
            'text': 'Amsterdam',
            'continent': 'Europe'
        });
        typeaheadColored.tagsinput('add', {
            'value': 4,
            'text': 'Washington',
            'continent': 'America'
        });
        typeaheadColored.tagsinput('add', {
            'value': 7,
            'text': 'Sydney',
            'continent': 'Australia'
        });
        typeaheadColored.tagsinput('add', {
            'value': 10,
            'text': 'Beijing',
            'continent': 'Asia'
        });
        typeaheadColored.tagsinput('add', {
            'value': 13,
            'text': 'Cairo',
            'continent': 'Africa'
        });

        /* date and time pickers */
        $('input[name="birthdate"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: false
        });

        $('input[name="daterange"]').daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            locale: {
                format: 'MM/DD/YYYY h:mm A'
            }
        });

        $(".daterangepicker").find(".calendar.left").css("width", "49%");
        $(".daterangepicker").find(".calendar.right").css("width", "49%");

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

        $('.clockpicker').clockpicker();
        /* Ranges */
        $('#no-params').ionRangeSlider();
        $('#double').ionRangeSlider({
            type: 'double',
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: '$'
        });
        $('#strings').ionRangeSlider({
            grid: true,
            from: 5,
            values: [
                'zero', 'one',
                'two', 'three',
                'four', 'five',
                'six', 'seven',
                'eight', 'nine',
                'ten'
            ]
        });

        $('.doc-popover').on('click', function(e) {
            e.preventDefault();
            return true;
        });

    });

});
