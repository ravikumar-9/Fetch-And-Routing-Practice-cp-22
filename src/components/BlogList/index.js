// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedBlogData = data.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      topic: eachBlog.topic,
      author: eachBlog.author,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
    }))
    this.setState({blogsData: updatedBlogData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    console.log(blogsData)

    const load = (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    )
    return (
      <ul className="blogs-list-container">
        {isLoading
          ? load
          : blogsData.map(item => (
              <BlogItem blogDetails={item} key={item.id} />
            ))}
      </ul>
    )
  }
}

export default BlogList
