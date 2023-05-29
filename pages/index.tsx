import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Truemeds</title>
        <meta name="description" content="write your description here..." />
      </Head>
      <main className="">
        <h1 className="">Welcome to Truemeds boilerplate</h1>
      </main>
    </div>
  );
};

export default Home;
