import selectors from "../selectors";

export class DeleteComponent {
    
    deleteComponentPress(){
        cy.get(selectors.delete).click()
    }
}