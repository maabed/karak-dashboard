
FlowRouter.route('/', {
  name: 'index',
  action: () => {
    BlazeLayout.render('mainLayout', { content: 'index' });
  },
});

FlowRouter.route('/charts', {
  name: 'index',
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
