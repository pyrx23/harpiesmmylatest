"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3154],
  {
    60174: function (n, e, r) {
      r.d(e, {
        Z: function () {
          return l;
        },
      });
      var t = r(47568),
        a = r(70655),
        i = r(85893),
        s = r(67294),
        d = r(52416),
        c = r(14045),
        o = r(52638),
        u = r(65809);
      function l(n) {
        var e = n.onCompleted,
          r = n.darkmode,
          l = (0, d.Z)(),
          h = l.address,
          p = l.wallet,
          m = l.connectWallet,
          f = l.chain,
          g = (0, s.useCallback)(
            (0, t.Z)(function () {
              return (0, a.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      u.B({ action: "click_header_connect_wallet" }), [4, m()]
                    );
                  case 1:
                    return n.sent(), [2];
                }
              });
            }),
            [m]
          );
        return (
          (0, s.useEffect)(
            function () {
              p && e && e();
            },
            [e, p]
          ),
          (0, i.jsx)("button", {
            className:
              "flex items-center gap-2 px-3 py-3 transition duration-200 ease-in-out bg-gray-800 rounded-full group-active:bg-gray-800 group-focus:ring-gray-300 group-focus:ring group font-display interact-button",
            onClick: a,
            children: r
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    p &&
                      (0, i.jsx)("div", {
                        className: "pl-2",
                        children: (0, i.jsx)(o.Hashicon, {
                          value: h,
                          size: 24,
                        }),
                      }),
                    p
                      ? (0, i.jsxs)("div", {
                          className: "flex flex-row gap-3 align-middle",
                          children: [
                            (0, i.jsx)("p", {
                              className: "pl-1 text-white",
                              children: (0, c.W3)(h),
                            }),
                            f
                              ? (0, i.jsx)("p", {
                                  className:
                                    "px-2 py-1 text-xs text-center bg-white rounded-full font-display",
                                  children: f.name,
                                })
                              : (0, i.jsx)("p", {
                                  className:
                                    "px-2 py-1 text-xs text-center bg-red-300 rounded-full font-display",
                                  children: "Unsupported Chain",
                                }),
                            (0, i.jsxs)("div", {
                              className: "block my-auto mr-1 -ml-0.5",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "bg-green-500 opacity-10 animate-opacityPulse w-3 h-3 rounded-full flex items-center justify-center -z-10",
                                }),
                                (0, i.jsx)("div", {
                                  className: "relative z-0",
                                  children: (0, i.jsx)("div", {
                                    className:
                                      "bg-green-500 -mt-3 absolute inset-0.5 w-2 h-2 rounded-full z-10",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, i.jsxs)("div", {
                          className:
                            "flex flex-row text-sm text-black font-display",
                          children: [
                            (0, i.jsx)("button", {
                              className: "px-2 text-harpie",
                              onClick: g,
                              children: "Connect Wallet",
                            }),
                            (0, i.jsxs)("div", {
                              className: "block mx-1 my-auto",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "bg-red-500 opacity-10 animate-opacityPulse w-3 h-3 rounded-full flex items-center justify-center -z-10",
                                }),
                                (0, i.jsx)("div", {
                                  className: "relative z-0",
                                  children: (0, i.jsx)("div", {
                                    className:
                                      "bg-red-500 -mt-3 absolute inset-0.5 w-2 h-2 rounded-full z-10",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", {
                      className: "pl-2 pr-1",
                      children: (0, i.jsx)(o.Hashicon, { value: h, size: 24 }),
                    }),
                    p
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              className: "",
                              children: (0, i.jsx)("p", {
                                className: "text-black",
                                children: (0, c.W3)(h),
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "flex flex-col",
                              children: (0, i.jsx)("div", {
                                className: "pl-1 pr-2 text-green-600",
                                children: "Connected",
                              }),
                            }),
                          ],
                        })
                      : (0, i.jsxs)("div", {
                          className: "text-sm text-black font-display",
                          children: [
                            (0, i.jsx)("p", { children: "Not Connected" }),
                            (0, i.jsx)("button", {
                              className: "text-harpie",
                              onClick: g,
                              children: "Connect Wallet",
                            }),
                          ],
                        }),
                  ],
                }),
          })
        );
      }
    },
    53154: function (n, e, r) {
      r.d(e, {
        Z: function () {
          return y;
        },
      });
      var t = r(85893),
        a = r(6512),
        i = r(5506),
        s = r(69065),
        d = r(94184),
        c = r.n(d),
        o = r(60174),
        u = r(41664),
        l = r.n(u),
        h = r(52416),
        p = r(25675),
        m = r.n(p),
        f = r(37887),
        g = r(30245),
        x = r(67294),
        b = r(65809),
        v = r(52638);
      function y(n) {
        var e = n.className,
          r = n.landing,
          d = n.onboarding,
          u = n.enterprise,
          p = n.rpc,
          y = (n.security, n.affiliate),
          I = (0, h.Z)(),
          $ = I.wallet,
          j = I.address,
          k = I.chain,
          N = (I.setChain, I.loading),
          w = (0, f.a)(g.KK, {
            variables: { dashboardId: j, chainId: null == k ? void 0 : k.id },
            skip: N && !j && !k,
          }).data,
          S = (0, x.useState)(!0);
        S[0], S[1];
        var A = (null == w ? void 0 : w.dashboard) != null,
          _ =
            !r && j
              ? [
                  {
                    name: "Contact Support",
                    href: "https://discord.gg/tgCrYeZGNN",
                    target: "_blank",
                    gaEventName: "click_header_support",
                  },
                ]
              : [
                  {
                    name: "Address Scanner",
                    href: "javascript:void(0)",
                    gaEventName: "click_header_transaction_scanner",
                  },
                  {
                    name: "Security",
                    href: "javascript:void(0)",
                    gaEventName: "click_header_security",
                  },
                  {
                    name: "Whitepaper",
                    href: "https://harpie.gitbook.io/harpie-whitepaper/",
                    target: "_blank",
                    gaEventName: "click_header_whitepaper",
                  },
                  {
                    name: "Community",
                    href: "https://discord.gg/WfBtxZfp85",
                    target: "_blank",
                    gaEventName: "click_header_community",
                  },
                  {
                    name: "Enterprise",
                    href: "javascript:void(0)",
                    gaEventName: "click_header_enterprise",
                  },
                ];
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(a.p, {
            as: "nav",
            id: "blink",
            className: c()(
              "font-display fixed z-30 top-0 inset-x-0 ",
              e,
              "font-display fixed z-30 top-0 md:inset-x-0 inset-x-0",
              p
                ? "bg-gray-100 border-b border-gray-300"
                : r
                ? "bg-gray-900 backdrop-blur-2xl bg-opacity-[0.86]"
                : "bg-gray-900"
            ),
            children: function (n) {
              var e = n.open;
              return (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "relative flex items-center justify-between p-2 md:px-6",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-wrap items-center justify-center  flex-1 gap-4 py-4  md:items-stretch md:justify-start md:flex-nowrap",
                        children: [
                          (0, t.jsx)(l(), {
                            href: p ? "/rpc" : "/",
                            children: (0, t.jsx)("a", {
                              className: "z-0 h-8 mx-auto md:hidden shrink-0",
                              onClick: function () {
                                return b.B({
                                  action: "click_header_logo_to_landing",
                                });
                              },
                              children: (0, t.jsx)(m(), {
                                src: "./images/Harpie-Logomark-Orange.svg",
                                alt: "Harpie",
                                layout: "fill",
                                draggable: "false",
                                priority: !0,
                              }),
                            }),
                          }),
                          (0, t.jsx)(l(), {
                            href: p ? "/rpc" : "/",
                            children: (0, t.jsx)("a", {
                              className: c()(
                                "relative hover:opacity-80 items-center hiddenSm md:block shrink-0",
                                r
                                  ? "w-[7.5rem] mr-2 transform scale-105 rounded-sm overflow-hidden h-auto"
                                  : "w-11 h-11"
                              ),
                              onClick: function () {
                                return b.B({
                                  action: "click_header_logo_to_landing",
                                });
                              },
                              children: r
                                ? (0, t.jsx)(m(), {
                                    src: "./images/Harpie-Aeonik-Logo.svg",
                                    alt: "Harpie",
                                    layout: "fill",
                                    draggable: "false",
                                    priority: !0,
                                  })
                                : (0, t.jsx)(m(), {
                                    src: "./images/Harpie-Logomark-Orange.svg",
                                    alt: "Harpie",
                                    layout: "fill",
                                    draggable: "false",
                                    priority: !0,
                                  }),
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "items-center hiddenSm gap-4 mt-1 md:flex",
                            children: _.map(function (n) {
                              return (0, t.jsx)(
                                l(),
                                {
                                  href: n.href,
                                  children: (0, t.jsx)("a", {
                                    target: n.target,
                                    rel: "noreferrer",
                                    className: c()(
                                      "duration-200 transition ease-in-out rounded-sm hover:bg-harpie hover:text-white",
                                      "py-2 px-3 text-sm font-medium md:text-base cursor-pointer interact-button",
                                      p
                                        ? "text-gray-900"
                                        : r
                                        ? "text-gray-100"
                                        : "text-white"
                                    ),
                                    onClick: function () {
                                      return b.B({ action: n.gaEventName });
                                    },
                                    children: n.name,
                                  }),
                                },
                                n.name
                              );
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "z-10 flex items-center gap-4 md:hidden",
                        children: (0, t.jsxs)(a.p.Button, {
                          className:
                            "flex items-center justify-center mr-4 text-white rounded-md hover:text-orange-300 hover:bg-harpie-200 focus:outline-none",
                          children: [
                            (0, t.jsx)("span", {
                              className: "sr-only",
                              children: "Open main menu",
                            }),
                            e
                              ? (0, t.jsx)(i.Z, {
                                  className: "block w-8 h-8 text-harpie",
                                  "aria-hidden": "true",
                                })
                              : (0, t.jsx)(s.Z, {
                                  className: "block w-8 h-8 text-harpie",
                                  "aria-hidden": "true",
                                }),
                          ],
                        }),
                      }),
                      u
                        ? (0, t.jsx)(l(), {
                            href: "enterprise/login/",
                            children: (0, t.jsx)("a", {
                              className:
                                "px-6 py-2 text-center text-white transition duration-200 ease-in-out border-2 rounded-sm cursor-pointer w-max bg-harpie hover:bg-harpie-600 active:bg-harpie-600 focus:ring-harpie-200 focus:ring border-harpie",
                              onClick: function () {
                                return b.B({
                                  action: "click_header_enter_app",
                                });
                              },
                              children: "Get Started",
                            }),
                          })
                        : (0, t.jsx)("div", {
                            className: "items-center hiddenSm gap-4 md:flex",
                            children: r
                              ? (0, t.jsx)(t.Fragment, {
                                  children: (0, t.jsx)(l(), {
                                    href: A
                                      ? "/app/dashboard/"
                                          .concat(j, "/")
                                          .concat(k ? "?chainId=" + k.id : "")
                                      : "/onboarding/basic".concat(
                                          y ? "/?affiliate=" + y : ""
                                        ),
                                    children: (0, t.jsx)("a", {
                                      className:
                                        "px-6 py-2 text-center text-white transition duration-200 ease-in-out border-2 rounded-sm cursor-pointer w-max bg-harpie hover:bg-harpie-600 active:bg-harpie-600 focus:ring-harpie-200 focus:ring border-harpie",
                                      onClick: function () {
                                        return b.B({
                                          action: "click_header_enter_app",
                                        });
                                      },
                                      children: "Enter App",
                                    }),
                                  }),
                                })
                              : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    p
                                      ? (0, t.jsx)(o.Z, {})
                                      : (0, t.jsx)(o.Z, { darkmode: !0 }),
                                    $ && (A || !d)
                                      ? !p &&
                                        (0, t.jsx)(l(), {
                                          href: "/app/dashboard/"
                                            .concat(j, "/")
                                            .concat(
                                              k ? "?chainId=" + k.id : ""
                                            ),
                                          children: (0, t.jsxs)("button", {
                                            className:
                                              "flex flex-row overflow-hidden transition duration-200 ease-in-out rounded-full bg-harpie hover:bg-harpie-600 group",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className:
                                                  "flex items-center justify-center py-3 pl-5 rounded-tl-sm rounded-bl-sm",
                                                children: (0, t.jsx)(
                                                  v.Hashicon,
                                                  { value: j, size: 24 }
                                                ),
                                              }),
                                              (0, t.jsx)("a", {
                                                className:
                                                  "py-3 pl-3 pr-6 text-center text-white rounded-tr-sm rounded-br-sm cursor-pointer w-max",
                                                children: (0, t.jsx)("div", {
                                                  className:
                                                    "flex flex-row gap-2 mx-auto my-auto",
                                                  children: (0, t.jsx)("p", {
                                                    children: "Dashboard",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        })
                                      : (0, t.jsx)(t.Fragment, {}),
                                  ],
                                }),
                          }),
                    ],
                  }),
                  (0, t.jsxs)(a.p.Panel, {
                    className:
                      "flex flex-col items-center gap-2 py-2 md:hidden",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "flex flex-col w-full gap-2 py-2 text-center",
                        children: _.map(function (n) {
                          return (
                            "onboarding" !== n.name &&
                            (0, t.jsx)(
                              a.p.Button,
                              {
                                as: l(),
                                href: n.href,
                                children: (0, t.jsx)("a", {
                                  target: n.target,
                                  rel: "noreferrer",
                                  className: c()(
                                    "hover:bg-harpie rounded-sm hover:text-white",
                                    "py-2 mx-24 text-sm font-medium md:text-base cursor-pointer",
                                    p ? "text-gray-900" : "text-gray-100"
                                  ),
                                  children: n.name,
                                }),
                              },
                              n.name
                            )
                          );
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "flex flex-row items-center justify-center gap-4 text-center md:hidden",
                        children: (0, t.jsxs)("p", {
                          className: "px-4 text-red-400",
                          children: ["", (0, t.jsx)("br", {}), ""],
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
          }),
        });
      }
    },
    30245: function (n, e, r) {
      r.d(e, {
        D7: function () {
          return E;
        },
        Ig: function () {
          return q;
        },
        JY: function () {
          return B;
        },
        K2: function () {
          return P;
        },
        KK: function () {
          return A;
        },
        N9: function () {
          return F;
        },
        RW: function () {
          return W;
        },
        S4: function () {
          return Z;
        },
        VQ: function () {
          return z;
        },
        Y$: function () {
          return C;
        },
        _E: function () {
          return L;
        },
        cC: function () {
          return G;
        },
        dK: function () {
          return H;
        },
        eH: function () {
          return K;
        },
        jE: function () {
          return R;
        },
        kC: function () {
          return T;
        },
        kE: function () {
          return _;
        },
        un: function () {
          return D;
        },
        xp: function () {
          return V;
        },
      });
      var t = r(7297),
        a = r(22865);
      function i() {
        var n = (0, t.Z)([
          "\n  query GetDashboard($dashboardId: String!, $chainId: Int!) {\n    dashboard(id: $dashboardId, chainId: $chainId) {\n      id\n      chainId\n      email\n      gasLimit\n      status\n      settings {\n        isTokenProtectionEmailsEnabled\n        isSetTrustedNetworkEmailsEnabled\n        isTokenWithdrawalEmailsEnabled\n        isSetWithdrawalAddressEmailsEnabled\n        isFrontrunnerSuccessEmailsEnabled\n      }\n      trustedApps\n      trustedAddresses {\n        address\n        name\n        isAppAddress\n      }\n      createdAt\n      updatedAt\n      affiliate\n    }\n  }\n",
        ]);
        return (
          (i = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, t.Z)([
          "\n  query GetTokens($dashboardId: String!, $chainId: Int!) {\n    tokens(dashboardId: $dashboardId, chainId: $chainId) {\n      isApproved\n      balance\n      ids\n      vaultBalance\n      vaultIds\n      metadata {\n        address\n        name\n        symbol\n        erc20Value\n        erc721Values\n        type\n        avatar\n        decimals\n      }\n      dashboard {\n        id\n        chainId\n      }\n    }\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, t.Z)([
          "\n  query GetTransactions(\n    $dashboardId: String!\n    $chainId: Int!\n    $type: TransactionType\n    $status: TransactionStatus\n  ) {\n    transactions(dashboardId: $dashboardId, chainId: $chainId, type: $type, status: $status) {\n      id\n      type\n      status\n      createdAt\n      updatedAt\n      payload\n      dashboard {\n        id\n        chainId\n      }\n    }\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, t.Z)([
          "\n  query GetTokenMetadata($address: String!, $chainId: Int!) {\n    tokenMetadata(address: $address, chainId: $chainId) {\n      address\n      chainId\n      name\n      symbol\n      erc20Value\n      erc721Values\n      type\n      avatar\n      decimals\n    }\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function o() {
        var n = (0, t.Z)([
          "\n  query GetAllTokenMetadata($chainId: Int!) {\n    allTokenMetadata(chainId: $chainId) {\n      address\n      chainId\n      name\n      symbol\n      erc20Value\n      erc721Values\n      type\n      avatar\n      decimals\n    }\n  }\n",
        ]);
        return (
          (o = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = (0, t.Z)([
          "\n  query ChangeRecipientSignature(\n    $dashboardId: String!\n    $currentRecipientAddress: String!\n    $desiredRecipientAddress: String!\n    $signature: String!\n    $chainId: Int!\n  ) {\n    changeRecipientSignature(\n      dashboardId: $dashboardId\n      currentRecipientAddress: $currentRecipientAddress\n      desiredRecipientAddress: $desiredRecipientAddress\n      signature: $signature\n      chainId: $chainId\n    ) {\n      signature\n      exp\n    }\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, t.Z)([
          "\n  query SignedToken($subject: String!) {\n    signedToken(subject: $subject) {\n      sub\n      iat\n      exp\n      signature\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = (0, t.Z)([
          "\n  query TrustedNetworkToken($subject: String!) {\n    trustedNetworkToken(subject: $subject) {\n      sub\n      iat\n      exp\n      signature\n    }\n  }\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, t.Z)([
          "\n  query IsValidPassword($password: String!) {\n    isValidPassword(password: $password)\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = (0, t.Z)([
          "\n  query UserFeedback($dashboardId: String!, $chainId: Int!) {\n    userFeedback(dashboardId: $dashboardId, chainId: $chainId) {\n      responses\n      createdAt\n    }\n  }\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = (0, t.Z)([
          "\n  query WalletList($id: String!) {\n    walletList(id: $id) {\n      id\n      name\n      chainId\n      dashboardIds\n      pendingInvites {\n        inviteeId\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = (0, t.Z)([
          "\n  query WalletListByDashboard($dashboardId: String!, $chainId: Int!) {\n    walletListByDashboard(dashboardId: $dashboardId, chainId: $chainId) {\n      id\n      name\n      chainId\n      dashboardIds\n      pendingInvites {\n        inviteeId\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = (0, t.Z)([
          "\n  query WalletListInvites($dashboardId: String!, $chainId: Int!) {\n    walletListInvites(dashboardId: $dashboardId, chainId: $chainId) {\n      walletList {\n        id\n        name\n      }\n      inviteeId\n      requesterId\n      chainId\n      createdAt\n    }\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = (0, t.Z)([
          "\n  query Approvals($address: String!) {\n    approvals(address: $address) {\n      erc20Approvals\n      erc721Approvals\n    }\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = (0, t.Z)([
          "\n  query Task($key: String!, $dashboardId: String!, $chainId: Int!) {\n    task(key: $key, dashboardId: $dashboardId, chainId: $chainId) {\n      key\n      title\n      description\n      priority\n      payload\n      status\n      completedAt\n      createdAt\n      updatedAt\n      dashboardId\n      chainId\n    }\n  }\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = (0, t.Z)([
          "\n  query TasksByDashboard($dashboardId: String!, $chainId: Int!) {\n    tasksByDashboard(dashboardId: $dashboardId, chainId: $chainId) {\n      key\n      title\n      description\n      priority\n      payload\n      status\n      completedAt\n      createdAt\n      updatedAt\n      dashboardId\n      chainId\n    }\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = (0, t.Z)([
          "\n  query PageVisits($path: String!, $startDateTime: String, $endDateTime: String) {\n    pageVisits(path: $path, startDateTime: $startDateTime, endDateTime: $endDateTime) {\n      dateTime\n      id\n      path\n      payload\n    }\n  }\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function $() {
        var n = (0, t.Z)([
          "\n  query IsRpcUser($email: String!, $address: String!, $chainId: Int!) {\n    isRPCuser(email: $email, address: $address, chainId: $chainId) {\n      email\n      mode\n    }\n  }\n",
        ]);
        return (
          ($ = function () {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = (0, t.Z)([
          "\n  query RpcUserByAddress($address: String!, $chainId: Int!) {\n    rpcUserByAddress(address: $address, chainId: $chainId) {\n      email\n      mode\n    }\n  }\n",
        ]);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = (0, t.Z)([
          "\n  query GetOrgFromEmail($email: String!) {\n    getOrgFromEmail(email: $email) {\n      name\n    }\n  }\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function N() {
        var n = (0, t.Z)([
          "\n  query GetQueriesByTimeInterval($apiKey: String!, $from: String!, $to: String!) {\n    getQueriesByTimeInterval(apiKey: $apiKey, from: $from, to: $to) {\n      callTypes {\n        count\n        name\n      }\n      totalCount\n    }\n  }\n",
        ]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = (0, t.Z)([
          "\n  query VerifiedToken($jwt: String!) {\n    verifiedToken(jwt: $jwt)\n  }\n",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = (0, t.Z)([
          "\n  query GetRpcTransactions(\n    $address: String!\n    $chainId: Int!\n  ) {\n    rpcTransactions(address: $address, chainId: $chainId) {\n      id\n      type\n      userAddress\n      status\n      createdAt\n      updatedAt\n      chainId\n      params\n      user {\n        email\n        address\n      }\n    }\n  }\n",
        ]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      var A = (0, a.Ps)(i()),
        _ = (0, a.Ps)(s()),
        Z = (0, a.Ps)(d()),
        P = (0, a.Ps)(c()),
        T = (0, a.Ps)(o()),
        C = (0, a.Ps)(u()),
        E = (0, a.Ps)(l()),
        q = (0, a.Ps)(h()),
        B = (0, a.Ps)(p()),
        F = (0, a.Ps)(m());
      (0, a.Ps)(f());
      var z = (0, a.Ps)(g()),
        W = (0, a.Ps)(x()),
        D = (0, a.Ps)(b());
      (0, a.Ps)(v());
      var R = (0, a.Ps)(y()),
        V = (0, a.Ps)(I());
      (0, a.Ps)($());
      var H = (0, a.Ps)(j()),
        L = (0, a.Ps)(k());
      (0, a.Ps)(N());
      var G = (0, a.Ps)(w()),
        K = (0, a.Ps)(S());
    },
    52416: function (n, e, r) {
      var t = r(67294),
        a = r(25983),
        i = function () {
          return (0, t.useContext)(a.z);
        };
      e.Z = i;
    },
    14045: function (n, e, r) {
      r.d(e, {
        Ne: function () {
          return a;
        },
        Ut: function () {
          return i;
        },
        W3: function () {
          return t;
        },
      });
      var t = function (n) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 20,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 7,
            t =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 5;
          return n.length <= e ? n : n.slice(0, r) + "..." + n.slice(-t);
        },
        a = function (n) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
          return n.length <= e ? n : n.slice(0, e) + "...";
        },
        i = function (n, e) {
          return "string" == typeof n
            ? parseFloat(parseFloat(n).toFixed(e)).toString()
            : "number" == typeof n
            ? parseFloat(n.toFixed(e)).toString()
            : n;
        };
    },
  },
]);
