import selectors from "../selectors";

export class TitleComponent {

    titleComponentCheck(status){
        cy.get(selectors.title).should(status)
    }
}