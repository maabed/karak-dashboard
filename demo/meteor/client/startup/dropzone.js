// init Dropzone package options you can overwrite any Dropezone option here
Meteor.startup(() => {
  Meteor.Dropzone.options = {
    dictDefaultMessage: "<h2 style='font-size:25px !important;'>Drop files to upload<h2> <br><br><i class='fa fa-download drop-zone-icon'></i>",
  };
});
