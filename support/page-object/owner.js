import selectors from "../selectors"

export class OwnerComponent {
    ownerComponentCheck(status){
        cy.get(selectors.owner).should(status)
    }

    ownerComponentType(owner){
        cy.get(selectors.owner).type(owner)
    }
}