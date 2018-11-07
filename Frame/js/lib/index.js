/** layuiAdmin.std-v1.0.0-beta7 LPPL License By http://www.layui.com/admin/ */
; layui.extend(
   {
       setter: "config",
       admin: "lib/admin",
       view: "lib/view"
   }
   ).define(["setter", "admin"], function (a) {
       var e = layui.setter,
       i = layui.element,
       n = layui.admin,
       t = n.tabsPage,
       d = layui.view,
       l = function (a, e) {
           u(s).find('iframe').attr('src', a);
       }, s = "#LAY_app_body", r = "layadmin-layout-tabs", u = layui.$; u(window); layui.config({ base: e.base + "modules/" }), layui.each(e.extend, function (a, i) { var n = {}; n[i] = "{/}" + e.base + "lib/extend/" + i, layui.extend(n) }), d().autoRender(), a("index", { openTabsPage: l })
   });