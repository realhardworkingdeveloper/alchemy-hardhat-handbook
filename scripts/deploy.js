// 0xE5541D4751D3F9B536FbF02ACBC0e1eBBDEA2BDf
async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract deployed to address:", hello_world.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })