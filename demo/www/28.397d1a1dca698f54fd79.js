(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{fSmE:function(t,o,a){"use strict";a.r(o),a.d(o,"ion_backdrop",(function(){return p}));var n=a("rePB"),e=a("1OyB"),i=a("vuIU"),r=a("QX1p"),c=a("u799"),s=a("rxGk"),p=function(){function t(o){Object(e.a)(this,t),Object(r.l)(this,o),this.blocker=s.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(r.e)(this,"ionBackdropTap",7)}return Object(i.a)(t,[{key:"connectedCallback",value:function(){this.stopPropagation&&this.blocker.block()}},{key:"disconnectedCallback",value:function(){this.blocker.unblock()}},{key:"onMouseDown",value:function(t){this.emitTap(t)}},{key:"emitTap",value:function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}},{key:"render",value:function(){var t,o=Object(c.b)(this);return Object(r.j)(r.b,{tabindex:"-1",class:(t={},Object(n.a)(t,o,!0),Object(n.a)(t,"backdrop-hide",!this.visible),Object(n.a)(t,"backdrop-no-tappable",!this.tappable),t)})}}]),t}();p.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);