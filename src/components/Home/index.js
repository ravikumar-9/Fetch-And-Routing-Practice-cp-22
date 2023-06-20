import UserInfo from '../UserInfo'

import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container">
    <ul className="profile-container">
      <UserInfo />
    </ul>
    <div className="blogs-list-container">
      <BlogList />
    </div>
  </div>
)

export default Home
