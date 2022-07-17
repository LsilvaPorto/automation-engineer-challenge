import selectors from "../selectors";

export class AlertComponent {
    alertComponentCheck(){
        cy.get(selectors.alert).should('be.visible')
    }
}