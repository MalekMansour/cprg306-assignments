"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <main>
        <h1>Welcome to the Shopping List App</h1>
        <button onClick={gitHubSignIn}>Sign in with GitHub</button>
        <button onClick={googleSignIn}>Sign in with Google</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Shopping List</h1>
      <p>Welcome, {user.displayName} ({user.email})</p>
      <button onClick={firebaseSignOut}>Logout</button>
    </main>
  );
};

export default Page;
