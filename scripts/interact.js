const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("ethers");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const provider = new ethers.providers.AlchemyProvider(
    (networks = "goerli"),
    API_KEY
);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const helloWorldContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contract.abi,
    signer
);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updateing the message...");
    const tx = await helloWorldContract.update("This is new message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The message is: " + newMessage);
}

main()
