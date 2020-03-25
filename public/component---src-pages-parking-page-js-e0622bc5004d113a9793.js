;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    145: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(156),
        o = a(150),
        s = a(151)
      t.default = function() {
        return r.a.createElement(
          i.a,
          {
            title: '404 page',
            mainType: 'centered-small',
            mainBackground: '404'
          },
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              s.a,
              null,
              'Скоро вы сможете войти в личный кабинет, заполнить анкету и стать частью грандиозного проекта. Пожалуйста, подождите. Осталось совсем немного!'
            )
          )
        )
      }
    },
    149: function(e, t, a) {
      'use strict'
      var n = a(33),
        r = a.n(n),
        i = a(7),
        o = a.n(i),
        s = a(0),
        c = a.n(s),
        l = (a(165), a(4)),
        u = a.n(l),
        p = (function(e) {
          function t(t) {
            var a
            return (
              ((a = e.call(this, t) || this).clickPopupFunction = function(e) {
                e.preventDefault(),
                  a.setState({ popupOpen: !a.state.popupOpen, reopen: !0 })
              }),
              (a.state = { popupOpen: !1, reopen: !1 }),
              (a.clickPopupFunction = a.clickPopupFunction.bind(r()(a))),
              a
            )
          }
          return (
            o()(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.children,
                a = e.type,
                n = e.color,
                r = e.background,
                i = e.size,
                o = e.extraClass,
                s = e.clickFunc,
                l = e.dataNavigationId,
                u = e.href,
                p = e.target,
                m = a ? ' button_type_' + a : '',
                d = n ? ' button_color_' + n : '',
                g = r ? ' button_background_' + r : '',
                h = i ? ' button_size_' + i : '',
                f = o || '',
                _ = p || '_self',
                v = e.popup ? this.clickPopupFunction : s,
                y = 'button' + m + d + g + h + ' ' + f,
                E = ''
              return (
                (E =
                  'object' != typeof t
                    ? 'link' === a ||
                      'link-button-rounded' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                      ? c.a.createElement('a', {
                          className: y,
                          onClick: v,
                          'data-navigation-id': l,
                          href: u,
                          target: _,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                      : c.a.createElement('button', {
                          className: y,
                          onClick: v,
                          'data-navigation-id': l,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                    : 'link' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                    ? c.a.createElement(
                        'a',
                        {
                          className: y,
                          onClick: v,
                          'data-navigation-id': l,
                          href: u,
                          target: _
                        },
                        t
                      )
                    : c.a.createElement(
                        'button',
                        { className: y, onClick: v, 'data-navigation-id': l },
                        t
                      )),
                c.a.createElement(c.a.Fragment, null, E)
              )
            }),
            t
          )
        })(c.a.Component)
      ;(p.propTypes = {
        type: u.a.string,
        color: u.a.string,
        background: u.a.string,
        size: u.a.string,
        extraClass: u.a.string,
        children: u.a.node.isRequired,
        clickFunc: u.a.func,
        dataNavigationId: u.a.string,
        href: u.a.string,
        target: u.a.string,
        popup: u.a.bool,
        popupId: u.a.string,
        popupContentInside: u.a.any
      }),
        (t.a = p)
    },
    150: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(161), a(4)),
        o = a.n(i),
        s = function(e) {
          var t = e.children,
            a = e.type,
            n = 'container ' + (a ? ' container_type_' + a : '') + e.extraClass
          return r.a.createElement('div', { className: n }, t)
        }
      ;(s.defaultProps = { extraClass: '' }),
        (s.propTypes = { type: o.a.string, children: o.a.node.isRequired }),
        (t.a = s)
    },
    151: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(170), a(4)),
        o = a.n(i),
        s = function(e) {
          var t = e.children,
            a = e.color,
            n = e.size,
            i =
              'text' +
              (a ? ' text_color_' + a : '') +
              (n ? ' text_size_' + n : '')
          return r.a.createElement('div', {
            className: i,
            dangerouslySetInnerHTML: { __html: t }
          })
        }
      ;(s.propTypes = {
        children: o.a.node.isRequired,
        color: o.a.string,
        size: o.a.string
      }),
        (t.a = s)
    },
    153: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(167), a(4)),
        o = function(e) {
          var t = e.type,
            a = 'logo' + (t ? ' logo_type_' + t : '')
          return r.a.createElement('div', { className: a })
        }
      ;(o.propTypes = { type: a.n(i).a.string }), (t.a = o)
    },
    154: function(e, t, a) {
      'use strict'
      a(157)
      var n = a(0),
        r = a.n(n),
        i = (a(168), a(4)),
        o = a.n(i),
        s = function(e) {
          var t = e.children,
            a = e.name,
            n = 'icon' + (a ? ' icon_' + a : '')
          return r.a.createElement('i', { className: n }, t)
        }
      ;(s.propTypes = { name: o.a.string.isRequired, children: o.a.node }),
        (t.a = s)
    },
    155: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Новостной портал RTFight.com',
              description: 'Новостной портал',
              author: 'RTFight.com'
            }
          }
        }
      }
    },
    156: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = a(4),
        o = a.n(i),
        s = a(155),
        c = a(160),
        l = a.n(c)
      function u(e) {
        var t = e.description,
          a = e.lang,
          n = e.meta,
          i = e.keywords,
          o = e.title,
          c = s.data.site,
          u = t || c.siteMetadata.description
        return r.a.createElement(l.a, {
          htmlAttributes: { lang: a },
          title: o,
          titleTemplate: '%s | ' + c.siteMetadata.title,
          meta: [
            { name: 'description', content: u },
            { property: 'og:title', content: o },
            { property: 'og:description', content: u },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:creator', content: c.siteMetadata.author },
            { name: 'twitter:title', content: o },
            { name: 'twitter:description', content: u }
          ]
            .concat(
              i.length > 0 ? { name: 'keywords', content: i.join(', ') } : []
            )
            .concat(n)
        })
      }
      ;(u.defaultProps = { lang: 'en', meta: [], keywords: [] }),
        (u.propTypes = {
          description: o.a.string,
          lang: o.a.string,
          meta: o.a.array,
          keywords: o.a.arrayOf(o.a.string),
          title: o.a.string.isRequired
        })
      var p = u,
        m = a(33),
        d = a.n(m),
        g = a(7),
        h = a.n(g),
        f = a(150),
        _ = (a(162),
        a(163),
        a(164),
        function(e) {
          var t = e.items,
            a = e.type,
            n = e.extraClass,
            i = a ? ' list_type_' + a : '',
            o = n || '',
            s = t
              ? t.map(function(e, t) {
                  return e
                    ? r.a.createElement(
                        'li',
                        { key: t, className: 'list__item' },
                        e
                      )
                    : ''
                })
              : '',
            c = 'list' + i + ' ' + o
          return r.a.createElement('ul', { className: c }, s)
        })
      _.propTypes = {
        items: o.a.array,
        type: o.a.string,
        extraClass: o.a.string
      }
      var v = _,
        y = a(149),
        E = a(152),
        k = a(166),
        b = [
          r.a.createElement(
            y.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://www.facebook.com/groups/rtfight1com',
              target: '_blank'
            },
            r.a.createElement(E.a, { icon: k.a })
          ),
          r.a.createElement(
            y.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://vk.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(E.a, { icon: k.c })
          ),
          r.a.createElement(
            y.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://instagram.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(E.a, { icon: k.b })
          )
        ],
        w = (function(e) {
          function t(t) {
            var a
            return (
              ((a = e.call(this, t) || this).state = {
                statusNavigationOpen: !1
              }),
              a
            )
          }
          h()(t, e)
          var a = t.prototype
          return (
            (a.componentWillReceiveProps = function(e) {
              this.setState({ statusNavigationOpen: e.statusOpen })
            }),
            (a.render = function() {
              var e = this.props.items,
                t = e
                  ? r.a.createElement(v, { type: 'horizontal', items: e })
                  : '',
                a =
                  'navigation ' +
                  (this.state.statusNavigationOpen
                    ? 'navigation_open'
                    : 'navigation_close')
              return r.a.createElement(
                'nav',
                { className: a, onClick: this.props.handleStatusMenuOpen },
                r.a.createElement(
                  'div',
                  { className: 'navigation__container' },
                  r.a.createElement(
                    'div',
                    { className: 'navigation__menu' },
                    t
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'navigation__social' },
                    r.a.createElement(v, { items: b, type: 'horizontal' })
                  )
                )
              )
            }),
            t
          )
        })(r.a.Component)
      w.propTypes = {
        items: o.a.array.isRequired,
        statusOpen: o.a.bool,
        statusNavigationOpen: o.a.func
      }
      var N = w,
        M = a(153),
        O = a(154),
        T = [
          r.a.createElement(
            y.a,
            {
              color: 'white',
              background: 'red',
              type: 'link-button-rounded',
              size: 'default',
              extraClass: 'button_navigation_login',
              href: '/blog/'
            },
            'Основные новости'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '/' },
            'Главная'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '/about/' },
            'О сервисе'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '/blog/' },
            'Блог'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '/contacts/' },
            'Контакты'
          )
        ],
        x = (function(e) {
          function t(t) {
            var a
            return (
              ((a = e.call(this, t) || this).state = { statusMenu: !1 }),
              (a.handleStatusMenuOpen = a.handleStatusMenuOpen.bind(d()(a))),
              a
            )
          }
          h()(t, e)
          var a = t.prototype
          return (
            (a.handleStatusMenuOpen = function(e) {
              ;(e.target.classList.contains('button') ||
                e.target.classList.contains('navigation')) &&
                this.setState({ statusMenu: !this.state.statusMenu })
            }),
            (a.render = function() {
              var e =
                  'header__navigation_button ' +
                  (this.state.statusMenu
                    ? 'header__navigation_button_open'
                    : 'header__navigation_button_close'),
                t =
                  'hamburger ' +
                  (this.state.statusMenu
                    ? 'icon_hamburger_close'
                    : 'icon_hamburger_open')
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  'header',
                  { className: 'header' },
                  r.a.createElement(
                    f.a,
                    null,
                    r.a.createElement(
                      'div',
                      { className: 'header__left' },
                      r.a.createElement(
                        'div',
                        { className: e },
                        r.a.createElement(
                          y.a,
                          { clickFunc: this.handleStatusMenuOpen },
                          r.a.createElement(
                            O.a,
                            { name: t },
                            r.a.createElement('span', null),
                            r.a.createElement('span', null),
                            r.a.createElement('span', null)
                          )
                        )
                      )
                    ),
                    r.a.createElement(M.a, null)
                  )
                ),
                r.a.createElement(N, {
                  items: T,
                  statusOpen: this.state.statusMenu,
                  handleStatusMenuOpen: this.handleStatusMenuOpen
                })
              )
            }),
            t
          )
        })(r.a.Component),
        C = (a(169), a(151)),
        S = a(159),
        F = function(e) {
          var t = e.nextButtonLink,
            a = e.previousButtonLink,
            n = t
              ? r.a.createElement(
                  y.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: t
                  },
                  'Далее ',
                  r.a.createElement(E.a, { icon: S.b })
                )
              : '',
            i = a
              ? r.a.createElement(
                  y.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: a
                  },
                  r.a.createElement(E.a, { icon: S.a }),
                  ' Назад'
                )
              : r.a.createElement(v, { items: b, type: 'horizontal' })
          return r.a.createElement(
            'footer',
            { className: 'footer' },
            r.a.createElement(
              f.a,
              null,
              r.a.createElement('div', { className: 'footer_left' }, i),
              r.a.createElement(
                C.a,
                null,
                '© Все права защищены. RTFight.com - 2019'
              ),
              r.a.createElement('div', { className: 'footer_right' }, n)
            )
          )
        },
        L = (a(171),
        function(e) {
          var t = e.children,
            a = e.description,
            n = e.lang,
            i = e.meta,
            o = e.keywords,
            s = e.title,
            c = e.mainType,
            l = e.mainBackground,
            u = e.footerNextButtonLink,
            m = e.footerPreviousButtonLink,
            d =
              'main' +
              (c ? ' main_type_' + c : '') +
              (l ? ' main_background_' + l : '')
          return r.a.createElement(
            'div',
            { className: 'wrapper' },
            r.a.createElement(p, {
              description: a,
              lang: n,
              meta: i,
              keywords: o,
              title: s
            }),
            r.a.createElement(x, null),
            r.a.createElement('main', { className: d }, t),
            r.a.createElement(F, { nextButtonLink: u, previousButtonLink: m })
          )
        })
      L.propTypes = { children: o.a.node.isRequired }
      t.a = L
    }
  }
])
//# sourceMappingURL=component---src-pages-parking-page-js-e0622bc5004d113a9793.js.map
