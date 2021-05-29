import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap'
import {Link} from 'react-router-dom'

const PostCard=(props)=>{
    return(
        <Card>
            <CardImg width="100%" height="200" src={props.post.image}/>
            <CardBody>
                <Link to={`/blog/${props.post.slug}`}>
                <CardTitle>
                    {props.post.title}
                </CardTitle></Link>
                <CardText>
                    {props.post.content.substring(1,100)+"....."}
                </CardText>
            </CardBody>
        </Card>
    )
}
export default PostCard;