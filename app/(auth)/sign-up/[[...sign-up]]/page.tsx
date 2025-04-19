'use client';

import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [email,     setEmail]     = useState('');
  const [password,  setPassword]  = useState('');
  const [error,     setError]     = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        router.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
      setError('Something went wrong');
    }
  };

  const handleGoogleSignup = async () => {
    if (!isLoaded) return;
    await signUp.authenticateWithRedirect({
      strategy: 'oauth_google',
      redirectUrl: '/sso/callback',
      redirectUrlComplete: '/dashboard',
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 flex-col">
      <div id="clerk-captcha"></div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-white text-center">
          Create an Account
        </h1>

        {error && <p className="text-red-400">{error}</p>}

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-gray-300">First Name</span>
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              className="mt-1 block w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-gray-300">Last Name</span>
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
              className="mt-1 block w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-gray-300">Email Address</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-300">Password</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded bg-green-600 py-2 font-semibold hover:bg-green-700 transition"
        >
          Sign Up
        </button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-800 px-2 text-gray-400">or</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full inline-flex items-center justify-center rounded bg-red-600 px-4 py-2 font-semibold hover:bg-red-700 transition text-white"
        >
          Sign up with Google
        </button>
        
      <div className="text-center"><Link href={'/sign-in'} className="text-center underline">Have an account? Signin</Link></div>
      </form>
    </div>
  );
}
