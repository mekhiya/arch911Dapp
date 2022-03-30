// import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import { useState } from 'react';
import Arch911 from "./artifacts/contracts/Arch911.sol/Arch911Contract.json"

// localhost
const arch911ContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"


function App() {
  const [userAccount, setUserAccount] = useState('')
  const [depositAmount, setDepositAmount] = useState(0)
  const [depositId, setDepositId] = useState(0)
  //const [deposits, setDeposits] = useState('')

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function getVaultDetails() {
    //public view returns (uint256,uint256,uint256,uint256){}
    //numOfDeposits,numOfUniqueDepositors,totalDepositValue,numberOfWatch

  }
  async function addDeposit() {
    //function addDeposit() public payable { }

    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(arch911ContractAddress, Arch911.abi, signer)
      const transaction = await contract.addDeposit({ value: ethers.utils.parseEther(depositAmount) })
      transaction.wait()
      console.log(`Deposit of amount ${depositAmount} created`)
    }
  }
  async function addWatcher() {
    //function addWatcher(uint256 _depositId, address _depositorAddress) public payable{ }

  }
  async function getDepositsByOwner() {
    //function getDepositsByOwner(address _depositorAddress) public view returns(Deposit[] memory)
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(arch911ContractAddress, Arch911.abi, provider)
      try {
        //function greet() public view returns (string memory)
        const data = await contract.getDepositsByOwner(userAccount)
        //deposits = data
        console.log('length is ', data.length)
        console.log('depositId at 0 is ', data[0]['depositId'])
        console.log('amount at 0 is ', ethers.utils.formatEther(data[0]['amount']))
        console.log('amount at 1 is ', ethers.utils.formatEther(data[1]['amount']))
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }
  async function getWatchesOnDeposit() {
    //function getWatchesOnDeposit(uint256 _depositId) public view returns(Watch[] memory)
  }
  async function submitWithdrawRequest() {
    // function submitWithdrawRequest(uint256 _depositId) public { }
  }
  async function withdraw() {
    //function withdraw(uint256 _depositId) public { }
  }
  async function alertWatchers() {
    //function alertWatchers(bool _isFinalAlert, uint256 _depositId) internal { }
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <h2>Arch911 - trustless and transparent custodian vault</h2>
        <h3>Add Deposit</h3>
        <input onChange={e => setDepositAmount(e.target.value)} placeholder="Deposit Amount" />
        <button onClick={addDeposit}>Add Deposit!</button>
        <h3>Add Watch</h3>
        <input onChange={e => setDepositId(e.target.value)} placeholder="Deposit ID" />
        <button onClick={addWatcher}>Add Watch (0.000911 ETH)!</button>
        <h3>Deposits by Owner</h3>
        < input onChange={e => setUserAccount(e.target.value)} placeholder="Account Address" />
        <button onClick={getDepositsByOwner}>Get all Deposits!</button>
        {/* Deposits are : {deposits} */}
      </header>
    </div>
  );
}

export default App;
