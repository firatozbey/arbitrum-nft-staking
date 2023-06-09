import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.h1}>
        <b>Mint An NFT!</b>
      </h1>
 
      <img src="/icons/hidden.gif" alt="drop" width={400}  ></img>
      <hr className={`${styles.detailPageHr}`} /> 

      <Web3Button
        theme="dark"
        style={{width:"400px", height:"50px"}}
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Claim An NFT
      </Web3Button>
    </div>
    </>
  );
};

export default Mint;
