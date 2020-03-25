;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    143: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(156),
        o = a(150),
        l = a(151),
        c = a(158),
        s = a(173)
      t.default = function() {
        return r.a.createElement(
          i.a,
          {
            title: 'О нас',
            mainType: 'centered-huge-about',
            mainBackground: 'gym',
            footerNextButtonLink: '/blog/',
            footerPreviousButtonLink: '/'
          },
          r.a.createElement(
            o.a,
            { extraClass: 'container_about-page' },
            r.a.createElement(
              s.a,
              { column: '2-65', extraClass: 'pretext' },
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(
                  c.a,
                  {
                    type: 'h3',
                    color: 'white',
                    size: 'large',
                    weight: 'normal'
                  },
                  'Новостной портал RTFight.com'
                )
              ),
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(
                  l.a,
                  null,
                  'Новостной интернет-портал RTFight.com - это собрание лучших материалов о боксе. Эксклюзивные новости. Только достоверная информация. Без искажения желтой прессой. Мы - на шаг впереди. У нас вы узнаете первыми о самых главных событиях в мире бокса.'
                ),
                r.a.createElement(
                  l.a,
                  null,
                  'Главная тематика новостного портала RTFight.com - бокс, и все что с ним связано. Всё о профессиональном боксе, ММА, UFC, статистика боксеров и бойцов, репортажи, обзоры соревнований, первые интервью знаменитых спортсменов и актуальные фото.'
                ),
                r.a.createElement(
                  l.a,
                  null,
                  'У нас вы найдете самые увлекательные интервью известных боксеров и рассказы об их трудовых буднях и личной жизни. Биографии, супруги, достижения и скандалы с участием известных спортсменов. Как сложилась судьба «после спорта». Кто из мировых звезд ушел в политику и кто кардинально сменил вид деятельности. На нашем портале вы можете прочитать все то, что вы хотели бы знать о мировых звездах.'
                )
              )
            ),
            r.a.createElement(
              s.a,
              { column: '4', extraClass: 'rounds' },
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(l.a, { color: 'gray' }, '01'),
                r.a.createElement(
                  c.a,
                  {
                    type: 'h3',
                    color: 'red',
                    size: 'middle',
                    weight: 'normal'
                  },
                  'Мировые события'
                ),
                r.a.createElement(
                  l.a,
                  null,
                  'Мы публикуем самую важную и свежую информацию о мировых событиях в данном виде спорта. Новости бокса профессионального и любительского. Всё об истории бокса, новости спортивных клубов, статьи о профессиональных бойцах, все о тренажерах и техниках тренировок, обзоры поединков, расписание боёв и другие материалы из мира бокса.'
                )
              ),
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(l.a, { color: 'gray' }, '02'),
                r.a.createElement(
                  c.a,
                  {
                    type: 'h3',
                    color: 'red',
                    size: 'middle',
                    weight: 'normal'
                  },
                  'Не только про бокс'
                ),
                r.a.createElement(
                  l.a,
                  null,
                  'Новостной портал RTFight.com создан для тех, кто не только интересуется боксом, но и хочет стать полноценным участником нашего информационного проекта. Совсем скоро, мы раскроем полную функциональность данного интернет-ресурса.'
                )
              ),
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(l.a, { color: 'gray' }, '03'),
                r.a.createElement(
                  c.a,
                  {
                    type: 'h3',
                    color: 'red',
                    size: 'middle',
                    weight: 'normal'
                  },
                  'Следите за нашими новостями'
                ),
                r.a.createElement(
                  l.a,
                  null,
                  'Оставайтесь с нами, подписывайтесь, следите за обновлениями и будьте в курсе самых захватывающих спортивных новостей о боксе.'
                )
              )
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
        l = a(0),
        c = a.n(l),
        s = (a(165), a(4)),
        u = a.n(s),
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
                s = e.dataNavigationId,
                u = e.href,
                m = e.target,
                p = a ? ' button_type_' + a : '',
                d = n ? ' button_color_' + n : '',
                h = r ? ' button_background_' + r : '',
                g = i ? ' button_size_' + i : '',
                E = o || '',
                _ = m || '_self',
                v = e.popup ? this.clickPopupFunction : l,
                f = 'button' + p + d + h + g + ' ' + E,
                y = ''
              return (
                (y =
                  'object' != typeof t
                    ? 'link' === a ||
                      'link-button-rounded' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                      ? c.a.createElement('a', {
                          className: f,
                          onClick: v,
                          'data-navigation-id': s,
                          href: u,
                          target: _,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                      : c.a.createElement('button', {
                          className: f,
                          onClick: v,
                          'data-navigation-id': s,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                    : 'link' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                    ? c.a.createElement(
                        'a',
                        {
                          className: f,
                          onClick: v,
                          'data-navigation-id': s,
                          href: u,
                          target: _
                        },
                        t
                      )
                    : c.a.createElement(
                        'button',
                        { className: f, onClick: v, 'data-navigation-id': s },
                        t
                      )),
                c.a.createElement(c.a.Fragment, null, y)
              )
            }),
            t
          )
        })(c.a.Component)
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
        c = a(160),
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
      var m = u,
        p = a(33),
        d = a.n(p),
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
            c = 'list' + i + ' ' + o
          return r.a.createElement('ul', { className: c }, l)
        })
      _.propTypes = {
        items: o.a.array,
        type: o.a.string,
        extraClass: o.a.string
      }
      var v = _,
        f = a(149),
        y = a(152),
        k = a(166),
        w = [
          r.a.createElement(
            f.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://www.facebook.com/groups/rtfight1com',
              target: '_blank'
            },
            r.a.createElement(y.a, { icon: k.a })
          ),
          r.a.createElement(
            f.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://vk.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(y.a, { icon: k.d })
          ),
          r.a.createElement(
            f.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(y.a, { icon: k.c })
          ),
          r.a.createElement(
            f.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(y.a, { icon: k.e })
          ),
          r.a.createElement(
            f.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://instagram.com/rtofight',
              target: '_blank'
            },
            r.a.createElement(y.a, { icon: k.b })
          )
        ],
        b = (function(e) {
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
                    r.a.createElement(v, { items: w, type: 'horizontal' })
                  )
                )
              )
            }),
            t
          )
        })(r.a.Component)
      b.propTypes = {
        items: o.a.array.isRequired,
        statusOpen: o.a.bool,
        statusNavigationOpen: o.a.func
      }
      var N = b,
        x = a(153),
        C = a(154),
        T = [
          r.a.createElement(
            f.a,
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
            f.a,
            { type: 'link', color: 'white', href: '/' },
            'Главная'
          ),
          r.a.createElement(
            f.a,
            { type: 'link', color: 'white', href: '/about/' },
            'О сервисе'
          ),
          r.a.createElement(
            f.a,
            { type: 'link', color: 'white', href: '/blog/' },
            'Блог'
          ),
          r.a.createElement(
            f.a,
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
                          f.a,
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
                  items: T,
                  statusOpen: this.state.statusMenu,
                  handleStatusMenuOpen: this.handleStatusMenuOpen
                })
              )
            }),
            t
          )
        })(r.a.Component),
        O = (a(169), a(151)),
        R = a(159),
        z = function(e) {
          var t = e.nextButtonLink,
            a = e.previousButtonLink,
            n = t
              ? r.a.createElement(
                  f.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: t
                  },
                  'Далее ',
                  r.a.createElement(y.a, { icon: R.b })
                )
              : '',
            i = a
              ? r.a.createElement(
                  f.a,
                  {
                    background: 'transparent',
                    color: 'white',
                    type: 'link',
                    href: a
                  },
                  r.a.createElement(y.a, { icon: R.a }),
                  ' Назад'
                )
              : r.a.createElement(v, { items: w, type: 'horizontal' })
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
            c = e.mainType,
            s = e.mainBackground,
            u = e.footerNextButtonLink,
            p = e.footerPreviousButtonLink,
            d =
              'main' +
              (c ? ' main_type_' + c : '') +
              (s ? ' main_background_' + s : '')
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
            r.a.createElement(M, null),
            r.a.createElement('main', { className: d }, t),
            r.a.createElement(z, { nextButtonLink: u, previousButtonLink: p })
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
    }
  }
])
//# sourceMappingURL=component---src-pages-about-index-js-8fb24fad387d0d14cc26.js.map
