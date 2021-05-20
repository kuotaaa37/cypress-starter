describe('Testing some demoqa Form', () => {
    beforeEach(() => {
        cy.visit("https://demoqa.com/automation-practice-form")
    })

    it('fill form', ()=> {
        cy.xpath('//*[@id="firstName"]').type("Makihara")
        cy.xpath('//*[@id="lastName"]').type("Haiji")
        cy.xpath('//*[@id="userEmail"]').type("makiharahaiji@email.com")
        cy.xpath('//*[@id="genterWrapper"]/div[2]/div[1]/label').click()
        cy.xpath('//*[@id="userNumber"]').type("081212387123")
        cy.xpath('//*[@id="dateOfBirthInput"]').type('{selectall}').type("02 July 2000").type('{enter}')
        cy.xpath('//*[@id="subjectsInput"]').type("Math").wait(1000).type('{enter}')
        cy.xpath('//*[@id="subjectsInput"]').type("English").wait(1000).type('{enter}')
        cy.xpath('//*[@id="hobbiesWrapper"]/div[2]/div[1]/label').click()
        cy.xpath('//*[@id="hobbiesWrapper"]/div[2]/div[2]/label').click()

        cy.xpath('//*[@id="currentAddress"]').type("Wonogiri, Jawa Tengah, Indonesia, Bumi, Bima Sakti")
        cy.xpath('//*[@id="state"]/div').click().then(() => {
            cy.contains("Haryana").click()
        })
        cy.xpath('//*[@id="city"]/div').click().then(() => {
            cy.contains("Panipat").click()
        })
        cy.xpath('//*[@id="submit"]').click()
    })
})