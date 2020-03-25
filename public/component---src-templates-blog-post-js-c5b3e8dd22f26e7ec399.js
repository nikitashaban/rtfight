;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    141: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'posteQuery', function() {
          return f
        })
      a(175), a(157)
      var n = a(7),
        r = a.n(n),
        i = a(0),
        o = a.n(i),
        l = a(156),
        s = a(150),
        c = a(158),
        u = a(173),
        m = (a(193), a(149)),
        p = a(151),
        d = a(152),
        h = a(159),
        g = (function(e) {
          function t(t) {
            var a
            return ((a = e.call(this, t) || this).state = { data: !1 }), a
          }
          r()(t, e)
          var a = t.prototype
          return (
            (a.componentDidMount = function() {
              var e = this.props.data.wordpressPost
              console.log(e), this.setState({ data: e })
            }),
            (a.render = function() {
              if (!1 !== this.state.data) {
                var e = this.state.data,
                  t = e.title,
                  a = e.categories[0].name,
                  n = e.date,
                  r = e.content,
                  i = e.featured_media.localFile.childImageSharp.fixed.src
                return o.a.createElement(
                  l.a,
                  {
                    title: t,
                    mainType: 'centered-huge-post',
                    mainBackground: 'gym',
                    footerNextButtonLink: '/',
                    footerPreviousButtonLink: '/'
                  },
                  o.a.createElement(
                    s.a,
                    { extraClass: 'container_blog-page_single' },
                    o.a.createElement(
                      'div',
                      { className: 'button-back' },
                      o.a.createElement(
                        m.a,
                        {
                          background: 'transparent',
                          color: 'white',
                          type: 'link',
                          href: '/blog/'
                        },
                        o.a.createElement(d.a, { icon: h.a }),
                        ' Вернуться назад'
                      )
                    ),
                    o.a.createElement(
                      u.a,
                      { column: '2', extraClass: 'blog' },
                      o.a.createElement(
                        'div',
                        { className: 'row__column' },
                        o.a.createElement('img', {
                          src: i,
                          alt: 'fdsfsd',
                          className: 'blog-preview__thumbnail'
                        })
                      ),
                      o.a.createElement(
                        'article',
                        { className: 'row__column' },
                        o.a.createElement(
                          'div',
                          { className: 'blog-preview' },
                          o.a.createElement(
                            'div',
                            { className: 'blog-preview__meta' },
                            o.a.createElement(
                              m.a,
                              {
                                color: 'white',
                                background: 'red',
                                type: 'rounded',
                                size: 'middle'
                              },
                              a
                            ),
                            o.a.createElement(
                              p.a,
                              { color: 'gray', size: 'middle' },
                              n
                            )
                          )
                        ),
                        o.a.createElement(
                          c.a,
                          { type: 'h1', size: 'middle', color: 'white' },
                          t
                        ),
                        o.a.createElement(p.a, { color: 'white', size: '' }, r)
                      )
                    )
                  )
                )
              }
              return o.a.createElement(
                l.a,
                {
                  title: 'Loading...',
                  mainType: 'centered-huge-about',
                  mainBackground: 'gym',
                  footerNextButtonLink: '/',
                  footerPreviousButtonLink: '/'
                },
                o.a.createElement(
                  s.a,
                  { extraClass: 'container_blog-page_single' },
                  o.a.createElement(
                    u.a,
                    { column: '2', extraClass: 'blog' },
                    o.a.createElement(
                      'article',
                      { className: 'row__column' },
                      o.a.createElement(
                        c.a,
                        { type: 'h1', size: 'middle', color: 'white' },
                        'Loading...'
                      )
                    )
                  )
                )
              )
            }),
            t
          )
        })(i.Component)
      t.default = g
      var f = '2356851167'
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
        m = (function(e) {
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
                m = e.target,
                p = a ? ' button_type_' + a : '',
                d = n ? ' button_color_' + n : '',
                h = r ? ' button_background_' + r : '',
                g = i ? ' button_size_' + i : '',
                f = o || '',
                E = m || '_self',
                _ = e.popup ? this.clickPopupFunction : l,
                v = 'button' + p + d + h + g + ' ' + f,
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
                          onClick: _,
                          'data-navigation-id': c,
                          href: u,
                          target: E,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                      : s.a.createElement('button', {
                          className: v,
                          onClick: _,
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
                          onClick: _,
                          'data-navigation-id': c,
                          href: u,
                          target: E
                        },
                        t
                      )
                    : s.a.createElement(
                        'button',
                        { className: v, onClick: _, 'data-navigation-id': c },
                        t
                      )),
                s.a.createElement(s.a.Fragment, null, y)
              )
            }),
            t
          )
        })(s.a.Component)
      ;(m.propTypes = {
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
        (t.a = m)
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
      var m = u,
        p = a(33),
        d = a.n(p),
        h = a(7),
        g = a.n(h),
        f = a(150),
        E = (a(162),
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
      E.propTypes = {
        items: o.a.array,
        type: o.a.string,
        extraClass: o.a.string
      }
      var _ = E,
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
            r.a.createElement(y.a, { icon: k.d })
          ),
          r.a.createElement(
            v.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(y.a, { icon: k.c })
          ),
          r.a.createElement(
            v.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(y.a, { icon: k.e })
          ),
          r.a.createElement(
            v.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://instagram.com/rtofight',
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
                  ? r.a.createElement(_, { type: 'horizontal', items: e })
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
                    r.a.createElement(_, { items: b, type: 'horizontal' })
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
        C = a(154),
        M = [
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
        T = (function(e) {
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
                    f.a,
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
                            C.a,
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
                  items: M,
                  statusOpen: this.state.statusMenu,
                  handleStatusMenuOpen: this.handleStatusMenuOpen
                })
              )
            }),
            t
          )
        })(r.a.Component),
        z = (a(169), a(151)),
        L = a(159),
        O = function(e) {
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
                  r.a.createElement(y.a, { icon: L.b })
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
                  r.a.createElement(y.a, { icon: L.a }),
                  ' Назад'
                )
              : r.a.createElement(_, { items: b, type: 'horizontal' })
          return r.a.createElement(
            'footer',
            { className: 'footer' },
            r.a.createElement(
              f.a,
              null,
              r.a.createElement('div', { className: 'footer_left' }, i),
              r.a.createElement(
                z.a,
                null,
                '© Все права защищены. RTFight.com - 2019'
              ),
              r.a.createElement('div', { className: 'footer_right' }, n)
            )
          )
        },
        S = (a(171),
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
            p = e.footerPreviousButtonLink,
            d =
              'main' +
              (s ? ' main_type_' + s : '') +
              (c ? ' main_background_' + c : '')
          return r.a.createElement(
            'div',
            { className: 'wrapper' },
            r.a.createElement(m, {
              description: a,
              lang: n,
              meta: i,
              keywords: o,
              title: l
            }),
            r.a.createElement(T, null),
            r.a.createElement('main', { className: d }, t),
            r.a.createElement(O, { nextButtonLink: u, previousButtonLink: p })
          )
        })
      S.propTypes = { children: o.a.node.isRequired }
      t.a = S
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
    },
    173: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(176), a(4)),
        o = a.n(i),
        l = function(e) {
          var t = e.children,
            a = e.column,
            n = e.extraClass,
            i = 'row ' + (n || '') + (a ? ' row_column_' + a : '')
          return r.a.createElement('div', { className: i }, t)
        }
      ;(l.propTypes = {
        children: o.a.node.isRequired,
        column: o.a.string,
        extraClass: o.a.string
      }),
        (t.a = l)
    },
    174: function(e, t, a) {
      var n = a(11),
        r = a(18),
        i = a(20),
        o = /"/g,
        l = function(e, t, a, n) {
          var r = String(i(e)),
            l = '<' + t
          return (
            '' !== a &&
              (l += ' ' + a + '="' + String(n).replace(o, '&quot;') + '"'),
            l + '>' + r + '</' + t + '>'
          )
        }
      e.exports = function(e, t) {
        var a = {}
        ;(a[e] = t(l)),
          n(
            n.P +
              n.F *
                r(function() {
                  var t = ''[e]('"')
                  return t !== t.toLowerCase() || t.split('"').length > 3
                }),
            'String',
            a
          )
      }
    },
    175: function(e, t, a) {
      'use strict'
      a(174)('fixed', function(e) {
        return function() {
          return e(this, 'tt', '', '')
        }
      })
    }
  }
])
//# sourceMappingURL=component---src-templates-blog-post-js-c5b3e8dd22f26e7ec399.js.map
