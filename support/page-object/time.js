import selectors from "../selectors"

export class TimeComponent {

    timeComponentCheck(status){
        cy.get(selectors.time).should(status)
    }

    timeComponentType(time){
        cy.get(selectors.time).type(time)
    }
}