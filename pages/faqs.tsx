import Layout from "@/components/Layout";
import AccordionCard from "@/components/faq";
import Head from "next/head";

export default function faqShow() {
  return (
    <Layout>
      <Head>
        <title>Faqs</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <AccordionCard />
    </Layout>
  );
}
