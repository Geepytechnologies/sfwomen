import Head from "next/head";
import React from "react";

type Props = {};

const TheHead = (props: Props) => {
  return (
    <Head>
      <title>Spiritfilledwomen</title>
      <meta name="description" content="spirit filled women" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
    </Head>
  );
};

export default TheHead;
