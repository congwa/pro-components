// eslint-disable-next-line
import BasicLayout from '../layouts/BasicLayout'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/analysis',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { keepAlive: true, title: 'menu.dashboard.default', icon: 'dashboard' },
        redirect: '/dashboard/analysis',
        component: RouteView,
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: {
              keepAlive: true,
              icon: 'smile',
              title: 'menu.dashboard.analysis'
            },
            component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/analysis')
          },
          {
            path: '/dashboard/workplace/:id?',
            name: 'workplace',
            meta: {
              global: true,
              keepAlive: true,
              icon: 'smile',
              title: 'menu.dashboard.workplace'
            },
            component: () => import(/* webpackChunkName: "dashboard" */ '../views/TestPage')
          }
        ]
      },
      {
        path: '/form',
        name: 'form',
        meta: {
          keepAlive: true,
          title: 'menu.form.default',
          icon: 'video-camera'
        },
        component: RouteView,
        children: [
          {
            path: '/form/basic-form',
            name: 'basic-form',
            meta: {
              keepAlive: true,
              icon: 'smile',
              title: 'menu.form.basicform'
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/BlockPage')
          },
          {
            path: '/form/step-form',
            name: 'step-form',
            meta: {
              keepAlive: true,
              icon: 'smile',
              title: 'menu.form.stepform'
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/BlockPage')
          },
          {
            path: '/form/advanced-form',
            name: 'advanced-form',
            meta: {
              keepAlive: true,
              icon: 'smile',
              title: 'menu.form.advancedform'
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/BlockPage')
          }
        ]
      },
      {
        path: '/page1',
        name: 'page1',
        meta: {
          keepAlive: true,
          title: 'menu.nav1',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      },
      {
        path: '/page2',
        name: 'page2',
        meta: {
          keepAlive: true,
          title: 'menu.nav2',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      },
      {
        path: '/page3',
        name: 'page3',
        meta: {
          keepAlive: true,
          title: 'menu.nav3',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      }
    ]
  }
]

export { asyncRouterMap }