;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    144: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(156),
        o = a(150),
        l = a(151),
        s = a(158),
        c = a(149),
        u = a(153)
      t.default = function() {
        return r.a.createElement(
          i.a,
          {
            title: 'Index page',
            mainType: 'centered-big',
            mainBackground: 'default',
            footerNextButtonLink: '/about/'
          },
          r.a.createElement(
            o.a,
            { extraClass: 'container_home-page' },
            r.a.createElement(u.a, { type: 'circle' }),
            r.a.createElement(
              s.a,
              {
                type: 'h1',
                color: 'white',
                size: 'huge',
                weight: 'normal',
                extraClass: 'title_letter-spacing-big'
              },
              'READY TO FIGHT'
            ),
            r.a.createElement(
              s.a,
              { type: 'h3', color: 'white', size: 'middle', weight: 'normal' },
              'Новостной портал RTFight.com'
            ),
            r.a.createElement(
              l.a,
              null,
              'Собрание лучших материалов о боксе. Эксклюзивные новости. Главная тематика нашего овостного портала - бокс, и все что с ним связано.'
            )
          ),
          r.a.createElement(
            c.a,
            {
              color: 'white',
              background: 'black',
              type: 'fixed-link',
              size: 'default',
              href: '/about/'
            },
            'Узнать подробнее'
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
        l = a(0),
        s = a.n(l),
        c = (a(165), a(4)),
        u = a.n(c),
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
                l = e.clickFunc,
                c = e.dataNavigationId,
                u = e.href,
                p = e.target,
                m = a ? ' button_type_' + a : '',
                d = n ? ' button_color_' + n : '',
                h = r ? ' button_background_' + r : '',
                g = i ? ' button_size_' + i : '',
                E = o || '',
                _ = p || '_self',
                f = e.popup ? this.clickPopupFunction : l,
                v = 'button' + m + d + h + g + ' ' + E,
                y = ''
              return (
                (y =
                  'object' != typeof t
                    ? 'link' === a ||
                      'link-button-rounded' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                      ? s.a.createElement('a', {
                          className: v,
                          onClick: f,
                          'data-navigation-id': c,
                          href: u,
                          target: _,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                      : s.a.createElement('button', {
                          className: v,
                          onClick: f,
                          'data-navigation-id': c,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                    : 'link' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                    ? s.a.createElement(
                        'a',
                        {
                          className: v,
                          onClick: f,
                          'data-navigation-id': c,
                          href: u,
                          target: _
                        },
                        t
                      )
                    : s.a.createElement(
                        'button',
                        { className: v, onClick: f, 'data-navigation-id': c },
                        t
                      )),
                s.a.createElement(s.a.Fragment, null, y)
              )
            }),
            t
          )
        })(s.a.Component)
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
        l = function(e) {
          var t = e.children,
            a = e.type,
            n = 'container ' + (a ? ' container_type_' + a : '') + e.extraClass
          return r.a.createElement('div', { className: n }, t)
        }
      ;(l.defaultProps = { extraClass: '' }),
        (l.propTypes = { type: o.a.string, children: o.a.node.isRequired }),
        (t.a = l)
    },
    151: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(170), a(4)),
        o = a.n(i),
        l = function(e) {
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
      ;(l.propTypes = {
        children: o.a.node.isRequired,
        color: o.a.string,
        size: o.a.string
      }),
        (t.a = l)
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
        l = function(e) {
          var t = e.children,
            a = e.name,
            n = 'icon' + (a ? ' icon_' + a : '')
          return r.a.createElement('i', { className: n }, t)
        }
      ;(l.propTypes = { name: o.a.string.isRequired, children: o.a.node }),
        (t.a = l)
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
        l = a(155),
        s = a(160),
        c = a.n(s)
      function u(e) {
        var t = e.description,
          a = e.lang,
          n = e.meta,
          i = e.keywords,
          o = e.title,
          s = l.data.site,
          u = t || s.siteMetadata.description
        return r.a.createElement(c.a, {
          htmlAttributes: { lang: a },
          title: o,
          titleTemplate: '%s | ' + s.siteMetadata.title,
          meta: [
            { name: 'description', content: u },
            { property: 'og:title', content: o },
            { property: 'og:description', content: u },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:creator', content: s.siteMetadata.author },
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
        h = a(7),
        g = a.n(h),
        E = a(150),
        _ = (a(162),
        a(163),
        a(164),
        function(e) {
          var t = e.items,
            a = e.type,
            n = e.extraClass,
            i = a ? ' list_type_' + a : '',
            o = n || '',
            l = t
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
            s = 'list' + i + ' ' + o
          return r.a.createElement('ul', { className: s }, l)
        })
      _.propTypes = {
        items: o.a.array,
        type: o.a.string,
        extraClass: o.a.string
      }
      var f = _,
        v = a(149),
        y = a(152),
        k = a(166),
        b = [
          r.a.createElement(
            v.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://www.facebook.com/groups/rtfight1com',
              target: '_blank'
            },
            r.a.createElement(y.a, { icon: k.a })
          ),
          r.a.createElement(
            v.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://vk.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(y.a, { icon: k.c })
          ),
          r.a.createElement(
            v.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://instagram.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(y.a, { icon: k.b })
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
          g()(t, e)
          var a = t.prototype
          return (
            (a.componentWillReceiveProps = function(e) {
              this.setState({ statusNavigationOpen: e.statusOpen })
            }),
            (a.render = function() {
              var e = this.props.items,
                t = e
                  ? r.a.createElement(f, { type: 'horizontal', items: e })
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
                    r.a.createElement(f, { items: b, type: 'horizontal' })
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
        x = a(153),
        T = a(154),
        C = [
          r.a.createElement(
            v.a,
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
            v.a,
            { type: 'link', color: 'white', href: '/' },
            'Главная'
          ),
          r.a.createElement(
            v.a,
            { type: 'link', color: 'white', href: '/about/' },
            'О сервисе'
          ),
          r.a.createElement(
            v.a,
            { type: 'link', color: 'white', href: '/blog/' },
            'Блог'
          ),
          r.a.createElement(
            v.a,
            { type: 'link', color: 'white', href: '/contacts/' },
            'Контакты'
          )
        ],
        M = (function(e) {
          function t(t) {
            var a
            return (
              ((a = e.call(this, t) || this).state = { statusMenu: !1 }),
              (a.handleStatusMenuOpen = a.handleStatusMenuOpen.bind(d()(a))),
              a
            )
          }
          g()(t, e)
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
                    E.a,
                    null,
                    r.a.createElement(
                      'div',
                      { className: 'header__left' },
                      r.a.createElement(
                        'div',
                        { className: e },
                        r.a.createElement(
                          v.a,
                          { clickFunc: this.handleStatusMenuOpen },
                          r.a.createElement(
                            T.a,
                            { name: t },
                            r.a.createElement('span', null),
                            r.a.createElement('span', null),
                            r.a.createElement('span', null)
                          )
                        )
                      )
                    ),
                    r.a.createElement(x.a, null)
                  )
                ),
                r.a.createElement(N, {
                  items: C,
                  statusOpen: this.state.statusMenu,
                  handleStatusMenuOpen: this.handleStatusMenuOpen
                })
              )
            }),
            t
          )
        })(r.a.Component),
        O = (a(169), a(151)),
        z = a(159),
        R = function(e) {
          var t = e.nextButtonLink,
            a = e.previousButtonLink,
            n = t
              ? r.a.createElement(
                  v.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: t
                  },
                  'Далее ',
                  r.a.createElement(y.a, { icon: z.b })
                )
              : '',
            i = a
              ? r.a.createElement(
                  v.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: a
                  },
                  r.a.createElement(y.a, { icon: z.a }),
                  ' Назад'
                )
              : r.a.createElement(f, { items: b, type: 'horizontal' })
          return r.a.createElement(
            'footer',
            { className: 'footer' },
            r.a.createElement(
              E.a,
              null,
              r.a.createElement('div', { className: 'footer_left' }, i),
              r.a.createElement(
                O.a,
                null,
                '© Все права защищены. RTFight.com - 2019'
              ),
              r.a.createElement('div', { className: 'footer_right' }, n)
            )
          )
        },
        F = (a(171),
        function(e) {
          var t = e.children,
            a = e.description,
            n = e.lang,
            i = e.meta,
            o = e.keywords,
            l = e.title,
            s = e.mainType,
            c = e.mainBackground,
            u = e.footerNextButtonLink,
            m = e.footerPreviousButtonLink,
            d =
              'main' +
              (s ? ' main_type_' + s : '') +
              (c ? ' main_background_' + c : '')
          return r.a.createElement(
            'div',
            { className: 'wrapper' },
            r.a.createElement(p, {
              description: a,
              lang: n,
              meta: i,
              keywords: o,
              title: l
            }),
            r.a.createElement(M, null),
            r.a.createElement('main', { className: d }, t),
            r.a.createElement(R, { nextButtonLink: u, previousButtonLink: m })
          )
        })
      F.propTypes = { children: o.a.node.isRequired }
      t.a = F
    },
    158: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(172), a(4)),
        o = a.n(i),
        l = function(e) {
          var t = e.type,
            a = e.size,
            n = e.color,
            i = e.shadow,
            o = e.children,
            l = e.weight,
            s = e.extraClass,
            c =
              'title' +
              (a ? ' title_size_' + a : '') +
              (n ? ' title_color_' + n : '') +
              (i ? ' title_shadow_' + i : '') +
              (l ? ' title_weight_' + l : '') +
              ' ' +
              (s || '')
          return 'h1' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h1', { className: c }, o)
              )
            : 'h2' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h2', { className: c }, o)
              )
            : 'h3' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h3', { className: c }, o)
              )
            : 'h4' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h4', { className: c }, o)
              )
            : 'h5' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h5', { className: c }, o)
              )
            : 'h6' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h6', { className: c }, o)
              )
            : void 0
        }
      ;(l.propTypes = {
        type: o.a.string.isRequired,
        size: o.a.string,
        color: o.a.string,
        shadow: o.a.string,
        weight: o.a.string,
        extraClass: o.a.string,
        children: o.a.node.isRequired
      }),
        (t.a = l)
    }
  }
])
//# sourceMappingURL=component---src-pages-index-js-801ab1ea11615246bfb8.js.map
