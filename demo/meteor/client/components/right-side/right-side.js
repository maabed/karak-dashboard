Template.rightSide.helpers({
  colors() {
    const colors = [{
      id: 'default-color-btn',
      class1: 'default-menue-color',
      class2: '',
      class3: 'simple-border',
      color1: '#3b97d2',
      color2: '#ffffff',
    },
    {
      id: 'orang-color-btn',
      class1: 'orange-menue-color',
      class2: '',
      class3: 'simple-border',
      color1: '#f5d34b',
      color2: '#ffffff',
    },
    {
      id: 'dark2-color-btn',
      class1: 'dark-menue-color2',
      class2: 'dark-nav-color2',
      color1: '#262930',
      color2: '#2a2e35',
    },
    {
      id: 'dark1-color-btn',
      class1: 'dark-menue-color',
      class2: 'dark-nav-color',
      color1: '#2b3643',
      color2: '#364150',
    },
    {
      id: 'whit-color-btn',
      class1: 'wight-head',
      class2: 'wight-head',
      class3: 'simple-border',
      color1: '#ffffff',
      color2: '#ffffff',
    },
    {
      id: 'green-color-btn',
      class1: 'green-menue-color',
      class2: 'simple-border',
      color1: '#62d995',
      color2: '#ffffff',
    }];
    return colors;
  },
});

Template.rightSide.events({
  'click #default-color-btn'(event, instance) {
    $('#head').css('background-color', '#3B97D2');
    $('.body-header').css('border-left', '5px solid #3B97D2');
    $('.sidebar .selected a').css('border-left', '4px solid #3B97D2');
    $('.main-dashboard-search ').css('background-color', '#3B97D2');
    $('#company-name').css('background-color', '#2980B9');
    $('.sidebar-wrapper').css('background-color', '#fff');
    $('.sidebar li a').css('border-bottom', '1px solid #E4E5E7');
    $('.sidebar li a').css('border-right', '1px solid #E4E5E7');
    $('.sidebar li a').css('color', '#34495E');
    $('.nav-icon').css('color', '#C6C4DB');
    $('.user-box p').css('color', '#fff');
    $('.head-box i').css('color', '#fff');
    $('#company-name').css('color', '#fff');
    $('.sidebar .selected a .nav-icon ').css('color', '#3B97D2');
    $('.selected-theme').hide();
    $('#default-color-btn > .col-sm-12 > .selected-theme').show();
    $('.sidebar li').removeClass('dark-theme-hover');
    $('.sidebar .selected ul li a').css('border', '0px');
    $('.sidebar-submenue li a').css('border', '0px');
  },
  'click #orang-color-btn'(event, instance) {
    $('#head').css('background-color', '#f5d34b');
    $('.body-header').css('border-left', '5px solid #f5d34b');
    $('.sidebar .selected a').css('border-left', '4px solid #f5d34b');
    $('.main-dashboard-search').css('background-color', '#f5d34b');
    $('#company-name').css('background-color', '#f1c40f');
    $('.sidebar-wrapper').css('background-color', '#fff');
    $('.sidebar li a').css('border-bottom', '1px solid #E4E5E7');
    $('.sidebar li a').css('border-right', '1px solid #E4E5E7');
    $('.sidebar li a').css('color', '#34495E');
    $('.nav-icon').css('color', '#C6C4DB');
    $('.user-box p').css('color', '#fff');
    $('.head-box i').css('color', '#fff');
    $('#company-name').css('color', '#fff');
    $('.sidebar .selected a .nav-icon').css('color', '#f5d34b');
    $('.selected-theme').hide();
    $('#orang-color-btn > .col-sm-12 > .selected-theme').show();
    $('.sidebar li').removeClass('dark-theme-hover');
    $('.sidebar .selected ul li a').css('border', '0px');
    $('.sidebar-submenue li a').css('border', '0px');
  },
  'click #green-color-btn'(event, instance) {
    $('#head').css('background-color', '#62d995');
    $('.body-header').css('border-left', '5px solid #62d995');
    $('.sidebar .selected a').css('border-left', '4px solid #62d995');
    $('.main-dashboard-search').css('background-color', '#62d995');
    $('#company-name').css('background-color', '#2ecc71');
    $('.sidebar-wrapper').css('background-color', '#fff');
    $('.sidebar li a').css('border-bottom', '1px solid #E4E5E7');
    $('.sidebar li a').css('border-right', '1px solid #E4E5E7');
    $('.sidebar li a').css('color', '#34495E');
    $('.nav-icon').css('color', '#C6C4DB');
    $('.user-box p').css('color', '#fff');
    $('.head-box i').css('color', '#fff');
    $('#company-name').css('color', '#fff');
    $('.sidebar .selected a .nav-icon').css('color', '#62d995');
    $('.selected-theme').hide();
    $('#green-color-btn > .col-sm-12 > .selected-theme').show();
    $('.sidebar li').removeClass('dark-theme-hover');
    $('.sidebar .selected ul li a').css('border', '0px');
    $('.sidebar-submenue li a').css('border', '0px');
  },
  'click #whit-color-btn'(event, instance) {
    $('#head').css('background-color', '#fff');
    $('#head').css('box-shadow', ' 2px 2px 2px #ededed');
    $('.main-dashboard-search').css('background-color', '#828282');
    $('.body-header').css('border-left', '5px solid #828282');
    $('.sidebar .selected a').css('border-left', '4px solid #828282');
    $('#company-name').css('background-color', '#828282');
    $('#company-name').css('color', '#fff');
    $('.badge-notify').css('background-color', '#e0e0e0');
    $('.user-box p').css('color', '#686868');
    $('.head-box i').css('color', '#686868');
    $('.sidebar-wrapper').css('background-color', '#fff');
    $('.sidebar li a').css('border-bottom', '1px solid #E4E5E7');
    $('.sidebar li a').css('border-right', '1px solid #E4E5E7');
    $('.sidebar li a').css('color', '#34495E');
    $('.sidebar .selected a .nav-icon').css('color', '#828282');
    $('.selected-theme').hide();
    $('#whit-color-btn > .col-sm-12 > .selected-theme').show();
    $('.sidebar li').removeClass('dark-theme-hover');
    $('.sidebar .selected ul li a').css('border', '0px');
    $('.sidebar-submenue li a').css('border', '0px');
  },
  'click #dark1-color-btn'(event, instance) {
    $('#head').css('background-color', '#2b3643');
    $('.body-header').css('border-left', '5px solid #2b3643');
    $('.sidebar .selected a').css('border-left', '4px solid #F1F3F6');
    $('.main-dashboard-search').css('background-color', '#2b3643');
    $('#company-name').css('background-color', '#303b49');
    $('.sidebar-wrapper').css('background-color', '#364150');
    $('.sidebar li a').css('border-bottom', '1px solid #3d4957');
    $('.sidebar li a').css('border-right', '1px solid #3d4957');
    $('.sidebar li a').css('color', '#b0b4c4');
    $('.sidebar li').addClass('dark-theme-hover');
    $('.nav-icon').css('color', '#667287');
    $('.user-box p').css('color', '#fff');
    $('.head-box i').css('color', '#fff');
    $('#company-name').css('color', '#fff');
    $('.sidebar .selected a .nav-icon').css('color', '#2b3643');
    $('.selected-theme').hide();
    $('#dark1-color-btn > .col-sm-12 > .selected-theme').show();
    $('.sidebar .selected ul li a').css('border', '0px');
    $('.sidebar-submenue li a').css('border', '0px');
  },
  'click #dark2-color-btn'(event, instance) {
    $('.selected-theme').hide();
    $('#dark2-color-btn > .col-sm-12 > .selected-theme').show();
    $('#head').css('background-color', '#262930');
    $('.body-header').css('border-left', '5px solid #262930');
    $('.sidebar .selected a').css('border-left', '4px solid #F1F3F6');
    $('.main-dashboard-search').css('background-color', '#262930');
    $('#company-name').css('background-color', '#282b32');
    $('.sidebar-wrapper').css('background-color', '#2a2e35');
    $('.sidebar li a').css('border-bottom', '1px solid #262930');
    $('.sidebar li a').css('border-right', '1px solid #262930');
    $('.sidebar li a').css('color', '#5b616d');
    $('.sidebar li').addClass('dark-theme-hover');
    $('.nav-icon').css('color', '#767d8a');
    $('.user-box p').css('color', '#fff');
    $('.head-box i').css('color', '#fff');
    $('#company-name').css('color', '#fff');
    $('.sidebar .selected a .nav-icon').css('color', '#262930');
    $('.sidebar .selected ul li a').css('border', '0px');
    $('.sidebar-submenue li a').css('border', '0px');
  },
});
