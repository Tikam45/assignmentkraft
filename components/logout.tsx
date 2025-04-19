
"use client"

import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(()=>router.push("/"));  
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <button
      onClick={() => handleSignOut()}
      className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white cursor-pointer"
    >
      Sign Out
    </button>
    </div>
  );
}
