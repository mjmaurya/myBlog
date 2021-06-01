import React from 'react'
import PostCard from '../components/PostCard';

const PostList=(props)=>{
    const posts=props.posts.map((post,key)=>{
        return (
            <div key={key} className="col-sm-4">
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