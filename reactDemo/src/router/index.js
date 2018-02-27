const routerConfig = [
  {
    path: '/',
    component: App,
    childrenRoutes: [
      {path: 'demo', component: About},
    ]
  }
];
render((
  <Router routes={routerConfig}/>
),document.getElementById('root'));