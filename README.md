// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.so1";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ERC721Staking is ReentrancyGuard {
     using SafeERC20 for IERC20;

    // Interfaces for ERC20 and ERC721
    IERC20 public immutable rewardsToken;
    IERC721 public immutable nftCollection;

    // Constructor function to set the rewards token and the NFT collection addresses
    constructor (IERC721 _nftCollection, IERC20 _rewardsToken) {
        nftCollection = _nftCollection;
        rewardsToken n = _rewardsToken;
    }

    struct StakedToken {
        address staker;
        uint256 tokenId;
    }

    // Staker info
    struct Staker {
        // Amount of tokens staked by the staker
        uint256 amountStaked;

        // Staked tokens
        StakedToken[] stakedTokens;

        // Last time of the rewards were calculated for this user
        uint256 timeOfLastUpdate;

        // Calculated, but unclaimed rewards for the User. The rewards are
        // calculated each time the user writes to the Smart Contract
        uint256 unclaimedRewards;
    }

    
    //Rewards per hour per token deposited in wei.
    //Rewards are cumulated once every hour.
    uint256 private rewardsPerHour = 100000;

    // Mapping of User Address to Staker info
    mapping(address => Staker) public stakers;

    // Mapping of Token Id to staker. Made for the SC to remeber
    // who to send back the ERC721 Token to.
    mapping(uint256 => address) public stakerAddress;


    function stake(uint256 _tokenId) external nonReentrant {
        // If wallet has tokens staked, calculate the rewards before adding the new token
        if (stakers[msg.sender].amountStaked > 0) {
            uint256 rewards = calculateRewards (msg.sender);
            stakers msg.sender].unclaimedRewards += rewards;
        }

        // Wallet must own the token they are trying to stake
        require(
            inftCollection.ownerof(_tokenId) == msg.sender,
            "You don 't own this token!"
        );

        // Transfer the token from the wallet to the Smart contract
        nftCollection. transferFrom(nsg.sender, address (this), _tokenId);

        // Create StakedToken
        StakedToken memory stakedToken = StakedToken (msg.s sender, _tokenId);

        // Add the token to the stakedTokens array
        stakers [msg. sender] .stakedTokens.push(stakedToken);

        // Increment the amount staked for this wallet
        stakers[msg.sender].amountStaked++;

        // Update the mapping of the tokenId to the staker's address
        stakerAddress(_tokenId] = msg. sender;
        
        // Update the timeOfLastUpdate for the staker
        stakers [msg sender]. timeOfLastUpdate = block.timestamp;
    }

    
    function withdraw(uint256 _tokenId) external nonReentrant iq {
    
        
    }
    
}