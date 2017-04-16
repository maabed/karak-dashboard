
Template.panels.onCreated(function panelsOnCreated() {

});


Template.panels.onRendered(function panelsonRendered() {
  dragula([document.querySelector('#right-rm-spill'), document.querySelector('#left-rm-spill')]);
});

Template.panels.helpers(function panelshelpers() {

});

Template.panels.events({
  'click #panel-fullscreen' (event, instance) {
    event.preventDefault();
    const $this = $(event.target);
    if ($this.children('i').hasClass('glyphicon-resize-full')) {
      $this.children('i').removeClass('glyphicon-resize-full');
      $this.children('i').addClass('glyphicon-resize-small');
    } else if ($this.children('i').hasClass('glyphicon-resize-small')) {
      $this.children('i').removeClass('glyphicon-resize-small');
      $this.children('i').addClass('glyphicon-resize-full');
    }
    $(event.target).closest('.panel').toggleClass('panel-fullscreen');
  },
});