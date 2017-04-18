Template.social.onCreated(function socialOnCreated() {
  const temp = 1;
});

Template.social.onRendered(function socialonRendered() {

});

Template.social.helpers({
  flags() {
    const flag = 1;
    return flags;
  },
});

Template.social.events({
  'click #gif-start'(event, instance) {
    if (this.flags === 1) {
      $('#gif-start').removeAttr('src');
      $('#gif-start').attr('src', '/images/mobile-wireframe.gif');
      this.flags = 0;
    } else {
      $('#gif-start').removeAttr('src');
      $('#gif-start').attr('src', '/images/mobile-wireframe.png');
      this.flags = 1;
    }
  },
});
