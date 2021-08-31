/// <reference types="cypress" />
import homepage from '../page-objects/homepage';
import payment from '../page-objects/payment';

describe('Telkom Automation Test', function () {

    const hPage = new homepage();
    const payPage = new payment();

    beforeEach(() => {
        hPage.getUrl();
    });

    it.skip('Positve Case - Buy with Bank Transfer', function () {

        hPage.btnBuy()
        cy.wait(500)

        hPage.btnCartSetting()
        cy.wait(500)

        hPage.btnCartSetAdvRules()
        cy.wait(500)

        hPage.btnCartSetAdvRules_redirect()
        cy.wait(500)

        hPage.btnCartSaveSet()
        cy.wait(500)

        hPage.btnCartStart()
        cy.wait(1000    )

        // //verify inquiry data pesanan
        cy.get('div[class="tab-pane active"]')
        .within(()=>{
            cy.get('td[class="table-item text-body"]').contains('Midtrans Pillow')
            cy.get('td[class="table-amount text-body"]').contains('20,000')
        })

        // //vefity inquiry data pengiriman
        cy.get('a[class="text-actionable"]')
        .contains('pengiriman').click()
        cy.wait(500)

        cy.get('.active > .content-text-block').should(($getText)=>{
            expect($getText).to.contain('Budi')
            expect($getText).to.contain('+6281808466410')
            expect($getText).to.contain('budi@utomo.com')
            expect($getText).to.contain('MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11 Jakarta 10220')
        })

        payPage.btnContinue()
        cy.wait(1000)

        payPage.setBankTrf()
        cy.wait(1000)

        payPage.setBankTrf_BCA()
        cy.wait(1000)

    })

    it.skip('Positve Case - Buy with E-Wallet', function () {

        hPage.btnBuy()
        cy.wait(500)

        hPage.btnCartSetting()
        cy.wait(500)

        hPage.btnCartSetAdvRules()
        cy.wait(500)

        hPage.btnCartSetAdvRules_redirect()
        cy.wait(500)

        hPage.btnCartSaveSet()
        cy.wait(500)

        hPage.btnCartStart()
        cy.wait(1000    )

        // //verify inquiry data pesanan
        cy.get('div[class="tab-pane active"]')
        .within(()=>{
            cy.get('td[class="table-item text-body"]').contains('Midtrans Pillow')
            cy.get('td[class="table-amount text-body"]').contains('20,000')
        })

        // //vefity inquiry data pengiriman
        cy.get('a[class="text-actionable"]')
        .contains('pengiriman').click()
        cy.wait(500)

        cy.get('.active > .content-text-block').should(($getText)=>{
            expect($getText).to.contain('Budi')
            expect($getText).to.contain('+6281808466410')
            expect($getText).to.contain('budi@utomo.com')
            expect($getText).to.contain('MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11 Jakarta 10220')
        })

        payPage.btnContinue()
        cy.wait(1000)

        payPage.setEwallet()
        cy.wait(500)

        payPage.btnContinue2()
        cy.wait(1000)

    })

    it('Negative Case - Column email is empty', function () {

        hPage.btnBuy()
        cy.wait(500)

        hPage.fieldEmail()
        cy.wait(500)

        hPage.btnCheckOut()
        cy.wait(500)

        //verify error message
        cy.get('div[data-reactid=".0.0.0.2.0.1.0"]')
        .should(($getText)=>{
            expect($getText).to.contain('Sorry, something went wrong.')
        })

    })

    it('Negative Case - Invalid email', function () {

        hPage.btnBuy()
        cy.wait(500)

        hPage.fieldEmail()
        cy.wait(500)
        
        hPage.fieldEmail2()
        cy.wait(500)

        hPage.btnCheckOut()
        cy.wait(500)

        //verify error message
        cy.get('div[data-reactid=".0.0.0.2.0.1.0"]')
        .should(($getText)=>{
            expect($getText).to.contain('Sorry, something went wrong.')
        })
    })
})