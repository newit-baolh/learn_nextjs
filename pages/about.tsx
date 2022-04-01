
import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// import dynamic if want just render client side do not render from server side => set srr= false
// else normal it will render from server using import normal 
import Header from 'components/common/header'
import { Router, useRouter } from 'next/router';
// const Header = dynamic(()=> import('components/common/header'), {ssr: false})
export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  console.log(router.query);
  const page = router.query?.page
  
  useEffect(()=>{
    if(!page) return
   (async () => {
    const response =  await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
    const data = await response.json()
    setPostList(data.data)
    
   })()
  },[page])

  const handleNextPage = () => {
    router.push({
      pathname: '/about/',
      query: {
        page: (Number(page) || 1) + 1
      }
    },undefined,{shallow: true})
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Query : {JSON.stringify(router.query)}</p>
      <Header />
      <ul>
        {postList.map((post: any) => <li key={post.id}>{post.title}</li> )}
      </ul>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}

export function getStaticProps (){
  console.log('get static props');
  
  return {
    props: {}
  }
}