import selectors from "../selectors";

export class DynamicTitleComponent {

    dynamicTitleComponentCheck(status){
        cy.get(selectors.dynamicTitle).should(status)
    }
}