import selectors from "../selectors"

export class PetComponent {
    petComponentCheck(status){
        cy.get(selectors.pet).should(status)
    }

    petComponentType(pet){
        cy.get(selectors.pet).type(pet)
    }
}