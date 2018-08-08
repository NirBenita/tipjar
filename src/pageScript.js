window.addEventListener('GET_WEB3', function getWeb3InPage(event) {
   console.log("getWeb3InPage fired from pageScript.js")
   window.postMessage({action: 'GOT_WEB3', payload: window.web3}, '*');
}, false);