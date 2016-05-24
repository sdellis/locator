import React from 'react'
import NavHelper from '../components/nav-helper'

export default React.createClass({
  displayName: 'PublicPage',

  render () {
    return (
      <NavHelper className='container'>
        <header role='banner'>
          <h1>Locator</h1>
        </header>
        <div>
          <p>We get patrons where they need to know.&trade;</p>
          <a href='/login' className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
          </a>
        </div>
      </NavHelper>
    )
  }
})
