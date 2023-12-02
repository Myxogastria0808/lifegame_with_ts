(() => {
    'use strict';
    ({
        607: function () {
            var t =
                (this && this.__awaiter) ||
                function (t, e, i, o) {
                    return new (i || (i = Promise))(function (r, n) {
                        function c(t) {
                            try {
                                s(o.next(t));
                            } catch (t) {
                                n(t);
                            }
                        }
                        function l(t) {
                            try {
                                s(o.throw(t));
                            } catch (t) {
                                n(t);
                            }
                        }
                        function s(t) {
                            var e;
                            t.done
                                ? r(t.value)
                                : ((e = t.value),
                                  e instanceof i
                                      ? e
                                      : new i(function (t) {
                                            t(e);
                                        })).then(c, l);
                        }
                        s((o = o.apply(t, e || [])).next());
                    });
                };
            const e = (t, e, i, o) => {
                    const r = o % 2,
                        n = Math.abs(r - 1);
                    for (let o = 1; o <= e; o++)
                        for (let e = 1; e <= t; e++) {
                            if ((i[o][e], c.save(), 0 === i[o][e][n]))
                                3 ===
                                i[o - 1][e - 1][n] +
                                    i[o - 1][e][n] +
                                    i[o - 1][e + 1][n] +
                                    i[o][e - 1][n] +
                                    i[o][e][n] +
                                    i[o][e + 1][n] +
                                    i[o + 1][e - 1][n] +
                                    i[o + 1][e][n] +
                                    i[o + 1][e + 1][n]
                                    ? ((i[o][e][r] = 1), c.fillRect(6 * e, 6 * o, 6, 6))
                                    : ((i[o][e][r] = 0),
                                      c.clearRect(6 * e, 6 * o, 6, 6),
                                      c.strokeRect(6 * e, 6 * o, 6, 6));
                            else if (1 === i[o][e][n]) {
                                const t =
                                    i[o - 1][e - 1][n] +
                                    i[o - 1][e][n] +
                                    i[o - 1][e + 1][n] +
                                    i[o][e - 1][n] +
                                    i[o][e][n] +
                                    i[o][e + 1][n] +
                                    i[o + 1][e - 1][n] +
                                    i[o + 1][e][n] +
                                    i[o + 1][e + 1][n];
                                3 === t || 2 === t
                                    ? ((i[o][e][r] = 1), c.fillRect(6 * e, 6 * o, 6, 6))
                                    : ((i[o][e][r] = 0),
                                      c.clearRect(6 * e, 6 * o, 6, 6),
                                      c.strokeRect(6 * e, 6 * o, 6, 6));
                            } else console.error('error');
                            c.restore();
                        }
                    return i;
                },
                i = (t) =>
                    new Promise((e) => {
                        setTimeout(() => {
                            e();
                        }, t);
                    }),
                o = document.getElementById('myCanvas'),
                r = 612 * devicePixelRatio,
                n = 612 * devicePixelRatio;
            o.setAttribute('width', String(612)),
                o.setAttribute('height', String(612)),
                (o.style.width = String(r / devicePixelRatio) + 'px'),
                (o.style.height = String(n / devicePixelRatio) + 'px');
            const c = o.getContext('2d');
            (c.strokeStyle = 'black'),
                (c.lineWidth = 0.5),
                (() => {
                    for (let t = 0; t <= 101; t++)
                        for (let e = 0; e <= 101; e++)
                            c.save(), c.translate(6 * e, 6 * t), c.strokeRect(0, 0, 6, 6), c.restore();
                })(),
                t(void 0, void 0, void 0, function* () {
                    let t = ((t, e) => {
                        const i = [];
                        let o = [];
                        for (let t = 0; t <= 101; t++) {
                            o = [];
                            for (let e = 0; e <= 101; e++)
                                o[e] =
                                    0 === e || 101 === e || 0 === t || 101 === t
                                        ? [0, 0]
                                        : [0, Math.floor(2 * Math.random())];
                            i[t] = o;
                        }
                        return i;
                    })();
                    for (let o = 0; o <= 1e3; o++) (t = e(100, 100, t, o)), yield i(100);
                });
        },
    })[607]();
})();
