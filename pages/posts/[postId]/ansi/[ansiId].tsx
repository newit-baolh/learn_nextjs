import { useRouter } from 'next/router';
import React from 'react';

export interface ANSIProps {
}

export default function ANSI (props: ANSIProps) {
    const router = useRouter()
  return (
    <div>
      <h1>Ansi detail Page</h1>
      <p>ANSI: {JSON.stringify(router.query)}</p>
    </div>
  );
}
