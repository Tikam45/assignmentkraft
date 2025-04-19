import Dashboard from "@/components/dashboard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default function DashboardPage(){

    const user = currentUser();
    if(!user){
        redirect("/");
    }
    return(
        <Dashboard/>
    )
}