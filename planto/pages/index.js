import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Footerbanner from "../components/Footerbanner";
import Navbar from "../components/Navbar";
import Policybanner from "../components/Policybanner";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Stats from "../components/stats";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Slider/>
<Products/>
<Footerbanner/>
<Stats/>
    </div>
  );
}