import { AlertComponent } from "./alert";
import { AppNameComponent } from "./app-name";
import { AppointmentComponent } from "./appointment";
import { DateComponent } from "./date";
import { DynamicTitleComponent } from "./dynamic-title";
import { OwnerComponent } from "./owner";
import { PetComponent } from "./pet";
import { SubmitComponent } from "./submit";
import { DeleteComponent } from "./delete";
import { SymptomsComponent } from "./symptoms";
import { TimeComponent } from "./time";
import { TitleComponent } from "./title";




export class AppointmentPage {
    alert = new AlertComponent
    appName = new AppNameComponent
    appointment = new AppointmentComponent
    date = new DateComponent
    dynamicTitle = new DynamicTitleComponent
    owener = new OwnerComponent
    pet = new PetComponent
    submit = new SubmitComponent
    symptoms = new SymptomsComponent
    time = new TimeComponent
    title = new TitleComponent
    delete = new DeleteComponent


    checkComponentsPageVisibility(status) {

        this.appName.appNameComponentCheck(status)
        this.title.titleComponentCheck(status)
        this.dynamicTitle.dynamicTitleComponentCheck(status)
        this.pet.petComponentCheck(status)
        this.owener.ownerComponentCheck(status)
        this.date.dateComponentCheck(status)
        this.time.timeComponentCheck(status)
        this.symptoms.symptomsComponentCheck(status)
        this.submit.sumbitComponentCheck(status)
    }

    fillForm(pet, owner, date, time, sympsoms) {

        this.pet.petComponentType(pet)
        this.owener.ownerComponentType(owner)
        this.date.dateComponentType(date)
        this.time.timeComponentType(time)
        this.symptoms.symptomsComponentType(sympsoms)

    }

    openPage(){
        cy.visit('')
    }    

}