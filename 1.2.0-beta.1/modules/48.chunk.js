webpackJsonp([48],{1904:function(e,l,a){"use strict";var n=this&&this.__decorate||function(e,l,a,n){var t,s=arguments.length,o=s<3?l:null===n?n=Object.getOwnPropertyDescriptor(l,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,l,a,n);else for(var r=e.length-1;r>=0;r--)(t=e[r])&&(o=(s<3?t(o):s>3?t(l,a,o):t(l,a))||o);return s>3&&o&&Object.defineProperty(l,a,o),o},t=this&&this.__metadata||function(e,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,l)};Object.defineProperty(l,"__esModule",{value:!0});var s=a(0),o=a(19),r=a(266),c=a(144),i=a(267),p=a(1906),b=a(1905),d=[b.CssLabelsComponent,p.CssStaticTextComponent],m=[{path:"**",component:i.DocumentationCategoryComponent,data:{category:c.ResolverService.resolveCategoryData(c.DocumentationPage.Css,"Labels")}}],u=function(){function e(e,l){l.registerResolver(e)}return e}();u=n([s.NgModule({imports:[r.DocumentationComponentsModule,o.RouterModule.forChild(m)],exports:d,declarations:d,entryComponents:d}),t("design:paramtypes",[s.ComponentFactoryResolver,c.ResolverService])],u),l.CssLabelsModule=u},1905:function(e,l,a){"use strict";var n=this&&this.__decorate||function(e,l,a,n){var t,s=arguments.length,o=s<3?l:null===n?n=Object.getOwnPropertyDescriptor(l,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,l,a,n);else for(var r=e.length-1;r>=0;r--)(t=e[r])&&(o=(s<3?t(o):s>3?t(l,a,o):t(l,a))||o);return s>3&&o&&Object.defineProperty(l,a,o),o};Object.defineProperty(l,"__esModule",{value:!0});var t=a(0),s=a(265),o=function(){function e(){this.htmlCode1=a(2883),this.htmlCode2=a(2884),this.codepenSnippet=a(2272),this.codepen={html:this.codepenSnippet}}return e}();o=n([t.Component({selector:"uxd-css-labels-labels",template:a(2273)}),s.DocumentationSectionComponent("CssLabelsComponent")],o),l.CssLabelsComponent=o},1906:function(e,l,a){"use strict";var n=this&&this.__decorate||function(e,l,a,n){var t,s=arguments.length,o=s<3?l:null===n?n=Object.getOwnPropertyDescriptor(l,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,l,a,n);else for(var r=e.length-1;r>=0;r--)(t=e[r])&&(o=(s<3?t(o):s>3?t(l,a,o):t(l,a))||o);return s>3&&o&&Object.defineProperty(l,a,o),o};Object.defineProperty(l,"__esModule",{value:!0});var t=a(0),s=a(265),o=function(){function e(){this.htmlCode=a(2885),this.codepen={html:this.htmlCode}}return e}();o=n([t.Component({selector:"uxd-css-labels-static-text",template:a(2274)}),s.DocumentationSectionComponent("CssStaticTextComponent")],o),l.CssStaticTextComponent=o},2272:function(e,l){e.exports='<div class="m-t-lg m-l-lg">\n    <span class="label label-primary m-r-sm">Label Primary</span>\n    <span class="label label-accent m-r-sm">Label Accent</span>\n    <span class="label label-grey4 m-r-sm">Label Grey4</span>\n</div>\n<div class="m-t-lg m-l-lg">\n    <span class="label label-outline-alternate2 m-r-sm">Outline Label Alternative2</span>\n    <span class="label label-outline-alternate3 m-r-sm">Outline Label Alternative3</span>\n    <span class="label label-outline-grey4">Outline Label Grey4</span>\n</div>\n<div class="m-t-lg m-l-lg">\n    <span class="label label-ok m-r-sm">Label OK</span>\n    <span class="label label-warning m-r-sm">Label Warning</span>\n    <span class="label label-critical">Label Critical</span>\n</div>\n<div class="m-t-lg m-l-lg">\n    <span class="label flat-edge-right label-accent m-r-sm">9 hits</span>\n    <span class="label flat-edge-right label-primary m-r-sm">400 hits</span>\n    <span class="label flat-edge-right label-outline-alternate2">92 hits</span>\n</div>\n<div class="m-t-lg m-l-lg">\n    <span class="label flat-edge-left label-accent m-r-sm">9 hits</span>\n    <span class="label flat-edge-left label-primary m-r-sm">400 hits</span>\n    <span class="label flat-edge-left label-outline-alternate2">92 hits</span>\n</div>'},2273:function(e,l){e.exports='<p>General Labels</p>\n<span class="label label-primary m-r-sm">Label Primary</span>\n<span class="label label-accent m-r-sm">Label Accent</span>\n<span class="label label-grey4 m-r-sm">Label Grey4</span>\n\n<p class="m-t-md">Outline Labels</p>\n<span class="label label-outline-alternate2 m-r-sm">Outline Label Alternative2</span>\n<span class="label label-outline-alternate3 m-r-sm">Outline Label Alternative3</span>\n<span class="label label-outline-grey4">Outline Label Grey4</span>\n\n<p class="m-t-md">Status Labels</p>\n<span class="label label-ok m-r-sm">Label OK</span>\n<span class="label label-warning m-r-sm">Label Warning</span>\n<span class="label label-critical">Label Critical</span>\n\n<hr>\n\n<p>Use <code>span.label</code> to create a label. UX Aspects offers a wide range of label &amp; outline label colors.\nSet the color of the label using one of the following classes:</p>\n\n<p>General Labels:</p>\n\n<p><code>.label-primary</code> or\n<code>.label-accent</code> or\n<code>.label-alternate1</code> or\n<code>.label-alternate2</code> or\n<code>.label-alternate3</code> or\n<code>.label-vibrant1</code> or\n<code>.label-vibrant2</code> or\n<code>.label-grey1</code> or\n<code>.label-grey2</code> or\n<code>.label-grey3</code> or\n<code>.label-grey4</code> or\n<code>.label-grey5</code></p>\n\n<p>Outline Labels:</p>\n\n<p><code>.label-outline-primary</code> or\n<code>.label-outline-accent</code> or\n<code>.label-outline-alternate1</code> or\n<code>.label-outline-alternate2</code> or\n<code>.label-outline-alternate3</code> or\n<code>.label-outline-vibrant1</code> or\n<code>.label-outline-vibrant2</code> or\n<code>.label-outline-grey1</code> or\n<code>.label-outline-grey2</code> or\n<code>.label-outline-grey3</code> or\n<code>.label-outline-grey4</code> or\n<code>.label-outline-grey5</code></p>\n\n<p>Status Labels:</p>\n\n<p><code>.label-ok</code> or\n<code>.label-warning</code> or\n<code>.label-critical</code></p>\n\n<p>If the colour of the label is being used to convey meaning, include an <code>aria-label</code> attribute to describe this information to users of assistive technologies.</p>\n\n<uxd-snippet [code]="htmlCode1"></uxd-snippet>\n\n<hr>\n\n<p class="m-t-md">Flat Edge Right Labels</p>\n<p><span class="label flat-edge-right label-accent m-r-sm">9 hits</span>\n<span class="label flat-edge-right label-primary m-r-sm">400 hits</span>\n<span class="label flat-edge-right label-outline-alternate2">92 hits</span></p>\n\n<p class="m-t-md">Flat Edge Left Labels</p>\n<p><span class="label flat-edge-left label-accent m-r-sm">9 hits</span>\n<span class="label flat-edge-left label-primary m-r-sm">400 hits</span>\n<span class="label flat-edge-left label-outline-alternate2">92 hits</span></p>\n\n<hr>\n\n<p>Adding the <code>.flat-edge-right</code> or <code>.flat-edge-left</code> classes will offer a label with a flat edge on the right or left and will not convert text to uppercase. This is recomended for use with hit counters.</p>\n\n<uxd-snippet [code]="htmlCode2"></uxd-snippet>'},2274:function(e,l){e.exports='<div class="demo">\n    <p class="form-control-static m-b">Static text</p>\n</div>\n\n<p>For a static input use <code>p</code> instead of <code>input</code> with <code>.form-control-static</code>.</p>\n\n<uxd-snippet [code]="htmlCode"></uxd-snippet>'},2883:function(e,l){e.exports='<p>General Labels</p>\n<span class="label label-primary m-r-sm">Label Primary</span>\n<span class="label label-accent m-r-sm">Label Accent</span>\n<span class="label label-grey4 m-r-sm">Label Grey4</span>\n\n<p class="m-t-md">Outline Labels</p>\n<span class="label label-outline-alternate2 m-r-sm">Outline Label Alternative2</span>\n<span class="label label-outline-alternate3 m-r-sm">Outline Label Alternative3</span>\n<span class="label label-outline-grey4">Outline Label Grey4</span>\n\n<p class="m-t-md">Status Labels</p>\n<span class="label label-ok m-r-sm">Label OK</span>\n<span class="label label-warning m-r-sm">Label Warning</span>\n<span class="label label-critical">Label Critical</span>'},2884:function(e,l){e.exports='<p class="m-t-md">Flat Edge Right Labels</p>\n<span class="label flat-edge-right label-accent m-r-sm">9 hits</span>\n<span class="label flat-edge-right label-primary m-r-sm">400 hits</span>\n<span class="label flat-edge-right label-outline-alternate2">92 hits</span>\n\n<p class="m-t-md">Flat Edge Left Labels</p>\n<span class="label flat-edge-left label-accent m-r-sm">9 hits</span>\n<span class="label flat-edge-left label-primary m-r-sm">400 hits</span>\n<span class="label flat-edge-left label-outline-alternate2">92 hits</span>'},2885:function(e,l){e.exports='<p class="form-control-static">Static text</p>'}});