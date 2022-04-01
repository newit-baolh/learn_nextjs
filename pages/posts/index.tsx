import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage ({posts}: PostListPageProps) {
  console.log('posts', posts);
  
  return (
    <div>
      <h1>Post List Page</h1>
      <div>
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li> )}
        </ul>
      </div>
    </div>
  );
}

// static props using generate HTML + JSON data
export const getStaticProps : GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  console.log('static props');
  // fetch data from API
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()
  
  return {
    props : {
      // get these content needed, reduce size of file
      posts: data.data.map((x : any)=> ({id: x.id , title: x.title}))
    }
  }
}