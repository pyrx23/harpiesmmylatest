(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7041],
  {
    96273: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/onboarding/basic",
        function () {
          return n(56228);
        },
      ]);
    },
    34685: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return s;
        },
      });
      var s = [
        "                                                                 @@@@           \n                                                           @@@@@@@@@@           \n                                                      @@@@@@@@@@@@@@            \n                             @@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@              \n                        @@@@@@@@@@@@       @@@@@@@@@@@@@@@@@   @@@@@            \n                     @@@@@@@@@@       @@@@@@@@@@@@@@@@@@@ @@@@@@@@@@            \n                  @@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             \n                @@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                \n               @@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 \n             @@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                \n            @@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@               \n            @@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              \n           @@@@@@@@@@   @@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@             \n           @@@@@@@@@@   @                @@@@@@@@@@@@@@@@@@@@@@@@@@             \n           @@@@@@@@@@                     @@@@@@@@@@@@@@@@@@@@@@@@@             \n           @@@@@@@@@@@                     @@@@@@@@@@@@@@@@@@@@@@@@             \n            @@@@@@@@@@@                   @@@@@@@@@@@@@@@@@@@@@@@@              \n            @@@@@@@@@@@@                 @@@@@@@@@@@@@@@@@@@@@@@@               \n             @@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@                \n               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 \n                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                  \n                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                    \n                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       \n                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                          \n                             @@@@@@@@@@@@@@@@@@@@                             ",
        "                                                                 ####           \n                                                           ##########           \n                                                      ##############            \n                             ############       ##################              \n                        ############       #################   #####            \n                     ##########       ################### ##########            \n                  ##########     ##################################             \n                ##########    ##################################                \n               #########    ###################################                 \n             ##########   ######################################                \n            ##########   ########################################               \n            #########    #########################################              \n           ##########   ###            ############################             \n           ##########   #                ##########################             \n           ##########                     #########################             \n           ###########                     ########################             \n            ###########                   ########################              \n            ############                 ########################               \n             ##############            #########################                \n               ################################################                 \n                ##############################################                  \n                  ##########################################                    \n                     ####################################                       \n                        ##############################                          \n                             ####################                             ",
        "                                                                 %%%%           \n                                                           %%%%%%%%%%           \n                                                      %%%%%%%%%%%%%%            \n                             %%%%%%%%%%%%       %%%%%%%%%%%%%%%%%%              \n                        %%%%%%%%%%%%       %%%%%%%%%%%%%%%%%   %%%%%            \n                     %%%%%%%%%%       %%%%%%%%%%%%%%%%%%% %%%%%%%%%%            \n                  %%%%%%%%%%     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%             \n                %%%%%%%%%%    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                \n               %%%%%%%%%    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                 \n             %%%%%%%%%%   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                \n            %%%%%%%%%%   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%               \n            %%%%%%%%%    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%              \n           %%%%%%%%%%   %%%            %%%%%%%%%%%%%%%%%%%%%%%%%%%%             \n           %%%%%%%%%%   %                %%%%%%%%%%%%%%%%%%%%%%%%%%             \n           %%%%%%%%%%                     %%%%%%%%%%%%%%%%%%%%%%%%%             \n           %%%%%%%%%%%                     %%%%%%%%%%%%%%%%%%%%%%%%             \n            %%%%%%%%%%%                   %%%%%%%%%%%%%%%%%%%%%%%%              \n            %%%%%%%%%%%%                 %%%%%%%%%%%%%%%%%%%%%%%%               \n             %%%%%%%%%%%%%%            %%%%%%%%%%%%%%%%%%%%%%%%%                \n               %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                 \n                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                  \n                  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                    \n                     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                       \n                        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                          \n                             %%%%%%%%%%%%%%%%%%%%                             ",
        "                                                                 ****           \n                                                           **********           \n                                                      **************            \n                             ************       ******************              \n                        ************       *****************   *****            \n                     **********       ******************* **********            \n                  **********     **********************************             \n                **********    **********************************                \n               *********    ***********************************                 \n             **********   **************************************                \n            **********   ****************************************               \n            *********    *****************************************              \n           **********   ***            ****************************             \n           **********   *                **************************             \n           **********                     *************************             \n           ***********                     ************************             \n            ***********                   ************************              \n            ************                 ************************               \n             **************            *************************                \n               ************************************************                 \n                **********************************************                  \n                  ******************************************                    \n                     ************************************                       \n                        ******************************                          \n                             ********************                             ",
      ];
    },
    61280: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(85893);
      function a(e) {
        var t = e.errors,
          n = e.popError,
          a = e.successes,
          r = e.popSuccess;
        return 0 === t.length && 0 === a.length
          ? null
          : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)("div", {
                className: "fixed right-4 bottom-4 flex flex-col gap-2",
                children: [
                  a.length > 0 &&
                    (0, s.jsxs)("button", {
                      onClick: r,
                      className:
                        "relative z-50 px-6 py-3 text-base text-white bg-green-600 rounded-md cursor-pointer animate-bounce",
                      children: [
                        "Success! [",
                        a.length,
                        "]: ",
                        a[a.length - 1],
                      ],
                    }),
                  t.length > 0 &&
                    (0, s.jsxs)("button", {
                      onClick: n,
                      className:
                        "px-6 py-3 text-base text-white bg-red-600 rounded-md cursor-pointer relative animate-bounce",
                      children: [
                        "Errors [",
                        t.length,
                        "]: ",
                        t[t.length - 1].message,
                      ],
                    }),
                ],
              }),
            });
      }
    },
    42366: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var s = n(828),
        a = n(85893),
        r = n(95529),
        i = n(76384),
        l = n(31607),
        o = n(62782),
        c = n(52416),
        d = n(71688),
        u = n(41664),
        m = n.n(u),
        h = n(14045),
        x = n(25675),
        p = n.n(x),
        f = n(67294),
        g = n(41814),
        b = n(65809);
      function v(e) {
        var t = e.setDashboardId,
          n = e.setChainId,
          u = e.setCanContinue,
          x = e.data,
          v = e.loading,
          w = e.type,
          y = (0, s.Z)((0, r.Or)(), 1)[0].connecting,
          j = (0, c.Z)(),
          N = j.wallet,
          _ = j.address,
          k = j.chain,
          C = j.connectWallet,
          S = j.setChain;
        return ((0, f.useEffect)(
          function () {
            u(!y && N && _ && null != k && !v && null == x);
          },
          [_, k, y, v, x, u, N]
        ),
        (0, f.useEffect)(
          function () {
            _ && k && "advanced" === w && (t(g.getAddress(_)), n(k.id));
          },
          [_, k, n, t]
        ),
        v)
          ? (0, a.jsx)("div", {
              className: "flex items-center justify-center h-full",
              children: (0, a.jsx)(l.Z, {
                type: "ThreeDots",
                color: "lightblue",
              }),
            })
          : null != x
          ? (0, a.jsxs)("div", {
              className:
                "flex flex-col justify-center gap-6 m-auto h-full w-full sm:w-[85%] md:p-0 sm:p-6 px-12 py-8",
              children: [
                (0, a.jsx)("h2", {
                  className: "text-2xl font-bold lg:text-3xl font-display",
                  children: "Account already exists!",
                }),
                (0, a.jsxs)("div", {
                  className: "pt-8 pb-6 space-y-4 text-base lg:text-lg",
                  children: [
                    (0, a.jsxs)("p", {
                      children: [
                        "There already exists an account created on ",
                        k.name,
                        " with Ethereum address:",
                        " ",
                        (0, a.jsxs)("span", {
                          className:
                            "font-bold break-all sm:break-normal font-display",
                          children: [
                            (0, a.jsx)("br", { className: "inline sm:hidden" }),
                            _,
                          ],
                        }),
                        ".",
                      ],
                    }),
                    (0, a.jsx)("p", {
                      children:
                        "Please switch the connected wallet or view your dashboard by clicking the button below.",
                    }),
                  ],
                }),
                (0, a.jsx)(o.Z, {
                  className: "self-start w-64 rounded-lg lg:px-0",
                  children: (0, a.jsx)(m(), {
                    href: "/app/dashboard/"
                      .concat(_, "/?chainId=")
                      .concat(k.id),
                    className: "w-64",
                    passHref: !0,
                    children: (0, a.jsxs)("a", {
                      onClick: function () {
                        return b.B({
                          action: "click_".concat(w, "_step_1_go_to_dashboard"),
                        });
                      },
                      children: [
                        "Go to dashboard ",
                        (0, a.jsx)(i.Z, { className: "inline w-6 h-6" }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : (0, a.jsxs)("div", {
              className:
                "flex flex-col justify-center gap-8 m-auto h-full w-full sm:w-[85%] md:p-0 sm:p-6 px-12",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "pt-5 text-base lg:text-lg !leading-7 md:grid grid-cols-5",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "col-span-3 mr-24",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-2xl font-bold md:text-3xl font-display",
                          children: "Connect a Wallet",
                        }),
                        "advanced" === w
                          ? (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsxs)("p", {
                                className: "pt-8",
                                children: [
                                  "Harpie's Advanced Security uses the most advanced detection and counter-transaction technology to fight hackers. We can detect and stop the most sophisticated attacks, including Opensea gasless signature attacks, automated bots, and more.",
                                  (0, a.jsx)("br", {}),
                                  (0, a.jsx)("br", {}),
                                  "During setup, you will create a ",
                                  (0, a.jsx)("strong", {
                                    children: "trusted network",
                                  }),
                                  " of apps and people you trust. If you (or a hacker) tries to send crypto outside of your trusted network, our systems will stop that transaction from executing.",
                                ],
                              }),
                            })
                          : (0, a.jsxs)("p", {
                              className: "pt-8",
                              children: [
                                "Setting up ",
                                (0, a.jsx)("strong", {
                                  className: " text-harpie",
                                  children: "Harpie RPC",
                                }),
                                " is your first step in fully securing your wallet.  No downloads required.",
                                (0, a.jsx)("br", {}),
                                (0, a.jsx)("br", {}),
                                "The ",
                                (0, a.jsx)("strong", {
                                  className: " text-harpie",
                                  children: "Harpie RPC",
                                }),
                                " sends you a warning whenever you send a transaction to a known scammer or hacker. You can then choose to cancel the transaction or approve it to be sent to the Ethereum blockchain.",
                              ],
                            }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "hidden col-span-2 md:block",
                      children: (0, a.jsx)("img", {
                        src: "./images/harpie-email-rpc.png",
                        className: "mx-auto max-h-96 ".concat(
                          "advanced" === w ? "hidden" : void 0
                        ),
                      }),
                    }),
                  ],
                }),
                N
                  ? k
                    ? (0, a.jsxs)("div", {
                        className:
                          "flex flex-row py-7 md:py-10 px-2.5 bg-gray-100 rounded-md",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "relative mt-1.5 mr-1.5",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "items-center justify-center w-3 h-3 bg-green-500 rounded-full opacity-10 animate-opacityPulse -z-10",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute inset-0.5 bg-green-500 w-2 h-2 rounded-full",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("p", {
                            className:
                              "inline text-sm font-medium font-display md:text-md lg:text-base",
                            children: [
                              "Connected with",
                              " ",
                              (0, a.jsx)("span", {
                                className: "inline sm:hidden",
                                children: (0, a.jsx)("br", {}),
                              }),
                              (0, h.W3)(_),
                              " on",
                              " ",
                              (0, a.jsx)("span", {
                                className: "inline xs:hidden",
                                children: (0, a.jsx)("br", {}),
                              }),
                              (0, a.jsx)("span", {
                                className: "font-semibold",
                                children: k.name,
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, a.jsxs)("div", {
                        className: "flex flex-col items-start space-y-4",
                        children: [
                          (0, a.jsx)("p", {
                            className: "font-bold text-md",
                            children:
                              "We've detected that you are connected to an unsupported chain. Please switch chains to proceed:",
                          }),
                          d.p5.map(function (e) {
                            return (0, a.jsx)(
                              "button",
                              {
                                className:
                                  "flex items-center justify-between w-full gap-2 p-2 border border-gray-300 rounded-md cursor-pointer active:border-harpie-600 hover:border-harpie",
                                onClick: function () {
                                  b.B({
                                    action: "click_".concat(
                                      w,
                                      "_step_1_switch_chain"
                                    ),
                                  }),
                                    S(e.id);
                                },
                                children: (0, a.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "relative w-6 h-6",
                                      children: (0, a.jsx)(p(), {
                                        src: e.avatar,
                                        alt: e.name + " avatar icon",
                                        layout: "fill",
                                        objectFit: "cover",
                                        className: "rounded-full",
                                      }),
                                    }),
                                    e.name,
                                  ],
                                }),
                              },
                              e.id
                            );
                          }),
                        ],
                      })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("p", {
                          className: "pb-8 text-base font-bold lg:text-lg",
                          children: "Connect your wallet to get started.",
                        }),
                        (0, a.jsx)(o.Z, {
                          onClick: function () {
                            b.B({
                              action: "click_".concat(
                                w,
                                "_step_1_connect_wallet"
                              ),
                            }),
                              C();
                          },
                          className: "self-start rounded-lg",
                          children: y ? "Connecting" : "Connect",
                        }),
                      ],
                    }),
              ],
            });
      }
    },
    57227: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = n(85893),
        a = n(25675),
        r = n.n(a),
        i = n(67294),
        l = n(41306),
        o = n(62782);
      function c(e) {
        var t = e.open,
          n = e.setOpen,
          a = e.onConfirm,
          c = (0, i.useState)(0),
          d = c[0],
          u = c[1],
          m = function () {
            n(!1), a(), u(0);
          };
        return (0, s.jsx)(l.Z, {
          open: t,
          children: (0, s.jsxs)("div", {
            className:
              "flex flex-col w-full max-w-2xl gap-3 overflow-hidden text-gray-900 align-bottom bg-white rounded-lg shadow-xl sm:align-middle h-154 p-7 md:p-10",
            children: [
              (0, s.jsx)("p", {
                className: "text-xl text-center font-display",
                children: "Manual MetaMask Instructions",
              }),
              (0, s.jsx)("div", {
                className: "mb-2 text-gray-500 md:hidden",
                children:
                  "Note: scroll inside the steps to see all of the instructions",
              }),
              (0, s.jsxs)("div", {
                className: "flex-1 p-2",
                children: [
                  (0, s.jsxs)("div", {
                    onClick: function () {
                      return u(0);
                    },
                    className: "flex cursor-pointer",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-[24px] h-[24px] rounded-full text-center text-white text-sm font-thin pt-0.5 ".concat(
                            0 === d ? "bg-harpie" : "bg-gray-400"
                          ),
                        children: "1",
                      }),
                      (0, s.jsx)("div", {
                        className: "ml-3 ".concat(
                          0 === d ? "text-harpie" : "text-gray-500"
                        ),
                        children: "Get Started with MetaMask",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "border-l border-gray-400 ml-[0.7rem] my-2 bg-gray-400 transition-all duration-100 ease-out ".concat(
                            0 === d ? "h-72" : "h-3"
                          ),
                      }),
                      (0, s.jsxs)("div", {
                        className: "md:flex overflow-y-auto max-h-72 ".concat(
                          0 === d ? "block" : "!hidden"
                        ),
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "max-w-4xl pt-4 my-auto ml-5 text-sm text-gray-700 md:w-72",
                            children: [
                              "Enter your MetaMask and click on your RPC endpoint at the top of your MetaMask next to the Account icon (by default it says “Ethereum mainnet”).",
                              (0, s.jsx)("br", {}),
                              " ",
                              (0, s.jsx)("br", {}),
                              'Click "Add network” and a new page should open.',
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "pt-2 my-auto ml-6 border-2 rounded-sm w-max h-max md:pt-0",
                            children: (0, s.jsx)(r(), {
                              width: "228px",
                              height: "232px",
                              src: "./images/Eagle-RPC-2.webp",
                              className:
                                "pt-4 border border-gray-200 rounded-sm",
                              alt: "Start with Metamask",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    onClick: function () {
                      return u(1);
                    },
                    className: "flex cursor-pointer",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-[24px] h-[24px] rounded-full text-center text-white text-sm font-thin pt-0.5 ".concat(
                            1 === d ? "bg-harpie" : "bg-gray-400"
                          ),
                        children: "2",
                      }),
                      (0, s.jsx)("div", {
                        className: "ml-3 ".concat(
                          1 === d ? "text-harpie" : "text-gray-500"
                        ),
                        children: "Input Harpie RPC Details",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "border-l border-gray-400 ml-[0.7rem] my-2 bg-gray-400 transition-all duration-200 ease-out ".concat(
                            1 === d ? "h-72" : "h-3"
                          ),
                      }),
                      (0, s.jsxs)("div", {
                        className: "md:flex overflow-y-auto max-h-72 ".concat(
                          1 === d ? "block" : "!hidden"
                        ),
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "max-w-4xl mt-5 mb-2 ml-5 text-sm text-gray-700 md:w-72 md:mt-7",
                            children: [
                              "Once on the new page, click 'Add a network manually' at the bottom of the page.",
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("br", {}),
                              "Enter the following information:",
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("span", {
                                className: "font-bold",
                                children: "Network Name",
                              }),
                              ": Harpie RPC (or a name of your choosing)",
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("span", {
                                className: "font-bold",
                                children: "New RPC URL",
                              }),
                              ": https://rpc.harpie.io",
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("span", {
                                className: "font-bold",
                                children: "Chain ID",
                              }),
                              ": 1",
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("span", {
                                className: "font-bold",
                                children: "Currency Symbol",
                              }),
                              ": ETH",
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "ml-5 border rounded-sm w-max md:my-auto",
                            children: (0, s.jsx)(r(), {
                              width: "228px",
                              height: "140px",
                              src: "./images/Eagle-RPC-3.webp",
                              className:
                                "pt-4 border border-gray-200 rounded-sm",
                              alt: "Add network form",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    onClick: function () {
                      return u(2);
                    },
                    className: "flex cursor-pointer",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-[24px] h-[24px] rounded-full text-center text-white text-sm font-thin pt-0.5 ".concat(
                            2 === d ? "bg-harpie" : "bg-gray-400"
                          ),
                        children: "3",
                      }),
                      (0, s.jsx)("div", {
                        className: "ml-3 ".concat(
                          2 === d ? "text-harpie" : "text-gray-500"
                        ),
                        children: "Save your changes",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex",
                    children: (0, s.jsxs)("div", {
                      className:
                        "md:flex md:overflow-y-[unset] overflow-y-auto max-h-64 md:max-h-full ".concat(
                          2 === d ? "block" : "!hidden"
                        ),
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "max-w-4xl mt-4 ml-5 text-sm text-gray-700 md:w-72 md:mt-7",
                          children: [
                            "Confirm that you have entered the information correctly. To complete your Harpie RPC setup, scroll to the bottom and click “Save”. You are done! ",
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("br", {}),
                            " You may need to refresh this page. You should see options for configuring your RPC node at three different security levels. ",
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("br", {}),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "ml-5 border rounded-sm w-max",
                          children: (0, s.jsx)(r(), {
                            width: "230px",
                            height: "300px",
                            src: "./images/Eagle-RPC-4.webp",
                            className: "pt-4 border border-gray-200 rounded-sm",
                            alt: "Add network form",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex justify-between w-full",
                children: [
                  (0, s.jsx)(o.Z, {
                    className: "rounded-sm",
                    secondary: !0,
                    onClick: m,
                    children: "Cancel",
                  }),
                  (0, s.jsx)(o.Z, {
                    className: "rounded-sm",
                    onClick: function () {
                      d < 2
                        ? u(function (e) {
                            return e + 1;
                          })
                        : m();
                    },
                    children: d < 2 ? "Next" : "Done",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    89556: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return l;
        },
      });
      var s = n(47568),
        a = n(70655),
        r = n(34685),
        i = n(67294),
        l = function () {
          var e = (0, i.useState)(!1),
            t = e[0],
            n = e[1];
          return (
            (0, i.useEffect)(function () {
              var e = setInterval(
                (0, s.Z)(function () {
                  var e;
                  return (0, a.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          e.trys.push([0, 2, , 3]),
                          [
                            4,
                            window.ethereum.request({
                              method: "eth_getBalance",
                              params: [
                                "0x00000000000000dead0000000000000000000000",
                              ],
                            }),
                          ]
                        );
                      case 1:
                        return "true" == e.sent() ? n(!0) : n(!1), [3, 3];
                      case 2:
                        return e.sent(), n(!1), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                }),
                1e3
              );
              return function () {
                return clearInterval(e);
              };
            }, []),
            (0, i.useEffect)(
              function () {
                t && console.log(r.D[3]);
              },
              [t]
            ),
            t
          );
        };
    },
    49366: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var s = n(47568),
        a = n(70655),
        r = n(67294),
        i = n(66252); //! In certain cases, apollo's useLazyQuery will not work. This is a workaround for simple uses.
      function l(e, t) {
        var n,
          l = (0, i.x)(),
          o = (0, r.useState)(null),
          c = o[0],
          d = o[1],
          u = (0, r.useState)(!1),
          m = u[0],
          h = u[1],
          x = (0, r.useState)(null),
          p = x[0],
          f = x[1],
          g = (0, r.useCallback)(
            function (n) {
              return l.query({
                query: e,
                variables: n || t,
                fetchPolicy: "network-only",
              });
            },
            [l, t, e]
          ),
          b = (0, r.useCallback)(
            ((n = (0, s.Z)(function (e) {
              var t, n;
              return (0, a.__generator)(this, function (s) {
                switch (s.label) {
                  case 0:
                    h(!0), (s.label = 1);
                  case 1:
                    return s.trys.push([1, 3, , 4]), [4, g(e)];
                  case 2:
                    return (
                      d(null == (t = s.sent()) ? void 0 : t.data), h(!1), [2, t]
                    );
                  case 3:
                    return f((n = s.sent())), [2, { data: null, error: n }];
                  case 4:
                    return [2];
                }
              });
            })),
            function (e) {
              return n.apply(this, arguments);
            }),
            [g]
          );
        return { data: c, error: p, loading: m, fetch: b };
      }
    },
    77505: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(67294);
      function a() {
        var e = (0, s.useState)(0),
          t = e[0],
          n = e[1],
          a = (0, s.useState)(0),
          r = a[0],
          i = a[1],
          l = (0, s.useState)(!0),
          o = l[0],
          c = l[1],
          d = (0, s.useState)(!0),
          u = d[0],
          m = d[1],
          h = (0, s.useState)(!1),
          x = h[0],
          p = h[1],
          f = (0, s.useRef)(),
          g = function () {
            var e;
            o &&
              (i(0),
              n(t - 1),
              null === (e = f.current) || void 0 === e || e.scrollTo(0, 0));
          },
          b = function () {
            var e;
            u &&
              (i(0),
              n(t + 1),
              null === (e = f.current) || void 0 === e || e.scrollTo(0, 0));
          },
          v = function () {
            return i(r + 1);
          };
        return {
          slide: t,
          slideStep: r,
          prevSlide: g,
          nextSlide: b,
          nextSlideStep: v,
          skipToSlide: function (e) {
            var t;
            i(0),
              n(e),
              null === (t = f.current) || void 0 === t || t.scrollTo(0, 0);
          },
          slideRef: f,
          canBack: o,
          setCanBack: c,
          canContinue: u,
          setCanContinue: m,
          isContinueLoading: x,
          setIsContinueLoading: p,
        };
      }
    },
    56228: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return V;
          },
        });
      var s = n(47568),
        a = n(828),
        r = n(70655),
        i = n(85893),
        l = n(9008),
        o = n.n(l),
        c = n(53154),
        d = n(11163),
        u = n(67294),
        m = n(77505),
        h = n(42366),
        x = n(18702),
        p = n(63750),
        f = n(64343),
        g = n(94184),
        b = n.n(g),
        v = n(37901),
        w = n(65809),
        y = [
          {
            mode: "STRICT",
            title: "Warn me when I'm sending crypto to an unverified app",
            description:
              "Do you only use well-known, trusted apps like OpenSea and Uniswap? You should choose this option.",
          },
          {
            mode: "NORMAL",
            title: "Only warn me when I'm sending crypto to a scammer",
            description:
              "Are you a builder or degen that regularly uses experimental apps and lending protocols? This is the choice for you. For advanced users only.",
          },
        ];
      function j(e) {
        var t = e.setRpcMode,
          n = e.rpcMode;
        return (0, i.jsxs)("div", {
          className:
            "flex flex-col lg:flex-row gap-8 m-auto w-full h-full sm:w-[85%] md:py-5",
          children: [
            (0, i.jsxs)("div", {
              className: "my-auto space-y-8 w-full lg:w-1/2",
              children: [
                (0, i.jsx)("h2", {
                  className: "text-2xl font-bold md:text-3xl font-display",
                  children: "Select your security plan",
                }),
                (0, i.jsxs)("div", {
                  className: "py-2 space-y-4 text-base md:text-lg",
                  children: [
                    (0, i.jsxs)("p", {
                      children: [
                        "We regularly update a database of verified apps and contract addresses, so you can safely use your favorite apps: OpenSea, Curve.Fi, and more. With over ",
                        (0, i.jsx)("strong", {
                          className: "text-harpie",
                          children: "1.8 million",
                        }),
                        " ",
                        "verified addresses, you can be confident that you're sending transactions to the right place.",
                      ],
                    }),
                    (0, i.jsx)("p", {
                      children: "Please choose the option that fits you best.",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex items-center gap-4 p-2 text-sm rounded-lg bg-harpie-200 bg-opacity-30",
                  children: [
                    (0, i.jsx)(p.o86, { className: "w-5 h-5" }),
                    "You can turn off Harpie or change these settings at any time after setup.",
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "my-auto w-full lg:w-1/2",
              children: [
                (0, i.jsx)("p", {
                  className: "font-display",
                  children: "I want Harpie to...",
                }),
                (0, i.jsx)("div", {
                  className: "flex flex-col my-3 text-left",
                  children: y.map(function (e) {
                    return (0, i.jsxs)(
                      "button",
                      {
                        className: b()(
                          "group pl-16 relative m-1 p-6 border-2 rounded-md hover:bg-[#FFF9F7] hover:border-harpie-200 text-left",
                          n === e.mode && "border-harpie"
                        ),
                        onClick: function () {
                          w.B({
                            action: "click_basic_step_3_select_".concat(e.mode),
                          }),
                            t(e.mode);
                        },
                        children: [
                          "STRICT" === e.mode &&
                            (0, i.jsxs)("div", {
                              className:
                                "text-harpie absolute top-2 right-3 font-bold text-[10px]",
                              children: [
                                (0, i.jsx)(v.Z, {
                                  className: "inline w-3 h-3 mr-1",
                                }),
                                "Recommended",
                              ],
                            }),
                          n === e.mode
                            ? (0, i.jsx)(f.Z, {
                                className:
                                  "absolute w-6 h-6 text-white translate-y-full border-2 rounded-full top-1 border-harpie bg-harpie left-5",
                              })
                            : (0, i.jsx)("div", {
                                className:
                                  "absolute w-6 h-6 translate-y-full border-2 border-gray-200 rounded-full top-1 group-hover:border-harpie-200 left-5",
                              }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("h2", {
                                className:
                                  "flex text-xl font-bold font-display text-harpie",
                                children: e.title,
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "mt-2 overflow-y-auto text-xs text-gray-500 xl:text-sm",
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      e.mode
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var N = n(62782),
        _ = n(57227);
      function k(e) {
        var t,
          n = e.isUsingHarpieRPC,
          a = (0, u.useState)(!1),
          l = a[0],
          o = a[1],
          c =
            ((t = (0, s.Z)(function () {
              return (0, r.__generator)(this, function (e) {
                return (
                  window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                      {
                        chainId: "0x1",
                        rpcUrls: ["https://rpc.harpie.io/"],
                        chainName: "Harpie RPC",
                        nativeCurrency: {
                          name: "Ethereum",
                          symbol: "ETH",
                          decimals: 18,
                        },
                        blockExplorerUrls: ["https://etherscan.io/"],
                      },
                    ],
                  }),
                  [2]
                );
              });
            })),
            function () {
              return t.apply(this, arguments);
            });
        return (0, i.jsxs)("div", {
          className: "flex gap-8 m-auto h-full w-full sm:w-[85%]",
          children: [
            (0, i.jsxs)("div", {
              className: "my-auto space-y-6 md:space-y-8",
              children: [
                (0, i.jsx)("h2", {
                  className: "text-2xl font-bold md:text-3xl font-display",
                  children: "Add Harpie to your Wallet",
                }),
                (0, i.jsxs)("div", {
                  className: "py-2 space-y-4 text-base md:text-lg",
                  children: [
                    (0, i.jsxs)("p", {
                      children: [
                        "Now let's add the ",
                        (0, i.jsx)("strong", {
                          className: " text-harpie",
                          children: "Harpie RPC",
                        }),
                        " network to your wallet.",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        (0, i.jsx)("strong", {
                          className: " text-harpie",
                          children: "Harpie RPC",
                        }),
                        " acts like a proxy. Every time you send a transaction using the RPC, Harpie runs security checks on it before forwarding your signed transaction to the Ethereum Mainnet.",
                      ],
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "Click the button below to add the Harpie RPC network. Make sure to accept the confirmation popup on your wallet.",
                    }),
                  ],
                }),
                n
                  ? (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsxs)("p", {
                        className: "text-green-600",
                        children: [
                          "Successfully installed Harpie RPC! \uD83E\uDD73 ",
                          (0, i.jsx)("span", {
                            className: "font-bold ",
                            children: "Click Next to continue setup.",
                          }),
                        ],
                      }),
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(N.Z, {
                          className: "rounded-lg",
                          onClick: function () {
                            w.B({
                              action: "click_basic_step_2_add_to_metamask",
                            }),
                              c();
                          },
                          children: "Add Harpie RPC to Metamask",
                        }),
                        (0, i.jsx)("div", {
                          className: "text-sm underline cursor-pointer",
                          onClick: function () {
                            w.B({
                              action:
                                "click_basic_step_2_open_rpc_instructions",
                            }),
                              o(!0);
                          },
                          children: "Add Harpie RPC manually",
                        }),
                      ],
                    }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "hidden w-5/6 my-auto lg:block",
              children: (0, i.jsx)("video", {
                muted: !0,
                playsInline: !0,
                disablePictureInPicture: !0,
                autoPlay: !0,
                loop: !0,
                src: "/videos/add_to_metamask.webm",
              }),
            }),
            (0, i.jsx)(_.Z, {
              open: l,
              setOpen: o,
              onConfirm: function () {
                return o(!1);
              },
            }),
          ],
        });
      }
      var C = n(50319),
        S = n(37887),
        P = n(30245),
        E = n(99214),
        T = n(52416),
        Z = n(31607),
        R = n(17065);
      function I(e) {
        var t = e.emailInput,
          n = e.setEmailInput,
          s = e.action;
        return (0, i.jsxs)("form", {
          className:
            "flex flex-row gap-8 m-auto h-full w-full sm:w-[85%] md:py-5 overflow-hidden",
          onSubmit: function (e) {
            e.preventDefault(), s();
          },
          children: [
            (0, i.jsxs)("div", {
              className: "space-y-8 my-auto z-[1]",
              children: [
                (0, i.jsxs)("h2", {
                  className: "text-2xl font-bold md:text-3xl font-display",
                  children: [
                    "Almost Finished! ",
                    (0, i.jsx)("br", {}),
                    " Connect an email.",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "space-y-8 text-base md:text-lg",
                  children: [
                    (0, i.jsx)("p", {
                      children:
                        "We need an email to send you warnings about your transactions.",
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "To complete setup, please enter a valid email and accept the signature request that pops up in your wallet.",
                    }),
                  ],
                }),
                (0, i.jsx)("input", {
                  id: "email-input",
                  className:
                    "p-2 pl-3 text-base tracking-wide border-2 outline-none bg-neutral-100 rounded-lg w-full",
                  value: t,
                  onChange: function (e) {
                    return n(e.currentTarget.value);
                  },
                  onFocus: function () {
                    return w.B({ action: "click_basic_step_4_email_input" });
                  },
                  maxLength: 200,
                  placeholder: "xxxxxxxxx@gmail.com",
                  type: "email",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex w-full gap-4 p-2 rounded-lg bg-harpie-200 bg-opacity-30",
                  children: [
                    (0, i.jsx)(p.o86, { className: "ml-2 h-7 w-7" }),
                    (0, i.jsxs)("div", {
                      className: "space-y-2 text-[12px]",
                      children: [
                        (0, i.jsx)("p", {
                          children:
                            "Use an existing email or create an anonymous one. We recommend ProtonMail.",
                        }),
                        (0, i.jsx)("p", {
                          children:
                            "Harpie uses email-based 2FA—we send you an email to authorize transactions. Harpie will never sell your data to third parties.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "hidden w-3/5 my-auto mr-12 md:mr-0 lg:block h-96",
              children: (0, i.jsx)("video", {
                muted: !0,
                playsInline: !0,
                disablePictureInPicture: !0,
                autoPlay: !0,
                loop: !0,
                src: "/videos/rpc-animation.webm",
                className: "w-full h-full scale-150",
              }),
            }),
          ],
        });
      }
      var B,
        H,
        A,
        M = n(92575);
      (0, s.Z)(function (e, t, n, s, a, i) {
        var l, o, c, d;
        return (0, r.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              return (
                (c = {
                  message: t,
                  trustedApps: n,
                  trustedAddresses: s,
                  signedAt: (l = e.iat),
                  verificationString: e.signature,
                }),
                [4, i._signTypedData((0, E.ge)(a), E.l_, c)]
              );
            case 1:
              return [2, r.sent()];
          }
        });
      }),
        (0, s.Z)(function (e, t, n, s, a, i) {
          var l, o, c, d;
          return (0, r.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (c = {
                    message: t,
                    oldEmail: n,
                    newEmail: s,
                    signedAt: (l = e.iat),
                    verificationString: e.signature,
                  }),
                  [4, i._signTypedData((0, E.ge)(a), E.BW, c)]
                );
              case 1:
                return [2, r.sent()];
            }
          });
        });
      var D =
          ((A = (0, s.Z)(function (e, t, n, s, a) {
            var i, l, o, c;
            return (0, r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (o = {
                      message: t,
                      email: n,
                      signedAt: (i = e.iat),
                      verificationString: e.signature,
                    }),
                    [4, a._signTypedData((0, E.ge)(s), E.rg, o)]
                  );
                case 1:
                  return [2, r.sent()];
              }
            });
          })),
          function (e, t, n, s, a) {
            return A.apply(this, arguments);
          }),
        F = n(49366),
        W = n(70208),
        O = n(95235),
        L = n(61280),
        q = n(89556);
      function z() {
        var e,
          t,
          n,
          l = (0, d.useRouter)(),
          o = (0, m.Z)(),
          c = o.slide,
          p = o.nextSlide,
          f = o.prevSlide,
          g = o.slideRef,
          b = o.canBack,
          v = o.canContinue,
          y = o.setCanContinue,
          _ = o.isContinueLoading,
          B = (0, T.Z)(),
          H = B.signer,
          A = B.address,
          z = B.chain,
          U = (0, W.Z)(),
          Y = U.pushError,
          G = U.popError,
          V = U.errors,
          X = (0, O.Z)(),
          K = X.popSuccess,
          J = X.successes,
          Q = (0, F.z)(P.D7).fetch,
          $ = (0, a.Z)((0, C.D)(M.Xq), 1)[0],
          ee = (0, u.useState)(!1),
          et = ee[0],
          en = ee[1],
          es = (0, u.useState)("STRICT"),
          ea = es[0],
          er = es[1],
          ei = (0, u.useState)(""),
          el = ei[0],
          eo = ei[1],
          ec = (0, q.B)(),
          ed = (0, S.a)(P.dK, {
            variables: { address: A, chainId: null == z ? void 0 : z.id },
            fetchPolicy: "network-only",
            skip: !A || !z,
          }),
          eu = ed.data,
          em = ed.loading,
          eh = null == eu ? void 0 : eu.rpcUserByAddress;
        (0, u.useEffect)(
          function () {
            eh &&
              l.push("/app/dashboard/".concat(A, "/?chainId=").concat(z.id));
          },
          [eh]
        );
        var ex,
          ep =
            ((n = (0, s.Z)(function () {
              var e, t;
              return (0, r.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return e.trys.push([0, 3, , 4]), [4, x.Io.isValid(el)];
                  case 1:
                    if (!e.sent()) throw Error("Invalid email format.");
                    if (!el) throw Error("Email is required");
                    return [4, ef()];
                  case 2:
                    return (
                      e.sent(),
                      l.push(
                        "/app/dashboard/".concat(A, "/?chainId=").concat(z.id)
                      ),
                      [3, 4]
                    );
                  case 3:
                    return Y(e.sent()), [3, 4];
                  case 4:
                    return [2];
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          ef =
            ((ex = (0, s.Z)(function () {
              var e, t, n, s, a, i, l;
              return (0, r.__generator)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (
                      (s.trys.push([0, 6, , 7]),
                      !(null == eh ? void 0 : eh.email))
                    )
                      return [3, 1];
                    throw Error(
                      "User with email "
                        .concat(null == eh ? void 0 : eh.email, " and wallet ")
                        .concat(A, " already exists")
                    );
                  case 1:
                    return en(!0), [4, Q({ subject: A })];
                  case 2:
                    return [
                      4,
                      D(
                        null == (a = s.sent().data) ? void 0 : a.signedToken,
                        E.Kh,
                        el,
                        z.id,
                        H
                      ),
                    ];
                  case 3:
                    return (
                      (i = s.sent()),
                      en(!1),
                      [
                        4,
                        $({
                          variables: {
                            email: el,
                            mode: ea,
                            address: A,
                            chainId: z.id,
                            signedToken: {
                              sub: A,
                              exp:
                                null == a
                                  ? void 0
                                  : null === (e = a.signedToken) || void 0 === e
                                  ? void 0
                                  : e.exp,
                              iat:
                                null == a
                                  ? void 0
                                  : null === (t = a.signedToken) || void 0 === t
                                  ? void 0
                                  : t.iat,
                              signature: i,
                            },
                          },
                          context: {
                            headers: {
                              authorization: "Bearer ".concat(
                                null == a
                                  ? void 0
                                  : null === (n = a.signedToken) || void 0 === n
                                  ? void 0
                                  : n.signature
                              ),
                            },
                          },
                        }),
                      ]
                    );
                  case 4:
                    s.sent(), w.B({ action: "create_rpc_user" }), (s.label = 5);
                  case 5:
                    return [3, 7];
                  case 6:
                    return (
                      (l = s.sent()),
                      en(!1),
                      l.message.includes("User with email")
                        ? Y(l)
                        : Y(
                            Error(
                              "Error signing up for Eagle RPC. Please try again later."
                            )
                          ),
                      [3, 7]
                    );
                  case 7:
                    return [2];
                }
              });
            })),
            function () {
              return ex.apply(this, arguments);
            }),
          eg = [
            {
              label: "Connect Wallet",
              nextText: "Next: Add Harpie to your wallet",
              onNext: function () {
                w.B({ action: "click_basic_step_1_next_to_step_2" }), p();
              },
              prevText: "Exit",
              onPrev: function () {
                w.B({ action: "click_basic_step_1_exit_to_landing" }),
                  l.push("/");
              },
              component: (0, i.jsx)(h.Z, {
                setCanContinue: function (e) {
                  return y(e);
                },
                data: eh,
                loading: em,
                type: "basic",
              }),
              className: "before:w-1/5",
            },
            {
              label: "Add Harpie to your wallet",
              prevText: "Previous",
              onPrev: function () {
                w.B({ action: "click_basic_step_2_prev_to_step_1" }), f();
              },
              nextText: "Next: Select your coverage",
              onNext: function () {
                w.B({ action: "click_basic_step_2_next_to_step_3" }), p();
              },
              component: (0, i.jsx)(k, { isUsingHarpieRPC: ec }),
              className: "before:w-2/5",
            },
            {
              label: "Select your security plan",
              prevText: "Previous",
              onPrev: function () {
                w.B({ action: "click_basic_step_3_prev_to_step_2" }),
                  er("STRICT"),
                  f();
              },
              onNext: function () {
                w.B({ action: "click_basic_step_3_next_to_step_4" }), p();
              },
              nextText: "Next: Add an email",
              component: (0, i.jsx)(j, { rpcMode: ea, setRpcMode: er }),
              className: "before:w-3/5",
            },
            {
              label: "Connect an email",
              prevText: "Previous",
              onPrev: function () {
                w.B({ action: "click_basic_step_4_prev_to_step_3" }),
                  eo(""),
                  f();
              },
              nextText: "Next: Complete Basic Setup",
              onNext: (0, s.Z)(function () {
                return (0, r.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        w.B({ action: "click_basic_step_4_next_to_complete" }),
                        [4, ep()]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              }),
              component: (0, i.jsx)(I, {
                emailInput: el,
                setEmailInput: eo,
                action: (0, s.Z)(function () {
                  return (0, r.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          w.B({
                            action: "click_basic_step_4_next_to_complete",
                          }),
                          [4, ep()]
                        );
                      case 1:
                        return e.sent(), [2];
                    }
                  });
                }),
              }),
              className: "before:w-4/5",
            },
          ];
        return (0, i.jsxs)("main", {
          id: "content",
          className:
            "flex items-center justify-center w-screen h-full px-4 pt-20 mx-auto bg-white",
          children: [
            (0, i.jsxs)("div", {
              className:
                "relative grid w-full h-full m-2 lg:w-[90%] max-w-6xl max-h-192 grid-cols-5 gap-8 px-4 py-5 mx-auto my-auto",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col min-h-[90%] md:min-h-full mt-6 md:mt-0 col-span-5 gap-4 xl:col-span-5 max-h-0",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "font-display",
                      children: [
                        (0, i.jsx)("p", {
                          className: "font-bold text-harpie",
                          children: "Transaction Security",
                        }),
                        (0, i.jsxs)("p", {
                          children: [(100 / eg.length) * (c + 1), "% complete"],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "relative flex flex-col overflow-auto bg-neutral-100 rounded-2xl grow",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "relative rounded-t-2xl w-full h-7 bg-neutral-400 shrink-0 before:bg-harpie-500 ".concat(
                              eg[c].className,
                              " before:content-[''] before:h-full before:absolute z-[1]"
                            ),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "grid w-full h-full px-12 py-8 overflow-auto md:p-0 sm:p-6",
                          ref: g,
                          children: eg[c].component,
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center w-full gap-4 pt-4 md:gap-16 md:flex-row",
                      children: [
                        eg[c].prevText
                          ? (0, i.jsx)(N.Z, {
                              onClick:
                                null === (e = eg[c]) || void 0 === e
                                  ? void 0
                                  : e.onPrev,
                              disabled: !b,
                              secondary: !0,
                              className:
                                "w-full rounded-lg border-none !text-white ".concat(
                                  4 === c
                                    ? "md:w-max bg-harpie"
                                    : "md:w-40 bg-neutral-300"
                                ),
                              children: eg[c].prevText,
                            })
                          : (0, i.jsx)(N.Z, {
                              className: "invisible",
                              secondary: !0,
                              children: "Previous",
                            }),
                        eg[c].nextText
                          ? (0, i.jsx)(N.Z, {
                              onClick:
                                null === (t = eg[c]) || void 0 === t
                                  ? void 0
                                  : t.onNext,
                              disabled: !v || _,
                              className: "relative w-full md:w-max border-0 "
                                .concat(1 === c && ec && "animate-bounce", " ")
                                .concat(
                                  4 === c
                                    ? "!bg-white !text-harpie border rounded-none before:content-[''] before:absolute before:bg-white before:rounded-xl before:-top-[0.1rem] before:-right-[0.1rem] before:-left-[0.1rem] before:-bottom-[0.1rem] focus:ring-transparent py-1"
                                    : "rounded-lg"
                                ),
                              children: _
                                ? (0, i.jsx)(Z.Z, {
                                    type: "ThreeDots",
                                    color: "lightblue",
                                    height: "1.4rem",
                                    width: "1.4rem",
                                  })
                                : (0, i.jsx)("div", {
                                    className: "relative z-1",
                                    children: eg[c].nextText,
                                  }),
                            })
                          : (0, i.jsx)("div", {}),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(R.Z, {
                  open: et,
                  title: "Sign the Signature Request",
                  children: (0, i.jsxs)("div", {
                    className: "text-base",
                    children: [
                      "Please sign the signature request to validate your wallet. ",
                      (0, i.jsx)("br", {}),
                      (0, i.jsx)("br", {}),
                      "This may open in another window.",
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsx)(L.Z, {
              errors: V,
              popError: G,
              successes: J,
              popSuccess: K,
            }),
          ],
        });
      }
      var U = n(41664),
        Y = n.n(U),
        G = n(73359);
      function V() {
        var e,
          t,
          n = (0, u.useState)(""),
          l = n[0];
        n[1];
        var d = (0, u.useState)(!1),
          m = (d[0], d[1]),
          h = (0, u.useState)(""),
          x = (h[0], h[1]),
          p = (0, a.Z)((0, G.t)(P.JY), 2),
          f = p[0],
          g = p[1].data;
        return (
          null == g || g.isValidPassword,
          (0, s.Z)(function (e) {
            var t, n;
            return (0, r.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  e.preventDefault(), m(!0), (t.label = 1);
                case 1:
                  var s;
                  return (
                    t.trys.push([1, 3, , 4]),
                    [4, f({ variables: { password: l } })]
                  );
                case 2:
                  if (!t.sent().data.isValidPassword)
                    throw Error("Incorrect Password!");
                  return [3, 4];
                case 3:
                  return (
                    (n = t.sent()), console.log(n.meesage), x(n.message), [3, 4]
                  );
                case 4:
                  return m(!1), [2];
              }
            });
          }),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(o(), {
                children: [
                  (0, i.jsx)("title", { children: " Get Started | Harpie" }),
                  (0, i.jsx)("meta", {
                    name: "description",
                    content:
                      "Activate your firewall on Harpie to protect your assets from theft and hacks.",
                  }),
                  (0, i.jsx)("meta", {
                    name: "robots",
                    content: "index, follow",
                  }),
                ],
              }),
              (0, i.jsx)(Y(), {
                href: "#content",
                children: (0, i.jsx)("a", {
                  className: "sr-only focus:not-sr-only",
                  children: "Skip to content",
                }),
              }),
              (0, i.jsx)(c.Z, { onboarding: !0 }),
              (0, i.jsx)(z, {}),
            ],
          })
        );
      }
    },
    76384: function (e, t, n) {
      "use strict";
      var s = n(67294);
      let a = s.forwardRef(function (e, t) {
        return s.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          s.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 8l4 4m0 0l-4 4m4-4H3",
          })
        );
      });
      t.Z = a;
    },
    64343: function (e, t, n) {
      "use strict";
      var s = n(67294);
      let a = s.forwardRef(function (e, t) {
        return s.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          s.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 13l4 4L19 7",
          })
        );
      });
      t.Z = a;
    },
    37901: function (e, t, n) {
      "use strict";
      var s = n(67294);
      let a = s.forwardRef(function (e, t) {
        return s.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          s.createElement("path", {
            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
          })
        );
      });
      t.Z = a;
    },
  },
  function (e) {
    e.O(
      0,
      [
        2013, 959, 5404, 3551, 7542, 5127, 8198, 5558, 1707, 5403, 3154, 4622,
        3056, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 96273));
      }
    ),
      (_N_E = e.O());
  },
]);
