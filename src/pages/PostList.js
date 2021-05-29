import React from 'react'
import PostCard from '../components/PostCard';

const PostList=(props)=>{
    const posts=props.posts.map((post)=>{
        return (
            <div className="col-sm-4">
                <PostCard post={post}/>
            </div>
        )
    })
  return(
      <div className="container">
           <div className="row">
           {posts}
           </div>
      </div>
  )
}

export default PostList;