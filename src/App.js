import React,{Component} from 'react'
import HomePage from './pages/Home';
import './App.css';
import AboutPage from './pages/About';
import PostList from './pages/PostList';
import Post from './pages/Post';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Error404 from './pages/Error404';
import Header from './components/Header'
import NewArticle from './pages/NewArticles';
import EditArticle from './pages/EditArticle';
import Footer from './components/FooterComponent';
import CategoryPost from './pages/CategorySearchPost';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Posts:[],
      isLoading:true
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
 console.log(this.state.Posts)
}
  render(){
    const PostDetails=({match})=>{
      const posts=this.state.Posts.filter((post)=>post.slug===match.params.slug)[0]
        if (posts){
          return <Post 
          postContent={posts}
          />}
          else{
            console.log("Error")
            return <div>No Article Available</div>
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
      <Route path="/mjmaurya/edit/:url" component={({match})=><EditArticle post={this.state.Posts.filter((post)=>post.slug===match.params.url)[0]}/>}/>
      <Route path="/articles/tag/:category" component={({match})=><CategoryPost category={match.params.category} posts={this.state.Posts.filter((post)=>post.category.includes(match.params.category))}/>} />
      <Route component={Error404}/>
      </Switch>
      <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
