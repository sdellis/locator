import Model from 'ampersand-model'
import LibraryCollection from './library-collection'
import RepoCollection from './repo-collection'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
  url: 'https://api.github.com/user',

  initialize () {
    this.token = window.localStorage.token
    this.on('change:token', this.onChangeToken)
  },

  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  session: {
    token: 'string'
  },

  collections: {
    repos: RepoCollection,
    libraries: LibraryCollection
  },

  onChangeToken () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch()
      this.libraries.fetch()
    }
  }

})
