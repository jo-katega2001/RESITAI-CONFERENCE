(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(t, e, n) {
            "use strict";
            n.d(e, "k", (function() {
                return y
            })), n.d(e, "m", (function() {
                return w
            })), n.d(e, "l", (function() {
                return j
            })), n.d(e, "e", (function() {
                return _
            })), n.d(e, "b", (function() {
                return O
            })), n.d(e, "s", (function() {
                return k
            })), n.d(e, "g", (function() {
                return $
            })), n.d(e, "h", (function() {
                return C
            })), n.d(e, "d", (function() {
                return T
            })), n.d(e, "r", (function() {
                return M
            })), n.d(e, "j", (function() {
                return S
            })), n.d(e, "t", (function() {
                return P
            })), n.d(e, "o", (function() {
                return N
            })), n.d(e, "q", (function() {
                return E
            })), n.d(e, "f", (function() {
                return I
            })), n.d(e, "c", (function() {
                return R
            })), n.d(e, "i", (function() {
                return z
            })), n.d(e, "p", (function() {
                return L
            })), n.d(e, "a", (function() {
                return K
            })), n.d(e, "v", (function() {
                return G
            })), n.d(e, "n", (function() {
                return J
            })), n.d(e, "u", (function() {
                return W
            }));
            n(55), n(38), n(58), n(59), n(79), n(39), n(80);
            var r = n(14),
                o = n(12),
                c = n(27),
                l = n(22),
                f = (n(77), n(18), n(45), n(250), n(42), n(106), n(61), n(46), n(40), n(41), n(47), n(25), n(62), n(185), n(186), n(254), n(107), n(189), n(256), n(78), n(105), n(1)),
                d = n(30);

            function h(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function m(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? h(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function x(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return v(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function y(t) {
                f.a.config.errorHandler && f.a.config.errorHandler(t)
            }

            function w(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function j(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function _(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = x(t.$children || []);
                try {
                    for (r.s(); !(e = r.n()).done;) {
                        var o = e.value;
                        o.$fetch && n.push(o), o.$children && _(o, n)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n
            }

            function O(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = n, t.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function k(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = f.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function $(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                    return Object.keys(t[n]).map((function(o) {
                        return e && e.push(r), t[n][o]
                    }))
                })))
            }

            function C(t) {
                return $(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
            }

            function T(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                    return Object.keys(t.components).reduce((function(r, o) {
                        return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                    }), [])
                })))
            }

            function M(t, e) {
                return Promise.all(T(t, function() {
                    var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                        var l, f;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, n();
                                case 4:
                                    n = t.sent, t.next = 11;
                                    break;
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(), (!(f = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || f + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))), t.t0;
                                case 11:
                                    return o.components[c] = n = k(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function S(t) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, M(e);
                            case 4:
                                return t.abrupt("return", m(m({}, e), {}, {
                                    meta: $(e).map((function(t, n) {
                                        return m(m({}, t.options.meta), (e.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function P(t, e) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                    var o, c, f, h;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !0,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    store: e.store,
                                    payload: n.payload,
                                    error: n.error,
                                    base: e.router.options.base,
                                    env: {}
                                }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var o = Object(r.a)(path);
                                        if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, path = t, o = Object(r.a)(path), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(d.d)(path, n), window.location.assign(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([S(n.route), S(n.from)]);
                            case 3:
                                o = t.sent, c = Object(l.a)(o, 2), f = c[0], h = c[1], n.route && (e.context.route = f), n.from && (e.context.from = h), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function N(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : E(t[0], e).then((function() {
                    return N(t.slice(1), e)
                }))
            }

            function E(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((function(n) {
                    t(e, (function(t, data) {
                        t && e.error(t), n(data = data || {})
                    }))
                })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function I(base, t) {
                if ("hash" === t) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var e = (path || "/") + window.location.search + window.location.hash;
                return Object(d.c)(e)
            }

            function R(t, e) {
                return function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", H(e)));
                    return function(e, r) {
                        for (var path = "", data = e || {}, o = (r || {}).pretty ? Y : encodeURIComponent, c = 0; c < t.length; c++) {
                            var l = t[c];
                            if ("string" != typeof l) {
                                var f = data[l.name || "pathMatch"],
                                    d = void 0;
                                if (null == f) {
                                    if (l.optional) {
                                        l.partial && (path += l.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + l.name + '" to be defined')
                                }
                                if (Array.isArray(f)) {
                                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                    if (0 === f.length) {
                                        if (l.optional) continue;
                                        throw new TypeError('Expected "' + l.name + '" to not be empty')
                                    }
                                    for (var h = 0; h < f.length; h++) {
                                        if (d = o(f[h]), !n[c].test(d)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
                                        path += (0 === h ? l.prefix : l.delimiter) + d
                                    }
                                } else {
                                    if (d = l.asterisk ? B(f) : o(f), !n[c].test(d)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                    path += l.prefix + d
                                }
                            } else path += l
                        }
                        return path
                    }
                }(function(t, e) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        l = e && e.delimiter || "/";
                    for (; null != (n = U.exec(t));) {
                        var f = n[0],
                            d = n[1],
                            h = n.index;
                        if (path += t.slice(c, h), c = h + f.length, d) path += d[1];
                        else {
                            var m = t[c],
                                x = n[2],
                                v = n[3],
                                y = n[4],
                                w = n[5],
                                j = n[6],
                                _ = n[7];
                            path && (r.push(path), path = "");
                            var O = null != x && null != m && m !== x,
                                k = "+" === j || "*" === j,
                                $ = "?" === j || "*" === j,
                                C = n[2] || l,
                                pattern = y || w;
                            r.push({
                                name: v || o++,
                                prefix: x || "",
                                delimiter: C,
                                optional: $,
                                repeat: k,
                                partial: O,
                                asterisk: Boolean(_),
                                pattern: pattern ? F(pattern) : _ ? ".*" : "[^" + Q(C) + "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && r.push(path);
                    return r
                }(t, e), e)
            }

            function z(t, e) {
                var n = {},
                    r = m(m({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n
            }

            function L(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return m(m({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var U = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function Y(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function B(t) {
                return Y(t, !0)
            }

            function Q(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function F(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function H(t) {
                return t && t.sensitive ? "" : "i"
            }

            function K(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
            }
            var G = d.b,
                J = (d.e, d.a);

            function W(t) {
                try {
                    window.history.scrollRestoration = t
                } catch (t) {}
            }
        },
        112: function(t, e, n) {
            "use strict";
            n(85), n(18), n(39), n(78), n(105), n(61), n(45), n(47), n(42), n(55), n(40), n(25), n(38), n(58), n(59), n(41);
            var r = n(1);

            function o(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    f = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        f = !0, o = t
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var l = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                f = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                d = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: r.a.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    f(this.handleId), this.__observed && (d.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        d && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), d.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            d.unobserve(this.$el);
                            var t, e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        132: function(t, e, n) {
            "use strict";
            e.a = {}
        },
        136: function(t, e, n) {
            t.exports = n.p + "img/african-border.7eaf63b.svg"
        },
        190: function(t, e, n) {
            var content = n(274);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(84).default)("ad839196", content, !0, {
                sourceMap: !1
            })
        },
        191: function(t, e, n) {
            var content = n(276);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(84).default)("252f4f7d", content, !0, {
                sourceMap: !1
            })
        },
        192: function(t, e, n) {
            var content = n(278);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(84).default)("16f695b4", content, !0, {
                sourceMap: !1
            })
        },
        193: function(t, e, n) {
            var content = n(281);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(84).default)("40fbe02a", content, !0, {
                sourceMap: !1
            })
        },
        207: function(t, e, n) {
            "use strict";
            var r = n(12),
                o = (n(77), n(18), n(85), n(1)),
                c = n(0),
                l = function(t) {
                    return t.$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey
                },
                f = window.__NUXT__;

            function d() {
                if (!this._hydrated) return this.$fetch()
            }

            function h() {
                if (l(this)) {
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = f.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var t in data) o.a.set(this.$data, t, data[t])
                }
            }

            function m() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = x.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function x() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, n, r, o = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function(t) {
                                    return setTimeout(t, r)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.a.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = m.bind(this), Object(c.a)(this, "created", h), Object(c.a)(this, "beforeMount", d))
                }
            }
        },
        209: function(t, e, n) {
            n(210), t.exports = n(211)
        },
        211: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n(47), n(55), n(38), n(58), n(59);
                    var e = n(14),
                        r = n(12),
                        o = (n(121), n(229), n(242), n(244), n(77), n(42), n(18), n(39), n(45), n(46), n(78), n(105), n(106), n(61), n(25), n(40), n(41), n(85), n(1)),
                        c = n(202),
                        l = n(132),
                        f = n(0),
                        d = n(31),
                        h = n(207),
                        m = n(112);

                    function x(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return v(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, c = !0,
                            l = !1;
                        return {
                            s: function() {
                                n = n.call(t)
                            },
                            n: function() {
                                var t = n.next();
                                return c = t.done, t
                            },
                            e: function(t) {
                                l = !0, o = t
                            },
                            f: function() {
                                try {
                                    c || null == n.return || n.return()
                                } finally {
                                    if (l) throw o
                                }
                            }
                        }
                    }

                    function v(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    o.a.__nuxt__fetch__mixin__ || (o.a.mixin(h.a), o.a.__nuxt__fetch__mixin__ = !0), o.a.component(m.a.name, m.a), o.a.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                    var y, w, j = [],
                        _ = window.__NUXT__ || {},
                        O = _.config || {};
                    O._app && (n.p = Object(f.v)(O._app.cdnURL, O._app.assetsPath)), Object.assign(o.a.config, {
                        silent: !0,
                        performance: !1
                    });
                    var k = o.a.config.errorHandler || console.error;

                    function $(t, e, n) {
                        for (var r = function(component) {
                                var t = function(component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, o = n ? Object(f.g)(n) : [], c = Math.max(t.length, o.length), l = [], d = function() {
                                var e = Object.assign({}, r(t[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(e).filter((function(t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    n[t] = e[t]
                                })), l.push(n)
                            }, i = 0; i < c; i++) d();
                        return l
                    }

                    function C(t, e, n) {
                        return T.apply(this, arguments)
                    }

                    function T() {
                        return (T = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, l, d, h = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(y.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(f.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(f.r)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        o = t.sent, o.some((function(t) {
                                            var r = t.Component,
                                                o = t.instance,
                                                c = r.options.watchQuery;
                                            return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                                return h._diffQuery[t]
                                            })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, d = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(d)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: l,
                                            message: d
                                        }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function M(t, e) {
                        return _.serverRendered && e && Object(f.b)(t, e), t._Ctor = t, t
                    }

                    function S(t, e, n) {
                        var r = this,
                            o = [],
                            c = !1;
                        if (void 0 !== n && (o = [], (n = Object(f.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (o = o.concat(t.options.middleware))
                            }))), o = o.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), l.a[t])
                            })), !c) return Object(f.o)(o, e)
                    }

                    function A(t, e, n) {
                        return P.apply(this, arguments)
                    }

                    function P() {
                        return P = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var c, l, h, m, v, w, _, O, k, C, T, M, A, P, D, N = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 2:
                                        return !1, e === n ? (j = [], !0) : (c = [], j = Object(f.g)(n, c).map((function(t, i) {
                                            return Object(f.c)(n.matched[c[i]].path)(n.params)
                                        }))), l = !1, h = function(path) {
                                            n.path === path.path && N.$loading.finish && N.$loading.finish(), n.path !== path.path && N.$loading.pause && N.$loading.pause(), l || (l = !0, o(path))
                                        }, t.next = 8, Object(f.t)(y, {
                                            route: e,
                                            from: n,
                                            next: h.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = y.nuxt.dateErr, this._hadError = Boolean(y.nuxt.err), m = [], (v = Object(f.g)(e, m)).length) {
                                            t.next = 27;
                                            break
                                        }
                                        return t.next = 15, S.call(this, v, y.context);
                                    case 15:
                                        if (!l) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 17:
                                        return w = (d.a.options || d.a).layout, t.next = 20, this.loadLayout("function" == typeof w ? w.call(d.a, y.context) : w);
                                    case 20:
                                        return _ = t.sent, t.next = 23, S.call(this, v, y.context, _);
                                    case 23:
                                        if (!l) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        return y.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 27:
                                        return v.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions($(v, e, n)), t.prev = 29, t.next = 32, S.call(this, v, y.context);
                                    case 32:
                                        if (!l) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 34:
                                        if (!y.context._errored) {
                                            t.next = 36;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 36:
                                        return "function" == typeof(O = v[0].options.layout) && (O = O(y.context)), t.next = 40, this.loadLayout(O);
                                    case 40:
                                        return O = t.sent, t.next = 43, S.call(this, v, y.context, O);
                                    case 43:
                                        if (!l) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 45:
                                        if (!y.context._errored) {
                                            t.next = 47;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 47:
                                        k = !0, t.prev = 48, C = x(v), t.prev = 50, C.s();
                                    case 52:
                                        if ((T = C.n()).done) {
                                            t.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(M = T.value).options.validate) {
                                            t.next = 56;
                                            break
                                        }
                                        return t.abrupt("continue", 61);
                                    case 56:
                                        return t.next = 58, M.options.validate(y.context);
                                    case 58:
                                        if (k = t.sent) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.abrupt("break", 63);
                                    case 61:
                                        t.next = 52;
                                        break;
                                    case 63:
                                        t.next = 68;
                                        break;
                                    case 65:
                                        t.prev = 65, t.t0 = t.catch(50), C.e(t.t0);
                                    case 68:
                                        return t.prev = 68, C.f(), t.finish(68);
                                    case 71:
                                        t.next = 77;
                                        break;
                                    case 73:
                                        return t.prev = 73, t.t1 = t.catch(48), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", o());
                                    case 77:
                                        if (k) {
                                            t.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 80:
                                        return t.next = 82, Promise.all(v.map(function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                                var o, c, l, d, h, x, v, w, p;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (r._path = Object(f.c)(e.matched[m[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== j[i], N._routeChanged && o ? r._dataRefresh = !0 : N._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : N._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(t) {
                                                                    return N._diffQuery[t]
                                                                })) : "function" == typeof l && (A || (A = Object(f.h)(e)), r._dataRefresh = l.apply(A[i], [e.query, n.query]))), N._hadError || !N._isMounted || r._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return d = [], h = r.options.asyncData && "function" == typeof r.options.asyncData, x = Boolean(r.options.fetch) && r.options.fetch.length, v = h && x ? 30 : 45, h && ((w = Object(f.q)(r.options.asyncData, y.context)).then((function(t) {
                                                                Object(f.b)(r, t), N.$loading.increase && N.$loading.increase(v)
                                                            })), d.push(w)), N.$loading.manual = !1 === r.options.loading, x && ((p = r.options.fetch(y.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                                N.$loading.increase && N.$loading.increase(v)
                                                            })), d.push(p)), t.abrupt("return", Promise.all(d));
                                                        case 14:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                                        break;
                                    case 85:
                                        if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (P = t.t2 || {}).message) {
                                            t.next = 90;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, P));
                                    case 90:
                                        return j = [], Object(f.k)(P), "function" == typeof(D = (d.a.options || d.a).layout) && (D = D(y.context)), t.next = 96, this.loadLayout(D);
                                    case 96:
                                        this.error(P), this.$nuxt.$emit("routeChanged", e, n, P), o();
                                    case 99:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        }))), P.apply(this, arguments)
                    }

                    function D(t, n) {
                        Object(f.d)(t, (function(t, n, r, c) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = o.a.extend(t))._Ctor = t, r.components[c] = t), t
                        }))
                    }

                    function N(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                        var n = e ? (d.a.options || d.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof n && (n = n(y.context)), this.setLayout(n)
                    }

                    function E(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function I(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(f.h)(t),
                                c = Object(f.g)(t),
                                l = !1;
                            o.a.nextTick((function() {
                                r.forEach((function(t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var n in e) o.a.set(t.$data, n, e[n]);
                                        l = !0
                                    }
                                })), l && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), E(n)
                            }))
                        }
                    }

                    function R(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function(e, n) {
                            o.a.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, n)
                            }))
                        }))
                    }

                    function z() {
                        return z = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                            var n, c, l, d, h;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return y = e.app, w = e.router, e.store, n = new o.a(y), c = _.layout || "default", t.next = 7, n.loadLayout(c);
                                    case 7:
                                        return n.setLayout(c), l = function() {
                                            n.$mount("#__nuxt"), w.afterEach(D), w.afterEach(N.bind(n)), w.afterEach(I.bind(n)), o.a.nextTick((function() {
                                                R(n)
                                            }))
                                        }, t.next = 11, Promise.all((m = y.context.route, Object(f.d)(m, function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                                var l;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if ("function" != typeof e || e.options) {
                                                                t.next = 4;
                                                                break
                                                            }
                                                            return t.next = 3, e();
                                                        case 3:
                                                            e = t.sent;
                                                        case 4:
                                                            return l = M(Object(f.s)(e), _.data ? _.data[c] : null), r.components[o] = l, t.abrupt("return", l);
                                                        case 7:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n, r, o, c) {
                                                return t.apply(this, arguments)
                                            }
                                        }())));
                                    case 11:
                                        if (d = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), d.length && (n.setTransitions($(d, w.currentRoute)), j = w.currentRoute.matched.map((function(t) {
                                                return Object(f.c)(t.path)(w.currentRoute.params)
                                            }))), n.$loading = {}, _.error && n.error(_.error), w.beforeEach(C.bind(n)), w.beforeEach(A.bind(n)), !_.serverRendered || !Object(f.n)(_.routePath, n.context.route.path)) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.abrupt("return", l());
                                    case 20:
                                        return h = function() {
                                            D(w.currentRoute, w.currentRoute), N.call(n, w.currentRoute), E(n), l()
                                        }, t.next = 23, new Promise((function(t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 23:
                                        A.call(n, w.currentRoute, w.currentRoute, (function(path) {
                                            if (path) {
                                                var t = w.afterEach((function(e, n) {
                                                    t(), h()
                                                }));
                                                w.push(path, void 0, (function(t) {
                                                    t && k(t)
                                                }))
                                            } else h()
                                        }));
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                                var m
                            }), t)
                        }))), z.apply(this, arguments)
                    }
                    Object(d.b)(null, _.config).then((function(t) {
                        return z.apply(this, arguments)
                    })).catch(k)
                }.call(this, n(33))
        },
        273: function(t, e, n) {
            "use strict";
            n(190)
        },
        274: function(t, e, n) {
            var r = n(83)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;align-items:center;background:#f7f8fb;bottom:0;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;left:0;padding:1rem;position:absolute;right:0;text-align:center;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]), r.locals = {}, t.exports = r
        },
        275: function(t, e, n) {
            "use strict";
            n(191)
        },
        276: function(t, e, n) {
            var r = n(83)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), r.locals = {}, t.exports = r
        },
        277: function(t, e, n) {
            "use strict";
            n(192)
        },
        278: function(t, e, n) {
            var r = n(83),
                o = n(135),
                c = n(136),
                l = r((function(i) {
                    return i[1]
                }));
            l.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap);"]);
            var f = o(c);
            l.push([t.i, ".pg-title{background-color:rgba(192,33,38,.7);border-image-outset:0 0 0 0;border-image-repeat:repeat repeat;border-image-slice:45 27 45 27;border-image-source:url(" + f + ');border-image-width:20px 20px 20px 20px;border-style:solid;color:#fff;padding:30px}.container,.pg-title{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.container{padding-bottom:20px}@media(max-width:767px){.container{margin-top:60px;padding-top:0;text-align:justify;width:100%}}@media(min-width:768px)and (max-width:991px){.container{margin-top:60px;padding-top:0;text-align:justify;width:100%}}.container .content{font-family:"Source Sans Pro",sans-serif;font-size:larger;width:74vw}@media(min-width:1201px)and (max-width:1400px){.container .content{font-size:large;width:90%}}@media(min-width:992px)and (max-width:1200px){.container .content{font-size:medium;width:95%}}@media(max-width:767px){.container .content{font-size:large}}@media(min-width:768px)and (max-width:991px){.container .content{font-size:large}}@media(max-width:767px){.container .content{margin-top:20px;padding:16px;text-align:justify;width:100%}}@media(min-width:768px)and (max-width:991px){.container .content{margin-top:20px;padding:16px;text-align:justify;width:100%}}.container .content .title{color:#c02126!important;margin-bottom:30px;margin-top:30px;text-align:left;text-transform:uppercase}@media(max-width:767px){.container .content .title{font-size:large;margin-bottom:20px;margin-top:0}}@media(min-width:768px)and (max-width:991px){.container .content .title{font-size:large;margin-bottom:20px;margin-top:0}}.container .content h3{color:#c02126!important;text-align:left}.container .content .speakers{grid-gap:0;background-color:#c02126;display:grid;gap:0;grid-template-columns:300px 300px 300px 300px 300px}.container .content .speakers .speaker{background-color:aqua;cursor:pointer;display:block;height:-moz-fit-content;height:fit-content;height:300px;position:relative}.container .content .speakers .speaker img{display:block;position:absolute;width:100%}.container .content .speakers .speaker .bio{background-color:#c02126;bottom:0;display:block;position:absolute}.container .content .panel-container{display:flex;flex-wrap:wrap;gap:30px}@media(max-width:767px){.container .content .panel-container{flex-direction:column}}.container .content .panel-container .panelist{cursor:pointer;display:inline-block;height:auto;max-width:15%;position:relative;vertical-align:middle}@media(max-width:767px){.container .content .panel-container .panelist{max-width:100%}}@media(min-width:768px)and (max-width:991px){.container .content .panel-container .panelist{max-width:30%}}.container .content .panel-container .panelist .thumbnail{height:-moz-min-content;height:min-content;position:relative}.container .content .panel-container .panelist .thumbnail img{border-style:none;filter:grayscale(100%);-webkit-filter:grayscale(100%);overflow:clip;transition:all .5s;z-index:-1}.container .content .panel-container .panelist .thumbnail img:hover{filter:none;-webkit-filter:grayscale(0)}.container .content .panel-container .panelist .thumbnail .info{background-color:#c02126!important;color:#fff;font-size:small;padding:4px 8px;position:absolute;text-transform:uppercase;top:80%}.container .content .panel-container .panelist .bio{font-size:smaller}.container .content .panel-container .panelist .bio p{color:#292929;font-size:smaller}.container .content .panel-container .panelist:hover img{filter:none;-webkit-filter:grayscale(0)}.container .content .panel-container .panelist:hover .bio .name{color:#c02126!important}.container .content .panel-container .panelist:hover .bio p{color:#000}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Source Sans Pro",sans-serif;font-size:larger;padding:0;word-spacing:1px}*,:after,:before,html{box-sizing:border-box;margin:0}', ""]), l.locals = {}, t.exports = l
        },
        279: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjc4MDA5MDcyMzcyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0MzYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNODMyIDEwMjRIMTkyYTE5MiAxOTIgMCAwIDEtMTkyLTE5MlYxOTJhMTkyIDE5MiAwIDAgMSAxOTItMTkyaDY0MGMxMDUuOTg0IDAgMTkyIDg1Ljk1MiAxOTIgMTkydjY0MGMwIDEwNi4wNDgtODYuMDE2IDE5Mi0xOTIgMTkyeiBtNjQtODMyYzAtMzUuMzkyLTI4LjYwOC02NC02NC02NEgxOTJhNjQgNjQgMCAwIDAtNjQgNjR2NjQwYTY0IDY0IDAgMCAwIDY0IDY0aDY0MGMzNS4zOTIgMCA2NC0yOC42MDggNjQtNjRWMTkyeiBtLTIwMy4wMDggNTAwLjk5MmE2My45MzYgNjMuOTM2IDAgMCAxLTkwLjQ5NiAwTDUxMiA2MDIuNDk2bC05MC40OTYgOTAuNDk2YTY0IDY0IDAgMSAxLTkwLjU2LTkwLjQ5Nkw0MjEuNTA0IDUxMmwtOTAuNTYtOTAuNDk2YTY0IDY0IDAgMSAxIDkwLjU2LTkwLjQ5Nkw1MTIgNDIxLjUwNGw5MC40OTYtOTAuNDk2YzI1LjAyNC0yNS4wMjQgNjUuNDcyLTI1LjAyNCA5MC40OTYgMHMyNS4wMjQgNjUuNDcyIDAgOTAuNDk2TDYwMi40OTYgNTEybDkwLjQ5NiA5MC40OTZhNjMuOTM2IDYzLjkzNiAwIDAgMSAwIDkwLjQ5NnoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjQ0MzciPjwvcGF0aD48L3N2Zz4="
        },
        280: function(t, e, n) {
            "use strict";
            n(193)
        },
        281: function(t, e, n) {
            var r = n(83),
                o = n(135),
                c = n(136),
                l = r((function(i) {
                    return i[1]
                })),
                f = o(c);
            l.push([t.i, ".pg-title[data-v-0c0900f4]{background-color:rgba(192,33,38,.7);border-image-outset:0 0 0 0;border-image-repeat:repeat repeat;border-image-slice:45 27 45 27;border-image-source:url(" + f + ');border-image-width:20px 20px 20px 20px;border-style:solid;color:#fff;padding:30px}.container[data-v-0c0900f4],.pg-title[data-v-0c0900f4]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.container[data-v-0c0900f4]{padding-bottom:20px}@media(max-width:767px){.container[data-v-0c0900f4]{margin-top:60px;padding-top:0;text-align:justify;width:100%}}@media(min-width:768px)and (max-width:991px){.container[data-v-0c0900f4]{margin-top:60px;padding-top:0;text-align:justify;width:100%}}.container .content[data-v-0c0900f4]{font-family:"Source Sans Pro",sans-serif;font-size:larger;width:74vw}@media(min-width:1201px)and (max-width:1400px){.container .content[data-v-0c0900f4]{font-size:large;width:90%}}@media(min-width:992px)and (max-width:1200px){.container .content[data-v-0c0900f4]{font-size:medium;width:95%}}@media(max-width:767px){.container .content[data-v-0c0900f4]{font-size:large}}@media(min-width:768px)and (max-width:991px){.container .content[data-v-0c0900f4]{font-size:large}}@media(max-width:767px){.container .content[data-v-0c0900f4]{margin-top:20px;padding:16px;text-align:justify;width:100%}}@media(min-width:768px)and (max-width:991px){.container .content[data-v-0c0900f4]{margin-top:20px;padding:16px;text-align:justify;width:100%}}.container .content .title[data-v-0c0900f4]{color:#c02126!important;margin-bottom:30px;margin-top:30px;text-align:left;text-transform:uppercase}@media(max-width:767px){.container .content .title[data-v-0c0900f4]{font-size:large;margin-bottom:20px;margin-top:0}}@media(min-width:768px)and (max-width:991px){.container .content .title[data-v-0c0900f4]{font-size:large;margin-bottom:20px;margin-top:0}}.container .content h3[data-v-0c0900f4]{color:#c02126!important;text-align:left}.container .content .speakers[data-v-0c0900f4]{grid-gap:0;background-color:#c02126;display:grid;gap:0;grid-template-columns:300px 300px 300px 300px 300px}.container .content .speakers .speaker[data-v-0c0900f4]{background-color:aqua;cursor:pointer;display:block;height:-moz-fit-content;height:fit-content;height:300px;position:relative}.container .content .speakers .speaker img[data-v-0c0900f4]{display:block;position:absolute;width:100%}.container .content .speakers .speaker .bio[data-v-0c0900f4]{background-color:#c02126;bottom:0;display:block;position:absolute}.container .content .panel-container[data-v-0c0900f4]{display:flex;flex-wrap:wrap;gap:30px}@media(max-width:767px){.container .content .panel-container[data-v-0c0900f4]{flex-direction:column}}.container .content .panel-container .panelist[data-v-0c0900f4]{cursor:pointer;display:inline-block;height:auto;max-width:15%;position:relative;vertical-align:middle}@media(max-width:767px){.container .content .panel-container .panelist[data-v-0c0900f4]{max-width:100%}}@media(min-width:768px)and (max-width:991px){.container .content .panel-container .panelist[data-v-0c0900f4]{max-width:30%}}.container .content .panel-container .panelist .thumbnail[data-v-0c0900f4]{height:-moz-min-content;height:min-content;position:relative}.container .content .panel-container .panelist .thumbnail img[data-v-0c0900f4]{border-style:none;filter:grayscale(100%);-webkit-filter:grayscale(100%);overflow:clip;transition:all .5s;z-index:-1}.container .content .panel-container .panelist .thumbnail img[data-v-0c0900f4]:hover{filter:none;-webkit-filter:grayscale(0)}.container .content .panel-container .panelist .thumbnail .info[data-v-0c0900f4]{background-color:#c02126!important;color:#fff;font-size:small;padding:4px 8px;position:absolute;text-transform:uppercase;top:80%}.container .content .panel-container .panelist .bio[data-v-0c0900f4]{font-size:smaller}.container .content .panel-container .panelist .bio p[data-v-0c0900f4]{color:#292929;font-size:smaller}.container .content .panel-container .panelist:hover img[data-v-0c0900f4]{filter:none;-webkit-filter:grayscale(0)}.container .content .panel-container .panelist:hover .bio .name[data-v-0c0900f4]{color:#c02126!important}.container .content .panel-container .panelist:hover .bio p[data-v-0c0900f4]{color:#000}.mobile-menu[data-v-0c0900f4]{background-color:#333;bottom:0;height:100%;left:-100vw;position:fixed;top:0;transition:left .5s ease-out;width:100vw;z-index:20}.mobile-menu .tool-bar[data-v-0c0900f4]{align-items:center;display:flex;height:60px;justify-content:flex-end;padding-left:16px;padding-right:16px}.mobile-menu .nav-menu[data-v-0c0900f4]{margin-top:20%}.mobile-menu .nav-menu .content[data-v-0c0900f4]{align-items:center;display:flex;flex-direction:column;margin-top:20%}.mobile-menu .nav-menu .content ul[data-v-0c0900f4]{align-items:center;display:flex;flex-direction:column;list-style:none;margin:0;padding:0}.mobile-menu .nav-menu .content ul li[data-v-0c0900f4]{align-self:center;color:#fff;display:block;padding:16px;width:auto}.mobile-menu .nav-menu .content ul li a[data-v-0c0900f4]{color:#fff;font-size:18px;-webkit-text-decoration:none;text-decoration:none}.mobile-menu .nav-menu .content .register-btn[data-v-0c0900f4]{align-self:center;background-color:#c02126!important;border:3px solid red;border-radius:25px;color:#fff;margin-top:30px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;text-transform:capitalize}.menu-close[data-v-0c0900f4]{left:-100vw}.menu-open[data-v-0c0900f4]{box-shadow:0 2px 12px 0 rgba(0,0,0,.26);left:0}', ""]), l.locals = {}, t.exports = l
        },
        282: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "state", (function() {
                return r
            })), n.d(e, "mutations", (function() {
                return o
            }));
            var r = function() {
                    return {
                        isOpen: !1
                    }
                },
                o = {
                    toggleMenu: function(t, e) {
                        t.isOpen = void 0 === e ? !t.isOpen : e
                    }
                }
        },
        301: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    data: function() {
                        return {
                            menu: ["About", "News", "Research", "FAQs"]
                        }
                    },
                    computed: {
                        isOpen: function() {
                            return this.$store.state.menu.isOpen
                        }
                    },
                    watch: {
                        $route: function() {
                            this.$store.commit("menu/toggleMenu", !1)
                        }
                    },
                    methods: {
                        toggleMenu: function() {
                            this.$store.commit("menu/toggleMenu")
                        }
                    }
                },
                o = (n(280), n(32)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:swipe.left",
                            value: t.toggleMenu,
                            expression: "toggleMenu",
                            arg: "swipe",
                            modifiers: {
                                left: !0
                            }
                        }],
                        staticClass: "mobile-menu",
                        class: t.isOpen ? "menu-open" : "menu-close"
                    }, [e("div", {
                        staticClass: "tool-bar"
                    }, [e("img", {
                        attrs: {
                            src: n(279),
                            height: "30"
                        },
                        on: {
                            click: t.toggleMenu
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "nav-menu"
                    }, [e("div", {
                        staticClass: "content"
                    }, [e("ul", [e("li", [e("NuxtLink", {
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("About")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        attrs: {
                            to: "/traveling-to-nairobi"
                        }
                    }, [t._v("Traveling To Nairobi")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        attrs: {
                            to: "/venue-and-dress-code"
                        }
                    }, [t._v("Venue, getting there and dress code")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        attrs: {
                            to: "/program"
                        }
                    }, [t._v("Program")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        attrs: {
                            to: "/speakers"
                        }
                    }, [t._v("Speakers")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                        attrs: {
                            to: "/covid-guidelines"
                        }
                    }, [t._v("Covid guidelines")])], 1)]), t._v(" "), e("a", {
                        staticClass: "register-btn",
                        attrs: {
                            href: "https://us02web.zoom.us/webinar/register/WN_0hjngnDvRRy-NX58vY47eQ",
                            target: "_blank"
                        }
                    }, [t._v("Webinar Registration")])])])])
                }), [], !1, null, "0c0900f4", null);
            e.default = component.exports
        },
        31: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return Yt
            })), n.d(e, "a", (function() {
                return D
            }));
            var r = {};
            n.r(r), n.d(r, "CountDown", (function() {
                return X
            })), n.d(r, "Footer", (function() {
                return V
            })), n.d(r, "Menu", (function() {
                return tt
            })), n.d(r, "Navbar", (function() {
                return et
            })), n.d(r, "SlideMenu", (function() {
                return nt
            })), n.d(r, "SocialMedia", (function() {
                return ot
            })), n.d(r, "Sponsors", (function() {
                return it
            })), n.d(r, "IconsBack", (function() {
                return at
            })), n.d(r, "IconsClose", (function() {
                return ct
            })), n.d(r, "IconsMenu", (function() {
                return st
            })), n.d(r, "IconsNo", (function() {
                return ut
            })), n.d(r, "IconsYes", (function() {
                return lt
            })), n.d(r, "IconsEmail", (function() {
                return ft
            })), n.d(r, "IconsFacebook", (function() {
                return pt
            })), n.d(r, "IconsFlickr", (function() {
                return ht
            })), n.d(r, "Icons", (function() {
                return mt
            })), n.d(r, "IconsInstagram", (function() {
                return gt
            })), n.d(r, "IconsTwitter", (function() {
                return xt
            })), n.d(r, "IconsYoutube", (function() {
                return vt
            }));
            n(46), n(38), n(45), n(79), n(39), n(80);
            var o = n(12),
                c = n(27),
                l = (n(77), n(42), n(18), n(61), n(25), n(62), n(1)),
                f = n(81),
                d = n(203),
                h = n(133),
                m = n.n(h),
                x = n(63),
                v = n.n(x),
                y = (n(40), n(41), n(134)),
                w = n(30),
                j = n(0);
            n(208);
            "scrollRestoration" in window.history && (Object(j.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(j.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(j.u)("manual")
            })));

            function _(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function O(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? _(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var k = function() {};
            l.a.use(y.a);
            var $ = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, n) {
                    var r = !1,
                        o = t !== e;
                    n ? r = n : o && function(t) {
                        var e = Object(j.g)(t);
                        if (1 === e.length) {
                            var n = e[0].options;
                            return !1 !== (void 0 === n ? {} : n).scrollToTop
                        }
                        return e.some((function(t) {
                            var e = t.options;
                            return e && e.scrollToTop
                        }))
                    }(t) && (r = {
                        x: 0,
                        y: 0
                    });
                    var c = window.$nuxt;
                    return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function() {
                        return c.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        c.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var n = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    var o = document.querySelector(n);
                                    if (o) {
                                        var c;
                                        r = {
                                            selector: n
                                        };
                                        var l = Number(null === (c = getComputedStyle(o)["scroll-margin-top"]) || void 0 === c ? void 0 : c.replace("px", ""));
                                        l && (r.offset = {
                                            y: l
                                        })
                                    }
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/covid-guidelines",
                    component: function() {
                        return Object(j.m)(Promise.all([n.e(0), n.e(20)]).then(n.bind(null, 394)))
                    },
                    name: "covid-guidelines"
                }, {
                    path: "/program",
                    component: function() {
                        return Object(j.m)(Promise.all([n.e(0), n.e(22)]).then(n.bind(null, 395)))
                    },
                    name: "program"
                }, {
                    path: "/speakers",
                    component: function() {
                        return Object(j.m)(Promise.all([n.e(0), n.e(23)]).then(n.bind(null, 396)))
                    },
                    name: "speakers"
                }, {
                    path: "/speakers-list",
                    component: function() {
                        return Object(j.m)(Promise.all([n.e(0), n.e(24)]).then(n.bind(null, 397)))
                    },
                    name: "speakers-list"
                }, {
                    path: "/traveling-to-nairobi",
                    component: function() {
                        return Object(j.m)(Promise.all([n.e(0), n.e(25)]).then(n.bind(null, 398)))
                    },
                    name: "traveling-to-nairobi"
                }, {
                    path: "/venue-and-dress-code",
                    component: function() {
                        return Object(j.m)(Promise.all([n.e(0), n.e(26)]).then(n.bind(null, 399)))
                    },
                    name: "venue-and-dress-code"
                }, {
                    path: "/",
                    component: function() {
                        return Object(j.m)(Promise.all([n.e(0), n.e(21)]).then(n.bind(null, 400)))
                    },
                    name: "index"
                }],
                fallback: !1
            };

            function C(t, e) {
                var base = e._app && e._app.basePath || $.base,
                    n = new y.a(O(O({}, $), {}, {
                        base: base
                    })),
                    r = n.push;
                n.push = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, t, e, n)
                };
                var o = n.resolve.bind(n);
                return n.resolve = function(t, e, n) {
                    return "string" == typeof t && (t = Object(w.c)(t)), o(t, e, n)
                }, n
            }
            var T = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, l = n.$nuxt.nuxt.transitions, f = n.$nuxt.nuxt.defaultTransition, d = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && d++, n = n.$parent;
                        data.nuxtChildDepth = d;
                        var h = l[d] || f,
                            m = {};
                        M.forEach((function(t) {
                            void 0 !== h[t] && (m[t] = h[t])
                        }));
                        var x = {};
                        S.forEach((function(t) {
                            "function" == typeof h[t] && (x[t] = h[t].bind(c))
                        }));
                        var v = x.beforeEnter;
                        if (x.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), v) return v.call(c, t)
                            }, !1 === h.css) {
                            var y = x.leave;
                            (!y || y.length < 2) && (x.leave = function(t, e) {
                                y && y.call(c, t), c.$nextTick(e)
                            })
                        }
                        var w = o("routerView", data);
                        return r.keepAlive && (w = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [w])), o("transition", {
                            props: m,
                            on: x
                        }, [w])
                    }
                },
                M = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                S = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                A = {
                    name: "NuxtError",
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        statusCode: function() {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function() {
                            return this.error.message || "Error"
                        }
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                            }]
                        }
                    }
                },
                P = (n(273), n(32)),
                D = Object(P.a)(A, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "__nuxt-error-page"
                    }, [e("div", {
                        staticClass: "error"
                    }, [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? e("p", {
                        staticClass: "description"
                    }, [void 0 === t.$route ? e("a", {
                        staticClass: "error-link",
                        attrs: {
                            href: "/"
                        }
                    }) : e("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
                }), [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "logo"
                    }, [t("a", {
                        attrs: {
                            href: "https://nuxtjs.org",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [this._v("Nuxt")])])
                }], !1, null, null, null).exports,
                N = n(22),
                E = (n(107), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: T,
                        NuxtError: D
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(j.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(N.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(D, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                I = (n(47), n(55), n(58), n(59), n(85), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), clearTimeout(this._hide), this._timer = null
                        },
                        start: function() {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function(t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var t = this;
                            return this.clear(), this._hide = setTimeout((function() {
                                t.show = !1, t.$nextTick((function() {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function(t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                R = (n(275), Object(P.a)(I, undefined, undefined, !1, null, null, null).exports),
                z = {
                    watch: {
                        $route: function() {
                            location.reload()
                        }
                    }
                },
                L = (n(277), Object(P.a)(z, (function() {
                    var t = this._self._c;
                    return t("div", [t("Nuxt", {
                        attrs: {
                            "keep-alive": ""
                        }
                    }), this._v(" "), t("SlideMenu")], 1)
                }), [], !1, null, null, null)),
                U = L.exports;

            function Y(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return B(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function B(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            installComponents(L, {
                SlideMenu: n(301).default
            });
            var Q = {
                    _default: Object(j.s)(U)
                },
                F = {
                    render: function(t, e) {
                        var n = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = t(this.layout || "nuxt"),
                            o = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            c = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, c])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        l.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$loading = t.$refs.loading;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        },
                        isPreview: function() {
                            return Boolean(this.$options.previewData)
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((n = Object(j.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), r = n.map(function() {
                                                var e = Object(o.a)(regeneratorRuntime.mark((function e(n) {
                                                    var p, r, o, component;
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return p = [], n.$options.fetch && n.$options.fetch.length && p.push(Object(j.q)(n.$options.fetch, t.context)), n.$options.asyncData && p.push(Object(j.q)(n.$options.asyncData, t.context).then((function(t) {
                                                                    for (var e in t) l.a.set(n.$data, e, t[e])
                                                                }))), e.next = 5, Promise.all(p);
                                                            case 5:
                                                                p = [], n.$fetch && p.push(n.$fetch()), r = Y(Object(j.e)(n.$vnode.componentInstance));
                                                                try {
                                                                    for (r.s(); !(o = r.n()).done;) component = o.value, p.push(component.$fetch())
                                                                } catch (t) {
                                                                    r.e(t)
                                                                } finally {
                                                                    r.f()
                                                                }
                                                                return e.abrupt("return", Promise.all(p));
                                                            case 10:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), e.prev = 5, e.next = 8, Promise.all(r);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(j.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                                var t = (D.options || D).layout;
                                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                            }
                        },
                        setLayout: function(t) {
                            return t && Q["_" + t] || (t = "default"), this.layoutName = t, this.layout = Q["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && Q["_" + t] || (t = "default"), Promise.resolve(Q["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: R
                    }
                };
            n(78);
            l.a.use(f.a);
            var H = ["state", "getters", "actions", "mutations"],
                K = {};
            K.modules = K.modules || {},
                function(t, e) {
                    t = t.default || t;
                    var n = e.replace(/\.(js|mjs)$/, "").split("/"),
                        r = n[n.length - 1],
                        o = "store/".concat(e);
                    if (t = "state" === r ? function(t, e) {
                            if ("function" != typeof t) {
                                console.warn("".concat(e, " should export a method that returns an object"));
                                var n = Object.assign({}, t);
                                return function() {
                                    return n
                                }
                            }
                            return J(t, e)
                        }(t, o) : J(t, o), H.includes(r)) {
                        var c = r;
                        Z(W(K, n, {
                            isProperty: !0
                        }), t, c)
                    } else {
                        "index" === r && (n.pop(), r = n[n.length - 1]);
                        for (var l = W(K, n), f = 0, d = H; f < d.length; f++) {
                            var h = d[f];
                            Z(l, t[h], h)
                        }!1 === t.namespaced && delete l.namespaced
                    }
                }(n(282), "menu.js");
            var G = K instanceof Function ? K : function() {
                return new f.a.Store(Object.assign({
                    strict: !1
                }, K))
            };

            function J(t, e) {
                if (t.state && "function" != typeof t.state) {
                    console.warn("'state' should be a method that returns an object in ".concat(e));
                    var n = Object.assign({}, t.state);
                    t = Object.assign({}, t, {
                        state: function() {
                            return n
                        }
                    })
                }
                return t
            }

            function W(t, e) {
                var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).isProperty,
                    r = void 0 !== n && n;
                if (!e.length || r && 1 === e.length) return t;
                var o = e.shift();
                return t.modules[o] = t.modules[o] || {}, t.modules[o].namespaced = !0, t.modules[o].modules = t.modules[o].modules || {}, W(t.modules[o], e, {
                    isProperty: r
                })
            }

            function Z(t, e, n) {
                e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
            }
            n(105);
            var X = function() {
                    return n.e(3).then(n.bind(null, 339)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                V = function() {
                    return n.e(0).then(n.bind(null, 307)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                tt = function() {
                    return n.e(16).then(n.bind(null, 306)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                et = function() {
                    return n.e(17).then(n.bind(null, 401)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                nt = function() {
                    return Promise.resolve().then(n.bind(null, 301)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                ot = function() {
                    return n.e(18).then(n.bind(null, 338)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                it = function() {
                    return n.e(19).then(n.bind(null, 328)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                at = function() {
                    return n.e(5).then(n.bind(null, 402)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                ct = function() {
                    return n.e(6).then(n.bind(null, 403)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                st = function() {
                    return n.e(11).then(n.bind(null, 404)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                ut = function() {
                    return n.e(12).then(n.bind(null, 405)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                lt = function() {
                    return n.e(14).then(n.bind(null, 406)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                ft = function() {
                    return n.e(7).then(n.bind(null, 308)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                pt = function() {
                    return n.e(8).then(n.bind(null, 309)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                ht = function() {
                    return n.e(9).then(n.bind(null, 313)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                mt = function() {
                    return n.e(4).then(n.bind(null, 317)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                gt = function() {
                    return n.e(10).then(n.bind(null, 310)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                xt = function() {
                    return n.e(13).then(n.bind(null, 311)).then((function(t) {
                        return bt(t.default || t)
                    }))
                },
                vt = function() {
                    return n.e(15).then(n.bind(null, 312)).then((function(t) {
                        return bt(t.default || t)
                    }))
                };

            function bt(t) {
                if (!t || !t.functional) return t;
                var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
                return {
                    render: function(n) {
                        var r = {},
                            o = {};
                        for (var c in this.$attrs) e.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                        return n(t, {
                            on: this.$listeners,
                            attrs: r,
                            props: o,
                            scopedSlots: this.$scopedSlots
                        }, this.$slots.default)
                    }
                }
            }
            for (var yt in r) l.a.component(yt, r[yt]), l.a.component("Lazy" + yt, r[yt]);
            var wt = n(82),
                jt = n.n(wt),
                _t = n(205);

            function Ot(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function kt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ot(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ot(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function $t(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return Ct(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ct(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function Ct(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            for (var Tt = {
                    setBaseURL: function(t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function(t, e) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            o = $t(Array.isArray(r) ? r : [r]);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var c = n.value;
                                e ? this.defaults.headers[c][t] = e : delete this.defaults.headers[c][t]
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    },
                    setToken: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            r = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", r, n)
                    },
                    onRequest: function(t) {
                        this.interceptors.request.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function(t) {
                        this.interceptors.response.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function(t) {
                        this.interceptors.request.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function(t) {
                        this.interceptors.response.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function(t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function(t) {
                        return Pt(Object(_t.a)(t, this.defaults))
                    }
                }, Mt = function() {
                    var t = At[St];
                    Tt["$" + t] = function() {
                        return this[t].apply(this, arguments).then((function(t) {
                            return t && t.data
                        }))
                    }
                }, St = 0, At = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; St < At.length; St++) Mt();
            var Pt = function(t) {
                    var e = jt.a.create(t);
                    return e.CancelToken = jt.a.CancelToken, e.isCancel = jt.a.isCancel,
                        function(t) {
                            for (var e in Tt) t[e] = Tt[e].bind(t)
                        }(e), e.onRequest((function(t) {
                            t.headers = kt(kt({}, e.defaults.headers.common), t.headers)
                        })), Dt(e), e
                },
                Dt = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        n = function() {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e
                        },
                        r = 0;
                    t.onRequest((function(t) {
                        t && !1 === t.progress || r++
                    })), t.onResponse((function(t) {
                        t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
                    })), t.onError((function(t) {
                        t && t.config && !1 === t.config.progress || (r--, jt.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
                    }));
                    var o = function(t) {
                        if (r && t.total) {
                            var progress = 100 * t.loaded / (t.total * r);
                            n().set(Math.min(100, progress))
                        }
                    };
                    t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
                },
                Nt = function(t, e) {
                    var n = t.$config && t.$config.axios || {},
                        r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/";
                    var o = Pt({
                        baseURL: r,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    t.$axios = o, e("axios", o)
                },
                Et = n(206),
                It = n.n(Et);

            function Rt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function zt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Rt(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Rt(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            l.a.use(It.a), l.a.component(m.a.name, m.a), l.a.component(v.a.name, zt(zt({}, v.a), {}, {
                render: function(t, e) {
                    return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(t, e)
                }
            })), l.a.component(T.name, T), l.a.component("NChild", T), l.a.component(E.name, E), Object.defineProperty(l.a.prototype, "$nuxt", {
                get: function() {
                    var t = this.$root ? this.$root.$options.$nuxt : null;
                    return t || "undefined" == typeof window ? t : window.$nuxt
                },
                configurable: !0
            }), l.a.use(d.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var Lt = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to"
                },
                qt = f.a.Store.prototype.registerModule;

            function Ut(path, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Array.isArray(path) ? !!path.reduce((function(t, path) {
                        return t && t[path]
                    }), this.state) : path in this.state;
                return qt.call(this, path, t, zt({
                    preserveState: n
                }, e))
            }

            function Yt(t) {
                return Bt.apply(this, arguments)
            }

            function Bt() {
                return Bt = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    var n, r, c, f, d, h, path, m, x = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return m = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    f[t = "$" + t] = e, f.context[t] || (f.context[t] = e), r[t] = f[t];
                                    var n = "__nuxt_" + t + "_installed__";
                                    l.a[n] || (l.a[n] = !0, l.a.use((function() {
                                        Object.prototype.hasOwnProperty.call(l.a.prototype, t) || Object.defineProperty(l.a.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, n = x.length > 1 && void 0 !== x[1] ? x[1] : {}, r = G(e), t.next = 5, C(0, n);
                            case 5:
                                return c = t.sent, r.$router = c, r.registerModule = Ut, f = zt({
                                    head: {
                                        title: "ai-conference-website",
                                        htmlAttrs: {
                                            lang: "en"
                                        },
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            "http-equiv": "cache-control",
                                            content: "no-cache"
                                        }, {
                                            "http-equiv": "expires",
                                            content: "0"
                                        }, {
                                            "http-equiv": "pragma",
                                            content: "no-cache"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: ""
                                        }, {
                                            name: "format-detection",
                                            content: "telephone=no"
                                        }, {
                                            name: "msapplication-TileColor",
                                            content: "#c02126"
                                        }, {
                                            name: "msapplication-TileImage",
                                            content: "/ms-icon-144x144.png"
                                        }, {
                                            name: "theme-color",
                                            content: "#c02126"
                                        }, {
                                            name: "author",
                                            content: "Kevin Muchwat"
                                        }],
                                        link: [{
                                            rel: "apple-touch-icon",
                                            sizes: "57x57",
                                            href: "/apple-icon-57x57.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "60x60",
                                            href: "/apple-icon-60x60.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "72x72",
                                            href: "/apple-icon-72x72.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "76x76",
                                            href: "/apple-icon-76x76.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "114x114",
                                            href: "/apple-icon-114x114.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "120x120",
                                            href: "/apple-icon-120x120.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "144x144",
                                            href: "/apple-icon-144x144.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "152x152",
                                            href: "/apple-icon-152x152.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "180x180",
                                            href: "/apple-icon-180x180.png"
                                        }, {
                                            rel: "apple-touch-icon",
                                            sizes: "144x144",
                                            href: "/apple-icon-144x144.png"
                                        }, {
                                            rel: "icon",
                                            type: "image/x-icon",
                                            href: "/favicon.ico"
                                        }, {
                                            rel: "icon",
                                            type: "image/png",
                                            sizes: "192x192",
                                            href: "/android-icon-192x192.png"
                                        }, {
                                            rel: "icon",
                                            type: "image/png",
                                            sizes: "32x32",
                                            href: "/favicon-32x32.png"
                                        }, {
                                            rel: "icon",
                                            type: "image/png",
                                            sizes: "96x96",
                                            href: "/favicon-96x96.png"
                                        }, {
                                            rel: "icon",
                                            type: "image/png",
                                            sizes: "16x16",
                                            href: "/favicon-16x16.png"
                                        }, {
                                            rel: "manifest",
                                            href: "/manifest.json"
                                        }, {
                                            rel: "preconnect",
                                            href: "https://fonts.googleapis.com"
                                        }, {
                                            rel: "preconnect",
                                            href: "https://fonts.gstatic.com"
                                        }, {
                                            rel: "stylesheet",
                                            href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
                                        }, {
                                            name: "msapplication-TileColor",
                                            content: "#c02126"
                                        }, {
                                            name: "msapplication-TileImage",
                                            content: "/ms-icon-144x144.png"
                                        }, {
                                            name: "theme-color",
                                            content: "#c02126"
                                        }],
                                        style: [],
                                        script: []
                                    },
                                    store: r,
                                    router: c,
                                    nuxt: {
                                        defaultTransition: Lt,
                                        transitions: [Lt],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, Lt, {
                                                    name: t
                                                }) : Object.assign({}, Lt, t) : Lt
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, f.context._errored = Boolean(t), t = t ? Object(j.p)(t) : null;
                                            var n = f.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, F), r.app = f, d = e ? e.next : function(t) {
                                    return f.router.push(t)
                                }, e ? h = c.resolve(e.url).route : (path = Object(j.f)(c.options.base, c.options.mode), h = c.resolve(path).route), t.next = 14, Object(j.t)(f, {
                                    store: r,
                                    route: h,
                                    next: d,
                                    error: f.nuxt.error.bind(f),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    beforeSerializeFns: e ? e.beforeSerializeFns : void 0,
                                    ssrContext: e
                                });
                            case 14:
                                m("config", n), window.__NUXT__ && window.__NUXT__.state && r.replaceState(window.__NUXT__.state), f.context.enablePreview = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    f.previewData = Object.assign({}, t), m("preview", t)
                                }, t.next = 20;
                                break;
                            case 20:
                                if ("function" != typeof Nt) {
                                    t.next = 23;
                                    break
                                }
                                return t.next = 23, Nt(f.context, m);
                            case 23:
                                t.next = 26;
                                break;
                            case 26:
                                return f.context.enablePreview = function() {
                                    console.warn("You cannot call enablePreview() outside a plugin.")
                                }, t.next = 29, new Promise((function(t, e) {
                                    if (!c.resolve(f.context.route.fullPath).route.matched.length) return t();
                                    c.replace(f.context.route.fullPath, t, (function(n) {
                                        if (!n._isRouter) return e(n);
                                        if (2 !== n.type) return t();
                                        var r = c.afterEach(function() {
                                            var e = Object(o.a)(regeneratorRuntime.mark((function e(n, o) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 3, Object(j.j)(n);
                                                        case 3:
                                                            f.context.route = e.sent, f.context.params = n.params || {}, f.context.query = n.query || {}, r(), t();
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 29:
                                return t.abrupt("return", {
                                    store: r,
                                    app: f,
                                    router: c
                                });
                            case 30:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), Bt.apply(this, arguments)
            }
        }
    },
    [
        [209, 27, 2, 28]
    ]
]);