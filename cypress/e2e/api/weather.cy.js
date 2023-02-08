describe('Quero saber o clima da Itália', () => {
    it('Para saber se posso viajar para Roma no fim de Semana', () => {
        const project = {}
        cy.api_Italy(project)
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('clouds')
                expect(response.body).to.have.property('name', 'Italy')
            })
    })
})

describe('Quero saber o clima da Londres', () => {
    it('Afim de saber se posso assistir o Liverpool no Final de semana', () => {
        const project = {}
        cy.api_London(project)
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('clouds')
                expect(response.body).to.have.property('name', 'London')
            })
    })
})