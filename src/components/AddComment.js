import React,{useState} from 'react';
import {FormGroup,Label,Input, Button} from 'reactstrap';

const AddComment=({slug,setComment})=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const handleComment=()=>{
        fetch(`/api/article/mjmaurya/${slug}/addcomments`,{
            method:"post",
            body:JSON.stringify({username:name,email:email,text:message}),
            headers:{
                'Content-Type':'application/json',
            }
        }).then(result=>{
            if(result.ok){
            setComment(result.comments);
            }
        })
        .catch(err=>{
            console.log("Runtime Error: ",err)
        })
    }
    return(
        <div id="add-comment">
        <h1>Add Comment</h1>
            <FormGroup className="row">
                <Label className="col-sm-2" htmlfor="name" >Name: </Label>
                <Input type="text" className="col-sm-10" name="name" value={name} onChange={(event)=>setName(event.target.value)}/>
            </FormGroup>
            <FormGroup className="row">
                <Label className="col-sm-2" htmlfor="email" >Email: </Label>
                <Input type="email" className="col-sm-10" md={10} name="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </FormGroup>
            <FormGroup className="row">
                <Label className="col-sm-2" htmlfor="message" >Message: </Label>
                <textarea className="form-control col-sm-10" name="message" value={message} onChange={(event)=>setMessage(event.target.value)} ></textarea>
            </FormGroup>
            <Button onClick={handleComment}>Post</Button>
        </div>
    )
}

export default AddComment;