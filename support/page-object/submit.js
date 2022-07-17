import selectors from "../selectors"
export class SubmitComponent {
    sumbitComponentCheck(status){
        cy.get(selectors.submit).should(status)
    }

    submitComponentPress(){
        cy.get(selectors.submit).click()
    }
}