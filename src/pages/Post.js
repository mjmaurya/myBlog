import React from 'react'
import {CardImg} from 'reactstrap'

const Post=(props)=>{
  return(
      <div className="container">
        <h2>{props.postContent.title}</h2>
         <div className="container m-3">
            <CardImg height="400" src={props.postContent.image}/>
         </div>
         <div>
             {props.postContent.content.split("\n\n").map((paragraph,key)=>(
                <p key={key}>{paragraph}</p>)
             )}
             <p>{props.postContent.content}</p>
         </div>
      </div>
  )
}

export default Post;