import Collection from 'ampersand-rest-collection'
import Library from './library'

export default Collection.extend({
  url: 'https://bibdata.princeton.edu/locations/libraries.json',

  model: Library,

  getByCode (locCode) {
    let model = this.findWhere({code: locCode})

    if (!model) {
      model = new Library({code: locCode})
    }

    model.fetch()

    return model
  }

})
