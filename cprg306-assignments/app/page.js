// /app/page.js

import React from 'react';
import Link from 'next/link'; // Make sure this is imported for client-side navigation

export default function Page() {
    return (
      <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2">
          <a>Go to Week 2 Assignments</a> {/* Link to the week-2 page */}
        </Link>
      </main>
    );
}
