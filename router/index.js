
const { getArticles } = require('./articles')
const { getCategories } = require('./categories')

module.exports = (app) => {
  app.get(getArticles.path, getArticles.handler)
  app.get(getCategories.path, getCategories.handler)
}
