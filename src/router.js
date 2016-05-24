import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import uuid from 'node-uuid'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import RepoDetailPage from './pages/repo-detail'
import LibrariesPage from './pages/libraries'
import LibrarayDetailPage from './pages/library-detail'
import MessagePage from './pages/message'
import Layout from './layout'
import config from './config'

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout me={app.me}>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },
  routes: {
    '': 'public',
    'repos': 'repos',
    'libraries': 'libraries',
    'login': 'login',
    'logout': 'logout',
    'library/:code': 'libraryDetail',
    'repo/:owner/:name': 'repoDetail',
    'auth/callback?:query': 'authCallback',
    '*fourohfour': 'fourOhfour'
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false})
  },

  repos () {
    this.renderPage(<ReposPage repos={app.me.repos}/>)
  },

  repoDetail (owner, name) {
    console.log(owner, name)
    const repo = app.me.repos.getByFullName(owner + '/' + name)
    this.renderPage(<RepoDetailPage repo={repo} labels={repo.labels}/>)
  },

  libraries () {
    this.renderPage(<LibrariesPage libraries={app.me.libraries}/>)
  },

  libraryDetail (code) {
    const library = app.me.libraries.getByCode(code)
    //this.renderPage(<LibrarayDetailPage library={library} labels={library.locations}/>)
    this.renderPage(<LibrarayDetailPage library={library} />)
  },

  login () {
    const state = uuid()
    window.localStorage.state = state
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: config.clientId,
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo',
      state: state
    })
  },

  logout () {
    window.localStorage.clear()
    window.location = '/'
  },

  authCallback (query) {
    query = qs.parse(query)
    if (query.state === window.localStorage.state) {
      delete window.localStorage.state
      console.log('THEY MATCH!')
      console.log(query.code)

      xhr({
        url: config.gatekeeperUrl + '/' + query.code,
        json: true
      }, (err, resp, body) => {
        if (err) {
          console.error('something went wrong')
        } else {
          app.me.token = body.token
          this.redirectTo('/libraries')
        }
      })
      this.renderPage(<MessagePage title='Fetching data from BibData'/>)
    }
  },

  fourOhFour () {
    this.renderPage(<MessagePage title='Page not found'/>)
  }

})
