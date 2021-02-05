import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import PostForm from './components/PostForm'
import Notification from './components/Notification'
import Toggable from './components/Toggable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState({})
  const [user, setUser] = useState(null)
  const toggleRef = useRef()
  const loginRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedBlogUser')
    if(loggedUserJSON) {
      console.log('the user is:', loggedUserJSON)
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      setUser(user)
    }
  }, [])

  const handleLogin = async (username, password, event) => {
    event.preventDefault()

    try{
      const user = await loginService.login({ username, password })
      localStorage.setItem('loggedBlogUser', JSON.stringify(user))
      blogService.setToken(user.token)
      loginRef.current.resetFields()
      setUser(user)
      setNotification({ type: 'success', message: `${user.username} is loged in` })
      setTimeout( () => {
        setNotification({})
      }, 5000)
    } catch (exception){
      setNotification({ type: 'error', message: 'Wrong credentials' })
      setTimeout( () => {
        setNotification({})
      }, 5000)
    }
  }

  const handleLogout = async (event) => {
    localStorage.removeItem('loggedBlogUser')
    setUser(null)
  }

  const handlePost = async (postObject, event) => {
    event.preventDefault()

    try {
      const post = await blogService.create(postObject)
      toggleRef.current.toggleVisivility()
      setBlogs([...blogs, post])
      setNotification({ type: 'success', message: `A new blog ${post.title} by ${post.author} added!` })
      setTimeout(() => {
        setNotification({})
      }, 5000)
    } catch(exception){
      setNotification({ type: 'error', message: exception })
      setTimeout(() => {
        setNotification({})
      }, 5000)
    }
  }

  const updatePost = async (postObject) => {

    try{
      const post = await blogService.update(postObject, postObject.id)
      const updatedBlogs = blogs.filter(ele => ele.title != post.title)
      setBlogs([...updatedBlogs, post])
    } catch(exception){
      setNotification({ type: 'error', message: exception })
      setTimeout(() => {
        setNotification({})
      }, 5000)
    }
  }

  const deletePost = async (postId) => {

    try{
      const response = await blogService.deletePost(postId)
      if(response.status == 401){
        throw 'you cannot delete that post'
      }

      const updatedBlogs = blogs.filter(ele => ele.id != postId)
      setBlogs(updatedBlogs)
    } catch(exception){
      setNotification({ type: 'error', message: exception })
      setTimeout(() => {
        setNotification({})
      }, 5000)
    }
  }

  if(user == null){
    return (
      <div>
        <Notification notification={notification}/>
        <h2>Please log in to application</h2>
        <Toggable buttonLabel='Login'>
          <LoginForm handleLogin={handleLogin} ref={loginRef}/>
        </Toggable>
      </div>
    )
  }

  return (
    <div>
      <Notification notification={notification}/>
      <p>{user.username} is logged-in</p>
      <button onClick={handleLogout}>Logout</button>
      <h2>blogs</h2>
      <Toggable buttonLabel='New post' ref={toggleRef}>
        <PostForm createPost={handlePost}/>
      </Toggable>
      {blogs
        .sort((a,b) => b.likes - a.likes )
        .map(blog => <Blog key={blog.id} deletePost={deletePost} updatePost={updatePost} blog={blog}/>)
      }
    </div>
  )
}

export default App