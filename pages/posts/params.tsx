import { useRouter } from 'next/router';
import React from 'react';

export interface ParamsPageProps {
}
// Catch all route level 3

export default function ParamsPage (props: ParamsPageProps) {
    const router = useRouter()
  return (
    <div>
      <h1>Params Page [Params: {JSON.stringify(router.query)}]</h1>
    </div>
  );
}
