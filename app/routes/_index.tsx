/* eslint-disable import/no-unresolved */
import type { MetaFunction } from "@remix-run/node";
import About from "~/components/about";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import Navbar from "~/components/navbar";
import Tokenomics from "~/components/tokenomics";
import "react-toastify/dist/ReactToastify.css";
import Partnership from "~/components/partnership";

export const meta: MetaFunction = () => {
  return [
    {
      title: "$BUL on Solana",
      description: "Welcome to $BUL Community!",
    },
    { name: "$BUL on Solana", content: "Welcome to $BUL Community!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Partnership />
      <Footer />
    </>
  );
}
