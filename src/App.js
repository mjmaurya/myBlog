import React,{Component} from 'react'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PostList from './pages/PostList';
import Post from './pages/Post';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Error404 from './pages/Error404';
import Header from './components/Header'
// import { POSTS } from './shared/posts';
import NewArticle from './pages/NewArticles';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Posts:[]
    }
  }
componentDidMount(){
 fetch(`/api/articles/mjmaurya`)
 .then(responce=>responce.json())
 .then(body=>{
   this.setState({
     Posts:body
   })
 })
}
  render(){
    console.log(this.state.Posts)
    const PostDetails=({match})=>{
      const posts=this.state.Posts.filter((post)=>post.slug===match.params.slug)[0]
      if (posts){
      return <Post 
      postContent={posts}
      />}
      else{
        console.log("Error")
        return <div></div>
      }
    }
    return (
      <BrowserRouter>
      <div className="App">
      <Header/>
      <Switch>
      <Route path="/" component={()=><HomePage posts={this.state.Posts}/>} exact />
      <Route path="/aboutus" component={AboutPage} exact/>
      <Route path="/mjmaurya/newarticle" component={NewArticle} />
      <Route path="/allPosts" component={()=><PostList posts={this.state.Posts}/>}/>
      <Route path="/blog/:slug" component={PostDetails} exact/>
      <Route component={Error404}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
