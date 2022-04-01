
import React from 'react';
import dynamic from 'next/dynamic';

// import dynamic if want just render client side do not render from server side => set srr= false
// else normal it will render from server using import normal 
// import Header from 'components/common/header'
const Header = dynamic(()=> import('components/common/header'), {ssr: false})
export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  return (
    <div>
      <h1>About Page</h1>
      <Header />
    </div>
  );
}
