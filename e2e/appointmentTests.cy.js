import { AppointmentPage } from "../support/page-object/appointment-page"
describe('Appointment test cases', () => {
  const ap = new AppointmentPage
  before(() => {
    ap.openPage()
  });
  it('Checks if the page loaded all elements', () => {

    ap.checkComponentsPageVisibility('be.visible')

  })

  it('Tries to create an appointment with no data', () => {
    ap.submit.submitComponentPress()
    ap.alert.alertComponentCheck()
    ap.openPage()
  });

  it('Inserts an appontment', () => {

    ap.fillForm('Belinha', 'Lucas', '2022-07-16', '22:22', 'Fever')    
     ap.submit.submitComponentPress()

    ap.appointment.appointmentComponentCheck('exist')
    ap.openPage()

  });

  it('Deletes an appointment', () => {
    ap.delete.deleteComponentPress()
    ap.appointment.appointmentComponentCheck('not.exist')
  });

})