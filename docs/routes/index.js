export function configRouter (router) {
  router.map({
    'components': {
      component: require('../views/components.vue'),
      subRoutes: {
        'introduce': {
          component: function (res) {
            require([ '../views/docs/introduce.vue' ], res)
          }
        },

        'getting-started': {
          component: function (res) {
            require([ '../views/docs/getting-started.vue' ], res)
          }
        },

        'download': {
          component: function (res) {
            require([ '../views/docs/download.vue' ], res)
          }
        },

        'affix': {
          component: function (res) {
            require([ '../components/affix.vue' ], res)
          }
        },

        'alert': {
          component: function (res) {
            require([ '../components/alert.vue' ], res)
          }
        },

        'button': {
          component: function (res) {
            require([ '../components/button.vue' ], res)
          }
        },

        'badge': {
          component: function (res) {
            require([ '../components/badge.vue' ], res)
          }
        },

        'breadcrumb': {
          component: function (res) {
            require([ '../components/breadcrumb.vue' ], res)
          }
        },

        'checkbox': {
          component: function (res) {
            require([ '../components/checkbox.vue' ], res)
          }
        },

        'carousel': {
          component: function (res) {
            require([ '../components/carousel.vue' ], res)
          }
        },

        'collapse': {
          component: function (res) {
            require([ '../components/collapse.vue' ], res)
          }
        },

        'dropdown': {
          component: function (res) {
            require([ '../components/dropdown.vue' ], res)
          }
        },

        'iconfont': {
          component: function (res) {
            require([ '../components/iconfont.vue' ], res)
          }
        },

        'input-number': {
          component: function (res) {
            require([ '../components/input-number.vue' ], res)
          }
        },

        'layout': {
          component: function (res) {
            require([ '../components/layout.vue' ], res)
          }
        },

        'message': {
          component: function (res) {
            require([ '../components/message.vue' ], res)
          }
        },

        'menu': {
          component: function (res) {
            require([ '../components/menu.vue' ], res)
          }
        },

        'notification': {
          component: function (res) {
            require([ '../components/notification.vue' ], res)
          }
        },

        'progress': {
          component: function (res) {
            require([ '../components/progress.vue' ], res)
          }
        },

        'queue-anim': {
          component: function (res) {
            require([ '../components/queue-anim.vue' ], res)
          }
        },

        'popconfirm': {
          component: function (res) {
            require([ '../components/popconfirm.vue' ], res)
          }
        },

        'popover': {
          component: function (res) {
            require([ '../components/popover.vue' ], res)
          }
        },

        'upload': {
          component: function (res) {
            require([ '../components/upload.vue' ], res)
          }
        },

        'modal': {
          component: function (res) {
            require([ '../components/modal.vue' ], res)
          }
        },

        'radio': {
          component: function (res) {
            require([ '../components/radio.vue' ], res)
          }
        },

        'select': {
          component: function (res) {
            require([ '../components/select.vue' ], res)
          }
        },

        'slider': {
          component: function (res) {
            require([ '../components/slider.vue' ], res)
          }
        },

        'switch': {
          component: function (res) {
            require([ '../components/switch.vue' ], res)
          }
        },

        'steps': {
          component: function (res) {
            require([ '../components/steps.vue' ], res)
          }
        },

        'spin': {
          component: function (res) {
            require([ '../components/spin.vue' ], res)
          }
        },

        'table': {
          component: function (res) {
            require([ '../components/table.vue' ], res)
          }
        },

        'tag': {
          component: function (res) {
            require([ '../components/tag.vue' ], res)
          }
        },

        'tooltip': {
          component: function (res) {
            require([ '../components/tooltip.vue' ], res)
          }
        },

        'timeline': {
          component: function (res) {
            require([ '../components/timeline.vue' ], res)
          }
        },

        '_trigger': {
          component: function (res) {
            require([ '../components/_trigger.vue' ], res)
          }
        },

        '_align': {
          component: function (res) {
            require([ '../components/_align.vue' ], res)
          }
        },

        '_animate': {
          component: function (res) {
            require([ '../components/_animate.vue' ], res)
          }
        },

        '_notification': {
          component: function (res) {
            require([ '../components/_notification.vue' ], res)
          }
        },

        '_tooltip': {
          component: function (res) {
            require([ '../components/_tooltip.vue' ], res)
          }
        },

        '_dialog': {
          component: function (res) {
            require([ '../components/_dialog.vue' ], res)
          }
        }
      }
    },

    '*': {
      component: function (res) {
        require([ '../views/not-found.vue' ], res)
      }
    }
  })

  router.alias({
    '/components': '/components/introduce',
    '/docs/introduce': '/components/introduce',
    '/docs/getting-started': '/components/getting-started',
    '/docs/download': '/components/download'
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach(transition => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        // alert('this route is forbidden by a global before hook')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}
