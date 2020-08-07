class Patient{

  static all = []

  constructor({id, name, age}){
    this.id = id
    this.name = name
    this.age = age

    this.main = document.createElement('div')
    this.main.id = `patient-${this.id}`

    this.details = document.createElement('div')
    this.details.id = `patient-${this.id}-details`

    let space = document.createElement('p')
    space.innerText = "=================="
    this.main.append(this.details, space)

    Patient.all.push(this)
  }

  renderDetails(){
    this.details.innerHTML = `
      <p>Name: <span>${this.name}</span></p>
      <p>Age: <span>${this.age}</span></p>
    `
  }

  static renderAllPatients(element){
    Patient.all.forEach((patient) => {
      patient.renderDetails()
      element.appendChild(patient.main)
    })
  }
}