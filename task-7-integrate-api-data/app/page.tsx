import Image from "next/image";
import Link from "next/link";
import JobsCard from "./components/JobsCard";
import MainPage from "./components/MainPage";
import Description from "./components/Description";
import { Jobs } from "./interface/interfaces";

export default function Home() {
  return (
    <main>
      {/* <h1>Jobs Listing Page</h1> */}
      <MainPage/>
      {/* <Description/> */}
    </main>
  );
}
