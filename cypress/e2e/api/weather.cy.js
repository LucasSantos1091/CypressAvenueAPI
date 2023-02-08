import { faker } from '@faker-js/faker'

describe('Quero saber o clima da Itália', () => {
    it('Preciso verificar o Clima da Itália', () => {
        const project = {}
        cy.api_weather(project)
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('clouds')
                    //expect(response.text).to.be('clouds')

                // expect(response.body.description).to.equal(project.description)
            })
    })
})