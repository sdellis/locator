import Collection from 'ampersand-rest-collection'
import Location from './location'

export default Collection.extend({
  url: 'https://bibdata.princeton.edu/locations/holding_locations.json',

  model: Location,

  getByCode (locCode) {
    let model = this.findWhere({code: locCode})

    if (!model) {
      model = new Location({code: locCode})
    }

    model.fetch()

    return model
  }
  
})
