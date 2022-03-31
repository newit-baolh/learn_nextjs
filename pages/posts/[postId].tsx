import { useRouter } from 'next/router';
import React from 'react';

export interface PostDetailProps {
}
// Dynamic route level 2

export default function PostDetail (props: PostDetailProps) {
    const router = useRouter()
  return (
    <div>
      <h1>Post Detail Page [ID: {JSON.stringify(router.query)}]</h1>
    </div>
  );
}
