;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    147: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(156),
        o = a(150),
        l = a(151),
        s = a(158),
        c = (a(197), a(198), a(80), a(203)),
        u = a.n(c),
        m = (a(39), a(157), a(181), a(204)),
        p = a.n(m),
        d = a(33),
        h = a.n(d),
        g = a(7),
        f = a.n(g),
        y = a(4),
        E = a.n(y),
        _ = a(149),
        b = (a(205),
        (function(e) {
          function t(t) {
            var a
            return (
              ((a = e.call(this, t) || this).state = {
                sendForm: !1,
                btnStatus: 'default',
                formStatusSend: !1
              }),
              (a.sendEmail = a.sendEmail.bind(h()(a))),
              (a.handleSubmit = a.handleSubmit.bind(h()(a))),
              a
            )
          }
          f()(t, e)
          var a = t.prototype
          return (
            (a.sendEmail = (function() {
              var e = p()(
                u.a.mark(function e(t) {
                  var a
                  return u.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(a = {
                              createdAt: new Date(),
                              formName: this.props.name,
                              pageUrl: window.location.href,
                              data: Object.assign({}, t)
                            }),
                              a && this.setState({ formStatusSend: !0 })
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )
              return function(t) {
                return e.apply(this, arguments)
              }
            })()),
            (a.handleSubmit = function(e) {
              e.preventDefault()
              var t = {},
                a = e.target.querySelectorAll('input,textarea'),
                n = Array.isArray(a),
                r = 0
              for (a = n ? a : a[Symbol.iterator](); ; ) {
                var i
                if (n) {
                  if (r >= a.length) break
                  i = a[r++]
                } else {
                  if ((r = a.next()).done) break
                  i = r.value
                }
                var o = i
                t[o.name] = o.value
              }
              this.sendEmail(t)
            }),
            (a.render = function() {
              var e = this.props.elements
                  ? this.props.elements.map(function(e, t) {
                      return r.a.createElement(
                        'div',
                        { className: 'form__item', key: t },
                        e
                      )
                    })
                  : '',
                t = this.props.buttonText || 'Apply',
                a = this.props.formTerms
                  ? r.a.createElement(
                      l.a,
                      { color: 'white', size: 'small' },
                      'By clicking Apply, you agree to our Terms, Privacy Policy, Cookie Policy.'
                    )
                  : '',
                n =
                  'form' +
                  (this.props.formStyle
                    ? ' form_style_' + this.props.formStyle
                    : ''),
                i = r.a.createElement(
                  'form',
                  {
                    className: n,
                    ref: 'form',
                    onSubmit: this.handleSubmit,
                    name: this.props.name
                  },
                  e,
                  a,
                  r.a.createElement(
                    _.a,
                    {
                      type: this.props.buttonType,
                      size: this.props.buttonSize,
                      color: this.props.buttonColor,
                      background: this.props.buttonBackground
                    },
                    t
                  )
                ),
                c = this.props.formContainer
                  ? r.a.createElement(
                      o.a,
                      {
                        type: 'form',
                        extraClass: this.props.formContainerExtraClass
                      },
                      r.a.createElement(
                        s.a,
                        {
                          type: 'h2',
                          color: 'white',
                          size: 'little-less',
                          extraClass: 'contest__header'
                        },
                        this.props.formTitle
                      ),
                      i
                    )
                  : r.a.createElement(r.a.Fragment, null, i)
              return this.state.formStatusSend
                ? r.a.createElement(
                    o.a,
                    { type: 'form' },
                    r.a.createElement(
                      'div',
                      { className: 'form__send' },
                      r.a.createElement(
                        s.a,
                        {
                          type: 'h3',
                          color: 'white',
                          size: 'middle',
                          weight: 'normal'
                        },
                        'Thank You'
                      ),
                      r.a.createElement(
                        l.a,
                        null,
                        'Please, check the email and follow the instructions.'
                      )
                    )
                  )
                : c
            }),
            t
          )
        })(r.a.Component))
      ;(b.defaultProps = {
        formContainer: !1,
        formContainerExtraClass: '',
        formTitle: ''
      }),
        (b.propTypes = {
          elements: E.a.array.isRequired,
          buttonType: E.a.string,
          buttonSize: E.a.string,
          buttonColor: E.a.string,
          buttonBackground: E.a.string,
          buttonText: E.a.oneOfType([E.a.string, E.a.object]),
          formTerms: E.a.bool,
          name: E.a.string,
          formContainer: E.a.bool,
          formContainerExtraClass: E.a.string,
          formTitle: E.a.oneOfType([E.a.string, E.a.object]),
          formStyle: E.a.string
        })
      var v = b,
        k = a(153),
        w = a(154),
        N = (a(206),
        function(e) {
          var t = e.text,
            a = e.idElement,
            n = e.styling,
            i = 'label' + (n ? ' label_styling_' + n : '')
          return r.a.createElement('label', { className: i, htmlFor: a }, t)
        })
      N.propTypes = {
        text: E.a.oneOfType([E.a.string, E.a.object]),
        idElement: E.a.string.isRequired,
        styling: E.a.string
      }
      var T = N,
        C = (a(207),
        function(e) {
          var t = e.type,
            a = e.withIcon,
            n = e.icon,
            i = e.iconPosition,
            o = e.placeholder,
            l = e.label,
            s = e.name,
            c = e.styling,
            u = e.onChangeFunc,
            m = e.requiredInput,
            p = t ? ' input_type_' + t : '',
            d = 'white' !== c ? 'default' : c,
            h = a
              ? r.a.createElement(w.a, {
                  name: n,
                  type: 'default',
                  size: 'default',
                  color: d
                })
              : '',
            g = l
              ? r.a.createElement(T, {
                  idElement: s,
                  text: l,
                  styling: 'default'
                })
              : '',
            f =
              'input' +
              p +
              (a ? ' input_with-icon' : '') +
              (l ? ' input_with-label' : '') +
              (c ? ' input_styling_' + c : '') +
              (i ? ' input_with-icon_position_' + i : ''),
            y = m || !0
          return r.a.createElement(
            'div',
            { className: f },
            g,
            h,
            r.a.createElement('input', {
              type: t,
              className: 'input__element',
              placeholder: o,
              name: s,
              id: s,
              onChange: u,
              required: y
            })
          )
        })
      C.propTypes = {
        type: E.a.string.isRequired,
        withIcon: E.a.bool,
        icon: E.a.string,
        placeholder: E.a.string,
        label: E.a.oneOfType([E.a.string, E.a.object]),
        name: E.a.string,
        styling: E.a.string,
        requiredInput: E.a.bool
      }
      var x = C,
        S = [
          r.a.createElement(x, {
            type: 'text',
            placeholder: 'Введите ваше имя',
            name: 'name',
            styling: 'bordered'
          }),
          r.a.createElement(x, {
            type: 'email',
            placeholder: 'Ваш e-mail',
            name: 'email',
            styling: 'bordered'
          })
        ]
      t.default = function() {
        return r.a.createElement(
          i.a,
          {
            title: 'Контакты - Новостной портал RTFight.com',
            mainType: 'centered-huge-about',
            mainBackground: 'thai',
            footerNextButtonLink: '/',
            footerPreviousButtonLink: '/blog/'
          },
          r.a.createElement(
            o.a,
            { extraClass: 'container_contacts-page' },
            r.a.createElement(k.a, { type: 'circle' }),
            r.a.createElement(
              s.a,
              { type: 'h3', color: 'white', size: 'middle', weight: 'normal' },
              'Подпишись на самые актуальные новости мира бокса и будь в курсе первым!'
            ),
            r.a.createElement(v, {
              elements: S,
              buttonType: 'rounded',
              buttonSize: 'default',
              buttonColor: 'white',
              buttonBackground: 'red',
              buttonText: 'Подписаться',
              name: 'subscribe',
              formStyle: 'horizontal'
            }),
            r.a.createElement(
              l.a,
              null,
              'Новостной интернет-портал RTFight.com первым публикует самые интересные, достоверные и свежие новости из мира бокса. Не надо тратить время на поиски интересной статьи про бокс. Все самое лучшее – здесь. Всё о профессиональном боксе, ММА, UFC. Эксклюзивные новости. История бокса. Наука о боксе. Лучшие интервью. Обзоры соревнований. Фотоотчеты и мероприятия. Если ты хочешь всегда быть первым в курсе всех новостей бокса, тогда подписывайся на наши новости и получай только самое интересное себе на почту. Только достоверная информация от лучших спортивных информационных агентств и изданий. Подписывайся и читай самые свежие новости первым! Будем на связи!'
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
                y = m || '_self',
                E = e.popup ? this.clickPopupFunction : l,
                _ = 'button' + p + d + h + g + ' ' + f,
                b = ''
              return (
                (b =
                  'object' != typeof t
                    ? 'link' === a ||
                      'link-button-rounded' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                      ? s.a.createElement('a', {
                          className: _,
                          onClick: E,
                          'data-navigation-id': c,
                          href: u,
                          target: y,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                      : s.a.createElement('button', {
                          className: _,
                          onClick: E,
                          'data-navigation-id': c,
                          dangerouslySetInnerHTML: { __html: t }
                        })
                    : 'link' === a ||
                      'bordered-link' === a ||
                      'fixed-link' === a
                    ? s.a.createElement(
                        'a',
                        {
                          className: _,
                          onClick: E,
                          'data-navigation-id': c,
                          href: u,
                          target: y
                        },
                        t
                      )
                    : s.a.createElement(
                        'button',
                        { className: _, onClick: E, 'data-navigation-id': c },
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
        h = a(7),
        g = a.n(h),
        f = a(150),
        y = (a(162),
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
      y.propTypes = {
        items: o.a.array,
        type: o.a.string,
        extraClass: o.a.string
      }
      var E = y,
        _ = a(149),
        b = a(152),
        v = a(166),
        k = [
          r.a.createElement(
            _.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://www.facebook.com/groups/rtfight1com',
              target: '_blank'
            },
            r.a.createElement(b.a, { icon: v.a })
          ),
          r.a.createElement(
            _.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://vk.com/rtfight_com',
              target: '_blank'
            },
            r.a.createElement(b.a, { icon: v.d })
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(b.a, { icon: v.c })
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '#', target: '_blank' },
            r.a.createElement(b.a, { icon: v.e })
          ),
          r.a.createElement(
            _.a,
            {
              type: 'link',
              color: 'white',
              href: 'https://instagram.com/rtofight',
              target: '_blank'
            },
            r.a.createElement(b.a, { icon: v.b })
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
                  ? r.a.createElement(E, { type: 'horizontal', items: e })
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
                    r.a.createElement(E, { items: k, type: 'horizontal' })
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
        T = a(153),
        C = a(154),
        x = [
          r.a.createElement(
            _.a,
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
            { type: 'link', color: 'white', href: '/blog/' },
            'Блог'
          ),
          r.a.createElement(
            _.a,
            { type: 'link', color: 'white', href: '/contacts/' },
            'Контакты'
          )
        ],
        S = (function(e) {
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
                      )
                    ),
                    r.a.createElement(T.a, null)
                  )
                ),
                r.a.createElement(N, {
                  items: x,
                  statusOpen: this.state.statusMenu,
                  handleStatusMenuOpen: this.handleStatusMenuOpen
                })
              )
            }),
            t
          )
        })(r.a.Component),
        z = (a(169), a(151)),
        O = a(159),
        M = function(e) {
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
                  r.a.createElement(b.a, { icon: O.b })
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
                  r.a.createElement(b.a, { icon: O.a }),
                  ' Назад'
                )
              : r.a.createElement(E, { items: k, type: 'horizontal' })
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
            r.a.createElement(S, null),
            r.a.createElement('main', { className: d }, t),
            r.a.createElement(M, { nextButtonLink: u, previousButtonLink: p })
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
//# sourceMappingURL=component---src-pages-contacts-index-js-9bfe059008f41727d5f2.js.map
