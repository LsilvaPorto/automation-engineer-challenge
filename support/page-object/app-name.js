import selectors from "../selectors";

export class AppNameComponent {
    appNameComponentCheck(status){
        cy.get(selectors.appName).should(status)
    }
}