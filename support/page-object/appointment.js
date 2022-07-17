import selectors from "../selectors";

export class AppointmentComponent {
    appointmentComponentCheck(status) {
        cy.get(selectors.appointment).should(status)
    }
}