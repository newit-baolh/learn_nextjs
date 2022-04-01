import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { route } from 'next/dist/server/router'
import { Router, useRouter } from 'next/router'
import React from 'react'

export interface PostDetailProps {
  post: any
}
// Dynamic route level 2

export default function PostDetail({ post }: PostDetailProps) {
  const router = useRouter()
  if(router.isFallback){
    return <div style={{fontSize: "2rem", textAlign: "center"}}>Loading ...</div>
  }
  if(!post) return null
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
      <a href={post.imageUrl}>Link Image</a>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\nGET STATIC PATHS')

  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1'
  )
  const data = await response.json()

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  // console.log('static props');
  console.log('\nGET STATIC PROPS', context.params?.postId)
  const postId = context.params?.postId
  // fetch data from API
  if (!postId) return { notFound: true }
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  )
  const data = await response.json()

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}
