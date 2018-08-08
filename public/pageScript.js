window.addEventListener('GET_WEB3', function getWeb3InPage(e) {
   console.log(e.data.action, " fired from pageScript.js")
   window.postMessage({action: 'GOT_WEB3', payload: window.web3}, '*');
}, false);