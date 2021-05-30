import React from 'react'
import {CardImg} from 'reactstrap'
import { Remarkable } from 'remarkable';
const Post=(props)=>{
  return(
      <div className="container">
        <h2>{props.postContent.title}</h2>
        <b>Category: </b>{props.postContent.category.map((tag)=><button>{tag}</button>)}
         <div className="container m-3">
            <CardImg height="400" src={props.postContent.image}/>
         </div>
         <div dangerouslySetInnerHTML={{__html:new Remarkable().render(props.postContent.content)}}>
             
         </div>
         <div className="container">
        {/* <h2>Related Articles</h2>
            <PostList posts={POSTS.filter((post)=>post.slug!==props.postContent.slug && (props.postContent.category.filter((tag)=>post.category.includes(tag))))}/>
        */}</div> 
      </div>
  )
}

export default Post;