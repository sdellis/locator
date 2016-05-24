import Model from 'ampersand-model'

export default Model.extend({
  url () {
    return 'https://bibdata.princeton.edu/locations/libraries/' + this.code + '.json'
  },

  props: {
    label: 'string',
    code: 'string'
  },
/*
  collections: {
    labels: LabelCollection
  },
*/
  derived: {
    app_url: {
      deps: ['code'],
      fn () {
        return 'library/' + this.code
      }
    }
  }
/*
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.labels.fetch()
  }
*/
})
