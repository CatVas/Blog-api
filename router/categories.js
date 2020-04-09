
const { categories } = require('../data')

module.exports = {
  getCategories: {
    handler(req, res) {
      res.send(categories)
    },
    path: '/categories'
  }
}
