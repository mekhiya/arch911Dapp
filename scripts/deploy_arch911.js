// `npx hardhat run <script>` you'll find the Hardhat
const hre = require("hardhat");

async function main() {
  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  // await greeter.deployed();
  // console.log("Greeter deployed to:", greeter.address);

  const Arch911Contract = await hre.ethers.getContractFactory("Arch911Contract");
  const arch911Contract = await Arch911Contract.deploy();
  await arch911Contract.deployed();
  console.log("Arch911Contract Contract deployed to:", arch911Contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
