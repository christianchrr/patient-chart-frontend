const PatientContainer = document.getElementById('PatientContainer')
const PatientData = document.getElementById('PatientData')
const MedicationContainer = document.getElementById('MedicationContainer')
const MedicationData = document.getElementById('MedicationData')
const getPatientsPath = 'http://localhost:3000/patients/'
const getMedicationsPath = 'http://localhost:3000/medications/'

function getPatients() {
    fetch(getPatientsPath)
        .then(function(response) {
            return response.json();
        })
        .then(function(patientsArray){
            patientsArray.forEach(function(patient){
                return new Patient(patient)
            })
            Patient.renderAllPatients(PatientData);
            MedicationContainer.style.display = 'none';
            PatientContainer.style.display = 'block';
        })
}

function getMedications() {
    MedicationData.innerText = '';
    fetch(getMedicationsPath)
        .then(function(response) {
            return response.json();
        })
        .then(function(medicationsArray){
            medicationsArray.forEach(function(medication){
                return new Medication(medication)
            })
            Medication.renderAllMedications(MedicationData);
            MedicationContainer.style.display = 'block';
            PatientContainer.style.display = 'none';
            populatePatientDropdown();
        })
}

function populatePatientDropdown() {
    let PatientDropdown = document.getElementById("PatientDropdown")
    let length = PatientDropdown.options.length;
    for (let i = length-1; i >= 0; i--) {
        PatientDropdown.options[i] = null;
    }
    let defaultOption = document.createElement('option');
    defaultOption.text = '-- Select --';
    defaultOption.value = '';
    PatientDropdown.add(defaultOption);
    fetch(getPatientsPath)
        .then(function(response) {
            return response.json();
        })
        .then(function(patientsArray){
            patientsArray.forEach(function(patient){
                let option = document.createElement('option');
                option.text = patient.name;
                option.value = patient.id;
                PatientDropdown.add(option);
            })
        })
}

function submitPatient(e) {
    e.preventDefault();

    let patientName = document.getElementById("PatientName").value;
    let patientAge = document.getElementById("PatientAge").value;

    fetch('http://localhost:3000/patients', {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            "name": patientName,
            "age": patientAge
        })
    })
}

function submitMedication(e) {
    e.preventDefault();

    let medicationName = document.getElementById("MedicationName").value;
    let medicationForm = document.getElementById("MedForm").value;
    let medicationStrength = document.getElementById("MedicationStrength").value;
    let patientId = document.getElementById("PatientDropdown").value;

    fetch('http://localhost:3000/medications', {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            "name": medicationName,
            "form": medicationForm,
            "strength": medicationStrength,
            "patient_id": patientId
        })
    })
}