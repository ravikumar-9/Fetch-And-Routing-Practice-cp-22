// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedBlogItemData = {
      id: data.id,
      title: data.title,
      author: data.author,
      content: data.content,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
    }
    this.setState({blogItemDetails: updatedBlogItemData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemDetails} = this.state
    const {title, author, content, imageUrl, avatarUrl} = blogItemDetails

    return (
      <>
        <h1 className="title">{title}</h1>
        <div className="profile-container">
          <img src={avatarUrl} alt="avatar" className="profile-img" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-item-img" />
        <p className="topic">{content}</p>
      </>
    )
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    console.log(blogItemDetails)

    const load = (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    )

    return (
      <div className="blog-item-dtls-container">
        {isLoading ? load : this.renderBlogItemDetails()}
      </div>
    )
  }
}

export default BlogItemDetails
