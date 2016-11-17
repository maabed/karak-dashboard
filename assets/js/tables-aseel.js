$(document).ready( function () {
        
     $('#table_id').DataTable();
} );

$('#example').DataTable( {
    paging: false,
    scrollY: 400
});
// Disable search and ordering by default
$.extend( $.fn.dataTable.defaults, {
    searching: true 
} );
// For this specific table we are going to enable ordering
// (searching is still disabled)
$('#example').DataTable( {
    ordering: true
} );

var tables = $('.dataTable').DataTable();
tables.page( 'next' ).draw( false );

$("#my-tab-content" ).trigger( "enhance.tablesaw" );