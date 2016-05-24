import Model from 'ampersand-model'

export default Model.extend({
  url () {
    return 'https://bibdata.princeton.edu/locations/holding_locations/' + this.code + '.json'
  },

  props: {
    label: 'string',
    code: 'string',
    aeon_location: 'boolean',
    recap_electronic_delivery_location: 'boolean',
    open: 'boolean',
    requestable: 'boolean',
    always_requestable: 'boolean',
    circulates: 'boolean'
  },

  derived: {
    app_url: {
      deps: ['code'],
      fn () {
        return 'location/' + this.code
      }
    }
  }

})
