class Medication{

  static all = []

  constructor({name, form, strength, patient_id}){
    this.name = name
    this.form = form
    this.strength = strength
    this.patient = patient_id

    this.main = document.createElement('div')
    this.main.id = `medication-${this.id}`

    this.details = document.createElement('div')
    this.details.id = `medication-${this.id}-details`

    let space = document.createElement('p')
    space.innerText = "=================="
    this.main.append(this.details, space)

    Medication.all.push(this)
  }

  renderDetails(){
    this.details.innerHTML = `
      <p>Medication Name: <span>${this.name}</span></p>
      <p>Form: <span>${this.form}</span></p>
      <p>Strength: <span>${this.strength}</span></p>
      <p>Patient: <span>${this.patient}</span></p>
    `
  }

  static renderAllMedications(element){
    Medication.all.forEach((medication) => {
      medication.renderDetails()
      element.appendChild(medication.main)
    })
  }
}