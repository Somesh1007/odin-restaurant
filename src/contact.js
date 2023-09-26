export function loadContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneIcon = document.createElement('img')
    phoneIcon.classList.add('icon-image')
    phoneIcon.classList.add('phone-icon')
    phoneIcon.setAttribute('src', '../icons/phone-classic.svg')
    phoneIcon.setAttribute('alt', 'Phone Icon')

    const phoneText = document.createElement('span')
    phoneText.classList.add('contact-text')
    phoneText.classList.add('phone-text')
    phoneText.textContent = '123456789'

    const contactPhone = document.createElement('div')
    contactPhone.classList.add('contact-phone')
    contactPhone.appendChild(phoneIcon)
    contactPhone.appendChild(phoneText)

    const officeIcon = document.createElement('img')
    officeIcon.classList.add('icon-image')
    officeIcon.classList.add('office-icon')
    officeIcon.setAttribute('src', '../icons/office-building-marker.svg')
    officeIcon.setAttribute('alt', 'Office Icon')

    const addressText = document.createElement('span')
    addressText.classList.add('contact-text')
    addressText.classList.add('address-text')
    addressText.textContent = '2436 Naples Avenue, Panama City FL 32405'

    const contactAddress = document.createElement('div')
    contactAddress.classList.add('contact-address')
    contactAddress.appendChild(officeIcon)
    contactAddress.appendChild(addressText)

    const contactMap = document.createElement('img')
    contactMap.classList.add('contact-map')
    contactMap.setAttribute('src', '../images/map-image.jpg')
    contactMap.setAttribute('alt', 'Map Image')

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