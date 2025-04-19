
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}!</h1>
      <p>Your email: {user.emailAddresses[0]?.emailAddress}</p>
    </main>
  );
}
