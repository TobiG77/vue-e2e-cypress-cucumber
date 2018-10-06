'use strict'

Given('I am on the {string} page', function (pageString) {
  if (pageString === 'home') {
    pageString = ''
  }
  let pageUrl = '/' + pageString
  cy.visit(pageUrl)
})

Then('I should see {string}', function (matchString) {
  cy.contains(matchString)
})
