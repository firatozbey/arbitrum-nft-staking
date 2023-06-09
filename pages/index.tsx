import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1} style={{height:"60px", backgroundColor:"goldenrod", padding:"5px 10px", borderRadius:"10px"}}>Epic Raven</h1>
      <div className={styles.nftBoxGrid}>
        <div
           style={{backgroundColor:"rgb(18, 206, 18)"}}
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          {/* <Image src="/icons/drop.webp" alt="drop" width={64} height={64} /> */}
          <h2 className={styles.selectBoxTitle} >Mint a new NFT</h2>
          <p className={styles.selectBoxDescription}>
            Use the NFT Drop Contract to claim an NFT from the collection.
          </p>
        </div>

        <div
           style={{backgroundColor:"rgb(206, 18, 18)"}}
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          {/* <Image src="/icons/token.webp" alt="token" width={64} height={64} /> */}
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Use the custom staking contract deployed via{" "}
            to stake your NFTs, and earn tokens from the <b>Token</b> contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
