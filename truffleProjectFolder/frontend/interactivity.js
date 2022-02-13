
const contractaddress = "0x427E658cBbBe5971175Fefd890842CA59e57De33"; // use your smart contract address

// use your smart contract compilation abi
const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "set",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
];

window.onload = function () {

    // check to see if user has metamask addon installed on his browser
    if (typeof web3 === 'undefined') {
        document.getElementById('metamask').innerHTML = "You need <a href='https://metamask.io/'>MetaMask</a> browser plugin to run this example";
    }
    // call the getvalue function here
    getvalue();
}

function getvalue() {
    try {
        //instantiate and connect to contract address via Abi
        var myAbi = web3.eth.contract(abi);
        var myfunction = myAbi.at(contractaddress);
        //call the get function of our SimpleStorage contract
        myfunction.get.call(function (err, xname) {
            if (err) { console.log(err) }
            if (xname) {
                //display value on the webpage
                document.getElementById("xbalance").innerHTML = "last inserted value into the blockchain is :"+xname;
            }
        });
    } catch (err) {
        document.getElementById("xbalance").innerHTML = err;
    }
}

function setvalue() {
    try {
        //instantiate and connect to contract address via Abi
        var myAbi = web3.eth.contract(abi);
        var myFunction= myAbi.at(contractaddress);
        //call the set function of our SimpleStorage contract
        myFunction.set.sendTransaction(document.getElementById("xvalue").value, {
            from: web3.eth.accounts[0], gas: 4000000
        }, function (error, result) {
            if (!error) {
                console.log(result);
            } else {
                console.log(error);
            }
        });
    } catch (err) {
        document.getElementById("xvalue").innerHTML = err;
    }
}
