import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Frail Flickering Goshawk</title>
        <meta property="og:title" content="Frail Flickering Goshawk" />
      </Helmet>
      <div className="home-container01">
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04">
              <div className="home-container05"></div>
              <div className="home-container06"></div>
            </div>
          </div>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <div className="home-container09">
              <div className="home-container10"></div>
              <div className="home-container11">
                <div className="home-container12"></div>
                <div className="home-container13"></div>
              </div>
              <div className="home-container14"></div>
            </div>
          </div>
          <div className="home-container15"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
