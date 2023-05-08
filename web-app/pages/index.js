import Head from "next/head";
import HomePage from "@component/components/homePage/homePage";

export default function Home({ data }) {
  // console.log("data:", data);

  return (
    <div className="bg-fixed bg-center bg-cover">
      <Head>
        <title>Song - Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </div>
  );
}
