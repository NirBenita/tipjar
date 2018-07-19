/*
  Originally created by @danfinlay
  https://www.youtube.com/watch?v=gHRLz2jxMCA
*/

import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Web3 from "web3";
import './App.css';

if (window.web3) {
  var myWeb3 = new Web3(window.web3.currentProvider);
} else {
  console.log("No web3 found, get MetaMask!");
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3Provider: undefined,
      balance: 0,
      account: undefined
    };
    this.tip = this.tip.bind(this);
  }
  componentWillMount() {
    if (typeof window.web3 === "undefined") {
      console.log("No web3 found, get MetaMask!");
    } else {
      const comp = this;
      myWeb3.eth.getAccounts(function(err, accounts) {
        comp.setState({
          web3Provider: window.web3.currentProvider.constructor.name
        });
        if (!accounts) {
          console.log("no accounts");
        } else {
          comp.setState({
            account: accounts[0]
          });
          myWeb3.eth.getBalance(accounts[0], function(err, balance) {
            comp.setState({
              balance: window.web3.fromWei(balance, "ether")
            });
          });
        }
      });
    }
  }

  tip() {

    myWeb3.eth.sendTransaction(
      {
        from: this.state.account,
        to: "0x065992b98a185e8174b1246ca7e16e4c9141af97",
        value: 100
      },
      (err, txHash) => {
        if (err) {
          return console.log(err.message);
        }
      }
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.web3Provider ? (
          <div>
            <div>Web3 provided by {this.state.web3Provider}</div>
            <div>your balance is {this.state.balance}</div>
          </div>
        ) : (
          <div>No web3 found, get MetaMask!</div>
        )}
        <div>
          <button onClick={this.tip}>Tip</button>
        </div>
      </div>
    );
  }
}

export default App;
