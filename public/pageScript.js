(function(){
  console.log("dispatching event from pageScript")
  document.dispatchEvent(
    new CustomEvent("RW759_connectExtension", {
      detail: window.web3
    })
  );
})();