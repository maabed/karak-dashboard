Template.compose.onCreated(function formsOnCreated() {

});

Template.compose.onRendered(function formsOnRendered() {
  $('#summernote-compose').summernote({
    height: 200,
  });
  $('#tokenfield').tagsinput();
  $('#inputdefault').tagsinput();
});

Template.compose.helpers({

});

Template.compose.events({

});
