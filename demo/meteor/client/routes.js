
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

FlowRouter.route('/data_tables', {
  name: 'data_tables',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'data_tables' });
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
