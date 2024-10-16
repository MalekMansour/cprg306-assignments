"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context"; 

const Page = () => {
  const { user, firebaseSignOut } = useUserAuth();

  if (!user) {
    return <p>You need to be logged in to access this page.</p>; 
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
