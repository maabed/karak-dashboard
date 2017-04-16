Template.notifications.onCreated(function notificationsOnCreated() {

});

Template.notifications.onRendered(function notificationsonRendered() {
  $('[data-toggle="tooltip"]').tooltip();
  this.$('.select2-init-single').select2();
});

Template.notifications.helpers(function notificationshelpers() {

});

Template.notifications.events({

  'click #left'(event, instance) {
    event.stopPropagation();
    toastr.remove();
    toastr.options = {
      positionClass: 'toast-top-left',
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
    toastr['error']('Top Left!');
  },

  'click #right'(event, instance) {
    event.stopPropagation();
    toastr.remove();
    toastr.options = {
      positionClass: 'toast-top-right',
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
    toastr['success']('Top Right!');
  },

  'click #bottom-right'(event, instance) {
    event.stopPropagation();
    toastr.remove();
    toastr.options = {
      positionClass: 'toast-bottom-right',
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
    toastr['info']('Bottom Right!');
  },

  'click #bottom-left'(event, instance) {
    event.stopPropagation();
    toastr.remove();
    toastr.options = {
      positionClass: 'toast-bottom-left',
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
    toastr['warning']('Bottom Left!');
  },

  'click #full'(event, instance) {
    event.stopPropagation();
    toastr.remove();
    toastr.options = {
      positionClass: 'toast-top-full-width',
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
    toastr['success']('top full width!');
  },

  'click #bottom-full'(event, instance) {
    event.stopPropagation();
    toastr.remove();
    toastr.options = {
      positionClass: 'toast-bottom-full-width',
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
      toastr['info']('bottom full width!');
  },

  'click #center'(event, instance) {
    event.stopPropagation();
    toastr.remove();
    toastr.options = {
      positionClass: 'toast-top-center',
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
      toastr['warning']('Top Center!');
  },

  'click #bottom-center'(event, instance) {
    event.stopPropagation();
    toastr.remove();
    toastr.options = {
      positionClass: 'toast-bottom-center',
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
      toastr['error']('Bottom Center!');
  },

  /* Sweet alerts */
  'click #sweet-generate'(event, instance) {
    if ($('#sweet-select').val() === 'basic') {
      swal('Here is a message!');
    } else if ($('#sweet-select').val() === 'success') {
      swal('Good job!', 'You clicked the button!', 'success');
    } else if ($('#sweet-select').val() === 'warning') {
      swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false,
      },
        function () {
          swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
        });
    } else if ($('#sweet-select').val() === 'execute') {
      swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel plx!',
        closeOnConfirm: false,
        closeOnCancel: false,
      },
        function (isConfirm) {
          if (isConfirm) {
            swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
          } else {
            swal('Cancelled', 'Your imaginary file is safe :)', 'error');
          }
        }); 
    }

    /* second row */
    else if ($('#sweet-select').val() === 'custom') {
      swal({
        title: 'Sweet!',
        text: 'Here is a custom image.',
        imageUrl: '/images/notifications/thumbs-up.jpg',
      });
    } else if ($('#sweet-select').val() === 'HTML') {
      swal({
        title: 'HTML <small>Title</small>!',
        text: "A custom <span style='color:#F8BB86'>html<span> message.",
        html: true,
      });
    } else if ($('#sweet-select').val() === 'Auto') {
      swal({
        title: 'Auto close alert!',
        text: 'I will close in 2 seconds.',
        timer: 2000,
        showConfirmButton: false,
      });
    } else if ($('#sweet-select').val() === 'Prompt') {
      swal({
        title: 'An input!',
        text: 'Write something interesting:',
        type: 'input',
        showCancelButton: true,
        closeOnConfirm: false,
        animation: 'slide-from-top',
        inputPlaceholder: 'Write something',
      },
        function (inputValue) {
          if (inputValue === false) {
            return false;
          }
          if (inputValue === '') {
            swal.showInputError('You need to write something!');
            return false;
          }
          swal('Nice!', 'You wrote: ' + inputValue, 'success');
        });
    }
  },

});
