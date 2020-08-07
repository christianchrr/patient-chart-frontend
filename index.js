let patientContainer = document.getElementById('patient-container')
let patientsPath = 'http:/localhost:3000/patients'

fetch(patientsPath)
    .then(function(response) {
        return response.json();
    })
    .then(function(patientsArray){
        patientsArray.forEach(function(patient){
            patientContainer.innerHTML += makePatientDiv(patient)
        })
    })

    function makePatientDiv(patient){
        return `
        <div id=patient-${patient.id}>
            <p><span>${patient.name}, ${patient.age}</span></p>
        </div>
        `
    }



    // .then((response) => {
    //     patients = response
    //     let patientData = document.getElementById("Patients")
    //     for (var i = 0; i < patients.length; i++) {
    //         patientData.append(patients[i].name + ' - ')
    //         patientData.append(patients[i].age + ', ')
    //     }
    // })