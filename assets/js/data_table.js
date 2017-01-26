/// <reference path="data_table.js" />
/// <reference path="data_table.js" />
$(document).ready(function () {
    $('#table_id').DataTable();
});

$(document).ready(function () {
    var buttonCommon = {
        exportOptions: {
            format: {
                body: function (data, column, row, node) {
                    // Strip $ from salary column to make it numeric
                    return column === 5 ?
                        data.replace(/[$,]/g, '') :
                        data;
                }
            }
        }
    };
    $('#ajax_table').DataTable({
        ajax: '../ajax/object.txt',
        columns: [
            { data: 'name' },
            { data: 'position' },
            { data: 'office' },
            { data: 'extn' },
            { data: 'start_date' },
            { data: 'salary' }
        ],
        dom: 'Bfrtip',
        buttons: [
            $.extend(true, {}, buttonCommon, {
                extend: 'copyHtml5'
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'excelHtml5'
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'pdfHtml5'
            })
        ]
    });
});



$(document).ready(function () {
    // Setup - add a text input to each footer cell
    $('#column_searching tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });

    // DataTable
    var table = $('#column_searching').DataTable();

    // Apply the search
    table.columns().every(function () {
        var that = this;

        $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
});


/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
            '<td>Full name:</td>' +
            '<td>' + d.name + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td>Extension number:</td>' +
            '<td>' + d.extn + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td>Extra info:</td>' +
            '<td>And any further details here (images etc)...</td>' +
        '</tr>' +
    '</table>';
}

$(document).ready(function () {
    var table = $('#detailed_table').DataTable({
        "ajax": "assets/ajax/object2.txt",
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" }
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#detailed_table tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});
$(document).ready(function(){
    $(".buttons-copy").attr("id","copy-button");
    $("#copy-button").removeAttr("class");
    $("#copy-button").addClass("btn btn-default outline-default");
    $("#copy-button").append("<i id='Copy-table-icon' class='fa fa-files-o' aria-hidden='true'></i>");

    
    $(".buttons-excel").attr("id","excel-button");
    $("#excel-button").removeAttr("class");
    $("#excel-button").addClass("btn btn-default outline-default");
    $("#excel-button").append("<span id='Excel-table-icon' class='fa fa-file-excel-o' aria-hidden='true'></span>");

    
    $(".buttons-pdf").attr("id","pdf-button");
    $("#pdf-button").removeAttr("class");
    $("#pdf-button").addClass("btn btn-default outline-default");
    $("#pdf-button").append("<i id='Pdf-table-icon' class='fa fa-file-pdf-o' aria-hidden='true'></i>");

});