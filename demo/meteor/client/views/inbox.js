Template.inbox.onCreated(function inboxOnCreated() {

});

Template.inbox.onRendered(function inboxonRendered() {
  $('#summernote-inbox').summernote({
    height: 200,
  });
});

Template.inbox.helpers({
  messages() {
    const message = [{
      sender: 'David Nester',
      time: 'Today at 1:33pm',
      title: 'Email Title Gose Here Email Title Gose Here',
      body: 'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. Unfortunately, when I opened it, I saw that the cleats were used. The cleats had dirt all over it and there was a small tear in front of the part where the left toe would go. My order number is AF26168156.Sincerely, Signature',
      avatar: 'images/user_01_54.jpg',
      smallAvatar: 'images/user_01_36.jpg',
    }, {
      sender: 'Sherman Knox',
      time: 'Yesterday at 6:20pm',
      title: 'Email Title Gose Here Email Title Gose Here',
      body: 'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. Unfortunately, when I opened it, I saw that the cleats were used. The cleats had dirt all over it and there was a small tear in front of the part where the left toe would go. My order number is AF26168156.To resolve the problem, I would like you to credit my account for the amount charged for my cleats; I have already went out and bought a new pair of cleats at my local sporting goods store so sending another would result in me having two pairs of the same cleats.Sincerely,',
      avatar: 'images/user_06_54.jpg',
      smallAvatar: 'images/user_06_36.jpg',
    }, {
      sender: 'Garrett Calvin',
      time: 'Yesterday at 12:45pm',
      title: 'Email Title Gose Here Email Title Gose Here',
      body: 'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. Unfortunately, when I opened it, I saw that the cleats were used. The cleats had dirt all over it and there was a small tear in front of the part where the left toe would go. My order number is AF26168156.',
      avatar: 'images/user_04_54.jpg',
      smallAvatar: 'images/user_04_36.jpg',
    }, {
      sender: 'Elaina Annmarie',
      time: 'yesterday at 11:00am',
      title: 'Email Title Gose Here Email Title Gose Here',
      body: 'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. Unfortunately, when I opened it, I saw that the cleats were used. The cleats had dirt all over it and there was a small tear in front of the part where the left toe would go. My order number is AF26168156.To resolve the problem, I would like you to credit my account for the amount charged for my cleats; I have already went out and bought a new pair of cleats at my local sporting goods store so sending another would result in me having two pairs of the same cleats.Than you for taking the time to read this letter. I have been a satisfied customer of your company for many years and this is the first time I have encountered a problem. If you need to contact me, you can reach me at (555) 555-5555.',
      avatar: 'images/user_02_54.jpg',
      smallAvatar: 'images/user_02_36.jpg',
    }, {
      sender: 'Shirley Garnet',
      time: 'Jan 15 at 02:22pm',
      title: 'Email Title Gose Here Email Title Gose Here',
      body: 'I would like you to credit my account for the amount charged for my cleats; I have already went out and bought a new pair of cleats at my local sporting goods store so sending another would result in me having two pairs of the same cleats. Than you for taking the time to read this letter. I have been a satisfied customer of your company for many years and this is the first time I have encountered a problem. If you need to contact me, you can reach me at (555) 555-5555.',
      avatar: 'images/user_03_54.jpg',
      smallAvatar: 'images/user_03_36.jpg',
    }, {
      sender: 'Cheyenne Lauren',
      time: 'Dec 22 at 08:05pm',
      title: 'Email Title Gose Here Email Title Gose Here',
      body: 'I have recently ordered a new pair of soccer cleats (item #6542951) from your website on June 21. I received the order on June 26. If you need to contact me, you can reach me at (555) 555-5555.',
      avatar: 'images/user_02_54.jpg',
      smallAvatar: 'images/user_02_36.jpg',
    }];

    return message;
  },
});

Template.inbox.events({
  'click #refresh-page'(event, instance) {
    $('.overlay-container').addClass('overlay');
    $('.refresh-loader').css('display', 'block');
    setTimeout(() => {
      $('.overlay-container').removeClass('overlay');
      $('.refresh-loader').css('display', 'none');
    }, 500);
  },

  'click .contacts'(event, instance) {
    $('.split-right-side').removeClass('responsive-message');
    $('.split-left-side').removeClass('hide-contacts');
  },

  'click .show-message'(event, instance) {
    $('.split-right-side').addClass('responsive-message');
    $('.split-left-side').addClass('hide-contacts');
    $('.msg-overlay').addClass('overlay');
    $('.msg-loader').css('display', 'block');
    setTimeout(function () {
      $('.msg-overlay').removeClass('overlay');
      $('.msg-loader').css('display', 'none');
    }, 500);

    $('.no-selection').hide();
    const index = $(this).attr('data-message-id');
    const msgData = this;
    $('#sender').text(msgData.sender);
    $('#date').text(msgData.date);
    $('#title').text(msgData.title);
    $('#body').text(msgData.body);
    $('#avatar').attr('src', msgData.avatar);
  },
});
