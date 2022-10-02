import Head from "next/head";
import Introduction from "../components/Introduction";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Introduction />
    </div>
  );
}
