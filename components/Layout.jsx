import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Netflix Clone App</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
