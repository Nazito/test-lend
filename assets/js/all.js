!(function a(b, c, d) {
  function e(g, h) {
    if (!c[g]) {
      if (!b[g]) {
        var i = "function" == typeof require && require;
        if (!h && i) return i(g, !0);
        if (f) return f(g, !0);
        var j = new Error("Cannot find module '" + g + "'");
        throw ((j.code = "MODULE_NOT_FOUND"), j);
      }
      var k = (c[g] = {
        exports: {},
      });
      b[g][0].call(
        k.exports,
        function (a) {
          var c = b[g][1][a];
          return e(c ? c : a);
        },
        k,
        k.exports,
        a,
        b,
        c,
        d
      );
    }
    return c[g].exports;
  }
  for (
    var f = "function" == typeof require && require, g = 0;
    g < d.length;
    g++
  )
    e(d[g]);
  return e;
})(
  {
    1: [
      function (a, b, c) {
        b.exports = {
          social: {
            width: 1200,
            height: 630,
          },
          square: {
            width: 700,
            height: 700,
          },
          "square-400": {
            width: 400,
            height: 400,
            parent: "square",
          },
          "square-220": {
            width: 220,
            height: 220,
            parent: "square",
          },
          "reading-list": {
            width: 50,
            height: 50,
            parent: "square",
          },
          "programmable-story-300x250": {
            width: 300,
            height: 250,
            parent: "square",
          },
          "programmable-story-300x350": {
            width: 300,
            height: 350,
            parent: "square",
          },
          featured: {
            width: 900,
            height: 504,
          },
          "featured-promo-724": {
            width: 724,
            height: 407,
            parent: "featured",
          },
          "featured-promo-551": {
            width: 551,
            height: 310,
            parent: "featured",
          },
          "featured-promo-320": {
            width: 320,
            height: 180,
            parent: "featured",
          },
          "featured-promo-140": {
            width: 140,
            height: 80,
            parent: "featured",
          },
          "featured-story": {
            width: 264,
            height: 150,
            parent: "featured",
          },
          "featured-related": {
            width: 300,
            height: 166,
            parent: "featured",
          },
          "homepage-default-vertical": {
            width: 300,
            height: 587,
          },
          "article-leads-vertical": {
            width: 460,
            height: 673,
          },
          "article-leads-vertical-380": {
            width: 380,
            height: 556,
            parent: "article-leads-vertical",
          },
          "article-leads-vertical-300": {
            width: 300,
            height: 439,
            parent: "article-leads-vertical",
          },
          "article-leads-feature": {
            width: 1100,
            height: 618,
          },
          "article-leads-feature-687": {
            width: 687,
            height: 386,
            parent: "article-leads-feature",
          },
          "article-leads-feature-413": {
            width: 413,
            height: 232,
            parent: "article-leads-feature",
          },
          "article-leads-horizontal": {
            width: 700,
            height: 394,
          },
          "article-leads-horizontal-437": {
            width: 437,
            height: 246,
            parent: "article-leads-horizontal",
          },
          "article-leads-horizontal-261": {
            width: 261,
            height: 147,
            parent: "article-leads-horizontal",
          },
          "photos-vertical-module": {
            width: 257,
            height: 633,
          },
          "photos-vertical-module-200": {
            width: 200,
            height: 494,
            parent: "photos-vertical-module",
          },
          "photos-vertical-module-160": {
            width: 160,
            height: 395,
            parent: "photos-vertical-module",
          },
          "hotpics-vertical": {
            width: 450,
            height: 630,
          },
          "hotpics-vertical-140": {
            width: 140,
            height: 196,
            parent: "hotpics-vertical",
          },
          "hotpics-vertical-100": {
            width: 100,
            height: 140,
            parent: "hotpics-vertical",
          },
          "channel-header": {
            width: 1280,
            height: 213,
          },
          "channel-header-800": {
            width: 780,
            height: 160,
            parent: "channel-header",
          },
          "hub-header": {
            width: 1280,
            height: 430,
          },
          "hub-header-800": {
            width: 780,
            height: 320,
            parent: "channel-header",
          },
          "300-width": {
            width: 300,
            height: null,
          },
          "480-width": {
            width: 480,
            height: null,
          },
          "620-width": {
            width: 620,
            height: null,
          },
          "760-width": {
            width: 760,
            height: null,
          },
          "820-width": {
            width: 820,
            height: null,
          },
        };
      },
      {},
    ],
    2: [
      function (a, b, c) {
        b.exports = {
          wennermedia: {
            siteId: 1,
            templateFolder: ["cms", "global"],
            globals: {
              production: {
                formsEnvironment: "cms",
                assetsRoot: "//assets.wennermedia.com/cms/",
                mediaRoot: "//img.wennermedia.com/",
                css: "css/main.min.c8c83e04f15c5483.css",
                js: "js/main.min.32722acd1d7900bb.js",
              },
              staging: {},
              development: {
                assetsRoot: "/assets/cms/dist/",
                css: "css/main.css",
                js: "js/main.js",
              },
            },
          },
          usweekly: {
            siteId: 2,
            templateFolder: ["usweekly", "global"],
            globals: {
              production: {
                protocol: "//",
                siteName: "Us Weekly",
                tagline:
                  "Latest Celebrity Gossip, Pictures & Entertainment News",
                host: "www.usmagazine.com",
                formsEnvironment: "usweekly",
                assetsRoot: "//assets.wennermedia.com/usweekly/",
                assetsHost: "assets.wennermedia.com/usweekly/",
                mediaRoot: "//img.wennermedia.com/",
                mediaHost: "img.wennermedia.com/",
                favicon: !0,
                gtm: {
                  account: "GTM-KPZ5NG",
                  property: "usmagazine",
                },
                bitly: {
                  token: "74c2f19dd802975329431eea0e513e26b8bf38ce",
                },
                social: {
                  twitter: {
                    account: "UsWeekly",
                    page: "https://twitter.com/usweekly",
                  },
                  facebook: {
                    id: "1642445729366739",
                    publisherUrl: "https://www.facebook.com/UsWeekly",
                    page: "https://www.facebook.com/UsWeekly",
                  },
                  googlePlus: {
                    publisherUrl: "https://plus.google.com/+UsWeekly",
                    page: "https://plus.google.com/+UsWeekly/posts",
                  },
                  pinterest: {
                    page: "https://www.pinterest.com/usweekly/",
                  },
                  instagram: {
                    page: "https://instagram.com/usweekly/",
                  },
                  tumblr: {
                    page: "http://usweekly.tumblr.com/",
                  },
                  stumbleupon: {
                    page: "http://www.stumbleupon.com/channel/UsWeekly",
                  },
                  youtube: {
                    page: "https://www.youtube.com/user/UsWeekly",
                  },
                },
                adSite: "us",
                css: "css/main.min.css",
                js: "js/main.min.js",
                brightcove: {
                  account: "3891678522001",
                  players: {
                    autoplay: "7f3a9a12-e5b7-4642-ac9d-321288ed9bd5",
                    noAutoplay: "4dee84fc-b708-4417-a2e5-f2211c3a8c72",
                  },
                },
                chartbeat: {
                  apiKey: "2dd0177d245557b1a84069be3ab912aa",
                  host: "usmagazine.com",
                },
                xmlns: {
                  namespace: "usmagazine",
                },
              },
              staging: {
                host: "v2.usmagazine.com",
                gtm: {
                  account: "GTM-MCQKDK",
                  property: "usmagazine",
                },
              },
              development: {
                host: "v2.usmagazine.loc:3000",
                assetsRoot: "/assets/usweekly/dist/",
                assetsHost: "assets.wennermedia.com/usweekly/",
                css: "css/main.css",
                js: "js/main.js",
              },
            },
            oAuthStrategies: {
              facebook: {
                name: "facebook-usweekly",
                configuration: {
                  clientID: "1642445729366739",
                  clientSecret: "496b2843475038df465faf451dd06696",
                  callbackURL: "/facebook/callback",
                  profileFields: ["id", "displayName", "emails"],
                },
                scope: "email",
              },
              google: {
                name: "google-usweekly",
                configuration: {
                  clientID:
                    "338429763190-9n6j0ij29pgl30s69vl6cp62m14sjqvd.apps.googleusercontent.com",
                  clientSecret: "YpVk0jSUeGTsMZ8PdtJZU3Ij",
                  callbackURL: "/google/callback",
                },
                scope: "https://www.googleapis.com/auth/userinfo.email",
              },
            },
          },
        };
      },
      {},
    ],
    3: [
      function (a, b, c) {
        var d = a("../../config/image-crop-templates"),
          e = function (a) {
            return function (b) {
              return null == b ? void 0 : b[a];
            };
          },
          f = Math.pow(2, 53) - 1,
          g = e("length"),
          h = function (a) {
            var b = g(a);
            return "number" == typeof b && b >= 0 && f >= b;
          },
          i = function (a) {
            return "[object String]" === toString.call(a);
          },
          j = function (a) {
            return "[object Arguments]" === toString.call(a);
          },
          k = function (a) {
            return null == a
              ? !0
              : h(a) && (Array.isArray(a) || i(a) || j(a))
              ? 0 === a.length
              : 0 === Object.keys(a).length;
          };
        b.exports = {
          getImageUrl: function (a, b) {
            if (k(a)) return "";
            if (k(a[b])) {
              var c = d[b].parent;
              return k(a[c])
                ? a.main_image
                  ? b + "/" + a.main_image.filename
                  : b + "/default-usweekly.jpg"
                : b + "/" + a[c].filename;
            }
            return b + "/" + a[b].filename;
          },
          getImageField: function (a, b, c) {
            if (k(a) || k(b) || k(c)) return "";
            if (!k(a[c])) {
              if (!k(a[c][b])) return a[c][b];
              if (!k(a[c].parent)) {
                var e = d[c].parent;
                if (!k(a[e]) && !k(a[e][b])) return a[e][b];
              }
            }
            return k(a.main_image) || k(a.main_image[b]) ? "" : a.main_image[b];
          },
        };
      },
      {
        "../../config/image-crop-templates": 1,
      },
    ],
    4: [
      function (a, b, c) {
        b.exports = function (a, b, c) {
          var d;
          return function () {
            var e = this,
              f = arguments,
              g = function () {
                (d = null), c || a.apply(e, f);
              },
              h = c && !d;
            clearTimeout(d), (d = setTimeout(g, b)), h && a.apply(e, f);
          };
        };
      },
      {},
    ],
    5: [
      function (a, b, c) {
        b.exports = function () {
          var a = {};
          return (
            window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
              b,
              c,
              d
            ) {
              a[c] = d;
            }),
            a
          );
        };
      },
      {},
    ],
    6: [
      function (a, b, c) {
        b.exports = function (a, b, c) {
          var d,
            e,
            f,
            g = null,
            h = 0;
          c || (c = {});
          var i = function () {
            (h = c.leading === !1 ? 0 : new Date().getTime()),
              (g = null),
              (f = a.apply(d, e)),
              g || (d = e = null);
          };
          return function () {
            var j = new Date().getTime();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return (
              (d = this),
              (e = arguments),
              0 >= k || k > b
                ? (g && (clearTimeout(g), (g = null)),
                  (h = j),
                  (f = a.apply(d, e)),
                  g || (d = e = null))
                : g || c.trailing === !1 || (g = setTimeout(i, k)),
              f
            );
          };
        };
      },
      {},
    ],
    7: [
      function (a, b, c) {
        function d(a, b) {
          if (s(a)) return "{" + a + "}";
          if ((a.dataValues && (a = a.dataValues), b > 1)) return "{ }";
          for (
            var c = Object.keys(a), e = new Array(), f = 0;
            f < c.length;
            f++
          ) {
            var g = '"' + c[f] + '":',
              h = a[c[f]];
            "object" == typeof h && h
              ? (g += h.dataValues ? d(h.dataValues, ++b) : d(h, ++b))
              : (g =
                  "string" == typeof h
                    ? g + '"' + h.replace(/(<([^>]+)>)/gi, "") + '"'
                    : g + '"' + h + '"'),
              e.push(g);
          }
          return "{" + e.join(",") + "}";
        }

        function e(a, b, c) {
          var a = a,
            d = /<wm:media type="photo" id="([^"]+)"><\/wm:media>/gi;
          return (a = a.replace(d, function (a, d) {
            var e = c.render("partials/_insetImage.html.twig", b["photo_" + d]);
            return e;
          }));
        }

        function f(a, b, c) {
          var a = a,
            d = /<wm:embed type="inset" id="([^"]+)"><\/wm:embed>/gi;
          return (a = a.replace(d, function (a, d) {
            var e = c.render("partials/_insetEmbed.html.twig", b["inset_" + d]);
            return e;
          }));
        }

        function g(a, b, c) {
          var a = a,
            d = /<wm:html type="inset" id="([^"]+)"><\/wm:html>/gi;
          return (a = a.replace(d, function (a, d) {
            var e = c.render("partials/_insetHTML.html.twig", b["html_" + d]);
            return e;
          }));
        }

        function h(a, b, c) {
          var a = a,
            d = /<wm:video type="inset" id="([^"]+)"><\/wm:video>/gi;
          return (a = a.replace(d, function (a, d) {
            var e = c.render("partials/_insetVideo.html.twig", b["video_" + d]);
            return e;
          }));
        }

        function i(a, b, c) {
          for (
            var a = a,
              d = /<wm:embed type="link" id="([^"]+)" text="([^"]+)"><\/wm:embed>/i,
              e = 0;
            null !== d.exec(a);

          )
            a = a.replace(d, function (a, d, f) {
              var g = {
                  embed: b["related_" + d],
                  text: f,
                  count: e++,
                },
                h = c.render("partials/_insetLink.html.twig", g);
              return h;
            });
          return a;
        }
        var j = a("phpdate-js"),
          k = a("time-ago")(),
          l = a("./helper/Image");
        b.exports = function (a, b) {
          a.addGlobal("globals", b),
            a.addGlobal("debug", function (a) {
              return arguments[1]
                ? void console.log(d(a))
                : "<pre style='text-align:left; background: #e0e0e0; white-space:pre; padding: 4px; border-radius: 5px; border: 2px solid #c0c0c0; display: inline-block; width:500px;  word-wrap: break-word;'>" +
                    d(a) +
                    "</pre>";
            }),
            a.addFilter("parseBody", function (b, c, d) {
              return (
                c && (b = e(b, c, a)),
                d && (b = f(b, d, a)),
                d && (b = i(b, d, a)),
                d && (b = g(b, d, a)),
                d && (b = h(b, d, a)),
                b
              );
            }),
            a.addFilter("encodeURI", function (a) {
              return encodeURI(a);
            }),
            a.addGlobal("renderImage", function (b, c, d, e, f, g) {
              if (c) {
                if (q(c)) {
                  var h = "",
                    i = b + d + "/" + c;
                  if (void 0 !== f)
                    for (var j = 0; j < f.length; j++)
                      f[j] &&
                        f[j][0] &&
                        f[j][1] &&
                        (h += b + f[j][0] + "/" + c + " " + f[j][1] + ", ");
                } else {
                  var k = c,
                    h = "",
                    i = l.getImageUrl(k, d);
                  if (void 0 !== f)
                    for (var j = 0; j < f.length; j++)
                      f[j] &&
                        f[j][0] &&
                        f[j][1] &&
                        (h +=
                          b + l.getImageUrl(k, f[j][0]) + " " + f[j][1] + ", ");
                }
                return a.render("partials/_image.html.twig", {
                  srcFilename: b + i,
                  sizes: e,
                  srcset: h,
                  alt: g,
                });
              }
            }),
            a.addGlobal("renderMediaField", function (a, b, c) {
              return a && b && c ? l.getImageField(a, b, c) : "";
            }),
            a.addGlobal("date", function (a, b, c) {
              var b = b || "Y-m-d H:i:s T",
                c = c || !1;
              if ("now" == a) {
                var d = !0;
                a = new Date();
              } else if ("string" == typeof a) {
                if (isNaN(Date.parse(a))) return;
                a = new Date(a);
              }
              return !a instanceof Date || null == a
                ? void 0
                : 1 == c &&
                  1 != d &&
                  new Date().getTime() - a.getTime() <= 864e5
                ? k.ago(a)
                : j(b, a);
            }),
            a.addFilter("debug", function (a) {
              return (
                "<pre style='text-align:left; background: #e0e0e0; white-space:pre; padding: 4px; border-radius: 5px; border: 2px solid #c0c0c0; display: inline-block; width:500px;  word-wrap: break-word;'>" +
                d(a, 0) +
                "</pre>"
              );
            }),
            a.addFilter("empty", function (a) {
              return s(a);
            }),
            a.addFilter("isString", function (a) {
              return q(a);
            }),
            a.addFilter("commafy", function (a) {
              return isNaN(a)
                ? a
                : parseInt(a)
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            }),
            a.addFilter("imgsrc", function (a, b) {
              return l.getImageUrl(a, b);
            }),
            a.addFilter("stringify", function (a) {
              return JSON.stringify(a);
            }),
            a.addFilter("minify", function (a) {
              return a
                .replace(/(\n\r|\r|\n| |\t)/g, "")
                .replace(/\/\*[^*]*\*+([^\/][^*]*\*+)*\//g, "");
            });
        };
        var m = function (a) {
            return function (b) {
              return null == b ? void 0 : b[a];
            };
          },
          n = Math.pow(2, 53) - 1,
          o = m("length"),
          p = function (a) {
            var b = o(a);
            return "number" == typeof b && b >= 0 && n >= b;
          },
          q = function (a) {
            return "[object String]" === toString.call(a);
          },
          r = function (a) {
            return "[object Arguments]" === toString.call(a);
          },
          s = function (a) {
            return null == a
              ? !0
              : p(a) && (Array.isArray(a) || q(a) || r(a))
              ? 0 === a.length
              : 0 === Object.keys(a).length;
          };
      },
      {
        "./helper/Image": 3,
        "phpdate-js": 10,
        "time-ago": 12,
      },
    ],
    8: [
      function (a, b, c) {
        !(function (a, c) {
          "object" == typeof b && "object" == typeof b.exports
            ? (b.exports = a.document
                ? c(a, !0)
                : function (a) {
                    if (!a.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return c(a);
                  })
            : c(a);
        })("undefined" != typeof window ? window : this, function (a, b) {
          function c(a) {
            var b = "length" in a && a.length,
              c = _.type(a);
            return "function" === c || _.isWindow(a)
              ? !1
              : 1 === a.nodeType && b
              ? !0
              : "array" === c ||
                0 === b ||
                ("number" == typeof b && b > 0 && b - 1 in a);
          }

          function d(a, b, c) {
            if (_.isFunction(b))
              return _.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
              });
            if (b.nodeType)
              return _.grep(a, function (a) {
                return (a === b) !== c;
              });
            if ("string" == typeof b) {
              if (ha.test(b)) return _.filter(b, a, c);
              b = _.filter(b, a);
            }
            return _.grep(a, function (a) {
              return U.call(b, a) >= 0 !== c;
            });
          }

          function e(a, b) {
            for (; (a = a[b]) && 1 !== a.nodeType; );
            return a;
          }

          function f(a) {
            var b = (oa[a] = {});
            return (
              _.each(a.match(na) || [], function (a, c) {
                b[c] = !0;
              }),
              b
            );
          }

          function g() {
            Z.removeEventListener("DOMContentLoaded", g, !1),
              a.removeEventListener("load", g, !1),
              _.ready();
          }

          function h() {
            Object.defineProperty((this.cache = {}), 0, {
              get: function () {
                return {};
              },
            }),
              (this.expando = _.expando + h.uid++);
          }

          function i(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
              if (
                ((d = "data-" + b.replace(ua, "-$1").toLowerCase()),
                (c = a.getAttribute(d)),
                "string" == typeof c)
              ) {
                try {
                  c =
                    "true" === c
                      ? !0
                      : "false" === c
                      ? !1
                      : "null" === c
                      ? null
                      : +c + "" === c
                      ? +c
                      : ta.test(c)
                      ? _.parseJSON(c)
                      : c;
                } catch (e) {}
                sa.set(a, b, c);
              } else c = void 0;
            return c;
          }

          function j() {
            return !0;
          }

          function k() {
            return !1;
          }

          function l() {
            try {
              return Z.activeElement;
            } catch (a) {}
          }

          function m(a, b) {
            return _.nodeName(a, "table") &&
              _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
              ? a.getElementsByTagName("tbody")[0] ||
                  a.appendChild(a.ownerDocument.createElement("tbody"))
              : a;
          }

          function n(a) {
            return (
              (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a
            );
          }

          function o(a) {
            var b = Ka.exec(a.type);
            return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
          }

          function p(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
              ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"));
          }

          function q(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
              if (
                ra.hasData(a) &&
                ((f = ra.access(a)), (g = ra.set(b, f)), (j = f.events))
              ) {
                delete g.handle, (g.events = {});
                for (e in j)
                  for (c = 0, d = j[e].length; d > c; c++)
                    _.event.add(b, e, j[e][c]);
              }
              sa.hasData(a) &&
                ((h = sa.access(a)), (i = _.extend({}, h)), sa.set(b, i));
            }
          }

          function r(a, b) {
            var c = a.getElementsByTagName
              ? a.getElementsByTagName(b || "*")
              : a.querySelectorAll
              ? a.querySelectorAll(b || "*")
              : [];
            return void 0 === b || (b && _.nodeName(a, b))
              ? _.merge([a], c)
              : c;
          }

          function s(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && ya.test(a.type)
              ? (b.checked = a.checked)
              : ("input" === c || "textarea" === c) &&
                (b.defaultValue = a.defaultValue);
          }

          function t(b, c) {
            var d,
              e = _(c.createElement(b)).appendTo(c.body),
              f =
                a.getDefaultComputedStyle &&
                (d = a.getDefaultComputedStyle(e[0]))
                  ? d.display
                  : _.css(e[0], "display");
            return e.detach(), f;
          }

          function u(a) {
            var b = Z,
              c = Oa[a];
            return (
              c ||
                ((c = t(a, b)),
                ("none" !== c && c) ||
                  ((Na = (
                    Na || _("<iframe frameborder='0' width='0' height='0'/>")
                  ).appendTo(b.documentElement)),
                  (b = Na[0].contentDocument),
                  b.write(),
                  b.close(),
                  (c = t(a, b)),
                  Na.detach()),
                (Oa[a] = c)),
              c
            );
          }

          function v(a, b, c) {
            var d,
              e,
              f,
              g,
              h = a.style;
            return (
              (c = c || Ra(a)),
              c && (g = c.getPropertyValue(b) || c[b]),
              c &&
                ("" !== g ||
                  _.contains(a.ownerDocument, a) ||
                  (g = _.style(a, b)),
                Qa.test(g) &&
                  Pa.test(b) &&
                  ((d = h.width),
                  (e = h.minWidth),
                  (f = h.maxWidth),
                  (h.minWidth = h.maxWidth = h.width = g),
                  (g = c.width),
                  (h.width = d),
                  (h.minWidth = e),
                  (h.maxWidth = f))),
              void 0 !== g ? g + "" : g
            );
          }

          function w(a, b) {
            return {
              get: function () {
                return a()
                  ? void delete this.get
                  : (this.get = b).apply(this, arguments);
              },
            };
          }

          function x(a, b) {
            if (b in a) return b;
            for (
              var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length;
              e--;

            )
              if (((b = Xa[e] + c), b in a)) return b;
            return d;
          }

          function y(a, b, c) {
            var d = Ta.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
          }

          function z(a, b, c, d, e) {
            for (
              var f =
                  c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
                g = 0;
              4 > f;
              f += 2
            )
              "margin" === c && (g += _.css(a, c + wa[f], !0, e)),
                d
                  ? ("content" === c &&
                      (g -= _.css(a, "padding" + wa[f], !0, e)),
                    "margin" !== c &&
                      (g -= _.css(a, "border" + wa[f] + "Width", !0, e)))
                  : ((g += _.css(a, "padding" + wa[f], !0, e)),
                    "padding" !== c &&
                      (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
            return g;
          }

          function A(a, b, c) {
            var d = !0,
              e = "width" === b ? a.offsetWidth : a.offsetHeight,
              f = Ra(a),
              g = "border-box" === _.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
              if (
                ((e = v(a, b, f)),
                (0 > e || null == e) && (e = a.style[b]),
                Qa.test(e))
              )
                return e;
              (d = g && (Y.boxSizingReliable() || e === a.style[b])),
                (e = parseFloat(e) || 0);
            }
            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
          }

          function B(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
              (d = a[g]),
                d.style &&
                  ((f[g] = ra.get(d, "olddisplay")),
                  (c = d.style.display),
                  b
                    ? (f[g] || "none" !== c || (d.style.display = ""),
                      "" === d.style.display &&
                        xa(d) &&
                        (f[g] = ra.access(d, "olddisplay", u(d.nodeName))))
                    : ((e = xa(d)),
                      ("none" === c && e) ||
                        ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
            for (g = 0; h > g; g++)
              (d = a[g]),
                d.style &&
                  ((b &&
                    "none" !== d.style.display &&
                    "" !== d.style.display) ||
                    (d.style.display = b ? f[g] || "" : "none"));
            return a;
          }

          function C(a, b, c, d, e) {
            return new C.prototype.init(a, b, c, d, e);
          }

          function D() {
            return (
              setTimeout(function () {
                Ya = void 0;
              }),
              (Ya = _.now())
            );
          }

          function E(a, b) {
            var c,
              d = 0,
              e = {
                height: a,
              };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b)
              (c = wa[d]), (e["margin" + c] = e["padding" + c] = a);
            return b && (e.opacity = e.width = a), e;
          }

          function F(a, b, c) {
            for (
              var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length;
              g > f;
              f++
            )
              if ((d = e[f].call(c, b, a))) return d;
          }

          function G(a, b, c) {
            var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l = this,
              m = {},
              n = a.style,
              o = a.nodeType && xa(a),
              p = ra.get(a, "fxshow");
            c.queue ||
              ((h = _._queueHooks(a, "fx")),
              null == h.unqueued &&
                ((h.unqueued = 0),
                (i = h.empty.fire),
                (h.empty.fire = function () {
                  h.unqueued || i();
                })),
              h.unqueued++,
              l.always(function () {
                l.always(function () {
                  h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
                });
              })),
              1 === a.nodeType &&
                ("height" in b || "width" in b) &&
                ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
                (j = _.css(a, "display")),
                (k =
                  "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j),
                "inline" === k &&
                  "none" === _.css(a, "float") &&
                  (n.display = "inline-block")),
              c.overflow &&
                ((n.overflow = "hidden"),
                l.always(function () {
                  (n.overflow = c.overflow[0]),
                    (n.overflowX = c.overflow[1]),
                    (n.overflowY = c.overflow[2]);
                }));
            for (d in b)
              if (((e = b[d]), $a.exec(e))) {
                if (
                  (delete b[d],
                  (f = f || "toggle" === e),
                  e === (o ? "hide" : "show"))
                ) {
                  if ("show" !== e || !p || void 0 === p[d]) continue;
                  o = !0;
                }
                m[d] = (p && p[d]) || _.style(a, d);
              } else j = void 0;
            if (_.isEmptyObject(m))
              "inline" === ("none" === j ? u(a.nodeName) : j) &&
                (n.display = j);
            else {
              p
                ? "hidden" in p && (o = p.hidden)
                : (p = ra.access(a, "fxshow", {})),
                f && (p.hidden = !o),
                o
                  ? _(a).show()
                  : l.done(function () {
                      _(a).hide();
                    }),
                l.done(function () {
                  var b;
                  ra.remove(a, "fxshow");
                  for (b in m) _.style(a, b, m[b]);
                });
              for (d in m)
                (g = F(o ? p[d] : 0, d, l)),
                  d in p ||
                    ((p[d] = g.start),
                    o &&
                      ((g.end = g.start),
                      (g.start = "width" === d || "height" === d ? 1 : 0)));
            }
          }

          function H(a, b) {
            var c, d, e, f, g;
            for (c in a)
              if (
                ((d = _.camelCase(c)),
                (e = b[d]),
                (f = a[c]),
                _.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                c !== d && ((a[d] = f), delete a[c]),
                (g = _.cssHooks[d]),
                g && "expand" in g)
              ) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
              } else b[d] = e;
          }

          function I(a, b, c) {
            var d,
              e,
              f = 0,
              g = bb.length,
              h = _.Deferred().always(function () {
                delete i.elem;
              }),
              i = function () {
                if (e) return !1;
                for (
                  var b = Ya || D(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = c / j.duration || 0,
                    f = 1 - d,
                    g = 0,
                    i = j.tweens.length;
                  i > g;
                  g++
                )
                  j.tweens[g].run(f);
                return (
                  h.notifyWith(a, [j, f, c]),
                  1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                );
              },
              j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(
                  !0,
                  {
                    specialEasing: {},
                  },
                  c
                ),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                  var d = _.Tween(
                    a,
                    j.opts,
                    b,
                    c,
                    j.opts.specialEasing[b] || j.opts.easing
                  );
                  return j.tweens.push(d), d;
                },
                stop: function (b) {
                  var c = 0,
                    d = b ? j.tweens.length : 0;
                  if (e) return this;
                  for (e = !0; d > c; c++) j.tweens[c].run(1);
                  return (
                    b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                  );
                },
              }),
              k = j.props;
            for (H(k, j.opts.specialEasing); g > f; f++)
              if ((d = bb[f].call(j, a, k, j.opts))) return d;
            return (
              _.map(k, F, j),
              _.isFunction(j.opts.start) && j.opts.start.call(a, j),
              _.fx.timer(
                _.extend(i, {
                  elem: a,
                  anim: j,
                  queue: j.opts.queue,
                })
              ),
              j
                .progress(j.opts.progress)
                .done(j.opts.done, j.opts.complete)
                .fail(j.opts.fail)
                .always(j.opts.always)
            );
          }

          function J(a) {
            return function (b, c) {
              "string" != typeof b && ((c = b), (b = "*"));
              var d,
                e = 0,
                f = b.toLowerCase().match(na) || [];
              if (_.isFunction(c))
                for (; (d = f[e++]); )
                  "+" === d[0]
                    ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
                    : (a[d] = a[d] || []).push(c);
            };
          }

          function K(a, b, c, d) {
            function e(h) {
              var i;
              return (
                (f[h] = !0),
                _.each(a[h] || [], function (a, h) {
                  var j = h(b, c, d);
                  return "string" != typeof j || g || f[j]
                    ? g
                      ? !(i = j)
                      : void 0
                    : (b.dataTypes.unshift(j), e(j), !1);
                }),
                i
              );
            }
            var f = {},
              g = a === tb;
            return e(b.dataTypes[0]) || (!f["*"] && e("*"));
          }

          function L(a, b) {
            var c,
              d,
              e = _.ajaxSettings.flatOptions || {};
            for (c in b)
              void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && _.extend(!0, a, d), a;
          }

          function M(a, b, c) {
            for (
              var d, e, f, g, h = a.contents, i = a.dataTypes;
              "*" === i[0];

            )
              i.shift(),
                void 0 === d &&
                  (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
              for (e in h)
                if (h[e] && h[e].test(d)) {
                  i.unshift(e);
                  break;
                }
            if (i[0] in c) f = i[0];
            else {
              for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                  f = e;
                  break;
                }
                g || (g = e);
              }
              f = f || g;
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
          }

          function N(a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = {},
              k = a.dataTypes.slice();
            if (k[1])
              for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f; )
              if (
                (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                (i = f),
                (f = k.shift()))
              )
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                  if (((g = j[i + " " + f] || j["* " + f]), !g))
                    for (e in j)
                      if (
                        ((h = e.split(" ")),
                        h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                      ) {
                        g === !0
                          ? (g = j[e])
                          : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                        break;
                      }
                  if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else
                      try {
                        b = g(b);
                      } catch (l) {
                        return {
                          state: "parsererror",
                          error: g ? l : "No conversion from " + i + " to " + f,
                        };
                      }
                }
            return {
              state: "success",
              data: b,
            };
          }

          function O(a, b, c, d) {
            var e;
            if (_.isArray(b))
              _.each(b, function (b, e) {
                c || yb.test(a)
                  ? d(a, e)
                  : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
              });
            else if (c || "object" !== _.type(b)) d(a, b);
            else for (e in b) O(a + "[" + e + "]", b[e], c, d);
          }

          function P(a) {
            return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
          }
          var Q = [],
            R = Q.slice,
            S = Q.concat,
            T = Q.push,
            U = Q.indexOf,
            V = {},
            W = V.toString,
            X = V.hasOwnProperty,
            Y = {},
            Z = a.document,
            $ = "2.1.4",
            _ = function (a, b) {
              return new _.fn.init(a, b);
            },
            aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ba = /^-ms-/,
            ca = /-([\da-z])/gi,
            da = function (a, b) {
              return b.toUpperCase();
            };
          (_.fn = _.prototype = {
            jquery: $,
            constructor: _,
            selector: "",
            length: 0,
            toArray: function () {
              return R.call(this);
            },
            get: function (a) {
              return null != a
                ? 0 > a
                  ? this[a + this.length]
                  : this[a]
                : R.call(this);
            },
            pushStack: function (a) {
              var b = _.merge(this.constructor(), a);
              return (b.prevObject = this), (b.context = this.context), b;
            },
            each: function (a, b) {
              return _.each(this, a, b);
            },
            map: function (a) {
              return this.pushStack(
                _.map(this, function (b, c) {
                  return a.call(b, c, b);
                })
              );
            },
            slice: function () {
              return this.pushStack(R.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (a) {
              var b = this.length,
                c = +a + (0 > a ? b : 0);
              return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor(null);
            },
            push: T,
            sort: Q.sort,
            splice: Q.splice,
          }),
            (_.extend = _.fn.extend = function () {
              var a,
                b,
                c,
                d,
                e,
                f,
                g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
              for (
                "boolean" == typeof g &&
                  ((j = g), (g = arguments[h] || {}), h++),
                  "object" == typeof g || _.isFunction(g) || (g = {}),
                  h === i && ((g = this), h--);
                i > h;
                h++
              )
                if (null != (a = arguments[h]))
                  for (b in a)
                    (c = g[b]),
                      (d = a[b]),
                      g !== d &&
                        (j && d && (_.isPlainObject(d) || (e = _.isArray(d)))
                          ? (e
                              ? ((e = !1), (f = c && _.isArray(c) ? c : []))
                              : (f = c && _.isPlainObject(c) ? c : {}),
                            (g[b] = _.extend(j, f, d)))
                          : void 0 !== d && (g[b] = d));
              return g;
            }),
            _.extend({
              expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (a) {
                throw new Error(a);
              },
              noop: function () {},
              isFunction: function (a) {
                return "function" === _.type(a);
              },
              isArray: Array.isArray,
              isWindow: function (a) {
                return null != a && a === a.window;
              },
              isNumeric: function (a) {
                return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
              },
              isPlainObject: function (a) {
                return "object" !== _.type(a) || a.nodeType || _.isWindow(a)
                  ? !1
                  : a.constructor &&
                    !X.call(a.constructor.prototype, "isPrototypeOf")
                  ? !1
                  : !0;
              },
              isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
              },
              type: function (a) {
                return null == a
                  ? a + ""
                  : "object" == typeof a || "function" == typeof a
                  ? V[W.call(a)] || "object"
                  : typeof a;
              },
              globalEval: function (a) {
                var b,
                  c = eval;
                (a = _.trim(a)),
                  a &&
                    (1 === a.indexOf("use strict")
                      ? ((b = Z.createElement("script")),
                        (b.text = a),
                        Z.head.appendChild(b).parentNode.removeChild(b))
                      : c(a));
              },
              camelCase: function (a) {
                return a.replace(ba, "ms-").replace(ca, da);
              },
              nodeName: function (a, b) {
                return (
                  a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                );
              },
              each: function (a, b, d) {
                var e,
                  f = 0,
                  g = a.length,
                  h = c(a);
                if (d) {
                  if (h)
                    for (; g > f && ((e = b.apply(a[f], d)), e !== !1); f++);
                  else
                    for (f in a) if (((e = b.apply(a[f], d)), e === !1)) break;
                } else if (h)
                  for (; g > f && ((e = b.call(a[f], f, a[f])), e !== !1); f++);
                else
                  for (f in a)
                    if (((e = b.call(a[f], f, a[f])), e === !1)) break;
                return a;
              },
              trim: function (a) {
                return null == a ? "" : (a + "").replace(aa, "");
              },
              makeArray: function (a, b) {
                var d = b || [];
                return (
                  null != a &&
                    (c(Object(a))
                      ? _.merge(d, "string" == typeof a ? [a] : a)
                      : T.call(d, a)),
                  d
                );
              },
              inArray: function (a, b, c) {
                return null == b ? -1 : U.call(b, a, c);
              },
              merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                  a[e++] = b[d];
                return (a.length = e), a;
              },
              grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                  (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
              },
              map: function (a, b, d) {
                var e,
                  f = 0,
                  g = a.length,
                  h = c(a),
                  i = [];
                if (h)
                  for (; g > f; f++)
                    (e = b(a[f], f, d)), null != e && i.push(e);
                else for (f in a) (e = b(a[f], f, d)), null != e && i.push(e);
                return S.apply([], i);
              },
              guid: 1,
              proxy: function (a, b) {
                var c, d, e;
                return (
                  "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                  _.isFunction(a)
                    ? ((d = R.call(arguments, 2)),
                      (e = function () {
                        return a.apply(b || this, d.concat(R.call(arguments)));
                      }),
                      (e.guid = a.guid = a.guid || _.guid++),
                      e)
                    : void 0
                );
              },
              now: Date.now,
              support: Y,
            }),
            _.each(
              "Boolean Number String Function Array Date RegExp Object Error".split(
                " "
              ),
              function (a, b) {
                V["[object " + b + "]"] = b.toLowerCase();
              }
            );
          var ea = (function (a) {
            function b(a, b, c, d) {
              var e, f, g, h, i, j, l, n, o, p;
              if (
                ((b ? b.ownerDocument || b : O) !== G && F(b),
                (b = b || G),
                (c = c || []),
                (h = b.nodeType),
                "string" != typeof a || !a || (1 !== h && 9 !== h && 11 !== h))
              )
                return c;
              if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                  if ((g = e[1])) {
                    if (9 === h) {
                      if (((f = b.getElementById(g)), !f || !f.parentNode))
                        return c;
                      if (f.id === g) return c.push(f), c;
                    } else if (
                      b.ownerDocument &&
                      (f = b.ownerDocument.getElementById(g)) &&
                      M(b, f) &&
                      f.id === g
                    )
                      return c.push(f), c;
                  } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName)
                      return $.apply(c, b.getElementsByClassName(g)), c;
                  }
                if (v.qsa && (!J || !J.test(a))) {
                  if (
                    ((n = l = N),
                    (o = b),
                    (p = 1 !== h && a),
                    1 === h && "object" !== b.nodeName.toLowerCase())
                  ) {
                    for (
                      j = z(a),
                        (l = b.getAttribute("id"))
                          ? (n = l.replace(ua, "\\$&"))
                          : b.setAttribute("id", n),
                        n = "[id='" + n + "'] ",
                        i = j.length;
                      i--;

                    )
                      j[i] = n + m(j[i]);
                    (o = (ta.test(a) && k(b.parentNode)) || b),
                      (p = j.join(","));
                  }
                  if (p)
                    try {
                      return $.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {
                    } finally {
                      l || b.removeAttribute("id");
                    }
                }
              }
              return B(a.replace(ia, "$1"), b, c, d);
            }

            function c() {
              function a(c, d) {
                return (
                  b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                  (a[c + " "] = d)
                );
              }
              var b = [];
              return a;
            }

            function d(a) {
              return (a[N] = !0), a;
            }

            function e(a) {
              var b = G.createElement("div");
              try {
                return !!a(b);
              } catch (c) {
                return !1;
              } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
              }
            }

            function f(a, b) {
              for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b;
            }

            function g(a, b) {
              var c = b && a,
                d =
                  c &&
                  1 === a.nodeType &&
                  1 === b.nodeType &&
                  (~b.sourceIndex || V) - (~a.sourceIndex || V);
              if (d) return d;
              if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
              return a ? 1 : -1;
            }

            function h(a) {
              return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
              };
            }

            function i(a) {
              return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
              };
            }

            function j(a) {
              return d(function (b) {
                return (
                  (b = +b),
                  d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                      c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                  })
                );
              });
            }

            function k(a) {
              return a && "undefined" != typeof a.getElementsByTagName && a;
            }

            function l() {}

            function m(a) {
              for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
              return d;
            }

            function n(a, b, c) {
              var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
              return b.first
                ? function (b, c, f) {
                    for (; (b = b[d]); )
                      if (1 === b.nodeType || e) return a(b, c, f);
                  }
                : function (b, c, g) {
                    var h,
                      i,
                      j = [P, f];
                    if (g) {
                      for (; (b = b[d]); )
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                    } else
                      for (; (b = b[d]); )
                        if (1 === b.nodeType || e) {
                          if (
                            ((i = b[N] || (b[N] = {})),
                            (h = i[d]) && h[0] === P && h[1] === f)
                          )
                            return (j[2] = h[2]);
                          if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                        }
                  };
            }

            function o(a) {
              return a.length > 1
                ? function (b, c, d) {
                    for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                    return !0;
                  }
                : a[0];
            }

            function p(a, c, d) {
              for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
              return d;
            }

            function q(a, b, c, d, e) {
              for (
                var f, g = [], h = 0, i = a.length, j = null != b;
                i > h;
                h++
              )
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
              return g;
            }

            function r(a, b, c, e, f, g) {
              return (
                e && !e[N] && (e = r(e)),
                f && !f[N] && (f = r(f, g)),
                d(function (d, g, h, i) {
                  var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || (!d && b) ? r : q(r, m, a, h, i),
                    t = c ? (f || (d ? a : o || e) ? [] : g) : s;
                  if ((c && c(s, t, h, i), e))
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                      (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                  if (d) {
                    if (f || a) {
                      if (f) {
                        for (j = [], k = t.length; k--; )
                          (l = t[k]) && j.push((s[k] = l));
                        f(null, (t = []), j, i);
                      }
                      for (k = t.length; k--; )
                        (l = t[k]) &&
                          (j = f ? aa(d, l) : m[k]) > -1 &&
                          (d[j] = !(g[j] = l));
                    }
                  } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
                })
              );
            }

            function s(a) {
              for (
                var b,
                  c,
                  d,
                  e = a.length,
                  f = w.relative[a[0].type],
                  g = f || w.relative[" "],
                  h = f ? 1 : 0,
                  i = n(
                    function (a) {
                      return a === b;
                    },
                    g,
                    !0
                  ),
                  j = n(
                    function (a) {
                      return aa(b, a) > -1;
                    },
                    g,
                    !0
                  ),
                  k = [
                    function (a, c, d) {
                      var e =
                        (!f && (d || c !== C)) ||
                        ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                      return (b = null), e;
                    },
                  ];
                e > h;
                h++
              )
                if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
                else {
                  if (
                    ((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])
                  ) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                    return r(
                      h > 1 && o(k),
                      h > 1 &&
                        m(
                          a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : "",
                          })
                        ).replace(ia, "$1"),
                      c,
                      d > h && s(a.slice(h, d)),
                      e > d && s((a = a.slice(d))),
                      e > d && m(a)
                    );
                  }
                  k.push(c);
                }
              return o(k);
            }

            function t(a, c) {
              var e = c.length > 0,
                f = a.length > 0,
                g = function (d, g, h, i, j) {
                  var k,
                    l,
                    m,
                    n = 0,
                    o = "0",
                    p = d && [],
                    r = [],
                    s = C,
                    t = d || (f && w.find.TAG("*", j)),
                    u = (P += null == s ? 1 : Math.random() || 0.1),
                    v = t.length;
                  for (
                    j && (C = g !== G && g);
                    o !== v && null != (k = t[o]);
                    o++
                  ) {
                    if (f && k) {
                      for (l = 0; (m = a[l++]); )
                        if (m(k, g, h)) {
                          i.push(k);
                          break;
                        }
                      j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                  }
                  if (((n += o), e && o !== n)) {
                    for (l = 0; (m = c[l++]); ) m(p, r, g, h);
                    if (d) {
                      if (n > 0)
                        for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                      r = q(r);
                    }
                    $.apply(i, r),
                      j &&
                        !d &&
                        r.length > 0 &&
                        n + c.length > 1 &&
                        b.uniqueSort(i);
                  }
                  return j && ((P = u), (C = s)), p;
                };
              return e ? d(g) : g;
            }
            var u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N = "sizzle" + 1 * new Date(),
              O = a.document,
              P = 0,
              Q = 0,
              R = c(),
              S = c(),
              T = c(),
              U = function (a, b) {
                return a === b && (E = !0), 0;
              },
              V = 1 << 31,
              W = {}.hasOwnProperty,
              X = [],
              Y = X.pop,
              Z = X.push,
              $ = X.push,
              _ = X.slice,
              aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                  if (a[c] === b) return c;
                return -1;
              },
              ba =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              ca = "[\\x20\\t\\r\\n\\f]",
              da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
              ea = da.replace("w", "w#"),
              fa =
                "\\[" +
                ca +
                "*(" +
                da +
                ")(?:" +
                ca +
                "*([*^$|!~]?=)" +
                ca +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                ea +
                "))|)" +
                ca +
                "*\\]",
              ga =
                ":(" +
                da +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                fa +
                ")*)|.*)\\)|)",
              ha = new RegExp(ca + "+", "g"),
              ia = new RegExp(
                "^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$",
                "g"
              ),
              ja = new RegExp("^" + ca + "*," + ca + "*"),
              ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
              la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
              ma = new RegExp(ga),
              na = new RegExp("^" + ea + "$"),
              oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    ca +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    ca +
                    "*(?:([+-]|)" +
                    ca +
                    "*(\\d+)|))" +
                    ca +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    ca +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    ca +
                    "*((?:-\\d)?\\d*)" +
                    ca +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              pa = /^(?:input|select|textarea|button)$/i,
              qa = /^h\d$/i,
              ra = /^[^{]+\{\s*\[native \w/,
              sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ta = /[+~]/,
              ua = /'|\\/g,
              va = new RegExp(
                "\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)",
                "ig"
              ),
              wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c
                  ? b
                  : 0 > d
                  ? String.fromCharCode(d + 65536)
                  : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
              },
              xa = function () {
                F();
              };
            try {
              $.apply((X = _.call(O.childNodes)), O.childNodes),
                X[O.childNodes.length].nodeType;
            } catch (ya) {
              $ = {
                apply: X.length
                  ? function (a, b) {
                      Z.apply(a, _.call(b));
                    }
                  : function (a, b) {
                      for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                      a.length = c - 1;
                    },
              };
            }
            (v = b.support = {}),
              (y = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1;
              }),
              (F = b.setDocument = function (a) {
                var b,
                  c,
                  d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement
                  ? ((G = d),
                    (H = d.documentElement),
                    (c = d.defaultView),
                    c &&
                      c !== c.top &&
                      (c.addEventListener
                        ? c.addEventListener("unload", xa, !1)
                        : c.attachEvent && c.attachEvent("onunload", xa)),
                    (I = !y(d)),
                    (v.attributes = e(function (a) {
                      return (a.className = "i"), !a.getAttribute("className");
                    })),
                    (v.getElementsByTagName = e(function (a) {
                      return (
                        a.appendChild(d.createComment("")),
                        !a.getElementsByTagName("*").length
                      );
                    })),
                    (v.getElementsByClassName = ra.test(
                      d.getElementsByClassName
                    )),
                    (v.getById = e(function (a) {
                      return (
                        (H.appendChild(a).id = N),
                        !d.getElementsByName || !d.getElementsByName(N).length
                      );
                    })),
                    v.getById
                      ? ((w.find.ID = function (a, b) {
                          if ("undefined" != typeof b.getElementById && I) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : [];
                          }
                        }),
                        (w.filter.ID = function (a) {
                          var b = a.replace(va, wa);
                          return function (a) {
                            return a.getAttribute("id") === b;
                          };
                        }))
                      : (delete w.find.ID,
                        (w.filter.ID = function (a) {
                          var b = a.replace(va, wa);
                          return function (a) {
                            var c =
                              "undefined" != typeof a.getAttributeNode &&
                              a.getAttributeNode("id");
                            return c && c.value === b;
                          };
                        })),
                    (w.find.TAG = v.getElementsByTagName
                      ? function (a, b) {
                          return "undefined" != typeof b.getElementsByTagName
                            ? b.getElementsByTagName(a)
                            : v.qsa
                            ? b.querySelectorAll(a)
                            : void 0;
                        }
                      : function (a, b) {
                          var c,
                            d = [],
                            e = 0,
                            f = b.getElementsByTagName(a);
                          if ("*" === a) {
                            for (; (c = f[e++]); )
                              1 === c.nodeType && d.push(c);
                            return d;
                          }
                          return f;
                        }),
                    (w.find.CLASS =
                      v.getElementsByClassName &&
                      function (a, b) {
                        return I ? b.getElementsByClassName(a) : void 0;
                      }),
                    (K = []),
                    (J = []),
                    (v.qsa = ra.test(d.querySelectorAll)) &&
                      (e(function (a) {
                        (H.appendChild(a).innerHTML =
                          "<a id='" +
                          N +
                          "'></a><select id='" +
                          N +
                          "-\f]' msallowcapture=''><option selected=''></option></select>"),
                          a.querySelectorAll("[msallowcapture^='']").length &&
                            J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                          a.querySelectorAll("[selected]").length ||
                            J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                          a.querySelectorAll("[id~=" + N + "-]").length ||
                            J.push("~="),
                          a.querySelectorAll(":checked").length ||
                            J.push(":checked"),
                          a.querySelectorAll("a#" + N + "+*").length ||
                            J.push(".#.+[+~]");
                      }),
                      e(function (a) {
                        var b = d.createElement("input");
                        b.setAttribute("type", "hidden"),
                          a.appendChild(b).setAttribute("name", "D"),
                          a.querySelectorAll("[name=d]").length &&
                            J.push("name" + ca + "*[*^$|!~]?="),
                          a.querySelectorAll(":enabled").length ||
                            J.push(":enabled", ":disabled"),
                          a.querySelectorAll("*,:x"),
                          J.push(",.*:");
                      })),
                    (v.matchesSelector = ra.test(
                      (L =
                        H.matches ||
                        H.webkitMatchesSelector ||
                        H.mozMatchesSelector ||
                        H.oMatchesSelector ||
                        H.msMatchesSelector)
                    )) &&
                      e(function (a) {
                        (v.disconnectedMatch = L.call(a, "div")),
                          L.call(a, "[s!='']:x"),
                          K.push("!=", ga);
                      }),
                    (J = J.length && new RegExp(J.join("|"))),
                    (K = K.length && new RegExp(K.join("|"))),
                    (b = ra.test(H.compareDocumentPosition)),
                    (M =
                      b || ra.test(H.contains)
                        ? function (a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a,
                              d = b && b.parentNode;
                            return (
                              a === d ||
                              !(
                                !d ||
                                1 !== d.nodeType ||
                                !(c.contains
                                  ? c.contains(d)
                                  : a.compareDocumentPosition &&
                                    16 & a.compareDocumentPosition(d))
                              )
                            );
                          }
                        : function (a, b) {
                            if (b)
                              for (; (b = b.parentNode); )
                                if (b === a) return !0;
                            return !1;
                          }),
                    (U = b
                      ? function (a, b) {
                          if (a === b) return (E = !0), 0;
                          var c =
                            !a.compareDocumentPosition -
                            !b.compareDocumentPosition;
                          return c
                            ? c
                            : ((c =
                                (a.ownerDocument || a) ===
                                (b.ownerDocument || b)
                                  ? a.compareDocumentPosition(b)
                                  : 1),
                              1 & c ||
                              (!v.sortDetached &&
                                b.compareDocumentPosition(a) === c)
                                ? a === d || (a.ownerDocument === O && M(O, a))
                                  ? -1
                                  : b === d ||
                                    (b.ownerDocument === O && M(O, b))
                                  ? 1
                                  : D
                                  ? aa(D, a) - aa(D, b)
                                  : 0
                                : 4 & c
                                ? -1
                                : 1);
                        }
                      : function (a, b) {
                          if (a === b) return (E = !0), 0;
                          var c,
                            e = 0,
                            f = a.parentNode,
                            h = b.parentNode,
                            i = [a],
                            j = [b];
                          if (!f || !h)
                            return a === d
                              ? -1
                              : b === d
                              ? 1
                              : f
                              ? -1
                              : h
                              ? 1
                              : D
                              ? aa(D, a) - aa(D, b)
                              : 0;
                          if (f === h) return g(a, b);
                          for (c = a; (c = c.parentNode); ) i.unshift(c);
                          for (c = b; (c = c.parentNode); ) j.unshift(c);
                          for (; i[e] === j[e]; ) e++;
                          return e
                            ? g(i[e], j[e])
                            : i[e] === O
                            ? -1
                            : j[e] === O
                            ? 1
                            : 0;
                        }),
                    d)
                  : G;
              }),
              (b.matches = function (a, c) {
                return b(a, null, null, c);
              }),
              (b.matchesSelector = function (a, c) {
                if (
                  ((a.ownerDocument || a) !== G && F(a),
                  (c = c.replace(la, "='$1']")),
                  v.matchesSelector &&
                    I &&
                    (!K || !K.test(c)) &&
                    (!J || !J.test(c)))
                )
                  try {
                    var d = L.call(a, c);
                    if (
                      d ||
                      v.disconnectedMatch ||
                      (a.document && 11 !== a.document.nodeType)
                    )
                      return d;
                  } catch (e) {}
                return b(c, G, null, [a]).length > 0;
              }),
              (b.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b);
              }),
              (b.attr = function (a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                  d =
                    c && W.call(w.attrHandle, b.toLowerCase())
                      ? c(a, b, !I)
                      : void 0;
                return void 0 !== d
                  ? d
                  : v.attributes || !I
                  ? a.getAttribute(b)
                  : (d = a.getAttributeNode(b)) && d.specified
                  ? d.value
                  : null;
              }),
              (b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
              }),
              (b.uniqueSort = function (a) {
                var b,
                  c = [],
                  d = 0,
                  e = 0;
                if (
                  ((E = !v.detectDuplicates),
                  (D = !v.sortStable && a.slice(0)),
                  a.sort(U),
                  E)
                ) {
                  for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
                  for (; d--; ) a.splice(c[d], 1);
                }
                return (D = null), a;
              }),
              (x = b.getText = function (a) {
                var b,
                  c = "",
                  d = 0,
                  e = a.nodeType;
                if (e) {
                  if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                  } else if (3 === e || 4 === e) return a.nodeValue;
                } else for (; (b = a[d++]); ) c += x(b);
                return c;
              }),
              (w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                  ">": {
                    dir: "parentNode",
                    first: !0,
                  },
                  " ": {
                    dir: "parentNode",
                  },
                  "+": {
                    dir: "previousSibling",
                    first: !0,
                  },
                  "~": {
                    dir: "previousSibling",
                  },
                },
                preFilter: {
                  ATTR: function (a) {
                    return (
                      (a[1] = a[1].replace(va, wa)),
                      (a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa)),
                      "~=" === a[2] && (a[3] = " " + a[3] + " "),
                      a.slice(0, 4)
                    );
                  },
                  CHILD: function (a) {
                    return (
                      (a[1] = a[1].toLowerCase()),
                      "nth" === a[1].slice(0, 3)
                        ? (a[3] || b.error(a[0]),
                          (a[4] = +(a[4]
                            ? a[5] + (a[6] || 1)
                            : 2 * ("even" === a[3] || "odd" === a[3]))),
                          (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                        : a[3] && b.error(a[0]),
                      a
                    );
                  },
                  PSEUDO: function (a) {
                    var b,
                      c = !a[6] && a[2];
                    return oa.CHILD.test(a[0])
                      ? null
                      : (a[3]
                          ? (a[2] = a[4] || a[5] || "")
                          : c &&
                            ma.test(c) &&
                            (b = z(c, !0)) &&
                            (b = c.indexOf(")", c.length - b) - c.length) &&
                            ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                        a.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a
                      ? function () {
                          return !0;
                        }
                      : function (a) {
                          return a.nodeName && a.nodeName.toLowerCase() === b;
                        };
                  },
                  CLASS: function (a) {
                    var b = R[a + " "];
                    return (
                      b ||
                      ((b = new RegExp(
                        "(^|" + ca + ")" + a + "(" + ca + "|$)"
                      )) &&
                        R(a, function (a) {
                          return b.test(
                            ("string" == typeof a.className && a.className) ||
                              ("undefined" != typeof a.getAttribute &&
                                a.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (a, c, d) {
                    return function (e) {
                      var f = b.attr(e, a);
                      return null == f
                        ? "!=" === c
                        : c
                        ? ((f += ""),
                          "=" === c
                            ? f === d
                            : "!=" === c
                            ? f !== d
                            : "^=" === c
                            ? d && 0 === f.indexOf(d)
                            : "*=" === c
                            ? d && f.indexOf(d) > -1
                            : "$=" === c
                            ? d && f.slice(-d.length) === d
                            : "~=" === c
                            ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1
                            : "|=" === c
                            ? f === d || f.slice(0, d.length + 1) === d + "-"
                            : !1)
                        : !0;
                    };
                  },
                  CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                      g = "last" !== a.slice(-4),
                      h = "of-type" === b;
                    return 1 === d && 0 === e
                      ? function (a) {
                          return !!a.parentNode;
                        }
                      : function (b, c, i) {
                          var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                          if (q) {
                            if (f) {
                              for (; p; ) {
                                for (l = b; (l = l[p]); )
                                  if (
                                    h
                                      ? l.nodeName.toLowerCase() === r
                                      : 1 === l.nodeType
                                  )
                                    return !1;
                                o = p = "only" === a && !o && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((o = [g ? q.firstChild : q.lastChild]), g && s)
                            ) {
                              for (
                                k = q[N] || (q[N] = {}),
                                  j = k[a] || [],
                                  n = j[0] === P && j[1],
                                  m = j[0] === P && j[2],
                                  l = n && q.childNodes[n];
                                (l =
                                  (++n && l && l[p]) || (m = n = 0) || o.pop());

                              )
                                if (1 === l.nodeType && ++m && l === b) {
                                  k[a] = [P, n, m];
                                  break;
                                }
                            } else if (
                              s &&
                              (j = (b[N] || (b[N] = {}))[a]) &&
                              j[0] === P
                            )
                              m = j[1];
                            else
                              for (
                                ;
                                (l =
                                  (++n && l && l[p]) ||
                                  (m = n = 0) ||
                                  o.pop()) &&
                                ((h
                                  ? l.nodeName.toLowerCase() !== r
                                  : 1 !== l.nodeType) ||
                                  !++m ||
                                  (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                  l !== b));

                              );
                            return (
                              (m -= e), m === d || (m % d === 0 && m / d >= 0)
                            );
                          }
                        };
                  },
                  PSEUDO: function (a, c) {
                    var e,
                      f =
                        w.pseudos[a] ||
                        w.setFilters[a.toLowerCase()] ||
                        b.error("unsupported pseudo: " + a);
                    return f[N]
                      ? f(c)
                      : f.length > 1
                      ? ((e = [a, a, "", c]),
                        w.setFilters.hasOwnProperty(a.toLowerCase())
                          ? d(function (a, b) {
                              for (var d, e = f(a, c), g = e.length; g--; )
                                (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                            })
                          : function (a) {
                              return f(a, 0, e);
                            })
                      : f;
                  },
                },
                pseudos: {
                  not: d(function (a) {
                    var b = [],
                      c = [],
                      e = A(a.replace(ia, "$1"));
                    return e[N]
                      ? d(function (a, b, c, d) {
                          for (
                            var f, g = e(a, null, d, []), h = a.length;
                            h--;

                          )
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        })
                      : function (a, d, f) {
                          return (
                            (b[0] = a),
                            e(b, null, f, c),
                            (b[0] = null),
                            !c.pop()
                          );
                        };
                  }),
                  has: d(function (a) {
                    return function (c) {
                      return b(a, c).length > 0;
                    };
                  }),
                  contains: d(function (a) {
                    return (
                      (a = a.replace(va, wa)),
                      function (b) {
                        return (
                          (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        );
                      }
                    );
                  }),
                  lang: d(function (a) {
                    return (
                      na.test(a || "") || b.error("unsupported lang: " + a),
                      (a = a.replace(va, wa).toLowerCase()),
                      function (b) {
                        var c;
                        do
                          if (
                            (c = I
                              ? b.lang
                              : b.getAttribute("xml:lang") ||
                                b.getAttribute("lang"))
                          )
                            return (
                              (c = c.toLowerCase()),
                              c === a || 0 === c.indexOf(a + "-")
                            );
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                  },
                  root: function (a) {
                    return a === H;
                  },
                  focus: function (a) {
                    return (
                      a === G.activeElement &&
                      (!G.hasFocus || G.hasFocus()) &&
                      !!(a.type || a.href || ~a.tabIndex)
                    );
                  },
                  enabled: function (a) {
                    return a.disabled === !1;
                  },
                  disabled: function (a) {
                    return a.disabled === !0;
                  },
                  checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (
                      ("input" === b && !!a.checked) ||
                      ("option" === b && !!a.selected)
                    );
                  },
                  selected: function (a) {
                    return (
                      a.parentNode && a.parentNode.selectedIndex,
                      a.selected === !0
                    );
                  },
                  empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                      if (a.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (a) {
                    return !w.pseudos.empty(a);
                  },
                  header: function (a) {
                    return qa.test(a.nodeName);
                  },
                  input: function (a) {
                    return pa.test(a.nodeName);
                  },
                  button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (
                      ("input" === b && "button" === a.type) || "button" === b
                    );
                  },
                  text: function (a) {
                    var b;
                    return (
                      "input" === a.nodeName.toLowerCase() &&
                      "text" === a.type &&
                      (null == (b = a.getAttribute("type")) ||
                        "text" === b.toLowerCase())
                    );
                  },
                  first: j(function () {
                    return [0];
                  }),
                  last: j(function (a, b) {
                    return [b - 1];
                  }),
                  eq: j(function (a, b, c) {
                    return [0 > c ? c + b : c];
                  }),
                  even: j(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                  }),
                  odd: j(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                  }),
                  lt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                  }),
                  gt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                  }),
                },
              }),
              (w.pseudos.nth = w.pseudos.eq);
            for (u in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0,
            })
              w.pseudos[u] = h(u);
            for (u in {
              submit: !0,
              reset: !0,
            })
              w.pseudos[u] = i(u);
            return (
              (l.prototype = w.filters = w.pseudos),
              (w.setFilters = new l()),
              (z = b.tokenize = function (a, c) {
                var d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h; ) {
                  (!d || (e = ja.exec(h))) &&
                    (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                    (d = !1),
                    (e = ka.exec(h)) &&
                      ((d = e.shift()),
                      f.push({
                        value: d,
                        type: e[0].replace(ia, " "),
                      }),
                      (h = h.slice(d.length)));
                  for (g in w.filter)
                    !(e = oa[g].exec(h)) ||
                      (j[g] && !(e = j[g](e))) ||
                      ((d = e.shift()),
                      f.push({
                        value: d,
                        type: g,
                        matches: e,
                      }),
                      (h = h.slice(d.length)));
                  if (!d) break;
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
              }),
              (A = b.compile = function (a, b) {
                var c,
                  d = [],
                  e = [],
                  f = T[a + " "];
                if (!f) {
                  for (b || (b = z(a)), c = b.length; c--; )
                    (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
                  (f = T(a, t(e, d))), (f.selector = a);
                }
                return f;
              }),
              (B = b.select = function (a, b, c, d) {
                var e,
                  f,
                  g,
                  h,
                  i,
                  j = "function" == typeof a && a,
                  l = !d && z((a = j.selector || a));
                if (((c = c || []), 1 === l.length)) {
                  if (
                    ((f = l[0] = l[0].slice(0)),
                    f.length > 2 &&
                      "ID" === (g = f[0]).type &&
                      v.getById &&
                      9 === b.nodeType &&
                      I &&
                      w.relative[f[1].type])
                  ) {
                    if (
                      ((b = (w.find.ID(g.matches[0].replace(va, wa), b) ||
                        [])[0]),
                      !b)
                    )
                      return c;
                    j && (b = b.parentNode),
                      (a = a.slice(f.shift().value.length));
                  }
                  for (
                    e = oa.needsContext.test(a) ? 0 : f.length;
                    e-- && ((g = f[e]), !w.relative[(h = g.type)]);

                  )
                    if (
                      (i = w.find[h]) &&
                      (d = i(
                        g.matches[0].replace(va, wa),
                        (ta.test(f[0].type) && k(b.parentNode)) || b
                      ))
                    ) {
                      if ((f.splice(e, 1), (a = d.length && m(f)), !a))
                        return $.apply(c, d), c;
                      break;
                    }
                }
                return (
                  (j || A(a, l))(
                    d,
                    b,
                    !I,
                    c,
                    (ta.test(a) && k(b.parentNode)) || b
                  ),
                  c
                );
              }),
              (v.sortStable = N.split("").sort(U).join("") === N),
              (v.detectDuplicates = !!E),
              F(),
              (v.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"));
              })),
              e(function (a) {
                return (
                  (a.innerHTML = "<a href='#'></a>"),
                  "#" === a.firstChild.getAttribute("href")
                );
              }) ||
                f("type|href|height|width", function (a, b, c) {
                  return c
                    ? void 0
                    : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                }),
              (v.attributes &&
                e(function (a) {
                  return (
                    (a.innerHTML = "<input/>"),
                    a.firstChild.setAttribute("value", ""),
                    "" === a.firstChild.getAttribute("value")
                  );
                })) ||
                f("value", function (a, b, c) {
                  return c || "input" !== a.nodeName.toLowerCase()
                    ? void 0
                    : a.defaultValue;
                }),
              e(function (a) {
                return null == a.getAttribute("disabled");
              }) ||
                f(ba, function (a, b, c) {
                  var d;
                  return c
                    ? void 0
                    : a[b] === !0
                    ? b.toLowerCase()
                    : (d = a.getAttributeNode(b)) && d.specified
                    ? d.value
                    : null;
                }),
              b
            );
          })(a);
          (_.find = ea),
            (_.expr = ea.selectors),
            (_.expr[":"] = _.expr.pseudos),
            (_.unique = ea.uniqueSort),
            (_.text = ea.getText),
            (_.isXMLDoc = ea.isXML),
            (_.contains = ea.contains);
          var fa = _.expr.match.needsContext,
            ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ha = /^.[^:#\[\.,]*$/;
          (_.filter = function (a, b, c) {
            var d = b[0];
            return (
              c && (a = ":not(" + a + ")"),
              1 === b.length && 1 === d.nodeType
                ? _.find.matchesSelector(d, a)
                  ? [d]
                  : []
                : _.find.matches(
                    a,
                    _.grep(b, function (a) {
                      return 1 === a.nodeType;
                    })
                  )
            );
          }),
            _.fn.extend({
              find: function (a) {
                var b,
                  c = this.length,
                  d = [],
                  e = this;
                if ("string" != typeof a)
                  return this.pushStack(
                    _(a).filter(function () {
                      for (b = 0; c > b; b++)
                        if (_.contains(e[b], this)) return !0;
                    })
                  );
                for (b = 0; c > b; b++) _.find(a, e[b], d);
                return (
                  (d = this.pushStack(c > 1 ? _.unique(d) : d)),
                  (d.selector = this.selector ? this.selector + " " + a : a),
                  d
                );
              },
              filter: function (a) {
                return this.pushStack(d(this, a || [], !1));
              },
              not: function (a) {
                return this.pushStack(d(this, a || [], !0));
              },
              is: function (a) {
                return !!d(
                  this,
                  "string" == typeof a && fa.test(a) ? _(a) : a || [],
                  !1
                ).length;
              },
            });
          var ia,
            ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ka = (_.fn.init = function (a, b) {
              var c, d;
              if (!a) return this;
              if ("string" == typeof a) {
                if (
                  ((c =
                    "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                      ? [null, a, null]
                      : ja.exec(a)),
                  !c || (!c[1] && b))
                )
                  return !b || b.jquery
                    ? (b || ia).find(a)
                    : this.constructor(b).find(a);
                if (c[1]) {
                  if (
                    ((b = b instanceof _ ? b[0] : b),
                    _.merge(
                      this,
                      _.parseHTML(
                        c[1],
                        b && b.nodeType ? b.ownerDocument || b : Z,
                        !0
                      )
                    ),
                    ga.test(c[1]) && _.isPlainObject(b))
                  )
                    for (c in b)
                      _.isFunction(this[c])
                        ? this[c](b[c])
                        : this.attr(c, b[c]);
                  return this;
                }
                return (
                  (d = Z.getElementById(c[2])),
                  d && d.parentNode && ((this.length = 1), (this[0] = d)),
                  (this.context = Z),
                  (this.selector = a),
                  this
                );
              }
              return a.nodeType
                ? ((this.context = this[0] = a), (this.length = 1), this)
                : _.isFunction(a)
                ? "undefined" != typeof ia.ready
                  ? ia.ready(a)
                  : a(_)
                : (void 0 !== a.selector &&
                    ((this.selector = a.selector), (this.context = a.context)),
                  _.makeArray(a, this));
            });
          (ka.prototype = _.fn), (ia = _(Z));
          var la = /^(?:parents|prev(?:Until|All))/,
            ma = {
              children: !0,
              contents: !0,
              next: !0,
              prev: !0,
            };
          _.extend({
            dir: function (a, b, c) {
              for (
                var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;

              )
                if (1 === a.nodeType) {
                  if (e && _(a).is(c)) break;
                  d.push(a);
                }
              return d;
            },
            sibling: function (a, b) {
              for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
              return c;
            },
          }),
            _.fn.extend({
              has: function (a) {
                var b = _(a, this),
                  c = b.length;
                return this.filter(function () {
                  for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0;
                });
              },
              closest: function (a, b) {
                for (
                  var c,
                    d = 0,
                    e = this.length,
                    f = [],
                    g =
                      fa.test(a) || "string" != typeof a
                        ? _(a, b || this.context)
                        : 0;
                  e > d;
                  d++
                )
                  for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (
                      c.nodeType < 11 &&
                      (g
                        ? g.index(c) > -1
                        : 1 === c.nodeType && _.find.matchesSelector(c, a))
                    ) {
                      f.push(c);
                      break;
                    }
                return this.pushStack(f.length > 1 ? _.unique(f) : f);
              },
              index: function (a) {
                return a
                  ? "string" == typeof a
                    ? U.call(_(a), this[0])
                    : U.call(this, a.jquery ? a[0] : a)
                  : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
              },
              add: function (a, b) {
                return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
              },
              addBack: function (a) {
                return this.add(
                  null == a ? this.prevObject : this.prevObject.filter(a)
                );
              },
            }),
            _.each(
              {
                parent: function (a) {
                  var b = a.parentNode;
                  return b && 11 !== b.nodeType ? b : null;
                },
                parents: function (a) {
                  return _.dir(a, "parentNode");
                },
                parentsUntil: function (a, b, c) {
                  return _.dir(a, "parentNode", c);
                },
                next: function (a) {
                  return e(a, "nextSibling");
                },
                prev: function (a) {
                  return e(a, "previousSibling");
                },
                nextAll: function (a) {
                  return _.dir(a, "nextSibling");
                },
                prevAll: function (a) {
                  return _.dir(a, "previousSibling");
                },
                nextUntil: function (a, b, c) {
                  return _.dir(a, "nextSibling", c);
                },
                prevUntil: function (a, b, c) {
                  return _.dir(a, "previousSibling", c);
                },
                siblings: function (a) {
                  return _.sibling((a.parentNode || {}).firstChild, a);
                },
                children: function (a) {
                  return _.sibling(a.firstChild);
                },
                contents: function (a) {
                  return a.contentDocument || _.merge([], a.childNodes);
                },
              },
              function (a, b) {
                _.fn[a] = function (c, d) {
                  var e = _.map(this, b, c);
                  return (
                    "Until" !== a.slice(-5) && (d = c),
                    d && "string" == typeof d && (e = _.filter(d, e)),
                    this.length > 1 &&
                      (ma[a] || _.unique(e), la.test(a) && e.reverse()),
                    this.pushStack(e)
                  );
                };
              }
            );
          var na = /\S+/g,
            oa = {};
          (_.Callbacks = function (a) {
            a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
            var b,
              c,
              d,
              e,
              g,
              h,
              i = [],
              j = !a.once && [],
              k = function (f) {
                for (
                  b = a.memory && f,
                    c = !0,
                    h = e || 0,
                    e = 0,
                    g = i.length,
                    d = !0;
                  i && g > h;
                  h++
                )
                  if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break;
                  }
                (d = !1),
                  i &&
                    (j ? j.length && k(j.shift()) : b ? (i = []) : l.disable());
              },
              l = {
                add: function () {
                  if (i) {
                    var c = i.length;
                    !(function f(b) {
                      _.each(b, function (b, c) {
                        var d = _.type(c);
                        "function" === d
                          ? (a.unique && l.has(c)) || i.push(c)
                          : c && c.length && "string" !== d && f(c);
                      });
                    })(arguments),
                      d ? (g = i.length) : b && ((e = c), k(b));
                  }
                  return this;
                },
                remove: function () {
                  return (
                    i &&
                      _.each(arguments, function (a, b) {
                        for (var c; (c = _.inArray(b, i, c)) > -1; )
                          i.splice(c, 1), d && (g >= c && g--, h >= c && h--);
                      }),
                    this
                  );
                },
                has: function (a) {
                  return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
                },
                empty: function () {
                  return (i = []), (g = 0), this;
                },
                disable: function () {
                  return (i = j = b = void 0), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (j = void 0), b || l.disable(), this;
                },
                locked: function () {
                  return !j;
                },
                fireWith: function (a, b) {
                  return (
                    !i ||
                      (c && !j) ||
                      ((b = b || []),
                      (b = [a, b.slice ? b.slice() : b]),
                      d ? j.push(b) : k(b)),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!c;
                },
              };
            return l;
          }),
            _.extend({
              Deferred: function (a) {
                var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")],
                  ],
                  c = "pending",
                  d = {
                    state: function () {
                      return c;
                    },
                    always: function () {
                      return e.done(arguments).fail(arguments), this;
                    },
                    then: function () {
                      var a = arguments;
                      return _.Deferred(function (c) {
                        _.each(b, function (b, f) {
                          var g = _.isFunction(a[b]) && a[b];
                          e[f[1]](function () {
                            var a = g && g.apply(this, arguments);
                            a && _.isFunction(a.promise)
                              ? a
                                  .promise()
                                  .done(c.resolve)
                                  .fail(c.reject)
                                  .progress(c.notify)
                              : c[f[0] + "With"](
                                  this === d ? c.promise() : this,
                                  g ? [a] : arguments
                                );
                          });
                        }),
                          (a = null);
                      }).promise();
                    },
                    promise: function (a) {
                      return null != a ? _.extend(a, d) : d;
                    },
                  },
                  e = {};
                return (
                  (d.pipe = d.then),
                  _.each(b, function (a, f) {
                    var g = f[2],
                      h = f[3];
                    (d[f[1]] = g.add),
                      h &&
                        g.add(
                          function () {
                            c = h;
                          },
                          b[1 ^ a][2].disable,
                          b[2][2].lock
                        ),
                      (e[f[0]] = function () {
                        return (
                          e[f[0] + "With"](this === e ? d : this, arguments),
                          this
                        );
                      }),
                      (e[f[0] + "With"] = g.fireWith);
                  }),
                  d.promise(e),
                  a && a.call(e, e),
                  e
                );
              },
              when: function (a) {
                var b,
                  c,
                  d,
                  e = 0,
                  f = R.call(arguments),
                  g = f.length,
                  h = 1 !== g || (a && _.isFunction(a.promise)) ? g : 0,
                  i = 1 === h ? a : _.Deferred(),
                  j = function (a, c, d) {
                    return function (e) {
                      (c[a] = this),
                        (d[a] = arguments.length > 1 ? R.call(arguments) : e),
                        d === b
                          ? i.notifyWith(c, d)
                          : --h || i.resolveWith(c, d);
                    };
                  };
                if (g > 1)
                  for (
                    b = new Array(g), c = new Array(g), d = new Array(g);
                    g > e;
                    e++
                  )
                    f[e] && _.isFunction(f[e].promise)
                      ? f[e]
                          .promise()
                          .done(j(e, d, f))
                          .fail(i.reject)
                          .progress(j(e, c, b))
                      : --h;
                return h || i.resolveWith(d, f), i.promise();
              },
            });
          var pa;
          (_.fn.ready = function (a) {
            return _.ready.promise().done(a), this;
          }),
            _.extend({
              isReady: !1,
              readyWait: 1,
              holdReady: function (a) {
                a ? _.readyWait++ : _.ready(!0);
              },
              ready: function (a) {
                (a === !0 ? --_.readyWait : _.isReady) ||
                  ((_.isReady = !0),
                  (a !== !0 && --_.readyWait > 0) ||
                    (pa.resolveWith(Z, [_]),
                    _.fn.triggerHandler &&
                      (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
              },
            }),
            (_.ready.promise = function (b) {
              return (
                pa ||
                  ((pa = _.Deferred()),
                  "complete" === Z.readyState
                    ? setTimeout(_.ready)
                    : (Z.addEventListener("DOMContentLoaded", g, !1),
                      a.addEventListener("load", g, !1))),
                pa.promise(b)
              );
            }),
            _.ready.promise();
          var qa = (_.access = function (a, b, c, d, e, f, g) {
            var h = 0,
              i = a.length,
              j = null == c;
            if ("object" === _.type(c)) {
              e = !0;
              for (h in c) _.access(a, b, h, c[h], !0, f, g);
            } else if (
              void 0 !== d &&
              ((e = !0),
              _.isFunction(d) || (g = !0),
              j &&
                (g
                  ? (b.call(a, d), (b = null))
                  : ((j = b),
                    (b = function (a, b, c) {
                      return j.call(_(a), c);
                    }))),
              b)
            )
              for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
          });
          (_.acceptData = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
          }),
            (h.uid = 1),
            (h.accepts = _.acceptData),
            (h.prototype = {
              key: function (a) {
                if (!h.accepts(a)) return 0;
                var b = {},
                  c = a[this.expando];
                if (!c) {
                  c = h.uid++;
                  try {
                    (b[this.expando] = {
                      value: c,
                    }),
                      Object.defineProperties(a, b);
                  } catch (d) {
                    (b[this.expando] = c), _.extend(a, b);
                  }
                }
                return this.cache[c] || (this.cache[c] = {}), c;
              },
              set: function (a, b, c) {
                var d,
                  e = this.key(a),
                  f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                else for (d in b) f[d] = b[d];
                return f;
              },
              get: function (a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b];
              },
              access: function (a, b, c) {
                var d;
                return void 0 === b ||
                  (b && "string" == typeof b && void 0 === c)
                  ? ((d = this.get(a, b)),
                    void 0 !== d ? d : this.get(a, _.camelCase(b)))
                  : (this.set(a, b, c), void 0 !== c ? c : b);
              },
              remove: function (a, b) {
                var c,
                  d,
                  e,
                  f = this.key(a),
                  g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                  _.isArray(b)
                    ? (d = b.concat(b.map(_.camelCase)))
                    : ((e = _.camelCase(b)),
                      b in g
                        ? (d = [b, e])
                        : ((d = e), (d = d in g ? [d] : d.match(na) || []))),
                    (c = d.length);
                  for (; c--; ) delete g[d[c]];
                }
              },
              hasData: function (a) {
                return !_.isEmptyObject(this.cache[a[this.expando]] || {});
              },
              discard: function (a) {
                a[this.expando] && delete this.cache[a[this.expando]];
              },
            });
          var ra = new h(),
            sa = new h(),
            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ua = /([A-Z])/g;
          _.extend({
            hasData: function (a) {
              return sa.hasData(a) || ra.hasData(a);
            },
            data: function (a, b, c) {
              return sa.access(a, b, c);
            },
            removeData: function (a, b) {
              sa.remove(a, b);
            },
            _data: function (a, b, c) {
              return ra.access(a, b, c);
            },
            _removeData: function (a, b) {
              ra.remove(a, b);
            },
          }),
            _.fn.extend({
              data: function (a, b) {
                var c,
                  d,
                  e,
                  f = this[0],
                  g = f && f.attributes;
                if (void 0 === a) {
                  if (
                    this.length &&
                    ((e = sa.get(f)),
                    1 === f.nodeType && !ra.get(f, "hasDataAttrs"))
                  ) {
                    for (c = g.length; c--; )
                      g[c] &&
                        ((d = g[c].name),
                        0 === d.indexOf("data-") &&
                          ((d = _.camelCase(d.slice(5))), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0);
                  }
                  return e;
                }
                return "object" == typeof a
                  ? this.each(function () {
                      sa.set(this, a);
                    })
                  : qa(
                      this,
                      function (b) {
                        var c,
                          d = _.camelCase(a);
                        if (f && void 0 === b) {
                          if (((c = sa.get(f, a)), void 0 !== c)) return c;
                          if (((c = sa.get(f, d)), void 0 !== c)) return c;
                          if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                        } else
                          this.each(function () {
                            var c = sa.get(this, d);
                            sa.set(this, d, b),
                              -1 !== a.indexOf("-") &&
                                void 0 !== c &&
                                sa.set(this, a, b);
                          });
                      },
                      null,
                      b,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (a) {
                return this.each(function () {
                  sa.remove(this, a);
                });
              },
            }),
            _.extend({
              queue: function (a, b, c) {
                var d;
                return a
                  ? ((b = (b || "fx") + "queue"),
                    (d = ra.get(a, b)),
                    c &&
                      (!d || _.isArray(c)
                        ? (d = ra.access(a, b, _.makeArray(c)))
                        : d.push(c)),
                    d || [])
                  : void 0;
              },
              dequeue: function (a, b) {
                b = b || "fx";
                var c = _.queue(a, b),
                  d = c.length,
                  e = c.shift(),
                  f = _._queueHooks(a, b),
                  g = function () {
                    _.dequeue(a, b);
                  };
                "inprogress" === e && ((e = c.shift()), d--),
                  e &&
                    ("fx" === b && c.unshift("inprogress"),
                    delete f.stop,
                    e.call(a, g, f)),
                  !d && f && f.empty.fire();
              },
              _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return (
                  ra.get(a, c) ||
                  ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function () {
                      ra.remove(a, [b + "queue", c]);
                    }),
                  })
                );
              },
            }),
            _.fn.extend({
              queue: function (a, b) {
                var c = 2;
                return (
                  "string" != typeof a && ((b = a), (a = "fx"), c--),
                  arguments.length < c
                    ? _.queue(this[0], a)
                    : void 0 === b
                    ? this
                    : this.each(function () {
                        var c = _.queue(this, a, b);
                        _._queueHooks(this, a),
                          "fx" === a &&
                            "inprogress" !== c[0] &&
                            _.dequeue(this, a);
                      })
                );
              },
              dequeue: function (a) {
                return this.each(function () {
                  _.dequeue(this, a);
                });
              },
              clearQueue: function (a) {
                return this.queue(a || "fx", []);
              },
              promise: function (a, b) {
                var c,
                  d = 1,
                  e = _.Deferred(),
                  f = this,
                  g = this.length,
                  h = function () {
                    --d || e.resolveWith(f, [f]);
                  };
                for (
                  "string" != typeof a && ((b = a), (a = void 0)),
                    a = a || "fx";
                  g--;

                )
                  (c = ra.get(f[g], a + "queueHooks")),
                    c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
              },
            });
          var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wa = ["Top", "Right", "Bottom", "Left"],
            xa = function (a, b) {
              return (
                (a = b || a),
                "none" === _.css(a, "display") ||
                  !_.contains(a.ownerDocument, a)
              );
            },
            ya = /^(?:checkbox|radio)$/i;
          !(function () {
            var a = Z.createDocumentFragment(),
              b = a.appendChild(Z.createElement("div")),
              c = Z.createElement("input");
            c.setAttribute("type", "radio"),
              c.setAttribute("checked", "checked"),
              c.setAttribute("name", "t"),
              b.appendChild(c),
              (Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (b.innerHTML = "<textarea>x</textarea>"),
              (Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
          })();
          var za = "undefined";
          Y.focusinBubbles = "onfocusin" in a;
          var Aa = /^key/,
            Ba = /^(?:mouse|pointer|contextmenu)|click/,
            Ca = /^(?:focusinfocus|focusoutblur)$/,
            Da = /^([^.]*)(?:\.(.+)|)$/;
          (_.event = {
            global: {},
            add: function (a, b, c, d, e) {
              var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = ra.get(a);
              if (q)
                for (
                  c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                    c.guid || (c.guid = _.guid++),
                    (i = q.events) || (i = q.events = {}),
                    (g = q.handle) ||
                      (g = q.handle = function (b) {
                        return typeof _ !== za && _.event.triggered !== b.type
                          ? _.event.dispatch.apply(a, arguments)
                          : void 0;
                      }),
                    b = (b || "").match(na) || [""],
                    j = b.length;
                  j--;

                )
                  (h = Da.exec(b[j]) || []),
                    (n = p = h[1]),
                    (o = (h[2] || "").split(".").sort()),
                    n &&
                      ((l = _.event.special[n] || {}),
                      (n = (e ? l.delegateType : l.bindType) || n),
                      (l = _.event.special[n] || {}),
                      (k = _.extend(
                        {
                          type: n,
                          origType: p,
                          data: d,
                          handler: c,
                          guid: c.guid,
                          selector: e,
                          needsContext: e && _.expr.match.needsContext.test(e),
                          namespace: o.join("."),
                        },
                        f
                      )),
                      (m = i[n]) ||
                        ((m = i[n] = []),
                        (m.delegateCount = 0),
                        (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                          (a.addEventListener && a.addEventListener(n, g, !1))),
                      l.add &&
                        (l.add.call(a, k),
                        k.handler.guid || (k.handler.guid = c.guid)),
                      e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                      (_.event.global[n] = !0));
            },
            remove: function (a, b, c, d, e) {
              var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = ra.hasData(a) && ra.get(a);
              if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--; )
                  if (
                    ((h = Da.exec(b[j]) || []),
                    (n = p = h[1]),
                    (o = (h[2] || "").split(".").sort()),
                    n)
                  ) {
                    for (
                      l = _.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = i[n] || [],
                        h =
                          h[2] &&
                          new RegExp(
                            "(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        g = f = m.length;
                      f--;

                    )
                      (k = m[f]),
                        (!e && p !== k.origType) ||
                          (c && c.guid !== k.guid) ||
                          (h && !h.test(k.namespace)) ||
                          (d &&
                            d !== k.selector &&
                            ("**" !== d || !k.selector)) ||
                          (m.splice(f, 1),
                          k.selector && m.delegateCount--,
                          l.remove && l.remove.call(a, k));
                    g &&
                      !m.length &&
                      ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                        _.removeEvent(a, n, q.handle),
                      delete i[n]);
                  } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"));
              }
            },
            trigger: function (b, c, d, e) {
              var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
              if (
                ((g = h = d = d || Z),
                3 !== d.nodeType &&
                  8 !== d.nodeType &&
                  !Ca.test(n + _.event.triggered) &&
                  (n.indexOf(".") >= 0 &&
                    ((o = n.split(".")), (n = o.shift()), o.sort()),
                  (j = n.indexOf(":") < 0 && "on" + n),
                  (b = b[_.expando]
                    ? b
                    : new _.Event(n, "object" == typeof b && b)),
                  (b.isTrigger = e ? 2 : 3),
                  (b.namespace = o.join(".")),
                  (b.namespace_re = b.namespace
                    ? new RegExp(
                        "(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (b.result = void 0),
                  b.target || (b.target = d),
                  (c = null == c ? [b] : _.makeArray(c, [b])),
                  (l = _.event.special[n] || {}),
                  e || !l.trigger || l.trigger.apply(d, c) !== !1))
              ) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                  for (
                    i = l.delegateType || n,
                      Ca.test(i + n) || (g = g.parentNode);
                    g;
                    g = g.parentNode
                  )
                    m.push(g), (h = g);
                  h === (d.ownerDocument || Z) &&
                    m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                  (b.type = f > 1 ? i : l.bindType || n),
                    (k =
                      (ra.get(g, "events") || {})[b.type] &&
                      ra.get(g, "handle")),
                    k && k.apply(g, c),
                    (k = j && g[j]),
                    k &&
                      k.apply &&
                      _.acceptData(g) &&
                      ((b.result = k.apply(g, c)),
                      b.result === !1 && b.preventDefault());
                return (
                  (b.type = n),
                  e ||
                    b.isDefaultPrevented() ||
                    (l._default && l._default.apply(m.pop(), c) !== !1) ||
                    !_.acceptData(d) ||
                    (j &&
                      _.isFunction(d[n]) &&
                      !_.isWindow(d) &&
                      ((h = d[j]),
                      h && (d[j] = null),
                      (_.event.triggered = n),
                      d[n](),
                      (_.event.triggered = void 0),
                      h && (d[j] = h))),
                  b.result
                );
              }
            },
            dispatch: function (a) {
              a = _.event.fix(a);
              var b,
                c,
                d,
                e,
                f,
                g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
              if (
                ((h[0] = a),
                (a.delegateTarget = this),
                !j.preDispatch || j.preDispatch.call(this, a) !== !1)
              ) {
                for (
                  g = _.event.handlers.call(this, a, i), b = 0;
                  (e = g[b++]) && !a.isPropagationStopped();

                )
                  for (
                    a.currentTarget = e.elem, c = 0;
                    (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();

                  )
                    (!a.namespace_re || a.namespace_re.test(f.namespace)) &&
                      ((a.handleObj = f),
                      (a.data = f.data),
                      (d = (
                        (_.event.special[f.origType] || {}).handle || f.handler
                      ).apply(e.elem, h)),
                      void 0 !== d &&
                        (a.result = d) === !1 &&
                        (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
              }
            },
            handlers: function (a, b) {
              var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;
              if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                  if (i.disabled !== !0 || "click" !== a.type) {
                    for (d = [], c = 0; h > c; c++)
                      (f = b[c]),
                        (e = f.selector + " "),
                        void 0 === d[e] &&
                          (d[e] = f.needsContext
                            ? _(e, this).index(i) >= 0
                            : _.find(e, this, null, [i]).length),
                        d[e] && d.push(f);
                    d.length &&
                      g.push({
                        elem: i,
                        handlers: d,
                      });
                  }
              return (
                h < b.length &&
                  g.push({
                    elem: this,
                    handlers: b.slice(h),
                  }),
                g
              );
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
              " "
            ),
            fixHooks: {},
            keyHooks: {
              props: "char charCode key keyCode".split(" "),
              filter: function (a, b) {
                return (
                  null == a.which &&
                    (a.which = null != b.charCode ? b.charCode : b.keyCode),
                  a
                );
              },
            },
            mouseHooks: {
              props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
              ),
              filter: function (a, b) {
                var c,
                  d,
                  e,
                  f = b.button;
                return (
                  null == a.pageX &&
                    null != b.clientX &&
                    ((c = a.target.ownerDocument || Z),
                    (d = c.documentElement),
                    (e = c.body),
                    (a.pageX =
                      b.clientX +
                      ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
                      ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
                    (a.pageY =
                      b.clientY +
                      ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
                      ((d && d.clientTop) || (e && e.clientTop) || 0))),
                  a.which ||
                    void 0 === f ||
                    (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                  a
                );
              },
            },
            fix: function (a) {
              if (a[_.expando]) return a;
              var b,
                c,
                d,
                e = a.type,
                f = a,
                g = this.fixHooks[e];
              for (
                g ||
                  (this.fixHooks[e] = g = Ba.test(e)
                    ? this.mouseHooks
                    : Aa.test(e)
                    ? this.keyHooks
                    : {}),
                  d = g.props ? this.props.concat(g.props) : this.props,
                  a = new _.Event(f),
                  b = d.length;
                b--;

              )
                (c = d[b]), (a[c] = f[c]);
              return (
                a.target || (a.target = Z),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                g.filter ? g.filter(a, f) : a
              );
            },
            special: {
              load: {
                noBubble: !0,
              },
              focus: {
                trigger: function () {
                  return this !== l() && this.focus
                    ? (this.focus(), !1)
                    : void 0;
                },
                delegateType: "focusin",
              },
              blur: {
                trigger: function () {
                  return this === l() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
              },
              click: {
                trigger: function () {
                  return "checkbox" === this.type &&
                    this.click &&
                    _.nodeName(this, "input")
                    ? (this.click(), !1)
                    : void 0;
                },
                _default: function (a) {
                  return _.nodeName(a.target, "a");
                },
              },
              beforeunload: {
                postDispatch: function (a) {
                  void 0 !== a.result &&
                    a.originalEvent &&
                    (a.originalEvent.returnValue = a.result);
                },
              },
            },
            simulate: function (a, b, c, d) {
              var e = _.extend(new _.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {},
              });
              d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault();
            },
          }),
            (_.removeEvent = function (a, b, c) {
              a.removeEventListener && a.removeEventListener(b, c, !1);
            }),
            (_.Event = function (a, b) {
              return this instanceof _.Event
                ? (a && a.type
                    ? ((this.originalEvent = a),
                      (this.type = a.type),
                      (this.isDefaultPrevented =
                        a.defaultPrevented ||
                        (void 0 === a.defaultPrevented && a.returnValue === !1)
                          ? j
                          : k))
                    : (this.type = a),
                  b && _.extend(this, b),
                  (this.timeStamp = (a && a.timeStamp) || _.now()),
                  void (this[_.expando] = !0))
                : new _.Event(a, b);
            }),
            (_.Event.prototype = {
              isDefaultPrevented: k,
              isPropagationStopped: k,
              isImmediatePropagationStopped: k,
              preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = j),
                  a && a.preventDefault && a.preventDefault();
              },
              stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = j),
                  a && a.stopPropagation && a.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = j),
                  a &&
                    a.stopImmediatePropagation &&
                    a.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            _.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (a, b) {
                _.event.special[a] = {
                  delegateType: b,
                  bindType: b,
                  handle: function (a) {
                    var c,
                      d = this,
                      e = a.relatedTarget,
                      f = a.handleObj;
                    return (
                      (!e || (e !== d && !_.contains(d, e))) &&
                        ((a.type = f.origType),
                        (c = f.handler.apply(this, arguments)),
                        (a.type = b)),
                      c
                    );
                  },
                };
              }
            ),
            Y.focusinBubbles ||
              _.each(
                {
                  focus: "focusin",
                  blur: "focusout",
                },
                function (a, b) {
                  var c = function (a) {
                    _.event.simulate(b, a.target, _.event.fix(a), !0);
                  };
                  _.event.special[b] = {
                    setup: function () {
                      var d = this.ownerDocument || this,
                        e = ra.access(d, b);
                      e || d.addEventListener(a, c, !0),
                        ra.access(d, b, (e || 0) + 1);
                    },
                    teardown: function () {
                      var d = this.ownerDocument || this,
                        e = ra.access(d, b) - 1;
                      e
                        ? ra.access(d, b, e)
                        : (d.removeEventListener(a, c, !0), ra.remove(d, b));
                    },
                  };
                }
              ),
            _.fn.extend({
              on: function (a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                  "string" != typeof b && ((c = c || b), (b = void 0));
                  for (g in a) this.on(g, b, c, a[g], e);
                  return this;
                }
                if (
                  (null == c && null == d
                    ? ((d = b), (c = b = void 0))
                    : null == d &&
                      ("string" == typeof b
                        ? ((d = c), (c = void 0))
                        : ((d = c), (c = b), (b = void 0))),
                  d === !1)
                )
                  d = k;
                else if (!d) return this;
                return (
                  1 === e &&
                    ((f = d),
                    (d = function (a) {
                      return _().off(a), f.apply(this, arguments);
                    }),
                    (d.guid = f.guid || (f.guid = _.guid++))),
                  this.each(function () {
                    _.event.add(this, a, d, c, b);
                  })
                );
              },
              one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1);
              },
              off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                  return (
                    (d = a.handleObj),
                    _(a.delegateTarget).off(
                      d.namespace ? d.origType + "." + d.namespace : d.origType,
                      d.selector,
                      d.handler
                    ),
                    this
                  );
                if ("object" == typeof a) {
                  for (e in a) this.off(e, b, a[e]);
                  return this;
                }
                return (
                  (b === !1 || "function" == typeof b) &&
                    ((c = b), (b = void 0)),
                  c === !1 && (c = k),
                  this.each(function () {
                    _.event.remove(this, a, c, b);
                  })
                );
              },
              trigger: function (a, b) {
                return this.each(function () {
                  _.event.trigger(a, b, this);
                });
              },
              triggerHandler: function (a, b) {
                var c = this[0];
                return c ? _.event.trigger(a, b, c, !0) : void 0;
              },
            });
          var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fa = /<([\w:]+)/,
            Ga = /<|&#?\w+;/,
            Ha = /<(?:script|style|link)/i,
            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = /^true\/(.*)/,
            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ma = {
              option: [1, "<select multiple='multiple'>", "</select>"],
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""],
            };
          (Ma.optgroup = Ma.option),
            (Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead),
            (Ma.th = Ma.td),
            _.extend({
              clone: function (a, b, c) {
                var d,
                  e,
                  f,
                  g,
                  h = a.cloneNode(!0),
                  i = _.contains(a.ownerDocument, a);
                if (
                  !(
                    Y.noCloneChecked ||
                    (1 !== a.nodeType && 11 !== a.nodeType) ||
                    _.isXMLDoc(a)
                  )
                )
                  for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
                    s(f[d], g[d]);
                if (b)
                  if (c)
                    for (
                      f = f || r(a), g = g || r(h), d = 0, e = f.length;
                      e > d;
                      d++
                    )
                      q(f[d], g[d]);
                  else q(a, h);
                return (
                  (g = r(h, "script")),
                  g.length > 0 && p(g, !i && r(a, "script")),
                  h
                );
              },
              buildFragment: function (a, b, c, d) {
                for (
                  var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = b.createDocumentFragment(),
                    l = [],
                    m = 0,
                    n = a.length;
                  n > m;
                  m++
                )
                  if (((e = a[m]), e || 0 === e))
                    if ("object" === _.type(e))
                      _.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                      for (
                        f = f || k.appendChild(b.createElement("div")),
                          g = (Fa.exec(e) || ["", ""])[1].toLowerCase(),
                          h = Ma[g] || Ma._default,
                          f.innerHTML =
                            h[1] + e.replace(Ea, "<$1></$2>") + h[2],
                          j = h[0];
                        j--;

                      )
                        f = f.lastChild;
                      _.merge(l, f.childNodes),
                        (f = k.firstChild),
                        (f.textContent = "");
                    } else l.push(b.createTextNode(e));
                for (k.textContent = "", m = 0; (e = l[m++]); )
                  if (
                    (!d || -1 === _.inArray(e, d)) &&
                    ((i = _.contains(e.ownerDocument, e)),
                    (f = r(k.appendChild(e), "script")),
                    i && p(f),
                    c)
                  )
                    for (j = 0; (e = f[j++]); )
                      Ja.test(e.type || "") && c.push(e);
                return k;
              },
              cleanData: function (a) {
                for (
                  var b, c, d, e, f = _.event.special, g = 0;
                  void 0 !== (c = a[g]);
                  g++
                ) {
                  if (
                    _.acceptData(c) &&
                    ((e = c[ra.expando]), e && (b = ra.cache[e]))
                  ) {
                    if (b.events)
                      for (d in b.events)
                        f[d]
                          ? _.event.remove(c, d)
                          : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e];
                  }
                  delete sa.cache[c[sa.expando]];
                }
              },
            }),
            _.fn.extend({
              text: function (a) {
                return qa(
                  this,
                  function (a) {
                    return void 0 === a
                      ? _.text(this)
                      : this.empty().each(function () {
                          (1 === this.nodeType ||
                            11 === this.nodeType ||
                            9 === this.nodeType) &&
                            (this.textContent = a);
                        });
                  },
                  null,
                  a,
                  arguments.length
                );
              },
              append: function () {
                return this.domManip(arguments, function (a) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var b = m(this, a);
                    b.appendChild(a);
                  }
                });
              },
              prepend: function () {
                return this.domManip(arguments, function (a) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild);
                  }
                });
              },
              before: function () {
                return this.domManip(arguments, function (a) {
                  this.parentNode && this.parentNode.insertBefore(a, this);
                });
              },
              after: function () {
                return this.domManip(arguments, function (a) {
                  this.parentNode &&
                    this.parentNode.insertBefore(a, this.nextSibling);
                });
              },
              remove: function (a, b) {
                for (
                  var c, d = a ? _.filter(a, this) : this, e = 0;
                  null != (c = d[e]);
                  e++
                )
                  b || 1 !== c.nodeType || _.cleanData(r(c)),
                    c.parentNode &&
                      (b && _.contains(c.ownerDocument, c) && p(r(c, "script")),
                      c.parentNode.removeChild(c));
                return this;
              },
              empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++)
                  1 === a.nodeType &&
                    (_.cleanData(r(a, !1)), (a.textContent = ""));
                return this;
              },
              clone: function (a, b) {
                return (
                  (a = null == a ? !1 : a),
                  (b = null == b ? a : b),
                  this.map(function () {
                    return _.clone(this, a, b);
                  })
                );
              },
              html: function (a) {
                return qa(
                  this,
                  function (a) {
                    var b = this[0] || {},
                      c = 0,
                      d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if (
                      "string" == typeof a &&
                      !Ha.test(a) &&
                      !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]
                    ) {
                      a = a.replace(Ea, "<$1></$2>");
                      try {
                        for (; d > c; c++)
                          (b = this[c] || {}),
                            1 === b.nodeType &&
                              (_.cleanData(r(b, !1)), (b.innerHTML = a));
                        b = 0;
                      } catch (e) {}
                    }
                    b && this.empty().append(a);
                  },
                  null,
                  a,
                  arguments.length
                );
              },
              replaceWith: function () {
                var a = arguments[0];
                return (
                  this.domManip(arguments, function (b) {
                    (a = this.parentNode),
                      _.cleanData(r(this)),
                      a && a.replaceChild(b, this);
                  }),
                  a && (a.length || a.nodeType) ? this : this.remove()
                );
              },
              detach: function (a) {
                return this.remove(a, !0);
              },
              domManip: function (a, b) {
                a = S.apply([], a);
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i = 0,
                  j = this.length,
                  k = this,
                  l = j - 1,
                  m = a[0],
                  p = _.isFunction(m);
                if (
                  p ||
                  (j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m))
                )
                  return this.each(function (c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
                  });
                if (
                  j &&
                  ((c = _.buildFragment(a, this[0].ownerDocument, !1, this)),
                  (d = c.firstChild),
                  1 === c.childNodes.length && (c = d),
                  d)
                ) {
                  for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
                    (g = c),
                      i !== l &&
                        ((g = _.clone(g, !0, !0)),
                        f && _.merge(e, r(g, "script"))),
                      b.call(this[i], g, i);
                  if (f)
                    for (
                      h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0;
                      f > i;
                      i++
                    )
                      (g = e[i]),
                        Ja.test(g.type || "") &&
                          !ra.access(g, "globalEval") &&
                          _.contains(h, g) &&
                          (g.src
                            ? _._evalUrl && _._evalUrl(g.src)
                            : _.globalEval(g.textContent.replace(La, "")));
                }
                return this;
              },
            }),
            _.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (a, b) {
                _.fn[a] = function (a) {
                  for (
                    var c, d = [], e = _(a), f = e.length - 1, g = 0;
                    f >= g;
                    g++
                  )
                    (c = g === f ? this : this.clone(!0)),
                      _(e[g])[b](c),
                      T.apply(d, c.get());
                  return this.pushStack(d);
                };
              }
            );
          var Na,
            Oa = {},
            Pa = /^margin/,
            Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
            Ra = function (b) {
              return b.ownerDocument.defaultView.opener
                ? b.ownerDocument.defaultView.getComputedStyle(b, null)
                : a.getComputedStyle(b, null);
            };
          !(function () {
            function b() {
              (g.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                (g.innerHTML = ""),
                e.appendChild(f);
              var b = a.getComputedStyle(g, null);
              (c = "1%" !== b.top), (d = "4px" === b.width), e.removeChild(f);
            }
            var c,
              d,
              e = Z.documentElement,
              f = Z.createElement("div"),
              g = Z.createElement("div");
            g.style &&
              ((g.style.backgroundClip = "content-box"),
              (g.cloneNode(!0).style.backgroundClip = ""),
              (Y.clearCloneStyle = "content-box" === g.style.backgroundClip),
              (f.style.cssText =
                "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
              f.appendChild(g),
              a.getComputedStyle &&
                _.extend(Y, {
                  pixelPosition: function () {
                    return b(), c;
                  },
                  boxSizingReliable: function () {
                    return null == d && b(), d;
                  },
                  reliableMarginRight: function () {
                    var b,
                      c = g.appendChild(Z.createElement("div"));
                    return (
                      (c.style.cssText = g.style.cssText =
                        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                      (c.style.marginRight = c.style.width = "0"),
                      (g.style.width = "1px"),
                      e.appendChild(f),
                      (b = !parseFloat(
                        a.getComputedStyle(c, null).marginRight
                      )),
                      e.removeChild(f),
                      g.removeChild(c),
                      b
                    );
                  },
                }));
          })(),
            (_.swap = function (a, b, c, d) {
              var e,
                f,
                g = {};
              for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
              e = c.apply(a, d || []);
              for (f in b) a.style[f] = g[f];
              return e;
            });
          var Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = new RegExp("^(" + va + ")(.*)$", "i"),
            Ua = new RegExp("^([+-])=(" + va + ")", "i"),
            Va = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Wa = {
              letterSpacing: "0",
              fontWeight: "400",
            },
            Xa = ["Webkit", "O", "Moz", "ms"];
          _.extend({
            cssHooks: {
              opacity: {
                get: function (a, b) {
                  if (b) {
                    var c = v(a, "opacity");
                    return "" === c ? "1" : c;
                  }
                },
              },
            },
            cssNumber: {
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {
              float: "cssFloat",
            },
            style: function (a, b, c, d) {
              if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                  f,
                  g,
                  h = _.camelCase(b),
                  i = a.style;
                return (
                  (b = _.cssProps[h] || (_.cssProps[h] = x(i, h))),
                  (g = _.cssHooks[b] || _.cssHooks[h]),
                  void 0 === c
                    ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                      ? e
                      : i[b]
                    : ((f = typeof c),
                      "string" === f &&
                        (e = Ua.exec(c)) &&
                        ((c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b))),
                        (f = "number")),
                      null != c &&
                        c === c &&
                        ("number" !== f || _.cssNumber[h] || (c += "px"),
                        Y.clearCloneStyle ||
                          "" !== c ||
                          0 !== b.indexOf("background") ||
                          (i[b] = "inherit"),
                        (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                          (i[b] = c)),
                      void 0)
                );
              }
            },
            css: function (a, b, c, d) {
              var e,
                f,
                g,
                h = _.camelCase(b);
              return (
                (b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h))),
                (g = _.cssHooks[b] || _.cssHooks[h]),
                g && "get" in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = v(a, b, d)),
                "normal" === e && b in Wa && (e = Wa[b]),
                "" === c || c
                  ? ((f = parseFloat(e)),
                    c === !0 || _.isNumeric(f) ? f || 0 : e)
                  : e
              );
            },
          }),
            _.each(["height", "width"], function (a, b) {
              _.cssHooks[b] = {
                get: function (a, c, d) {
                  return c
                    ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth
                      ? _.swap(a, Va, function () {
                          return A(a, b, d);
                        })
                      : A(a, b, d)
                    : void 0;
                },
                set: function (a, c, d) {
                  var e = d && Ra(a);
                  return y(
                    a,
                    c,
                    d
                      ? z(
                          a,
                          b,
                          d,
                          "border-box" === _.css(a, "boxSizing", !1, e),
                          e
                        )
                      : 0
                  );
                },
              };
            }),
            (_.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
              return b
                ? _.swap(
                    a,
                    {
                      display: "inline-block",
                    },
                    v,
                    [a, "marginRight"]
                  )
                : void 0;
            })),
            _.each(
              {
                margin: "",
                padding: "",
                border: "Width",
              },
              function (a, b) {
                (_.cssHooks[a + b] = {
                  expand: function (c) {
                    for (
                      var d = 0,
                        e = {},
                        f = "string" == typeof c ? c.split(" ") : [c];
                      4 > d;
                      d++
                    )
                      e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                  },
                }),
                  Pa.test(a) || (_.cssHooks[a + b].set = y);
              }
            ),
            _.fn.extend({
              css: function (a, b) {
                return qa(
                  this,
                  function (a, b, c) {
                    var d,
                      e,
                      f = {},
                      g = 0;
                    if (_.isArray(b)) {
                      for (d = Ra(a), e = b.length; e > g; g++)
                        f[b[g]] = _.css(a, b[g], !1, d);
                      return f;
                    }
                    return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
                  },
                  a,
                  b,
                  arguments.length > 1
                );
              },
              show: function () {
                return B(this, !0);
              },
              hide: function () {
                return B(this);
              },
              toggle: function (a) {
                return "boolean" == typeof a
                  ? a
                    ? this.show()
                    : this.hide()
                  : this.each(function () {
                      xa(this) ? _(this).show() : _(this).hide();
                    });
              },
            }),
            (_.Tween = C),
            (C.prototype = {
              constructor: C,
              init: function (a, b, c, d, e, f) {
                (this.elem = a),
                  (this.prop = c),
                  (this.easing = e || "swing"),
                  (this.options = b),
                  (this.start = this.now = this.cur()),
                  (this.end = d),
                  (this.unit = f || (_.cssNumber[c] ? "" : "px"));
              },
              cur: function () {
                var a = C.propHooks[this.prop];
                return a && a.get
                  ? a.get(this)
                  : C.propHooks._default.get(this);
              },
              run: function (a) {
                var b,
                  c = C.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = b = _.easing[this.easing](
                        a,
                        this.options.duration * a,
                        0,
                        1,
                        this.options.duration
                      ))
                    : (this.pos = b = a),
                  (this.now = (this.end - this.start) * b + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  c && c.set ? c.set(this) : C.propHooks._default.set(this),
                  this
                );
              },
            }),
            (C.prototype.init.prototype = C.prototype),
            (C.propHooks = {
              _default: {
                get: function (a) {
                  var b;
                  return null == a.elem[a.prop] ||
                    (a.elem.style && null != a.elem.style[a.prop])
                    ? ((b = _.css(a.elem, a.prop, "")),
                      b && "auto" !== b ? b : 0)
                    : a.elem[a.prop];
                },
                set: function (a) {
                  _.fx.step[a.prop]
                    ? _.fx.step[a.prop](a)
                    : a.elem.style &&
                      (null != a.elem.style[_.cssProps[a.prop]] ||
                        _.cssHooks[a.prop])
                    ? _.style(a.elem, a.prop, a.now + a.unit)
                    : (a.elem[a.prop] = a.now);
                },
              },
            }),
            (C.propHooks.scrollTop = C.propHooks.scrollLeft = {
              set: function (a) {
                a.elem.nodeType &&
                  a.elem.parentNode &&
                  (a.elem[a.prop] = a.now);
              },
            }),
            (_.easing = {
              linear: function (a) {
                return a;
              },
              swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
              },
            }),
            (_.fx = C.prototype.init),
            (_.fx.step = {});
          var Ya,
            Za,
            $a = /^(?:toggle|show|hide)$/,
            _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
            ab = /queueHooks$/,
            bb = [G],
            cb = {
              "*": [
                function (a, b) {
                  var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _a.exec(b),
                    f = (e && e[3]) || (_.cssNumber[a] ? "" : "px"),
                    g =
                      (_.cssNumber[a] || ("px" !== f && +d)) &&
                      _a.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                  if (g && g[3] !== f) {
                    (f = f || g[3]), (e = e || []), (g = +d || 1);
                    do (h = h || ".5"), (g /= h), _.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i);
                  }
                  return (
                    e &&
                      ((g = c.start = +g || +d || 0),
                      (c.unit = f),
                      (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
                    c
                  );
                },
              ],
            };
          (_.Animation = _.extend(I, {
            tweener: function (a, b) {
              _.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
              for (var c, d = 0, e = a.length; e > d; d++)
                (c = a[d]), (cb[c] = cb[c] || []), cb[c].unshift(b);
            },
            prefilter: function (a, b) {
              b ? bb.unshift(a) : bb.push(a);
            },
          })),
            (_.speed = function (a, b, c) {
              var d =
                a && "object" == typeof a
                  ? _.extend({}, a)
                  : {
                      complete: c || (!c && b) || (_.isFunction(a) && a),
                      duration: a,
                      easing: (c && b) || (b && !_.isFunction(b) && b),
                    };
              return (
                (d.duration = _.fx.off
                  ? 0
                  : "number" == typeof d.duration
                  ? d.duration
                  : d.duration in _.fx.speeds
                  ? _.fx.speeds[d.duration]
                  : _.fx.speeds._default),
                (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function () {
                  _.isFunction(d.old) && d.old.call(this),
                    d.queue && _.dequeue(this, d.queue);
                }),
                d
              );
            }),
            _.fn.extend({
              fadeTo: function (a, b, c, d) {
                return this.filter(xa).css("opacity", 0).show().end().animate(
                  {
                    opacity: b,
                  },
                  a,
                  c,
                  d
                );
              },
              animate: function (a, b, c, d) {
                var e = _.isEmptyObject(a),
                  f = _.speed(b, c, d),
                  g = function () {
                    var b = I(this, _.extend({}, a), f);
                    (e || ra.get(this, "finish")) && b.stop(!0);
                  };
                return (
                  (g.finish = g),
                  e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                );
              },
              stop: function (a, b, c) {
                var d = function (a) {
                  var b = a.stop;
                  delete a.stop, b(c);
                };
                return (
                  "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                  b && a !== !1 && this.queue(a || "fx", []),
                  this.each(function () {
                    var b = !0,
                      e = null != a && a + "queueHooks",
                      f = _.timers,
                      g = ra.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                      for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--; )
                      f[e].elem !== this ||
                        (null != a && f[e].queue !== a) ||
                        (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                    (b || !c) && _.dequeue(this, a);
                  })
                );
              },
              finish: function (a) {
                return (
                  a !== !1 && (a = a || "fx"),
                  this.each(function () {
                    var b,
                      c = ra.get(this),
                      d = c[a + "queue"],
                      e = c[a + "queueHooks"],
                      f = _.timers,
                      g = d ? d.length : 0;
                    for (
                      c.finish = !0,
                        _.queue(this, a, []),
                        e && e.stop && e.stop.call(this, !0),
                        b = f.length;
                      b--;

                    )
                      f[b].elem === this &&
                        f[b].queue === a &&
                        (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++)
                      d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish;
                  })
                );
              },
            }),
            _.each(["toggle", "show", "hide"], function (a, b) {
              var c = _.fn[b];
              _.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a
                  ? c.apply(this, arguments)
                  : this.animate(E(b, !0), a, d, e);
              };
            }),
            _.each(
              {
                slideDown: E("show"),
                slideUp: E("hide"),
                slideToggle: E("toggle"),
                fadeIn: {
                  opacity: "show",
                },
                fadeOut: {
                  opacity: "hide",
                },
                fadeToggle: {
                  opacity: "toggle",
                },
              },
              function (a, b) {
                _.fn[a] = function (a, c, d) {
                  return this.animate(b, a, c, d);
                };
              }
            ),
            (_.timers = []),
            (_.fx.tick = function () {
              var a,
                b = 0,
                c = _.timers;
              for (Ya = _.now(); b < c.length; b++)
                (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
              c.length || _.fx.stop(), (Ya = void 0);
            }),
            (_.fx.timer = function (a) {
              _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
            }),
            (_.fx.interval = 13),
            (_.fx.start = function () {
              Za || (Za = setInterval(_.fx.tick, _.fx.interval));
            }),
            (_.fx.stop = function () {
              clearInterval(Za), (Za = null);
            }),
            (_.fx.speeds = {
              slow: 600,
              fast: 200,
              _default: 400,
            }),
            (_.fn.delay = function (a, b) {
              return (
                (a = _.fx ? _.fx.speeds[a] || a : a),
                (b = b || "fx"),
                this.queue(b, function (b, c) {
                  var d = setTimeout(b, a);
                  c.stop = function () {
                    clearTimeout(d);
                  };
                })
              );
            }),
            (function () {
              var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
              (a.type = "checkbox"),
                (Y.checkOn = "" !== a.value),
                (Y.optSelected = c.selected),
                (b.disabled = !0),
                (Y.optDisabled = !c.disabled),
                (a = Z.createElement("input")),
                (a.value = "t"),
                (a.type = "radio"),
                (Y.radioValue = "t" === a.value);
            })();
          var db,
            eb,
            fb = _.expr.attrHandle;
          _.fn.extend({
            attr: function (a, b) {
              return qa(this, _.attr, a, b, arguments.length > 1);
            },
            removeAttr: function (a) {
              return this.each(function () {
                _.removeAttr(this, a);
              });
            },
          }),
            _.extend({
              attr: function (a, b, c) {
                var d,
                  e,
                  f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)
                  return typeof a.getAttribute === za
                    ? _.prop(a, b, c)
                    : ((1 === f && _.isXMLDoc(a)) ||
                        ((b = b.toLowerCase()),
                        (d =
                          _.attrHooks[b] ||
                          (_.expr.match.bool.test(b) ? eb : db))),
                      void 0 === c
                        ? d && "get" in d && null !== (e = d.get(a, b))
                          ? e
                          : ((e = _.find.attr(a, b)), null == e ? void 0 : e)
                        : null !== c
                        ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                          ? e
                          : (a.setAttribute(b, c + ""), c)
                        : void _.removeAttr(a, b));
              },
              removeAttr: function (a, b) {
                var c,
                  d,
                  e = 0,
                  f = b && b.match(na);
                if (f && 1 === a.nodeType)
                  for (; (c = f[e++]); )
                    (d = _.propFix[c] || c),
                      _.expr.match.bool.test(c) && (a[d] = !1),
                      a.removeAttribute(c);
              },
              attrHooks: {
                type: {
                  set: function (a, b) {
                    if (
                      !Y.radioValue &&
                      "radio" === b &&
                      _.nodeName(a, "input")
                    ) {
                      var c = a.value;
                      return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                  },
                },
              },
            }),
            (eb = {
              set: function (a, b, c) {
                return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
              },
            }),
            _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
              var c = fb[b] || _.find.attr;
              fb[b] = function (a, b, d) {
                var e, f;
                return (
                  d ||
                    ((f = fb[b]),
                    (fb[b] = e),
                    (e = null != c(a, b, d) ? b.toLowerCase() : null),
                    (fb[b] = f)),
                  e
                );
              };
            });
          var gb = /^(?:input|select|textarea|button)$/i;
          _.fn.extend({
            prop: function (a, b) {
              return qa(this, _.prop, a, b, arguments.length > 1);
            },
            removeProp: function (a) {
              return this.each(function () {
                delete this[_.propFix[a] || a];
              });
            },
          }),
            _.extend({
              propFix: {
                for: "htmlFor",
                class: "className",
              },
              prop: function (a, b, c) {
                var d,
                  e,
                  f,
                  g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)
                  return (
                    (f = 1 !== g || !_.isXMLDoc(a)),
                    f && ((b = _.propFix[b] || b), (e = _.propHooks[b])),
                    void 0 !== c
                      ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                        ? d
                        : (a[b] = c)
                      : e && "get" in e && null !== (d = e.get(a, b))
                      ? d
                      : a[b]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (a) {
                    return a.hasAttribute("tabindex") ||
                      gb.test(a.nodeName) ||
                      a.href
                      ? a.tabIndex
                      : -1;
                  },
                },
              },
            }),
            Y.optSelected ||
              (_.propHooks.selected = {
                get: function (a) {
                  var b = a.parentNode;
                  return b && b.parentNode && b.parentNode.selectedIndex, null;
                },
              }),
            _.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                _.propFix[this.toLowerCase()] = this;
              }
            );
          var hb = /[\t\r\n\f]/g;
          _.fn.extend({
            addClass: function (a) {
              var b,
                c,
                d,
                e,
                f,
                g,
                h = "string" == typeof a && a,
                i = 0,
                j = this.length;
              if (_.isFunction(a))
                return this.each(function (b) {
                  _(this).addClass(a.call(this, b, this.className));
                });
              if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                  if (
                    ((c = this[i]),
                    (d =
                      1 === c.nodeType &&
                      (c.className
                        ? (" " + c.className + " ").replace(hb, " ")
                        : " ")))
                  ) {
                    for (f = 0; (e = b[f++]); )
                      d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    (g = _.trim(d)), c.className !== g && (c.className = g);
                  }
              return this;
            },
            removeClass: function (a) {
              var b,
                c,
                d,
                e,
                f,
                g,
                h = 0 === arguments.length || ("string" == typeof a && a),
                i = 0,
                j = this.length;
              if (_.isFunction(a))
                return this.each(function (b) {
                  _(this).removeClass(a.call(this, b, this.className));
                });
              if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                  if (
                    ((c = this[i]),
                    (d =
                      1 === c.nodeType &&
                      (c.className
                        ? (" " + c.className + " ").replace(hb, " ")
                        : "")))
                  ) {
                    for (f = 0; (e = b[f++]); )
                      for (; d.indexOf(" " + e + " ") >= 0; )
                        d = d.replace(" " + e + " ", " ");
                    (g = a ? _.trim(d) : ""),
                      c.className !== g && (c.className = g);
                  }
              return this;
            },
            toggleClass: function (a, b) {
              var c = typeof a;
              return "boolean" == typeof b && "string" === c
                ? b
                  ? this.addClass(a)
                  : this.removeClass(a)
                : _.isFunction(a)
                ? this.each(function (c) {
                    _(this).toggleClass(a.call(this, c, this.className, b), b);
                  })
                : this.each(function () {
                    if ("string" === c)
                      for (
                        var b, d = 0, e = _(this), f = a.match(na) || [];
                        (b = f[d++]);

                      )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else
                      (c === za || "boolean" === c) &&
                        (this.className &&
                          ra.set(this, "__className__", this.className),
                        (this.className =
                          this.className || a === !1
                            ? ""
                            : ra.get(this, "__className__") || ""));
                  });
            },
            hasClass: function (a) {
              for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (
                  1 === this[c].nodeType &&
                  (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >=
                    0
                )
                  return !0;
              return !1;
            },
          });
          var ib = /\r/g;
          _.fn.extend({
            val: function (a) {
              var b,
                c,
                d,
                e = this[0];
              {
                if (arguments.length)
                  return (
                    (d = _.isFunction(a)),
                    this.each(function (c) {
                      var e;
                      1 === this.nodeType &&
                        ((e = d ? a.call(this, c, _(this).val()) : a),
                        null == e
                          ? (e = "")
                          : "number" == typeof e
                          ? (e += "")
                          : _.isArray(e) &&
                            (e = _.map(e, function (a) {
                              return null == a ? "" : a + "";
                            })),
                        (b =
                          _.valHooks[this.type] ||
                          _.valHooks[this.nodeName.toLowerCase()]),
                        (b &&
                          "set" in b &&
                          void 0 !== b.set(this, e, "value")) ||
                          (this.value = e));
                    })
                  );
                if (e)
                  return (
                    (b =
                      _.valHooks[e.type] ||
                      _.valHooks[e.nodeName.toLowerCase()]),
                    b && "get" in b && void 0 !== (c = b.get(e, "value"))
                      ? c
                      : ((c = e.value),
                        "string" == typeof c
                          ? c.replace(ib, "")
                          : null == c
                          ? ""
                          : c)
                  );
              }
            },
          }),
            _.extend({
              valHooks: {
                option: {
                  get: function (a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a));
                  },
                },
                select: {
                  get: function (a) {
                    for (
                      var b,
                        c,
                        d = a.options,
                        e = a.selectedIndex,
                        f = "select-one" === a.type || 0 > e,
                        g = f ? null : [],
                        h = f ? e + 1 : d.length,
                        i = 0 > e ? h : f ? e : 0;
                      h > i;
                      i++
                    )
                      if (
                        ((c = d[i]),
                        (c.selected || i === e) &&
                          (Y.optDisabled
                            ? !c.disabled
                            : null === c.getAttribute("disabled")) &&
                          (!c.parentNode.disabled ||
                            !_.nodeName(c.parentNode, "optgroup")))
                      ) {
                        if (((b = _(c).val()), f)) return b;
                        g.push(b);
                      }
                    return g;
                  },
                  set: function (a, b) {
                    for (
                      var c, d, e = a.options, f = _.makeArray(b), g = e.length;
                      g--;

                    )
                      (d = e[g]),
                        (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                  },
                },
              },
            }),
            _.each(["radio", "checkbox"], function () {
              (_.valHooks[this] = {
                set: function (a, b) {
                  return _.isArray(b)
                    ? (a.checked = _.inArray(_(a).val(), b) >= 0)
                    : void 0;
                },
              }),
                Y.checkOn ||
                  (_.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value;
                  });
            }),
            _.each(
              "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
              ),
              function (a, b) {
                _.fn[b] = function (a, c) {
                  return arguments.length > 0
                    ? this.on(b, null, a, c)
                    : this.trigger(b);
                };
              }
            ),
            _.fn.extend({
              hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
              },
              bind: function (a, b, c) {
                return this.on(a, null, b, c);
              },
              unbind: function (a, b) {
                return this.off(a, null, b);
              },
              delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
              },
              undelegate: function (a, b, c) {
                return 1 === arguments.length
                  ? this.off(a, "**")
                  : this.off(b, a || "**", c);
              },
            });
          var jb = _.now(),
            kb = /\?/;
          (_.parseJSON = function (a) {
            return JSON.parse(a + "");
          }),
            (_.parseXML = function (a) {
              var b, c;
              if (!a || "string" != typeof a) return null;
              try {
                (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
              } catch (d) {
                b = void 0;
              }
              return (
                (!b || b.getElementsByTagName("parsererror").length) &&
                  _.error("Invalid XML: " + a),
                b
              );
            });
          var lb = /#.*$/,
            mb = /([?&])_=[^&]*/,
            nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            pb = /^(?:GET|HEAD)$/,
            qb = /^\/\//,
            rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = a.location.href,
            wb = rb.exec(vb.toLowerCase()) || [];
          _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: vb,
              type: "GET",
              isLocal: ob.test(wb[1]),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: {
                xml: /xml/,
                html: /html/,
                json: /json/,
              },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML,
              },
              flatOptions: {
                url: !0,
                context: !0,
              },
            },
            ajaxSetup: function (a, b) {
              return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
            },
            ajaxPrefilter: J(sb),
            ajaxTransport: J(tb),
            ajax: function (a, b) {
              function c(a, b, c, g) {
                var i,
                  k,
                  r,
                  s,
                  u,
                  w = b;
                2 !== t &&
                  ((t = 2),
                  h && clearTimeout(h),
                  (d = void 0),
                  (f = g || ""),
                  (v.readyState = a > 0 ? 4 : 0),
                  (i = (a >= 200 && 300 > a) || 304 === a),
                  c && (s = M(l, v, c)),
                  (s = N(l, s, v, i)),
                  i
                    ? (l.ifModified &&
                        ((u = v.getResponseHeader("Last-Modified")),
                        u && (_.lastModified[e] = u),
                        (u = v.getResponseHeader("etag")),
                        u && (_.etag[e] = u)),
                      204 === a || "HEAD" === l.type
                        ? (w = "nocontent")
                        : 304 === a
                        ? (w = "notmodified")
                        : ((w = s.state),
                          (k = s.data),
                          (r = s.error),
                          (i = !r)))
                    : ((r = w), (a || !w) && ((w = "error"), 0 > a && (a = 0))),
                  (v.status = a),
                  (v.statusText = (b || w) + ""),
                  i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                  v.statusCode(q),
                  (q = void 0),
                  j &&
                    n.trigger(i ? "ajaxSuccess" : "ajaxError", [
                      v,
                      l,
                      i ? k : r,
                    ]),
                  p.fireWith(m, [v, w]),
                  j &&
                    (n.trigger("ajaxComplete", [v, l]),
                    --_.active || _.event.trigger("ajaxStop")));
              }
              "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
              var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                  readyState: 0,
                  getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                      if (!g)
                        for (g = {}; (b = nb.exec(f)); )
                          g[b[1].toLowerCase()] = b[2];
                      b = g[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                  },
                  getAllResponseHeaders: function () {
                    return 2 === t ? f : null;
                  },
                  setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
                  },
                  overrideMimeType: function (a) {
                    return t || (l.mimeType = a), this;
                  },
                  statusCode: function (a) {
                    var b;
                    if (a)
                      if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                      else v.always(a[v.status]);
                    return this;
                  },
                  abort: function (a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this;
                  },
                };
              if (
                ((o.promise(v).complete = p.add),
                (v.success = v.done),
                (v.error = v.fail),
                (l.url = ((a || l.url || vb) + "")
                  .replace(lb, "")
                  .replace(qb, wb[1] + "//")),
                (l.type = b.method || b.type || l.method || l.type),
                (l.dataTypes = _.trim(l.dataType || "*")
                  .toLowerCase()
                  .match(na) || [""]),
                null == l.crossDomain &&
                  ((i = rb.exec(l.url.toLowerCase())),
                  (l.crossDomain = !(
                    !i ||
                    (i[1] === wb[1] &&
                      i[2] === wb[2] &&
                      (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                        (wb[3] || ("http:" === wb[1] ? "80" : "443")))
                  ))),
                l.data &&
                  l.processData &&
                  "string" != typeof l.data &&
                  (l.data = _.param(l.data, l.traditional)),
                K(sb, l, b, v),
                2 === t)
              )
                return v;
              (j = _.event && l.global),
                j && 0 === _.active++ && _.event.trigger("ajaxStart"),
                (l.type = l.type.toUpperCase()),
                (l.hasContent = !pb.test(l.type)),
                (e = l.url),
                l.hasContent ||
                  (l.data &&
                    ((e = l.url += (kb.test(e) ? "&" : "?") + l.data),
                    delete l.data),
                  l.cache === !1 &&
                    (l.url = mb.test(e)
                      ? e.replace(mb, "$1_=" + jb++)
                      : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)),
                l.ifModified &&
                  (_.lastModified[e] &&
                    v.setRequestHeader("If-Modified-Since", _.lastModified[e]),
                  _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
                ((l.data && l.hasContent && l.contentType !== !1) ||
                  b.contentType) &&
                  v.setRequestHeader("Content-Type", l.contentType),
                v.setRequestHeader(
                  "Accept",
                  l.dataTypes[0] && l.accepts[l.dataTypes[0]]
                    ? l.accepts[l.dataTypes[0]] +
                        ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
                    : l.accepts["*"]
                );
              for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
              if (
                l.beforeSend &&
                (l.beforeSend.call(m, v, l) === !1 || 2 === t)
              )
                return v.abort();
              u = "abort";
              for (k in {
                success: 1,
                error: 1,
                complete: 1,
              })
                v[k](l[k]);
              if ((d = K(tb, l, b, v))) {
                (v.readyState = 1),
                  j && n.trigger("ajaxSend", [v, l]),
                  l.async &&
                    l.timeout > 0 &&
                    (h = setTimeout(function () {
                      v.abort("timeout");
                    }, l.timeout));
                try {
                  (t = 1), d.send(r, c);
                } catch (w) {
                  if (!(2 > t)) throw w;
                  c(-1, w);
                }
              } else c(-1, "No Transport");
              return v;
            },
            getJSON: function (a, b, c) {
              return _.get(a, b, c, "json");
            },
            getScript: function (a, b) {
              return _.get(a, void 0, b, "script");
            },
          }),
            _.each(["get", "post"], function (a, b) {
              _[b] = function (a, c, d, e) {
                return (
                  _.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                  _.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d,
                  })
                );
              };
            }),
            (_._evalUrl = function (a) {
              return _.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0,
              });
            }),
            _.fn.extend({
              wrapAll: function (a) {
                var b;
                return _.isFunction(a)
                  ? this.each(function (b) {
                      _(this).wrapAll(a.call(this, b));
                    })
                  : (this[0] &&
                      ((b = _(a, this[0].ownerDocument).eq(0).clone(!0)),
                      this[0].parentNode && b.insertBefore(this[0]),
                      b
                        .map(function () {
                          for (var a = this; a.firstElementChild; )
                            a = a.firstElementChild;
                          return a;
                        })
                        .append(this)),
                    this);
              },
              wrapInner: function (a) {
                return _.isFunction(a)
                  ? this.each(function (b) {
                      _(this).wrapInner(a.call(this, b));
                    })
                  : this.each(function () {
                      var b = _(this),
                        c = b.contents();
                      c.length ? c.wrapAll(a) : b.append(a);
                    });
              },
              wrap: function (a) {
                var b = _.isFunction(a);
                return this.each(function (c) {
                  _(this).wrapAll(b ? a.call(this, c) : a);
                });
              },
              unwrap: function () {
                return this.parent()
                  .each(function () {
                    _.nodeName(this, "body") ||
                      _(this).replaceWith(this.childNodes);
                  })
                  .end();
              },
            }),
            (_.expr.filters.hidden = function (a) {
              return a.offsetWidth <= 0 && a.offsetHeight <= 0;
            }),
            (_.expr.filters.visible = function (a) {
              return !_.expr.filters.hidden(a);
            });
          var xb = /%20/g,
            yb = /\[\]$/,
            zb = /\r?\n/g,
            Ab = /^(?:submit|button|image|reset|file)$/i,
            Bb = /^(?:input|select|textarea|keygen)/i;
          (_.param = function (a, b) {
            var c,
              d = [],
              e = function (a, b) {
                (b = _.isFunction(b) ? b() : null == b ? "" : b),
                  (d[d.length] =
                    encodeURIComponent(a) + "=" + encodeURIComponent(b));
              };
            if (
              (void 0 === b &&
                (b = _.ajaxSettings && _.ajaxSettings.traditional),
              _.isArray(a) || (a.jquery && !_.isPlainObject(a)))
            )
              _.each(a, function () {
                e(this.name, this.value);
              });
            else for (c in a) O(c, a[c], b, e);
            return d.join("&").replace(xb, "+");
          }),
            _.fn.extend({
              serialize: function () {
                return _.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var a = _.prop(this, "elements");
                  return a ? _.makeArray(a) : this;
                })
                  .filter(function () {
                    var a = this.type;
                    return (
                      this.name &&
                      !_(this).is(":disabled") &&
                      Bb.test(this.nodeName) &&
                      !Ab.test(a) &&
                      (this.checked || !ya.test(a))
                    );
                  })
                  .map(function (a, b) {
                    var c = _(this).val();
                    return null == c
                      ? null
                      : _.isArray(c)
                      ? _.map(c, function (a) {
                          return {
                            name: b.name,
                            value: a.replace(zb, "\r\n"),
                          };
                        })
                      : {
                          name: b.name,
                          value: c.replace(zb, "\r\n"),
                        };
                  })
                  .get();
              },
            }),
            (_.ajaxSettings.xhr = function () {
              try {
                return new XMLHttpRequest();
              } catch (a) {}
            });
          var Cb = 0,
            Db = {},
            Eb = {
              0: 200,
              1223: 204,
            },
            Fb = _.ajaxSettings.xhr();
          a.attachEvent &&
            a.attachEvent("onunload", function () {
              for (var a in Db) Db[a]();
            }),
            (Y.cors = !!Fb && "withCredentials" in Fb),
            (Y.ajax = Fb = !!Fb),
            _.ajaxTransport(function (a) {
              var b;
              return Y.cors || (Fb && !a.crossDomain)
                ? {
                    send: function (c, d) {
                      var e,
                        f = a.xhr(),
                        g = ++Cb;
                      if (
                        (f.open(a.type, a.url, a.async, a.username, a.password),
                        a.xhrFields)
                      )
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                      a.mimeType &&
                        f.overrideMimeType &&
                        f.overrideMimeType(a.mimeType),
                        a.crossDomain ||
                          c["X-Requested-With"] ||
                          (c["X-Requested-With"] = "XMLHttpRequest");
                      for (e in c) f.setRequestHeader(e, c[e]);
                      (b = function (a) {
                        return function () {
                          b &&
                            (delete Db[g],
                            (b = f.onload = f.onerror = null),
                            "abort" === a
                              ? f.abort()
                              : "error" === a
                              ? d(f.status, f.statusText)
                              : d(
                                  Eb[f.status] || f.status,
                                  f.statusText,
                                  "string" == typeof f.responseText
                                    ? {
                                        text: f.responseText,
                                      }
                                    : void 0,
                                  f.getAllResponseHeaders()
                                ));
                        };
                      }),
                        (f.onload = b()),
                        (f.onerror = b("error")),
                        (b = Db[g] = b("abort"));
                      try {
                        f.send((a.hasContent && a.data) || null);
                      } catch (h) {
                        if (b) throw h;
                      }
                    },
                    abort: function () {
                      b && b();
                    },
                  }
                : void 0;
            }),
            _.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: {
                script: /(?:java|ecma)script/,
              },
              converters: {
                "text script": function (a) {
                  return _.globalEval(a), a;
                },
              },
            }),
            _.ajaxPrefilter("script", function (a) {
              void 0 === a.cache && (a.cache = !1),
                a.crossDomain && (a.type = "GET");
            }),
            _.ajaxTransport("script", function (a) {
              if (a.crossDomain) {
                var b, c;
                return {
                  send: function (d, e) {
                    (b = _("<script>")
                      .prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url,
                      })
                      .on(
                        "load error",
                        (c = function (a) {
                          b.remove(),
                            (c = null),
                            a && e("error" === a.type ? 404 : 200, a.type);
                        })
                      )),
                      Z.head.appendChild(b[0]);
                  },
                  abort: function () {
                    c && c();
                  },
                };
              }
            });
          var Gb = [],
            Hb = /(=)\?(?=&|$)|\?\?/;
          _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var a = Gb.pop() || _.expando + "_" + jb++;
              return (this[a] = !0), a;
            },
          }),
            _.ajaxPrefilter("json jsonp", function (b, c, d) {
              var e,
                f,
                g,
                h =
                  b.jsonp !== !1 &&
                  (Hb.test(b.url)
                    ? "url"
                    : "string" == typeof b.data &&
                      !(b.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                      Hb.test(b.data) &&
                      "data");
              return h || "jsonp" === b.dataTypes[0]
                ? ((e = b.jsonpCallback = _.isFunction(b.jsonpCallback)
                    ? b.jsonpCallback()
                    : b.jsonpCallback),
                  h
                    ? (b[h] = b[h].replace(Hb, "$1" + e))
                    : b.jsonp !== !1 &&
                      (b.url +=
                        (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                  (b.converters["script json"] = function () {
                    return g || _.error(e + " was not called"), g[0];
                  }),
                  (b.dataTypes[0] = "json"),
                  (f = a[e]),
                  (a[e] = function () {
                    g = arguments;
                  }),
                  d.always(function () {
                    (a[e] = f),
                      b[e] && ((b.jsonpCallback = c.jsonpCallback), Gb.push(e)),
                      g && _.isFunction(f) && f(g[0]),
                      (g = f = void 0);
                  }),
                  "script")
                : void 0;
            }),
            (_.parseHTML = function (a, b, c) {
              if (!a || "string" != typeof a) return null;
              "boolean" == typeof b && ((c = b), (b = !1)), (b = b || Z);
              var d = ga.exec(a),
                e = !c && [];
              return d
                ? [b.createElement(d[1])]
                : ((d = _.buildFragment([a], b, e)),
                  e && e.length && _(e).remove(),
                  _.merge([], d.childNodes));
            });
          var Ib = _.fn.load;
          (_.fn.load = function (a, b, c) {
            if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
            var d,
              e,
              f,
              g = this,
              h = a.indexOf(" ");
            return (
              h >= 0 && ((d = _.trim(a.slice(h))), (a = a.slice(0, h))),
              _.isFunction(b)
                ? ((c = b), (b = void 0))
                : b && "object" == typeof b && (e = "POST"),
              g.length > 0 &&
                _.ajax({
                  url: a,
                  type: e,
                  dataType: "html",
                  data: b,
                })
                  .done(function (a) {
                    (f = arguments),
                      g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
                  })
                  .complete(
                    c &&
                      function (a, b) {
                        g.each(c, f || [a.responseText, b, a]);
                      }
                  ),
              this
            );
          }),
            _.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (a, b) {
                _.fn[b] = function (a) {
                  return this.on(b, a);
                };
              }
            ),
            (_.expr.filters.animated = function (a) {
              return _.grep(_.timers, function (b) {
                return a === b.elem;
              }).length;
            });
          var Jb = a.document.documentElement;
          (_.offset = {
            setOffset: function (a, b, c) {
              var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = _.css(a, "position"),
                l = _(a),
                m = {};
              "static" === k && (a.style.position = "relative"),
                (h = l.offset()),
                (f = _.css(a, "top")),
                (i = _.css(a, "left")),
                (j =
                  ("absolute" === k || "fixed" === k) &&
                  (f + i).indexOf("auto") > -1),
                j
                  ? ((d = l.position()), (g = d.top), (e = d.left))
                  : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                _.isFunction(b) && (b = b.call(a, c, h)),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                "using" in b ? b.using.call(a, m) : l.css(m);
            },
          }),
            _.fn.extend({
              offset: function (a) {
                if (arguments.length)
                  return void 0 === a
                    ? this
                    : this.each(function (b) {
                        _.offset.setOffset(this, a, b);
                      });
                var b,
                  c,
                  d = this[0],
                  e = {
                    top: 0,
                    left: 0,
                  },
                  f = d && d.ownerDocument;
                if (f)
                  return (
                    (b = f.documentElement),
                    _.contains(b, d)
                      ? (typeof d.getBoundingClientRect !== za &&
                          (e = d.getBoundingClientRect()),
                        (c = P(f)),
                        {
                          top: e.top + c.pageYOffset - b.clientTop,
                          left: e.left + c.pageXOffset - b.clientLeft,
                        })
                      : e
                  );
              },
              position: function () {
                if (this[0]) {
                  var a,
                    b,
                    c = this[0],
                    d = {
                      top: 0,
                      left: 0,
                    };
                  return (
                    "fixed" === _.css(c, "position")
                      ? (b = c.getBoundingClientRect())
                      : ((a = this.offsetParent()),
                        (b = this.offset()),
                        _.nodeName(a[0], "html") || (d = a.offset()),
                        (d.top += _.css(a[0], "borderTopWidth", !0)),
                        (d.left += _.css(a[0], "borderLeftWidth", !0))),
                    {
                      top: b.top - d.top - _.css(c, "marginTop", !0),
                      left: b.left - d.left - _.css(c, "marginLeft", !0),
                    }
                  );
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var a = this.offsetParent || Jb;
                    a &&
                    !_.nodeName(a, "html") &&
                    "static" === _.css(a, "position");

                  )
                    a = a.offsetParent;
                  return a || Jb;
                });
              },
            }),
            _.each(
              {
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset",
              },
              function (b, c) {
                var d = "pageYOffset" === c;
                _.fn[b] = function (e) {
                  return qa(
                    this,
                    function (b, e, f) {
                      var g = P(b);
                      return void 0 === f
                        ? g
                          ? g[c]
                          : b[e]
                        : void (g
                            ? g.scrollTo(d ? a.pageXOffset : f)
                            : (b[e] = f));
                    },
                    b,
                    e,
                    arguments.length,
                    null
                  );
                };
              }
            ),
            _.each(["top", "left"], function (a, b) {
              _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
                return c
                  ? ((c = v(a, b)), Qa.test(c) ? _(a).position()[b] + "px" : c)
                  : void 0;
              });
            }),
            _.each(
              {
                Height: "height",
                Width: "width",
              },
              function (a, b) {
                _.each(
                  {
                    padding: "inner" + a,
                    content: b,
                    "": "outer" + a,
                  },
                  function (c, d) {
                    _.fn[d] = function (d, e) {
                      var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                      return qa(
                        this,
                        function (b, c, d) {
                          var e;
                          return _.isWindow(b)
                            ? b.document.documentElement["client" + a]
                            : 9 === b.nodeType
                            ? ((e = b.documentElement),
                              Math.max(
                                b.body["scroll" + a],
                                e["scroll" + a],
                                b.body["offset" + a],
                                e["offset" + a],
                                e["client" + a]
                              ))
                            : void 0 === d
                            ? _.css(b, c, g)
                            : _.style(b, c, d, g);
                        },
                        b,
                        f ? d : void 0,
                        f,
                        null
                      );
                    };
                  }
                );
              }
            ),
            (_.fn.size = function () {
              return this.length;
            }),
            (_.fn.andSelf = _.fn.addBack),
            "function" == typeof define &&
              define.amd &&
              define("jquery", [], function () {
                return _;
              });
          var Kb = a.jQuery,
            Lb = a.$;
          return (
            (_.noConflict = function (b) {
              return (
                a.$ === _ && (a.$ = Lb),
                b && a.jQuery === _ && (a.jQuery = Kb),
                _
              );
            }),
            typeof b === za && (a.jQuery = a.$ = _),
            _
          );
        });
      },
      {},
    ],
    9: [
      function (a, b, c) {
        !(function () {
          var a = {};
          !(function () {
            "use strict";

            function b(a, c, d) {
              var e = function () {};
              e.prototype = a.prototype;
              var f = new e(),
                g = /xyz/.test(function () {
                  xyz;
                })
                  ? /\bparent\b/
                  : /.*/;
              d = d || {};
              for (var h in d) {
                var i = d[h],
                  j = f[h];
                "function" == typeof j && "function" == typeof i && g.test(i)
                  ? (f[h] = (function (a, b) {
                      return function () {
                        var c = this.parent;
                        this.parent = b;
                        var d = a.apply(this, arguments);
                        return (this.parent = c), d;
                      };
                    })(i, j))
                  : (f[h] = i);
              }
              f.typename = c;
              var k = function () {
                f.init && f.init.apply(this, arguments);
              };
              return (
                (k.prototype = f),
                (k.prototype.constructor = k),
                (k.extend = function (a, c) {
                  return (
                    "object" == typeof a && ((c = a), (a = "anonymous")),
                    b(k, a, c)
                  );
                }),
                k
              );
            }
            a.object = b(Object, "Object", {});
          })(),
            (function () {
              "use strict";
              var b = Array.prototype,
                c = Object.prototype,
                d = {
                  "&": "&amp;",
                  '"': "&quot;",
                  "'": "&#39;",
                  "<": "&lt;",
                  ">": "&gt;",
                },
                e = /[&"'<>]/g,
                f = function (a) {
                  return d[a];
                },
                g = (a.lib = {});
              (g.withPrettyErrors = function (a, b, c) {
                try {
                  return c();
                } catch (d) {
                  if (
                    (d.Update || (d = new g.TemplateError(d)), d.Update(a), !b)
                  ) {
                    var e = d;
                    (d = new Error(e.message)), (d.name = e.name);
                  }
                  throw d;
                }
              }),
                (g.TemplateError = function (a, b, c) {
                  var d = this;
                  return (
                    a instanceof Error
                      ? ((d = a), (a = a.name + ": " + a.message))
                      : Error.captureStackTrace && Error.captureStackTrace(d),
                    (d.name = "Template render error"),
                    (d.message = a),
                    (d.lineno = b),
                    (d.colno = c),
                    (d.firstUpdate = !0),
                    (d.Update = function (a) {
                      var b = "(" + (a || "unknown path") + ")";
                      return (
                        this.firstUpdate &&
                          (this.lineno && this.colno
                            ? (b +=
                                " [Line " +
                                this.lineno +
                                ", Column " +
                                this.colno +
                                "]")
                            : this.lineno &&
                              (b += " [Line " + this.lineno + "]")),
                        (b += "\n "),
                        this.firstUpdate && (b += " "),
                        (this.message = b + (this.message || "")),
                        (this.firstUpdate = !1),
                        this
                      );
                    }),
                    d
                  );
                }),
                (g.TemplateError.prototype = Error.prototype),
                (g.escape = function (a) {
                  return a.replace(e, f);
                }),
                (g.isFunction = function (a) {
                  return "[object Function]" === c.toString.call(a);
                }),
                (g.isArray =
                  Array.isArray ||
                  function (a) {
                    return "[object Array]" === c.toString.call(a);
                  }),
                (g.isString = function (a) {
                  return "[object String]" === c.toString.call(a);
                }),
                (g.isObject = function (a) {
                  return "[object Object]" === c.toString.call(a);
                }),
                (g.groupBy = function (a, b) {
                  for (
                    var c = {},
                      d = g.isFunction(b)
                        ? b
                        : function (a) {
                            return a[b];
                          },
                      e = 0;
                    e < a.length;
                    e++
                  ) {
                    var f = a[e],
                      h = d(f, e);
                    (c[h] || (c[h] = [])).push(f);
                  }
                  return c;
                }),
                (g.toArray = function (a) {
                  return Array.prototype.slice.call(a);
                }),
                (g.without = function (a) {
                  var b = [];
                  if (!a) return b;
                  for (
                    var c = -1, d = a.length, e = g.toArray(arguments).slice(1);
                    ++c < d;

                  )
                    -1 === g.indexOf(e, a[c]) && b.push(a[c]);
                  return b;
                }),
                (g.extend = function (a, b) {
                  for (var c in b) a[c] = b[c];
                  return a;
                }),
                (g.repeat = function (a, b) {
                  for (var c = "", d = 0; b > d; d++) c += a;
                  return c;
                }),
                (g.each = function (a, c, d) {
                  if (null != a)
                    if (b.each && a.each === b.each) a.forEach(c, d);
                    else if (a.length === +a.length)
                      for (var e = 0, f = a.length; f > e; e++)
                        c.call(d, a[e], e, a);
                }),
                (g.map = function (a, c) {
                  var d = [];
                  if (null == a) return d;
                  if (b.map && a.map === b.map) return a.map(c);
                  for (var e = 0; e < a.length; e++) d[d.length] = c(a[e], e);
                  return a.length === +a.length && (d.length = a.length), d;
                }),
                (g.asyncIter = function (a, b, c) {
                  function d() {
                    e++, e < a.length ? b(a[e], e, d, c) : c();
                  }
                  var e = -1;
                  d();
                }),
                (g.asyncFor = function (a, b, c) {
                  function d() {
                    h++;
                    var g = e[h];
                    f > h ? b(g, a[g], h, f, d) : c();
                  }
                  var e = g.keys(a),
                    f = e.length,
                    h = -1;
                  d();
                }),
                (g.indexOf = Array.prototype.indexOf
                  ? function (a, b, c) {
                      return Array.prototype.indexOf.call(a, b, c);
                    }
                  : function (a, b, c) {
                      var d = this.length >>> 0;
                      for (
                        c = +c || 0,
                          Math.abs(c) === 1 / 0 && (c = 0),
                          0 > c && ((c += d), 0 > c && (c = 0));
                        d > c;
                        c++
                      )
                        if (a[c] === b) return c;
                      return -1;
                    }),
                Array.prototype.map ||
                  (Array.prototype.map = function () {
                    throw new Error("map is unimplemented for this js engine");
                  }),
                (g.keys = function (a) {
                  if (Object.prototype.keys) return a.keys();
                  var b = [];
                  for (var c in a) a.hasOwnProperty(c) && b.push(c);
                  return b;
                });
            })(),
            (function () {
              "use strict";

              function b(a, b, c) {
                return function () {
                  var f,
                    g = e(arguments),
                    h = d(arguments);
                  if (g > a.length) {
                    f = Array.prototype.slice.call(arguments, 0, a.length);
                    for (
                      var i = Array.prototype.slice.call(
                          arguments,
                          f.length,
                          g
                        ),
                        j = 0;
                      j < i.length;
                      j++
                    )
                      j < b.length && (h[b[j]] = i[j]);
                    f.push(h);
                  } else if (g < a.length) {
                    f = Array.prototype.slice.call(arguments, 0, g);
                    for (var j = g; j < a.length; j++) {
                      var k = a[j];
                      f.push(h[k]), delete h[k];
                    }
                    f.push(h);
                  } else f = arguments;
                  return c.apply(this, f);
                };
              }

              function c(a) {
                return (a.__keywords = !0), a;
              }

              function d(a) {
                var b = a.length;
                if (b) {
                  var c = a[b - 1];
                  if (c && c.hasOwnProperty("__keywords")) return c;
                }
                return {};
              }

              function e(a) {
                var b = a.length;
                if (0 === b) return 0;
                var c = a[b - 1];
                return c && c.hasOwnProperty("__keywords") ? b - 1 : b;
              }

              function f(a) {
                return "string" != typeof a ? a : void (this.val = a);
              }

              function g(a, b) {
                return a instanceof f ? new f(b) : b.toString();
              }

              function h(a) {
                var b = typeof a;
                return "string" === b
                  ? new f(a)
                  : "function" !== b
                  ? a
                  : function () {
                      var b = a.apply(this, arguments);
                      return "string" == typeof b ? new f(b) : b;
                    };
              }

              function i(a, b) {
                return (
                  (a = void 0 !== a && null !== a ? a : ""),
                  b && "string" == typeof a && (a = p.escape(a)),
                  a
                );
              }

              function j(a, b) {
                return (
                  (a = a || {}),
                  "function" == typeof a[b]
                    ? function () {
                        return a[b].apply(a, arguments);
                      }
                    : a[b]
                );
              }

              function k(a, b, c) {
                if (!a)
                  throw new Error(
                    "Unable to call `" + b + "`, which is undefined or falsey"
                  );
                if ("function" != typeof a)
                  throw new Error(
                    "Unable to call `" + b + "`, which is not a function"
                  );
                return a.apply(this, c);
              }

              function l(a, b, c) {
                var d = b.lookup(c);
                return void 0 !== d && null !== d ? d : a.lookup(c);
              }

              function m(a, b, c) {
                return a.lineno ? a : new p.TemplateError(a, b, c);
              }

              function n(a, b, c, d) {
                if (p.isArray(a)) {
                  var e = a.length;
                  p.asyncIter(
                    a,
                    function (a, d, f) {
                      switch (b) {
                        case 1:
                          c(a, d, e, f);
                          break;
                        case 2:
                          c(a[0], a[1], d, e, f);
                          break;
                        case 3:
                          c(a[0], a[1], a[2], d, e, f);
                          break;
                        default:
                          a.push(d, f), c.apply(this, a);
                      }
                    },
                    d
                  );
                } else
                  p.asyncFor(
                    a,
                    function (a, b, d, e, f) {
                      c(a, b, d, e, f);
                    },
                    d
                  );
              }

              function o(a, b, c, d) {
                function e(a, b) {
                  h++, (g[a] = b), h === f && d(null, g.join(""));
                }
                var f,
                  g,
                  h = 0;
                if (p.isArray(a))
                  if (((f = a.length), (g = new Array(f)), 0 === f))
                    d(null, "");
                  else
                    for (var i = 0; i < a.length; i++) {
                      var j = a[i];
                      switch (b) {
                        case 1:
                          c(j, i, f, e);
                          break;
                        case 2:
                          c(j[0], j[1], i, f, e);
                          break;
                        case 3:
                          c(j[0], j[1], j[2], i, f, e);
                          break;
                        default:
                          j.push(i, e), c.apply(this, j);
                      }
                    }
                else {
                  var k = p.keys(a);
                  if (((f = k.length), (g = new Array(f)), 0 === f))
                    d(null, "");
                  else
                    for (var i = 0; i < k.length; i++) {
                      var l = k[i];
                      c(l, a[l], i, f, e);
                    }
                }
              }
              var p = a.lib,
                q = a.object,
                r = q.extend({
                  init: function (a) {
                    (this.variables = {}), (this.parent = a);
                  },
                  set: function (a, b, c) {
                    var d = a.split("."),
                      e = this.variables,
                      f = this;
                    if (c) {
                      if ((f = this.resolve(d[0]))) return void f.set(a, b);
                      f = this;
                    }
                    for (var g = 0; g < d.length - 1; g++) {
                      var h = d[g];
                      e[h] || (e[h] = {}), (e = e[h]);
                    }
                    e[d[d.length - 1]] = b;
                  },
                  get: function (a) {
                    var b = this.variables[a];
                    return void 0 !== b && null !== b ? b : null;
                  },
                  lookup: function (a) {
                    var b = this.parent,
                      c = this.variables[a];
                    return void 0 !== c && null !== c ? c : b && b.lookup(a);
                  },
                  resolve: function (a) {
                    var b = this.parent,
                      c = this.variables[a];
                    return void 0 !== c && null !== c
                      ? this
                      : b && b.resolve(a);
                  },
                  push: function () {
                    return new r(this);
                  },
                  pop: function () {
                    return this.parent;
                  },
                });
              (f.prototype = Object.create(String.prototype)),
                (f.prototype.valueOf = function () {
                  return this.val;
                }),
                (f.prototype.toString = function () {
                  return this.val;
                }),
                (a.runtime = {
                  Frame: r,
                  makeMacro: b,
                  makeKeywordArgs: c,
                  numArgs: e,
                  suppressValue: i,
                  memberLookup: j,
                  contextOrFrameLookup: l,
                  callWrap: k,
                  handleError: m,
                  isArray: p.isArray,
                  keys: p.keys,
                  SafeString: f,
                  copySafeness: g,
                  markSafe: h,
                  asyncEach: n,
                  asyncAll: o,
                });
            })(),
            (function () {
              "use strict";
              var b = a.path,
                c = a.object,
                d = a.lib,
                e = c.extend({
                  on: function (a, b) {
                    (this.listeners = this.listeners || {}),
                      (this.listeners[a] = this.listeners[a] || []),
                      this.listeners[a].push(b);
                  },
                  emit: function (a) {
                    var b = Array.prototype.slice.call(arguments, 1);
                    this.listeners &&
                      this.listeners[a] &&
                      d.each(this.listeners[a], function (a) {
                        a.apply(null, b);
                      });
                  },
                  resolve: function (a, c) {
                    return b.resolve(b.dirname(a), c);
                  },
                  isRelative: function (a) {
                    return 0 === a.indexOf("./") || 0 === a.indexOf("../");
                  },
                });
              a.loader = e;
            })(),
            (function () {
              "use strict";
              var b = a.loader,
                c = b.extend({
                  init: function (a, b) {
                    (this.precompiled = window.nunjucksPrecompiled || {}),
                      (this.baseURL = a || ""),
                      (this.neverUpdate = b);
                  },
                  getSource: function (a) {
                    if (this.precompiled[a])
                      return {
                        src: {
                          type: "code",
                          obj: this.precompiled[a],
                        },
                        path: a,
                      };
                    var b = this.fetch(this.baseURL + "/" + a);
                    return b
                      ? {
                          src: b,
                          path: a,
                          noCache: !this.neverUpdate,
                        }
                      : null;
                  },
                  fetch: function (a, b) {
                    var c,
                      d,
                      e = !0;
                    return (
                      window.XMLHttpRequest
                        ? (c = new XMLHttpRequest())
                        : window.ActiveXObject &&
                          (c = new ActiveXObject("Microsoft.XMLHTTP")),
                      (c.onreadystatechange = function () {
                        4 !== c.readyState ||
                          (0 !== c.status && 200 !== c.status) ||
                          !e ||
                          ((e = !1), (d = c.responseText));
                      }),
                      (a +=
                        (-1 === a.indexOf("?") ? "?" : "&") +
                        "s=" +
                        new Date().getTime()),
                      c.open("GET", a, !1),
                      c.send(),
                      d
                    );
                  },
                });
              a["web-loaders"] = {
                WebLoader: c,
              };
            })(),
            (function () {
              "undefined" == typeof window || window !== this
                ? (a.loaders = a["node-loaders"])
                : (a.loaders = a["web-loaders"]);
            })(),
            (function () {
              "use strict";
              var b = a.lib,
                c = a.runtime,
                d = {
                  abs: function (a) {
                    return Math.abs(a);
                  },
                  batch: function (a, b, c) {
                    for (var d = [], e = [], f = 0; f < a.length; f++)
                      f % b === 0 && e.length && (d.push(e), (e = [])),
                        e.push(a[f]);
                    if (e.length) {
                      if (c) for (var f = e.length; b > f; f++) e.push(c);
                      d.push(e);
                    }
                    return d;
                  },
                  capitalize: function (a) {
                    var b = a.toLowerCase();
                    return c.copySafeness(
                      a,
                      b.charAt(0).toUpperCase() + b.slice(1)
                    );
                  },
                  center: function (a, d) {
                    if (((d = d || 80), a.length >= d)) return a;
                    var e = d - a.length,
                      f = b.repeat(" ", e / 2 - (e % 2)),
                      g = b.repeat(" ", e / 2);
                    return c.copySafeness(a, f + a + g);
                  },
                  default: function (a, b) {
                    return a ? a : b;
                  },
                  dictsort: function (a, c, d) {
                    if (!b.isObject(a))
                      throw new b.TemplateError(
                        "dictsort filter: val must be an object"
                      );
                    var e = [];
                    for (var f in a) e.push([f, a[f]]);
                    var g;
                    if (void 0 === d || "key" === d) g = 0;
                    else {
                      if ("value" !== d)
                        throw new b.TemplateError(
                          "dictsort filter: You can only sort by either key or value"
                        );
                      g = 1;
                    }
                    return (
                      e.sort(function (a, d) {
                        var e = a[g],
                          f = d[g];
                        return (
                          c ||
                            (b.isString(e) && (e = e.toUpperCase()),
                            b.isString(f) && (f = f.toUpperCase())),
                          e > f ? 1 : e === f ? 0 : -1
                        );
                      }),
                      e
                    );
                  },
                  escape: function (a) {
                    return "string" == typeof a || a instanceof c.SafeString
                      ? b.escape(a)
                      : a;
                  },
                  safe: function (a) {
                    return c.markSafe(a);
                  },
                  first: function (a) {
                    return a[0];
                  },
                  groupby: function (a, c) {
                    return b.groupBy(a, c);
                  },
                  indent: function (a, d, e) {
                    d = d || 4;
                    for (
                      var f = "",
                        g = a.split("\n"),
                        h = b.repeat(" ", d),
                        i = 0;
                      i < g.length;
                      i++
                    )
                      f += 0 !== i || e ? h + g[i] + "\n" : g[i] + "\n";
                    return c.copySafeness(a, f);
                  },
                  join: function (a, c, d) {
                    return (
                      (c = c || ""),
                      d &&
                        (a = b.map(a, function (a) {
                          return a[d];
                        })),
                      a.join(c)
                    );
                  },
                  last: function (a) {
                    return a[a.length - 1];
                  },
                  length: function (a) {
                    return void 0 !== a ? a.length : 0;
                  },
                  list: function (a) {
                    if (b.isString(a)) return a.split("");
                    if (b.isObject(a)) {
                      var c = [];
                      if (Object.keys) c = Object.keys(a);
                      else for (var d in a) c.push(d);
                      return b.map(c, function (b) {
                        return {
                          key: b,
                          value: a[b],
                        };
                      });
                    }
                    if (b.isArray(a)) return a;
                    throw new b.TemplateError("list filter: type not iterable");
                  },
                  lower: function (a) {
                    return a.toLowerCase();
                  },
                  random: function (a) {
                    return a[Math.floor(Math.random() * a.length)];
                  },
                  rejectattr: function (a, b) {
                    return a.filter(function (a) {
                      return !a[b];
                    });
                  },
                  selectattr: function (a, b) {
                    return a.filter(function (a) {
                      return !!a[b];
                    });
                  },
                  replace: function (a, b, d, e) {
                    if (b instanceof RegExp) return a.replace(b, d);
                    var f = a,
                      g = f,
                      h = 1;
                    for (f = f.replace(b, d); g !== f && !(h >= e); )
                      (g = f), (f = f.replace(b, d)), h++;
                    return c.copySafeness(a, f);
                  },
                  reverse: function (a) {
                    var e;
                    return (
                      (e = b.isString(a)
                        ? d.list(a)
                        : b.map(a, function (a) {
                            return a;
                          })),
                      e.reverse(),
                      b.isString(a) ? c.copySafeness(a, e.join("")) : e
                    );
                  },
                  round: function (a, b, c) {
                    b = b || 0;
                    var d,
                      e = Math.pow(10, b);
                    return (
                      (d =
                        "ceil" === c
                          ? Math.ceil
                          : "floor" === c
                          ? Math.floor
                          : Math.round),
                      d(a * e) / e
                    );
                  },
                  slice: function (a, b, c) {
                    for (
                      var d = Math.floor(a.length / b),
                        e = a.length % b,
                        f = 0,
                        g = [],
                        h = 0;
                      b > h;
                      h++
                    ) {
                      var i = f + h * d;
                      e > h && f++;
                      var j = f + (h + 1) * d,
                        k = a.slice(i, j);
                      c && h >= e && k.push(c), g.push(k);
                    }
                    return g;
                  },
                  sort: function (a, c, d, e) {
                    return (
                      (a = b.map(a, function (a) {
                        return a;
                      })),
                      a.sort(function (a, f) {
                        var g, h;
                        return (
                          e ? ((g = a[e]), (h = f[e])) : ((g = a), (h = f)),
                          !d &&
                            b.isString(g) &&
                            b.isString(h) &&
                            ((g = g.toLowerCase()), (h = h.toLowerCase())),
                          h > g ? (c ? 1 : -1) : g > h ? (c ? -1 : 1) : 0
                        );
                      }),
                      a
                    );
                  },
                  string: function (a) {
                    return c.copySafeness(a, a);
                  },
                  title: function (a) {
                    for (var b = a.split(" "), e = 0; e < b.length; e++)
                      b[e] = d.capitalize(b[e]);
                    return c.copySafeness(a, b.join(" "));
                  },
                  trim: function (a) {
                    return c.copySafeness(a, a.replace(/^\s*|\s*$/g, ""));
                  },
                  truncate: function (a, b, d, e) {
                    var f = a;
                    if (((b = b || 255), a.length <= b)) return a;
                    if (d) a = a.substring(0, b);
                    else {
                      var g = a.lastIndexOf(" ", b);
                      -1 === g && (g = b), (a = a.substring(0, g));
                    }
                    return (
                      (a += void 0 !== e && null !== e ? e : "..."),
                      c.copySafeness(f, a)
                    );
                  },
                  upper: function (a) {
                    return a.toUpperCase();
                  },
                  urlencode: function (a) {
                    var c = encodeURIComponent;
                    if (b.isString(a)) return c(a);
                    var d;
                    if (b.isArray(a))
                      d = a.map(function (a) {
                        return c(a[0]) + "=" + c(a[1]);
                      });
                    else {
                      d = [];
                      for (var e in a)
                        a.hasOwnProperty(e) && d.push(c(e) + "=" + c(a[e]));
                    }
                    return d.join("&");
                  },
                  urlize: function (a, b, c) {
                    isNaN(b) && (b = 1 / 0);
                    var d = c === !0 ? ' rel="nofollow"' : "",
                      e = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,
                      f = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,
                      g = /^https?:\/\/.*$/,
                      h = /^www\./,
                      i = /\.(?:org|net|com)(?:\:|\/|$)/,
                      j = a
                        .split(/\s+/)
                        .filter(function (a) {
                          return a && a.length;
                        })
                        .map(function (a) {
                          var c = a.match(e),
                            j = (c && c[1]) || a;
                          return g.test(j)
                            ? '<a href="' +
                                j +
                                '"' +
                                d +
                                ">" +
                                j.substr(0, b) +
                                "</a>"
                            : h.test(j)
                            ? '<a href="http://' +
                              j +
                              '"' +
                              d +
                              ">" +
                              j.substr(0, b) +
                              "</a>"
                            : f.test(j)
                            ? '<a href="mailto:' + j + '">' + j + "</a>"
                            : i.test(j)
                            ? '<a href="http://' +
                              j +
                              '"' +
                              d +
                              ">" +
                              j.substr(0, b) +
                              "</a>"
                            : a;
                        });
                    return j.join(" ");
                  },
                  wordcount: function (a) {
                    var b = a ? a.match(/\w+/g) : null;
                    return b ? b.length : null;
                  },
                  float: function (a, b) {
                    var c = parseFloat(a);
                    return isNaN(c) ? b : c;
                  },
                  int: function (a, b) {
                    var c = parseInt(a, 10);
                    return isNaN(c) ? b : c;
                  },
                };
              (d.d = d["default"]), (d.e = d.escape), (a.filters = d);
            })(),
            (function () {
              "use strict";

              function b(a) {
                var b = -1;
                return {
                  current: null,
                  reset: function () {
                    (b = -1), (this.current = null);
                  },
                  next: function () {
                    return (
                      b++,
                      b >= a.length && (b = 0),
                      (this.current = a[b]),
                      this.current
                    );
                  },
                };
              }

              function c(a) {
                a = a || ",";
                var b = !0;
                return function () {
                  var c = b ? "" : a;
                  return (b = !1), c;
                };
              }
              var d = {
                range: function (a, b, c) {
                  b ? c || (c = 1) : ((b = a), (a = 0), (c = 1));
                  for (var d = [], e = a; b > e; e += c) d.push(e);
                  return d;
                },
                cycler: function () {
                  return b(Array.prototype.slice.call(arguments));
                },
                joiner: function (a) {
                  return c(a);
                },
              };
              a.globals = d;
            })(),
            (function () {
              "use strict";
              var b = a.path,
                c = a.lib,
                d = a.object,
                e = (a.lexer, a.compiler),
                f = a.filters,
                g = a.loaders,
                h = a.runtime,
                i = a.globals,
                j = h.Frame,
                k = d.extend({
                  init: function (a, b) {
                    var b = (this.opts = b || {});
                    (this.opts.dev = !!b.dev),
                      (this.opts.autoescape = !!b.autoescape),
                      (this.opts.trimBlocks = !!b.trimBlocks),
                      (this.opts.lstripBlocks = !!b.lstripBlocks),
                      a
                        ? (this.loaders = c.isArray(a) ? a : [a])
                        : g.FileSystemLoader
                        ? (this.loaders = [new g.FileSystemLoader("views")])
                        : (this.loaders = [new g.WebLoader("/views")]),
                      this.initCache(),
                      (this.filters = {}),
                      (this.asyncFilters = []),
                      (this.extensions = {}),
                      (this.extensionsList = []);
                    for (var d in f) this.addFilter(d, f[d]);
                  },
                  initCache: function () {
                    c.each(this.loaders, function (a) {
                      (a.cache = {}),
                        "function" == typeof a.on &&
                          a.on("update", function (b) {
                            a.cache[b] = null;
                          });
                    });
                  },
                  addExtension: function (a, b) {
                    (b._name = a),
                      (this.extensions[a] = b),
                      this.extensionsList.push(b);
                  },
                  getExtension: function (a) {
                    return this.extensions[a];
                  },
                  addGlobal: function (a, b) {
                    i[a] = b;
                  },
                  addFilter: function (a, b, c) {
                    var d = b;
                    c && this.asyncFilters.push(a), (this.filters[a] = d);
                  },
                  getFilter: function (a) {
                    if (!this.filters[a])
                      throw new Error("filter not found: " + a);
                    return this.filters[a];
                  },
                  resolveTemplate: function (a, b, c) {
                    var d = a.isRelative && b ? a.isRelative(c) : !1;
                    return d && a.resolve ? a.resolve(b, c) : c;
                  },
                  getTemplate: function (a, b, d, e) {
                    var f = this,
                      g = null;
                    if (
                      (a && a.raw && (a = a.raw),
                      c.isFunction(d) && ((e = d), (d = null), (b = b || !1)),
                      c.isFunction(b) && ((e = b), (b = !1)),
                      "string" != typeof a)
                    )
                      throw new Error("template names must be a string: " + a);
                    for (var h = 0; h < this.loaders.length; h++) {
                      var i = this.resolveTemplate(this.loaders[h], d, a);
                      if ((g = this.loaders[h].cache[i])) break;
                    }
                    if (!g) {
                      var j;
                      return (
                        c.asyncIter(
                          this.loaders,
                          function (b, c, e, g) {
                            function h(a) {
                              a ? ((a.loader = b), g(a)) : e();
                            }
                            (a = f.resolveTemplate(b, d, a)),
                              b.async
                                ? b.getSource(a, function (a, b) {
                                    if (a) throw a;
                                    h(b);
                                  })
                                : h(b.getSource(a));
                          },
                          function (c) {
                            if (c) {
                              var d = new m(c.src, this, c.path, b);
                              c.noCache || (c.loader.cache[a] = d),
                                e ? e(null, d) : (j = d);
                            } else {
                              var f = new Error("template not found: " + a);
                              if (!e) throw f;
                              e(f);
                            }
                          }.bind(this)
                        ),
                        j
                      );
                    }
                    return b && g.compile(), e ? void e(null, g) : g;
                  },
                  express: function (a) {
                    function c(a, c) {
                      if (
                        ((this.name = a),
                        (this.path = a),
                        (this.defaultEngine = c.defaultEngine),
                        (this.ext = b.extname(a)),
                        !this.ext && !this.defaultEngine)
                      )
                        throw new Error(
                          "No default engine was specified and no extension was provided."
                        );
                      this.ext ||
                        (this.name += this.ext =
                          ("." !== this.defaultEngine[0] ? "." : "") +
                          this.defaultEngine);
                    }
                    var d = this;
                    (c.prototype.render = function (a, b) {
                      d.render(this.name, a, b);
                    }),
                      a.set("view", c);
                  },
                  render: function (a, b, d) {
                    c.isFunction(b) && ((d = b), (b = null));
                    var e = null;
                    return (
                      this.getTemplate(a, function (a, c) {
                        if (a && d) d(a);
                        else {
                          if (a) throw a;
                          c.render(
                            b,
                            d ||
                              function (a, b) {
                                if (a) throw a;
                                e = b;
                              }
                          );
                        }
                      }),
                      e
                    );
                  },
                  renderString: function (a, b, d, e) {
                    c.isFunction(d) && ((e = d), (d = {})), (d = d || {});
                    var f = new m(a, this, d.path);
                    return f.render(b, e);
                  },
                }),
                l = d.extend({
                  init: function (a, b) {
                    (this.ctx = a), (this.blocks = {}), (this.exported = []);
                    for (var c in b) this.addBlock(c, b[c]);
                  },
                  lookup: function (a) {
                    return a in i && !(a in this.ctx) ? i[a] : this.ctx[a];
                  },
                  setVariable: function (a, b) {
                    this.ctx[a] = b;
                  },
                  getVariables: function () {
                    return this.ctx;
                  },
                  addBlock: function (a, b) {
                    (this.blocks[a] = this.blocks[a] || []),
                      this.blocks[a].push(b);
                  },
                  getBlock: function (a) {
                    if (!this.blocks[a])
                      throw new Error('unknown block "' + a + '"');
                    return this.blocks[a][0];
                  },
                  getSuper: function (a, b, d, e, f, g) {
                    var h = c.indexOf(this.blocks[b] || [], d),
                      i = this.blocks[b][h + 1],
                      j = this;
                    if (-1 === h || !i)
                      throw new Error(
                        'no super block available for "' + b + '"'
                      );
                    i(a, j, e, f, g);
                  },
                  addExport: function (a) {
                    this.exported.push(a);
                  },
                  getExported: function () {
                    for (var a = {}, b = 0; b < this.exported.length; b++) {
                      var c = this.exported[b];
                      a[c] = this.ctx[c];
                    }
                    return a;
                  },
                }),
                m = d.extend({
                  init: function (a, b, d, e) {
                    if (((this.env = b || new k()), c.isObject(a)))
                      switch (a.type) {
                        case "code":
                          this.tmplProps = a.obj;
                          break;
                        case "string":
                          this.tmplStr = a.obj;
                      }
                    else {
                      if (!c.isString(a))
                        throw new Error(
                          "src must be a string or an object describing the source"
                        );
                      this.tmplStr = a;
                    }
                    (this.path = d),
                      e
                        ? c.withPrettyErrors(
                            this.path,
                            this.env.dev,
                            this._compile.bind(this)
                          )
                        : (this.compiled = !1);
                  },
                  render: function (a, b, d) {
                    return (
                      "function" == typeof a
                        ? ((d = a), (a = {}))
                        : "function" == typeof b && ((d = b), (b = null)),
                      c.withPrettyErrors(
                        this.path,
                        this.env.dev,
                        function () {
                          try {
                            this.compile();
                          } catch (c) {
                            if (d) return d(c);
                            throw c;
                          }
                          var e = new l(a || {}, this.blocks),
                            f = null;
                          return (
                            this.rootRenderFunc(
                              this.env,
                              e,
                              b || new j(),
                              h,
                              d ||
                                function (a, b) {
                                  if (a) throw a;
                                  f = b;
                                }
                            ),
                            f
                          );
                        }.bind(this)
                      )
                    );
                  },
                  getExported: function (a, b, c) {
                    "function" == typeof a && ((c = a), (a = {})),
                      "function" == typeof b && ((c = b), (b = null));
                    try {
                      this.compile();
                    } catch (d) {
                      if (c) return c(d);
                      throw d;
                    }
                    var e = new l(a || {}, this.blocks);
                    this.rootRenderFunc(
                      this.env,
                      e,
                      b || new j(),
                      h,
                      function () {
                        c(null, e.getExported());
                      }
                    );
                  },
                  compile: function () {
                    this.compiled || this._compile();
                  },
                  _compile: function () {
                    var a;
                    if (this.tmplProps) a = this.tmplProps;
                    else {
                      var b = e.compile(
                          this.tmplStr,
                          this.env.asyncFilters,
                          this.env.extensionsList,
                          this.path,
                          this.env.opts
                        ),
                        c = new Function(b);
                      a = c();
                    }
                    (this.blocks = this._getBlocks(a)),
                      (this.rootRenderFunc = a.root),
                      (this.compiled = !0);
                  },
                  _getBlocks: function (a) {
                    var b = {};
                    for (var c in a)
                      "b_" === c.slice(0, 2) && (b[c.slice(2)] = a[c]);
                    return b;
                  },
                });
              a.environment = {
                Environment: k,
                Template: m,
              };
            })();
          var c,
            d = a.lib,
            e = a.environment,
            f = a.compiler,
            g = a.parser,
            h = a.lexer,
            i = a.runtime,
            j = a.loader,
            k = a.loaders,
            l = a.precompile;
          (c = {}),
            (c.Environment = e.Environment),
            (c.Template = e.Template),
            (c.Loader = j),
            (c.FileSystemLoader = k.FileSystemLoader),
            (c.WebLoader = k.WebLoader),
            (c.compiler = f),
            (c.parser = g),
            (c.lexer = h),
            (c.runtime = i);
          var m;
          (c.configure = function (a, b) {
            (b = b || {}), d.isObject(a) && ((b = a), (a = null));
            var c = "watch" in b ? !b.watch : !1,
              f = k.FileSystemLoader || k.WebLoader;
            return (
              (m = new e.Environment(new f(a, c), b)),
              b && b.express && m.express(b.express),
              m
            );
          }),
            (c.compile = function (a, b, d, e) {
              return m || c.configure(), new c.Template(a, b, d, e);
            }),
            (c.render = function (a, b, d) {
              return m || c.configure(), m.render(a, b, d);
            }),
            (c.renderString = function (a, b, d) {
              return m || c.configure(), m.renderString(a, b, d);
            }),
            l &&
              ((c.precompile = l.precompile),
              (c.precompileString = l.precompileString)),
            (c.require = function (b) {
              return a[b];
            }),
            "function" == typeof define && define.amd
              ? define(function () {
                  return c;
                })
              : ((window.nunjucks = c),
                "undefined" != typeof b && (b.exports = c));
        })();
      },
      {},
    ],
    10: [
      function (a, b, c) {
        b.exports = a("./lib/phpdate.js");
      },
      {
        "./lib/phpdate.js": 11,
      },
    ],
    11: [
      function (a, b, c) {
        "use strict";

        function d(a) {
          return w.tzInfo(a);
        }

        function e() {
          (this.cache = new Array()), (this.index = 0);
        }

        function f(a, b, c) {
          b = void 0 === b ? C || h() : h(b);
          var d;
          return (
            c &&
              (void 0 !== c.cacheResults && (z = c.cacheResults),
              void 0 !== c.cacheCurrentDate && (y = c.cacheCurrentDate),
              void 0 !== c.cacheTimezone && (x = c.cacheTimezone)),
            z && (d = A.get(a, b)) ? d : ((d = g(a, b)), z && A.set(a, b, d), d)
          );
        }

        function g(a, b) {
          var c = B[a];
          return c || (c = B[a] = i(a)), c(b);
        }

        function h(a) {
          return void 0 !== a
            ? "object" == typeof a
              ? a
              : new Date(a)
            : C
            ? C
            : y
            ? (setTimeout(function () {
                C = null;
              }, 1),
              (C = new Date()))
            : new Date();
        }

        function i(a) {
          var b,
            c,
            d,
            e = "var tz, ret =\n";
          for (b = 0; b < a.length; b++)
            (c = a[b]),
              (d = D[c]),
              d
                ? (e += d + " +\n")
                : ("\\" === c && ++b < a.length && (c = a[b]),
                  (e +=
                    c >= " " && "~" >= c && "\\" !== c
                      ? "'" + c + "' +"
                      : "( String.fromCharCode(" +
                        c.charCodeAt(0) +
                        ") ) +\n"));
          (e += '"";\n'), (e += "return ret;\n");
          var f = Function("now, fmt", e);
          return function (a) {
            return f(a, E);
          };
        }

        function j(a) {
          this.dt = a;
        }

        function k(a, b) {
          var c = h(b);
          return g(a, new j(c));
        }

        function l(a) {
          return a > 0 ? a : 7;
        }

        function m(a) {
          var b = q(a),
            c = 0 === b.week ? 6 : b.week - 1,
            d = b.year,
            e = b.year % 7,
            f = e - c;
          -3 > f ? (f += 7) : f > 3 && (f -= 7);
          var g = d - f;
          return f > d
            ? m(new Date(a.getTime() - 24 * (d + 1) * 3600 * 1e3))
            : d + (3 - c) >= b.ydays
            ? 1
            : 1 + Math.floor(g / 7);
        }

        function n(a) {
          var b = m(a);
          return b > 50 && 0 === a.getMonth()
            ? a.getFullYear() - 1
            : 1 === b && 0 !== a.getMonth()
            ? a.getFullYear() + 1
            : a.getFullYear();
        }

        function o(a) {
          var b = a.getHours() % 12;
          return 0 === b ? 12 : b;
        }

        function p() {
          (this.capacity = 100), (this.cache = {}), (this.count = 0);
        }

        function q(a) {
          for (
            var b = a.getFullYear(),
              c = a.getMonth(),
              d = b % 4 === 0 && (b % 100 !== 0 || b % 400 === 0),
              e = [31, 28 + d, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
              f = 0,
              g = 0;
            c > g;
            g++
          )
            f += e[g];
          return (
            (f += a.getDate() - 1),
            {
              leap: d,
              week: a.getDay(),
              month: a.getDate() - 1,
              year: f,
              mdays: e[a.getMonth()],
              ydays: 365 + d,
            }
          );
        }

        function r(a) {
          var b = a.getDate();
          return b % 100 > 10 && 20 > b % 100
            ? "th"
            : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][
                b % 10
              ];
        }

        function s(a) {
          return a >= 10 ? a : "0" + a;
        }

        function t(a) {
          return a >= 100 ? a : "0" + s(a);
        }

        function u(a) {
          return a >= 1e3
            ? "" + a
            : a >= 100
            ? "0" + a
            : a >= 10
            ? "00" + a
            : "000" + a;
        }

        function v(a) {
          return a >= 1e5
            ? "" + a
            : a >= 1e4
            ? "0" + a
            : a >= 1e3
            ? "00" + a
            : a >= 100
            ? "000" + a
            : a >= 10
            ? "0000" + a
            : "00000" + a;
        }
        (b.exports = f), (b.exports.gmdate = k);
        var w = new p();
        (e.prototype.cache = null),
          (e.prototype.index = 0),
          (e.prototype.set = function (a, b, c) {
            (this.cache[this.index] = {
              fmt: a,
              ts: b.getTime(),
              gmt: b.isGmt,
              res: c,
            }),
              (this.index = (this.index + 1) % 10);
          }),
          (e.prototype.get = function (a, b) {
            var c,
              d = b.getTime(),
              e = this.cache,
              f = this.cache.length;
            for (c = 0; f > c; c++) {
              var g = e[c];
              if (g.ts === d && g.fmt === a && g.gmt === b.isGmt) return g.res;
            }
            return "";
          });
        var x = !0,
          y = !0,
          z = !0,
          A = new e(),
          B = {},
          C = null,
          D = {
            d: "( fmt.pad2(now.getDate()) )",
            D:
              "( ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][now.getDay()] )",
            j: "( now.getDate() )",
            l:
              "( ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][now.getDay()] )",
            h: "( fmt.pad2(fmt.hour1to12(now)) )",
            N: "( fmt.iso8601day(now.getDay()) )",
            S: "( fmt.dayNumberOrdinalSuffix(now) )",
            w: "( now.getDay() )",
            z: "( fmt.weekdayOffset(now).year )",
            W: "( fmt.pad2(fmt.iso8601week(now)) )",
            F:
              "( ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()] )",
            m: "( fmt.pad2(now.getMonth() + 1) )",
            M:
              "( ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][now.getMonth()] )",
            n: "( now.getMonth() + 1 )",
            t: "( fmt.weekdayOffset(now).mdays )",
            L: "( fmt.weekdayOffset(now).leap ? 1 : 0 )",
            o: "( fmt.pad4(fmt.iso8601year(now)) )",
            Y: "( fmt.pad4(now.getFullYear()) )",
            y: "( fmt.pad2(now.getFullYear() % 100) )",
            a: '( now.getHours() < 12 ? "am" : "pm" )',
            A: '( now.getHours() < 12 ? "AM" : "PM" )',
            B:
              "( tz = fmt.tzInfo(now), fmt.pad3(Math.floor(1000 * ((now.getTime() + 3600 * 1000) % 86400000) / 86400000)) )",
            g: "( fmt.hour1to12(now) )",
            G: "( (now.getHours()) )",
            H: "( fmt.pad2(now.getHours()) )",
            i: "( fmt.pad2(now.getMinutes()) )",
            s: "( fmt.pad2(now.getSeconds()) )",
            u: "( fmt.pad6(now.getTime() % 1000 * 1000) )",
            e: "( tz = fmt.tzInfo(now), tz.tzname )",
            I: "( tz = fmt.tzInfo(now), tz.isDst )",
            O:
              "( tz = fmt.tzInfo(now), (!tz.offs ? '+0000' : tz.sign + fmt.pad2(tz.h) + fmt.pad2(tz.m)) )",
            P:
              "( tz = fmt.tzInfo(now), (!tz.offs ? '+00:00' : tz.sign + fmt.pad2(tz.h) + ':' + fmt.pad2(tz.m)) )",
            T: "( tz = fmt.tzInfo(now), tz.tz )",
            Z: "( tz = fmt.tzInfo(now), -tz.offs * 60 )",
            c: '( fmt._phpdate("Y-m-d\\\\TH:i:sP", now) )',
            r: '( fmt._phpdate("D, d M Y H:i:s O", now) )',
            U: "( Math.floor(now.getTime() / 1000) )",
          },
          E = {
            pad2: s,
            pad3: t,
            pad4: u,
            pad6: v,
            tzInfo: d,
            iso8601day: l,
            iso8601week: m,
            iso8601year: n,
            weekdayOffset: q,
            hour1to12: o,
            dayNumberOrdinalSuffix: r,
            _phpdate: g,
          };
        (j.prototype.isGmt = !0),
          (j.prototype.getTime = function () {
            return this.dt.getTime();
          }),
          (j.prototype.getFullYear = function () {
            return this.dt.getUTCFullYear();
          }),
          (j.prototype.getMonth = function () {
            return this.dt.getUTCMonth();
          }),
          (j.prototype.getDay = function () {
            return this.dt.getUTCDay();
          }),
          (j.prototype.getDate = function () {
            return this.dt.getUTCDate();
          }),
          (j.prototype.getHours = function () {
            return this.dt.getUTCHours();
          }),
          (j.prototype.getMinutes = function () {
            return this.dt.getUTCMinutes();
          }),
          (j.prototype.getSeconds = function () {
            return this.dt.getUTCSeconds();
          }),
          (p.prototype.cacheIndex = function (a) {
            return Math.floor(a / 1e3 / 60 / 15);
          }),
          (p.prototype.get = function (a) {
            return this.cache[this.cacheIndex(a)];
          }),
          (p.prototype.set = function (a, b) {
            this.count >= this.capacity &&
              ((this.cache = {}), (this.count = 0)),
              (this.cache[this.cacheIndex(a)] = b),
              (this.count += 1);
          }),
          (p.prototype.tzInfo = function (a) {
            if (a.isGmt)
              return {
                timestamp: 0,
                offs: 0,
                h: 0,
                m: 0,
                isDst: 0,
                tz: "GMT",
                sign: "+",
                tzname: "UTC",
              };
            var b = a.getTime(),
              c = this.get(b);
            if (c) return c;
            var d = a.getTimezoneOffset(),
              e = new Date(0).getTimezoneOffset(),
              f = e > 0,
              g = d !== e,
              h = Math.abs(d) % 60,
              i = (Math.abs(d) - h) / 60,
              j = {
                0: ["GMT", "GMT", "UTC"],
                180: ["WGT", "WGST", "Western_Greenland"],
                210: ["NST", "NDT", "Newfoundland"],
                240: ["AST", "ADT", "Atlantic"],
                300: ["EST", "EDT", "US/Eastern"],
                360: ["CST", "CDT", "US/Central"],
                420: ["MST", "MDT", "US/Mountain"],
                480: ["PST", "PDT", "US/Pacific"],
                540: ["AKST", "AKDT", "US/Alaska"],
                600: ["HAST", "HADT", "US/Hawaii"],
              },
              k = j[e] ? j[e][0 + g] : a.toString().slice(35, 38),
              l = j[e] ? j[e][2] : "???",
              m = {
                timestamp: 0,
                offs: d,
                h: i,
                m: h,
                isDst: g ? 1 : 0,
                tz: k,
                sign: f ? "-" : "+",
                tzname: l,
              };
            return x && this.set(b, m), m;
          });
      },
      {},
    ],
    12: [
      function (require, module, exports) {
        var timeago = function () {
          var o = {
              second: 1e3,
              minute: 6e4,
              hour: 36e5,
              day: 864e5,
              week: 6048e5,
              month: 2592e6,
              year: 31536e6,
            },
            obj = {};
          return (
            (obj.ago = function (a) {
              var b,
                c = Math.round,
                d = function (a, b) {
                  return b + " " + a + (b > 1 ? "s" : "") + " ago";
                },
                e = new Date().getTime() - new Date(a).getTime();
              for (i in o) {
                if (c(e) < o[i]) return d(b || "m", c(e / (o[b] || 1)));
                b = i;
              }
              return d(i, c(e / o[i]));
            }),
            (obj.today = function () {
              var a = new Date(),
                b = new Array(
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ),
                c = new Array(
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"
                );
              return (
                b[a.getDay()] +
                ", " +
                c[a.getMonth()] +
                " " +
                a.getDate() +
                ", " +
                a.getFullYear()
              );
            }),
            (obj.timefriendly = function (s) {
              var t = s.match(/(\d).([a-z]*?)s?$/);
              return t[1] * eval(o[t[2]]);
            }),
            (obj.mintoread = function (a, b, c) {
              var d = Math.round(a.split(" ").length / (c || 200));
              return (d || "< 1") + (b || " min to read");
            }),
            obj
          );
        };
        "undefined" != typeof module &&
          module.exports &&
          (module.exports = timeago);
      },
      {},
    ],
    13: [
      function (a, b, c) {
        !(function () {
          "use strict";

          function a(d) {
            if (!d)
              throw new Error("No options passed to Waypoint constructor");
            if (!d.element)
              throw new Error(
                "No element option passed to Waypoint constructor"
              );
            if (!d.handler)
              throw new Error(
                "No handler option passed to Waypoint constructor"
              );
            (this.key = "waypoint-" + b),
              (this.options = a.Adapter.extend({}, a.defaults, d)),
              (this.element = this.options.element),
              (this.adapter = new a.Adapter(this.element)),
              (this.callback = d.handler),
              (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
              (this.enabled = this.options.enabled),
              (this.triggerPoint = null),
              (this.group = a.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
              })),
              (this.context = a.Context.findOrCreateByElement(
                this.options.context
              )),
              a.offsetAliases[this.options.offset] &&
                (this.options.offset = a.offsetAliases[this.options.offset]),
              this.group.add(this),
              this.context.add(this),
              (c[this.key] = this),
              (b += 1);
          }
          var b = 0,
            c = {};
          (a.prototype.queueTrigger = function (a) {
            this.group.queueTrigger(this, a);
          }),
            (a.prototype.trigger = function (a) {
              this.enabled && this.callback && this.callback.apply(this, a);
            }),
            (a.prototype.destroy = function () {
              this.context.remove(this),
                this.group.remove(this),
                delete c[this.key];
            }),
            (a.prototype.disable = function () {
              return (this.enabled = !1), this;
            }),
            (a.prototype.enable = function () {
              return this.context.refresh(), (this.enabled = !0), this;
            }),
            (a.prototype.next = function () {
              return this.group.next(this);
            }),
            (a.prototype.previous = function () {
              return this.group.previous(this);
            }),
            (a.invokeAll = function (a) {
              var b = [];
              for (var d in c) b.push(c[d]);
              for (var e = 0, f = b.length; f > e; e++) b[e][a]();
            }),
            (a.destroyAll = function () {
              a.invokeAll("destroy");
            }),
            (a.disableAll = function () {
              a.invokeAll("disable");
            }),
            (a.enableAll = function () {
              a.invokeAll("enable");
            }),
            (a.refreshAll = function () {
              a.Context.refreshAll();
            }),
            (a.viewportHeight = function () {
              return (
                window.innerHeight || document.documentElement.clientHeight
              );
            }),
            (a.viewportWidth = function () {
              return document.documentElement.clientWidth;
            }),
            (a.adapters = []),
            (a.defaults = {
              context: window,
              continuous: !0,
              enabled: !0,
              group: "default",
              horizontal: !1,
              offset: 0,
            }),
            (a.offsetAliases = {
              "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
              },
              "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
              },
            }),
            (window.Waypoint = a);
        })(),
          (function () {
            "use strict";

            function a(a) {
              window.setTimeout(a, 1e3 / 60);
            }

            function b(a) {
              (this.element = a),
                (this.Adapter = e.Adapter),
                (this.adapter = new this.Adapter(a)),
                (this.key = "waypoint-context-" + c),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = {
                  x: this.adapter.scrollLeft(),
                  y: this.adapter.scrollTop(),
                }),
                (this.waypoints = {
                  vertical: {},
                  horizontal: {},
                }),
                (a.waypointContextKey = this.key),
                (d[a.waypointContextKey] = this),
                (c += 1),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
            }
            var c = 0,
              d = {},
              e = window.Waypoint,
              f = window.onload;
            (b.prototype.add = function (a) {
              var b = a.options.horizontal ? "horizontal" : "vertical";
              (this.waypoints[b][a.key] = a), this.refresh();
            }),
              (b.prototype.checkEmpty = function () {
                var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                  b = this.Adapter.isEmptyObject(this.waypoints.vertical);
                a && b && (this.adapter.off(".waypoints"), delete d[this.key]);
              }),
              (b.prototype.createThrottledResizeHandler = function () {
                function a() {
                  b.handleResize(), (b.didResize = !1);
                }
                var b = this;
                this.adapter.on("resize.waypoints", function () {
                  b.didResize ||
                    ((b.didResize = !0), e.requestAnimationFrame(a));
                });
              }),
              (b.prototype.createThrottledScrollHandler = function () {
                function a() {
                  b.handleScroll(), (b.didScroll = !1);
                }
                var b = this;
                this.adapter.on("scroll.waypoints", function () {
                  (!b.didScroll || e.isTouch) &&
                    ((b.didScroll = !0), e.requestAnimationFrame(a));
                });
              }),
              (b.prototype.handleResize = function () {
                e.Context.refreshAll();
              }),
              (b.prototype.handleScroll = function () {
                var a = {},
                  b = {
                    horizontal: {
                      newScroll: this.adapter.scrollLeft(),
                      oldScroll: this.oldScroll.x,
                      forward: "right",
                      backward: "left",
                    },
                    vertical: {
                      newScroll: this.adapter.scrollTop(),
                      oldScroll: this.oldScroll.y,
                      forward: "down",
                      backward: "up",
                    },
                  };
                for (var c in b) {
                  var d = b[c],
                    e = d.newScroll > d.oldScroll,
                    f = e ? d.forward : d.backward;
                  for (var g in this.waypoints[c]) {
                    var h = this.waypoints[c][g],
                      i = d.oldScroll < h.triggerPoint,
                      j = d.newScroll >= h.triggerPoint,
                      k = i && j,
                      l = !i && !j;
                    (k || l) && (h.queueTrigger(f), (a[h.group.id] = h.group));
                  }
                }
                for (var m in a) a[m].flushTriggers();
                this.oldScroll = {
                  x: b.horizontal.newScroll,
                  y: b.vertical.newScroll,
                };
              }),
              (b.prototype.innerHeight = function () {
                return this.element == this.element.window
                  ? e.viewportHeight()
                  : this.adapter.innerHeight();
              }),
              (b.prototype.remove = function (a) {
                delete this.waypoints[a.axis][a.key], this.checkEmpty();
              }),
              (b.prototype.innerWidth = function () {
                return this.element == this.element.window
                  ? e.viewportWidth()
                  : this.adapter.innerWidth();
              }),
              (b.prototype.destroy = function () {
                var a = [];
                for (var b in this.waypoints)
                  for (var c in this.waypoints[b]) a.push(this.waypoints[b][c]);
                for (var d = 0, e = a.length; e > d; d++) a[d].destroy();
              }),
              (b.prototype.refresh = function () {
                var a,
                  b = this.element == this.element.window,
                  c = this.adapter.offset(),
                  d = {};
                this.handleScroll(),
                  (a = {
                    horizontal: {
                      contextOffset: b ? 0 : c.left,
                      contextScroll: b ? 0 : this.oldScroll.x,
                      contextDimension: this.innerWidth(),
                      oldScroll: this.oldScroll.x,
                      forward: "right",
                      backward: "left",
                      offsetProp: "left",
                    },
                    vertical: {
                      contextOffset: b ? 0 : c.top,
                      contextScroll: b ? 0 : this.oldScroll.y,
                      contextDimension: this.innerHeight(),
                      oldScroll: this.oldScroll.y,
                      forward: "down",
                      backward: "up",
                      offsetProp: "top",
                    },
                  });
                for (var e in a) {
                  var f = a[e];
                  for (var g in this.waypoints[e]) {
                    var h,
                      i,
                      j,
                      k,
                      l,
                      m = this.waypoints[e][g],
                      n = m.options.offset,
                      o = m.triggerPoint,
                      p = 0,
                      q = null == o;
                    m.element !== m.element.window &&
                      (p = m.adapter.offset([f.offsetProp])),
                      "function" == typeof n
                        ? (n = n.apply(m))
                        : "string" == typeof n &&
                          ((n = parseFloat(n)),
                          m.options.offset.indexOf("%") > -1 &&
                            (n = Math.ceil((f.contextDimension * n) / 100))),
                      (h = f.contextScroll - f.contextOffset),
                      (m.triggerPoint = p + h - n),
                      (i = o < f.oldScroll),
                      (j = m.triggerPoint >= f.oldScroll),
                      (k = i && j),
                      (l = !i && !j),
                      !q && k
                        ? (m.queueTrigger(f.backward),
                          (d[m.group.id] = m.group))
                        : !q && l
                        ? (m.queueTrigger(f.forward), (d[m.group.id] = m.group))
                        : q &&
                          f.oldScroll >= m.triggerPoint &&
                          (m.queueTrigger(f.forward),
                          (d[m.group.id] = m.group));
                  }
                }
                for (var r in d) d[r].flushTriggers();
                return this;
              }),
              (b.findOrCreateByElement = function (a) {
                return b.findByElement(a) || new b(a);
              }),
              (b.refreshAll = function () {
                for (var a in d) d[a].refresh();
              }),
              (b.findByElement = function (a) {
                return d[a.waypointContextKey];
              }),
              (window.onload = function () {
                f && f(), b.refreshAll();
              }),
              (e.requestAnimationFrame = function (b) {
                var c =
                  window.requestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  a;
                c.call(window, b);
              }),
              (e.Context = b);
          })(),
          (function () {
            "use strict";

            function a(a, b) {
              return a.triggerPoint - b.triggerPoint;
            }

            function b(a, b) {
              return b.triggerPoint - a.triggerPoint;
            }

            function c(a) {
              (this.name = a.name),
                (this.axis = a.axis),
                (this.id = this.name + "-" + this.axis),
                (this.waypoints = []),
                this.clearTriggerQueues(),
                (d[this.axis][this.name] = this);
            }
            var d = {
                vertical: {},
                horizontal: {},
              },
              e = window.Waypoint;
            (c.prototype.add = function (a) {
              this.waypoints.push(a);
            }),
              (c.prototype.clearTriggerQueues = function () {
                this.triggerQueues = {
                  up: [],
                  down: [],
                  left: [],
                  right: [],
                };
              }),
              (c.prototype.flushTriggers = function () {
                for (var c in this.triggerQueues) {
                  var d = this.triggerQueues[c],
                    e = "up" === c || "left" === c;
                  d.sort(e ? b : a);
                  for (var f = 0, g = d.length; g > f; f += 1) {
                    var h = d[f];
                    (h.options.continuous || f === d.length - 1) &&
                      h.trigger([c]);
                  }
                }
                this.clearTriggerQueues();
              }),
              (c.prototype.next = function (b) {
                this.waypoints.sort(a);
                var c = e.Adapter.inArray(b, this.waypoints),
                  d = c === this.waypoints.length - 1;
                return d ? null : this.waypoints[c + 1];
              }),
              (c.prototype.previous = function (b) {
                this.waypoints.sort(a);
                var c = e.Adapter.inArray(b, this.waypoints);
                return c ? this.waypoints[c - 1] : null;
              }),
              (c.prototype.queueTrigger = function (a, b) {
                this.triggerQueues[b].push(a);
              }),
              (c.prototype.remove = function (a) {
                var b = e.Adapter.inArray(a, this.waypoints);
                b > -1 && this.waypoints.splice(b, 1);
              }),
              (c.prototype.first = function () {
                return this.waypoints[0];
              }),
              (c.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
              }),
              (c.findOrCreate = function (a) {
                return d[a.axis][a.name] || new c(a);
              }),
              (e.Group = c);
          })(),
          (function () {
            "use strict";

            function a(a) {
              this.$element = b(a);
            }
            var b = window.jQuery,
              c = window.Waypoint;
            b.each(
              [
                "innerHeight",
                "innerWidth",
                "off",
                "offset",
                "on",
                "outerHeight",
                "outerWidth",
                "scrollLeft",
                "scrollTop",
              ],
              function (b, c) {
                a.prototype[c] = function () {
                  var a = Array.prototype.slice.call(arguments);
                  return this.$element[c].apply(this.$element, a);
                };
              }
            ),
              b.each(["extend", "inArray", "isEmptyObject"], function (c, d) {
                a[d] = b[d];
              }),
              c.adapters.push({
                name: "jquery",
                Adapter: a,
              }),
              (c.Adapter = a);
          })(),
          (function () {
            "use strict";

            function a(a) {
              return function () {
                var c = [],
                  d = arguments[0];
                return (
                  a.isFunction(arguments[0]) &&
                    ((d = a.extend({}, arguments[1])),
                    (d.handler = arguments[0])),
                  this.each(function () {
                    var e = a.extend({}, d, {
                      element: this,
                    });
                    "string" == typeof e.context &&
                      (e.context = a(this).closest(e.context)[0]),
                      c.push(new b(e));
                  }),
                  c
                );
              };
            }
            var b = window.Waypoint;
            window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)),
              window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto));
          })();
      },
      {},
    ],
    14: [
      function (a, b, c) {
        !(function () {
          "use strict";

          function a() {}

          function b(a) {
            (this.options = c.Adapter.extend({}, b.defaults, a)),
              (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
              (this.waypoints = []),
              this.createWaypoints();
          }
          var c = window.Waypoint;
          (b.prototype.createWaypoints = function () {
            for (
              var a = {
                  vertical: [
                    {
                      down: "enter",
                      up: "exited",
                      offset: "100%",
                    },
                    {
                      down: "entered",
                      up: "exit",
                      offset: "bottom-in-view",
                    },
                    {
                      down: "exit",
                      up: "entered",
                      offset: 0,
                    },
                    {
                      down: "exited",
                      up: "enter",
                      offset: function () {
                        return -this.adapter.outerHeight();
                      },
                    },
                  ],
                  horizontal: [
                    {
                      right: "enter",
                      left: "exited",
                      offset: "100%",
                    },
                    {
                      right: "entered",
                      left: "exit",
                      offset: "right-in-view",
                    },
                    {
                      right: "exit",
                      left: "entered",
                      offset: 0,
                    },
                    {
                      right: "exited",
                      left: "enter",
                      offset: function () {
                        return -this.adapter.outerWidth();
                      },
                    },
                  ],
                },
                b = 0,
                c = a[this.axis].length;
              c > b;
              b++
            ) {
              var d = a[this.axis][b];
              this.createWaypoint(d);
            }
          }),
            (b.prototype.createWaypoint = function (a) {
              var b = this;
              this.waypoints.push(
                new c({
                  element: this.options.element,
                  handler: (function (a) {
                    return function (c) {
                      b.options[a[c]].call(this, c);
                    };
                  })(a),
                  offset: a.offset,
                  horizontal: this.options.horizontal,
                })
              );
            }),
            (b.prototype.destroy = function () {
              for (var a = 0, b = this.waypoints.length; b > a; a++)
                this.waypoints[a].destroy();
              this.waypoints = [];
            }),
            (b.defaults = {
              enter: a,
              entered: a,
              exit: a,
              exited: a,
            }),
            (c.Inview = b);
        })();
      },
      {},
    ],
    15: [
      function (a, b, c) {
        !(function (a) {
          var b = navigator.userAgent;
          a.HTMLPictureElement &&
            /ecko/.test(b) &&
            b.match(/rv\:(\d+)/) &&
            RegExp.$1 < 41 &&
            addEventListener(
              "resize",
              (function () {
                var b,
                  c = document.createElement("source"),
                  d = function (a) {
                    var b,
                      d,
                      e = a.parentNode;
                    "PICTURE" === e.nodeName.toUpperCase()
                      ? ((b = c.cloneNode()),
                        e.insertBefore(b, e.firstElementChild),
                        setTimeout(function () {
                          e.removeChild(b);
                        }))
                      : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) &&
                        ((a._pfLastSize = a.offsetWidth),
                        (d = a.sizes),
                        (a.sizes += ",100vw"),
                        setTimeout(function () {
                          a.sizes = d;
                        }));
                  },
                  e = function () {
                    var a,
                      b = document.querySelectorAll(
                        "picture > img, img[srcset][sizes]"
                      );
                    for (a = 0; a < b.length; a++) d(b[a]);
                  },
                  f = function () {
                    clearTimeout(b), (b = setTimeout(e, 99));
                  },
                  g = a.matchMedia && matchMedia("(orientation: landscape)"),
                  h = function () {
                    f(), g && g.addListener && g.addListener(f);
                  };
                return (
                  (c.srcset =
                    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                  /^[c|i]|d$/.test(document.readyState || "")
                    ? h()
                    : document.addEventListener("DOMContentLoaded", h),
                  f
                );
              })()
            );
        })(window),
          (function (a, c, d) {
            "use strict";

            function e(a) {
              return (
                " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
              );
            }

            function f(b, c) {
              var d = new a.Image();
              return (
                (d.onerror = function () {
                  (A[b] = !1), ba();
                }),
                (d.onload = function () {
                  (A[b] = 1 === d.width), ba();
                }),
                (d.src = c),
                "pending"
              );
            }

            function g() {
              (M = !1),
                (P = a.devicePixelRatio),
                (N = {}),
                (O = {}),
                (t.DPR = P || 1),
                (Q.width = Math.max(a.innerWidth || 0, z.clientWidth)),
                (Q.height = Math.max(a.innerHeight || 0, z.clientHeight)),
                (Q.vw = Q.width / 100),
                (Q.vh = Q.height / 100),
                (s = [Q.height, Q.width, P].join("-")),
                (Q.em = t.getEmValue()),
                (Q.rem = Q.em);
            }

            function h(a, b, c, d) {
              var e, f, g, h;
              return (
                "saveData" === B.algorithm
                  ? a > 2.7
                    ? (h = c + 1)
                    : ((f = b - c),
                      (e = Math.pow(a - 0.6, 1.5)),
                      (g = f * e),
                      d && (g += 0.1 * e),
                      (h = a + g))
                  : (h = c > 1 ? Math.sqrt(a * b) : a),
                h > c
              );
            }

            function i(a) {
              var b,
                c = t.getSet(a),
                d = !1;
              "pending" !== c &&
                ((d = s), c && ((b = t.setRes(c)), t.applySetCandidate(b, a))),
                (a[t.ns].evaled = d);
            }

            function j(a, b) {
              return a.res - b.res;
            }

            function k(a, b, c) {
              var d;
              return (
                !c && b && ((c = a[t.ns].sets), (c = c && c[c.length - 1])),
                (d = l(b, c)),
                d &&
                  ((b = t.makeUrl(b)),
                  (a[t.ns].curSrc = b),
                  (a[t.ns].curCan = d),
                  d.res || aa(d, d.set.sizes)),
                d
              );
            }

            function l(a, b) {
              var c, d, e;
              if (a && b)
                for (
                  e = t.parseSet(b), a = t.makeUrl(a), c = 0;
                  c < e.length;
                  c++
                )
                  if (a === t.makeUrl(e[c].url)) {
                    d = e[c];
                    break;
                  }
              return d;
            }

            function m(a, b) {
              var c,
                d,
                e,
                f,
                g = a.getElementsByTagName("source");
              for (c = 0, d = g.length; d > c; c++)
                (e = g[c]),
                  (e[t.ns] = !0),
                  (f = e.getAttribute("srcset")),
                  f &&
                    b.push({
                      srcset: f,
                      media: e.getAttribute("media"),
                      type: e.getAttribute("type"),
                      sizes: e.getAttribute("sizes"),
                    });
            }

            function n(a, b) {
              function c(b) {
                var c,
                  d = b.exec(a.substring(m));
                return d ? ((c = d[0]), (m += c.length), c) : void 0;
              }

              function d() {
                var a,
                  c,
                  d,
                  e,
                  f,
                  i,
                  j,
                  k,
                  l,
                  m = !1,
                  o = {};
                for (e = 0; e < h.length; e++)
                  (f = h[e]),
                    (i = f[f.length - 1]),
                    (j = f.substring(0, f.length - 1)),
                    (k = parseInt(j, 10)),
                    (l = parseFloat(j)),
                    X.test(j) && "w" === i
                      ? ((a || c) && (m = !0), 0 === k ? (m = !0) : (a = k))
                      : Y.test(j) && "x" === i
                      ? ((a || c || d) && (m = !0), 0 > l ? (m = !0) : (c = l))
                      : X.test(j) && "h" === i
                      ? ((d || c) && (m = !0), 0 === k ? (m = !0) : (d = k))
                      : (m = !0);
                m ||
                  ((o.url = g),
                  a && (o.w = a),
                  c && (o.d = c),
                  d && (o.h = d),
                  d || c || a || (o.d = 1),
                  1 === o.d && (b.has1x = !0),
                  (o.set = b),
                  n.push(o));
              }

              function f() {
                for (c(T), i = "", j = "in descriptor"; ; ) {
                  if (((k = a.charAt(m)), "in descriptor" === j))
                    if (e(k))
                      i && (h.push(i), (i = ""), (j = "after descriptor"));
                    else {
                      if ("," === k) return (m += 1), i && h.push(i), void d();
                      if ("(" === k) (i += k), (j = "in parens");
                      else {
                        if ("" === k) return i && h.push(i), void d();
                        i += k;
                      }
                    }
                  else if ("in parens" === j)
                    if (")" === k) (i += k), (j = "in descriptor");
                    else {
                      if ("" === k) return h.push(i), void d();
                      i += k;
                    }
                  else if ("after descriptor" === j)
                    if (e(k));
                    else {
                      if ("" === k) return void d();
                      (j = "in descriptor"), (m -= 1);
                    }
                  m += 1;
                }
              }
              for (var g, h, i, j, k, l = a.length, m = 0, n = []; ; ) {
                if ((c(U), m >= l)) return n;
                (g = c(V)),
                  (h = []),
                  "," === g.slice(-1) ? ((g = g.replace(W, "")), d()) : f();
              }
            }

            function o(a) {
              function b(a) {
                function b() {
                  f && (g.push(f), (f = ""));
                }

                function c() {
                  g[0] && (h.push(g), (g = []));
                }
                for (var d, f = "", g = [], h = [], i = 0, j = 0, k = !1; ; ) {
                  if (((d = a.charAt(j)), "" === d)) return b(), c(), h;
                  if (k) {
                    if ("*" === d && "/" === a[j + 1]) {
                      (k = !1), (j += 2), b();
                      continue;
                    }
                    j += 1;
                  } else {
                    if (e(d)) {
                      if ((a.charAt(j - 1) && e(a.charAt(j - 1))) || !f) {
                        j += 1;
                        continue;
                      }
                      if (0 === i) {
                        b(), (j += 1);
                        continue;
                      }
                      d = " ";
                    } else if ("(" === d) i += 1;
                    else if (")" === d) i -= 1;
                    else {
                      if ("," === d) {
                        b(), c(), (j += 1);
                        continue;
                      }
                      if ("/" === d && "*" === a.charAt(j + 1)) {
                        (k = !0), (j += 2);
                        continue;
                      }
                    }
                    (f += d), (j += 1);
                  }
                }
              }

              function c(a) {
                return k.test(a) && parseFloat(a) >= 0
                  ? !0
                  : l.test(a)
                  ? !0
                  : "0" === a || "-0" === a || "+0" === a
                  ? !0
                  : !1;
              }
              var d,
                f,
                g,
                h,
                i,
                j,
                k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
              for (f = b(a), g = f.length, d = 0; g > d; d++)
                if (((h = f[d]), (i = h[h.length - 1]), c(i))) {
                  if (((j = i), h.pop(), 0 === h.length)) return j;
                  if (((h = h.join(" ")), t.matchesMedia(h))) return j;
                }
              return "100vw";
            }
            c.createElement("picture");
            var p,
              q,
              r,
              s,
              t = {},
              u = function () {},
              v = c.createElement("img"),
              w = v.getAttribute,
              x = v.setAttribute,
              y = v.removeAttribute,
              z = c.documentElement,
              A = {},
              B = {
                algorithm: "",
              },
              C = "data-pfsrc",
              D = C + "set",
              E = navigator.userAgent,
              F =
                /rident/.test(E) ||
                (/ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35),
              G = "currentSrc",
              H = /\s+\+?\d+(e\d+)?w/,
              I = /(\([^)]+\))?\s*(.+)/,
              J = a.picturefillCFG,
              K =
                "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
              L = "font-size:100%!important;",
              M = !0,
              N = {},
              O = {},
              P = a.devicePixelRatio,
              Q = {
                px: 1,
                in: 96,
              },
              R = c.createElement("a"),
              S = !1,
              T = /^[ \t\n\r\u000c]+/,
              U = /^[, \t\n\r\u000c]+/,
              V = /^[^ \t\n\r\u000c]+/,
              W = /[,]+$/,
              X = /^\d+$/,
              Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
              Z = function (a, b, c, d) {
                a.addEventListener
                  ? a.addEventListener(b, c, d || !1)
                  : a.attachEvent && a.attachEvent("on" + b, c);
              },
              $ = function (a) {
                var b = {};
                return function (c) {
                  return c in b || (b[c] = a(c)), b[c];
                };
              },
              _ = (function () {
                var a = /^([\d\.]+)(em|vw|px)$/,
                  b = function () {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a; )
                      c = c.replace(a[b], a[++b]);
                    return c;
                  },
                  c = $(function (a) {
                    return (
                      "return " +
                      b(
                        (a || "").toLowerCase(),
                        /\band\b/g,
                        "&&",
                        /,/g,
                        "||",
                        /min-([a-z-\s]+):/g,
                        "e.$1>=",
                        /max-([a-z-\s]+):/g,
                        "e.$1<=",
                        /calc([^)]+)/g,
                        "($1)",
                        /(\d+[\.]*[\d]*)([a-z]+)/g,
                        "($1 * e.$2)",
                        /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                        ""
                      ) +
                      ";"
                    );
                  });
                return function (b, d) {
                  var e;
                  if (!(b in N))
                    if (((N[b] = !1), d && (e = b.match(a))))
                      N[b] = e[1] * Q[e[2]];
                    else
                      try {
                        N[b] = new Function("e", c(b))(Q);
                      } catch (f) {}
                  return N[b];
                };
              })(),
              aa = function (a, b) {
                return (
                  a.w
                    ? ((a.cWidth = t.calcListLength(b || "100vw")),
                      (a.res = a.w / a.cWidth))
                    : (a.res = a.d),
                  a
                );
              },
              ba = function (a) {
                var b,
                  d,
                  e,
                  f = a || {};
                if (
                  (f.elements &&
                    1 === f.elements.nodeType &&
                    ("IMG" === f.elements.nodeName.toUpperCase()
                      ? (f.elements = [f.elements])
                      : ((f.context = f.elements), (f.elements = null))),
                  (b =
                    f.elements ||
                    t.qsa(
                      f.context || c,
                      f.reevaluate || f.reselect ? t.sel : t.selShort
                    )),
                  (e = b.length))
                ) {
                  for (t.setupRun(f), S = !0, d = 0; e > d; d++)
                    t.fillImg(b[d], f);
                  t.teardownRun(f);
                }
              };
            (p =
              a.console && console.warn
                ? function (a) {
                    console.warn(a);
                  }
                : u),
              G in v || (G = "src"),
              (A["image/jpeg"] = !0),
              (A["image/gif"] = !0),
              (A["image/png"] = !0),
              (A["image/svg+xml"] = c.implementation.hasFeature(
                "http://wwwindow.w3.org/TR/SVG11/feature#Image",
                "1.1"
              )),
              (t.ns = ("pf" + new Date().getTime()).substr(0, 9)),
              (t.supSrcset = "srcset" in v),
              (t.supSizes = "sizes" in v),
              (t.supPicture = !!a.HTMLPictureElement),
              t.supSrcset &&
                t.supPicture &&
                !t.supSizes &&
                !(function (a) {
                  (v.srcset = "data:,a"),
                    (a.src = "data:,a"),
                    (t.supSrcset = v.complete === a.complete),
                    (t.supPicture = t.supSrcset && t.supPicture);
                })(c.createElement("img")),
              (t.selShort = "picture>img,img[srcset]"),
              (t.sel = t.selShort),
              (t.cfg = B),
              t.supSrcset && (t.sel += ",img[" + D + "]"),
              (t.DPR = P || 1),
              (t.u = Q),
              (t.types = A),
              (r = t.supSrcset && !t.supSizes),
              (t.setSize = u),
              (t.makeUrl = $(function (a) {
                return (R.href = a), R.href;
              })),
              (t.qsa = function (a, b) {
                return a.querySelectorAll(b);
              }),
              (t.matchesMedia = function () {
                return (
                  a.matchMedia &&
                  (matchMedia("(min-width: 0.1em)") || {}).matches
                    ? (t.matchesMedia = function (a) {
                        return !a || matchMedia(a).matches;
                      })
                    : (t.matchesMedia = t.mMQ),
                  t.matchesMedia.apply(this, arguments)
                );
              }),
              (t.mMQ = function (a) {
                return a ? _(a) : !0;
              }),
              (t.calcLength = function (a) {
                var b = _(a, !0) || !1;
                return 0 > b && (b = !1), b;
              }),
              (t.supportsType = function (a) {
                return a ? A[a] : !0;
              }),
              (t.parseSize = $(function (a) {
                var b = (a || "").match(I);
                return {
                  media: b && b[1],
                  length: b && b[2],
                };
              })),
              (t.parseSet = function (a) {
                return a.cands || (a.cands = n(a.srcset, a)), a.cands;
              }),
              (t.getEmValue = function () {
                var a;
                if (!q && (a = c.body)) {
                  var b = c.createElement("div"),
                    d = z.style.cssText,
                    e = a.style.cssText;
                  (b.style.cssText = K),
                    (z.style.cssText = L),
                    (a.style.cssText = L),
                    a.appendChild(b),
                    (q = b.offsetWidth),
                    a.removeChild(b),
                    (q = parseFloat(q, 10)),
                    (z.style.cssText = d),
                    (a.style.cssText = e);
                }
                return q || 16;
              }),
              (t.calcListLength = function (a) {
                if (!(a in O) || B.uT) {
                  var b = t.calcLength(o(a));
                  O[a] = b ? b : Q.width;
                }
                return O[a];
              }),
              (t.setRes = function (a) {
                var b;
                if (a) {
                  b = t.parseSet(a);
                  for (var c = 0, d = b.length; d > c; c++) aa(b[c], a.sizes);
                }
                return b;
              }),
              (t.setRes.res = aa),
              (t.applySetCandidate = function (a, b) {
                if (a.length) {
                  var c,
                    d,
                    e,
                    f,
                    g,
                    i,
                    l,
                    m,
                    n,
                    o,
                    p = b[t.ns],
                    q = t.DPR;
                  if (
                    ((i = p.curSrc || b[G]),
                    (l = p.curCan || k(b, i, a[0].set)),
                    l &&
                      l.set === a[0].set &&
                      ((o = F && !b.complete && l.res - 0.1 > q),
                      o || ((l.cached = !0), l && m && l.res >= q && (g = l))),
                    !g)
                  )
                    for (
                      a.sort(j), f = a.length, g = a[f - 1], d = 0;
                      f > d;
                      d++
                    )
                      if (((c = a[d]), c.res >= q)) {
                        (e = d - 1),
                          (g =
                            a[e] &&
                            (o || i !== t.makeUrl(c.url)) &&
                            h(a[e].res, c.res, q, a[e].cached)
                              ? a[e]
                              : c);
                        break;
                      }
                  g &&
                    ((n = t.makeUrl(g.url)),
                    (p.curSrc = n),
                    (p.curCan = g),
                    n !== i && t.setSrc(b, g),
                    t.setSize(b));
                }
              }),
              (t.setSrc = function (a, b) {
                var c;
                (a.src = b.url),
                  "image/svg+xml" === b.set.type &&
                    ((c = a.style.width),
                    (a.style.width = a.offsetWidth + 1 + "px"),
                    a.offsetWidth + 1 && (a.style.width = c));
              }),
              (t.getSet = function (a) {
                var b,
                  c,
                  d,
                  e = !1,
                  f = a[t.ns].sets;
                for (b = 0; b < f.length && !e; b++)
                  if (
                    ((c = f[b]),
                    c.srcset &&
                      t.matchesMedia(c.media) &&
                      (d = t.supportsType(c.type)))
                  ) {
                    "pending" === d && (c = d), (e = c);
                    break;
                  }
                return e;
              }),
              (t.parseSets = function (a, b, c) {
                var e,
                  f,
                  g,
                  h,
                  i = b && "PICTURE" === b.nodeName.toUpperCase(),
                  j = a[t.ns];
                (j.src === d || c.src) &&
                  ((j.src = w.call(a, "src")),
                  j.src ? x.call(a, C, j.src) : y.call(a, C)),
                  (j.srcset === d || c.srcset || !t.supSrcset || a.srcset) &&
                    ((e = w.call(a, "srcset")), (j.srcset = e), (h = !0)),
                  (j.sets = []),
                  i && ((j.pic = !0), m(b, j.sets)),
                  j.srcset
                    ? ((f = {
                        srcset: j.srcset,
                        sizes: w.call(a, "sizes"),
                      }),
                      j.sets.push(f),
                      (g = (r || j.src) && H.test(j.srcset || "")),
                      g ||
                        !j.src ||
                        l(j.src, f) ||
                        f.has1x ||
                        ((f.srcset += ", " + j.src),
                        f.cands.push({
                          url: j.src,
                          d: 1,
                          set: f,
                        })))
                    : j.src &&
                      j.sets.push({
                        srcset: j.src,
                        sizes: null,
                      }),
                  (j.curCan = null),
                  (j.curSrc = d),
                  (j.supported = !(i || (f && !t.supSrcset) || g)),
                  h &&
                    t.supSrcset &&
                    !j.supported &&
                    (e ? (x.call(a, D, e), (a.srcset = "")) : y.call(a, D)),
                  j.supported &&
                    !j.srcset &&
                    ((!j.src && a.src) || a.src !== t.makeUrl(j.src)) &&
                    (null === j.src
                      ? a.removeAttribute("src")
                      : (a.src = j.src)),
                  (j.parsed = !0);
              }),
              (t.fillImg = function (a, b) {
                var c,
                  d = b.reselect || b.reevaluate;
                a[t.ns] || (a[t.ns] = {}),
                  (c = a[t.ns]),
                  (d || c.evaled !== s) &&
                    ((!c.parsed || b.reevaluate) &&
                      t.parseSets(a, a.parentNode, b),
                    c.supported ? (c.evaled = s) : i(a));
              }),
              (t.setupRun = function () {
                (!S || M || P !== a.devicePixelRatio) && g();
              }),
              t.supPicture
                ? ((ba = u), (t.fillImg = u))
                : !(function () {
                    var b,
                      d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                      e = function () {
                        var a = c.readyState || "";
                        (f = setTimeout(e, "loading" === a ? 200 : 999)),
                          c.body &&
                            (t.fillImgs(),
                            (b = b || d.test(a)),
                            b && clearTimeout(f));
                      },
                      f = setTimeout(e, c.body ? 9 : 99),
                      g = function (a, b) {
                        var c,
                          d,
                          e = function () {
                            var f = new Date() - d;
                            b > f
                              ? (c = setTimeout(e, b - f))
                              : ((c = null), a());
                          };
                        return function () {
                          (d = new Date()), c || (c = setTimeout(e, b));
                        };
                      },
                      h = z.clientHeight,
                      i = function () {
                        (M =
                          Math.max(a.innerWidth || 0, z.clientWidth) !==
                            Q.width || z.clientHeight !== h),
                          (h = z.clientHeight),
                          M && t.fillImgs();
                      };
                    Z(a, "resize", g(i, 99)), Z(c, "readystatechange", e);
                  })(),
              (t.picturefill = ba),
              (t.fillImgs = ba),
              (t.teardownRun = u),
              (ba._ = t),
              (a.picturefillCFG = {
                pf: t,
                push: function (a) {
                  var b = a.shift();
                  "function" == typeof t[b]
                    ? t[b].apply(t, a)
                    : ((B[b] = a[0]),
                      S &&
                        t.fillImgs({
                          reselect: !0,
                        }));
                },
              });
            for (; J && J.length; ) a.picturefillCFG.push(J.shift());
            (a.picturefill = ba),
              "object" == typeof b && "object" == typeof b.exports
                ? (b.exports = ba)
                : "function" == typeof define &&
                  define.amd &&
                  define("picturefill", function () {
                    return ba;
                  }),
              t.supPicture ||
                (A["image/webp"] = f(
                  "image/webp",
                  "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="
                ));
          })(window, document);
      },
      {},
    ],
    16: [
      function (a, b, c) {
        a("./modules/header-dropdown"),
          a("./modules/header-waypoints"),
          a("./modules/infinite-scroll-jammie"),
          a("./modules/infinite-scroll-reading-list"),
          a("./modules/reading-list"),
          a("./modules/polls"),
          a("./modules/votingGalleries"),
          a("./modules/login-and-registration"),
          a("./modules/ads"),
          a("./modules/content-comment"),
          a("./modules/social-sharing"),
          a("./modules/enlarge-image"),
          a("./modules/gtm-datalayer"),
          a("./modules/error-pages"),
          a("./modules/module-video"),
          a("./modules/exact-target-signup"),
          a("./pages/home"),
          a("./pages/celebrities"),
          a("../../../global/src/js/picturefill");
      },
      {
        "../../../global/src/js/picturefill": 15,
        "./modules/ads": 17,
        "./modules/content-comment": 18,
        "./modules/enlarge-image": 19,
        "./modules/error-pages": 20,
        "./modules/exact-target-signup": 21,
        "./modules/gtm-datalayer": 22,
        "./modules/header-dropdown": 23,
        "./modules/header-waypoints": 24,
        "./modules/infinite-scroll-jammie": 25,
        "./modules/infinite-scroll-reading-list": 26,
        "./modules/login-and-registration": 27,
        "./modules/module-video": 28,
        "./modules/polls": 31,
        "./modules/reading-list": 32,
        "./modules/social-sharing": 34,
        "./modules/votingGalleries": 36,
        "./pages/celebrities": 37,
        "./pages/home": 38,
      },
    ],
    17: [
      function (a, b, c) {
        function d() {
          u("#right-rail-ad-slot-tall-0")
            .parents()
            .each(function () {
              (J += parseInt(u(this).css("padding-left"))),
                (J += parseInt(u(this).css("padding-right"))),
                (J += parseInt(u(this).css("margin-left"))),
                (J += parseInt(u(this).css("margin-right"))),
                (J += parseInt(u(this).css("border-left-width"))),
                (J += parseInt(u(this).css("border-right-width")));
            }),
            u("#top-ad-slot-0")
              .parents()
              .each(function () {
                (K += parseInt(u(this).css("padding-left"))),
                  (K += parseInt(u(this).css("padding-right"))),
                  (K += parseInt(u(this).css("margin-left"))),
                  (K += parseInt(u(this).css("margin-right"))),
                  (K += parseInt(u(this).css("border-left-width"))),
                  (K += parseInt(u(this).css("border-right-width")));
              }),
            D.hasClass("home-layout") && (H = !0),
            B.hasClass("channel") && (M = !0),
            googletag.cmd.push(function () {
              (w =
                H || M
                  ? googletag
                      .sizeMapping()
                      .addSize(
                        [970 + parseInt(J), 0],
                        [
                          [300, 1050],
                          [300, 600],
                          [300, 250],
                        ]
                      )
                      .addSize(
                        [728 + parseInt(J), 0],
                        [
                          [300, 1050],
                          [300, 600],
                          [300, 250],
                        ]
                      )
                      .addSize(
                        [300 + parseInt(J), 0],
                        [
                          [320, 150],
                          [320, 100],
                          [320, 50],
                          [300, 250],
                          [300, 150],
                          [300, 100],
                          [300, 50],
                        ]
                      )
                      .build()
                  : googletag
                      .sizeMapping()
                      .addSize(
                        [970 + parseInt(J), 0],
                        [
                          [300, 1050],
                          [300, 600],
                          [300, 250],
                        ]
                      )
                      .addSize(
                        [728 + parseInt(J), 0],
                        [
                          [300, 1050],
                          [300, 600],
                          [300, 250],
                        ]
                      )
                      .addSize([0, 0], [])
                      .build()),
                (x = googletag
                  .sizeMapping()
                  .addSize(
                    [300 + parseInt(K), 0],
                    [
                      [320, 150],
                      [320, 100],
                      [320, 50],
                      [300, 250],
                      [300, 150],
                      [300, 100],
                      [300, 50],
                    ]
                  )
                  .addSize([728 + parseInt(K), 0], [[728, 90]])
                  .addSize(
                    [970 + parseInt(K), 0],
                    [
                      [970, 250],
                      [970, 125],
                      [970, 90],
                      [970, 66],
                      [728, 90],
                    ]
                  )
                  .build());
            }),
            (y = parseInt(z().test) || null),
            B.hasClass("hub") ||
            B.hasClass("home") ||
            B.hasClass("channel") ||
            B.hasClass("celebrity-tags")
              ? ((L = !0),
                1 == H && (l(0), (G = !0)),
                e(B.find(".ad-container")))
              : (k(0), (G = !0));
        }

        function e(a) {
          var b, c, d;
          if (
            (a.each(function () {
              u(this).data("ad-rendered") ||
                ((b = u(this).data("ad-param")),
                (c = u(this).data("type")),
                (d = u(this).data("pos")),
                t(b, c, d));
            }),
            L && !H)
          ) {
            var e = o(0);
            j(e);
          }
        }

        function f(a) {
          var b, c;
          return (
            googletag.cmd.push(function () {
              (b =
                H || M
                  ? googletag
                      .sizeMapping()
                      .addSize(
                        [970, 0],
                        [
                          [300, 1050],
                          [300, 600],
                          [300, 250],
                        ]
                      )
                      .addSize(
                        [728, 0],
                        [
                          [300, 1050],
                          [300, 600],
                          [300, 250],
                        ]
                      )
                      .addSize(
                        [300, 0],
                        [
                          [320, 150],
                          [320, 100],
                          [320, 50],
                          [300, 250],
                          [300, 150],
                          [300, 100],
                          [300, 50],
                        ]
                      )
                      .build()
                  : googletag
                      .sizeMapping()
                      .addSize(
                        [970, 0],
                        [
                          [300, 1050],
                          [300, 600],
                          [300, 250],
                        ]
                      )
                      .addSize(
                        [728, 0],
                        [
                          [300, 1050],
                          [300, 600],
                          [300, 250],
                        ]
                      )
                      .addSize([0, 0], [])
                      .build()),
                (c = googletag
                  .sizeMapping()
                  .addSize(
                    [300, 0],
                    [
                      [320, 150],
                      [320, 100],
                      [320, 50],
                      [300, 150],
                      [300, 100],
                      [300, 50],
                    ]
                  )
                  .addSize([728, 0], [[728, 90]])
                  .addSize(
                    [970, 0],
                    [
                      [970, 250],
                      [970, 125],
                      [970, 90],
                      [970, 66],
                      [728, 90],
                    ]
                  )
                  .build());
            }),
            1 == a
              ? "undefined" == typeof x
                ? c
                : x
              : 2 == a
              ? "undefined" == typeof w
                ? b
                : w
              : null
          );
        }

        function g(a) {
          return 1 == a
            ? "top-ad-slot"
            : 2 == a
            ? "right-rail-ad-slot-tall"
            : 3 == a
            ? "one-by-one"
            : 4 == a
            ? "two-by-two"
            : 5 == a
            ? "four-by-four"
            : 6 == a
            ? "oop"
            : void 0;
        }

        function h(a, b, c) {
          a.data("pos", b), a.prop("title", "ad_" + b), a.data("ad-param", c);
        }

        function i(a, b, c, d) {
          var e;
          return (
            "undefined" == typeof d
              ? ((e = 0 == a ? a : c > a ? c : a),
                u(".scroll-item")
                  .last()
                  .find("#" + b + "-0")
                  .attr("id", b + "-" + e))
              : (e = d),
            e
          );
        }

        function j(a) {
          googletag.cmd.push(function () {
            googletag.pubads().refresh(a);
          });
        }

        function k() {
          var a,
            b,
            c = [];
          (b = O(0, "top-ad-slot", 0, F, f(1))), c.push(b);
          var d = u("#top-ad-slot-0").first();
          h(d, F++, 0);
          var e = O(0, "right-rail-ad-slot-tall", 0, F, f(2));
          c.push(e);
          var g = u("[id^=right-rail-ad-slot-tall-]").first();
          h(g, F++, 0), (a = o(0)), j(c.concat(a));
        }

        function l(a) {
          var b,
            c,
            d = [],
            e = O(a, "top-ad-slot", i(a, "top-ad-slot", F), F, f(1));
          d.push(e),
            (c = H
              ? u("[id^=top-ad-slot-]").first()
              : u("[id^=top-ad-slot-]").last()),
            h(c, F++, a);
          var g = O(
            a,
            "right-rail-ad-slot-tall",
            i(a, "right-rail-ad-slot-tall", F),
            F,
            f(2)
          );
          if ((d.push(g), H)) {
            var j = u("[id^=right-rail-ad-slot-tall-]").first();
            q(g);
          } else var j = u("[id^=right-rail-ad-slot-tall-]").last();
          h(j, F++, a), (b = o(a)), m(c, d.concat(b));
        }

        function m(a, b) {
          a.length &&
            a.each(function () {
              new Waypoint.Inview({
                element: this,
                enter: A(function (a) {
                  n(u(this.element), b, a);
                }, 1e3),
              });
            });
        }

        function n(a, b, c) {
          "down" == c
            ? a.data("ad-rendered") || (j(b), a.data("ad-rendered", !0))
            : "up" == c &&
              (a.data("ad-rendered") || (j(b), a.data("ad-rendered", !0)));
        }

        function o(a) {
          var b = [];
          b.push(O(a, "one-by-one", i(a, "one-by-one", F), F++, null)),
            b.push(O(a, "two-by-two", i(a, "two-by-two", F), F++, null)),
            b.push(O(a, "four-by-four", i(a, "four-by-four", F), F++, null));
          var c = O(a, "oop", i(a, "oop", F), F++, null);
          return (
            p(c),
            b.push(c),
            b.push(
              O(a, "sponsor-ad-slot", i(a, "sponsor-ad-slot", F), F++, null)
            ),
            b
          );
        }

        function p(a) {
          googletag.cmd.push(function () {
            googletag
              .pubads()
              .addEventListener("slotRenderEnded", function (b) {
                if (!b.isEmpty && b.slot == a)
                  if (L) B.addClass("skin");
                  else {
                    var c = u(".main");
                    c.addClass("skin-story");
                  }
              });
          });
        }

        function q(a) {
          var b = u(".mosaic.home-layout");
          googletag.cmd.push(function () {
            googletag
              .pubads()
              .addEventListener("slotRenderEnded", function (c) {
                if (c.slot == a) {
                  var d = c.size[1];
                  600 != d || b.hasClass("layout-b")
                    ? 250 == d &&
                      b.hasClass("layout-b") &&
                      b.removeClass("layout-b")
                    : b.addClass("layout-b");
                }
              });
          });
        }

        function r(a, b, c, d, e, f) {
          "down" == d
            ? a.data("ad-rendered") ||
              (h(a, c, b), j([e]), a.data("ad-rendered", !0))
            : "up" == d &&
              (a.data("ad-rendered") ||
                (h(a, c, b), j([e]), a.data("ad-rendered", !0)));
        }

        function s(a, b, c, d, e) {
          a.length &&
            a.each(function () {
              new Waypoint.Inview({
                element: this,
                enter: A(function (a) {
                  r(u(this.element), b, c, a, d, e);
                }, 1e3),
                exit: function (a) {
                  this.destroy();
                },
              });
            });
        }

        function t(a, b, c) {
          var d = F,
            e = f(b),
            h = g(b),
            j = i(a, h, d, c);
          F++;
          var k = O(a, h, j, d, e),
            l = u("#" + h + "-" + j).first();
          s(l, a, d, k, c);
        }
        window.jQuery = a("jquery");
        var u = jQuery;
        a("../../../../../../node_modules/waypoints/lib/jquery.waypoints"),
          a("../../../../../../node_modules/waypoints/lib/shortcuts/inview");
        var v,
          w,
          x,
          y,
          z = a("../../../../../../lib/helper/getUrlVars"),
          A = a("../../../../../../lib/helper/debounce"),
          B = (u(".scroll-item"), u("body")),
          C = u("#main"),
          D = (u(".header"), u(".mosaic")),
          E =
            (u(".scroll-jammie-control-continue"),
            u(".article-body-content-footer"),
            u("#module-reading-list"),
            1),
          F = 0,
          G = !1,
          H = !1,
          I = !1,
          J = 0,
          K = 0,
          L = !1,
          M = !1,
          N = function () {
            v = setInterval(function () {
              window.googletag && googletag.apiReady && (d(), clearInterval(v));
            }, 200);
          },
          O = function (a, b, c, d, e) {
            var f,
              g,
              h = "",
              i = "";
            return (
              "top-ad-slot" == b
                ? (h = "/leaderboard")
                : "right-rail-ad-slot-tall" == b && (h = "/rail"),
              y &&
                !I &&
                ((I = !0),
                (i = "test" + y),
                Array.isArray(adParams[a].kw)
                  ? adParams[a].kw.push(i)
                  : (adParams[a].kw = adParams[a].kw + ", " + i)),
              googletag.cmd.push(function () {
                "oop" == b
                  ? (f = googletag.defineOutOfPageSlot(
                      adParams[a].path,
                      b + "-" + c
                    ))
                  : ((g =
                      "undefined" != typeof adParams[a].ads[b]
                        ? adParams[a].ads[b].sizes
                        : []),
                    (f = googletag.defineSlot(
                      adParams[a].path + h,
                      g,
                      b + "-" + c
                    ))),
                  f.setTargeting("pos", ["all", d]),
                  e && f.defineSizeMapping(e),
                  "" != adParams[a].kw && f.setTargeting("kw", adParams[a].kw),
                  "" != adParams[a].topic &&
                    f.setTargeting("topic", adParams[a].topic),
                  "" != adParams[a].celeb &&
                    f.setTargeting("celeb", adParams[a].celeb),
                  "" != adParams[a].author &&
                    f.setTargeting("author", adParams[a].author),
                  "" != adParams[a].con &&
                    f.setTargeting("con", adParams[a].con),
                  f.addService(googletag.pubads()),
                  googletag.display(b + "-" + c);
              }),
              f
            );
          };
        u(document).ready(function () {
          N();
        }),
          C.on("displayNewAds", function () {
            l(E++);
          }),
          C.on("displayGalleryAds", ".scroll-item", function () {
            var a = ++F,
              b = u(this).find(".ad-container").first().data("ad-param");
            u(this)
              .find("#slide-top-ad-slot-0")
              .last()
              .attr("id", "top-ad-slot-" + a),
              u(this)
                .find("#slide-right-rail-ad-slot-tall-0")
                .last()
                .attr("id", "right-rail-ad-slot-tall-" + a),
              t(b, 1, a),
              t(b, 2, a);
          }),
          Waypoint.refreshAll();
      },
      {
        "../../../../../../lib/helper/debounce": 4,
        "../../../../../../lib/helper/getUrlVars": 5,
        "../../../../../../node_modules/waypoints/lib/jquery.waypoints": 13,
        "../../../../../../node_modules/waypoints/lib/shortcuts/inview": 14,
        jquery: 8,
      },
    ],
    18: [
      function (a, b, c) {
        var d = a("jquery"),
          e = a("../../../../../../lib/helper/throttle");
        d(document).ready(function () {
          var a,
            b = d("#main"),
            c = d("#comment"),
            f = b.find(".article-main, .gallery-main").length > 0,
            g = d("body"),
            h = d(document),
            i = d("#module-reading-list"),
            j = d(".header").eq(0);
          window.addEventListener(
            "touchstart",
            function l() {
              (a = /iPhone|iPad/i.test(window.navigator.userAgent)),
                window.removeEventListener("touchstart", l);
            },
            !1
          );
          var k = function () {
            g.removeClass("noscroll"),
              c.removeClass("active"),
              a &&
                (c.removeAttr("style").removeClass("keyboard-open"),
                j.removeAttr("style"),
                i.removeAttr("style"));
          };
          f &&
            b.on(
              "click",
              ".article-main .social-comments, .gallery-main .social-comments",
              function (b) {
                if (
                  (b.preventDefault(),
                  g.addClass("noscroll"),
                  c.addClass("active"),
                  a)
                ) {
                  var e = j.height(),
                    f = d(window).scrollTop(),
                    h = d(window).width(),
                    k = i.position().top < 0;
                  c.find(".module-comments").scrollTop(0),
                    j.css({
                      position: "absolute",
                      top: f,
                      width: h,
                      overflow: "hidden",
                    }),
                    k ||
                      i.css({
                        position: "absolute",
                        top: f + e,
                        width: h,
                        overflow: "hidden",
                      }),
                    c.css({
                      position: "absolute",
                      top: f,
                    });
                }
              }
            ),
            c.find("a.close").click(function (a) {
              a.preventDefault(), k();
            }),
            g.on("contentLoaded", function (a, b) {
              "undefined" != typeof DISQUS &&
                DISQUS.reset({
                  reload: !0,
                  config: function () {
                    (this.page.identifier = window.location.href),
                      (this.page.url = window.location.href);
                  },
                });
            }),
            (document.ontouchmove = function (b) {
              var d = a && g.is(".noscroll"),
                e = a && c.is(".keyboard-open");
              (d || e) && b.preventDefault();
            }),
            (window.onscroll = e(function (b) {
              var e = a && g.is(".noscroll"),
                f = 0 === h.scrollTop(),
                l = c.is(".keyboard-open");
              if (
                (e && f && k(),
                e &&
                  !l &&
                  c.addClass("keyboard-open").css({
                    height: c.height() + 200,
                  }),
                e && l)
              ) {
                var m = d(window).scrollTop(),
                  n = parseInt(c.css("top")),
                  o = n > m - 30,
                  p =
                    m + d(window).height() >
                    n + j.height() + i.height() + c.height();
                (o || p) && (k(), g.focus());
              }
            }, 500));
        });
      },
      {
        "../../../../../../lib/helper/throttle": 6,
        jquery: 8,
      },
    ],
    19: [
      function (a, b, c) {
        var d = a("jquery");
        d(document).ready(function () {
          d("body").on("click", ".enlarge-button", function (a) {
            var b = d(this).parents(".gallery-body-content-slide"),
              c = b.children(".enlarged-image");
            d("body").addClass("locked"),
              c
                .css(
                  "transition",
                  "opacity 0.35s ease-in-out, visibility 0.35s ease-in-out"
                )
                .addClass("enlarged");
            var e = c.find("img").data("src");
            c.find("img").attr("src", e);
          }),
            d("body").on("click", ".enlarged-image-container-close", function (
              a
            ) {
              var b = d(this).parents(".gallery-body-content-slide"),
                c = b.children(".enlarged-image");
              d("body").removeClass("locked"),
                c.css("transition", "none").removeClass("enlarged");
            });
        });
      },
      {
        jquery: 8,
      },
    ],
    20: [
      function (a, b, c) {
        var d = a("jquery");
        d(function () {
          if (d("body").hasClass("error")) {
            var a = "background-" + Math.floor(10 * Math.random() + 1);
            d(".container").addClass(a);
          }
        });
      },
      {
        jquery: 8,
      },
    ],
    21: [
      function (a, b, c) {
        window.jQuery = a("jquery");
        var d = a("jquery");
        d(function () {
          d("body.exact-target-signup").length &&
            (window.onsubmit = function () {
              var a =
                d("#dobMonth").val() +
                "/" +
                d("#dobDay").val() +
                "/" +
                d("#dobYear").val();
              isNaN(Date.parse(a)) || d("#birthdate").val(a);
            });
        });
      },
      {
        jquery: 8,
      },
    ],
    22: [
      function (a, b, c) {
        var d = a("jquery");
        d(document).ready(function () {
          if ("undefined" != typeof dataLayer) {
            var a = window.location.origin,
              b = function (a) {
                if (a) {
                  var b = a.map(function (a) {
                    return a.name;
                  });
                  return b;
                }
                return [];
              },
              c = {
                event: void 0,
                sections: void 0,
                content: {
                  continuousScrollPosition: void 0,
                  authors: void 0,
                  tags: {
                    ad: void 0,
                    edit: void 0,
                    celebrity: void 0,
                  },
                },
                ga: {
                  category: "Article Page",
                  action: "Tap In Body Link",
                },
              },
              e = function (a) {
                if ("Object" !== a.constructor.name)
                  return {
                    empty: !0,
                  };
                var b = {};
                return (
                  (b.channel = a.channel || []),
                  (b.slug = a.slug || ""),
                  (b.publishDate = a.publish_date || ""),
                  (b.title = a.title || ""),
                  (b.contentType = a.contentType || ""),
                  (b.continuousScrollPosition = a.continuousScrollPosition),
                  a.tags
                    ? ((b.contributors = a.tags.contributor || [""]),
                      (b.advertorialTags = a.tags.hidden || [""]),
                      (b.editorialTags = a.tags.editorial || [""]),
                      (b.celebrities = a.tags.celebrity || [""]))
                    : ((b.contributors = [""]),
                      (b.advertorialTags = [""]),
                      (b.editorialTags = [""]),
                      (b.celebrities = [""])),
                  b
                );
              };
            d("body").on("contentLoaded", function (d, f) {
              var g = new e(f);
              if (!g.empty) {
                var h = {
                  event: "pageview",
                  sections: b(g.channel),
                  canonical: {
                    absolute: a + g.slug,
                    relative: g.slug,
                  },
                  content: {
                    authors: b(g.contributors),
                    datePublished: g.publishDate,
                    title: g.title,
                    type: g.contentType,
                    tags: {
                      ad: b(g.advertorialTags),
                      edit: b(g.editorialTags),
                      celebrity: b(g.celebrities),
                    },
                    disqus: {
                      id: a + g.slug,
                    },
                    continuousScrollPosition: g.continuousScrollPosition,
                  },
                };
                (h.property = dataLayerOnLoad.property),
                  (h.environment = dataLayerOnLoad.environment),
                  dataLayer.push(c),
                  Object.keys(f).length
                    ? dataLayer.push(h)
                    : ((dataLayerOnLoad.event = "pageview"),
                      dataLayer.push(dataLayerOnLoad));
              }
            }),
              d("body").on("galleryPhotoLoaded", function (a, b, d) {
                var e = JSON.parse(d);
                (e.canonical.absolute = window.location.href),
                  (e.canonical.relative = window.location.pathname),
                  (e.event = "pageview"),
                  (e.content.continuousScrollPosition = void 0),
                  (e.content.disqus.id = e.content.disqus.id.split("?")[0]),
                  dataLayer.push(c),
                  dataLayer.push(e);
              }),
              d("body").on("click", ".article-body-content a", function (a) {
                var b = d(this);
                if (
                  !b.hasClass("tracked-offpage") ||
                  !b.hasClass("trackked-onpage")
                ) {
                  var e = b.attr("href"),
                    f = {
                      event: "inBodyLink",
                      canonical: {
                        absolute: e,
                      },
                      ga: {
                        category: "Article Page",
                        action: "Tap In Body Link",
                      },
                    };
                  dataLayer.push(c), dataLayer.push(f);
                }
              });
          }
        });
      },
      {
        jquery: 8,
      },
    ],
    23: [
      function (a, b, c) {
        var d = a("jquery"),
          e = d("body"),
          f = d(".header-nav-primary-more");
        d(document).ready(function () {
          d(window).scrollTop() < 50 && e.removeClass("header-no-transition"),
            d("html").hasClass("no-touch") &&
              (f.on("mouseenter", function (a) {
                d(this).hasClass("hover-active") ||
                  d(this).addClass("hover-active");
              }),
              f.on("mouseleave", function (a) {
                d(this).removeClass("hover-active");
              })),
            f.find("> div").on("click", function (a) {
              d(this).parent().hasClass("hover-active")
                ? d(this).parent().removeClass("hover-active")
                : d(this).parent().addClass("hover-active"),
                a.preventDefault();
            });
        });
      },
      {
        jquery: 8,
      },
    ],
    24: [
      function (a, b, c) {
        (window.jQuery = a("jquery")),
          a("../../../../../../node_modules/waypoints/lib/jquery.waypoints.js");
        var d = jQuery,
          e = d("body");
        new Waypoint({
          element: e,
          handler: function (a) {
            "down" == a
              ? e.addClass("header-active")
              : e.removeClass("header-active header-no-transition");
          },
          offset: "-50",
        });
      },
      {
        "../../../../../../node_modules/waypoints/lib/jquery.waypoints.js": 13,
        jquery: 8,
      },
    ],
    25: [
      function (a, b, c) {
        (window.jQuery = a("jquery")),
          a("../../../../../../node_modules/waypoints/lib/jquery.waypoints"),
          a("./transitionEnd.js");
        var d,
          e = (a("./scroll-percentage"), a("./nunjucks")),
          f = jQuery,
          g = f("body"),
          h = f(window),
          i = f("#main"),
          j = f(".scroll-jammie"),
          k = f("#module-reading-list"),
          l = window.location.protocol + "//" + window.location.host,
          m = "?json=true&page=",
          n =
            '<a href="#" class="scroll-jammie-control-open scroll-jammie-trigger tracked-onpage" data-track-category="Gallery Page" data-track-action="Open Gallery">Open Gallery</a>',
          o =
            '<a href="#" class="scroll-jammie-control-continue scroll-jammie-trigger tracked-onpage" data-track-category="Gallery Page" data-track-action="Continue Gallery">Continue Gallery</a>',
          p = document.referrer;
        f(document).ready(function () {
          j &&
            (j.parent().trigger("initializeJammie"),
            (d = "" == p || p.indexOf("usmagazine") > -1 ? !0 : !1),
            0 == d &&
              f(".scroll-item")
                .first()
                .on(
                  "controlOpenReady",
                  ".scroll-jammie-control-open",
                  function () {
                    s(f(this));
                  }
                )),
            u();
        }),
          i.on("initializeJammie", ".scroll-item", function (a) {
            t(f(a.target)), q(a.target);
          }),
          i.on("click", ".scroll-jammie-trigger", function (a) {
            a.preventDefault(), s(f(this)), u();
          }),
          k.on("click", ".module-reading-list-item", function (a) {
            (f(this).parent().hasClass("module-reading-list-gallery") ||
              f(this).hasClass("module-reading-list-item-active")) &&
              a.preventDefault();
          }),
          f(document).on(
            "click",
            ".module-reading-list-item-toggle",
            function () {
              s(f(this));
            }
          );
        var q = function (a) {
            var b = f(a),
              c = b.data("page"),
              d = b.data("slug"),
              e = l + d + m + c;
            f.get(e).done(function (a) {
              (successData = JSON.parse(a)),
                b.children(".scroll-jammie").last().data("fetch", !0),
                successData.items.length && (b.data("data", successData), r(b)),
                c++,
                b.data("page", c);
            });
          },
          r = function (a) {
            var b = e.render(
              "content/gallery/partials/gallery-slides.html.twig",
              a.data("data")
            );
            (j = a.children(".scroll-jammie").last()),
              ($scrollJammieControl = a
                .children(".scroll-jammie")
                .eq(a.data("page") - 1)
                .find(".scroll-jammie-control")),
              $scrollJammieControl.last().hasClass("scroll-jammie-control-open")
                ? ($scrollJammieControl.last().after(n),
                  $scrollJammieControl.remove())
                : $scrollJammieControl
                    .last()
                    .hasClass("scroll-jammie-control-continue") &&
                  ($scrollJammieControl.after(o),
                  $scrollJammieControl.remove()),
              j.after(b),
              j.next().addClass("scroll-jammie-hidden"),
              t(a),
              0 == d &&
                f(".scroll-item")
                  .find(".scroll-jammie-control-open")
                  .trigger("controlOpenReady");
          },
          s = function (a) {
            var b,
              c = f(".scroll-item-active");
            b = a.hasClass("scroll-jammie-control-open")
              ? a.closest(".scroll-item")
              : c;
            var d = b.children(".scroll-jammie-hidden"),
              e = b.data("id");
            a.hasClass("scroll-jammie-control-open") &&
              a.closest(".scroll-jammie").data("active", !0),
              a.hasClass("scroll-jammie-control-open") &&
                !b.hasClass("scroll-item-active") &&
                (($newReadingListItem = k.children('[data-id="' + e + '"]')),
                $newReadingListItem
                  .prev()
                  .removeClass("module-reading-list-item-active")
                  .addClass("module-reading-list-item-hidden"),
                $newReadingListItem.addClass("module-reading-list-item-active"),
                b.addClass("scroll-item-active")),
              a.hasClass("module-reading-list-item-toggle") &&
              c.hasClass("scroll-jammie-active")
                ? k.toggleClass("module-reading-list-gallery")
                : (d.prev().find(".scroll-jammie-control-continue").remove(),
                  b
                    .addClass("scroll-jammie-active")
                    .trigger("displayGalleryAds"),
                  b.find(".scroll-jammie-control-open").remove(),
                  d.removeClass("scroll-jammie-hidden").data("active", !0),
                  Modernizr.csstransitions && d.length
                    ? transitionEnd(d).bind(function () {
                        Waypoint.refreshAll();
                      })
                    : Waypoint.refreshAll(),
                  k.addClass("module-reading-list-gallery"));
          },
          t = function (a) {
            var b = a.find(".scroll-jammie").last(),
              c = b.find(".gallery-body-content-slide");
            b.waypoint({
              handler: function (b) {
                var c = f(this.element);
                "down" == b &&
                  1 == c.data("active") &&
                  0 == c.data("fetch") &&
                  q(a),
                  "down" == b &&
                    c.data("active") &&
                    (f(".scroll-bar-active").removeClass("scroll-bar-active"),
                    c.addClass("scroll-bar-active"));
              },
              offset: function () {
                return parseInt(g.css("padding-top"));
              },
            }),
              c.waypoint({
                handler: function (a) {
                  var b = f(this.element),
                    c = b.closest(".scroll-jammie"),
                    d = f(
                      ".module-reading-list-item-active .module-reading-list-item-counter-current"
                    ),
                    e =
                      b.data("title") +
                      " | " +
                      b.closest(".scroll-item").find("h1").text();
                  if ("down" == a) {
                    if (
                      1 == c.data("active") &&
                      !(
                        (b.hasClass("single-slide") && 1 == c.index()) ||
                        b.hasClass("intro-slide")
                      )
                    ) {
                      var h = c.parent().data("counter");
                      h++, d.text(h), c.parent().data("counter", h);
                    }
                    1 == c.data("active") &&
                      (history.replaceState(null, e, b.data("slug")),
                      g.trigger("galleryPhotoLoaded", [
                        a,
                        c.parent().data().data.gtmDataLayer,
                      ]),
                      (document.title = e));
                  } else if (
                    1 == c.data("active") &&
                    !(
                      (b.hasClass("single-slide") && 1 == c.index()) ||
                      b.hasClass("intro-slide")
                    )
                  ) {
                    var h = c.parent().data("counter");
                    h--, d.text(h), c.parent().data("counter", h);
                  }
                },
                offset: function () {
                  return parseInt(g.css("padding-top"));
                },
              }),
              c.waypoint({
                handler: function (a) {
                  var b = f(this.element),
                    c = b.closest(".scroll-jammie"),
                    d =
                      b.data("title") +
                      " | " +
                      b.closest(".scroll-item").find("h1").text();
                  "up" == a &&
                    1 == c.data("active") &&
                    (history.replaceState(null, d, b.data("slug")),
                    g.trigger("galleryPhotoLoaded", [
                      a,
                      c.parent().data().data.gtmDataLayer,
                    ]),
                    (document.title = d));
                },
                offset: function () {
                  return -(
                    this.element.clientHeight - parseInt(g.css("padding-top"))
                  );
                },
              }),
              b.waypoint({
                handler: function (a) {
                  var b = f(this.element),
                    c = b.find(".right"),
                    d = b.width();
                  if (
                    "down" == a &&
                    !c.hasClass("no-stick") &&
                    !c.data("stuck") &&
                    b.data("active") &&
                    !c.hasClass("stuck")
                  ) {
                    var e = (h.width() - d) / 2,
                      g =
                        "undefined" == typeof c.find("iframe")[0]
                          ? 300
                          : c.find("iframe")[0].width;
                    e += (c.width() - g) / 2;
                    var i = c.offset().top - f(window).scrollTop();
                    c.addClass("stuck"),
                      c.data("stuck", !0),
                      c.data("collapsed", !1),
                      c.css("top", i),
                      c.css("right", e),
                      c.css("position", "");
                  }
                  "up" == a &&
                    !c.hasClass("no-stick") &&
                    c.data("stuck") &&
                    c.hasClass("stuck") &&
                    (c.removeClass("stuck"),
                    c.css("position", "relative"),
                    c.data("stuck", !1),
                    c.css("top", "auto"),
                    c.css("right", "auto"));
                },
                offset: function () {
                  return parseInt(g.css("padding-top")) + 10;
                },
              }),
              b.waypoint({
                handler: function (a) {
                  var b = f(this.element).find(".right"),
                    c = f(this.element).width();
                  if (
                    ("down" == a &&
                      !b.hasClass("no-stick") &&
                      b.data("stuck") &&
                      b.hasClass("stuck") &&
                      (b.removeClass("stuck"),
                      b.data("stuck", !1),
                      b.css("position", "relative"),
                      b.css("right", "auto"),
                      b.css(
                        "top",
                        f(this.element).height() -
                          f(this.element)
                            .find(".ad-container.banner")
                            .height() -
                          b.height() -
                          f(this.element)
                            .find(".scroll-jammie-control-continue")
                            .height() -
                          f(this.element)
                            .find(".gallery-body-content-slide")
                            .height()
                      )),
                    !(
                      "up" != a ||
                      b.hasClass("no-stick") ||
                      b.data("stuck") ||
                      b.hasClass("stuck") ||
                      b.data("collapsed")
                    ))
                  ) {
                    var d = (h.width() - c) / 2,
                      e =
                        "undefined" == typeof b.find("iframe")[0]
                          ? 300
                          : b.find("iframe")[0].width;
                    d += (b.width() - e) / 2;
                    var g = b.offset().top - f(window).scrollTop();
                    b.addClass("stuck"),
                      b.css("top", g),
                      b.css("right", d),
                      b.data("stuck", !0),
                      b.css("position", "");
                  }
                },
                offset: function () {
                  var a = f(this.element).find(".right"),
                    b = f(this.element).find(".ad-container.banner").height(),
                    c = f(this.element)
                      .find(".scroll-jammie-control-continue")
                      .height(),
                    d = f(this.element)
                      .find(".gallery-body-content-slide")
                      .height();
                  return -(this.element.clientHeight - b - c - d - a.height());
                },
              }),
              Waypoint.refreshAll();
          },
          u = function () {
            var a = f(
              'iframe:not(.tagged):not(.instagram-media):not([src*="spotify"])'
            );
            a.each(function () {
              var a = f(this).attr("width") / f(this).attr("height");
              f(this).parent().addClass("embed-container"),
                f(this).addClass("tagged"),
                1.6 > a && f(this).parent().addClass("tall");
            });
          };
      },
      {
        "../../../../../../node_modules/waypoints/lib/jquery.waypoints": 13,
        "./nunjucks": 30,
        "./scroll-percentage": 33,
        "./transitionEnd.js": 35,
        jquery: 8,
      },
    ],
    26: [
      function (a, b, c) {
        (window.jQuery = a("jquery")),
          a("../../../../../../node_modules/waypoints/lib/jquery.waypoints");
        var d,
          e,
          f,
          g,
          h = a("./scroll-percentage"),
          j = a("./nunjucks"),
          k = jQuery,
          l = k("body"),
          m = k("#main"),
          n = k(window),
          o = k("#module-reading-list"),
          p = o.find(".progress-box-bar"),
          q = k(".scroll-item-active"),
          r = [],
          s = 0,
          t = 0,
          u = 0,
          v = 1,
          w = a("../../../../../../lib/helper/debounce"),
          x = a("../../../../../../lib/helper/throttle");
        k("document").ready(function () {
          if (o.length) {
            H(), r.push(q.data("id"));
            var a = 6,
              b = a;
            (a = r.length + a),
              k
                .get("/topStories?count=" + a, function () {})
                .done(function (a) {
                  if (a) {
                    d = JSON.parse(a);
                    for (var c = {}, h = 0; h < d.items.length; h++)
                      c[d.items[h].contentData.id] = h;
                    for (var i in r) {
                      var j = r[i];
                      d.items.splice(c[j], 1);
                    }
                    var m = d.components;
                    for (var n in m)
                      "interstitialMicroFeed" == m[n].type
                        ? (e = m[n].data.microFeeds)
                        : "customMicrofeed" == m[n].type &&
                          ((f = m[n]), (f.rendered = !1));
                    g = d.modules;
                    var o = [];
                    for (var p in d.items)
                      d.items.hasOwnProperty(p) && o.push(d.items[p]);
                    o.length > b && (o = o.slice(0, b - 1));
                    var q = 0;
                    k.each(o, function (a, b) {
                      B(b),
                        q++,
                        q == o.length &&
                          l
                            .addClass("module-reading-list-loaded")
                            .trigger("moduleReadingListLoaded")
                            .unbind("moduleReadingListLoaded");
                    });
                  }
                });
          }
        }),
          n.on("load", function () {
            var a = k(".scroll-bar-active");
            h(a, p);
          }),
          n.on("resize", function () {
            var a = k(".scroll-bar-active");
            w(h(a, p), 500);
          });
        var y = function () {
          var a = n.scrollTop();
          a > u
            ? l.hasClass("module-reading-list-collapsed") ||
              l.addClass("module-reading-list-collapsed")
            : l.hasClass("module-reading-list-collapsed") &&
              l.removeClass("module-reading-list-collapsed"),
            (u = a);
        };
        n.on("scroll", function () {
          var a = k(".scroll-bar-active");
          x(h(a, p), 200);
        }),
          n.on("scroll", x(y, 500)),
          l.on("moduleReadingListLoaded", function () {
            C();
          });
        var z = function (a) {
            var b = k(a),
              c = b.data("id"),
              e = d.items
                .filter(function (a) {
                  return a && a.contentData && a.contentData.id == c;
                })
                .pop(),
              f = o.find('a[data-id="' + c + '"]'),
              g = {},
              h = !1;
            if (k.isEmptyObject(e)) {
              var i = f.attr("href"),
                j = f.find(".reading-list-item-title").text();
              (h = window.location.pathname !== i),
                history.replaceState(null, j, i),
                (document.title = j);
            } else
              (g = e.contentData),
                (h = window.location.pathname !== g.slug),
                history.replaceState(null, g.title, g.slug),
                (document.title = g.title);
            Object.keys(g).length &&
              (g.continuousScrollPosition = b.data("position")),
              h && l.trigger("contentLoaded", [g]),
              k(".scroll-item").removeClass("scroll-item-active"),
              k(".scroll-bar-active").removeClass("scroll-bar-active"),
              o
                .find(".module-reading-list-item-active")
                .removeClass("module-reading-list-item-active"),
              f.addClass("module-reading-list-item-active"),
              b.addClass("scroll-item-active scroll-bar-active"),
              b.hasClass("scroll-jammie-active") &&
                o.addClass("module-reading-list-gallery");
          },
          A = function (a, b) {
            var c = k(a),
              d = c.data("id"),
              e = o.find('a[data-id="' + d + '"]');
            "down" == b
              ? e.addClass("module-reading-list-item-hidden")
              : e.removeClass("module-reading-list-item-hidden"),
              "down" == b
                ? o.removeClass("module-reading-list-gallery")
                : "up" == b &&
                  (c.hasClass("scroll-jammie-active")
                    ? o.addClass("module-reading-list-gallery")
                    : o.removeClass("module-reading-list-gallery"));
          },
          B = function (a) {
            if (!k.isEmptyObject(a)) {
              var b = j.render(
                "partials/_module-reading-list-item.html.twig",
                a
              );
              o.append(b),
                o
                  .children()
                  .last()
                  .data("rendered", !1)
                  .removeClass("module-reading-list-item-active");
            }
          },
          C = function () {
            var a = o.find(".module-reading-list-item-active").next();
            if (0 == a.data("rendered")) {
              a.data("rendered", "true");
              var b =
                k("#module-reading-list .module-reading-list-item").index(a) -
                1;
              D(d.items[b]);
            }
          },
          D = function (a) {
            f && !f.rendered ? G(f) : F(e), E(g, s);
            var b;
            if (
              ((b =
                "gallery" == a.contentData.contentType
                  ? j.render(
                      "content/gallery/partials/gallery-main.html.twig",
                      a
                    )
                  : j.render("article-main.html.twig", a)),
              m.append(b).trigger("displayNewAds"),
              s % 2 == 1 &&
                m.find(".article-main:last").addClass("color-alternate"),
              v++,
              m
                .children(".scroll-item")
                .last()
                .removeClass("scroll-item-active scroll-bar-active")
                .data("position", v),
              "gallery" == a.contentData.contentType)
            ) {
              var c = m.children().last();
              c.trigger("initializeJammie").unbind("initializeJammie"),
                c.find(".scroll-jammie").data("active", !0);
            }
            H(), s++;
          },
          E = function (a, b) {
            if (a[b]) {
              var c = j.render("partials/" + a[b].templateName + ".html.twig", {
                component: a[b],
              });
              m.append(c);
            }
          },
          F = function (a) {
            var b = {
              component: {
                data: {
                  microFeeds: [],
                },
              },
            };
            for (i = 0; i < 2; i++)
              t == e.length && (t = 0),
                b.component.data.microFeeds.push(a[t]),
                t++;
            if ("string" == typeof b.component.data.microFeeds[0].template)
              var c = j.render(
                "partials/" +
                  b.component.data.microFeeds[0].template +
                  ".html.twig",
                b
              );
            else
              var c = j.render("partials/_interstitial-microfeed.html.twig", b);
            m.append(c);
          },
          G = function (a) {
            var b = j.render(
              "partials/_interstitial-microfeed-component.html.twig",
              a
            );
            m.append(b), (f.rendered = !0);
          },
          H = function () {
            var a = k(".scroll-item").last(),
              b = a.find(".article-head");
            a.waypoint({
              handler: function (a) {
                k(this.element);
                l.hasClass("module-reading-list-loaded") &&
                  "down" == a &&
                  (z(this.element), p.removeClass("freeze"));
              },
              offset: function () {
                return parseInt(l.css("padding-top"));
              },
            }),
              a.waypoint({
                handler: function (a) {
                  "down" == a &&
                    l.hasClass("module-reading-list-loaded") &&
                    C();
                },
                offset: 10,
              }),
              a.waypoint({
                handler: function (a) {
                  k(this.element);
                  l.hasClass("module-reading-list-loaded") &&
                    "up" == a &&
                    z(this.element),
                    l.hasClass("module-reading-list-loaded") &&
                      A(this.element, a),
                    "down" == a
                      ? p.addClass("freeze").css("width", 0)
                      : p.removeClass("freeze");
                },
                offset: function () {
                  return -(
                    this.element.clientHeight - parseInt(l.css("padding-top"))
                  );
                },
              }),
              a.waypoint({
                handler: function (a) {
                  var b = k(this.element),
                    c = b.width(),
                    d = b.find(".right");
                  if ("down" == a) {
                    if (!b.find(".container-medium").hasClass("gallery-body")) {
                      var e = (n.width() - c) / 2,
                        f =
                          "undefined" == typeof d.find("iframe")[0]
                            ? 300
                            : d.find("iframe")[0].width;
                      e += (d.width() - f) / 2;
                      var g = d.offset().top - k(window).scrollTop();
                      d.addClass("stuck"),
                        d.css("position", ""),
                        d.css("top", g),
                        d.css("right", e);
                    }
                  } else
                    "up" == a &&
                      (b.find(".container-medium").hasClass("gallery-body") ||
                        (d.removeClass("stuck"),
                        d.css("position", "relative"),
                        d.css("right", "auto"),
                        d.css("top", "auto")));
                },
                offset: function () {
                  return -(
                    k(this.element).find(".ad-slot.banner").outerHeight() +
                    k(this.element).find(".article-head").outerHeight() -
                    k(".header").height() -
                    k(".module-reading-list").height()
                  );
                },
              }),
              a.waypoint({
                handler: function (c) {
                  var d = k(this.element),
                    e = d.width(),
                    f = parseInt(
                      d.find(".article-body-inner").css("padding-bottom")
                    ),
                    g = d.find(".module-related").outerHeight(),
                    h = d.find(".article-body-content-footer").outerHeight(),
                    i = d.find(".right"),
                    j = (d.find(".ad-slot"), i.height()),
                    l = (n.width() - e) / 2,
                    m =
                      "undefined" == typeof i.find("iframe")[0]
                        ? 300
                        : i.find("iframe")[0].width;
                  if (((l += (i.width() - m) / 2), "down" == c))
                    d.find(".container-medium").hasClass("gallery-body") ||
                      (i.removeClass("stuck"),
                      i.css(
                        "right",
                        (i.width() - m) / 2 + parseInt(a.css("padding-right"))
                      ),
                      i.css("position", "absolute"),
                      i.css(
                        "top",
                        k(this.element).height() -
                          b.height() -
                          j -
                          k(this.element)
                            .find(".ad-container.banner")
                            .height() -
                          g -
                          h -
                          f
                      ));
                  else if (
                    "up" == c &&
                    !d.find(".container-medium").hasClass("gallery-body")
                  ) {
                    var o = i.offset().top - k(window).scrollTop();
                    i.addClass("stuck"),
                      i.css("position", ""),
                      i.css("top", o),
                      i.css("right", l);
                  }
                },
                offset: function () {
                  var a = k(this.element);
                  return -(
                    a.find(".article-body-inner").height() -
                    a.find(".module-related").height() -
                    a.find(".article-head").height() -
                    a.find(".article-body-content-footer").height() -
                    a.find(".module-social-sharing").height() -
                    parseInt(a.css("padding-bottom"))
                  );
                },
              }),
              Waypoint.refreshAll();
          };
      },
      {
        "../../../../../../lib/helper/debounce": 4,
        "../../../../../../lib/helper/throttle": 6,
        "../../../../../../node_modules/waypoints/lib/jquery.waypoints": 13,
        "./nunjucks": 30,
        "./scroll-percentage": 33,
        jquery: 8,
      },
    ],
    27: [
      function (a, b, c) {
        var d = a("jquery");
        d(document).ready(function () {
          var a,
            b,
            c = d("#login").find("form"),
            e = d("#signup").find("form"),
            f = d(".lightbox-content-container"),
            g = function () {
              window.location.href =
                window.location.pathname +
                "?ts=" +
                new Date().getTime() +
                "-" +
                Math.floor(100 * Math.random() + 1);
            };
          c.find('button[name="login"]').click(function (e) {
            e.preventDefault(),
              (b = {
                headers: {
                  Accept: "application/json",
                },
                method: "POST",
                data: {
                  username: c.find('input[name="username"]').val(),
                  password: c.find('input[name="password"]').val(),
                },
              }),
              d.ajax(c.attr("action"), b).done(function (b) {
                (a = JSON.parse(b)),
                  a.error
                    ? ((a.error +=
                        '<br />Please try again or <a href="#membership">sign up</a>'),
                      c
                        .addClass("error")
                        .find("input")
                        .addClass("error")
                        .end()
                        .find(".login-message")
                        .empty()
                        .html(a.error))
                    : g();
              });
          }),
            e.find('button[name="signup"]').click(function (c) {
              c.preventDefault(),
                (b = {
                  headers: {
                    Accept: "application/json",
                  },
                  method: "POST",
                  data: {
                    display_name: e.find('input[name="display_name"]').val(),
                    username: e.find('input[name="username"]').val(),
                    password: e.find('input[name="password"]').val(),
                    confirmPassword: e
                      .find('input[name="confirmPassword"]')
                      .val(),
                  },
                }),
                d.ajax(e.attr("action"), b).done(function (b) {
                  var c,
                    d,
                    f = e.find(".signup-message"),
                    h = "";
                  if (((a = JSON.parse(b)), a.error)) {
                    e.addClass("error"),
                      f.empty(),
                      f.html(
                        "Please correct all the errors before resubmitting the form."
                      ),
                      a.error.custom &&
                        (h += "<li>" + a.error.custom.join(" ") + "</li>");
                    for (key in a.error.widgets)
                      (c = e.find('input[name="' + key + '"]')),
                        (d = a.error.widgets[key]),
                        d.length > 0
                          ? (c.addClass("error"),
                            (h += "<li>" + d.join(" ") + "</li>"))
                          : c.removeClass("error");
                    f.append("<ul>" + h + "</ul>");
                  } else g();
                });
            }),
            f.click(function (a) {
              if (a.target === this) {
                var b = d(this).find("a.close"),
                  c = b ? b.attr("href") : "#";
                location.href = c;
              }
            });
        });
      },
      {
        jquery: 8,
      },
    ],
    28: [
      function (a, b, c) {
        var d = a("jquery"),
          e = a("./nunjucks");
        d("document").ready(function () {
          var a = d("body");
          a.on(
            "click",
            ".module-video-link, .module-video-player-cover, .module-single-content-cover",
            function (a) {
              var b,
                c,
                f = d(this),
                g = f.data("videoText") || "",
                h = f.data("video") || "",
                i = f.data("cover") || "";
              if (h) {
                if (
                  f.hasClass("module-video-link") ||
                  f.hasClass("module-video-player-cover")
                ) {
                  (b = {
                    contentData: {
                      short_title: g,
                      data: {
                        media: i,
                      },
                      autoPlay: !0,
                    },
                  }),
                    (c = e.render("partials/_video-content.html.twig", b));
                  var j = f
                    .closest(".module-video")
                    .find(".module-video-player");
                  j.children(".module-video-player-content").remove(),
                    j.append(c);
                } else
                  f.hasClass("module-single-content-cover") &&
                    (f.find(".icon-play").fadeOut(),
                    (b = {
                      videoData: {
                        short_title: g,
                        data: {
                          media: i,
                        },
                        autoPlay: !0,
                      },
                    }),
                    (c = e.render("partials/_brightcove.html.twig", b)),
                    f.data("video", ""),
                    f.append(c));
                a.preventDefault();
              }
            }
          );
        });
      },
      {
        "./nunjucks": 30,
        jquery: 8,
      },
    ],
    29: [
      function (a, b, c) {
        !(function () {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
            "partials/_ad.html.twig"
          ] = (function () {
            function a(a, b, c, d, e) {
              var f = null,
                g = null,
                h = "";
              try {
                (h +=
                  "\n<script>\n    adParams.push({\n        'path': '/4236/"),
                  (h += d.suppressValue(
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "globals"),
                      "adSite",
                      a.opts.autoescape
                    ),
                    a.opts.autoescape
                  )),
                  (h += "/"),
                  (h += d.suppressValue(
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "component"),
                      "pageType",
                      a.opts.autoescape
                    ),
                    a.opts.autoescape
                  )),
                  a
                    .getFilter("empty")
                    .call(
                      b,
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "channel",
                        a.opts.autoescape
                      )
                    ) ||
                    ((h += "/"),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "channel",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    ))),
                  a
                    .getFilter("empty")
                    .call(
                      b,
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "content",
                        a.opts.autoescape
                      )
                    ) ||
                    ((h += "/"),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "content",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    ))),
                  (h +=
                    "',\n        'ads': {\n            'top-ad-slot': {\n                'sizes': [[970, 250], [970, 90], [728, 90],[320, 150], [320, 100], [320, 50], [300, 150], [300, 100], [300, 50]]\n            },\n            'right-rail-ad-slot-tall':{\n                'sizes': [[300, 600], [320, 250]]\n            },\n            'one-by-one':{\n                'sizes': [[1,1]]\n            },\n            'two-by-two':{\n                'sizes': [[2,2]]\n            },\n            'four-by-four':{\n                'sizes': [[4,4]]\n            },\n            'sponsor-ad-slot':{\n              'sizes':[[140,40], [40,40]]\n            },\n            'oop':{\n                'sizes': []\n            }\n        },\n        'kw': "),
                  (h += d.suppressValue(
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "component"),
                      "tags",
                      a.opts.autoescape
                    ),
                    a.opts.autoescape
                  )),
                  (h += ",\n        'topic': "),
                  (h += d.suppressValue(
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "component"),
                      "topics",
                      a.opts.autoescape
                    ),
                    a.opts.autoescape
                  )),
                  (h += ",\n        'celeb' : "),
                  (h += d.suppressValue(
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "component"),
                      "celebs",
                      a.opts.autoescape
                    ),
                    a.opts.autoescape
                  )),
                  (h += ",\n        'author': "),
                  (h += d.suppressValue(
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "component"),
                      "authors",
                      a.opts.autoescape
                    ),
                    a.opts.autoescape
                  )),
                  (h += ",\n        'con' : "),
                  (h += d.suppressValue(
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "component"),
                      "cons",
                      a.opts.autoescape
                    ),
                    a.opts.autoescape
                  )),
                  (h += ",\n\n    });\n    </script>\n"),
                  e(null, h);
              } catch (i) {
                e(d.handleError(i, f, g));
              }
            }
            return {
              root: a,
            };
          })();
        })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_brightcove.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  if (
                    d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "videoData"),
                          "media",
                          a.opts.autoescape
                        ),
                        "lead",
                        a.opts.autoescape
                      ),
                      "id",
                      a.opts.autoescape
                    )
                  ) {
                    h += "\n    ";
                    var i;
                    (i = d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "videoData"),
                          "media",
                          a.opts.autoescape
                        ),
                        "lead",
                        a.opts.autoescape
                      ),
                      "id",
                      a.opts.autoescape
                    )),
                      c.set("videoId", i, !0),
                      c.parent ||
                        (b.setVariable("videoId", i), b.addExport("videoId")),
                      (h += "\n");
                  } else if (
                    d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "videoData"),
                            "data",
                            a.opts.autoescape
                          ),
                          "media",
                          a.opts.autoescape
                        ),
                        "lead",
                        a.opts.autoescape
                      ),
                      "id",
                      a.opts.autoescape
                    )
                  ) {
                    h += "\n    ";
                    var j;
                    (j = d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "videoData"),
                            "data",
                            a.opts.autoescape
                          ),
                          "media",
                          a.opts.autoescape
                        ),
                        "lead",
                        a.opts.autoescape
                      ),
                      "id",
                      a.opts.autoescape
                    )),
                      c.set("videoId", j, !0),
                      c.parent ||
                        (b.setVariable("videoId", j), b.addExport("videoId")),
                      (h += "\n");
                  } else if (d.contextOrFrameLookup(b, c, "brightcoveId")) {
                    h += "\n    ";
                    var k;
                    (k = d.contextOrFrameLookup(b, c, "brightcoveId")),
                      c.set("videoId", k, !0),
                      c.parent ||
                        (b.setVariable("videoId", k), b.addExport("videoId")),
                      (h += "\n");
                  } else {
                    h += "\n    ";
                    var l;
                    (l = ""),
                      c.set("videoId", l, !0),
                      c.parent ||
                        (b.setVariable("videoId", l), b.addExport("videoId")),
                      (h += "\n");
                  }
                  if (
                    ((h += "\n\n"),
                    1 == d.contextOrFrameLookup(b, c, "videoAuto"))
                  ) {
                    h += "\n    ";
                    var m;
                    (m = d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "globals"),
                          "brightcove",
                          a.opts.autoescape
                        ),
                        "players",
                        a.opts.autoescape
                      ),
                      "autoplay",
                      a.opts.autoescape
                    )),
                      c.set("brightcovePlayer", m, !0),
                      c.parent ||
                        (b.setVariable("brightcovePlayer", m),
                        b.addExport("brightcovePlayer")),
                      (h += "\n");
                  } else {
                    h += "\n    ";
                    var n;
                    (n = d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "globals"),
                          "brightcove",
                          a.opts.autoescape
                        ),
                        "players",
                        a.opts.autoescape
                      ),
                      "noAutoplay",
                      a.opts.autoescape
                    )),
                      c.set("brightcovePlayer", n, !0),
                      c.parent ||
                        (b.setVariable("brightcovePlayer", n),
                        b.addExport("brightcovePlayer")),
                      (h += "\n");
                  }
                  (h +=
                    '\n\n<div class="brightcove-video">\n    <div class="brightcove-video-container">\n        <video data-video-id="'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "videoId"),
                      a.opts.autoescape
                    )),
                    (h += '" data-account="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "globals"),
                          "brightcove",
                          a.opts.autoescape
                        ),
                        "account",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '" data-player="'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "brightcovePlayer"),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" data-embed="default" class="video-js" controls="" style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>\n        <script src="//players.brightcove.net/'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "globals"),
                          "brightcove",
                          a.opts.autoescape
                        ),
                        "account",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += "/"),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "brightcovePlayer"),
                      a.opts.autoescape
                    )),
                    (h +=
                      '_default/index.min.js"></script>\n    </div>\n</div>'),
                    e(null, h);
                } catch (o) {
                  e(d.handleError(o, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_horizontal-content.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<div class="row hub-articles-featured-row '),
                    d.memberLookup(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "options",
                        a.opts.autoescape
                      ),
                      "video_icon",
                      a.opts.autoescape
                    ) && (h += "hub-articles-featured-row-video"),
                    (h +=
                      '">\n    <section class="hub-articles-featured container-medium row '),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "component_css_class"),
                      a.opts.autoescape
                    )),
                    (h += '">\n        '),
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "component"),
                      "title",
                      a.opts.autoescape
                    ) &&
                      ((h += "\n            <h1 "),
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "options",
                          a.opts.autoescape
                        ),
                        "video_icon",
                        a.opts.autoescape
                      ) && (h += 'class="video-icon"'),
                      (h += ">"),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "title",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += "</h1>\n        ")),
                    (h += "\n        "),
                    (c = c.push());
                  var i = d.memberLookup(
                    d.contextOrFrameLookup(b, c, "component"),
                    "content",
                    a.opts.autoescape
                  );
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("contentItem", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h +=
                          '\n            <article class="hub-articles-featured-article">\n            <a href="'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "slug", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h +=
                          '" class="tracked-offpage" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Horizontal'),
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "options",
                            a.opts.autoescape
                          ),
                          "video_icon",
                          a.opts.autoescape
                        ) && (h += " Video List"),
                        (h += " | "),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "loop"),
                            "index",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += " | "),
                        (h += d.suppressValue(
                          d.memberLookup(l, "slug", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += '">\n                <img src="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "globals"),
                            "mediaRoot",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += d.suppressValue(
                          a
                            .getFilter("imgsrc")
                            .call(
                              b,
                              d.memberLookup(
                                d.memberLookup(l, "data", a.opts.autoescape),
                                "media",
                                a.opts.autoescape
                              ),
                              "featured-promo-320"
                            ),
                          a.opts.autoescape
                        )),
                        (h += '" alt="'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "title", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += '" />\n                '),
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "options",
                            a.opts.autoescape
                          ),
                          "video_icon",
                          a.opts.autoescape
                        ) &&
                          (h +=
                            '\n                    <span class="hub-articles-featured-article-video-icon"></span>\n                '),
                        (h +=
                          '\n                <p class="slug nobg-news color-theme-secondary theme-override">'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "labelData", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += "</p>\n                <header><h2>"),
                        (h += d.suppressValue(
                          d.memberLookup(l, "short_title", a.opts.autoescape)
                            ? d.memberLookup(
                                l,
                                "short_title",
                                a.opts.autoescape
                              )
                            : d.memberLookup(l, "title", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h +=
                          "</h2></header>\n            </a>\n        </article>\n    ");
                    }
                  (c = c.pop()), (h += "\n    </section>\n</div>"), e(null, h);
                } catch (m) {
                  e(d.handleError(m, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "svg/_icon-comment.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<svg class="icon-comment" x="0" y="0" width="37px" height="37px" viewBox="0 0 37 37">\n    <g>\n        <path d="M18.5,28.8453947 C17.2916579,28.8453947 16.1246974,28.7046974 15.0032566,28.4657188 L10.1326447,31.3934655 L10.1978207,26.5942368 C6.46416776,24.3492862 4.01644737,20.6373586 4.01644737,16.4309211 C4.01644737,9.57502796 10.5009408,4.01644737 18.5,4.01644737 C26.4990592,4.01644737 32.9835526,9.57502796 32.9835526,16.4309211 C32.9835526,23.2878487 26.4990592,28.8453947 18.5,28.8453947 L18.5,28.8453947 Z M0,16.1875 C0,21.2969687 2.71140625,25.8468125 6.9375,28.8125937 L6.9375,37 L15.0416563,32.0824688 C16.1632187,32.2674687 17.3171563,32.375 18.5,32.375 C28.716625,32.375 37,25.127625 37,16.1875 C37,7.24853125 28.716625,0 18.5,0 C8.283375,0 0,7.24853125 0,16.1875 Z" id="Fill-192" fill="#FFFFFF"></path>\n    </g>\n</svg>'),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "svg/_icon-email.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<svg class="icon-email" x="0px" y="0px" viewBox="0 0 37 37" enable-background="new 0 0 37 37">\n    <circle class="icon-background" cx="18.5" cy="18.5" r="18.5"/>\n    <path class="icon-symbol color-theme-primary-fill" d="M10,12.1L10,12.1v12.7v0H27v-0.1V12.1H10z M23.8,13.9L23.8,13.9l-5.3,4.7l-5.3-4.7l0,0H23.8z M25.3,23.1\n		H11.7v-8.2l6.8,5.9l6.8-6V23.1z"/>\n</svg>'),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "svg/_icon-facebook.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<svg class="icon-facebook" x="0px" y="0px" viewBox="0 0 37 37" enable-background="new 0 0 37 37">\n	<circle class="icon-background" cx="18.5" cy="18.5" r="18.5"/>\n    <path class="icon-symbol color-theme-primary-fill" d="M19.7,26.2v-7h2.4l0.4-2.7h-2.7v-1.7c0-0.8,0.2-1.3,1.4-1.3l1.5,0v-2.4c-0.3,0-1.1-0.1-2.1-0.1\n	c-2.1,0-3.5,1.3-3.5,3.6v2h-2.4v2.7h2.4v7H19.7z"/>\n</svg>'),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "svg/_icon-google-plus.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<svg class="icon-google-plus" x="0px" y="0px" viewBox="0 0 37 37" enable-background="new 0 0 37 37">\n    <circle class="icon-background" cx="18.5" cy="18.5" r="18.5"/>\n    <path class="icon-symbol color-theme-primary-fill" d="M26.8,17.3h-2.1v-2.1H23v2.1H21V19H23V21h1.7V19h2.1V17.3L26.8,17.3z M19,19.8\n		c-0.5-0.3-1.4-1.2-1.4-1.7c0-0.6,0.2-0.9,1-1.5c0.9-0.7,1.5-1.7,1.5-2.8c0-1.3-0.6-2.6-1.7-3.1h1.7l1.2-0.9H16\n		c-2.4,0-4.6,1.8-4.6,3.9c0,2.1,1.6,3.9,4,3.9c0.2,0,0.3,0,0.5,0c-0.2,0.3-0.3,0.6-0.3,1c0,0.6,0.3,1.1,0.7,1.5c-0.3,0-0.6,0-0.9,0\n		c-2.9,0-5.2,1.9-5.2,3.8c0,1.9,2.5,3.1,5.4,3.1c3.4,0,5.2-1.9,5.2-3.8C20.9,21.7,20.4,20.8,19,19.8L19,19.8z M16.2,17.1\n		c-1.4,0-2.7-1.5-2.9-3.3c-0.2-1.8,0.7-3.2,2-3.1c1.4,0,2.7,1.5,2.9,3.3C18.5,15.8,17.6,17.2,16.2,17.1L16.2,17.1z M15.7,26.2\n		c-2,0-3.5-1.3-3.5-2.8c0-1.5,1.8-2.8,3.9-2.8c0.5,0,0.9,0.1,1.3,0.2c1.1,0.8,1.9,1.2,2.1,2.1c0,0.2,0.1,0.4,0.1,0.5\n		C19.5,25,18.5,26.2,15.7,26.2L15.7,26.2z"/>\n</svg>'),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "svg/_icon-pinterest.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<svg class="icon-pinterest" x="0px" y="0px" viewBox="0 0 37 37" enable-background="new 0 0 37 37">\n    <circle class="icon-background" cx="18.5" cy="18.5" r="18.5"/>\n    <path class="icon-symbol color-theme-primary-fill" fill-rule="evenodd" clip-rule="evenodd" d="M17.3,21.7c0-0.1,0-0.2,0-0.2c0,0,0,0,0,0c0.2,0.3,0.5,0.6,0.8,0.7\n		c0.3,0.2,0.7,0.4,1.1,0.5c1,0.2,2-0.1,2.7-0.3c0.7-0.3,1.3-0.8,1.8-1.3c1-1.1,1.6-2.6,1.8-4.6c0-0.5,0.1-1,0-1.5\n		c0-0.5-0.1-0.9-0.3-1.3c-0.3-0.8-0.7-1.4-1.2-2c-0.5-0.6-1.1-1-1.8-1.4C21.7,10,20.9,9.7,20,9.6c-1-0.1-2.1-0.1-2.9,0.1\n		C15.3,10,13.9,10.9,13,12c-0.5,0.6-0.9,1.2-1.2,2c-0.3,0.8-0.5,1.7-0.4,2.7c0.1,1.4,0.7,2.5,1.6,3.2c0.2,0.1,0.3,0.2,0.5,0.3\n		c0.2,0.1,0.4,0,0.5-0.2c0-0.1,0.1-0.2,0.1-0.3c0.1-0.2,0.1-0.4,0.2-0.6c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.2-0.2-0.2\n		c-0.2-0.2-0.3-0.4-0.5-0.7c-0.2-0.4-0.3-0.8-0.3-1.3c0-1,0.3-1.9,0.6-2.5c0.2-0.3,0.4-0.6,0.7-0.9c0.7-0.8,1.8-1.4,3.2-1.6\n		c0.5-0.1,1-0.1,1.5,0c0.9,0.1,1.7,0.4,2.3,0.9c0.6,0.5,1,1.1,1.2,2c0.2,0.9,0.2,2,0,2.9c-0.2,1.3-0.7,2.5-1.6,3.2\n		c-0.3,0.3-0.6,0.5-1,0.6c-0.4,0.1-1,0.1-1.4,0c-0.5-0.2-1-0.7-1-1.4c0-0.2,0-0.5,0.1-0.7c0.2-0.9,0.5-1.6,0.7-2.5\n		c0.1-0.4,0.2-0.9,0.2-1.4c-0.1-0.5-0.2-0.8-0.5-1.1c-0.3-0.2-0.8-0.4-1.3-0.2c-0.4,0.1-0.7,0.3-1,0.6c-0.5,0.6-0.8,1.4-0.7,2.5\n		c0,0.4,0.1,0.8,0.3,1.1c0,0.1,0.1,0.1,0.1,0.2c-0.1,0.3-0.2,0.7-0.2,1c-0.2,1-0.5,2-0.7,3c-0.2,0.6-0.3,1.3-0.5,2\n		c-0.1,0.5-0.3,1.1-0.3,1.7c0,0.2,0,1.2,0,1.7c0.2,0.2,0.5,0.1,0.5,0.1c0.4-0.3,1-1,1.3-1.4c0.4-0.6,0.5-1.2,0.7-1.7\n		C16.8,23.5,17.1,22.6,17.3,21.7z"/>\n</svg>'),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "svg/_icon-twitter.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<svg class="icon-twitter" x="0px" y="0px" viewBox="0 0 37 37" enable-background="new 0 0 37 37">\n    <circle class="icon-background" cx="18.5" cy="18.5" r="18.5"/>\n    <path class="icon-symbol color-theme-primary-fill color-theme-secondary-fill-hover" d="M26.9,13.3c-0.6,0.3-1.3,0.5-2,0.5c0.7-0.4,1.3-1.1,1.5-1.9c-0.7,0.4-1.4,0.7-2.2,0.8\n		c-0.6-0.7-1.5-1.1-2.5-1.1c-1.9,0-3.5,1.5-3.5,3.5c0,0.3,0,0.5,0.1,0.8c-2.9-0.1-5.4-1.5-7.1-3.6c-0.3,0.5-0.5,1.1-0.5,1.7\n		c0,1.2,0.6,2.3,1.5,2.9c-0.6,0-1.1-0.2-1.6-0.4c0,0,0,0,0,0c0,1.7,1.2,3.1,2.8,3.4C13.2,20,12.9,20,12.6,20c-0.2,0-0.4,0-0.7-0.1\n		c0.4,1.4,1.7,2.4,3.2,2.4c-1.2,0.9-2.7,1.5-4.3,1.5c-0.3,0-0.6,0-0.8,0c1.5,1,3.4,1.6,5.3,1.6c6.4,0,9.8-5.3,9.8-9.8\n		c0-0.2,0-0.3,0-0.4C25.9,14.6,26.5,14,26.9,13.3z"/>\n</svg>'),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_image.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += "<img "),
                    d.contextOrFrameLookup(b, c, "sizes") &&
                      ((h += 'sizes="'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "sizes"),
                        a.opts.autoescape
                      )),
                      (h += '" ')),
                    d.contextOrFrameLookup(b, c, "srcset") &&
                      ((h += 'srcset= "'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "srcset"),
                        a.opts.autoescape
                      )),
                      (h += '" ')),
                    (h += 'src="'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "srcFilename"),
                      a.opts.autoescape
                    )),
                    (h += '" alt="'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "alt"),
                      a.opts.autoescape
                    )),
                    (h += '" />\n\n'),
                    (h += "\n\n"),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_insetEmbed.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<aside class="inset-related-content'),
                    d.contextOrFrameLookup(b, c, "align")
                      ? ((h += " inset-"),
                        (h += d.suppressValue(
                          d.contextOrFrameLookup(b, c, "align"),
                          a.opts.autoescape
                        )))
                      : (h += " inset-fullnoimage"),
                    (h += '">\n    '),
                    d.contextOrFrameLookup(b, c, "image") &&
                      ((h += '\n    <figure>\n        <a href="'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "slug"),
                        a.opts.autoescape
                      )),
                      (h +=
                        '" class="tracked-offpage" data-track-category="Article Page" data-track-action="Tap Interstitial Link" data-track-label="'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "globals"),
                          "protocol",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "globals"),
                          "host",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "slug"),
                        a.opts.autoescape
                      )),
                      (h += '">'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "image"),
                        a.opts.autoescape
                      )),
                      (h += "</a>\n    </figure>\n    ")),
                    (h += '\n    <h3>\n        <a href="'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "slug"),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" class="tracked-offpage" data-track-category="Article Page" data-track-action="Tap Interstitial Link" data-track-label="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "protocol",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "host",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "slug"),
                      a.opts.autoescape
                    )),
                    (h += '">'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "headline"),
                      a.opts.autoescape
                    )),
                    (h += "</a>\n    </h3>\n</aside>"),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_insetHTML.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += d.suppressValue(
                    d.contextOrFrameLookup(b, c, "htmlCode"),
                    a.opts.autoescape
                  )),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_insetImage.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<aside class="inset-image'),
                    d.contextOrFrameLookup(b, c, "align") &&
                      ((h += " inset-"),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "align"),
                        a.opts.autoescape
                      ))),
                    (h += '">\n    <figure>\n        '),
                    (h += d.suppressValue(
                      ((f = 2),
                      (g = 20),
                      d.callWrap(
                        d.contextOrFrameLookup(b, c, "renderImage"),
                        "renderImage",
                        [
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "globals"),
                            "mediaRoot",
                            a.opts.autoescape
                          ),
                          d.contextOrFrameLookup(b, c, "filename"),
                          "480-width",
                          "(max-width: 800px) calc(100vw - 20px), (max-width: 1120px) calc (66vw - 100px), 620px",
                          [
                            ["480-width", "480w"],
                            ["620-width", "620w"],
                            ["760-width", "760w"],
                          ],
                          d.contextOrFrameLookup(b, c, "title"),
                        ]
                      )),
                      a.opts.autoescape
                    )),
                    (h += "\n        <figcaption>\n            "),
                    d.contextOrFrameLookup(b, c, "caption") &&
                      ((h += '<span class="caption">'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "caption"),
                        a.opts.autoescape
                      )),
                      (h += "</span>")),
                    (h += "\n            "),
                    d.contextOrFrameLookup(b, c, "credit") &&
                      ((h += '<span class="credit">'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "credit"),
                        a.opts.autoescape
                      )),
                      (h += "</span>")),
                    (h += "\n        </figcaption>\n    </figure>\n</aside>"),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_insetLink.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<p class="link-related"><a href="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "protocol",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "host",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "embed"),
                        "link",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" class="tracked-offpage" data-track-category="Article Page" data-track-action="Tap Interstitial Link" data-track-label="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "protocol",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "host",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "embed"),
                        "link",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '">'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "text"),
                      a.opts.autoescape
                    )),
                    (h += "</a></p>"),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_insetVideo.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  if (
                    ((h +=
                      '<aside class="inset-video">\n    <div class="embed'),
                    d.contextOrFrameLookup(b, c, "htmlCode") &&
                      (h += " embed-container"),
                    (h += '">\n        '),
                    d.contextOrFrameLookup(b, c, "brightcoveId"))
                  ) {
                    h += "\n            ";
                    var i;
                    (i = !1),
                      c.set("videoAuto", i, !0),
                      c.parent ||
                        (b.setVariable("videoAuto", i),
                        b.addExport("videoAuto")),
                      (h += "\n            "),
                      a.getTemplate(
                        "partials/_brightcove.html.twig",
                        !1,
                        "partials/_insetVideo.html.twig",
                        function (a, d) {
                          return a
                            ? void e(a)
                            : void d.render(
                                b.getVariables(),
                                c.push(),
                                function (a, b) {
                                  return a
                                    ? void e(a)
                                    : ((h += b), void (h += "\n        "));
                                }
                              );
                        }
                      );
                  } else
                    d.contextOrFrameLookup(b, c, "htmlCode") &&
                      ((h += "\n            "),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "htmlCode"),
                        a.opts.autoescape
                      )),
                      (h += "\n        "));
                  (h += "\n    </div>\n    "),
                    d.contextOrFrameLookup(b, c, "caption") &&
                      ((h += '<span class="caption">'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "caption"),
                        a.opts.autoescape
                      )),
                      (h += "</span>")),
                    (h += "\n    "),
                    d.contextOrFrameLookup(b, c, "credit") &&
                      ((h += '<span class="credits">'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "credits"),
                        a.opts.autoescape
                      )),
                      (h += "</span>")),
                    (h += "\n</aside>"),
                    e(null, h);
                } catch (j) {
                  e(d.handleError(j, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_interstitial-microfeed-component.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '\n\n<section class="module-partners">\n    <div class="module-partners-container clearfix">\n        '),
                    (c = c.push());
                  var i = d.contextOrFrameLookup(b, c, "content");
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("feed", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h +=
                          '\n            <div class="module-partners-box">\n                <h2>Featured news <span class="text-from">from</span> <a rel="nofollow" href="'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "partner_url", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += '"><img src="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "globals"),
                            "mediaRoot",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += d.suppressValue(
                          d.memberLookup(l, "partner_logo", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += '" alt="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            l,
                            "partner_display_name",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += '"></a></h2>\n                '),
                        (c = c.push());
                      var m =
                        ((f = 7),
                        (g = 31),
                        d.callWrap(
                          d.contextOrFrameLookup(b, c, "range"),
                          "range",
                          [0, 4]
                        ));
                      if (m)
                        for (var n = m.length, o = 0; o < m.length; o++) {
                          var p = m[o];
                          c.set("i", p),
                            c.set("loop.index", o + 1),
                            c.set("loop.index0", o),
                            c.set("loop.revindex", n - o),
                            c.set("loop.revindex0", n - o - 1),
                            c.set("loop.first", 0 === o),
                            c.set("loop.last", o === n - 1),
                            c.set("loop.length", n),
                            (h +=
                              '\n                    <article class="module-partners-box-article">\n                        <a rel="nofollow" href="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    l,
                                    "articles",
                                    a.opts.autoescape
                                  ),
                                  p,
                                  a.opts.autoescape
                                ),
                                "article_url",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              '" class="tracked-offpage" data-track-category="Partner" data-track-action="Tap Interstitial Link" data-track-label="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "loop"),
                                "index",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h += " | "),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    l,
                                    "articles",
                                    a.opts.autoescape
                                  ),
                                  p,
                                  a.opts.autoescape
                                ),
                                "article_url",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              '">\n                            <div class="module-partners-box-article-image"><img src="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "globals"),
                                "mediaRoot",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h += "article-reading-list/"),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    l,
                                    "articles",
                                    a.opts.autoescape
                                  ),
                                  p,
                                  a.opts.autoescape
                                ),
                                "article_image",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h += '" alt="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    l,
                                    "articles",
                                    a.opts.autoescape
                                  ),
                                  p,
                                  a.opts.autoescape
                                ),
                                "article_title",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              '"></div>\n                            <span>'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    l,
                                    "articles",
                                    a.opts.autoescape
                                  ),
                                  p,
                                  a.opts.autoescape
                                ),
                                "article_title",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              "</span>\n                        </a>\n                    </article>\n                ");
                        }
                      (c = c.pop()),
                        (h +=
                          '\n                <a rel="nofollow" class="module-partners-box-more-link" href="'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "partner_url", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += '">More News From '),
                        (h += d.suppressValue(
                          d.memberLookup(
                            l,
                            "partner_display_name",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += "</a>\n            </div>\n        ");
                    }
                  (c = c.pop()),
                    (h += "\n    </div>\n</section>\n"),
                    e(null, h);
                } catch (q) {
                  e(d.handleError(q, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_interstitial-microfeed.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<section class="module-partners">\n    <div class="module-partners-container clearfix">\n        '),
                    (c = c.push());
                  var i = d.memberLookup(
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "component"),
                      "data",
                      a.opts.autoescape
                    ),
                    "microFeeds",
                    a.opts.autoescape
                  );
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      if (
                        (c.set("microFeed", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h += "\n            "),
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "loop"),
                          "index",
                          a.opts.autoescape
                        ) <= 2)
                      ) {
                        (h +=
                          '\n            <div class="module-partners-box">\n                <h2>'),
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "loop"),
                            "first",
                            a.opts.autoescape
                          ) && (h += "Featured news "),
                          (h +=
                            '<span class="text-from">from</span> <a rel="nofollow" href="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.memberLookup(l, "meta", a.opts.autoescape),
                              "partner_url",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += '"><img src="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "mediaRoot",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.memberLookup(l, "meta", a.opts.autoescape),
                              "partner_logo",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += '" alt="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.memberLookup(l, "meta", a.opts.autoescape),
                              "partner_display_name",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += '"></a></h2>\n                '),
                          (c = c.push());
                        var m = d.memberLookup(
                          l,
                          "articles",
                          a.opts.autoescape
                        );
                        if (m)
                          for (var n = m.length, o = 0; o < m.length; o++) {
                            var p = m[o];
                            c.set("article", p),
                              c.set("loop.index", o + 1),
                              c.set("loop.index0", o),
                              c.set("loop.revindex", n - o),
                              c.set("loop.revindex0", n - o - 1),
                              c.set("loop.first", 0 === o),
                              c.set("loop.last", o === n - 1),
                              c.set("loop.length", n),
                              (h +=
                                '\n                    <article class="module-partners-box-article">\n                        <a rel="nofollow" href="'),
                              (h += d.suppressValue(
                                d.memberLookup(
                                  p,
                                  "article_url",
                                  a.opts.autoescape
                                ),
                                a.opts.autoescape
                              )),
                              (h +=
                                '" class="tracked-offpage" data-track-category="Partner" data-track-action="Tap Module Link" data-track-label="'),
                              (h += d.suppressValue(
                                d.memberLookup(
                                  d.contextOrFrameLookup(b, c, "loop"),
                                  "index",
                                  a.opts.autoescape
                                ),
                                a.opts.autoescape
                              )),
                              (h += " | "),
                              (h += d.suppressValue(
                                d.memberLookup(
                                  p,
                                  "article_url",
                                  a.opts.autoescape
                                ),
                                a.opts.autoescape
                              )),
                              (h += '">\n                            '),
                              d.memberLookup(
                                p,
                                "article_image",
                                a.opts.autoescape
                              ) &&
                                ((h +=
                                  '<div class="module-partners-box-article-image"><img src="'),
                                (h += d.suppressValue(
                                  d.memberLookup(
                                    p,
                                    "article_image",
                                    a.opts.autoescape
                                  ),
                                  a.opts.autoescape
                                )),
                                (h += '" alt="'),
                                (h += d.suppressValue(
                                  d.memberLookup(
                                    p,
                                    "article_title",
                                    a.opts.autoescape
                                  ),
                                  a.opts.autoescape
                                )),
                                (h += '"></div>')),
                              (h += "\n                            <span>"),
                              (h += d.suppressValue(
                                d.memberLookup(
                                  p,
                                  "article_title",
                                  a.opts.autoescape
                                ),
                                a.opts.autoescape
                              )),
                              (h +=
                                "</span>\n                        </a>\n                    </article>\n                ");
                          }
                        (c = c.pop()),
                          (h +=
                            '\n                <a rel="nofollow" class="module-partners-box-more-link" href="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.memberLookup(l, "meta", a.opts.autoescape),
                              "partner_url",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += '">More News From '),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.memberLookup(l, "meta", a.opts.autoescape),
                              "partner_display_name",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += "</a>\n            </div>\n            ");
                      }
                      h += "\n        ";
                    }
                  (c = c.pop()), (h += "\n    </div>\n</section>"), e(null, h);
                } catch (q) {
                  e(d.handleError(q, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_module-hot-pics.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<section class="module-hot-pics main-bg '),
                    "Hot Pics" ==
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "title",
                        a.opts.autoescape
                      ) && (h += "add-fire"),
                    (h += " "),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "component_css_class"),
                      a.opts.autoescape
                    )),
                    (h +=
                      '">\n	<div class="module-hot-pics-container">\n		<header class="module-hot-pics-header">\n			<div class="header-container">\n				<span class="module-hot-pics-header-slug color-theme-hed with-border">New</span>\n				<h2 class="color-theme-hed">'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "title",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '</h2>\n				<time class="module-timestamp color-theme-dek"><span class="clock color-theme-clock"></span>'),
                    (h += d.suppressValue(
                      ((f = 6),
                      (g = 101),
                      d.callWrap(d.contextOrFrameLookup(b, c, "date"), "date", [
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "component"),
                                "content",
                                a.opts.autoescape
                              ),
                              0,
                              a.opts.autoescape
                            ),
                            "member",
                            a.opts.autoescape
                          ),
                          "publish_date",
                          a.opts.autoescape
                        ),
                        "F j, Y",
                        !0,
                      ])),
                      a.opts.autoescape
                    )),
                    (h +=
                      '</time>\n				<span class="hot-pics-count color-theme-dek">'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "gallery",
                          a.opts.autoescape
                        ),
                        "total",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      ' photos added</span>\n\n				<a class="module-hot-pics-view-full color-theme-cta tracked-offpage" href="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "gallery",
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" title="View Full Gallery" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Hot Pics | View Full Gallery | '),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "gallery",
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '">View Full Gallery</a>\n			</div>\n		</header>\n\n		<main class="module-hot-pics-body">\n		'),
                    (c = c.push());
                  var i = d.memberLookup(
                    d.contextOrFrameLookup(b, c, "component"),
                    "content",
                    a.opts.autoescape
                  );
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("contentItem", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h +=
                          '\n			<a class="module-hot-pics-item tracked-offpage'),
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "loop"),
                          "first",
                          a.opts.autoescape
                        ) && (h += " first"),
                        (h += '" href="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(l, "member", a.opts.autoescape),
                            "slug",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += '" title="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(l, "member", a.opts.autoescape),
                            "title",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h +=
                          '" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Hot Pics | '),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "loop"),
                            "index",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += " | "),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(l, "member", a.opts.autoescape),
                            "slug",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h +=
                          '">\n				<span class="module-hot-pics-item-image">\n					'),
                        (h += d.suppressValue(
                          ((f = 17),
                          (g = 17),
                          d.callWrap(
                            d.contextOrFrameLookup(b, c, "renderImage"),
                            "renderImage",
                            [
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "globals"),
                                "mediaRoot",
                                a.opts.autoescape
                              ),
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    l,
                                    "member",
                                    a.opts.autoescape
                                  ),
                                  "data",
                                  a.opts.autoescape
                                ),
                                "media",
                                a.opts.autoescape
                              ),
                              "featured-promo-320",
                              "100vw",
                              [
                                ["featured-promo-320", "800w"],
                                ["hotpics-vertical", "1480w"],
                              ],
                              d.memberLookup(
                                d.memberLookup(l, "member", a.opts.autoescape),
                                "title",
                                a.opts.autoescape
                              ),
                            ]
                          )),
                          a.opts.autoescape
                        )),
                        (h +=
                          '\n				</span>\n\n				<div class="module-hot-pics-item-content">\n					'),
                        d.memberLookup(
                          d.memberLookup(l, "member", a.opts.autoescape),
                          "celebrity",
                          a.opts.autoescape
                        ) &&
                          ((h +=
                            '\n						<span class="module-hot-pics-item-slug color-theme-dek">'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.memberLookup(l, "member", a.opts.autoescape),
                              "celebrity",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += "</span>\n					")),
                        (h +=
                          '\n					\n					<span class="module-hot-pics-item-title color-theme-hed">'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(l, "member", a.opts.autoescape),
                            "title",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += "</span>\n				</div>\n			</a>\n		");
                    }
                  (c = c.pop()),
                    (h += "\n		</main>\n	</div>\n</section>"),
                    e(null, h);
                } catch (m) {
                  e(d.handleError(m, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_module-reading-list-item.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<a href="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" class="module-reading-list-item module-reading-list-item-active tracked-offpage" data-id="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "id",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '" data-rendered="false" data-type="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "contentType",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '" data-track-category="'),
                    (h += d.contextOrFrameLookup(b, c, "page_type")
                      ? "home" == d.contextOrFrameLookup(b, c, "page_type")
                        ? "HP"
                        : d.suppressValue(
                            a
                              .getFilter("title")
                              .call(
                                b,
                                d.contextOrFrameLookup(b, c, "page_type")
                              ),
                            a.opts.autoescape
                          )
                      : "Module"),
                    (h +=
                      '" data-track-action="Tap Reading List Article" data-track-label="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentItem"),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '">\n    <div class="module-reading-list-item-close"></div>'),
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "contentData"),
                      "media",
                      a.opts.autoescape
                    )
                      ? ((h +=
                          '<span class="module-reading-list-item-image">\n        <img src="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "globals"),
                            "mediaRoot",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += d.suppressValue(
                          a
                            .getFilter("imgsrc")
                            .call(
                              b,
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "contentData"),
                                "media",
                                a.opts.autoescape
                              ),
                              "reading-list"
                            ),
                          a.opts.autoescape
                        )),
                        (h += '" />\n    </span>'))
                      : d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "items"),
                                0,
                                a.opts.autoescape
                              ),
                              "media",
                              a.opts.autoescape
                            ),
                            "main_image",
                            a.opts.autoescape
                          ),
                          "filename",
                          a.opts.autoescape
                        ) &&
                        ((h +=
                          '<span class="module-reading-list-item-image">\n        <img src="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "globals"),
                            "mediaRoot",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += d.suppressValue(
                          a
                            .getFilter("imgsrc")
                            .call(
                              b,
                              d.memberLookup(
                                d.memberLookup(
                                  d.contextOrFrameLookup(b, c, "items"),
                                  0,
                                  a.opts.autoescape
                                ),
                                "media",
                                a.opts.autoescape
                              ),
                              "reading-list"
                            ),
                          a.opts.autoescape
                        )),
                        (h += '" />\n    </span>\n    ')),
                    (h +=
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "items"),
                              0,
                              a.opts.autoescape
                            ),
                            "media",
                            a.opts.autoescape
                          ),
                          "main_image",
                          a.opts.autoescape
                        ),
                        "filename",
                        a.opts.autoescape
                      ) ||
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "contentData"),
                            "media",
                            a.opts.autoescape
                          ),
                          "main_image",
                          a.opts.autoescape
                        ),
                        "filename",
                        a.opts.autoescape
                      )
                        ? '<div class="module-reading-list-item-content">'
                        : '<div class="module-reading-list-item-content no-image">'),
                    (h += '<span class="reading-list-item-type '),
                    "gallery" ==
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "contentType",
                        a.opts.autoescape
                      ) && (h += "content-gallery"),
                    "Video" ==
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "contentData"),
                            "media",
                            a.opts.autoescape
                          ),
                          "lead",
                          a.opts.autoescape
                        ),
                        "type",
                        a.opts.autoescape
                      ) && (h += "lead-video"),
                    (h += '">\n            <span class="type-text">'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "labelData",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '</span>\n        </span>\n        <p class="reading-list-item-title">'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "short_title",
                        a.opts.autoescape
                      )
                        ? d.memberLookup(
                            d.contextOrFrameLookup(b, c, "contentData"),
                            "short_title",
                            a.opts.autoescape
                          )
                        : d.memberLookup(
                            d.contextOrFrameLookup(b, c, "contentData"),
                            "title",
                            a.opts.autoescape
                          ),
                      a.opts.autoescape
                    )),
                    (h += "</p>\n    </div>"),
                    ("gallery" ==
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "contentType",
                        a.opts.autoescape
                      ) ||
                      "photo" ==
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "contentType",
                          a.opts.autoescape
                        )) &&
                      ((h +=
                        '<div class="module-reading-list-item-counter">\n            <div class="module-reading-list-item-counter-current">1</div>\n            <div class="module-reading-list-item-counter-total">'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "total",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h +=
                        '</div>\n        </div>\n        <div class="module-reading-list-item-toggle">Show/Hide Gallery Control</div>')),
                    (h += "</a>"),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_module-reading-list.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<div id="module-reading-list" class="module-reading-list row">\n    <div id="module-reading-list-mobile-control" class="module-reading-list-mobile-control"></div>\n    <div class="progress-box"><div class="progress-box-bar"></div></div>'),
                    a.getTemplate(
                      "partials/_module-reading-list-item.html.twig",
                      !1,
                      "partials/_module-reading-list.html.twig",
                      function (a, d) {
                        return a
                          ? void e(a)
                          : void d.render(b.getVariables(), c.push(), function (
                              a,
                              b
                            ) {
                              return a
                                ? void e(a)
                                : ((h += b), (h += "</div>"), void e(null, h));
                            });
                      }
                    );
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_module-related.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  if (
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "related"),
                      "length",
                      a.opts.autoescape
                    )
                  ) {
                    (h += '\n<aside class="module-related'),
                      d.contextOrFrameLookup(b, c, "galleryRelated") &&
                        (h += " body-content"),
                      (h +=
                        '">\n    <h2 class="module-related-header">Related</h2>\n    '),
                      (c = c.push());
                    var i = d.contextOrFrameLookup(b, c, "related");
                    if (i)
                      for (var j = i.length, k = 0; k < i.length; k++) {
                        var l = i[k];
                        c.set("article", l),
                          c.set("loop.index", k + 1),
                          c.set("loop.index0", k),
                          c.set("loop.revindex", j - k),
                          c.set("loop.revindex0", j - k - 1),
                          c.set("loop.first", 0 === k),
                          c.set("loop.last", k === j - 1),
                          c.set("loop.length", j),
                          (h +=
                            '\n        <article class="module-related-article">\n            '),
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "loop"),
                            "first",
                            a.opts.autoescape
                          ) &&
                            ((h += '\n               <img src="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "globals"),
                                "mediaRoot",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h += d.suppressValue(
                              a
                                .getFilter("imgsrc")
                                .call(
                                  b,
                                  d.memberLookup(
                                    d.memberLookup(
                                      l,
                                      "data",
                                      a.opts.autoescape
                                    ),
                                    "media",
                                    a.opts.autoescape
                                  ),
                                  "square-400"
                                ),
                              a.opts.autoescape
                            )),
                            (h += '" alt="'),
                            (h += d.suppressValue(
                              d.memberLookup(l, "title", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h += '" />\n            ')),
                          (h += '\n            <a href="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "protocol",
                              a.opts.autoescape
                            ) +
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "globals"),
                                "host",
                                a.opts.autoescape
                              ) +
                              d.memberLookup(l, "slug", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h +=
                            '" class="tracked-offpage" data-track-category="Article Page" data-track-action="Tap Related" data-track-label="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "loop"),
                              "index",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += " | "),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "protocol",
                              a.opts.autoescape
                            ) +
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "globals"),
                                "host",
                                a.opts.autoescape
                              ) +
                              d.memberLookup(l, "slug", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h += '">'),
                          (h += d.suppressValue(
                            d.memberLookup(l, "short_title", a.opts.autoescape)
                              ? d.memberLookup(
                                  l,
                                  "short_title",
                                  a.opts.autoescape
                                )
                              : d.memberLookup(l, "title", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h += "</a>\n        </article>\n    ");
                      }
                    (c = c.pop()), (h += "\n</aside>\n");
                  }
                  e(null, h);
                } catch (m) {
                  e(d.handleError(m, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_module-tag-list.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  if (
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "tags"),
                      "length",
                      a.opts.autoescape
                    )
                  ) {
                    (h += '\n<div class="body-content-footer-taglist">\n'),
                      (c = c.push());
                    var i = d.contextOrFrameLookup(b, c, "tags");
                    if (i)
                      for (var j = i.length, k = 0; k < i.length; k++) {
                        var l = i[k];
                        c.set("tag", l),
                          c.set("loop.index", k + 1),
                          c.set("loop.index0", k),
                          c.set("loop.revindex", j - k),
                          c.set("loop.revindex0", j - k - 1),
                          c.set("loop.first", 0 === k),
                          c.set("loop.last", k === j - 1),
                          c.set("loop.length", j),
                          (h += '\n    <a href="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "protocol",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "host",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += d.suppressValue(
                            d.memberLookup(l, "slug", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h +=
                            '" class="tracked-onpage" data-track-category="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "type",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h +=
                            ' Page" data-track-action="Tap Byline" data-track-label="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "protocol",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "host",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += d.suppressValue(
                            d.memberLookup(l, "slug", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h += '">#'),
                          (h += d.suppressValue(
                            d.memberLookup(l, "name", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h += "</a>\n");
                      }
                    (c = c.pop()), (h += "\n</div>\n");
                  }
                  e(null, h);
                } catch (m) {
                  e(d.handleError(m, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_red-carpet.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<section class="hub-gallery row main-bg '),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "component_css_class"),
                      a.opts.autoescape
                    )),
                    (h +=
                      '">\n    <div class="container-large row">\n        <div class="hub-gallery-item hub-gallery-title-card">\n            <header>'),
                    d.memberLookup(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "options",
                        a.opts.autoescape
                      ),
                      "show_live",
                      a.opts.autoescape
                    ) &&
                      (h +=
                        '<span class="color-theme-hed with-border">Live!</span>'),
                    (h += '<h2 role="heading" class="color-theme-hed">'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "title",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '</h2>\n            </header>\n            <p class="color-theme-dek">'),
                    (h += d.suppressValue(
                      ((f = 7),
                      (g = 44),
                      d.callWrap(d.contextOrFrameLookup(b, c, "date"), "date", [
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "gallery",
                            a.opts.autoescape
                          ),
                          "updatedAt",
                          a.opts.autoescape
                        ),
                        "F j, Y @ h:i A",
                        !0,
                      ])),
                      a.opts.autoescape
                    )),
                    (h += "<br/><em>"),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "gallery",
                          a.opts.autoescape
                        ),
                        "total",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += ' Photos</em></p>\n            <a href="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "gallery",
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" title="View Full Gallery" class="tracked-onpage color-theme-cta" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Red Carpet | View Full Gallery | '),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "gallery",
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '">View Full Gallery</a>\n        </div>\n        '),
                    (c = c.push());
                  var i = d.memberLookup(
                    d.contextOrFrameLookup(b, c, "component"),
                    "content",
                    a.opts.autoescape
                  );
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("contentItem", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h +=
                          '\n        <div class="hub-gallery-item">\n            <a href="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(l, "member", a.opts.autoescape),
                            "slug",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += '" title="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(l, "member", a.opts.autoescape),
                            "title",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h +=
                          '" class="tracked-onpage" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Red Carpet | '),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "loop"),
                            "index",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += " | "),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(l, "member", a.opts.autoescape),
                            "slug",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += '">\n                <img src="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "globals"),
                            "mediaRoot",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += d.suppressValue(
                          a
                            .getFilter("imgsrc")
                            .call(
                              b,
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    l,
                                    "member",
                                    a.opts.autoescape
                                  ),
                                  "data",
                                  a.opts.autoescape
                                ),
                                "media",
                                a.opts.autoescape
                              ),
                              "photos-vertical-module"
                            ),
                          a.opts.autoescape
                        )),
                        (h += '" alt="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(l, "member", a.opts.autoescape),
                            "title",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h +=
                          '" />\n            </a>\n        </div>\n        ');
                    }
                  (c = c.pop()), (h += "\n    </div>\n</section>"), e(null, h);
                } catch (m) {
                  e(d.handleError(m, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_related.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  if (
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "contentData"),
                      "embeds",
                      a.opts.autoescape
                    )
                  ) {
                    (h +=
                      '\n    <aside class="module-related">\n        <h2 class="module-related-header">Related</h2>\n\n        <article class="module-related-article">\n            <a href="'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "embeds",
                              a.opts.autoescape
                            ),
                            "related_1",
                            a.opts.autoescape
                          ),
                          "link",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h +=
                        '" class="tracked-offpage" data-track-category="Related" data-track-action="Tap Related Story" data-track-label="1 | '),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "embeds",
                              a.opts.autoescape
                            ),
                            "related_1",
                            a.opts.autoescape
                          ),
                          "link",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += '"><img src="'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "globals"),
                          "mediaRoot",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += d.suppressValue(
                        a
                          .getFilter("imgsrc")
                          .call(
                            b,
                            d.memberLookup(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "contentData"),
                                "embeds",
                                a.opts.autoescape
                              ),
                              "related_1",
                              a.opts.autoescape
                            ),
                            "square-400"
                          ),
                        a.opts.autoescape
                      )),
                      (h += '" alt="'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "embeds",
                              a.opts.autoescape
                            ),
                            "related_1",
                            a.opts.autoescape
                          ),
                          "alt",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += '" />\n                '),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "embeds",
                              a.opts.autoescape
                            ),
                            "related_1",
                            a.opts.autoescape
                          ),
                          "title",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += "</a>\n        </article>\n\n        "),
                      (c = c.push());
                    var i = d.memberLookup(
                      d.contextOrFrameLookup(b, c, "contentData"),
                      "embeds",
                      a.opts.autoescape
                    );
                    if (i) {
                      var j;
                      if (d.isArray(i)) {
                        var k = i.length;
                        for (j = 0; j < i.length; j++) {
                          var l = i[j][0];
                          c.set("key", i[j][0]);
                          var m = i[j][1];
                          c.set("related", i[j][1]),
                            c.set("loop.index", j + 1),
                            c.set("loop.index0", j),
                            c.set("loop.revindex", k - j),
                            c.set("loop.revindex0", k - j - 1),
                            c.set("loop.first", 0 === j),
                            c.set("loop.last", j === k - 1),
                            c.set("loop.length", k),
                            (h += "\n            "),
                            "related_1" != l &&
                              ((h +=
                                '\n                <article class="module-related-article">\n                    <a href="'),
                              (h += d.suppressValue(
                                d.memberLookup(m, "link", a.opts.autoescape),
                                a.opts.autoescape
                              )),
                              (h +=
                                '" class="tracked-offpage" data-track-category="Related" data-track-action="Tap Related Story" data-track-label="'),
                              (h += d.suppressValue(l, a.opts.autoescape)),
                              (h += " | "),
                              (h += d.suppressValue(
                                d.memberLookup(m, "link", a.opts.autoescape),
                                a.opts.autoescape
                              )),
                              (h += '">'),
                              (h += d.suppressValue(
                                d.memberLookup(m, "title", a.opts.autoescape),
                                a.opts.autoescape
                              )),
                              (h +=
                                "</a>\n                </article>\n            ")),
                            (h += "\n        ");
                        }
                      } else {
                        j = -1;
                        var k = d.keys(i).length;
                        for (var n in i) {
                          j++;
                          var o = i[n];
                          c.set("key", n),
                            c.set("related", o),
                            c.set("loop.index", j + 1),
                            c.set("loop.index0", j),
                            c.set("loop.revindex", k - j),
                            c.set("loop.revindex0", k - j - 1),
                            c.set("loop.first", 0 === j),
                            c.set("loop.last", j === k - 1),
                            c.set("loop.length", k),
                            (h += "\n            "),
                            "related_1" != n &&
                              ((h +=
                                '\n                <article class="module-related-article">\n                    <a href="'),
                              (h += d.suppressValue(
                                d.memberLookup(o, "link", a.opts.autoescape),
                                a.opts.autoescape
                              )),
                              (h +=
                                '" class="tracked-offpage" data-track-category="Related" data-track-action="Tap Related Story" data-track-label="'),
                              (h += d.suppressValue(n, a.opts.autoescape)),
                              (h += " | "),
                              (h += d.suppressValue(
                                d.memberLookup(o, "link", a.opts.autoescape),
                                a.opts.autoescape
                              )),
                              (h += '">'),
                              (h += d.suppressValue(
                                d.memberLookup(o, "title", a.opts.autoescape),
                                a.opts.autoescape
                              )),
                              (h +=
                                "</a>\n                </article>\n            ")),
                            (h += "\n        ");
                        }
                      }
                    }
                    (c = c.pop()), (h += "\n    </aside>\n");
                  }
                  e(null, h);
                } catch (p) {
                  e(d.handleError(p, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_single-content.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<section class="module-single-content row main-bg '),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "component_css_class"),
                      a.opts.autoescape
                    )),
                    (h +=
                      '">\n    <div class="container-medium row">\n        <div class="module-single-content-title-card">\n            <div class="module-single-content-title-card-content">\n                <header>\n                    <h2 class="color-theme-hed">'),
                    (h += d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "options",
                            a.opts.autoescape
                          ),
                          "pinned",
                          a.opts.autoescape
                        ),
                        0,
                        a.opts.autoescape
                      ),
                      "title",
                      a.opts.autoescape
                    )
                      ? d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.memberLookup(
                                  d.contextOrFrameLookup(b, c, "component"),
                                  "options",
                                  a.opts.autoescape
                                ),
                                "pinned",
                                a.opts.autoescape
                              ),
                              0,
                              a.opts.autoescape
                            ),
                            "title",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )
                      : d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "component"),
                                "content",
                                a.opts.autoescape
                              ),
                              0,
                              a.opts.autoescape
                            ),
                            "short_title",
                            a.opts.autoescape
                          )
                            ? d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    d.contextOrFrameLookup(b, c, "component"),
                                    "content",
                                    a.opts.autoescape
                                  ),
                                  0,
                                  a.opts.autoescape
                                ),
                                "short_title",
                                a.opts.autoescape
                              )
                            : d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    d.contextOrFrameLookup(b, c, "component"),
                                    "content",
                                    a.opts.autoescape
                                  ),
                                  0,
                                  a.opts.autoescape
                                ),
                                "title",
                                a.opts.autoescape
                              ),
                          a.opts.autoescape
                        )),
                    (h += "</h2>\n                </header>\n                "),
                    (h += '\n                <a href="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "content",
                            a.opts.autoescape
                          ),
                          0,
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" class="tracked-onpage color-theme-cta" title="View Full Content" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Featured Content | '),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "loop"),
                        "index",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += " | "),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "content",
                            a.opts.autoescape
                          ),
                          0,
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '">\n                    ');
                  var i;
                  if (
                    ((i = ""),
                    c.set("videoclass", i, !0),
                    c.parent ||
                      (b.setVariable("videoclass", i),
                      b.addExport("videoclass")),
                    d.memberLookup(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "options",
                        a.opts.autoescape
                      ),
                      "cta",
                      a.opts.autoescape
                    ))
                  )
                    h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "options",
                          a.opts.autoescape
                        ),
                        "cta",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    );
                  else if (
                    "gallery" ==
                    d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "content",
                          a.opts.autoescape
                        ),
                        0,
                        a.opts.autoescape
                      ),
                      "ContentType",
                      a.opts.autoescape
                    )
                  )
                    h += "View Gallery\n                    ";
                  else {
                    h += "\n                        ";
                    var j;
                    (j = "Read More"),
                      c.set("cta", j, !0),
                      c.parent || (b.setVariable("cta", j), b.addExport("cta")),
                      (h += "\n                        "),
                      (c = c.push());
                    var k = d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "content",
                            a.opts.autoescape
                          ),
                          0,
                          a.opts.autoescape
                        ),
                        "mappedTags",
                        a.opts.autoescape
                      ),
                      "editorial",
                      a.opts.autoescape
                    );
                    if (k)
                      for (var l = k.length, m = 0; m < k.length; m++) {
                        var n = k[m];
                        if (
                          (c.set("tag", n),
                          c.set("loop.index", m + 1),
                          c.set("loop.index0", m),
                          c.set("loop.revindex", l - m),
                          c.set("loop.revindex0", l - m - 1),
                          c.set("loop.first", 0 === m),
                          c.set("loop.last", m === l - 1),
                          c.set("loop.length", l),
                          (h += "\n                            "),
                          "/celebrity-video" ==
                            d.memberLookup(n, "slug", a.opts.autoescape))
                        ) {
                          h += "\n                                ";
                          var o;
                          (o = "Watch"),
                            c.set("cta", o, !0),
                            c.parent ||
                              (b.setVariable("cta", o), b.addExport("cta")),
                            (h += "\n                                ");
                          var p;
                          (p = "icon-play"),
                            c.set("videoclass", p, !0),
                            c.parent ||
                              (b.setVariable("videoclass", p),
                              b.addExport("videoclass")),
                            (h += "\n                            ");
                        }
                        h += "\n                        ";
                      }
                    (c = c.pop()),
                      (h += "\n                        "),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "cta"),
                        a.opts.autoescape
                      ));
                  }
                  (h +=
                    '</a>\n            </div>\n        </div>\n        <div class="module-single-content-cover"'),
                    "brightcove" ==
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.memberLookup(
                                  d.contextOrFrameLookup(b, c, "component"),
                                  "content",
                                  a.opts.autoescape
                                ),
                                0,
                                a.opts.autoescape
                              ),
                              "data",
                              a.opts.autoescape
                            ),
                            "media",
                            a.opts.autoescape
                          ),
                          "lead",
                          a.opts.autoescape
                        ),
                        "provider",
                        a.opts.autoescape
                      ) &&
                      ((h += 'data-video="'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(
                                    d.contextOrFrameLookup(b, c, "component"),
                                    "content",
                                    a.opts.autoescape
                                  ),
                                  0,
                                  a.opts.autoescape
                                ),
                                "data",
                                a.opts.autoescape
                              ),
                              "media",
                              a.opts.autoescape
                            ),
                            "lead",
                            a.opts.autoescape
                          ),
                          "id",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += '" data-cover="'),
                      (h += d.suppressValue(
                        a
                          .getFilter("escape")
                          .call(
                            b,
                            a
                              .getFilter("stringify")
                              .call(
                                b,
                                d.memberLookup(
                                  d.memberLookup(
                                    d.memberLookup(
                                      d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "component"
                                        ),
                                        "content",
                                        a.opts.autoescape
                                      ),
                                      0,
                                      a.opts.autoescape
                                    ),
                                    "data",
                                    a.opts.autoescape
                                  ),
                                  "media",
                                  a.opts.autoescape
                                )
                              )
                          ),
                        a.opts.autoescape
                      )),
                      (h += '"')),
                    (h += ">\n            "),
                    "Video" ==
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentItem"),
                              "data",
                              a.opts.autoescape
                            ),
                            "media",
                            a.opts.autoescape
                          ),
                          "lead",
                          a.opts.autoescape
                        ),
                        "type",
                        a.opts.autoescape
                      ) &&
                      "brightcove" ==
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "contentItem"),
                                "data",
                                a.opts.autoescape
                              ),
                              "media",
                              a.opts.autoescape
                            ),
                            "lead",
                            a.opts.autoescape
                          ),
                          "provider",
                          a.opts.autoescape
                        ) &&
                      ((h += '\n                <span class="'),
                      (h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "videoclass"),
                        a.opts.autoescape
                      )),
                      (h += '"></span>\n            ')),
                    (h += '\n\n            <a href="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "content",
                            a.opts.autoescape
                          ),
                          0,
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" class="tracked-onpage color-theme-cta" title="View Full Content" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Featured Content | '),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "loop"),
                        "index",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += " | "),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "content",
                            a.opts.autoescape
                          ),
                          0,
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '">\n            <img src="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "mediaRoot",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += d.suppressValue(
                      a
                        .getFilter("imgsrc")
                        .call(
                          b,
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.memberLookup(
                                  d.contextOrFrameLookup(b, c, "component"),
                                  "content",
                                  a.opts.autoescape
                                ),
                                0,
                                a.opts.autoescape
                              ),
                              "data",
                              a.opts.autoescape
                            ),
                            "media",
                            a.opts.autoescape
                          ),
                          "featured"
                        ),
                      a.opts.autoescape
                    )),
                    (h += '" alt="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "component"),
                          "content",
                          a.opts.autoescape
                        ),
                        "title",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" />\n            </a>\n        </div>\n    </div>\n</section>'),
                    e(null, h);
                } catch (q) {
                  e(d.handleError(q, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_social-sharing.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  h += '<aside class="module-social-sharing">\n    ';
                  var i;
                  (i = d.memberLookup(
                    d.contextOrFrameLookup(b, c, "contentData"),
                    "slug",
                    a.opts.autoescape
                  )),
                    c.set("sharePath", i, !0),
                    c.parent ||
                      (b.setVariable("sharePath", i), b.addExport("sharePath")),
                    (h += "\n    ");
                  var j;
                  if (
                    ((j =
                      "http://" +
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "host",
                        a.opts.autoescape
                      ) +
                      d.contextOrFrameLookup(b, c, "sharePath")),
                    c.set("shareUrl", j, !0),
                    c.parent ||
                      (b.setVariable("shareUrl", j), b.addExport("shareUrl")),
                    (h += "\n    "),
                    a
                      .getFilter("empty")
                      .call(
                        b,
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "bitly",
                          a.opts.autoescape
                        )
                      ))
                  )
                    if (
                      a
                        .getFilter("empty")
                        .call(
                          b,
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "items"),
                              0,
                              a.opts.autoescape
                            ),
                            "bitly",
                            a.opts.autoescape
                          )
                        )
                    ) {
                      h += "\n        ";
                      var k;
                      (k = d.contextOrFrameLookup(b, c, "shareUrl")),
                        c.set("twitterUrl", k, !0),
                        c.parent ||
                          (b.setVariable("twitterUrl", k),
                          b.addExport("twitterUrl")),
                        (h += "\n    ");
                    } else {
                      h += "\n        ";
                      var l;
                      (l = d.memberLookup(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "items"),
                          0,
                          a.opts.autoescape
                        ),
                        "bitly",
                        a.opts.autoescape
                      )),
                        c.set("twitterUrl", l, !0),
                        c.parent ||
                          (b.setVariable("twitterUrl", l),
                          b.addExport("twitterUrl")),
                        (h += "\n    ");
                    }
                  else {
                    h += "\n        ";
                    var m;
                    (m = d.memberLookup(
                      d.contextOrFrameLookup(b, c, "contentData"),
                      "bitly",
                      a.opts.autoescape
                    )),
                      c.set("twitterUrl", m, !0),
                      c.parent ||
                        (b.setVariable("twitterUrl", m),
                        b.addExport("twitterUrl")),
                      (h += "\n    ");
                  }
                  if (
                    ((h += "\n\n    "),
                    !d.contextOrFrameLookup(b, c, "sharingPosition"))
                  ) {
                    h += "\n        ";
                    var n;
                    (n = "top"),
                      c.set("sharingPosition", n, !0),
                      c.parent ||
                        (b.setVariable("sharingPosition", n),
                        b.addExport("sharingPosition")),
                      (h += "\n        "),
                      (h += "\n    ");
                  }
                  if (
                    ((h += "\n    "),
                    "image" == d.contextOrFrameLookup(b, c, "sharingPosition"))
                  ) {
                    h += "\n        ";
                    var o;
                    if (
                      ((o =
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "title",
                          a.opts.autoescape
                        ) +
                        ": " +
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "item"),
                          "title",
                          a.opts.autoescape
                        )),
                      c.set("twitterText", o, !0),
                      c.parent ||
                        (b.setVariable("twitterText", o),
                        b.addExport("twitterText")),
                      (h += "\n        "),
                      !a
                        .getFilter("empty")
                        .call(
                          b,
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "item"),
                            "bitly",
                            a.opts.autoescape
                          )
                        ))
                    ) {
                      h += "\n            ";
                      var p;
                      (p = d.memberLookup(
                        d.contextOrFrameLookup(b, c, "item"),
                        "bitly",
                        a.opts.autoescape
                      )),
                        c.set("twitterUrl", p, !0),
                        c.parent ||
                          (b.setVariable("twitterUrl", p),
                          b.addExport("twitterUrl")),
                        (h += "\n        ");
                    }
                    h += "\n    ";
                  }
                  (h +=
                    '\n\n    <a class="social-icon social-icon-facebook tracked-onpage" href="'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "shareUrl"),
                      a.opts.autoescape
                    )),
                    (h += '" data-track-category="'),
                    (h += d.suppressValue(
                      a
                        .getFilter("title")
                        .call(
                          b,
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "contentData"),
                            "contentType",
                            a.opts.autoescape
                          )
                        ),
                      a.opts.autoescape
                    )),
                    (h +=
                      ' Page" data-track-action="Share FB" data-track-label="'),
                    (h += d.suppressValue(
                      a
                        .getFilter("title")
                        .call(
                          b,
                          d.contextOrFrameLookup(b, c, "sharingPosition")
                        ),
                      a.opts.autoescape
                    )),
                    (h += '">'),
                    a.getTemplate(
                      "svg/_icon-facebook.html.twig",
                      !1,
                      "partials/_social-sharing.html.twig",
                      function (f, g) {
                        return f
                          ? void e(f)
                          : void g.render(b.getVariables(), c.push(), function (
                              f,
                              g
                            ) {
                              return f
                                ? void e(f)
                                : ((h += g),
                                  (h +=
                                    '</a>\n    <a class="social-icon social-icon-twitter tracked-onpage" href="'),
                                  (h += d.suppressValue(
                                    d.contextOrFrameLookup(b, c, "twitterUrl"),
                                    a.opts.autoescape
                                  )),
                                  (h += '" data-tweet-text="'),
                                  (h += d.contextOrFrameLookup(
                                    b,
                                    c,
                                    "twitterText"
                                  )
                                    ? d.suppressValue(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "twitterText"
                                        ),
                                        a.opts.autoescape
                                      )
                                    : d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "contentData"
                                        ),
                                        "shortTitle",
                                        a.opts.autoescape
                                      )
                                    ? d.suppressValue(
                                        a
                                          .getFilter("escape")
                                          .call(
                                            b,
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "shortTitle",
                                              a.opts.autoescape
                                            )
                                          ),
                                        a.opts.autoescape
                                      )
                                    : d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "contentData"
                                        ),
                                        "metaTitle",
                                        a.opts.autoescape
                                      )
                                    ? d.suppressValue(
                                        a
                                          .getFilter("escape")
                                          .call(
                                            b,
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "metaTitle",
                                              a.opts.autoescape
                                            )
                                          ),
                                        a.opts.autoescape
                                      )
                                    : d.suppressValue(
                                        a
                                          .getFilter("escape")
                                          .call(
                                            b,
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "title",
                                              a.opts.autoescape
                                            )
                                          ),
                                        a.opts.autoescape
                                      )),
                                  (h += '" data-tweet-via="'),
                                  (h += d.suppressValue(
                                    d.memberLookup(
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "globals"
                                          ),
                                          "social",
                                          a.opts.autoescape
                                        ),
                                        "twitter",
                                        a.opts.autoescape
                                      ),
                                      "account",
                                      a.opts.autoescape
                                    ),
                                    a.opts.autoescape
                                  )),
                                  (h += '" data-track-category="'),
                                  (h += d.suppressValue(
                                    d.memberLookup(
                                      d.contextOrFrameLookup(
                                        b,
                                        c,
                                        "contentData"
                                      ),
                                      "contentType",
                                      a.opts.autoescape
                                    ),
                                    a.opts.autoescape
                                  )),
                                  (h +=
                                    ' Page" data-track-action="Share Twitter" data-track-label="'),
                                  (h += d.suppressValue(
                                    a
                                      .getFilter("title")
                                      .call(
                                        b,
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "sharingPosition"
                                        )
                                      ),
                                    a.opts.autoescape
                                  )),
                                  (h += '">'),
                                  void a.getTemplate(
                                    "svg/_icon-twitter.html.twig",
                                    !1,
                                    "partials/_social-sharing.html.twig",
                                    function (f, g) {
                                      return f
                                        ? void e(f)
                                        : void g.render(
                                            b.getVariables(),
                                            c.push(),
                                            function (f, g) {
                                              return f
                                                ? void e(f)
                                                : ((h += g),
                                                  (h +=
                                                    '</a>\n    <a class="social-icon social-icon-pinterest tracked-onpage" href="'),
                                                  (h += d.suppressValue(
                                                    d.contextOrFrameLookup(
                                                      b,
                                                      c,
                                                      "shareUrl"
                                                    ),
                                                    a.opts.autoescape
                                                  )),
                                                  (h +=
                                                    '" data-track-category="'),
                                                  (h += d.suppressValue(
                                                    a
                                                      .getFilter("title")
                                                      .call(
                                                        b,
                                                        d.memberLookup(
                                                          d.contextOrFrameLookup(
                                                            b,
                                                            c,
                                                            "contentData"
                                                          ),
                                                          "contentType",
                                                          a.opts.autoescape
                                                        )
                                                      ),
                                                    a.opts.autoescape
                                                  )),
                                                  (h +=
                                                    ' Page" data-track-action="Share Pinterest" data-track-label="'),
                                                  (h += d.suppressValue(
                                                    a
                                                      .getFilter("title")
                                                      .call(
                                                        b,
                                                        d.contextOrFrameLookup(
                                                          b,
                                                          c,
                                                          "sharingPosition"
                                                        )
                                                      ),
                                                    a.opts.autoescape
                                                  )),
                                                  (h += '">'),
                                                  void a.getTemplate(
                                                    "svg/_icon-pinterest.html.twig",
                                                    !1,
                                                    "partials/_social-sharing.html.twig",
                                                    function (f, g) {
                                                      return f
                                                        ? void e(f)
                                                        : void g.render(
                                                            b.getVariables(),
                                                            c.push(),
                                                            function (f, g) {
                                                              return f
                                                                ? void e(f)
                                                                : ((h += g),
                                                                  (h +=
                                                                    '</a>\n    <a class="social-icon social-icon-google-plus tracked-onpage" href="'),
                                                                  (h += d.suppressValue(
                                                                    d.contextOrFrameLookup(
                                                                      b,
                                                                      c,
                                                                      "shareUrl"
                                                                    ),
                                                                    a.opts
                                                                      .autoescape
                                                                  )),
                                                                  (h +=
                                                                    '" data-track-category="'),
                                                                  (h += d.suppressValue(
                                                                    a
                                                                      .getFilter(
                                                                        "title"
                                                                      )
                                                                      .call(
                                                                        b,
                                                                        d.memberLookup(
                                                                          d.contextOrFrameLookup(
                                                                            b,
                                                                            c,
                                                                            "contentData"
                                                                          ),
                                                                          "contentType",
                                                                          a.opts
                                                                            .autoescape
                                                                        )
                                                                      ),
                                                                    a.opts
                                                                      .autoescape
                                                                  )),
                                                                  (h +=
                                                                    ' Page" data-track-action="Share G+" data-track-label="'),
                                                                  (h += d.suppressValue(
                                                                    a
                                                                      .getFilter(
                                                                        "title"
                                                                      )
                                                                      .call(
                                                                        b,
                                                                        d.contextOrFrameLookup(
                                                                          b,
                                                                          c,
                                                                          "sharingPosition"
                                                                        )
                                                                      ),
                                                                    a.opts
                                                                      .autoescape
                                                                  )),
                                                                  (h += '">'),
                                                                  void a.getTemplate(
                                                                    "svg/_icon-google-plus.html.twig",
                                                                    !1,
                                                                    "partials/_social-sharing.html.twig",
                                                                    function (
                                                                      f,
                                                                      g
                                                                    ) {
                                                                      return f
                                                                        ? void e(
                                                                            f
                                                                          )
                                                                        : void g.render(
                                                                            b.getVariables(),
                                                                            c.push(),
                                                                            function (
                                                                              f,
                                                                              g
                                                                            ) {
                                                                              return f
                                                                                ? void e(
                                                                                    f
                                                                                  )
                                                                                : ((h += g),
                                                                                  (h +=
                                                                                    '</a>\n    <a class="social-icon social-icon-email tracked-onpage" href="mailto:?to=&subject=Check this out on '),
                                                                                  (h += d.suppressValue(
                                                                                    d.memberLookup(
                                                                                      d.contextOrFrameLookup(
                                                                                        b,
                                                                                        c,
                                                                                        "globals"
                                                                                      ),
                                                                                      "protocol",
                                                                                      a
                                                                                        .opts
                                                                                        .autoescape
                                                                                    ),
                                                                                    a
                                                                                      .opts
                                                                                      .autoescape
                                                                                  )),
                                                                                  (h += d.suppressValue(
                                                                                    d.memberLookup(
                                                                                      d.contextOrFrameLookup(
                                                                                        b,
                                                                                        c,
                                                                                        "globals"
                                                                                      ),
                                                                                      "host",
                                                                                      a
                                                                                        .opts
                                                                                        .autoescape
                                                                                    ),
                                                                                    a
                                                                                      .opts
                                                                                      .autoescape
                                                                                  )),
                                                                                  (h +=
                                                                                    "!&body=Hey, I saw this on "),
                                                                                  (h += d.suppressValue(
                                                                                    d.memberLookup(
                                                                                      d.contextOrFrameLookup(
                                                                                        b,
                                                                                        c,
                                                                                        "globals"
                                                                                      ),
                                                                                      "protocol",
                                                                                      a
                                                                                        .opts
                                                                                        .autoescape
                                                                                    ),
                                                                                    a
                                                                                      .opts
                                                                                      .autoescape
                                                                                  )),
                                                                                  (h += d.suppressValue(
                                                                                    d.memberLookup(
                                                                                      d.contextOrFrameLookup(
                                                                                        b,
                                                                                        c,
                                                                                        "globals"
                                                                                      ),
                                                                                      "host",
                                                                                      a
                                                                                        .opts
                                                                                        .autoescape
                                                                                    ),
                                                                                    a
                                                                                      .opts
                                                                                      .autoescape
                                                                                  )),
                                                                                  (h +=
                                                                                    " and thought youâ€™d be interested in it.%0D%0A%0D%0A"),
                                                                                  (h += d.suppressValue(
                                                                                    d.contextOrFrameLookup(
                                                                                      b,
                                                                                      c,
                                                                                      "shareUrl"
                                                                                    ),
                                                                                    a
                                                                                      .opts
                                                                                      .autoescape
                                                                                  )),
                                                                                  (h +=
                                                                                    '" data-track-category="'),
                                                                                  (h += d.suppressValue(
                                                                                    a
                                                                                      .getFilter(
                                                                                        "title"
                                                                                      )
                                                                                      .call(
                                                                                        b,
                                                                                        d.memberLookup(
                                                                                          d.contextOrFrameLookup(
                                                                                            b,
                                                                                            c,
                                                                                            "contentData"
                                                                                          ),
                                                                                          "contentType",
                                                                                          a
                                                                                            .opts
                                                                                            .autoescape
                                                                                        )
                                                                                      ),
                                                                                    a
                                                                                      .opts
                                                                                      .autoescape
                                                                                  )),
                                                                                  (h +=
                                                                                    ' Page" data-track-action="Share Email" data-track-label="'),
                                                                                  (h += d.suppressValue(
                                                                                    a
                                                                                      .getFilter(
                                                                                        "title"
                                                                                      )
                                                                                      .call(
                                                                                        b,
                                                                                        d.contextOrFrameLookup(
                                                                                          b,
                                                                                          c,
                                                                                          "sharingPosition"
                                                                                        )
                                                                                      ),
                                                                                    a
                                                                                      .opts
                                                                                      .autoescape
                                                                                  )),
                                                                                  (h +=
                                                                                    '">'),
                                                                                  void a.getTemplate(
                                                                                    "svg/_icon-email.html.twig",
                                                                                    !1,
                                                                                    "partials/_social-sharing.html.twig",
                                                                                    function (
                                                                                      f,
                                                                                      g
                                                                                    ) {
                                                                                      return f
                                                                                        ? void e(
                                                                                            f
                                                                                          )
                                                                                        : void g.render(
                                                                                            b.getVariables(),
                                                                                            c.push(),
                                                                                            function (
                                                                                              f,
                                                                                              g
                                                                                            ) {
                                                                                              return f
                                                                                                ? void e(
                                                                                                    f
                                                                                                  )
                                                                                                : ((h += g),
                                                                                                  (h +=
                                                                                                    "</a>\n\n    "),
                                                                                                  "bottom" ==
                                                                                                    d.contextOrFrameLookup(
                                                                                                      b,
                                                                                                      c,
                                                                                                      "sharingPosition"
                                                                                                    ) &&
                                                                                                    ((h +=
                                                                                                      '\n		<a class="social-comments tracked-onpage" href="#comment" data-track-category="'),
                                                                                                    (h += d.suppressValue(
                                                                                                      a
                                                                                                        .getFilter(
                                                                                                          "title"
                                                                                                        )
                                                                                                        .call(
                                                                                                          b,
                                                                                                          d.memberLookup(
                                                                                                            d.contextOrFrameLookup(
                                                                                                              b,
                                                                                                              c,
                                                                                                              "contentData"
                                                                                                            ),
                                                                                                            "contentType",
                                                                                                            a
                                                                                                              .opts
                                                                                                              .autoescape
                                                                                                          )
                                                                                                        ),
                                                                                                      a
                                                                                                        .opts
                                                                                                        .autoescape
                                                                                                    )),
                                                                                                    (h +=
                                                                                                      ' Page" data-track-action="Open Comments">'),
                                                                                                    a.getTemplate(
                                                                                                      "svg/_icon-comment.html.twig",
                                                                                                      !1,
                                                                                                      "partials/_social-sharing.html.twig",
                                                                                                      function (
                                                                                                        a,
                                                                                                        d
                                                                                                      ) {
                                                                                                        return a
                                                                                                          ? void e(
                                                                                                              a
                                                                                                            )
                                                                                                          : void d.render(
                                                                                                              b.getVariables(),
                                                                                                              c.push(),
                                                                                                              function (
                                                                                                                a,
                                                                                                                b
                                                                                                              ) {
                                                                                                                return a
                                                                                                                  ? void e(
                                                                                                                      a
                                                                                                                    )
                                                                                                                  : ((h += b),
                                                                                                                    void (h +=
                                                                                                                      "Comment</a>\n    "));
                                                                                                              }
                                                                                                            );
                                                                                                      }
                                                                                                    )),
                                                                                                  (h +=
                                                                                                    "\n</aside>"),
                                                                                                  void e(
                                                                                                    null,
                                                                                                    h
                                                                                                  ));
                                                                                            }
                                                                                          );
                                                                                    }
                                                                                  ));
                                                                            }
                                                                          );
                                                                    }
                                                                  ));
                                                            }
                                                          );
                                                    }
                                                  ));
                                            }
                                          );
                                    }
                                  ));
                            });
                      }
                    );
                } catch (q) {
                  e(d.handleError(q, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_video-content.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  var i;
                  if (
                    ((i = d.memberLookup(
                      d.contextOrFrameLookup(b, c, "contentData"),
                      "short_title",
                      a.opts.autoescape
                    )
                      ? d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "short_title",
                          a.opts.autoescape
                        )
                      : d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "title",
                          a.opts.autoescape
                        )),
                    c.set("videoText", i, !0),
                    c.parent ||
                      (b.setVariable("videoText", i), b.addExport("videoText")),
                    (h +=
                      '\n<div class="module-video-player-content">\n    <a href="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" class="module-video-player-cover" data-video-text="'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "videoText"),
                      a.opts.autoescape
                    )),
                    (h += '" '),
                    d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "contentData"),
                            "data",
                            a.opts.autoescape
                          ),
                          "media",
                          a.opts.autoescape
                        ),
                        "lead",
                        a.opts.autoescape
                      ),
                      "id",
                      a.opts.autoescape
                    ) &&
                      ((h += 'data-video="'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.memberLookup(
                            d.memberLookup(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "contentData"),
                                "data",
                                a.opts.autoescape
                              ),
                              "media",
                              a.opts.autoescape
                            ),
                            "lead",
                            a.opts.autoescape
                          ),
                          "id",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += '"')),
                    (h += ' data-cover="'),
                    (h += d.suppressValue(
                      a
                        .getFilter("escape")
                        .call(
                          b,
                          a
                            .getFilter("stringify")
                            .call(
                              b,
                              d.memberLookup(
                                d.memberLookup(
                                  d.contextOrFrameLookup(b, c, "contentData"),
                                  "data",
                                  a.opts.autoescape
                                ),
                                "media",
                                a.opts.autoescape
                              )
                            )
                        ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Video Playlist | '),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "loop"),
                        "index",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += " | "),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "content",
                            a.opts.autoescape
                          ),
                          0,
                          a.opts.autoescape
                        ),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '">\n        <div class="module-video-player-cover-cover"><div class="module-video-player-button"></div></div>\n        <img src="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "globals"),
                        "mediaRoot",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += d.suppressValue(
                      a
                        .getFilter("imgsrc")
                        .call(
                          b,
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "data",
                              a.opts.autoescape
                            ),
                            "media",
                            a.opts.autoescape
                          ),
                          "featured-promo-724"
                        ),
                      a.opts.autoescape
                    )),
                    (h += '" />\n        <h3>'),
                    (h += d.suppressValue(
                      d.contextOrFrameLookup(b, c, "videoText"),
                      a.opts.autoescape
                    )),
                    (h += "</h3>\n    </a>\n    "),
                    !d.memberLookup(
                      d.contextOrFrameLookup(b, c, "loop"),
                      "first",
                      a.opts.autoescape
                    ))
                  ) {
                    h +=
                      '\n    <div class="module-video-player-embed">\n        ';
                    var j;
                    (j = d.contextOrFrameLookup(b, c, "contentData")),
                      c.set("videoData", j, !0),
                      c.parent ||
                        (b.setVariable("videoData", j),
                        b.addExport("videoData")),
                      (h += "\n        ");
                    var k;
                    (k = d.memberLookup(
                      d.contextOrFrameLookup(b, c, "contentData"),
                      "autoPlay",
                      a.opts.autoescape
                    )
                      ? d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "autoPlay",
                          a.opts.autoescape
                        )
                      : !1),
                      c.set("videoAuto", k, !0),
                      c.parent ||
                        (b.setVariable("videoAuto", k),
                        b.addExport("videoAuto")),
                      (h += "\n        "),
                      a.getTemplate(
                        "partials/_brightcove.html.twig",
                        !1,
                        "partials/_video-content.html.twig",
                        function (a, d) {
                          return a
                            ? void e(a)
                            : void d.render(
                                b.getVariables(),
                                c.push(),
                                function (a, b) {
                                  return a
                                    ? void e(a)
                                    : ((h += b),
                                      void (h += "\n    </div>\n    "));
                                }
                              );
                        }
                      );
                  }
                  (h += "\n</div>\n"), e(null, h);
                } catch (l) {
                  e(d.handleError(l, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_video.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<section class="module-video '),
                    d.contextOrFrameLookup(b, c, "component_css_class") &&
                      ((h += d.suppressValue(
                        d.contextOrFrameLookup(b, c, "component_css_class"),
                        a.opts.autoescape
                      )),
                      (h += " ")),
                    (h +=
                      'row">\n    <div class="container-medium row">\n        <div class="module-video-player">\n            '),
                    d.memberLookup(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "options",
                        a.opts.autoescape
                      ),
                      "title",
                      a.opts.autoescape
                    )
                      ? ((h +=
                          '\n                <h2 class="color-theme-secondary">'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "component"),
                              "options",
                              a.opts.autoescape
                            ),
                            "title",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += "</h2>\n            "))
                      : (h +=
                          '\n                <h2 class="color-theme-secondary">Watch With Us</h2>\n            '),
                    (h += "\n            "),
                    (c = c.push());
                  var i = d.memberLookup(
                    d.contextOrFrameLookup(b, c, "component"),
                    "content",
                    a.opts.autoescape
                  );
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("contentData", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h += "\n                "),
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "loop"),
                          "first",
                          a.opts.autoescape
                        ) &&
                          ((h += "\n                "),
                          a.getTemplate(
                            "partials/_video-content.html.twig",
                            !1,
                            "partials/_video.html.twig",
                            function (a, d) {
                              return a
                                ? void e(a)
                                : void d.render(
                                    b.getVariables(),
                                    c.push(),
                                    function (a, b) {
                                      return a
                                        ? void e(a)
                                        : ((h += b),
                                          void (h += "\n                "));
                                    }
                                  );
                            }
                          )),
                        (h += "\n            ");
                    }
                  (c = c.pop()),
                    (h +=
                      '\n        </div>\n        <aside class="module-video-next">\n            <h3 class="color-theme-secondary">Next Up</h3>\n            <ul>\n                '),
                    (c = c.push());
                  var m = d.memberLookup(
                    d.contextOrFrameLookup(b, c, "component"),
                    "content",
                    a.opts.autoescape
                  );
                  if (m)
                    for (var n = m.length, o = 0; o < m.length; o++) {
                      var p = m[o];
                      if (
                        (c.set("contentItem", p),
                        c.set("loop.index", o + 1),
                        c.set("loop.index0", o),
                        c.set("loop.revindex", n - o),
                        c.set("loop.revindex0", n - o - 1),
                        c.set("loop.first", 0 === o),
                        c.set("loop.last", o === n - 1),
                        c.set("loop.length", n),
                        (h += "\n                    "),
                        !d.memberLookup(
                          d.contextOrFrameLookup(b, c, "loop"),
                          "first",
                          a.opts.autoescape
                        ))
                      ) {
                        h += "\n                    ";
                        var q;
                        (q = d.memberLookup(p, "short_title", a.opts.autoescape)
                          ? d.memberLookup(p, "short_title", a.opts.autoescape)
                          : d.memberLookup(p, "title", a.opts.autoescape)),
                          c.set("videoText", q, !0),
                          c.parent ||
                            (b.setVariable("videoText", q),
                            b.addExport("videoText")),
                          (h +=
                            '\n                    <li>\n                        <a href="'),
                          (h += d.suppressValue(
                            d.memberLookup(p, "slug", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h +=
                            '" class="tracked-onpage module-video-link" data-track-category="Module" data-track-action="Tap Module Link" data-track-label="Video Playlist | '),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "loop"),
                              "index",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += " | "),
                          (h += d.suppressValue(
                            d.memberLookup(p, "slug", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h += '" data-video-text="'),
                          (h += d.suppressValue(
                            d.contextOrFrameLookup(b, c, "videoText"),
                            a.opts.autoescape
                          )),
                          (h += '" data-video="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.memberLookup(
                                d.memberLookup(
                                  d.memberLookup(p, "data", a.opts.autoescape),
                                  "media",
                                  a.opts.autoescape
                                ),
                                "lead",
                                a.opts.autoescape
                              ),
                              "id",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += '" data-cover="'),
                          (h += d.suppressValue(
                            a
                              .getFilter("escape")
                              .call(
                                b,
                                a
                                  .getFilter("stringify")
                                  .call(
                                    b,
                                    d.memberLookup(
                                      d.memberLookup(
                                        p,
                                        "data",
                                        a.opts.autoescape
                                      ),
                                      "media",
                                      a.opts.autoescape
                                    )
                                  )
                              ),
                            a.opts.autoescape
                          )),
                          (h +=
                            '">\n                            <div class="module-video-next-img"><img src="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "mediaRoot",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += d.suppressValue(
                            a
                              .getFilter("imgsrc")
                              .call(
                                b,
                                d.memberLookup(
                                  d.memberLookup(p, "data", a.opts.autoescape),
                                  "media",
                                  a.opts.autoescape
                                ),
                                "featured-promo-140"
                              ),
                            a.opts.autoescape
                          )),
                          (h +=
                            '" /></div>\n                            <p class="module-video-next-title"><span>'),
                          (h += d.suppressValue(
                            d.contextOrFrameLookup(b, c, "videoText"),
                            a.opts.autoescape
                          )),
                          (h +=
                            "</span></p>\n                        </a>\n                    </li>\n                    ");
                      }
                      h += "\n                ";
                    }
                  (c = c.pop()),
                    (h +=
                      "\n            </ul>\n        </aside>\n    </div>\n</section>"),
                    e(null, h);
                } catch (r) {
                  e(d.handleError(r, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "partials/_zergnet.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    "<section class=\"module-partners\">\n    <div class=\"module-partners-container clearfix\">\n        <div class=\"zergnet-widget\"></div>\n    </div>\n</section>\n<script language=\"javascript\" type=\"text/javascript\">\n    (function() {\n        var zergnet = document.createElement('script');\n        zergnet.type = 'text/javascript'; zergnet.async = true;\n        zergnet.src = 'http://www.zergnet.com/zerg-inf.js?id=35196';\n        var znscr = document.getElementsByTagName('script')[0];\n        znscr.parentNode.insertBefore(zergnet, znscr);\n    })();\n    jQuery(function(){\n        var $ = jQuery\n        $('body').on('click','.zergnet-widget a', function(){\n            var $link = jQuery(this)\n            var position = $link.parents('.zergnet-widget').find('a').index($link);\n            var url = $link.attr('href')\n            \n            dataLayer.push({\n                'event': 'gaEvent',\n                'gaEventCategory': 'module',\n                'gaEventAction': 'tap module link',\n                'gaEventLabel': 'Zergnet | '+position+' | ' +url,\n            });\n        })\n    })\n</script>\n\n"),
                    e(null, h);
                } catch (i) {
                  e(d.handleError(i, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "article-main.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h += '<article class="article-main '),
                    d.contextOrFrameLookup(b, c, "legacy") && (h += "legacy "),
                    (h +=
                      'scroll-item scroll-item-active scroll-bar-active" data-id="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "id",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '">\n    '),
                    (c = c.push());
                  var i = d.contextOrFrameLookup(b, c, "components");
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("component", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h += "\n        "),
                        "_ad" ==
                          d.memberLookup(
                            l,
                            "templateName",
                            a.opts.autoescape
                          ) &&
                          ((h += "\n            "),
                          a.getTemplate(
                            "partials/_ad.html.twig",
                            !1,
                            "article-main.html.twig",
                            function (a, d) {
                              return a
                                ? void e(a)
                                : void d.render(
                                    b.getVariables(),
                                    c.push(),
                                    function (a, b) {
                                      return a
                                        ? void e(a)
                                        : ((h += b), void (h += "\n        "));
                                    }
                                  );
                            }
                          )),
                        (h += "\n    ");
                    }
                  (c = c.pop()),
                    (h +=
                      '\n    <div class="ad-container" id="one-by-one-0"></div>\n    <div class="ad-slot banner">\n        <div class="ad">\n            <div class="ad-container" id="top-ad-slot-0"></div>\n        </div>\n    </div>\n    <div class="article-head container-medium">\n        <header>\n            ');
                  var m;
                  (m =
                    d.memberLookup(
                      d.memberLookup(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "contentData"),
                            "tags",
                            a.opts.autoescape
                          ),
                          "channel",
                          a.opts.autoescape
                        ),
                        0,
                        a.opts.autoescape
                      ),
                      "name",
                      a.opts.autoescape
                    ) || "News"),
                    c.set("articleType", m, !0),
                    c.parent ||
                      (b.setVariable("articleType", m),
                      b.addExport("articleType")),
                    (h += '\n            <p class="article-type">'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "labelData",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += "</p>\n            <h1>"),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "title",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '</h1>\n        </header>\n\n        <div class="article-info">\n            '),
                    d.memberLookup(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "sponsor",
                        a.opts.autoescape
                      ),
                      "check",
                      a.opts.autoescape
                    )
                      ? ((h +=
                          '\n                <div class="ad-sponsor"><div class="ad-container sponsor" id="sponsor-ad-slot-0"></div><div class = \'sponsor-link\'><div class = \'sponsor-label\'>'),
                        (h += a
                          .getFilter("empty")
                          .call(
                            b,
                            d.memberLookup(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "contentData"),
                                "sponsor",
                                a.opts.autoescape
                              ),
                              "label",
                              a.opts.autoescape
                            )
                          )
                          ? "Sponsored By"
                          : d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  d.contextOrFrameLookup(b, c, "contentData"),
                                  "sponsor",
                                  a.opts.autoescape
                                ),
                                "label",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                        (h += '</div><a class="article-sponsor" href="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "sponsor",
                              a.opts.autoescape
                            ),
                            "url",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += '">'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "sponsor",
                              a.opts.autoescape
                            ),
                            "name",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += "</a></div>            </div>\n            "))
                      : (h +=
                          '\n                <div class="ad-sponsor"><div class="ad-container-no-edit sponsor" id="sponsor-ad-slot-0"></div></div>\n            '),
                    (h += "\n            "),
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "contentData"),
                      "updated_publish_date",
                      a.opts.autoescape
                    )
                      ? ((h +=
                          '\n                <span class="article-updated-pub-date">\n                    <span class="txt-update">Updated:</span> <time class="article-published-date">'),
                        (h += d.suppressValue(
                          ((f = 27),
                          (g = 103),
                          d.callWrap(
                            d.contextOrFrameLookup(b, c, "date"),
                            "date",
                            [
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "contentData"),
                                "updated_publish_date",
                                a.opts.autoescape
                              ),
                              "F j, Y @ h:i A",
                            ]
                          )),
                          a.opts.autoescape
                        )),
                        (h += "</time>\n                </span>\n            "))
                      : ((h +=
                          '\n                <time class="article-published-date">'),
                        (h += d.suppressValue(
                          ((f = 30),
                          (g = 58),
                          d.callWrap(
                            d.contextOrFrameLookup(b, c, "date"),
                            "date",
                            [
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "contentData"),
                                "publish_date",
                                a.opts.autoescape
                              ),
                              "F j, Y @ h:i A",
                            ]
                          )),
                          a.opts.autoescape
                        )),
                        (h += "</time>\n            ")),
                    (h +=
                      '\n\n            <i class="text-by">/ By</i>\n            '),
                    (c = c.push());
                  var n = d.memberLookup(
                    d.contextOrFrameLookup(b, c, "contentData"),
                    "author",
                    a.opts.autoescape
                  );
                  if (n)
                    for (var o = n.length, p = 0; p < n.length; p++) {
                      var q = n[p];
                      c.set("author", q),
                        c.set("loop.index", p + 1),
                        c.set("loop.index0", p),
                        c.set("loop.revindex", o - p),
                        c.set("loop.revindex0", o - p - 1),
                        c.set("loop.first", 0 === p),
                        c.set("loop.last", p === o - 1),
                        c.set("loop.length", o),
                        (h +=
                          '\n            <a class="article-byline tracked-offpage" href="'),
                        (h += d.suppressValue(
                          d.memberLookup(q, "slug", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h +=
                          '" data-track-category="Article Page" data-track-action="Tap Byline" data-track-label="'),
                        (h += d.suppressValue(
                          d.memberLookup(q, "slug", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += '">'),
                        (h += d.suppressValue(
                          d.memberLookup(q, "name", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += "</a>"),
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "loop"),
                          "last",
                          a.opts.autoescape
                        ) || (h += ","),
                        (h += "\n            ");
                    }
                  (c = c.pop()), (h += "\n        </div>\n\n        ");
                  var r;
                  (r = ""),
                    c.set("sharingPosition", r, !0),
                    c.parent ||
                      (b.setVariable("sharingPosition", r),
                      b.addExport("sharingPosition")),
                    (h += "\n        "),
                    a.getTemplate(
                      "partials/_social-sharing.html.twig",
                      !1,
                      "article-main.html.twig",
                      function (i, j) {
                        return i
                          ? void e(i)
                          : void j.render(b.getVariables(), c.push(), function (
                              i,
                              j
                            ) {
                              if (i) return void e(i);
                              if (
                                ((h += j),
                                (h +=
                                  "\n    </div>\n    <!-- Need to add here featured image lead !-->\n    "),
                                d.memberLookup(
                                  d.memberLookup(
                                    d.contextOrFrameLookup(b, c, "contentData"),
                                    "media",
                                    a.opts.autoescape
                                  ),
                                  "lead",
                                  a.opts.autoescape
                                ) &&
                                  "Featured Image" ==
                                    d.memberLookup(
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "contentData"
                                          ),
                                          "media",
                                          a.opts.autoescape
                                        ),
                                        "lead",
                                        a.opts.autoescape
                                      ),
                                      "type",
                                      a.opts.autoescape
                                    ))
                              ) {
                                (h +=
                                  '\n    <div>\n        <figure class="article-body-content-main-photo featured">\n            '),
                                  (h += d.suppressValue(
                                    ((f = 46),
                                    (g = 24),
                                    d.callWrap(
                                      d.contextOrFrameLookup(
                                        b,
                                        c,
                                        "renderImage"
                                      ),
                                      "renderImage",
                                      [
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "globals"
                                          ),
                                          "mediaRoot",
                                          a.opts.autoescape
                                        ),
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "contentData"
                                          ),
                                          "media",
                                          a.opts.autoescape
                                        ),
                                        "article-leads-feature-413",
                                        "100vw",
                                        [
                                          ["article-leads-feature-687", "800w"],
                                          ["article-leads-feature", "1480w"],
                                        ],
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "contentItem"
                                            ),
                                            "member",
                                            a.opts.autoescape
                                          ),
                                          "title",
                                          a.opts.autoescape
                                        ),
                                      ]
                                    )),
                                    a.opts.autoescape
                                  )),
                                  (h +=
                                    '\n            <figcaption class="article-body-content-main-photo-caption">\n                ');
                                var k;
                                (f = 52),
                                  (g = 48),
                                  (k = d.callWrap(
                                    d.contextOrFrameLookup(
                                      b,
                                      c,
                                      "renderMediaField"
                                    ),
                                    "renderMediaField",
                                    [
                                      d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "contentData"
                                        ),
                                        "media",
                                        a.opts.autoescape
                                      ),
                                      "caption",
                                      "article-leads-feature",
                                    ]
                                  )),
                                  c.set("caption", k, !0),
                                  c.parent ||
                                    (b.setVariable("caption", k),
                                    b.addExport("caption")),
                                  (h += "\n                "),
                                  d.contextOrFrameLookup(b, c, "caption") &&
                                    (h += d.suppressValue(
                                      d.contextOrFrameLookup(b, c, "caption"),
                                      a.opts.autoescape
                                    )),
                                  (h += "\n                ");
                                var l;
                                (f = 54),
                                  (g = 48),
                                  (l = d.callWrap(
                                    d.contextOrFrameLookup(
                                      b,
                                      c,
                                      "renderMediaField"
                                    ),
                                    "renderMediaField",
                                    [
                                      d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "contentData"
                                        ),
                                        "media",
                                        a.opts.autoescape
                                      ),
                                      "credits",
                                      "article-leads-feature",
                                    ]
                                  )),
                                  c.set("credits", l, !0),
                                  c.parent ||
                                    (b.setVariable("credits", l),
                                    b.addExport("credits")),
                                  (h += "\n                "),
                                  d.contextOrFrameLookup(b, c, "credits") &&
                                    ((h +=
                                      '\n                    <span class="article-body-content-main-photo-caption-credit"><i>Credit:</i> '),
                                    (h += d.suppressValue(
                                      d.contextOrFrameLookup(b, c, "credits"),
                                      a.opts.autoescape
                                    )),
                                    (h += " </span>\n                ")),
                                  (h +=
                                    "\n            </figcaption>\n        </figure>\n    </div>\n    ");
                              }
                              if (
                                ((h +=
                                  '\n    <div class="article-body container-medium">\n        <main class="article-body-content">\n            <div class="article-body-inner"> <!-- used to allow floats inside of a flexbox container -->\n                '),
                                d.memberLookup(
                                  d.memberLookup(
                                    d.contextOrFrameLookup(b, c, "contentData"),
                                    "media",
                                    a.opts.autoescape
                                  ),
                                  "lead",
                                  a.opts.autoescape
                                ))
                              ) {
                                if (
                                  ((h += "\n                    "),
                                  "Video" ==
                                    d.memberLookup(
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "contentData"
                                          ),
                                          "media",
                                          a.opts.autoescape
                                        ),
                                        "lead",
                                        a.opts.autoescape
                                      ),
                                      "type",
                                      a.opts.autoescape
                                    ))
                                ) {
                                  if (
                                    ((h += "\n                        "),
                                    "brightcove" ==
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "contentData"
                                            ),
                                            "media",
                                            a.opts.autoescape
                                          ),
                                          "lead",
                                          a.opts.autoescape
                                        ),
                                        "provider",
                                        a.opts.autoescape
                                      ))
                                  ) {
                                    h += "\n                            ";
                                    var m;
                                    (m = d.contextOrFrameLookup(
                                      b,
                                      c,
                                      "contentData"
                                    )),
                                      c.set("videoData", m, !0),
                                      c.parent ||
                                        (b.setVariable("videoData", m),
                                        b.addExport("videoData")),
                                      (h += "\n                            ");
                                    var n;
                                    if (
                                      ((n = !0),
                                      c.set("videoAuto", n, !0),
                                      c.parent ||
                                        (b.setVariable("videoAuto", n),
                                        b.addExport("videoAuto")),
                                      (h += "\n                            "),
                                      0 ==
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "autoPlay"
                                        ))
                                    ) {
                                      h += "\n                                ";
                                      var o;
                                      (o = !1),
                                        c.set("videoAuto", o, !0),
                                        c.parent ||
                                          (b.setVariable("videoAuto", o),
                                          b.addExport("videoAuto")),
                                        (h += "\n                            ");
                                    }
                                    (h += "\n                            "),
                                      a.getTemplate(
                                        "partials/_brightcove.html.twig",
                                        !1,
                                        "article-main.html.twig",
                                        function (a, d) {
                                          return a
                                            ? void e(a)
                                            : void d.render(
                                                b.getVariables(),
                                                c.push(),
                                                function (a, b) {
                                                  return a
                                                    ? void e(a)
                                                    : ((h += b),
                                                      void (h +=
                                                        "\n                        "));
                                                }
                                              );
                                        }
                                      );
                                  } else
                                    (h +=
                                      '\n                            <div class="article-media-lead">\n                                <div class="embed-container">\n                                    '),
                                      (h += d.suppressValue(
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "lead",
                                            a.opts.autoescape
                                          ),
                                          "code",
                                          a.opts.autoescape
                                        ),
                                        a.opts.autoescape
                                      )),
                                      (h +=
                                        "\n                                </div>\n                            </div>\n                        ");
                                  h += "\n                    ";
                                } else if (
                                  "Instagram" ==
                                  d.memberLookup(
                                    d.memberLookup(
                                      d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "contentData"
                                        ),
                                        "media",
                                        a.opts.autoescape
                                      ),
                                      "lead",
                                      a.opts.autoescape
                                    ),
                                    "type",
                                    a.opts.autoescape
                                  )
                                )
                                  (h +=
                                    '\n                        <div class="article-instagram-lead">\n                            '),
                                    (h += d.suppressValue(
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "contentData"
                                            ),
                                            "media",
                                            a.opts.autoescape
                                          ),
                                          "lead",
                                          a.opts.autoescape
                                        ),
                                        "code",
                                        a.opts.autoescape
                                      ),
                                      a.opts.autoescape
                                    )),
                                    (h +=
                                      "\n                        </div>\n                    ");
                                else if (
                                  "Horizontal Image" ==
                                    d.memberLookup(
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "contentData"
                                          ),
                                          "media",
                                          a.opts.autoescape
                                        ),
                                        "lead",
                                        a.opts.autoescape
                                      ),
                                      "type",
                                      a.opts.autoescape
                                    ) ||
                                  "horizontal" ==
                                    d.memberLookup(
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "contentData"
                                          ),
                                          "media",
                                          a.opts.autoescape
                                        ),
                                        "lead",
                                        a.opts.autoescape
                                      ),
                                      "type",
                                      a.opts.autoescape
                                    )
                                ) {
                                  (h += "\n                    "),
                                    (h +=
                                      '\n                        <figure class="article-body-content-main-photo full-width">\n                            '),
                                    (h += d.suppressValue(
                                      ((f = 88),
                                      (g = 40),
                                      d.callWrap(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "renderImage"
                                        ),
                                        "renderImage",
                                        [
                                          d.memberLookup(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "globals"
                                            ),
                                            "mediaRoot",
                                            a.opts.autoescape
                                          ),
                                          d.memberLookup(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "contentData"
                                            ),
                                            "media",
                                            a.opts.autoescape
                                          ),
                                          "article-leads-horizontal-261",
                                          "100vw",
                                          [
                                            [
                                              "article-leads-horizontal-437",
                                              "800w",
                                            ],
                                            [
                                              "article-leads-horizontal",
                                              "1480w",
                                            ],
                                          ],
                                          d.memberLookup(
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentItem"
                                              ),
                                              "member",
                                              a.opts.autoescape
                                            ),
                                            "title",
                                            a.opts.autoescape
                                          ),
                                        ]
                                      )),
                                      a.opts.autoescape
                                    )),
                                    (h +=
                                      '\n                            <figcaption class="article-body-content-main-photo-caption horizontal">\n                                ');
                                  var p;
                                  (f = 94),
                                    (g = 64),
                                    (p = d.callWrap(
                                      d.contextOrFrameLookup(
                                        b,
                                        c,
                                        "renderMediaField"
                                      ),
                                      "renderMediaField",
                                      [
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "contentData"
                                          ),
                                          "media",
                                          a.opts.autoescape
                                        ),
                                        "caption",
                                        "article-leads-horizontal",
                                      ]
                                    )),
                                    c.set("caption", p, !0),
                                    c.parent ||
                                      (b.setVariable("caption", p),
                                      b.addExport("caption")),
                                    (h += "\n                                "),
                                    d.contextOrFrameLookup(b, c, "caption") &&
                                      (h += d.suppressValue(
                                        d.contextOrFrameLookup(b, c, "caption"),
                                        a.opts.autoescape
                                      )),
                                    (h += "\n                                ");
                                  var q;
                                  (f = 96),
                                    (g = 64),
                                    (q = d.callWrap(
                                      d.contextOrFrameLookup(
                                        b,
                                        c,
                                        "renderMediaField"
                                      ),
                                      "renderMediaField",
                                      [
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "contentData"
                                          ),
                                          "media",
                                          a.opts.autoescape
                                        ),
                                        "credits",
                                        "article-leads-horizontal",
                                      ]
                                    )),
                                    c.set("credits", q, !0),
                                    c.parent ||
                                      (b.setVariable("credits", q),
                                      b.addExport("credits")),
                                    (h += "\n                                "),
                                    d.contextOrFrameLookup(b, c, "credits") &&
                                      ((h +=
                                        '\n                                     <span class="article-body-content-main-photo-caption-credit"><i>Credit:</i> '),
                                      (h += d.suppressValue(
                                        d.contextOrFrameLookup(b, c, "credits"),
                                        a.opts.autoescape
                                      )),
                                      (h +=
                                        " </span>\n                                ")),
                                    (h +=
                                      "\n                            </figcaption>\n                        </figure>\n                    "),
                                    (h += "\n                    ");
                                } else {
                                  if (
                                    ((h += "\n                        "),
                                    d.memberLookup(
                                      d.contextOrFrameLookup(
                                        b,
                                        c,
                                        "contentData"
                                      ),
                                      "embed",
                                      a.opts.autoescape
                                    ))
                                  ) {
                                    if (
                                      ((h += "\n                            "),
                                      "Featured Image" !=
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "lead",
                                            a.opts.autoescape
                                          ),
                                          "type",
                                          a.opts.autoescape
                                        ))
                                    ) {
                                      (h +=
                                        '\n                            <figure class="article-body-content-main-photo full-width">\n                                '),
                                        (h += d.suppressValue(
                                          ((f = 107),
                                          (g = 44),
                                          d.callWrap(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "renderImage"
                                            ),
                                            "renderImage",
                                            [
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "globals"
                                                ),
                                                "mediaRoot",
                                                a.opts.autoescape
                                              ),
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "contentData"
                                                ),
                                                "media",
                                                a.opts.autoescape
                                              ),
                                              "300-width",
                                              "100vw",
                                              [
                                                ["480-width", "800w"],
                                                ["620-width", "1480w"],
                                              ],
                                              d.memberLookup(
                                                d.memberLookup(
                                                  d.contextOrFrameLookup(
                                                    b,
                                                    c,
                                                    "contentItem"
                                                  ),
                                                  "member",
                                                  a.opts.autoescape
                                                ),
                                                "title",
                                                a.opts.autoescape
                                              ),
                                            ]
                                          )),
                                          a.opts.autoescape
                                        )),
                                        (h +=
                                          '\n                                <figcaption class="article-body-content-main-photo-caption horizontal">\n                                    ');
                                      var r;
                                      (f = 113),
                                        (g = 68),
                                        (r = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "caption",
                                            "article-leads-horizontal",
                                          ]
                                        )),
                                        c.set("caption", r, !0),
                                        c.parent ||
                                          (b.setVariable("caption", r),
                                          b.addExport("caption")),
                                        (h +=
                                          "\n                                    "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "caption"
                                        ) &&
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "caption"
                                            ),
                                            a.opts.autoescape
                                          )),
                                        (h +=
                                          "\n                                    ");
                                      var s;
                                      (f = 115),
                                        (g = 68),
                                        (s = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "credits",
                                            "article-leads-horizontal",
                                          ]
                                        )),
                                        c.set("credits", s, !0),
                                        c.parent ||
                                          (b.setVariable("credits", s),
                                          b.addExport("credits")),
                                        (h +=
                                          "\n                                    "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "credits"
                                        ) &&
                                          ((h +=
                                            '\n                                         <span class="article-body-content-main-photo-caption-credit"><i>Credit:</i> '),
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "credits"
                                            ),
                                            a.opts.autoescape
                                          )),
                                          (h +=
                                            " </span>\n                                    ")),
                                        (h +=
                                          "\n                                </figcaption>\n                            </figure>\n                            ");
                                    }
                                    h += "\n                        ";
                                  } else {
                                    if (
                                      ((h += "\n                            "),
                                      "Small Vertical Image" ==
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "lead",
                                            a.opts.autoescape
                                          ),
                                          "type",
                                          a.opts.autoescape
                                        ))
                                    ) {
                                      (h +=
                                        '\n                                <figure class="article-body-content-main-photo inset small">\n                                    '),
                                        (h += d.suppressValue(
                                          ((f = 125),
                                          (g = 48),
                                          d.callWrap(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "renderImage"
                                            ),
                                            "renderImage",
                                            [
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "globals"
                                                ),
                                                "mediaRoot",
                                                a.opts.autoescape
                                              ),
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "contentData"
                                                ),
                                                "media",
                                                a.opts.autoescape
                                              ),
                                              "article-leads-vertical-300",
                                              "100vw",
                                              [
                                                [
                                                  "article-leads-vertical-300",
                                                  "1480w",
                                                ],
                                              ],
                                              d.memberLookup(
                                                d.memberLookup(
                                                  d.contextOrFrameLookup(
                                                    b,
                                                    c,
                                                    "contentItem"
                                                  ),
                                                  "member",
                                                  a.opts.autoescape
                                                ),
                                                "title",
                                                a.opts.autoescape
                                              ),
                                            ]
                                          )),
                                          a.opts.autoescape
                                        )),
                                        (h +=
                                          '\n                                    <figcaption class="article-body-content-main-photo-caption">\n                                        ');
                                      var t;
                                      (f = 131),
                                        (g = 72),
                                        (t = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "caption",
                                            "article-leads-vertical-300",
                                          ]
                                        )),
                                        c.set("caption", t, !0),
                                        c.parent ||
                                          (b.setVariable("caption", t),
                                          b.addExport("caption")),
                                        (h +=
                                          "\n                                        "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "caption"
                                        ) &&
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "caption"
                                            ),
                                            a.opts.autoescape
                                          )),
                                        (h +=
                                          "\n                                        ");
                                      var u;
                                      (f = 133),
                                        (g = 72),
                                        (u = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "credits",
                                            "article-leads-vertical-300",
                                          ]
                                        )),
                                        c.set("credits", u, !0),
                                        c.parent ||
                                          (b.setVariable("credits", u),
                                          b.addExport("credits")),
                                        (h +=
                                          "\n                                        "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "credits"
                                        ) &&
                                          ((h +=
                                            '\n                                            <span class="article-body-content-main-photo-caption-credit"><i>Credit:</i> '),
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "credits"
                                            ),
                                            a.opts.autoescape
                                          )),
                                          (h +=
                                            " </span>\n                                        ")),
                                        (h +=
                                          "\n                                    </figcaption>\n                                </figure>\n                            ");
                                    } else if (
                                      "Medium Vertical Image" ==
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "contentData"
                                            ),
                                            "media",
                                            a.opts.autoescape
                                          ),
                                          "lead",
                                          a.opts.autoescape
                                        ),
                                        "type",
                                        a.opts.autoescape
                                      )
                                    ) {
                                      (h +=
                                        '\n                                <figure class="article-body-content-main-photo inset medium">\n                                    '),
                                        (h += d.suppressValue(
                                          ((f = 141),
                                          (g = 48),
                                          d.callWrap(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "renderImage"
                                            ),
                                            "renderImage",
                                            [
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "globals"
                                                ),
                                                "mediaRoot",
                                                a.opts.autoescape
                                              ),
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "contentData"
                                                ),
                                                "media",
                                                a.opts.autoescape
                                              ),
                                              "article-leads-vertical-380",
                                              "100vw",
                                              [
                                                [
                                                  "article-leads-vertical-380",
                                                  "800w",
                                                ],
                                                [
                                                  "article-leads-vertical-380",
                                                  "1480w",
                                                ],
                                              ],
                                              d.memberLookup(
                                                d.memberLookup(
                                                  d.contextOrFrameLookup(
                                                    b,
                                                    c,
                                                    "contentItem"
                                                  ),
                                                  "member",
                                                  a.opts.autoescape
                                                ),
                                                "title",
                                                a.opts.autoescape
                                              ),
                                            ]
                                          )),
                                          a.opts.autoescape
                                        )),
                                        (h +=
                                          '\n                                    <figcaption class="article-body-content-main-photo-caption">\n                                        ');
                                      var v;
                                      (f = 147),
                                        (g = 72),
                                        (v = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "caption",
                                            "article-leads-vertical-380",
                                          ]
                                        )),
                                        c.set("caption", v, !0),
                                        c.parent ||
                                          (b.setVariable("caption", v),
                                          b.addExport("caption")),
                                        (h +=
                                          "\n                                        "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "caption"
                                        ) &&
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "caption"
                                            ),
                                            a.opts.autoescape
                                          )),
                                        (h +=
                                          "\n                                        ");
                                      var w;
                                      (f = 149),
                                        (g = 72),
                                        (w = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "credits",
                                            "article-leads-vertical-380",
                                          ]
                                        )),
                                        c.set("credits", w, !0),
                                        c.parent ||
                                          (b.setVariable("credits", w),
                                          b.addExport("credits")),
                                        (h +=
                                          "\n                                        "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "credits"
                                        ) &&
                                          ((h +=
                                            '\n                                            <span class="article-body-content-main-photo-caption-credit"><i>Credit:</i> '),
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "credits"
                                            ),
                                            a.opts.autoescape
                                          )),
                                          (h +=
                                            " </span>\n                                        ")),
                                        (h +=
                                          "\n                                    </figcaption>\n                                </figure>\n                            ");
                                    } else if (
                                      "Large Vertical Image" ==
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "contentData"
                                            ),
                                            "media",
                                            a.opts.autoescape
                                          ),
                                          "lead",
                                          a.opts.autoescape
                                        ),
                                        "type",
                                        a.opts.autoescape
                                      )
                                    ) {
                                      (h +=
                                        '\n                                <figure class="article-body-content-main-photo inset large">\n                                    '),
                                        (h += d.suppressValue(
                                          ((f = 157),
                                          (g = 48),
                                          d.callWrap(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "renderImage"
                                            ),
                                            "renderImage",
                                            [
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "globals"
                                                ),
                                                "mediaRoot",
                                                a.opts.autoescape
                                              ),
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "contentData"
                                                ),
                                                "media",
                                                a.opts.autoescape
                                              ),
                                              "article-leads-vertical-380",
                                              "100vw",
                                              [
                                                [
                                                  "article-leads-vertical-380",
                                                  "800w",
                                                ],
                                                [
                                                  "article-leads-vertical",
                                                  "1480w",
                                                ],
                                              ],
                                              d.memberLookup(
                                                d.memberLookup(
                                                  d.contextOrFrameLookup(
                                                    b,
                                                    c,
                                                    "contentItem"
                                                  ),
                                                  "member",
                                                  a.opts.autoescape
                                                ),
                                                "title",
                                                a.opts.autoescape
                                              ),
                                            ]
                                          )),
                                          a.opts.autoescape
                                        )),
                                        (h +=
                                          '\n                                    <figcaption class="article-body-content-main-photo-caption">\n                                        ');
                                      var x;
                                      (f = 163),
                                        (g = 72),
                                        (x = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "caption",
                                            "article-leads-vertical",
                                          ]
                                        )),
                                        c.set("caption", x, !0),
                                        c.parent ||
                                          (b.setVariable("caption", x),
                                          b.addExport("caption")),
                                        (h +=
                                          "\n                                        "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "caption"
                                        ) &&
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "caption"
                                            ),
                                            a.opts.autoescape
                                          )),
                                        (h +=
                                          "\n                                        ");
                                      var y;
                                      (f = 165),
                                        (g = 72),
                                        (y = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "credits",
                                            "article-leads-vertical",
                                          ]
                                        )),
                                        c.set("credits", y, !0),
                                        c.parent ||
                                          (b.setVariable("credits", y),
                                          b.addExport("credits")),
                                        (h +=
                                          "\n                                        "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "credits"
                                        ) &&
                                          ((h +=
                                            '\n                                            <span class="article-body-content-main-photo-caption-credit"><i>Credit:</i> '),
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "credits"
                                            ),
                                            a.opts.autoescape
                                          )),
                                          (h +=
                                            " </span>\n                                        ")),
                                        (h +=
                                          "\n                                    </figcaption>\n                                </figure>\n                            ");
                                    } else if (
                                      "Variable Height Image" ==
                                      d.memberLookup(
                                        d.memberLookup(
                                          d.memberLookup(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "contentData"
                                            ),
                                            "media",
                                            a.opts.autoescape
                                          ),
                                          "lead",
                                          a.opts.autoescape
                                        ),
                                        "type",
                                        a.opts.autoescape
                                      )
                                    ) {
                                      (h +=
                                        '\n                                <figure class="article-body-content-main-photo inset variable">\n                                    '),
                                        (h += d.suppressValue(
                                          ((f = 173),
                                          (g = 48),
                                          d.callWrap(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "renderImage"
                                            ),
                                            "renderImage",
                                            [
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "globals"
                                                ),
                                                "mediaRoot",
                                                a.opts.autoescape
                                              ),
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "contentData"
                                                ),
                                                "media",
                                                a.opts.autoescape
                                              ),
                                              "480-width",
                                              "100vw",
                                              [
                                                ["480-width", "480w"],
                                                ["300-width", "800w"],
                                                ["760-width", "1480w"],
                                              ],
                                              d.memberLookup(
                                                d.memberLookup(
                                                  d.contextOrFrameLookup(
                                                    b,
                                                    c,
                                                    "contentItem"
                                                  ),
                                                  "member",
                                                  a.opts.autoescape
                                                ),
                                                "title",
                                                a.opts.autoescape
                                              ),
                                            ]
                                          )),
                                          a.opts.autoescape
                                        )),
                                        (h +=
                                          '\n                                    <figcaption class="article-body-content-main-photo-caption">\n                                        ');
                                      var z;
                                      (f = 179),
                                        (g = 72),
                                        (z = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "caption",
                                            "main_image",
                                          ]
                                        )),
                                        c.set("caption", z, !0),
                                        c.parent ||
                                          (b.setVariable("caption", z),
                                          b.addExport("caption")),
                                        (h +=
                                          "\n                                        "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "caption"
                                        ) &&
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "caption"
                                            ),
                                            a.opts.autoescape
                                          )),
                                        (h +=
                                          "\n                                        ");
                                      var A;
                                      (f = 181),
                                        (g = 72),
                                        (A = d.callWrap(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "renderMediaField"
                                          ),
                                          "renderMediaField",
                                          [
                                            d.memberLookup(
                                              d.contextOrFrameLookup(
                                                b,
                                                c,
                                                "contentData"
                                              ),
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "credits",
                                            "main_image",
                                          ]
                                        )),
                                        c.set("credits", A, !0),
                                        c.parent ||
                                          (b.setVariable("credits", A),
                                          b.addExport("credits")),
                                        (h +=
                                          "\n                                        "),
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "credits"
                                        ) &&
                                          ((h +=
                                            '\n                                            <span class="article-body-content-main-photo-caption-credit"><i>Credit:</i> '),
                                          (h += d.suppressValue(
                                            d.contextOrFrameLookup(
                                              b,
                                              c,
                                              "credits"
                                            ),
                                            a.opts.autoescape
                                          )),
                                          (h +=
                                            " </span>\n                                        ")),
                                        (h +=
                                          "\n                                    </figcaption>\n                                </figure>\n                            ");
                                    }
                                    h += "\n                        ";
                                  }
                                  h += "\n                    ";
                                }
                                h += "\n                ";
                              }
                              (h += "\n\n                "),
                                (h += d.suppressValue(
                                  a
                                    .getFilter("parseBody")
                                    .call(
                                      b,
                                      d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "contentData"
                                        ),
                                        "body",
                                        a.opts.autoescape
                                      ),
                                      d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "contentData"
                                        ),
                                        "media",
                                        a.opts.autoescape
                                      ),
                                      d.memberLookup(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "contentData"
                                        ),
                                        "embeds",
                                        a.opts.autoescape
                                      )
                                    ),
                                  a.opts.autoescape
                                )),
                                (h += "\n\n                "),
                                (c = c.push());
                              var B = d.contextOrFrameLookup(
                                b,
                                c,
                                "components"
                              );
                              if (B)
                                for (
                                  var C = B.length, D = 0;
                                  D < B.length;
                                  D++
                                ) {
                                  var E = B[D];
                                  c.set("component", E),
                                    c.set("loop.index", D + 1),
                                    c.set("loop.index0", D),
                                    c.set("loop.revindex", C - D),
                                    c.set("loop.revindex0", C - D - 1),
                                    c.set("loop.first", 0 === D),
                                    c.set("loop.last", D === C - 1),
                                    c.set("loop.length", C),
                                    (h += "\n                    "),
                                    "_poll" ==
                                      d.memberLookup(
                                        E,
                                        "templateName",
                                        a.opts.autoescape
                                      ) &&
                                      ((h += "\n                        "),
                                      a.getTemplate(
                                        "partials/_poll.html.twig",
                                        !1,
                                        "article-main.html.twig",
                                        function (a, d) {
                                          return a
                                            ? void e(a)
                                            : void d.render(
                                                b.getVariables(),
                                                c.push(),
                                                function (a, b) {
                                                  return a
                                                    ? void e(a)
                                                    : ((h += b),
                                                      void (h +=
                                                        "\n                    "));
                                                }
                                              );
                                        }
                                      )),
                                    (h += "\n                ");
                                }
                              (c = c.pop()),
                                (h +=
                                  '\n\n                <div class="legacy">\n                    '),
                                a.getTemplate(
                                  "partials/_module-related.html.twig",
                                  !1,
                                  "article-main.html.twig",
                                  function (f, g) {
                                    return f
                                      ? void e(f)
                                      : void g.render(
                                          b.getVariables(),
                                          c.push(),
                                          function (f, g) {
                                            if (f) return void e(f);
                                            if (
                                              ((h += g),
                                              (h +=
                                                '\n                </div>\n                <footer class="article-body-content-footer">'),
                                              d.memberLookup(
                                                d.memberLookup(
                                                  d.contextOrFrameLookup(
                                                    b,
                                                    c,
                                                    "contentData"
                                                  ),
                                                  "tags",
                                                  a.opts.autoescape
                                                ),
                                                "editorial",
                                                a.opts.autoescape
                                              ))
                                            ) {
                                              (h +=
                                                '<div class="body-content-footer-taglist">\n                         '),
                                                (c = c.push());
                                              var i = d.memberLookup(
                                                d.memberLookup(
                                                  d.contextOrFrameLookup(
                                                    b,
                                                    c,
                                                    "contentData"
                                                  ),
                                                  "tags",
                                                  a.opts.autoescape
                                                ),
                                                "editorial",
                                                a.opts.autoescape
                                              );
                                              if (i)
                                                for (
                                                  var j = i.length, k = 0;
                                                  k < i.length;
                                                  k++
                                                ) {
                                                  var l = i[k];
                                                  c.set("tag", l),
                                                    c.set("loop.index", k + 1),
                                                    c.set("loop.index0", k),
                                                    c.set(
                                                      "loop.revindex",
                                                      j - k
                                                    ),
                                                    c.set(
                                                      "loop.revindex0",
                                                      j - k - 1
                                                    ),
                                                    c.set(
                                                      "loop.first",
                                                      0 === k
                                                    ),
                                                    c.set(
                                                      "loop.last",
                                                      k === j - 1
                                                    ),
                                                    c.set("loop.length", j),
                                                    (h +=
                                                      '\n                            <a href="'),
                                                    (h += d.suppressValue(
                                                      d.memberLookup(
                                                        l,
                                                        "slug",
                                                        a.opts.autoescape
                                                      ),
                                                      a.opts.autoescape
                                                    )),
                                                    (h +=
                                                      '" class="tracked-offpage" data-track-category="Article Page" data-track-action="Tap Topics" data-track-label="'),
                                                    (h += d.suppressValue(
                                                      d.memberLookup(
                                                        d.contextOrFrameLookup(
                                                          b,
                                                          c,
                                                          "loop"
                                                        ),
                                                        "index",
                                                        a.opts.autoescape
                                                      ),
                                                      a.opts.autoescape
                                                    )),
                                                    (h += " | "),
                                                    (h += d.suppressValue(
                                                      d.memberLookup(
                                                        l,
                                                        "slug",
                                                        a.opts.autoescape
                                                      ),
                                                      a.opts.autoescape
                                                    )),
                                                    (h += '">#'),
                                                    (h += d.suppressValue(
                                                      d.memberLookup(
                                                        l,
                                                        "name",
                                                        a.opts.autoescape
                                                      ),
                                                      a.opts.autoescape
                                                    )),
                                                    (h +=
                                                      "</a>\n                        ");
                                                }
                                              (c = c.pop()),
                                                (h +=
                                                  "\n                    </div>");
                                            }
                                            h +=
                                              '<div class="article-body-content-footer-share">\n                        ';
                                            var m;
                                            (m = "bottom"),
                                              c.set("sharingPosition", m, !0),
                                              c.parent ||
                                                (b.setVariable(
                                                  "sharingPosition",
                                                  m
                                                ),
                                                b.addExport("sharingPosition")),
                                              (h +=
                                                "\n                        "),
                                              a.getTemplate(
                                                "partials/_social-sharing.html.twig",
                                                !1,
                                                "article-main.html.twig",
                                                function (f, g) {
                                                  return f
                                                    ? void e(f)
                                                    : void g.render(
                                                        b.getVariables(),
                                                        c.push(),
                                                        function (f, g) {
                                                          if (f)
                                                            return void e(f);
                                                          (h += g),
                                                            (h +=
                                                              '\n                    </div>\n                </footer>\n            </div>\n        </main>\n        <div class ="ad-slot rail">\n            '),
                                                            (c = c.push());
                                                          var i = d.memberLookup(
                                                            d.contextOrFrameLookup(
                                                              b,
                                                              c,
                                                              "tagPromo"
                                                            ),
                                                            "data",
                                                            a.opts.autoescape
                                                          );
                                                          if (i)
                                                            for (
                                                              var j = i.length,
                                                                k = 0;
                                                              k < i.length;
                                                              k++
                                                            ) {
                                                              var l = i[k];
                                                              c.set(
                                                                "tagPromoItem",
                                                                l
                                                              ),
                                                                c.set(
                                                                  "loop.index",
                                                                  k + 1
                                                                ),
                                                                c.set(
                                                                  "loop.index0",
                                                                  k
                                                                ),
                                                                c.set(
                                                                  "loop.revindex",
                                                                  j - k
                                                                ),
                                                                c.set(
                                                                  "loop.revindex0",
                                                                  j - k - 1
                                                                ),
                                                                c.set(
                                                                  "loop.first",
                                                                  0 === k
                                                                ),
                                                                c.set(
                                                                  "loop.last",
                                                                  k === j - 1
                                                                ),
                                                                c.set(
                                                                  "loop.length",
                                                                  j
                                                                ),
                                                                (h +=
                                                                  '\n            <aside class="module-tag-promo '),
                                                                d.memberLookup(
                                                                  l,
                                                                  "theme",
                                                                  a.opts
                                                                    .autoescape
                                                                ) &&
                                                                  ((h +=
                                                                    "theme-active "),
                                                                  (h += d.suppressValue(
                                                                    d.memberLookup(
                                                                      l,
                                                                      "theme",
                                                                      a.opts
                                                                        .autoescape
                                                                    ),
                                                                    a.opts
                                                                      .autoescape
                                                                  ))),
                                                                (h +=
                                                                  '">\n                <div class="module-tag-promo-img">\n                    <img src="'),
                                                                (h += d.suppressValue(
                                                                  d.memberLookup(
                                                                    d.contextOrFrameLookup(
                                                                      b,
                                                                      c,
                                                                      "globals"
                                                                    ),
                                                                    "mediaRoot",
                                                                    a.opts
                                                                      .autoescape
                                                                  ),
                                                                  a.opts
                                                                    .autoescape
                                                                )),
                                                                (h +=
                                                                  "featured-related/"),
                                                                (h += d.suppressValue(
                                                                  d.memberLookup(
                                                                    l,
                                                                    "media",
                                                                    a.opts
                                                                      .autoescape
                                                                  ),
                                                                  a.opts
                                                                    .autoescape
                                                                )),
                                                                (h +=
                                                                  '" alt="'),
                                                                (h += d.suppressValue(
                                                                  d.memberLookup(
                                                                    l,
                                                                    "title",
                                                                    a.opts
                                                                      .autoescape
                                                                  ),
                                                                  a.opts
                                                                    .autoescape
                                                                )),
                                                                (h +=
                                                                  '" />\n                </div>\n                <p class="main-bg">'),
                                                                (h += d.suppressValue(
                                                                  d.memberLookup(
                                                                    l,
                                                                    "title",
                                                                    a.opts
                                                                      .autoescape
                                                                  ),
                                                                  a.opts
                                                                    .autoescape
                                                                )),
                                                                (h +=
                                                                  '</p>\n                <a href="'),
                                                                (h += d.suppressValue(
                                                                  d.memberLookup(
                                                                    d.contextOrFrameLookup(
                                                                      b,
                                                                      c,
                                                                      "globals"
                                                                    ),
                                                                    "hostRoot",
                                                                    a.opts
                                                                      .autoescape
                                                                  ),
                                                                  a.opts
                                                                    .autoescape
                                                                )),
                                                                (h += d.suppressValue(
                                                                  d.memberLookup(
                                                                    l,
                                                                    "slug",
                                                                    a.opts
                                                                      .autoescape
                                                                  ),
                                                                  a.opts
                                                                    .autoescape
                                                                )),
                                                                (h +=
                                                                  '" class="color-theme-cta">'),
                                                                (h += d.suppressValue(
                                                                  d.memberLookup(
                                                                    l,
                                                                    "cta",
                                                                    a.opts
                                                                      .autoescape
                                                                  )
                                                                    ? d.memberLookup(
                                                                        l,
                                                                        "cta",
                                                                        a.opts
                                                                          .autoescape
                                                                      )
                                                                    : "See Complete Coverage",
                                                                  a.opts
                                                                    .autoescape
                                                                )),
                                                                (h +=
                                                                  " </a>\n            </aside>\n            ");
                                                            }
                                                          (c = c.pop()),
                                                            (h +=
                                                              '\n            <div class="ad right">\n                <div class="ad-container" id="right-rail-ad-slot-tall-0"></div>\n            </div>\n        </div>\n        <div class="ad-container" id="two-by-two-0"></div>\n        <div class="ad-container" id="four-by-four-0"></div>\n        <div class="ad-container" id="oop-0"></div>\n    </div>\n</article>'),
                                                            e(null, h);
                                                        }
                                                      );
                                                }
                                              );
                                          }
                                        );
                                  }
                                );
                            });
                      }
                    );
                } catch (s) {
                  e(d.handleError(s, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "content/gallery/partials/gallery-main.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<article class="gallery-main row scroll-item scroll-item-active scroll-bar-active" data-slug="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "slug",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '" data-id="'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "id",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += '" data-page="1" data-counter="1">\n    '),
                    (c = c.push());
                  var i = d.contextOrFrameLookup(b, c, "components");
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("component", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h += "\n        "),
                        "_ad" ==
                          d.memberLookup(
                            l,
                            "templateName",
                            a.opts.autoescape
                          ) &&
                          ((h += "\n            "),
                          a.getTemplate(
                            "partials/_ad.html.twig",
                            !1,
                            "content/gallery/partials/gallery-main.html.twig",
                            function (a, d) {
                              return a
                                ? void e(a)
                                : void d.render(
                                    b.getVariables(),
                                    c.push(),
                                    function (a, b) {
                                      return a
                                        ? void e(a)
                                        : ((h += b), void (h += "\n        "));
                                    }
                                  );
                            }
                          )),
                        (h += "\n    ");
                    }
                  (c = c.pop()),
                    (h +=
                      '\n    <div class="ad-container" id="one-by-one-0"></div>\n    <div class = "ad-slot banner">\n        <div class="ad">\n            <div class="ad-container banner" id="top-ad-slot-0"></div>\n        </div>\n        </div>\n    <div class="heading gallery-heading container-medium">\n        <header>\n            <p class="section content-type">'),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "labelData",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h += "</p>\n            <h1>"),
                    (h += d.suppressValue(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "title",
                        a.opts.autoescape
                      ),
                      a.opts.autoescape
                    )),
                    (h +=
                      '</h1>\n        </header>\n\n        <div class="content-info">\n\n            '),
                    d.memberLookup(
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "contentData"),
                        "sponsor",
                        a.opts.autoescape
                      ),
                      "check",
                      a.opts.autoescape
                    )
                      ? ((h +=
                          '\n            <div class="ad-sponsor"><div class="ad-container sponsor" id="sponsor-ad-slot-0"></div><div class = \'sponsor-link\'><div class = \'sponsor-label\'>'),
                        (h += a
                          .getFilter("empty")
                          .call(
                            b,
                            d.memberLookup(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "contentData"),
                                "sponsor",
                                a.opts.autoescape
                              ),
                              "label",
                              a.opts.autoescape
                            )
                          )
                          ? "Sponsored By"
                          : d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  d.contextOrFrameLookup(b, c, "contentData"),
                                  "sponsor",
                                  a.opts.autoescape
                                ),
                                "label",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                        (h += '</div><a class="article-sponsor" href="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "sponsor",
                              a.opts.autoescape
                            ),
                            "url",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += '">'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "sponsor",
                              a.opts.autoescape
                            ),
                            "name",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += "</a></div>            </div>\n            "))
                      : (h +=
                          '\n            <div class="ad-sponsor"><div class="ad-container-no-edit sponsor" id="sponsor-ad-slot-0"></div></div>\n            '),
                    (h += '\n            <time class="published-date">'),
                    (h += d.suppressValue(
                      ((f = 25),
                      (g = 46),
                      d.callWrap(d.contextOrFrameLookup(b, c, "date"), "date", [
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "publish_date",
                          a.opts.autoescape
                        ),
                        "F j, Y",
                      ])),
                      a.opts.autoescape
                    )),
                    (h += "</time>\n            "),
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "contentData"),
                      "author",
                      a.opts.autoescape
                    ) &&
                      ((h +=
                        '\n                <i class="text-by">/ By</i>\n                <a class="byline tracked-offpage" href="'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "contentData"),
                            "author",
                            a.opts.autoescape
                          ),
                          "canonical",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h +=
                        '" data-track-category="Gallery Page" data-track-action="Tap Byline" data-track-label="'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "author"),
                          "slug",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += '">'),
                      (h += d.suppressValue(
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "contentData"),
                          "author",
                          a.opts.autoescape
                        ),
                        a.opts.autoescape
                      )),
                      (h += "</a>\n            ")),
                    (h += "\n\n        </div>\n\n        ");
                  var m;
                  (m = ""),
                    c.set("sharingPosition", m, !0),
                    c.parent ||
                      (b.setVariable("sharingPosition", m),
                      b.addExport("sharingPosition")),
                    (h += "\n        "),
                    a.getTemplate(
                      "partials/_social-sharing.html.twig",
                      !1,
                      "content/gallery/partials/gallery-main.html.twig",
                      function (d, f) {
                        return d
                          ? void e(d)
                          : void f.render(b.getVariables(), c.push(), function (
                              d,
                              f
                            ) {
                              return d
                                ? void e(d)
                                : ((h += f),
                                  (h += "\n\n    </div>\n    "),
                                  void a.getTemplate(
                                    "content/gallery/partials/gallery-slides.html.twig",
                                    !1,
                                    "content/gallery/partials/gallery-main.html.twig",
                                    function (d, f) {
                                      return d
                                        ? void e(d)
                                        : void f.render(
                                            b.getVariables(),
                                            c.push(),
                                            function (d, f) {
                                              if (d) return void e(d);
                                              (h += f),
                                                (h +=
                                                  '\n\n    <footer class="gallery-body-content-footer container-medium">\n        ');
                                              var g;
                                              (g = !0),
                                                c.set("galleryRelated", g, !0),
                                                c.parent ||
                                                  (b.setVariable(
                                                    "galleryRelated",
                                                    g
                                                  ),
                                                  b.addExport(
                                                    "galleryRelated"
                                                  )),
                                                (h += "\n        "),
                                                a.getTemplate(
                                                  "partials/_module-related.html.twig",
                                                  !1,
                                                  "content/gallery/partials/gallery-main.html.twig",
                                                  function (d, f) {
                                                    return d
                                                      ? void e(d)
                                                      : void f.render(
                                                          b.getVariables(),
                                                          c.push(),
                                                          function (d, f) {
                                                            return d
                                                              ? void e(d)
                                                              : ((h += f),
                                                                (h +=
                                                                  "\n        "),
                                                                void a.getTemplate(
                                                                  "partials/_module-tag-list.html.twig",
                                                                  !1,
                                                                  "content/gallery/partials/gallery-main.html.twig",
                                                                  function (
                                                                    d,
                                                                    f
                                                                  ) {
                                                                    return d
                                                                      ? void e(
                                                                          d
                                                                        )
                                                                      : void f.render(
                                                                          b.getVariables(),
                                                                          c.push(),
                                                                          function (
                                                                            d,
                                                                            f
                                                                          ) {
                                                                            if (
                                                                              d
                                                                            )
                                                                              return void e(
                                                                                d
                                                                              );
                                                                            (h += f),
                                                                              (h +=
                                                                                "\n        ");
                                                                            var g;
                                                                            (g =
                                                                              "bottom"),
                                                                              c.set(
                                                                                "sharingPosition",
                                                                                g,
                                                                                !0
                                                                              ),
                                                                              c.parent ||
                                                                                (b.setVariable(
                                                                                  "sharingPosition",
                                                                                  g
                                                                                ),
                                                                                b.addExport(
                                                                                  "sharingPosition"
                                                                                )),
                                                                              (h +=
                                                                                "\n        "),
                                                                              a.getTemplate(
                                                                                "partials/_social-sharing.html.twig",
                                                                                !1,
                                                                                "content/gallery/partials/gallery-main.html.twig",
                                                                                function (
                                                                                  a,
                                                                                  d
                                                                                ) {
                                                                                  return a
                                                                                    ? void e(
                                                                                        a
                                                                                      )
                                                                                    : void d.render(
                                                                                        b.getVariables(),
                                                                                        c.push(),
                                                                                        function (
                                                                                          a,
                                                                                          b
                                                                                        ) {
                                                                                          return a
                                                                                            ? void e(
                                                                                                a
                                                                                              )
                                                                                            : ((h += b),
                                                                                              (h +=
                                                                                                '\n    </footer>\n            <div class="ad-container" id="two-by-two-0"></div>\n            <div class="ad-container" id="four-by-four-0"></div>\n            <div class="ad-container" id="oop-0"></div>\n</article>\n'),
                                                                                              void e(
                                                                                                null,
                                                                                                h
                                                                                              ));
                                                                                        }
                                                                                      );
                                                                                }
                                                                              );
                                                                          }
                                                                        );
                                                                  }
                                                                ));
                                                          }
                                                        );
                                                  }
                                                );
                                            }
                                          );
                                    }
                                  ));
                            });
                      }
                    );
                } catch (n) {
                  e(d.handleError(n, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "content/gallery/partials/gallery-slides.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  (h +=
                    '<div class="gallery-body container-medium scroll-jammie" data-active="false" data-fetch="false">\n    <div class="row">\n        <div class="gallery-body-content">\n            <div class="gallery-body-inner">\n                '),
                    (c = c.push());
                  var i = d.contextOrFrameLookup(b, c, "items");
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("item", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h +=
                          '\n                    <figure class="gallery-body-content-slide'),
                        1 == d.memberLookup(l, "order", a.opts.autoescape) &&
                          (h += " intro-slide"),
                        (h += " "),
                        1 ==
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "items"),
                            "length",
                            a.opts.autoescape
                          ) && (h += "single-slide "),
                        (h += '" data-slug="'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "slug", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += '" data-title="'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "title", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h +=
                          '">\n                        <div class="slide-credit">\n                            <img src="'),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "globals"),
                            "mediaRoot",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += d.suppressValue(
                          a
                            .getFilter("imgsrc")
                            .call(
                              b,
                              d.memberLookup(l, "media", a.opts.autoescape),
                              "480-width"
                            ),
                          a.opts.autoescape
                        )),
                        (h +=
                          '" />\n                            <a class="enlarge-button tracked-onpage" data-track-category="Gallery Page" data-track-action="Enlarge Image"></a>\n                            ');
                      var m;
                      (f = 9),
                        (g = 60),
                        (m = d.callWrap(
                          d.contextOrFrameLookup(b, c, "renderMediaField"),
                          "renderMediaField",
                          [
                            d.memberLookup(l, "media", a.opts.autoescape),
                            "credits",
                            "main_image",
                          ]
                        )),
                        c.set("credits", m, !0),
                        c.parent ||
                          (b.setVariable("credits", m), b.addExport("credits")),
                        (h += "\n                            "),
                        d.contextOrFrameLookup(b, c, "credits") &&
                          ((h +=
                            '\n                                <span class="gallery-body-content-slide-credit"><i>Credit:</i> '),
                          (h += d.suppressValue(
                            d.contextOrFrameLookup(b, c, "credits"),
                            a.opts.autoescape
                          )),
                          (h += "</span>\n                            ")),
                        (h +=
                          '\n\n                        </div><figcaption class="gallery-body-content-slide-caption">\n\n                            '),
                        1 ==
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "items"),
                            "length",
                            a.opts.autoescape
                          ) &&
                          ((h +=
                            '\n\n                                <div class="gallery-description">\n                                    '),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "contentData"),
                              "body",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h +=
                            "\n                                </div>\n                                "),
                          a
                            .getFilter("empty")
                            .call(b, d.contextOrFrameLookup(b, c, "prev")) ||
                            ((h +=
                              '\n                                    <a href="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "prev"),
                                "slug",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              '" rel="prev" class="scroll-jammie-control-open scroll-jammie-control tracked-onpage" data-track-category="Gallery Page" data-track-action="Tap Previous Slide" data-track-label="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "prev"),
                                "slug",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              '">Previous Slide</a>\n                                ')),
                          (h += "\n\n                                "),
                          a
                            .getFilter("empty")
                            .call(b, d.contextOrFrameLookup(b, c, "next")) ||
                            ((h +=
                              '\n                                    <a href="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "next"),
                                "slug",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              '" rel="next" class="scroll-jammie-control-open scroll-jammie-control tracked-onpage" data-track-category="Gallery Page" data-track-action="Tap Next Slide" data-track-label="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "next"),
                                "slug",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              '">Next Slide</a>\n                                ')),
                          (h += "\n                            ")),
                        (h +=
                          '\n\n                            <div class="gallery-slide-description">\n                                <h3>'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "title", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += "</h3>\n                                <p>"),
                        (h += d.suppressValue(
                          d.memberLookup(l, "body", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += "</p>\n\n                                ");
                      var n;
                      (n = "image"),
                        c.set("sharingPosition", n, !0),
                        c.parent ||
                          (b.setVariable("sharingPosition", n),
                          b.addExport("sharingPosition")),
                        (h += "\n                                "),
                        a.getTemplate(
                          "partials/_social-sharing.html.twig",
                          !1,
                          "content/gallery/partials/gallery-slides.html.twig",
                          function (i, j) {
                            return i
                              ? void e(i)
                              : void j.render(
                                  b.getVariables(),
                                  c.push(),
                                  function (i, j) {
                                    if (i) return void e(i);
                                    (h += j),
                                      (h +=
                                        '\n                            </div>\n                        </figcaption>\n                        <div class="enlarged-image">\n                            <div class="enlarged-image-container">\n                                <a class="enlarged-image-container-close"></a>\n                                ');
                                    var k;
                                    (f = 41),
                                      (g = 60),
                                      (k = d.callWrap(
                                        d.contextOrFrameLookup(
                                          b,
                                          c,
                                          "renderMediaField"
                                        ),
                                        "renderMediaField",
                                        [
                                          d.memberLookup(
                                            l,
                                            "media",
                                            a.opts.autoescape
                                          ),
                                          "alt",
                                          "main_image",
                                        ]
                                      )),
                                      c.set("alt", k, !0),
                                      c.parent ||
                                        (b.setVariable("alt", k),
                                        b.addExport("alt")),
                                      (h +=
                                        '\n                                <img src= "" data-src="'),
                                      (h += d.suppressValue(
                                        d.memberLookup(
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "globals"
                                          ),
                                          "mediaRoot",
                                          a.opts.autoescape
                                        ),
                                        a.opts.autoescape
                                      )),
                                      (h += d.suppressValue(
                                        a
                                          .getFilter("imgsrc")
                                          .call(
                                            b,
                                            d.memberLookup(
                                              l,
                                              "media",
                                              a.opts.autoescape
                                            ),
                                            "820-width"
                                          ),
                                        a.opts.autoescape
                                      )),
                                      (h += '" alt="'),
                                      (h += a
                                        .getFilter("empty")
                                        .call(
                                          b,
                                          d.contextOrFrameLookup(b, c, "alt")
                                        )
                                        ? d.suppressValue(
                                            d.memberLookup(
                                              l,
                                              "title",
                                              a.opts.autoescape
                                            ),
                                            a.opts.autoescape
                                          )
                                        : d.suppressValue(
                                            d.contextOrFrameLookup(b, c, "alt"),
                                            a.opts.autoescape
                                          )),
                                      (h +=
                                        '" />\n                            </div>\n                        </div>\n                    </figure>\n\n                    ');
                                    var m;
                                    (m = d.memberLookup(
                                      l,
                                      "order",
                                      a.opts.autoescape
                                    )),
                                      c.set("itemCheck", m, !0),
                                      c.parent ||
                                        (b.setVariable("itemCheck", m),
                                        b.addExport("itemCheck")),
                                      (h += "\n                    "),
                                      d.memberLookup(
                                        d.contextOrFrameLookup(b, c, "items"),
                                        "length",
                                        a.opts.autoescape
                                      ) > 1 &&
                                        d.memberLookup(
                                          d.contextOrFrameLookup(b, c, "loop"),
                                          "last",
                                          a.opts.autoescape
                                        ) &&
                                        ((h += "\n                        "),
                                        1 ==
                                          d.contextOrFrameLookup(
                                            b,
                                            c,
                                            "next"
                                          ) &&
                                          ((h +=
                                            '\n                            <a href="'),
                                          (h += d.suppressValue(
                                            d.memberLookup(
                                              d.memberLookup(
                                                d.contextOrFrameLookup(
                                                  b,
                                                  c,
                                                  "items"
                                                ),
                                                d.memberLookup(
                                                  d.contextOrFrameLookup(
                                                    b,
                                                    c,
                                                    "items"
                                                  ),
                                                  "length",
                                                  a.opts.autoescape
                                                ) - 1,
                                                a.opts.autoescape
                                              ),
                                              "slug",
                                              a.opts.autoescape
                                            ),
                                            a.opts.autoescape
                                          )),
                                          (h +=
                                            '" rel="next" class="scroll-jammie-control-continue scroll-jammie-control tracked-onpage" data-track-category="Gallery Page" data-track-action="Continue Gallery">Continue Gallery</a>\n                        ')),
                                        (h += "\n                    ")),
                                      (h += "\n                ");
                                  }
                                );
                          }
                        );
                    }
                  if (
                    ((c = c.pop()),
                    (h +=
                      '\n            </div>\n        </div>\n        <div class="ad-slot rail">\n            '),
                    1 ==
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "items"),
                        "length",
                        a.opts.autoescape
                      ) &&
                      !a
                        .getFilter("empty")
                        .call(b, d.contextOrFrameLookup(b, c, "next")))
                  ) {
                    (h += "\n                "), (c = c.push());
                    var o = d.memberLookup(
                      d.contextOrFrameLookup(b, c, "tagPromo"),
                      "data",
                      a.opts.autoescape
                    );
                    if (o)
                      for (var p = o.length, q = 0; q < o.length; q++) {
                        var r = o[q];
                        c.set("tagPromoItem", r),
                          c.set("loop.index", q + 1),
                          c.set("loop.index0", q),
                          c.set("loop.revindex", p - q),
                          c.set("loop.revindex0", p - q - 1),
                          c.set("loop.first", 0 === q),
                          c.set("loop.last", q === p - 1),
                          c.set("loop.length", p),
                          (h +=
                            '\n                    <aside class="module-tag-promo '),
                          d.memberLookup(r, "theme", a.opts.autoescape) &&
                            ((h += "theme-active "),
                            (h += d.suppressValue(
                              d.memberLookup(r, "theme", a.opts.autoescape),
                              a.opts.autoescape
                            ))),
                          (h +=
                            '">\n                        <div class="module-tag-promo-img">\n                            <img src="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "mediaRoot",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += "featured-related/"),
                          (h += d.suppressValue(
                            d.memberLookup(r, "media", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h += '" alt="'),
                          (h += d.suppressValue(
                            d.memberLookup(r, "title", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h +=
                            '" />\n                        </div>\n                        <p class="main-bg">'),
                          (h += d.suppressValue(
                            d.memberLookup(r, "title", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h += '</p>\n                        <a href="'),
                          (h += d.suppressValue(
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "globals"),
                              "hostRoot",
                              a.opts.autoescape
                            ),
                            a.opts.autoescape
                          )),
                          (h += d.suppressValue(
                            d.memberLookup(r, "slug", a.opts.autoescape),
                            a.opts.autoescape
                          )),
                          (h +=
                            '" class="color-theme-cta">See Complete Coverage </a>\n                    </aside>\n                ');
                      }
                    (c = c.pop()), (h += "\n            ");
                  }
                  (h += '\n            <div class="ad right '),
                    1 ==
                      d.memberLookup(
                        d.contextOrFrameLookup(b, c, "items"),
                        "length",
                        a.opts.autoescape
                      ) && (h += "no-stick"),
                    (h +=
                      '" data-stuck="false" data-collapsed="true">\n                <div class="ad-container" id="'),
                    d.memberLookup(
                      d.contextOrFrameLookup(b, c, "items"),
                      "length",
                      a.opts.autoescape
                    ) > 1 && (h += "slide-"),
                    (h +=
                      'right-rail-ad-slot-tall-0" ></div>\n            </div>\n        </div>\n    </div>\n    '),
                    (c = c.push());
                  var s = d.contextOrFrameLookup(b, c, "items");
                  if (s)
                    for (var t = s.length, u = 0; u < s.length; u++) {
                      var v = s[u];
                      c.set("item", v),
                        c.set("loop.index", u + 1),
                        c.set("loop.index0", u),
                        c.set("loop.revindex", t - u),
                        c.set("loop.revindex0", t - u - 1),
                        c.set("loop.first", 0 === u),
                        c.set("loop.last", u === t - 1),
                        c.set("loop.length", t),
                        (h += "\n    "),
                        d.memberLookup(
                          d.contextOrFrameLookup(b, c, "items"),
                          "length",
                          a.opts.autoescape
                        ) > 1 &&
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "loop"),
                            "last",
                            a.opts.autoescape
                          ) &&
                          (h +=
                            '\n    <div class="row">\n        <div class="ad-slot banner container-medium">\n            <div class="ad">\n                <div class="ad-container banner" id="slide-top-ad-slot-0"></div>\n            </div>\n        </div>\n    </div>\n    '),
                        (h += "\n    ");
                    }
                  (c = c.pop()), (h += "\n</div>"), e(null, h);
                } catch (w) {
                  e(d.handleError(w, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })(),
          (function () {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
              "voting-gallery.html.twig"
            ] = (function () {
              function a(a, b, c, d, e) {
                var f = null,
                  g = null,
                  h = "";
                try {
                  c = c.push();
                  var i = d.memberLookup(
                    d.contextOrFrameLookup(b, c, "component"),
                    "content",
                    a.opts.autoescape
                  );
                  if (i)
                    for (var j = i.length, k = 0; k < i.length; k++) {
                      var l = i[k];
                      c.set("slide", l),
                        c.set("loop.index", k + 1),
                        c.set("loop.index0", k),
                        c.set("loop.revindex", j - k),
                        c.set("loop.revindex0", j - k - 1),
                        c.set("loop.first", 0 === k),
                        c.set("loop.last", k === j - 1),
                        c.set("loop.length", j),
                        (h += '\n<div class="voting-gallery-slide '),
                        d.contextOrFrameLookup(b, c, "component_css_class") &&
                          ((h += d.suppressValue(
                            d.contextOrFrameLookup(b, c, "component_css_class"),
                            a.opts.autoescape
                          )),
                          (h += " ")),
                        (h += "poll"),
                        3 ==
                          a
                            .getFilter("length")
                            .call(
                              b,
                              d.memberLookup(l, "photos", a.opts.autoescape)
                            ) && (h += " threeway"),
                        (h +=
                          '">\n    <form role="form" name="poll-voting-gallery" class="poll-form-voting-gallery" data-id="'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "ContentId", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h += '" action="vote" method="post">\n        '),
                        (c = c.push());
                      var m = d.memberLookup(l, "photos", a.opts.autoescape);
                      if (m)
                        for (var n = m.length, o = 0; o < m.length; o++) {
                          var p = m[o];
                          c.set("photo", p),
                            c.set("loop.index", o + 1),
                            c.set("loop.index0", o),
                            c.set("loop.revindex", n - o),
                            c.set("loop.revindex0", n - o - 1),
                            c.set("loop.first", 0 === o),
                            c.set("loop.last", o === n - 1),
                            c.set("loop.length", n),
                            (h +=
                              '\n            <fieldset class="voting-gallery-wrapper-'),
                            (h += d.suppressValue(
                              d.memberLookup(p, "id", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h +=
                              '">\n                <figure class="poll-image-container">\n                    <div class="poll-image-results">\n                        <img src="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "globals"),
                                "mediaRoot",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h += d.suppressValue(
                              d.memberLookup(p, "filename", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h +=
                              '" />\n                        <div class="poll-results poll-results-voting-gallery">\n                            <div class="result" id="result-'),
                            (h += d.suppressValue(
                              d.memberLookup(p, "id", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h += '" title="'),
                            (h += d.suppressValue(
                              d.memberLookup(p, "name", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h +=
                              '">\n                                <div class="name">'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  p,
                                  "celebrity",
                                  a.opts.autoescape
                                ),
                                "display_name",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              '</div>\n                                <div class="radial-progress" data-progress="0">\n                                    <div class="circle">\n                                        <div class="mask full">\n                                            <div class="fill"></div>\n                                        </div>\n                                        <div class="mask half">\n                                            <div class="fill"></div>\n                                            <div class="fill fix"></div>\n                                        </div>\n                                    </div>\n                                    <div class="inset">\n                                        <div class="percentage">\n                                            <div class="numbers"><span>-</span><span>0%</span><span>1%</span><span>2%</span><span>3%</span><span>4%</span><span>5%</span><span>6%</span><span>7%</span><span>8%</span><span>9%</span><span>10%</span><span>11%</span><span>12%</span><span>13%</span><span>14%</span><span>15%</span><span>16%</span><span>17%</span><span>18%</span><span>19%</span><span>20%</span><span>21%</span><span>22%</span><span>23%</span><span>24%</span><span>25%</span><span>26%</span><span>27%</span><span>28%</span><span>29%</span><span>30%</span><span>31%</span><span>32%</span><span>33%</span><span>34%</span><span>35%</span><span>36%</span><span>37%</span><span>38%</span><span>39%</span><span>40%</span><span>41%</span><span>42%</span><span>43%</span><span>44%</span><span>45%</span><span>46%</span><span>47%</span><span>48%</span><span>49%</span><span>50%</span><span>51%</span><span>52%</span><span>53%</span><span>54%</span><span>55%</span><span>56%</span><span>57%</span><span>58%</span><span>59%</span><span>60%</span><span>61%</span><span>62%</span><span>63%</span><span>64%</span><span>65%</span><span>66%</span><span>67%</span><span>68%</span><span>69%</span><span>70%</span><span>71%</span><span>72%</span><span>73%</span><span>74%</span><span>75%</span><span>76%</span><span>77%</span><span>78%</span><span>79%</span><span>80%</span><span>81%</span><span>82%</span><span>83%</span><span>84%</span><span>85%</span><span>86%</span><span>87%</span><span>88%</span><span>89%</span><span>90%</span><span>91%</span><span>92%</span><span>93%</span><span>94%</span><span>95%</span><span>96%</span><span>97%</span><span>98%</span><span>99%</span><span>100%</span></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="votes">'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  l,
                                  "votesPercent",
                                  a.opts.autoescape
                                ),
                                d.memberLookup(p, "id", a.opts.autoescape),
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              ' Votes</div>\n                            </div>\n                        </div>\n                    </div>\n                    <figcaption class="poll-voting-gallery-info">\n                        <span>'),
                            (h += d.suppressValue(
                              d.memberLookup(p, "caption", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h += "</span> "),
                            (h += d.suppressValue(
                              d.memberLookup(p, "credit", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h +=
                              '\n                    </figcaption>\n                </figure>\n                <input class="form-input-voting-gallery tracked-onpage" type="radio" name="choice" id="choice'),
                            (h += d.suppressValue(
                              d.memberLookup(p, "id", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h += '" value="'),
                            (h += d.suppressValue(
                              d.memberLookup(p, "id", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h +=
                              '" data-track-category="WWIB" data-track-action="Vote" data-track-label="'),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.contextOrFrameLookup(b, c, "component"),
                                "title",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h += '" />\n                <label for="choice'),
                            (h += d.suppressValue(
                              d.memberLookup(p, "id", a.opts.autoescape),
                              a.opts.autoescape
                            )),
                            (h +=
                              '">\n                    Vote<span class="cta-full"> for '),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  p,
                                  "celebrity",
                                  a.opts.autoescape
                                ),
                                "display_name",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h +=
                              "!</span>\n                </label>\n            </fieldset>\n        ");
                        }
                      (c = c.pop()),
                        (h +=
                          '\n\n                <button type="submit" style="display:none;"> Vote </button>\n            <input type="hidden" name="id" value="'),
                        (h += d.suppressValue(
                          d.memberLookup(l, "content_id", a.opts.autoescape),
                          a.opts.autoescape
                        )),
                        (h +=
                          '"/>\n        </form>\n\n        <div class="voting-gallery-body">\n            <h3>\n            '),
                        (c = c.push());
                      var q = d.memberLookup(
                        d.contextOrFrameLookup(b, c, "component"),
                        "photos",
                        a.opts.autoescape
                      );
                      if (q)
                        for (var r = q.length, s = 0; s < q.length; s++) {
                          var t = q[s];
                          c.set("photo", t),
                            c.set("loop.index", s + 1),
                            c.set("loop.index0", s),
                            c.set("loop.revindex", r - s),
                            c.set("loop.revindex0", r - s - 1),
                            c.set("loop.first", 0 === s),
                            c.set("loop.last", s === r - 1),
                            c.set("loop.length", r),
                            (h += "\n                "),
                            (h += d.suppressValue(
                              d.memberLookup(
                                d.memberLookup(
                                  t,
                                  "celebrity",
                                  a.opts.autoescape
                                ),
                                "display_name",
                                a.opts.autoescape
                              ),
                              a.opts.autoescape
                            )),
                            (h += " "),
                            d.memberLookup(
                              d.contextOrFrameLookup(b, c, "loop"),
                              "last",
                              a.opts.autoescape
                            ) || (h += "vs."),
                            (h += "\n            ");
                        }
                      (c = c.pop()),
                        (h += "\n            </h3>\n            "),
                        (h += d.suppressValue(
                          d.memberLookup(
                            d.contextOrFrameLookup(b, c, "component"),
                            "body",
                            a.opts.autoescape
                          ),
                          a.opts.autoescape
                        )),
                        (h += "\n            "),
                        a.getTemplate(
                          "partials/_social-sharing.html.twig",
                          !1,
                          "voting-gallery.html.twig",
                          function (a, d) {
                            return a
                              ? void e(a)
                              : void d.render(
                                  b.getVariables(),
                                  c.push(),
                                  function (a, b) {
                                    return a
                                      ? void e(a)
                                      : ((h += b),
                                        void (h +=
                                          "\n        </div>\n</div>\n"));
                                  }
                                );
                          }
                        );
                    }
                  (c = c.pop()), e(null, h);
                } catch (u) {
                  e(d.handleError(u, f, g));
                }
              }
              return {
                root: a,
              };
            })();
          })();
      },
      {},
    ],
    30: [
      function (a, b, c) {
        a("../../../../../../node_modules/nunjucks/browser/nunjucks-slim"),
          a("./nunjucks-templates");
        var d = a("../../../../../../lib/nunjucks-filters"),
          e = new nunjucks.Environment(),
          f = a("../../../../../../config/sites").usweekly,
          g = f.globals.production;
        d(e, g), (b.exports = e);
      },
      {
        "../../../../../../config/sites": 2,
        "../../../../../../lib/nunjucks-filters": 7,
        "../../../../../../node_modules/nunjucks/browser/nunjucks-slim": 9,
        "./nunjucks-templates": 29,
      },
    ],
    31: [
      function (a, b, c) {
        var d = a("jquery");
        d(".poll-form-watercooler .poll-input").on("click", function (a) {
          return (
            ($formData = d(".poll-form-watercooler")),
            d(this).addClass("chosen"),
            d.ajax({
              type: "POST",
              url: "/post-poll-vote",
              data: $formData.serialize(),
              success: function (a) {
                e(a), d(".poll-form-watercooler :input").prop("disabled", !0);
              },
            }),
            !1
          );
        }),
          d("#view-watercooler-poll-results").click(function (a) {
            a.preventDefault();
            var b = JSON.stringify(d(this).data());
            return f(b), !1;
          });
        var e = function (a) {
            var b = d.parseJSON(a),
              c = b.result;
            d(".poll-results-watercooler").css("display", "flex"),
              d.each(c, function (a, b) {
                (d(
                  ".poll-results-watercooler #result-" +
                    b.option +
                    " .radial-progress"
                )[0].dataset.progress = 0),
                  null != b.count &&
                    setTimeout(function () {
                      (d(
                        ".poll-results-watercooler #result-" +
                          b.option +
                          " .radial-progress"
                      )[0].dataset.progress = b.percent),
                        d(
                          ".poll-results-watercooler #result-" +
                            b.option +
                            " .votes"
                        ).text(b.count.toLocaleString("en"));
                    });
              });
          },
          f = function (a) {
            d.ajax({
              type: "POST",
              data: a,
              contentType: "application/json",
              url: "/return-poll-votes",
              success: function (a) {
                e(a);
              },
            });
          };
      },
      {
        jquery: 8,
      },
    ],
    32: [
      function (a, b, c) {
        var d = a("jquery"),
          e = d("#module-reading-list-mobile-control");
        e.on("click", function () {
          d(this).parent().toggleClass("module-reading-list-active");
        });
      },
      {
        jquery: 8,
      },
    ],
    33: [
      function (a, b, c) {
        var d = a("jquery");
        b.exports = function (a, b) {
          if (a.length && b.length) {
            var c = a.height(),
              e = a.offset().top,
              f = d("body").css("padding-top"),
              g = parseInt("97px" == f || "127px" == f ? f : 0),
              h = c,
              i = d(window).scrollTop() - e + g,
              j = (100 * i) / h;
            i > h && (j = 100), b.hasClass("freeze") || b.css("width", j + "%");
          }
        };
      },
      {
        jquery: 8,
      },
    ],
    34: [
      function (a, b, c) {
        var d = a("jquery");
        d(document).ready(function () {
          d("body").on("click", ".social-icon", function (a) {
            var b = d(this),
              c = b.attr("href"),
              e = b.children().attr("class").split("-");
            switch ((e = e[e.length - 1])) {
              case "facebook":
                FB.ui(
                  {
                    method: "share",
                    href: c,
                  },
                  function (a) {}
                ),
                  a.preventDefault();
                break;
              case "twitter":
                window.open(
                  "http://twitter.com/intent/tweet?url=" +
                    encodeURIComponent(c) +
                    "&text=" +
                    encodeURIComponent(b.data("tweetText")) +
                    "&via=" +
                    encodeURIComponent(b.data("tweetVia")),
                  "Tweet",
                  "top=200,left=0,toolbar=0,status=0,width=580,height=325"
                ),
                  a.preventDefault();
                break;
              case "pinterest":
                var f = document.createElement("script");
                f.setAttribute("type", "text/javascript"),
                  f.setAttribute("charset", "UTF-8"),
                  f.setAttribute(
                    "src",
                    "https://assets.pinterest.com/js/pinmarklet.js?r=" +
                      99999999 * Math.random()
                  ),
                  document.body.appendChild(f),
                  a.preventDefault();
                break;
              case "plus":
                window.open(
                  "https://plus.google.com/share?url=" + c,
                  "Share",
                  "top=200,left=0,toolbar=0,status=0,width=580,height=325"
                ),
                  a.preventDefault();
            }
          });
        });
      },
      {
        jquery: 8,
      },
    ],
    35: [
      function (a, b, c) {
        !(function (a) {
          "use strict";
          var b = function (a, b) {
            (this.element = a), (this.type = b);
          };
          b.prototype = {
            add: function (a) {
              (this.callback = a),
                this.element.addEventListener(this.type, this.callback, !1);
            },
            remove: function () {
              this.element.removeEventListener(this.type, this.callback, !1);
            },
          };
          var c = function (a) {
            (this.element = a),
              (this.transitionEnd = this.whichTransitionEnd()),
              (this.event = new b(this.element, this.transitionEnd));
          };
          c.prototype = {
            whichTransitionEnd: function () {
              var a = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend",
              };
              for (var b in a)
                if (void 0 !== this.element.style[b]) return a[b];
            },
            bind: function (a) {
              this.event.add(a);
            },
            unbind: function () {
              this.event.remove();
            },
          };
          var d = {
            list: [],
            getPosition: function (a) {
              if (Array.prototype.indexOf) return this.list.indexOf(a);
              for (var b = 0, c = this.list.length; c > b; b++)
                if (this.list[b] === a) return b;
              return -1;
            },
            insert: function (a) {
              var b = this.getPosition(a),
                d = -1 !== b;
              return (
                d ||
                  (this.list.push(a),
                  this.list.push(new c(a)),
                  (b = this.getPosition(a))),
                this.list[b + 1]
              );
            },
          };
          a.transitionEnd = function (a) {
            if (!a) throw "You need to pass an element as parameter!";
            var b = a[0] || a,
              c = d.insert(b);
            return c;
          };
        })(window);
      },
      {},
    ],
    36: [
      function (a, b, c) {
        var d = a("jquery");
        d(".poll-form-voting-gallery .form-input-voting-gallery").on(
          "click",
          function (a) {
            return (
              ($formData = d(this).closest(".poll-form-voting-gallery")),
              console.log(d(this).closest(".poll-form-voting-gallery")),
              d(this).addClass("chosen"),
              d(".poll-form-voting-gallery").addClass("voted"),
              d.ajax({
                type: "POST",
                url: "/post-poll-vote",
                data: $formData.serialize(),
                success: function (a) {
                  e(a),
                    d(".poll-form-voting-gallery :input").prop("disabled", !0);
                },
              }),
              !1
            );
          }
        );
        var e = function (a) {
          var b = d.parseJSON(a),
            c = b.result;
          d(".poll-results-voting-gallery").addClass("show"),
            d.each(c, function (a, b) {
              null != b.count &&
                setTimeout(function () {
                  (d(
                    ".poll-results-voting-gallery #result-" +
                      b.option +
                      " .radial-progress"
                  )[0].dataset.progress = b.percent),
                    d(
                      ".poll-results-voting-gallery #result-" +
                        b.option +
                        " .votes"
                    ).text(b.count.toLocaleString("en"));
                });
            });
        };
      },
      {
        jquery: 8,
      },
    ],
    37: [
      function (a, b, c) {
        (window.jQuery = a("jquery")),
          a("../../../../../../node_modules/waypoints/lib/jquery.waypoints.js");
        var d = a("jquery"),
          e = d(".celebrity-landing .celebrity-body-nav-links");
        new Waypoint({
          element: d(".footer"),
          handler: function (a) {
            "down" == a
              ? e.addClass("footer-in-view")
              : e.removeClass("footer-in-view");
          },
          offset: "100%",
        });
        d(document).ready(function () {
          var a = window.location.hash;
          (a = a.substring(1)),
            "" !== a && f(a),
            g(),
            d(".celebrity-body-sidebar a").on("click", function (a) {
              a.preventDefault();
              var b = d(this);
              if (
                d(window).width() < 481 &&
                !d(".celebrity-body-sidebar").hasClass("opened")
              )
                return d(".celebrity-body-sidebar").addClass("opened"), !1;
              if (b.hasClass("toggle-link")) {
                d("html, body").stop().animate(
                  {
                    scrollTop: 0,
                  },
                  500,
                  "swing"
                );
                var c = b.attr("href");
                (c = c.substring(1)),
                  f(c),
                  d(".celebrity-body-sidebar").removeClass("opened");
              } else window.location.href = b.attr("href");
            }),
            d(".celebrity-body-sidebar .sidebar-close").on("click", function (
              a
            ) {
              d(".celebrity-body-sidebar").removeClass("opened");
            });
        }),
          d(window).resize(function () {
            g();
          });
        var f = function (a) {
            switch ((d(".celebrity-body-sidebar a").removeClass("active"), a)) {
              case "main":
                d(".celebrity-info, .celebrity-news").removeClass("no-show"),
                  d(".celebrity-photos").addClass("no-show"),
                  d(".celebrity-body-nav-links li:nth-child(2) a").addClass(
                    "active"
                  ),
                  history.pushState(
                    "",
                    document.title,
                    window.location.pathname + "#main"
                  );
                break;
              case "news":
                d(".celebrity-news").removeClass("no-show"),
                  d(".celebrity-info, .celebrity-photos").addClass("no-show"),
                  d(".celebrity-body-nav-links li:nth-child(3) a").addClass(
                    "active"
                  ),
                  history.pushState(
                    "",
                    document.title,
                    window.location.pathname + "#news"
                  );
                break;
              case "photos":
                d(".celebrity-photos").removeClass("no-show"),
                  d(".celebrity-info, .celebrity-news").addClass("no-show"),
                  d(".celebrity-body-nav-links li:nth-child(4) a").addClass(
                    "active"
                  ),
                  history.pushState(
                    "",
                    document.title,
                    window.location.pathname + "#photos"
                  );
            }
          },
          g = function () {
            var a = d(".celebrity-body-nav-links"),
              b = a.height(),
              c = d(window).height(),
              e = d("body").height(),
              f = d("body").outerHeight(),
              g = d("footer.footer").outerHeight(!0),
              h = e - g;
            if (b > h && c > f) {
              var i = h - 60;
              a.css("height", i);
            } else a.css("height", "");
          };
      },
      {
        "../../../../../../node_modules/waypoints/lib/jquery.waypoints.js": 13,
        jquery: 8,
      },
    ],
    38: [
      function (a, b, c) {
        window.jQuery = a("jquery");
        var d = a("jquery"),
          e = a("../modules/nunjucks");
        d(document).ready(function () {
          d(".home-layout .video-post").on("click", function (a) {
            if (d(window).width() > 800 && !d(this).hasClass("video-opened")) {
              a.preventDefault(),
                ($videoBlock = d(this)),
                ($videoPlayBtn = $videoBlock.find(".icon-play")),
                $videoBlock
                  .find(".icon-play, .article-box-image, .article-box-content")
                  .css("opacity", "0"),
                $videoBlock
                  .find(".icon-play, .article-box-image, .article-box-content")
                  .delay(450)
                  .css("z-index", "0"),
                $videoBlock.find(".article-media-lead").css("opacity", "1"),
                $videoBlock.addClass("video-opened");
              var b = $videoPlayBtn.data("video"),
                c = $videoPlayBtn.data("media"),
                f = {
                  videoData: {
                    data: {
                      media: c,
                    },
                  },
                  videoAuto: !0,
                };
              if (b) {
                var g = e.render("partials/_brightcove.html.twig", f);
                $videoBlock.find(".brightcove-video").remove(),
                  $videoBlock.prepend(g);
              }
            } else d(window).width() > 800 && d(this).hasClass("video-opened") && a.preventDefault();
          });
        }),
          d(window).resize(function () {
            d(window).width() <= 800 &&
              d(".home-layout .video-opened")
                .find(".icon-play, .article-box-image, .article-box-content")
                .css({
                  opacity: "",
                  "z-index": "",
                });
          });
      },
      {
        "../modules/nunjucks": 30,
        jquery: 8,
      },
    ],
  },
  {},
  [16]
);

$(document).ready(function () {
  $("#sidebar").scrollToFixed({ marginTop: 160 }); //+++
  $("body").removeClass("header-active module-reading-list-collapsed");
});

jQuery("a").attr("target", "_blank");

function today() {
  var mydate = new Date();
  var dayarray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var montharray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.write(
    "" +
      dayarray[mydate.getDay()] +
      ", " +
      montharray[mydate.getMonth()] +
      " " +
      mydate.getDate() +
      ", " +
      mydate.getFullYear()
  );
}

today();

const projLazyLoad = new LazyLoad({
  elements_selector: "img",
});
/*=================================================================*/
