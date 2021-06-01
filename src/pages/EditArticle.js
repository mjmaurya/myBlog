import React from 'react';
import { Remarkable } from 'remarkable';
import {Modal,ModalHeader,ModalBody} from 'reactstrap';
class EditArticle extends React.Component{
    constructor(props){
        super(props);
        this.loading=false;
        this.md=new Remarkable()
        this.state={
            value:"",
            image:"https://source.unsplash.com/featured/?blog",
            title:"",
            slug:new Date().toISOString().toString().replace(':','-').replace('.',""),
            modeToggle:false,
            loading:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
        this.handleTitle=this.handleTitle.bind(this);
        this.handlePublish=this.handlePublish.bind(this);
    }


    componentDidMount(){
        const x=this.props.post.slug;
        fetch(`/api/articles/mjmaurya/${x}`)
        .then(responce=>responce.json())
        .then(body=>{
          this.setState({
            value:body.content,
            title:body.title,
          })
          document.getElementById("imageUrl").value=body.image;
          document.getElementById("tags").value=body.category.join(",");
        })
       }
handleTitle(e){
    this.setState({
        title:e.target.value
    })
}
handlePublish(){
    this.setState({
        loading:!this.state.loading
    })
const imaUrl= document.getElementById("imageUrl").value
const tags= document.getElementById("tags").value.split(",")
const data={
    title:this.state.title,
    image:imaUrl?imaUrl:this.state.image,
    category:tags,
    date:new Date().toUTCString(),
    content:this.state.value
}
fetch(`/api/articles/mjmaurya/update/${this.props.post.slug}`,{
    method:"post",
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json',
    }
}).then(result=>console.log("Successfully: ",result))
.catch(err=>{
    console.log("Runtime Error: ",err)
})
alert("Updated");
}
handleChange(e){
        this.setState({
            value:e.target.value
        }
        )
}
handleToggle(){
this.setState({
    modeToggle: !this.state.modeToggle
})
}
getMarkdown(){
    return {__html:this.md.render(this.state.value)}
}
    render(){
       const style={
            "font-size":"32px"
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 content" height="100vh">
                    <div>
                        <input className="form-control" onChange={this.handleTitle} value={this.state.title} style={style} placeholder="Enter Title Here"></input>
                    </div>
                    <div className="container content" dangerouslySetInnerHTML={this.getMarkdown()}>
                    </div>                 
                    </div>
                    <div className="col-sm-6" height="100vh">
                    <div className="container">
                    <input className="" id="tags" placeholder="Enter Comma seperated tag"></input>
            <i className="btn btn-success m-1" onClick={this.handleToggle}>GUIDE</i><i onClick={this.handlePublish} className="btn btn-success">UPDATE</i>
            </div> 
                    <textarea rows="20" className="form-control" defaultValue={this.state.value} onChange={this.handleChange} >
                    
                    </textarea>
                    <input className="form-control" id="imageUrl" placeholder="Enter Feature image url"></input>
                    </div>
                </div>

                <Modal isOpen={this.state.modeToggle} backdrop={false} toggle={this.handleToggle}>
                    <ModalHeader toggle={this.handleToggle}>
                        All GUIDE Here
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">

                        </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.loading}>
                    <ModalHeader >
                        Loading
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">

                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default EditArticle;