/// <reference types="cypress" />

class payment{

    btnContinue(){
        const button = cy.get('div[class="text-button-main"]')
        button.contains('Lanjut')
        button.click({force: true})
    }

    btnContinue2(){
        const button = cy.get('div[class="text-button-main"]')
        button.contains('Bayar Sekarang')
        button.click({force: true})
    }

    /**
     * Payment Virtual Account
     */
    setBankTrf(){
        const button = cy.get('div[class="list-title text-actionable-bold"]')
        button.contains('ATM/Bank Transfer')
        button.click()
    }

    setBankTrf_BCA(){
        const button = cy.get('div[class="list-title text-actionable-bold"]')
        button.contains('BCA')
        button.click()
    }

    /**
     * Payment E-Wallet
     */
    setEwallet(){
        const button = cy.get('div[class="list-title text-actionable-bold"]')
        button.contains('Indomaret')
        button.click()
    }

}

export default payment;