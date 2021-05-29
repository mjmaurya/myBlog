import React,{Component} from 'react'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PostList from './pages/PostList';
import Post from './pages/Post';
import {BrowserRouter, Route} from 'react-router-dom'
import Error404 from './pages/Error404';
import Header from './components/Header'
import { POSTS } from './shared/posts';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Posts:POSTS
    }
  }

  render(){
    console.log(this.state.Posts)
    const PostDetails=({match})=>{
      return <Post 
      postContent={this.state.Posts.filter((post)=>post.slug===match.params.slug)[0]}
      />
    }
    return (
      <BrowserRouter>
      <div className="App">
      <Header/>
      <Route path="/" component={()=><HomePage posts={this.state.Posts}/>} exact />
      <Route path="/aboutus" component={AboutPage}/>
      <Route path="/allPosts" component={()=><PostList posts={this.state.Posts}/>}/>
      <Route path="/blog/:slug" component={PostDetails}/>
      <Route path="/error" component={Error404}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
