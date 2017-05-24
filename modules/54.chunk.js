webpackJsonp([54],{1861:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(19),s=n(266),d=n(144),c=n(267),l=n(1862),p=n(269),u=n(268),h=[l.ComponentsUiRouterNg1Component],f=[{path:"**",component:c.DocumentationCategoryComponent,data:{category:d.ResolverService.resolveCategoryData(d.DocumentationPage.Components,"UI Router")}}],g=function(){function t(t,e){e.registerResolver(t)}return t}();g=o([r.NgModule({imports:[p.WrappersModule,u.TabsModule,s.DocumentationComponentsModule,i.RouterModule.forChild(f)],exports:h,declarations:h,entryComponents:h}),a("design:paramtypes",[r.ComponentFactoryResolver,d.ResolverService])],g),e.ComponentsRouterModule=g},1862:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=n(265),i=function(){function t(){this.htmlCode1=n(2820),this.htmlCode2=n(2821),this.jsCode=n(2822)}return t}();i=o([a.Component({selector:"uxd-components-ui-router-ng1",template:n(2232),changeDetection:a.ChangeDetectionStrategy.OnPush}),r.DocumentationSectionComponent("ComponentsUiRouterNg1Component")],i),e.ComponentsUiRouterNg1Component=i},2232:function(t,e){t.exports='<p>UI Router is a routing framework for Angular, which allows organizing parts of the user interface into a state machine.</p>\n\n<p>The power of UI router lies in its ability to nest views and states.</p>\n\n<p>Add <code>ui-view</code> directive inside the <code>body</code> tag.</p>\n\n<uxd-snippet [code]="htmlCode1"></uxd-snippet>\n\n<p>Add <code>a</code> tags for navigation. &nbsp;Adding <code>ui-sref</code> directive helps with state transitions and auto-generates\n    the <code>href</code> attribute of the element it’s attached to, if the corresponding state has a URL.</p>\n\n<p>A navigation entry is highighted when the state is selected and is contained in the <code>active</code>, <code>selected</code>    classes.</p>\n\n<uxd-snippet [code]="htmlCode2"></uxd-snippet>\n\n<p>Set up the states with<code>$stateProvider</code>.</p>\n\n<p>State parameters are discussed below:</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table m-t">\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n        </tr>\n        <tr>\n            <td class="attribute">url</td>\n            <td>Defines the path provided in ui-sref.</td>\n        </tr>\n        <tr>\n            <td class="attribute">templateUrl</td>\n            <td>Configures a state\'s template, e.g. physical path of the page.</td>\n        </tr>\n        <tr>\n            <td class="attribute">abstract</td>\n            <td>Indicates that a state can have child states but can\'t be self activated.</td>\n        </tr>\n        <tr>\n            <td class="attribute">template</td>\n            <td>Simplest way to set your template.</td>\n        </tr>\n        <tr>\n            <td class="attribute">data</td>\n            <td>Sets custom data, e.g. pageTitle.</td>\n        </tr>\n        <tr>\n            <td class="attribute">controller</td>\n            <td>Assign a controller to the state, e.g. SideNavigationCtrl as sn, pageTitle.</td>\n        </tr>\n    </table>\n</div>\n\n<uxd-snippet language="javascript" [code]="jsCode"></uxd-snippet>'},2820:function(t,e){t.exports="<body>\n   <div ui-view></div>\n</body>"},2821:function(t,e){t.exports="<li ng-class=\"{ active: $state.includes('patterns'),selected: $state.includes('patterns')}\">\n    <ul ng-class=\"{ in: $state.includes('patterns')} \">\n        <li ng-class=\"{ active: $state.includes('patterns.uirouter') }\">\n           <a ui-sref=\"patterns.uirouter\">UI Router</a>\n        </li>\n    </ul>\n</li>"},2822:function(t,e){t.exports='$urlRouterProvider.otherwise("/");\n\n$stateProvider.state("/", {\n    url: "/",\n    templateUrl: "app/views/blank.html"\n})\n.state("patterns", {\n    abstract: "true",\n    url: "/patterns",\n    template: "<ui-view autoscroll=\\"true\\"/>"\n})\n.state("patterns.sidenavigation", {\n    url: "/sidenavigation",\n    templateUrl: "app/sideNavigation/sideNavigation.html",\n    controller: "SideNavigationCtrl as sn",\n    data: {\n        pageTitle:"Navigation"\n    }\n})\n.state("patterns.uirouter", {\n    url: "/uirouter",\n    templateUrl: "app/uiRouter/uiRouter.html",\n    data: {\n        pageTitle: "UI Router"\n    }\n});'}});