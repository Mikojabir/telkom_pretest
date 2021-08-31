/// <reference types="cypress" />
import config from "../config/config";
class homepage {

    getUrl() {
        cy.visit(config.baseURL)
        cy.wait(1000)
    }

    fieldEmail(){
        const input = cy.get('input[data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
        input.clear()
    }

    fieldEmail2(){
        const input = cy.get('input[data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
        input.type('admin.com')
    }

    btnBuy() {
        const button = cy.get('a[class="btn buy"]')
        button.contains('BUY NOW')
        button.should('be.visible')
        button.click()
    }

    btnCheckOut() {
        const button = cy.get('div[data-reactid=".0.0.1.1.0"]')
        button.should('be.visible')
        button.click()
    }

    btnCartSetting() {
        const button = cy.get('div[class="cart-checkout-settings"]')
        button.should('be.visible')
        button.click()
    }

    btnCartSetAdvRules() {
        const button = cy.get('label[data-reactid=".0.0.1.2.1.0.5.1.0"]')
        button.contains('Set advanced rules')
        button.click()
    }

    btnCartSetAdvRules_redirect() {
        const button = cy.get('label[data-reactid=".0.0.1.2.1.0.5.1.1.3.1"]')
        button.contains('Redirection')
        button.click()
    }

    btnCartSaveSet() {
        const button = cy.get('label[data-reactid=".0.0.1.2.2.1.0.1"]')
        button.contains('Save settings')
        button.click()
    }

    btnCartStart() {
        const button = cy.get('a[data-reactid=".0.0.1.2.2.1.1"]')
        button.contains('Start')
        button.click()
    }



}

export default homepage;