const apikey = Cypress.env('${{env.API_KEY}}')

Cypress.Commands.add('api_Italy', project => {
    cy.request({
        method: 'GET',
        url: '/weather?q=Italy,it&appid=' + apikey,
        body: {},
        headers: {},
    })
})

Cypress.Commands.add('api_London', project => {
    cy.request({
        method: 'GET',
        url: '/weather?q=London,uk&appid=' + apikey,
        body: {},
        headers: {},
    })
})
