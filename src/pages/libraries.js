import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'LibrariesPage',

  propTypes: {
    libraries: React.PropTypes.object.isRequired
  },

  render () {
    const {libraries} = this.props

    return (
      <div>
        <h1>Libraries</h1>
        <div>
          {libraries.map((library) => {
            return (
              <div key={library.code}>
                <a href={library.app_url}><span className='octicon octicon-home'></span> {library.label}</a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
})
