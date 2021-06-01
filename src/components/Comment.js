import React from 'react';
import {Media} from 'reactstrap';

const Comment=({comments})=>{
    
    if (comments){
    return( 
        <>
        {comments.map((comment,key)=>{
            return(
                <Media key={key}>
                <Media left>
                    <Media className="mr-2" width="30" height="30" object src="https://bit.ly/3uDdHHA" alt={comment.username}/>
                </Media>
                <Media body>
                    <Media heading>
                    {comment.username}
                    </Media>
                    {comment.text}
                </Media>
            </Media>
            )
            
        })}
        </>
    )}
    else{
        return <></>
    }
}
export default Comment;