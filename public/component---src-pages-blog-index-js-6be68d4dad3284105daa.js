(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},DDGk:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);a("fNMx");t.a=function(e){var t=e.children,a=e.column,n=e.extraClass,i="row "+(n||"")+(a?" row_column_"+a:"");return r.a.createElement("div",{className:i},t)}},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),l=/"/g,c=function(e,t,a,n){var r=String(i(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},YZWa:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return b}));a("a1Th"),a("Btvt"),a("I5cv"),a("0mN4"),a("f3/d");var n=a("q1tI"),r=a.n(n),i=a("I/Ru"),l=a("dE6H"),c=a("a+ZR"),o=a("DDGk"),s=(a("tUrg"),a("jCsl"),a("FT44")),u=a("5Vy0"),m=function(e){var t=e.thumbnail,a=e.category,n=e.date,i=e.title,l=e.link,o=e.text,m=o?r.a.createElement(u.a,null,o):"";return r.a.createElement("article",{className:"blog-preview"},r.a.createElement("img",{src:t,alt:i,className:"blog-preview__thumbnail"}),r.a.createElement("div",{className:"blog-preview__meta"},r.a.createElement(s.a,{color:"white",background:"red",type:"rounded",size:"middle"},a),r.a.createElement(u.a,{color:"gray",size:"middle"},n)),r.a.createElement("div",{className:"blog-preview__content"},r.a.createElement(c.a,{type:"h2",color:"white",weight:"normal",size:"middle"},r.a.createElement(s.a,{type:"link",href:l,color:"white"},i)),m))},g=a("wHSu"),d=a("IP2g");a("IEoI");function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var t,a;a=e,(t=u).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n;n=u;function u(t){var a;return(a=e.call(this,t)||this).state={allData:!1,data:!1,countPage:0,currentNumber:1},a.buttonPrevCLick=a.buttonPrevCLick.bind(h(a)),a.buttonNextCLick=a.buttonNextCLick.bind(h(a)),a}var p=u.prototype;return p.componentDidMount=function(){var e=this.props.data.allWordpressPost.edges;this.setState({allData:e,data:this.getDataPages(e,0,3),countPage:Math.ceil(e.length/3)})},p.getDataPages=function(e,t,a){return e.slice(t,t+a)},p.buttonPrevCLick=function(){var e=this.state.currentNumber-1,t=!1;e<=1&&(e=1,t=this.getDataPages(this.state.allData,0,3)),t=this.getDataPages(this.state.allData,3*(e-1),3),this.setState({currentNumber:e,data:t})},p.buttonNextCLick=function(){var e,t=this.state.currentNumber+1;t>=this.state.countPage&&(t=this.state.countPage),e=this.getDataPages(this.state.allData,3*(t-1),3),this.setState({currentNumber:t,data:e})},p.render=function(){var e=this.state.data;if(console.log(e),!1!==e){var t=!!e[0]&&e[0].node,a=!!e[1]&&e[1].node,n=!!e[2]&&e[2].node,u=t?r.a.createElement(m,{category:t.categories[0].name,date:t.date,link:"/"+t.slug,thumbnail:t.featured_media&&t.featured_media.localFile.childImageSharp.fixed.src,title:t.title}):"",h=a?r.a.createElement(m,{category:a.categories[0].name,date:a.date,link:"/"+a.slug,thumbnail:a.featured_media&&a.featured_media.localFile.childImageSharp.fixed.src,title:a.title,text:a.excerpt}):"",p=n?r.a.createElement(m,{category:a.categories[0].name,date:n.date,link:"/"+n.slug,thumbnail:n.featured_media.localFile&&n.featured_media.localFile.childImageSharp.fixed.src,title:n.title,text:n.excerpt}):"";return r.a.createElement(i.a,{title:"Блог",mainType:"centered-huge-about",mainBackground:"gym",footerNextButtonLink:"/contacts/",footerPreviousButtonLink:"/about/"},r.a.createElement(l.a,{extraClass:"container_blog-page"},r.a.createElement(c.a,{type:"h1",color:"white",size:"big-large",weight:"normal"},"Блог"),r.a.createElement(o.a,{column:"2",extraClass:"blog"},r.a.createElement("div",{className:"row__column"},u),r.a.createElement("div",{className:"row__column"},r.a.createElement(o.a,{column:"2",extraClass:"blog-small"},r.a.createElement("div",{className:"row__column"},h),r.a.createElement("div",{className:"row__column"},p)))),r.a.createElement("div",{className:"blog-pagination"},r.a.createElement(s.a,{type:"link",extraClass:"button-prev",clickFunc:this.buttonPrevCLick},r.a.createElement(d.a,{icon:g.a})),r.a.createElement("div",{className:"blog-pagination__text"},r.a.createElement("p",{className:"blog-pagination__number current"},this.state.currentNumber),r.a.createElement("p",{className:"blog-pagination__number separator"},"/"),r.a.createElement("p",{className:"blog-pagination__number all"},this.state.countPage)),r.a.createElement(s.a,{type:"link",extraClass:"button-next",clickFunc:this.buttonNextCLick},r.a.createElement(d.a,{icon:g.b})))))}return r.a.createElement(i.a,{title:"About",mainType:"centered-huge-about",mainBackground:"gym",footerNextButtonLink:"/",footerPreviousButtonLink:"/"},r.a.createElement(l.a,{extraClass:"container_blog-page"},r.a.createElement(c.a,{type:"h1",color:"white",size:"big-large",weight:"normal"},"Loading...")))},u}(n.Component),b=(t.default=p,"1581967989")},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-6be68d4dad3284105daa.js.map