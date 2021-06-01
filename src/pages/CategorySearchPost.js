import React,{useState,useEffect} from 'react'
import PostCard from '../components/PostCard';
import Loading from '../components/Loading';

const CategoryPost=(props)=>{

    const [isLoading,setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000);
    },[props.post])

    const posts=props.posts.map((post,key)=>{
        return (
            <div key={key} className="col-sm-4">
                <PostCard post={post}/>
            </div>
        )
    })
    console.log("IsLoading:",isLoading)
    if (isLoading){
        console.log("Loading")
        return <Loading/>
    }
  return(
      <div className="container">
            <h1 className="mb-5">Category: {props.category}</h1>
           <div className="row">
           {posts}
           </div>
      </div>
  )
}

export default CategoryPost;