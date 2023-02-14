
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'buttons', component: () => import('pages/Buttons.vue') },
      { path: 'inputs', component: () => import('pages/Inputs.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Login.vue'),
        props: true
      },


    ]
  },
  {
    path: '/modules',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: ':moduleName/:mode?',
        component: () => import('src/pages/Module.vue'),
        props: true
      },


    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
