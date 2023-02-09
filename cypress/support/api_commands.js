const apikey = Cypress.env(API_Key)

Cypress.Commands.add('api_Italy', project => {
    cy.request({
        method: 'GET',
        url: '/weather?q=Italy,it&appid=' + '${{secrets.API_KEY }}',
        body: {},
        headers: {},
    })
})

Cypress.Commands.add('api_London', project => {
    cy.request({
        method: 'GET',
        url: '/weather?q=London,uk&appid=' + '${{secrets.API_KEY }}',
        body: {},
        headers: {},
    })
})
