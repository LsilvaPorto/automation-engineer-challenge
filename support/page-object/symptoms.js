import selectors from "../selectors"

export class SymptomsComponent {
    symptomsComponentCheck(status){
        cy.get(selectors.symptoms).should(status)
    }

    symptomsComponentType(symptoms){
        cy.get(selectors.symptoms).type(symptoms)
    }
}