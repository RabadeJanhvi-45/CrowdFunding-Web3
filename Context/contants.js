
import CrowdFunding from "./CrowdFunding.json";

//crowd funding marketplace
export const CrowdFundingAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const CrowdFundingABI=CrowdFunding.abi;
const networks={
    localhost:{
        chainId:`0x${Number(31337).toString(16)}`,
        chainName:"localhost",
        nativeCurrency:{
            name:"GO",
            symbol:"Go",decimals:18
        },
        rpcUrls:["http://127.0.0.1:8545/"],
        blockExplorerUrls:["https://bscscan.com"],
    },
};