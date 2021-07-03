/ *
    jQuery Плагин для маскирования ввода
    Copyright (c) 2007 - 2015 Джош Буш (digitalbush.com)
    Лицензировано по лицензии MIT (http://digitalbush.com/projects/masked-input-plugin/#license)
    Версия: 1.4.1
* /
! function (a) {"function" == typeof define && define.amd? define (["jquery"], a): a ("object" == typeof export? require ("jquery"): jQuery)} (function ( a) {var b, c = navigator.userAgent, d = / iphone / i.test (c), e = / chrome / i.test (c), f = / android / i.test (c); a. Маска = {определения: {9: "[0-9]", а: "[A-Za-Z]", "*": "[A-Za-z0-9]"}, Autoclear: 0, dataName: "rawMaskFn", заполнитель: "_"}, a.fn.extend ({caret: function (a, b) {var c; if (0! == this.length &&! this.is (": hidden) )) return "number" == typeof a? (b = "number" == typeof b? b: a, this.each (function () {this.setSelectionRange? this.setSelectionRange (a, b): this.createTextRange && (с = this.createTextRange (), c.collapse (! 0), c.moveEnd ( "символ", б), c.moveStart ( "символ", а), c.select ())})) :( это [0].setSelectionRange (а = это [0] .selectionStart, Ь = это [0] .selectionEnd): document.selection && && document.selection.createRange (с = document.selection.createRange (), а = 0-c.duplicate (). moveStart ("персонаж", - 1e5), b = a + c.text.length), {begin: a, end: b})}, unmask: function () {return this.trigger ("unmask")}, mask: function (c, g) {var h, i, j, k, l, m, n, o; if (! c && this.length> 0) {h = a (this [0]); var p = h .data (a.mask.dataName); return p? p (): void 0} return g = a.extend ({autoclear: a.mask.autoclear, заполнитель: a.mask.placeholder, завершено: null}, g ), г = a.mask.definitions, J = [], к = п = c.length, L = NULL, a.each (c.split ( ""), функцию (а, б) { "?" = = b? (n -, k = a): i [b]? (j.push (новый RegExp (i [b])), null === l && (l = j.length-1), k> a && (m = j.length-1)): j.push (null)}), this.trigger ("unmask"). each (function () {function h () {if (g.завершено) {for (var a = l; m> = a; a ++) if (j [a] && C [a] === p (a)) return; g.completed.call (B)}} функция p ( a) {return g.placeholder.charAt (функция <g.placeholder.length? a: 0)} q (a) {for (; ++ a <n &&! j [a];); вернуть функцию} r (a) {for (; - a> = 0 &&! j [a];); вернуть a} функцию s (a, b) {var c, d; if (! (0> a)) {for (c = а, д = д (б); п> с; C ++), если (J [с]) {если ((п> д && J [с] .test (С [г])!)) перерыва; C [с] = C [d], C [d] = p (d), d = q (d)} z (), B.caret (Math.max (l, a))}} функция t (a) {var b , в, г, е, ибо (Ь = а, с = р (а); п> б, б ++), если (J [Ь]) {если (д = д (б), е = С [Ь], C [b] = c,! (N> d && j [d] .test (e))) break; c = e}} функция u () {var a = B.val (), b = B.caret () ; если (о && && o.length o.length> a.length) {для (А (0); b.begin> 0 && J [b.begin-1];!) b.begin -; если (0 === b.begin) для (; b.begin <л && J [b.begin];!) b.begin ++;! B.caret (b.begin, b.begin)} еще {для (A (0), б. начать <п &&! J [б.начало];) b.begin ++; B.caret (b.begin, b.begin)} h ()} функция v () {A (), B.val ()! = E && B.change ()} функция w ( a) {if (! B.prop ("только для чтения")) {var b, c, e, f = a.which || a.keyCode; o = B.val (), 8 === f || 46 === е || д && 127 === е? (Ь = B.caret (), с = b.begin, е = b.end, ес === 0 && (с = 46! == е? г (с ): е = д (с-1), е = 46 === е д (е): е), у (с, е), с (с, е-1), a.preventDefault ()): 13 === f? V.call (this, a): 27 === f && (B.val (E), B.caret (0, A ()), a.preventDefault ())}} функция x ( b) {if (! B.prop ("только для чтения")) {var c, d, e, g = b.which || b.keyCode, i = B.caret (); if (! (b.ctrlKey | | b.altKey || b.metaKey || 32> г) && г && 13 == г) {если (i.end-i.begin == 0 && (у (i.begin, i.end!), s (я! .begin, i.end-1)), с = д (i.begin-1), п> с && (д = String.fromCharCode (г), J [с] .test (г))) {если (т (c), C [c] = d, z (), e = q (c), f) {var k = function () {a.proxy (a.fn.caret, B, e) ()}; setTimeout (k, 0)} иначе B.caret (e); i.begin <= m &&h ()} b.preventDefault ()}}} функция y (a, b) {var c; для (c = a; b> c && n> c; c ++) j [c] && (C [c] = p ( c))} function z () {B.val (C.join (""))} function A (a) {var b, c, d, e = B.val (), f = -1; для ( Ь = 0, d = 0; п> б, б ++), если (J [Ь]) {для (С [Ь] = р (б); г ++ <e.length;), если (с = e.charAt (д -1), J [Ь] .test (с)) {С [Ь] = с, F = B;}, если перерыв (д> e.length) {у (Ь + 1, п);}} разрыв еще C [b] === e.charAt (d) && d ++, k> b && (f = b); вернуть a? Z (): k> f + 1? G.autoclear || C.join ("") = ? == D (B.val () && B.val ( ""), у (0, п)): г () :( г (), B.val (B.val () подстроку (0, ф. +1))), k? B: l} var B = a (this), C = a.map (c.split (""), function (a, b) {return "?"! = A? I [a]? p (b): a: void 0}), D = C.join (""), E = B.val (); B.data (a.mask.dataName, function () {return a .map (C, function (a, b) {return j [b] && a! = p (b)? a: null}). join ("")}), B.one ("unmask", function () {B.off (».mask "). removeData (a.mask.dataName)}). on (" focus.mask ", function () {if (! B.prop (" readonly ")) {clearTimeout (b); var a; E = B.val (), а = а (), Ь = SetTimeout (функция () {B.get (0) === document.activeElement && (г (), A == c.replace ( "?", "" ) .length B.caret (0, а): B.caret (а))}, 10)}}) на ( "blur.mask", v) .На ( "keydown.mask", ш).. on ("keypress.mask", x) .on ("input.mask paste.mask", function () {B.prop ("readonly") || setTimeout (function () {var a = A (! 0) ;. B.caret (а), ч ()}, 0)}), е && е && B.off ( "input.mask") на ( "input.mask", и), А ()})}})}) ;?. " "") Длина B.caret (0, а):?. B.caret (а))}, 10)}}) на ( "blur.mask", v) .on (" keydown.mask ", w) .on (" keypress.mask ", x) .on (" input.mask paste.mask ", function () {B.prop (" readonly ") || setTimeout (function () {var a = А (0!);. B.caret (а), ч ()}, 0)}), е && е && B.off ( "input.mask") на ( "input.mask", и), А ()}) }})});?. " "") Длина B.caret (0, а):?. B.caret (а))}, 10)}}) на ( "blur.mask", v) .on (" keydown.mask ", w) .on (" keypress.mask ", x) .on (" input.mask paste.mask ", function () {B.prop (" readonly ") || setTimeout (function () {var a = А (0!);. B.caret (а), ч ()}, 0)}), е && е && B.off ( "input.mask") на ( "input.mask", и), А ()}) }})});
