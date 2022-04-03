import './App.css';
import { ethers } from 'ethers';
import React, { useState } from 'react';
import Arch911 from "./artifacts/contracts/Arch911.sol/Arch911Contract.json"

// kovan url
const arch911ContractAddress = "0x5229477Ad95DE9C66bB5AB69887796653579d68e"
const watchCreationAmount = "0.000911"

function App() {
  const [userAccount, setUserAccount] = useState('')
  const [depositAmount, setDepositAmount] = useState(0)
  const [depositsByOwnerArray, setdepositsByOwnerArray] = useState([])
  const [depositId, setDepositId] = useState(0)

  const [depositorAddress, setDepositorAddress] = useState("")
  const [watchesOnDepositArray, setWatchesOnDepositArray] = useState([])
  const [depositIdForWatches, setDepositIdForWatches] = useState(0)

  const strDeposits = JSON.stringify(depositsByOwnerArray);
  const strWatches = JSON.stringify(watchesOnDepositArray);

  const [vaultData, setVaultData] = useState([]);

  const [depositIdSubmitWithdraw, setDepositIdSubmitWithdraw] = useState('')

  const [depositIdFinalWithdraw, setDepositIdFinalWithdraw] = useState('')

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function getVaultDetails() {
    //public view returns (uint256,uint256,uint256,uint256){}
    //numOfDeposits,numOfUniqueDepositors,totalDepositValue,numberOfWatch
    if (typeof window.ethereum !== 'undefined') {
      console.log("entered function")
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(arch911ContractAddress, Arch911.abi, provider)
      try {
        const data = await contract.getVaultDetails()
        setVaultData(data)
        console.log('Vault Details are: ', vaultData)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
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
      setDepositAmount(0)
    }
  }
  async function addWatcher() {
    //function addWatcher(uint256 _depositId, address _depositorAddress) public payable{ }
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(arch911ContractAddress, Arch911.abi, signer)
      const transaction = await contract.addWatcher(depositId, depositorAddress, { value: ethers.utils.parseEther(watchCreationAmount) })
      transaction.wait()
      console.log(`Watch was created on Deposit ID - ${depositId}`)
    }
  }
  async function getDepositsByOwner() {
    //function getDepositsByOwner(address _depositorAddress) public view returns(Deposit[] memory)
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(arch911ContractAddress, Arch911.abi, provider)
      try {
        //function greet() public view returns (string memory)
        const data = await contract.getDepositsByOwner(userAccount)
        console.log('data is ', data)
        setdepositsByOwnerArray(data)

        console.log('depositsByOwnerArray is ', depositsByOwnerArray)
        // console.log('length is ', data.length)
        // console.log('depositId at 0 is ', data[0]['depositId'])
        // console.log('amount at 0 is ', ethers.utils.formatEther(data[0]['amount']))
        // console.log('amount at 1 is ', ethers.utils.formatEther(data[1]['amount']))
        // console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }
  async function getWatchesOnDeposit() {
    //function getWatchesOnDeposit(uint256 _depositId) public view returns(Watch[] memory)
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(arch911ContractAddress, Arch911.abi, provider)
      try {
        //function greet() public view returns (string memory)
        const data = await contract.getWatchesOnDeposit(depositIdForWatches)
        console.log('data is ', data)
        setWatchesOnDepositArray(data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }
  async function submitWithdrawRequest() {
    // function submitWithdrawRequest(uint256 _depositId) public { }
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(arch911ContractAddress, Arch911.abi, signer)
      try {
        console.log("depositIdSubmitWithdraw is - ", depositIdSubmitWithdraw)
        const tx = await contract.submitWithdrawRequest(depositIdSubmitWithdraw)
        tx.wait()
        console.log("tx ", tx)
        setDepositIdSubmitWithdraw('')
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }
  async function withdraw() {
    //function withdraw(uint256 _depositId) public { }
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(arch911ContractAddress, Arch911.abi, signer)
      try {
        const tx = await contract.withdraw(depositIdFinalWithdraw)
        tx.wait()
        console.log("tx ", tx)
        //setDepositIdFinalWithdraw('')
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Arch911 - trustless and transparent custodian vault</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>Get Vault Details</h3>
        (Num of Deposits, Num of Unique Depositors, Total Vault Value, Num of Watches)

        <textarea readOnly name="vaultDetailsText" value={vaultData} cols="60" rows="1" />
        <button onClick={getVaultDetails}>Get Vault Details!</button>
        ~~~--------------------------------~~~
        <h3>Add Deposit</h3>
        <input value={depositAmount} onChange={e => setDepositAmount(e.target.value)} placeholder="Deposit Amount" />
        <button onClick={addDeposit}>Add Deposit!</button>
        ~~~--------------------------------~~~
        <h3>Find all deposits by depositor</h3>
        < input onChange={e => setUserAccount(e.target.value)} placeholder="Account Address" />
        <button onClick={getDepositsByOwner}>Get all Deposits!</button>
        Number of Deposits by Owner :  {depositsByOwnerArray.length}<br />
        (Deposit Id, Account ID, Amount(bignumber), Create Time, Update Time)
        <textarea readOnly name="Text1" value={strDeposits} cols="60" rows="3" />
        ~~~--------------------------------~~~
        <h3>Add Watch</h3>
        <input onChange={e => setDepositId(e.target.value)} placeholder="Deposit ID" />
        <input onChange={e => setDepositorAddress(e.target.value)} placeholder="Address of Depositor" />
        <button onClick={addWatcher}>Add Watch (0.000911 ETH)!</button>
        ~~~--------------------------------~~~
        <h3>Watches created on Deposit</h3>
        < input onChange={e => setDepositIdForWatches(e.target.value)} placeholder="Deposit ID" />
        <button onClick={getWatchesOnDeposit}>Get all Watches!</button>
        Number of Wacthes on Deposit :  {watchesOnDepositArray.length}<br />
        (Deposit Id, Account ID, Amount(bignumber), Create Time, Update Time)
        <textarea readOnly name="Text1" value={strWatches} cols="60" rows="3" />
        ~~~--------------------------------~~~
        <h3>Submit Withdraw Request</h3>
        < input value={depositIdSubmitWithdraw} onChange={e => setDepositIdSubmitWithdraw(e.target.value)} placeholder="Deposit ID" />
        <button onClick={submitWithdrawRequest}>Submit Withdraw Request!</button>
        ~~~--------------------------------~~~
        <h3>Final Withdraw</h3>
        < input value={depositIdFinalWithdraw} onChange={e => setDepositIdFinalWithdraw(e.target.value)} placeholder="Deposit ID" />
        <button onClick={withdraw}>Final Withdraw!</button>
        ~~~--------------------------------~~~
      </header>

    </div>
  );
}

export default App;
