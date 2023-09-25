export function loadContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')


    const contactPhone = document.createElement('div')
    contactPhone.classList.add('contact-phone')
    contactPhone.textContent = `Phone Image Here\n123456789`

    const contactAddress = document.createElement('div')
    contactAddress.classList.add('contact-address')
    contactAddress.textContent = `Office Image Here\n2436 Naples Avenue, Panama City FL 32405`

    const contactMap = document.createElement('div')
    contactMap.classList.add('contact-map')
    contactMap.textContent = 'Map Image Here'

    contact.appendChild(contactPhone)
    contact.appendChild(contactAddress)
    contact.appendChild(contactMap)

    return contact
}

export function removeContact() {
    const contact = document.querySelector('#content .contact')

    if (contact) {
        contact.remove()
    }
}