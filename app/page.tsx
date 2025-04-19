"use client"
import { useClerk } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import DashboardPage from "./dashboard/page";


export default function Home() {
  const user = useClerk();
  if(!user){
    redirect("/sign-in");
  }
  return (
    <div>
      <DashboardPage/>
    </div>
  );
}
