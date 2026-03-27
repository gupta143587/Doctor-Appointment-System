// Predefined array of services
const services = [
    'General Consultation',
    'Follow-up Consultation',
    'Health Checkup',
    'Blood Test',
    'X-Ray',
    'ECG (Electrocardiogram)',
    'Vaccination',
    'Prescription Refill',
    'Emergency Consultation',
    'Physical Examination',
    'Lab Test',
    'Ultrasound',
    'CT Scan',
    'MRI Scan',
    'Dental Checkup',
    'Eye Examination',
    'Skin Consultation',
    'Mental Health Consultation',
    'Pediatric Consultation',
    'Women\'s Health Checkup'
];

let doctors = [];

// Populate services dropdown
function populateServicesDropdown() {
    const serviceSelect = document.getElementById('serviceSelect');
    let servicesStr = '<option value="">Choose a service...</option>';
    services.forEach(function(service) {
        servicesStr += `
            <option value="${service}">${service}</option>
        `;
    });
    serviceSelect.innerHTML = servicesStr;
}

async function getDoctorList() {
    try {
        const response = await fetch('http://localhost:4000/doctors', { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        doctors = await response.json();
        let doctorsStr = '<option value="">Choose a doctor...</option>';
        doctors.forEach(function(doctor) {
            doctorsStr += `
                <option value=${doctor.id}>${doctor.name}</option>
            `;
        });
        document.getElementById('doctorSelect').innerHTML = doctorsStr;
    } catch(error) {

    }
}

async function getAppointmentsByPatientId() {
    try {
        const response = await fetch(`http://localhost:4000/appointments?patientId=${localStorage.getItem('patientId')}`, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        const parsedResponse = await response.json();
        const appointmentsTableBody = document.getElementById('appointmentsTableBody');
        let appointmentsStr = '';
        parsedResponse.forEach(function(appointment) {
            appointmentsStr += `
                <tr>
                    <td>${getDoctorName(appointment.doctorId)}</td>
                    <td>${appointment.selectedService}</td>
                    <td>${appointment.appointmentDate} ${appointment.appointmentTime}</td>
                    <td>N/A</td>
                </tr>
            `;
        });
        appointmentsTableBody.innerHTML = appointmentsStr;
    } catch(error) {

    }
}

function getDoctorName(doctorId) {
    let name = '';
    doctors.forEach(function(doctor) {
        if (doctor.id == doctorId) {
            name = doctor.name;
        }
    });
    return name;
}

// Initialize on page load
getDoctorList();
populateServicesDropdown();
getAppointmentsByPatientId();

const appointmentForm = document.getElementById('appointmentForm');

appointmentForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const selectedDoctor = document.getElementById('doctorSelect').value;
    const selectedService= document.getElementById('serviceSelect').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const appointmentNotes = document.getElementById('appointmentNotes').value;

    const requestBody = {
        patientId: localStorage.getItem('patientId'),
        doctorId: selectedDoctor,
        selectedService,
        appointmentDate,
        appointmentTime,
        appointmentNotes,
        suggestedMedicines: []
    };

    const response = await fetch('http://localhost:4000/appointments', { 
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });
    const parsedResponse = await response.json();
    getAppointmentsByPatientId();
    window.alert('Scheduled appointment successfully');
});