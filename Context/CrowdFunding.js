import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

// Internal import
import { CrowdFundingABI, CrowdFundingAddress } from "./contants";

// FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
  const titleData = "Crowd Funding Contract";
  const [currentAccount, setCurrentAccount] = useState("");

  const createCampaign = async (campaign) => {
    const { title, description, amount, deadline } = campaign;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    console.log("Current Account:", currentAccount);
    console.log("Campaign:", campaign);
    try {
      const transaction = await contract.createCampaign(
        currentAccount, // owner
        title, // title
        description, // description
        ethers.utils.parseUnits(amount, 18),
        new Date(deadline).getTime() // deadline
      );

      await transaction.wait();

      console.log("Contract call success", transaction);
    } catch (error) {
      console.error("Contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = fetchContract(provider);

    const campaigns = await contract.getCampaigns();

    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      pId: i,
    }));

    console.log("Parsed Campaigns:", parsedCampaigns);
    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    try {
      // Initialize the provider with the correct network
      const provider = new ethers.providers.JsonRpcProvider("https://127.0.0.1:8545/"); // Replace with your network URL
      const contract = fetchContract(provider);
  
      // Fetch all campaigns from the contract
      const allCampaigns = await contract.getCampaigns();
  
      // Request accounts from Metamask
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
  
      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found. Please connect to Metamask.");
      }
  
      const currentUser = accounts[0];
      console.log("Current User:", currentUser);
      console.log("All Campaigns:", allCampaigns);
  
      // Filter campaigns by the current user
      const userCampaigns = allCampaigns.filter(campaign => campaign.owner === currentUser);
      console.log("User Campaigns:", userCampaigns);
  
      return userCampaigns;
    } catch (error) {
      console.error("Error fetching user campaigns:", error);
    }
  };
  
  const donate = async (pId, amount) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const campaignData = await contract.donateToCampaign(pId, {
      value: ethers.utils.parseEther(amount),
    });

    await campaignData.wait();
    location.reload();

    console.log("Donation Data:", campaignData);
    return campaignData;
  };

  const getDonations = async (pId) => {
    const provider = new ethers.providers.JsonRpcBatchProvider();
    const contract = fetchContract(provider);

    const donations = await contract.getDonators(pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    console.log("Parsed Donations:", parsedDonations);
    return parsedDonations;
  };

  //--check if wallet is connected
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        return setOpenError(true), setError("Install Metamask");
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("Connected Account:", accounts[0]);
      } else {
        console.log("No Account Found");
      }
    } catch (error) {
      console.log("Something went wrong while connecting to wallet", error);
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  //--connect wallet function
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log("Wallet Connected:", accounts[0]);
    } catch (error) {
      console.log("Error while connecting to wallet", error);
    }
  };

  return (
    <CrowdFundingContext.Provider
      value={{
        titleData,
        currentAccount,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        connectWallet,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};
