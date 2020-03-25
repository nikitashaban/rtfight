;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    146: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(155),
        l = a(148),
        o = a(150),
        c = a(157),
        s = a(147),
        u = (a(188), a(4)),
        m = a.n(u),
        p = function(e) {
          var t = e.children,
            a = e.column,
            n = e.extraClass,
            i = 'row ' + (n || '') + (a ? ' row_column_' + a : '')
          return r.a.createElement('div', { className: i }, t)
        }
      p.propTypes = {
        children: m.a.node.isRequired,
        column: m.a.string,
        extraClass: m.a.string
      }
      var d = p
      t.default = function() {
        return r.a.createElement(
          i.a,
          {
            title: 'About',
            mainType: 'centered-huge-about',
            mainBackground: 'gym',
            footerNextButtonLink: '/',
            footerPreviousButtonLink: '/'
          },
          r.a.createElement(
            l.a,
            { extraClass: 'container_about-page' },
            r.a.createElement(
              d,
              { column: '3-65', extraClass: 'pretext' },
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
                  'Большие победы начинаются с победы над собой.'
                )
              ),
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(
                  o.a,
                  null,
                  'Представляем вашему вниманию www.RTFight.com. Первый в мире спортивный интернет-портал глобального масштаба! Функциональность этого портала будет заключаться на обоюдном сотрудничестве спортсменов с менеджерами, поиске тренеров, спариг-партнеров, диетологов, катменов, массажистов и многих других нужных вам специалистов.'
                ),
                r.a.createElement(
                  o.a,
                  null,
                  'Также будет доступна функция поиска залов бокса и тренировочных баз по всему миру, где бы вы не находились, активный человек всегда увидит рейтинг в любом городе мира, сможет обменяться опытом с другими спортсменами, договориться и нанять себе тренера, перед этим увидев его рейтинг и предыдущие заслуги, опыт работы в этом виде спорта, цену занятий, а также все мельчайшие подробности!'
                )
              )
            ),
            r.a.createElement(
              d,
              { column: '3', extraClass: 'rounds' },
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(o.a, { color: 'gray' }, 'Round 01'),
                r.a.createElement(
                  c.a,
                  {
                    type: 'h3',
                    color: 'red',
                    size: 'middle',
                    weight: 'normal'
                  },
                  'Регистрация'
                ),
                r.a.createElement(
                  o.a,
                  null,
                  'Для поиска или публикации услуги - вам нужно заполнить анкету, чтобы получить доступ в личный кабинет.'
                )
              ),
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(o.a, { color: 'gray' }, 'Round 02'),
                r.a.createElement(
                  c.a,
                  {
                    type: 'h3',
                    color: 'red',
                    size: 'middle',
                    weight: 'normal'
                  },
                  'Поиск или публикация услуги'
                ),
                r.a.createElement(
                  o.a,
                  null,
                  'Вы можете опубликовать заказ или стать исполнителем. В личном кабинете это сделать очень просто.'
                )
              ),
              r.a.createElement(
                'div',
                { className: 'row__column' },
                r.a.createElement(o.a, { color: 'gray' }, 'Round 03'),
                r.a.createElement(
                  c.a,
                  {
                    type: 'h3',
                    color: 'red',
                    size: 'middle',
                    weight: 'normal'
                  },
                  'Накапливайте репутацию'
                ),
                r.a.createElement(
                  o.a,
                  null,
                  'Чем выше ваш рейтинг - тем легче искать заказы и работать на более выгодных условиях.'
                )
              )
            ),
            r.a.createElement(
              s.a,
              {
                color: 'white',
                background: 'red',
                type: 'link-button-rounded',
                size: 'default',
                href: '/contacts/'
              },
              'Зарегестрироваться'
            )
          ),
          r.a.createElement(
            s.a,
            {
              color: 'white',
              background: 'red',
              type: 'fixed-link',
              size: 'default'
            },
            'Посмотреть категории'
          )
        )
      }
    },
    147: function(e, t, a) {
      'use strict'
      var n = a(33),
        r = a.n(n),
        i = a(7),
        l = a.n(i),
        o = a(0),
        c = a.n(o),
        s = (a(163), a(4)),
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
            l()(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.children,
                a = e.type,
                n = e.color,
                r = e.background,
                i = e.size,
                l = e.extraClass,
                o = e.clickFunc,
                s = e.dataNavigationId,
                u = e.href,
                m = e.target,
                p = a ? ' button_type_' + a : '',
                d = n ? ' button_color_' + n : '',
                h = r ? ' button_background_' + r : '',
                g = i ? ' button_size_' + i : '',
                E = l || '',
                _ = m || '_self',
                f = e.popup ? this.clickPopupFunction : o,
                y = 'button' + p + d + h + g + ' ' + E,
                v = ''
              return (
                (v =
                  'object' != typeof t
                    ? 'link' === a ||
                      'link-button-rounded' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                      ? c.a.createElement('a', {
                          className: y,
                          onClick: f,
                          'data-navigation-id': s,
                          href: u,
                          target: _,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                      : c.a.createElement('button', {
                          className: y,
                          onClick: f,
                          'data-navigation-id': s,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                    : 'link' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                    ? c.a.createElement(
                        'a',
                        {
                          className: y,
                          onClick: f,
                          'data-navigation-id': s,
                          href: u,
                          target: _
                        },
                        t
                      )
                    : c.a.createElement(
                        'button',
                        { className: y, onClick: f, 'data-navigation-id': s },
                        t
                      )),
                c.a.createElement(c.a.Fragment, null, v)
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
    148: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(159), a(4)),
        l = a.n(i),
        o = function(e) {
          var t = e.children,
            a = e.type,
            n = 'container ' + (a ? ' container_type_' + a : '') + e.extraClass
          return r.a.createElement('div', { className: n }, t)
        }
      ;(o.defaultProps = { extraClass: '' }),
        (o.propTypes = { type: l.a.string, children: l.a.node.isRequired }),
        (t.a = o)
    },
    150: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(169), a(4)),
        l = a.n(i),
        o = function(e) {
          var t = e.children,
            a = e.color,
            n = 'text' + (a ? ' text_color_' + a : '')
          return r.a.createElement('p', { className: n }, t)
        }
      ;(o.propTypes = { children: l.a.node.isRequired, color: l.a.string }),
        (t.a = o)
    },
    151: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(165), a(4)),
        l = function(e) {
          var t = e.type,
            a = 'logo' + (t ? ' logo_type_' + t : '')
          return r.a.createElement('div', { className: a })
        }
      ;(l.propTypes = { type: a.n(i).a.string }), (t.a = l)
    },
    152: function(e, t, a) {
      'use strict'
      a(156)
      var n = a(0),
        r = a.n(n),
        i = (a(166), a(4)),
        l = a.n(i),
        o = function(e) {
          var t = e.children,
            a = e.name,
            n = 'icon' + (a ? ' icon_' + a : '')
          return r.a.createElement('i', { className: n }, t)
        }
      ;(o.propTypes = { name: l.a.string.isRequired, children: l.a.node }),
        (t.a = o)
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
        l = a.n(i),
        o = a(154),
        c = a(158),
        s = a.n(c)
      function u(e) {
        var t = e.description,
          a = e.lang,
          n = e.meta,
          i = e.keywords,
          l = e.title,
          c = o.data.site,
          u = t || c.siteMetadata.description
        return r.a.createElement(s.a, {
          htmlAttributes: { lang: a },
          title: l,
          titleTemplate: '%s | ' + c.siteMetadata.title,
          meta: [
            { name: 'description', content: u },
            { property: 'og:title', content: l },
            { property: 'og:description', content: u },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:creator', content: c.siteMetadata.author },
            { name: 'twitter:title', content: l },
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
          description: l.a.string,
          lang: l.a.string,
          meta: l.a.array,
          keywords: l.a.arrayOf(l.a.string),
          title: l.a.string.isRequired
        })
      var m = u,
        p = a(33),
        d = a.n(p),
        h = a(7),
        g = a.n(h),
        E = a(148),
        _ = (a(160),
        a(161),
        a(162),
        function(e) {
          var t = e.items,
            a = e.type,
            n = e.extraClass,
            i = a ? ' list_type_' + a : '',
            l = n || '',
            o = t
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
            c = 'list' + i + ' ' + l
          return r.a.createElement('ul', { className: c }, o)
        })
      _.propTypes = {
        items: l.a.array,
        type: l.a.string,
        extraClass: l.a.string
      }
      var f = _,
        y = a(147),
        v = a(149),
        k = a(164),
        w = [
          r.a.createElement(
            y.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://www.facebook.com/groups/rtfight1com',
              target: '_blank'
            },
            r.a.createElement(v.a, { icon: k.a })
          ),
          r.a.createElement(
            y.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://vk.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(v.a, { icon: k.d })
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(v.a, { icon: k.c })
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(v.a, { icon: k.e })
          ),
          r.a.createElement(
            y.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://instagram.com/rtofight',
              target: '_blank'
            },
            r.a.createElement(v.a, { icon: k.b })
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
                    r.a.createElement(f, { items: w, type: 'horizontal' })
                  )
                )
              )
            }),
            t
          )
        })(r.a.Component)
      b.propTypes = {
        items: l.a.array.isRequired,
        statusOpen: l.a.bool,
        statusNavigationOpen: l.a.func
      }
      var N = b,
        x = a(151),
        C = a(152),
        M = (a(167), a(153)),
        T = function() {
          return r.a.createElement(
            'div',
            { className: 'language-navigation' },
            r.a.createElement(
              y.a,
              { background: 'transparent', color: 'white' },
              'Ru ',
              r.a.createElement(v.a, { icon: M.b })
            )
          )
        },
        O = [
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '/contacts/' },
            'Регистрация'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '#' },
            'Войти'
          )
        ],
        R = [
          r.a.createElement(
            y.a,
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
            { type: 'link', color: 'white', href: '#' },
            'Категории'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '#' },
            'Мероприятия'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '#' },
            'Блог'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '#' },
            'Отзывы'
          ),
          r.a.createElement(
            y.a,
            { type: 'link', color: 'white', href: '/contacts/' },
            'Контакты'
          )
        ],
        z = (function(e) {
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
                          y.a,
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
                      r.a.createElement(T, null)
                    ),
                    r.a.createElement(x.a, null),
                    r.a.createElement(
                      'div',
                      { className: 'header__right' },
                      r.a.createElement(f, { items: O, type: 'horizontal' })
                    )
                  )
                ),
                r.a.createElement(N, {
                  items: R,
                  statusOpen: this.state.statusMenu,
                  handleStatusMenuOpen: this.handleStatusMenuOpen
                })
              )
            }),
            t
          )
        })(r.a.Component),
        F = (a(168), a(150)),
        L = function(e) {
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
                  r.a.createElement(v.a, { icon: M.b })
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
                  r.a.createElement(v.a, { icon: M.a }),
                  ' Назад'
                )
              : r.a.createElement(f, { items: w, type: 'horizontal' })
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
        S = (a(170),
        function(e) {
          var t = e.children,
            a = e.description,
            n = e.lang,
            i = e.meta,
            l = e.keywords,
            o = e.title,
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
              keywords: l,
              title: o
            }),
            r.a.createElement(z, null),
            r.a.createElement('main', { className: d }, t),
            r.a.createElement(L, { nextButtonLink: u, previousButtonLink: p })
          )
        })
      S.propTypes = { children: l.a.node.isRequired }
      t.a = S
    },
    157: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = (a(171), a(4)),
        l = a.n(i),
        o = function(e) {
          var t = e.type,
            a = e.size,
            n = e.color,
            i = e.shadow,
            l = e.children,
            o = e.weight,
            c = e.extraClass,
            s =
              'title' +
              (a ? ' title_size_' + a : '') +
              (n ? ' title_color_' + n : '') +
              (i ? ' title_shadow_' + i : '') +
              (o ? ' title_weight_' + o : '') +
              ' ' +
              (c || '')
          return 'h1' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h1', { className: s }, l)
              )
            : 'h2' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h2', { className: s }, l)
              )
            : 'h3' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h3', { className: s }, l)
              )
            : 'h4' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h4', { className: s }, l)
              )
            : 'h5' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h5', { className: s }, l)
              )
            : 'h6' === t
            ? r.a.createElement(
                'header',
                null,
                r.a.createElement('h6', { className: s }, l)
              )
            : void 0
        }
      ;(o.propTypes = {
        type: l.a.string.isRequired,
        size: l.a.string,
        color: l.a.string,
        shadow: l.a.string,
        weight: l.a.string,
        extraClass: l.a.string,
        children: l.a.node.isRequired
      }),
        (t.a = o)
    }
  }
])
//# sourceMappingURL=component---src-pages-about-index-js-3ea35835d953b5091a45.js.map
