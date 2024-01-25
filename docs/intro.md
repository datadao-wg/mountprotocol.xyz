---
sidebar_position: 1
---

# Mount Introduction

Mount Protocol, an Filecoin protocol in order to build the world's first financial-first protocol for data organization, asset creation, and issuance.
Driving open data with open finance to promote the democratization of AI.
Open Finance First, Open Data Second!!!
By using this protocol, creators can achieve the following:
1:Funds would only payout after proof is provided that the data has successfully been stored on Filecoin
2:According to the Filecoin protocol, DataDAO can specify the storage duration. This means that as long as there are sufficient funds, theoretically, permanent storage can be achieved.
3:Implementing a unique system that links data storage with usage rights, providing new revenue streams for digital assets.

Mount Protocol Economic Loop

![](/img/image1.png)

Taking a DataDAO organisation as an example, investors can invest in the funding pool, convert their ERC20 tokens into NFTs through mount, which is their own credentials, users can upload their own data to apply for permanent storage, DataDAO members decide which data can get data bounties or how to incentivize uploaders by voting, and after the vote is passed, data uploaders can get their own NFT (DealID), this NFT can be nested inside an NFT of personal credentials in the form of a recursive inscription. After the data is uploaded, the storage provider can provide its own storage space to store the data. When there are sufficient funds in the pool, you can achieve permanent storage through renewal. Here are some incentives for data uploaders and storage providers: 

1. Free storage, permanent storage (for data uploaders)
2. The amount of airdrops, incentives, bounties, etc., which can be adjusted according to the supply and demand of the market (-x, +y)
   In the first phase of the protocol, we will focus on the expansion and governance of the entire DAO

## The specific process of mount

The mount contract is mainly divided into 3 parts: **deployer**, **factory**, **agency**

**deployer**: mount the passport of the protocol, only the deployer can provide the protocol to deploy NFTs

**agency**: A pool of funds, where the ERC20 tokens minted by users will be stored in the agency

**factory**: It is convenient for users who hold deployer NFTs to quickly deploy agencies and apps
The general process is as follows:

The general process is as follows:

1. Any user may mint deployer, enter the registered name and fill in the maximum amount of ETH available in the transaction to realise the minting of deployer NFT
2.  Configure the tokenURI to set the image for the NFT (you can also modify the tokenURI to set any data such as videos, files, etc.)
3.  Deploy the app (NFT contract) and agency (capital pool), select the quotation logic in the agency and configure the structure Asset in the agency

```solidity
struct Asset {
    address currency;
    uint256 premium;
    address feeRecipient;
    uint16 mintFeePercent;
    uint16 burnFeePercent;
}
```

premium is a stake, any user who mount the NFT can get the stake, and the sooner the user joins, the greater the income in the end

4. Configure the tokenURI for the NFT contract
5.  After the deployer completes the deployment, the user can mount to obtain the NFT, the script will read the agency and give the current quotation, and the user can also configure their own tokenURI after completing the mount operation
6.  Users can realise the deployment of ERC6551 wallets, or call the unmount operation to return the tokens to the user according to the previous quotation

Here are the incentives in the mount:
If more and more users join in the future, the pool is getting bigger and bigger, the sooner the user joins, the more stakes will be obtained, and the user can also return the tokens to the user directly through the unmount operation in the follow-up according to the previous quotation, but if you do not withdraw from the continuous construction of the community, you will continue to get a share of the handling fee, and the NFT will always have income
When the DAO organisation is expanded and the governance is perfected, we can enter the second stage to promote the transaction and use of data, such as data can be used for AI model training, scientific research, and data usage rights can also be traded, and everyone who joins DataDAO (including data uploaders and storage providers) can get a commission between data usage and data transactions

The Mount Protocol represents a significant leap forward in the development of standardized modules. By enabling storage providers to conveniently and efficiently store data assets in a sustainable format, establishing a system for usage rights and commodities, and contributing to a sustainable creator economy, the Mount Protocol will fundamentally change the landscape of digital storage and pricing.
