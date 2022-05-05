const { toHaveDescription } = require("@testing-library/jest-dom/dist/matchers")

describe('Link tests', () => {
  it('Checks attributes of the link on the homepage by class and then element type', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.App-link')
      .should('have.attr', 'href', 'https://reactjs.org')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
    
    cy.get('a')
      .should('have.attr', 'href', 'https://reactjs.org')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')

  })

  it('Checks that clicking link leaves localhost open', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a').click()

    cy.url().should('equal', 'http://localhost:3000/')

    cy.pause()

  })
})

describe('Text test', () => {
  it('Checks that the file name in the p element is a child element', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Edit').children().should('have.text', 'src/App.js')

  })
})

describe('Metadata test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('checks some html metadata', () => {
    cy.document()

    cy.get('head title').should('have.text', 'React App')

    cy.get('head link').should('have.length', '3')

    cy.get('head link').eq(0).should('have.attr', 'href', '/favicon.ico')
  })
})

describe('Noscript test', () => {
  it("Checks page's  noscript backup text", () => {
    cy.visit('http://localhost:3000')

    cy.get('noscript').should(($noscript) => {
      expect($noscript.text()).to.include('You need to enable')
    })
  })
}) 
