import React,{useState,useEffect} from 'react'
import {CardImg} from 'reactstrap'
import { Remarkable } from 'remarkable';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';
const Post=(props)=>{

    const [comments,setComment]=useState([])

    useEffect(()=>{
      const slug=props.postContent.slug;
      fetch(`/api/article/mjmaurya/${slug}/comments`)
      .then(responce=> responce.json() )
      .then(body=>{
        setComment(body.comments)
      })
    },[props.postContent.slug])

  return(
      <div className="container">
        <h2 className="mb-3">{props.postContent.title}</h2>
        {props.postContent.category.map((tag)=><a href={`/articles/tag/${tag}`} className="btn-primary btn m-1">{tag}</a>)}
         <div className="container m-3">
            <CardImg height="400" src={props.postContent.image}/>
         </div>
         <div dangerouslySetInnerHTML={{__html:new Remarkable().render(props.postContent.content)}}>
             
         </div>
         <hr></hr>
         <div className="col-sm-6 mt-5">
        <h2 className="mb-3">Recent Comments</h2>
        <Comment comments={comments}/>
        <div className="container mt-5 mb-5">
        <AddComment slug={props.postContent.slug} setComment={setComment}/>
        </div>
       </div> 
      </div>
  )
}

export default Post;