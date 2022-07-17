import selectors from "../selectors"

export class DateComponent {
    dateComponentCheck(status){
        cy.get(selectors.date).should(status)
    }

    dateComponentType(date){
        cy.get(selectors.date).type(date)
    }

}