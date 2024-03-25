const navv = `<nav id="blink"
    class="font-display fixed z-20 top-0 inset-x-0 md:py-2 md:px-6 p-2 font-display fixed z-20 top-0 md:inset-x-0 inset-x-0 md:p-4 p-2 bg-gray-900">
    <div class="relative flex items-center justify-between">
        <div
            class="flex flex-wrap items-center justify-center flex-1 gap-4 py-4 md:flex-none md:items-stretch md:justify-start md:flex-nowrap">
            <a class="z-0 w-32 h-12 mx-auto md:hidden shrink-0" href="#"><span style="
                box-sizing: border-box;
                display: block;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px none;
                margin: 0px;
                padding: 0px;
                position: absolute;
                inset: 0px;
              "><img alt="Harpie" draggable="false" sizes="100vw" srcset="
                  index_files/Harpie-Logomark-Orange.svg  640w,
                  index_files/Harpie-Logomark-Orange.svg  750w,
                  index_files/Harpie-Logomark-Orange.svg  828w,
                  index_files/Harpie-Logomark-Orange.svg 1080w,
                  index_files/Harpie-Logomark-Orange.svg 1200w,
                  index_files/Harpie-Logomark-Orange.svg 1920w,
                  index_files/Harpie-Logomark-Orange.svg 2048w,
                  index_files/Harpie-Logomark-Orange.svg 3840w
                " src="index_files/Harpie-Logomark-Orange.svg" decoding="async" data-nimg="fill" style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: medium none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                "></span></a><a
                class="relative items-center hidden md:block shrink-0 w-28 mr-3 transform scale-105 bg-harpie border-harpie border-2 rounded-sm overflow-hidden h-auto"
                href="./"><span style="
                box-sizing: border-box;
                display: block;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px none;
                margin: 0px;
                padding: 0px;
                position: absolute;
                inset: 0px;
              "><img alt="Harpie" draggable="false" sizes="100vw" srcset="
                  index_files/Harpie-Logo-White-On-Orange.svg  640w,
                  index_files/Harpie-Logo-White-On-Orange.svg  750w,
                  index_files/Harpie-Logo-White-On-Orange.svg  828w,
                  index_files/Harpie-Logo-White-On-Orange.svg 1080w,
                  index_files/Harpie-Logo-White-On-Orange.svg 1200w,
                  index_files/Harpie-Logo-White-On-Orange.svg 1920w,
                  index_files/Harpie-Logo-White-On-Orange.svg 2048w,
                  index_files/Harpie-Logo-White-On-Orange.svg 3840w
                " src="index_files/Harpie-Logo-White-On-Orange.svg" decoding="async" data-nimg="fill" style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: medium none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                "></span></a>

            <div class="items-center hidden gap-4 md:flex">
                <a rel="noreferrer"
                    class="duration-200 transition ease-in-out rounded-sm hover:bg-harpie hover:text-white p-2 text-sm font-medium md:text-base cursor-pointer text-gray-100"
                    href="./security/index.html">Security</a><a rel="noreferrer"
                    class="duration-200 transition ease-in-out rounded-sm hover:bg-harpie hover:text-white p-2 text-sm font-medium md:text-base cursor-pointer text-gray-100"
                    href="./#/harpie-whitepaper">Whitepaper</a><a rel="noreferrer"
                    class="duration-200 transition ease-in-out rounded-sm hover:bg-harpie hover:text-white p-2 text-sm font-medium md:text-base cursor-pointer text-gray-100"
                    href="./#/community">Community</a><a rel="noreferrer"
                    class="duration-200 transition ease-in-out rounded-sm hover:bg-harpie hover:text-white p-2 text-sm font-medium md:text-base cursor-pointer text-gray-100"
                    href="./#/enterprise">Enterprise</a>
            </div>
        </div>
        <div class="z-10 flex items-center gap-4 md:hidden">
            <button onclick="togglemenu()"
                class="flex items-center justify-center text-white rounded-md hover:text-orange-300 hover:bg-harpie-200 focus:outline-none"
                id="togglebtn" type="button" aria-expanded="false">
                <span class="sr-only">Open main menu</span><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"
                    class="block w-8 h-8 text-harpie">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div class="items-center hidden gap-6 md:flex">
            <a class="w-full px-6 py-2 text-center text-white transition duration-200 ease-in-out rounded-sm cursor-pointer bg-harpie hover:bg-harpie-200 active:bg-harpie-600"
                href="/onboarding2/onboarding/basic/index.html">Enter Ap</a>
        </div>
    </div>
</nav>`;

let nav = document.getElementById("blink");
console.log(nav);
const replaceNav = () => (nav.outerHTML = navv);
// replaceNav();
