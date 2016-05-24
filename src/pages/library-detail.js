import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'LibraryDetailPage',

  propTypes: {
    library: React.PropTypes.object.isRequired
    //library: React.PropTypes.object.isRequired,
    //labels: React.PropTypes.object.isRequired
  },
/*
  onAddClick () {
    this.props.labels.add({
      name: '',
      color: '',
      editing: true,
      saved: false
    }, { at: 0 })
  },
*/
  render () {
    const {library} = this.props

    return (
      <div className='container'>
       <h1>{library.label}</h1>
       <p>
        <button className='button'>Add a Floor</button>
       </p>
     </div>
    )
  }
})
