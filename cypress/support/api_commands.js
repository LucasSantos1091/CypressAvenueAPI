const apikey = Cypress.env('API_Key')

Cypress.Commands.add('api_weather', project => {
    cy.request({
        method: 'GET',
        url: '/weather?lat=44.34&lon=10.99&appid=' + apikey,
        body: {},
        headers: {},
    })
})