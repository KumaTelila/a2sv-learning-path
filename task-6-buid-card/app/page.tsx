import Image from "next/image";
import Link from "next/link";
import JobsCard from "./components/JobsCard";
import MainPage from "./components/MainPage";
import Description from "./components/Description";

export default function Home() {
  return (
    <main>
      {/* <h1>Jobs Listing Page</h1> */}
      {/* <MainPage/> */}
      <Description/>
    </main>
  );
}
