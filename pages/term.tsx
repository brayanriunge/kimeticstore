import Tabs from "@/components/Terms";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function about() {
  return (
    <Layout>
      <Head>
        <title>Terms</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.jpg" />
      </Head>
      <Tabs />
    </Layout>
  );
}
