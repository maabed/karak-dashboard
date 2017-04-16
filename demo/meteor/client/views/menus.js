Template.menus.onCreated(function menusOnCreated() {

});

Template.menus.onRendered(function menusonRendered() {
  function htmlbodyHeightUpdate() {
    const height3 = $(window).height();
    const height1 = $('.nav').height() + 50;
    const height2 = $('.main').height();
    if (height2 > height3) {
      $('html').height(Math.max(height1, height3, height2) + 10);
      $('body').height(Math.max(height1, height3, height2) + 10);
    } else {
      $('html').height(Math.max(height1, height3, height2));
      $('body').height(Math.max(height1, height3, height2));
    }
  }

  htmlbodyHeightUpdate();
  $(window).resize(function () {
    htmlbodyHeightUpdate();
  });
  $(window).scroll(function () {
    const height2 = $('.main').height();
    htmlbodyHeightUpdate();
  });

  $('.dropdown2').hover(
    function () {
      $('.dropdown-menu', this).stop(true, true).slideDown('fast');
      $(this).toggleClass('open');
    },
    function () {
      $('.dropdown-menu', this).stop(true, true).slideUp('fast');
      $(this).toggleClass('open');
    });

  $('.dropdown2').hover(
    function () {
      $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown('400');
      $(this).toggleClass('open');
    },
    function () {
      $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp('400');
      $(this).toggleClass('open');
    });
});

Template.menus.helpers(function menushelpers() {
  $('.carousel').carousel({
    interval: 500,
  });
});


// FIXED


Template.menus.events({
  'slid.bs.carousel #myCarousel'(event, instance) {
    $('.myCarousel-target.active').removeClass('active');
    let to_slide = $('.carousel-item.active').attr('data-slide-no');
    $('.nav-indicators li[data-slide-to=' + to_slide + ']').addClass('active');
  },
});
