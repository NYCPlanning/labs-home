/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/projects/)) {
    console.log('match')
    page.matchPath = `/projects/*`
  }

  createPage(page)
}
