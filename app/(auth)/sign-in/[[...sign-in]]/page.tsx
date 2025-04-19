
'use client';

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from '@clerk/types';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Unknown error");
    }
  };

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;
    await signIn.authenticateWithRedirect({
      strategy: 'oauth_google' as OAuthStrategy,
      redirectUrl: '/sso/callback',
      redirectUrlComplete: '/dashboard',
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
       <div id="clerk-captcha" className="absolute top-2 left-2" />
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg w-full max-w-sm space-y-6"
      >
        <h1 className="text-2xl font-bold text-white text-center">
          Sign In
        </h1>

        {error && <p className="text-red-400">{error}</p>}

        <label className="block">
          <span className="text-gray-300">Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-300">Password</span>
          <input
            type="password"
            className="mt-1 block w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 font-semibold hover:bg-blue-700 transition"
        >
          Log In
        </button>

        

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full mt-4 inline-flex items-center justify-center rounded bg-red-600 px-4 py-2 font-semibold hover:bg-red-700"
        >
          Sign in with Google
        </button>
        
      <div className="text-center"><Link href={'/sign-up'} className="text-center underline">Don't have an account? Sign up</Link></div>
      </form>
    </div>
  );
}
