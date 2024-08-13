import Image from "next/image";
import Link from "next/link";
import JobsCard from "./components/jobs/JobsCard";
import MainPage from "./components/jobs/MainPage";
import Description from "./components/jobs/Description";
// import { Jobs } from "./interface/interfaces";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { SessionProvider } from "next-auth/react";
import SavedJobs from "./saved-jobs/page";

export default function Home() {
  return (
    <main>
        <MainPage />
      {/* <h1>Jobs Listing Page</h1> */}
      {/* <Login/> */}
      {/* <Otp/> */}
      {/* <Register/> */}
      {/* <Description/> */}
    </main>
  );
}
