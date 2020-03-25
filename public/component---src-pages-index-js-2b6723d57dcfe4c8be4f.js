;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    142: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(155),
        o = a(148),
        l = a(150),
        c = a(157),
        s = a(147),
        u = a(151)
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
              c.a,
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
              c.a,
              { type: 'h3', color: 'white', size: 'middle', weight: 'normal' },
              'Твоя команда всегда рядом!'
            ),
            r.a.createElement(
              l.a,
              null,
              'Спортсмен может добиться высоких результатов и без природного таланта, но никогда без трудолюбия и упорства. Зарегестрировавшись на сайте, вы найдете свою команду.'
            ),
            r.a.createElement(
              s.a,
              {
                color: 'white',
                background: 'red',
                type: 'rounded',
                size: 'default'
              },
              'Зарегестрироваться'
            )
          ),
          r.a.createElement(
            s.a,
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
    147: function(e, t, a) {
      'use strict'
      var n = a(33),
        r = a.n(n),
        i = a(7),
        o = a.n(i),
        l = a(0),
        c = a.n(l),
        s = (a(163), a(4)),
        u = a.n(s),
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
                s = e.dataNavigationId,
                u = e.href,
                p = e.target,
                m = a ? ' button_type_' + a : '',
                d = n ? ' button_color_' + n : '',
                h = r ? ' button_background_' + r : '',
                g = i ? ' button_size_' + i : '',
                E = o || '',
                f = p || '_self',
                y = e.popup ? this.clickPopupFunction : l,
                _ = 'button' + m + d + h + g + ' ' + E,
                k = ''
              return (
                (k =
                  'object' != typeof t
                    ? 'link' === a ||
                      'link-button-rounded' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                      ? c.a.createElement('a', {
                          className: _,
                          onClick: y,
                          'data-navigation-id': s,
                          href: u,
                          target: f,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                      : c.a.createElement('button', {
                          className: _,
                          onClick: y,
                          'data-navigation-id': s,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                    : 'link' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                    ? c.a.createElement(
                        'a',
                        {
                          className: _,
                          onClick: y,
                          'data-navigation-id': s,
                          href: u,
                          target: f
                        },
                        t
                      )
                    : c.a.createElement(
                        'button',
                        { className: _, onClick: y, 'data-navigation-id': s },
                        t
                      )),
                c.a.createElement(c.a.Fragment, null, k)
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
    148: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(159), a(4)),
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
    150: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(169), a(4)),
        o = a.n(i),
        l = function(e) {
          var t = e.children,
            a = e.color,
            n = 'text' + (a ? ' text_color_' + a : '')
          return r.a.createElement('p', { className: n }, t)
        }
      ;(l.propTypes = { children: o.a.node.isRequired, color: o.a.string }),
        (t.a = l)
    },
    151: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(165), a(4)),
        o = function(e) {
          var t = e.type,
            a = 'logo' + (t ? ' logo_type_' + t : '')
          return r.a.createElement('div', { className: a })
        }
      ;(o.propTypes = { type: a.n(i).a.string }), (t.a = o)
    },
    152: function(e, t, a) {
      'use strict'
      a(156)
      var n = a(0),
        r = a.n(n),
        i = (a(166), a(4)),
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
    154: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: { title: 'RTFight.com', description: '', author: '' }
          }
        }
      }
    },
    155: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = a(4),
        o = a.n(i),
        l = a(154),
        c = a(158),
        s = a.n(c)
      function u(e) {
        var t = e.description,
          a = e.lang,
          n = e.meta,
          i = e.keywords,
          o = e.title,
          c = l.data.site,
          u = t || c.siteMetadata.description
        return r.a.createElement(s.a, {
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
        h = a(7),
        g = a.n(h),
        E = a(148),
        f = (a(160),
        a(161),
        a(162),
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
            c = 'list' + i + ' ' + o
          return r.a.createElement('ul', { className: c }, l)
        })
      f.propTypes = {
        items: o.a.array,
        type: o.a.string,
        extraClass: o.a.string
      }
      var y = f,
        _ = a(147),
        k = a(149),
        v = a(164),
        b = [
          r.a.createElement(
            _.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://www.facebook.com/groups/rtfight1com',
              target: '_blank'
            },
            r.a.createElement(k.a, { icon: v.a })
          ),
          r.a.createElement(
            _.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://vk.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(k.a, { icon: v.d })
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(k.a, { icon: v.c })
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(k.a, { icon: v.e })
          ),
          r.a.createElement(
            _.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://instagram.com/rtofight',
              target: '_blank'
            },
            r.a.createElement(k.a, { icon: v.b })
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
                  ? r.a.createElement(y, { type: 'horizontal', items: e })
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
                    r.a.createElement(y, { items: b, type: 'horizontal' })
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
        x = a(151),
        C = a(152),
        M = (a(167), a(153)),
        O = function() {
          return r.a.createElement(
            'div',
            { className: 'language-navigation' },
            r.a.createElement(
              _.a,
              { background: 'transparent', color: 'white' },
              'Ru ',
              r.a.createElement(k.a, { icon: M.b })
            )
          )
        },
        T = [
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '/contacts/' },
            'Регистрация'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#' },
            'Войти'
          )
        ],
        z = [
          r.a.createElement(
            _.a,
            {
              color: 'white',
              background: 'red',
              type: 'link-button-rounded',
              size: 'default',
              extraClass: 'button_navigation_login',
              href: '/contacts/'
            },
            'Регистрация'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '/' },
            'Главная'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '/about/' },
            'О сервисе'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#' },
            'Категории'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#' },
            'Мероприятия'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#' },
            'Блог'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#' },
            'Отзывы'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '/contacts/' },
            'Контакты'
          )
        ],
        R = (function(e) {
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
                          _.a,
                          { clickFunc: this.handleStatusMenuOpen },
                          r.a.createElement(
                            C.a,
                            { name: t },
                            r.a.createElement('span', null),
                            r.a.createElement('span', null),
                            r.a.createElement('span', null)
                          )
                        )
                      ),
                      r.a.createElement(O, null)
                    ),
                    r.a.createElement(x.a, null),
                    r.a.createElement(
                      'div',
                      { className: 'header__right' },
                      r.a.createElement(y, { items: T, type: 'horizontal' })
                    )
                  )
                ),
                r.a.createElement(N, {
                  items: z,
                  statusOpen: this.state.statusMenu,
                  handleStatusMenuOpen: this.handleStatusMenuOpen
                })
              )
            }),
            t
          )
        })(r.a.Component),
        F = (a(168), a(150)),
        S = function(e) {
          var t = e.nextButtonLink,
            a = e.previousButtonLink,
            n = t
              ? r.a.createElement(
                  _.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: t
                  },
                  'Далее ',
                  r.a.createElement(k.a, { icon: M.b })
                )
              : '',
            i = a
              ? r.a.createElement(
                  _.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: a
                  },
                  r.a.createElement(k.a, { icon: M.a }),
                  ' Назад'
                )
              : r.a.createElement(y, { items: b, type: 'horizontal' })
          return r.a.createElement(
            'footer',
            { className: 'footer' },
            r.a.createElement(
              E.a,
              null,
              r.a.createElement('div', { className: 'footer_left' }, i),
              r.a.createElement(
                F.a,
                null,
                '© Все права защищены. RTFight.com - 2019'
              ),
              r.a.createElement('div', { className: 'footer_right' }, n)
            )
          )
        },
        L = (a(170),
        function(e) {
          var t = e.children,
            a = e.description,
            n = e.lang,
            i = e.meta,
            o = e.keywords,
            l = e.title,
            c = e.mainType,
            s = e.mainBackground,
            u = e.footerNextButtonLink,
            m = e.footerPreviousButtonLink,
            d =
              'main' +
              (c ? ' main_type_' + c : '') +
              (s ? ' main_background_' + s : '')
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
            r.a.createElement(R, null),
            r.a.createElement('main', { className: d }, t),
            r.a.createElement(S, { nextButtonLink: u, previousButtonLink: m })
          )
        })
      L.propTypes = { children: o.a.node.isRequired }
      t.a = L
    },
    157: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(171), a(4)),
        o = a.n(i),
        l = function(e) {
          var t = e.type,
            a = e.size,
            n = e.color,
            i = e.shadow,
            o = e.children,
            l = e.weight,
            c = e.extraClass,
            s =
              'title' +
              (a ? ' title_size_' + a : '') +
              (n ? ' title_color_' + n : '') +
              (i ? ' title_shadow_' + i : '') +
              (l ? ' title_weight_' + l : '') +
              ' ' +
              (c || '')
          return 'h1' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h1', { className: s }, o)
              )
            : 'h2' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h2', { className: s }, o)
              )
            : 'h3' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h3', { className: s }, o)
              )
            : 'h4' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h4', { className: s }, o)
              )
            : 'h5' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h5', { className: s }, o)
              )
            : 'h6' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h6', { className: s }, o)
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
//# sourceMappingURL=component---src-pages-index-js-2b6723d57dcfe4c8be4f.js.map
