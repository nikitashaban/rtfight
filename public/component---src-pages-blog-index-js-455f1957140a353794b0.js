;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    148: function(e, t, a) {
      'use strict'
      a.r(t)
      a(175), a(157)
      var n = a(33),
        r = a.n(n),
        i = a(7),
        o = a.n(i),
        l = a(0),
        s = a.n(l),
        c = a(156),
        u = a(150),
        m = a(158),
        p = a(173),
        d = (a(194), a(195), a(4)),
        g = a.n(d),
        h = a(149),
        f = a(151),
        v = function(e) {
          var t = e.thumbnail,
            a = e.category,
            n = e.date,
            r = e.title,
            i = e.link,
            o = e.text,
            l = o ? s.a.createElement(f.a, null, o) : ''
          return s.a.createElement(
            'article',
            { className: 'blog-preview' },
            s.a.createElement('img', {
              src: t,
              alt: r,
              className: 'blog-preview__thumbnail'
            }),
            s.a.createElement(
              'div',
              { className: 'blog-preview__meta' },
              s.a.createElement(
                h.a,
                {
                  color: 'white',
                  background: 'red',
                  type: 'rounded',
                  size: 'middle'
                },
                a
              ),
              s.a.createElement(f.a, { color: 'gray', size: 'middle' }, n)
            ),
            s.a.createElement(
              'div',
              { className: 'blog-preview__content' },
              s.a.createElement(
                m.a,
                {
                  type: 'h2',
                  color: 'white',
                  weight: 'normal',
                  size: 'middle'
                },
                s.a.createElement(
                  h.a,
                  { type: 'link', href: i, color: 'white' },
                  r
                )
              ),
              l
            )
          )
        }
      v.propTypes = {
        thumbnail: g.a.string,
        category: g.a.string,
        date: g.a.string,
        title: g.a.string,
        link: g.a.string,
        text: g.a.string
      }
      var _ = v,
        E = a(159),
        b = a(152)
      a(196)
      a.d(t, 'pageQuery', function() {
        return k
      })
      var y = (function(e) {
          function t(t) {
            var a
            return (
              ((a = e.call(this, t) || this).state = {
                allData: !1,
                data: !1,
                countPage: 0,
                currentNumber: 1
              }),
              (a.buttonPrevCLick = a.buttonPrevCLick.bind(r()(a))),
              (a.buttonNextCLick = a.buttonNextCLick.bind(r()(a))),
              a
            )
          }
          o()(t, e)
          var a = t.prototype
          return (
            (a.componentDidMount = function() {
              var e = this.props.data.allWordpressPost.edges
              this.setState({
                allData: e,
                data: this.getDataPages(e, 0, 3),
                countPage: Math.ceil(e.length / 3)
              })
            }),
            (a.getDataPages = function(e, t, a) {
              return e.slice(t, t + a)
            }),
            (a.buttonPrevCLick = function() {
              var e = this.state.currentNumber - 1,
                t = !1
              e <= 1 &&
                ((e = 1), (t = this.getDataPages(this.state.allData, 0, 3))),
                (t = this.getDataPages(this.state.allData, 3 * (e - 1), 3)),
                this.setState({ currentNumber: e, data: t })
            }),
            (a.buttonNextCLick = function() {
              var e,
                t = this.state.currentNumber + 1
              t >= this.state.countPage && (t = this.state.countPage),
                (e = this.getDataPages(this.state.allData, 3 * (t - 1), 3)),
                this.setState({ currentNumber: t, data: e })
            }),
            (a.render = function() {
              var e = this.state.data
              if ((console.log(e), !1 !== e)) {
                var t = !!e[0] && e[0].node,
                  a = !!e[1] && e[1].node,
                  n = !!e[2] && e[2].node,
                  r = t
                    ? s.a.createElement(_, {
                        category: t.categories[0].name,
                        date: t.date,
                        link: '/' + t.slug,
                        thumbnail:
                          t.featured_media.localFile.childImageSharp.fixed.src,
                        title: t.title
                      })
                    : '',
                  i = a
                    ? s.a.createElement(_, {
                        category: a.categories[0].name,
                        date: a.date,
                        link: '/' + a.slug,
                        thumbnail:
                          a.featured_media.localFile.childImageSharp.fixed.src,
                        title: a.title,
                        text: a.excerpt
                      })
                    : '',
                  o = n
                    ? s.a.createElement(_, {
                        category: a.categories[0].name,
                        date: n.date,
                        link: '/' + n.slug,
                        thumbnail:
                          n.featured_media.localFile.childImageSharp.fixed.src,
                        title: n.title,
                        text: n.excerpt
                      })
                    : ''
                return s.a.createElement(
                  c.a,
                  {
                    title: 'Блог',
                    mainType: 'centered-huge-about',
                    mainBackground: 'gym',
                    footerNextButtonLink: '/contacts/',
                    footerPreviousButtonLink: '/about/'
                  },
                  s.a.createElement(
                    u.a,
                    { extraClass: 'container_blog-page' },
                    s.a.createElement(
                      m.a,
                      {
                        type: 'h1',
                        color: 'white',
                        size: 'big-large',
                        weight: 'normal'
                      },
                      'Блог'
                    ),
                    s.a.createElement(
                      p.a,
                      { column: '2', extraClass: 'blog' },
                      s.a.createElement('div', { className: 'row__column' }, r),
                      s.a.createElement(
                        'div',
                        { className: 'row__column' },
                        s.a.createElement(
                          p.a,
                          { column: '2', extraClass: 'blog-small' },
                          s.a.createElement(
                            'div',
                            { className: 'row__column' },
                            i
                          ),
                          s.a.createElement(
                            'div',
                            { className: 'row__column' },
                            o
                          )
                        )
                      )
                    ),
                    s.a.createElement(
                      'div',
                      { className: 'blog-pagination' },
                      s.a.createElement(
                        h.a,
                        {
                          type: 'link',
                          extraClass: 'button-prev',
                          clickFunc: this.buttonPrevCLick
                        },
                        s.a.createElement(b.a, { icon: E.a })
                      ),
                      s.a.createElement(
                        'div',
                        { className: 'blog-pagination__text' },
                        s.a.createElement(
                          'p',
                          { className: 'blog-pagination__number current' },
                          this.state.currentNumber
                        ),
                        s.a.createElement(
                          'p',
                          { className: 'blog-pagination__number separator' },
                          '/'
                        ),
                        s.a.createElement(
                          'p',
                          { className: 'blog-pagination__number all' },
                          this.state.countPage
                        )
                      ),
                      s.a.createElement(
                        h.a,
                        {
                          type: 'link',
                          extraClass: 'button-next',
                          clickFunc: this.buttonNextCLick
                        },
                        s.a.createElement(b.a, { icon: E.b })
                      )
                    )
                  )
                )
              }
              return s.a.createElement(
                c.a,
                {
                  title: 'About',
                  mainType: 'centered-huge-about',
                  mainBackground: 'gym',
                  footerNextButtonLink: '/',
                  footerPreviousButtonLink: '/'
                },
                s.a.createElement(
                  u.a,
                  { extraClass: 'container_blog-page' },
                  s.a.createElement(
                    m.a,
                    {
                      type: 'h1',
                      color: 'white',
                      size: 'big-large',
                      weight: 'normal'
                    },
                    'Loading...'
                  )
                )
              )
            }),
            t
          )
        })(l.Component),
        k = ((t.default = y), '1581967989')
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
                g = r ? ' button_background_' + r : '',
                h = i ? ' button_size_' + i : '',
                f = o || '',
                v = m || '_self',
                _ = e.popup ? this.clickPopupFunction : l,
                E = 'button' + p + d + g + h + ' ' + f,
                b = ''
              return (
                (b =
                  'object' != typeof t
                    ? 'link' === a ||
                      'link-button-rounded' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                      ? s.a.createElement('a', {
                          className: E,
                          onClick: _,
                          'data-navigation-id': c,
                          href: u,
                          target: v,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                      : s.a.createElement('button', {
                          className: E,
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
                          className: E,
                          onClick: _,
                          'data-navigation-id': c,
                          href: u,
                          target: v
                        },
                        t
                      )
                    : s.a.createElement(
                        'button',
                        { className: E, onClick: _, 'data-navigation-id': c },
                        t
                      )),
                s.a.createElement(s.a.Fragment, null, b)
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
        g = a(7),
        h = a.n(g),
        f = a(150),
        v = (a(162),
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
      v.propTypes = {
        items: o.a.array,
        type: o.a.string,
        extraClass: o.a.string
      }
      var _ = v,
        E = a(149),
        b = a(152),
        y = a(166),
        k = [
          r.a.createElement(
            E.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://www.facebook.com/groups/rtfight1com',
              target: '_blank'
            },
            r.a.createElement(b.a, { icon: y.a })
          ),
          r.a.createElement(
            E.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://vk.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(b.a, { icon: y.c })
          ),
          r.a.createElement(
            E.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://instagram.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(b.a, { icon: y.b })
          )
        ],
        N = (function(e) {
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
                    r.a.createElement(_, { items: k, type: 'horizontal' })
                  )
                )
              )
            }),
            t
          )
        })(r.a.Component)
      N.propTypes = {
        items: o.a.array.isRequired,
        statusOpen: o.a.bool,
        statusNavigationOpen: o.a.func
      }
      var w = N,
        x = a(153),
        C = a(154),
        P = [
          r.a.createElement(
            E.a,
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
            E.a,
            { type: 'link', color: 'white', href: '/' },
            'Главная'
          ),
          r.a.createElement(
            E.a,
            { type: 'link', color: 'white', href: '/about/' },
            'О сервисе'
          ),
          r.a.createElement(
            E.a,
            { type: 'link', color: 'white', href: '/blog/' },
            'Блог'
          ),
          r.a.createElement(
            E.a,
            { type: 'link', color: 'white', href: '/contacts/' },
            'Контакты'
          )
        ],
        L = (function(e) {
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
                          E.a,
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
                r.a.createElement(w, {
                  items: P,
                  statusOpen: this.state.statusMenu,
                  handleStatusMenuOpen: this.handleStatusMenuOpen
                })
              )
            }),
            t
          )
        })(r.a.Component),
        M = (a(169), a(151)),
        S = a(159),
        T = function(e) {
          var t = e.nextButtonLink,
            a = e.previousButtonLink,
            n = t
              ? r.a.createElement(
                  E.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: t
                  },
                  'Далее ',
                  r.a.createElement(b.a, { icon: S.b })
                )
              : '',
            i = a
              ? r.a.createElement(
                  E.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: a
                  },
                  r.a.createElement(b.a, { icon: S.a }),
                  ' Назад'
                )
              : r.a.createElement(_, { items: k, type: 'horizontal' })
          return r.a.createElement(
            'footer',
            { className: 'footer' },
            r.a.createElement(
              f.a,
              null,
              r.a.createElement('div', { className: 'footer_left' }, i),
              r.a.createElement(
                M.a,
                null,
                '© Все права защищены. RTFight.com - 2019'
              ),
              r.a.createElement('div', { className: 'footer_right' }, n)
            )
          )
        },
        z = (a(171),
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
            r.a.createElement(L, null),
            r.a.createElement('main', { className: d }, t),
            r.a.createElement(T, { nextButtonLink: u, previousButtonLink: p })
          )
        })
      z.propTypes = { children: o.a.node.isRequired }
      t.a = z
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
    },
    194: function(e, t, a) {
      'use strict'
      a(174)('link', function(e) {
        return function(t) {
          return e(this, 'a', 'href', t)
        }
      })
    }
  }
])
//# sourceMappingURL=component---src-pages-blog-index-js-455f1957140a353794b0.js.map
