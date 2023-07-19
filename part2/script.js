const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const firstName = urlParams.get('firstName')
const lastName = urlParams.get('lastName')
const phoneNumber = urlParams.get('phoneNumber')
const email = urlParams.get('email')
const ref = urlParams.get('ref')

document.getElementById('firstName').value = firstName || ''
document.getElementById('lastName').value = lastName || ''
document.getElementById('phoneNumber').value = phoneNumber || ''
document.getElementById('email').value = email || ''
document.getElementById('ref').value = ref || ''

const emailInput = document.getElementById('email')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*$/
if (email && !email.match(emailRegex)) {
    showErrorMessage(emailInput, 'Please enter a valid email address.')
    emailInput.value = ''
}

const phoneNumberInput = document.getElementById('phoneNumber')
const phoneRegex = /^\d{10}$/
if (phoneNumber && !phoneNumber.match(phoneRegex)) {
    showErrorMessage(phoneNumberInput, 'Please enter a valid 10-digit phone number.')
    phoneNumberInput.value = '' // Clear the invalid phone number value
}

function showErrorMessage(inputElement, message) {
    const errorElementId = inputElement.id + '-error'
    let errorElement = document.getElementById(errorElementId)

    if (!errorElement) {
        errorElement = document.createElement('div')
        errorElement.id = errorElementId
        errorElement.classList.add('error-message')
        inputElement.parentNode.appendChild(errorElement)
    }

    errorElement.textContent = message
}

function clearErrorMessage(inputElement) {
    const errorElementId = inputElement.id + '-error'
    const errorElement = document.getElementById(errorElementId)

    if (errorElement) {
        errorElement.remove()
    }
}
