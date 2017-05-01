
FlowRouter.route('/', {
  name: 'index',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'index' });
  },
});

FlowRouter.route('/charts', {
  name: 'charts',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'charts' });
  },
});

FlowRouter.route('/tables', {
  name: 'tables',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'tables' });
  },
});

FlowRouter.route('/budget', {
  name: 'budget',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'budget' });
  },
});

FlowRouter.route('/social', {
  name: 'social',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'social' });
  },
});

FlowRouter.route('/data-tables', {
  name: 'dataTables',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'dataTables' });
  },
});

FlowRouter.route('/invoice', {
  name: 'invoice',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'invoice' });
  },
});

FlowRouter.route('/icons', {
  name: 'icons',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'icons' });
  },
});

FlowRouter.route('/colors', {
  name: 'colors',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'colors' });
  },
});

FlowRouter.route('/modals', {
  name: 'modals',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'modals' });
  },
});

FlowRouter.route('/forms', {
  name: 'forms',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'forms' });
  },
});

FlowRouter.route('/tabs', {
  name: 'tabs',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'tabs' });
  },
});

FlowRouter.route('/loading', {
  name: 'loading',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'loading' });
  },
});

FlowRouter.route('/buttons', {
  name: 'buttons',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'buttons' });
  },
});

FlowRouter.route('/menus', {
  name: 'menus',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'menus' });
  },
});

FlowRouter.route('/notifications', {
  name: 'notifications',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'notifications' });
  },
});

FlowRouter.route('/cards', {
  name: 'cards',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'cards' });
  },
});

FlowRouter.route('/lists', {
  name: 'lists',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'lists' });
  },
});

FlowRouter.route('/panels', {
  name: 'panels',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'panels' });
  },
});

FlowRouter.route('/hover', {
  name: 'hover',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'hover' });
  },
});

FlowRouter.route('/google-maps', {
  name: 'googleMaps',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'googleMaps' });
  },
});

FlowRouter.route('/wizard', {
  name: 'wizard',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'wizard' });
  },
});

FlowRouter.route('/inbox', {
  name: 'inbox',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'inbox' });
  },
});

FlowRouter.route('/compose', {
  name: 'compose',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'compose' });
  },
});

/* Flat layout */

FlowRouter.route('/error-400', {
  name: 'error400',
  action: () => {
    BlazeLayout.render('flatLayout', { content: 'error400' });
  },
});

FlowRouter.route('/error-500', {
  name: 'error500',
  action: () => {
    BlazeLayout.render('flatLayout', { content: 'error500' });
  },
});

FlowRouter.route('/login', {
  name: 'login',
  action: () => {
    BlazeLayout.render('flatLayout', { content: 'login' });
  },
});

FlowRouter.route('/lock-screen', {
  name: 'lockScreen',
  action: () => {
    BlazeLayout.render('flatLayout', { content: 'lockScreen' });
  },
});

FlowRouter.route('/landing-page', {
  name: 'landingPage',
  action: () => {
    BlazeLayout.render('flatLayout', { content: 'landingPage' });
  },
});

FlowRouter.route('/chat', {
  name: 'chat',
  action: () => {
    BlazeLayout.render('flatLayout', { content: 'chat' });
  },
});
