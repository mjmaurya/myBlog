import React,{Component} from 'react'
import PostCard from '../components/PostCard'
import Loading from '../components/Loading'

class HomePage extends Component{
 constructor(props){
     super(props);
     this.state={
         isLoading:true
     }
 }

 componentDidMount(){
     setTimeout(()=>{
        this.setState({
            isLoading:!this.state.isLoading
        })
     },2000)
     
 }
    render(){
        const posts=this.props.posts.map((post,key)=>{
            return (
                <div key={key} className="col-sm-4">
                    <PostCard post={post}/>
                </div>
            )
        })
        if(this.state.isLoading){
            return <Loading/>
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                        {posts}
                    </div>
                </div>
              )
        }
    }
}

export default HomePage;