import PhoneIcon from '../icons/phone-classic.svg'
import OfficeIcon from '../icons/office-building-marker.svg'
import MapImage from '../images/map-image.jpg'

export function loadContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneIcon = new Image()
    phoneIcon.src = PhoneIcon
    phoneIcon.alt = 'Phone Icon'
    phoneIcon.classList.add('icon-image')
    phoneIcon.classList.add('phone-icon')

    const phoneText = document.createElement('span')
    phoneText.classList.add('contact-text')
    phoneText.classList.add('phone-text')
    phoneText.textContent = '123456789'

    const contactPhone = document.createElement('div')
    contactPhone.classList.add('contact-phone')
    contactPhone.appendChild(phoneIcon)
    contactPhone.appendChild(phoneText)

    const officeIcon = new Image()
    officeIcon.src = OfficeIcon
    officeIcon.alt = 'Office Icon'
    officeIcon.classList.add('icon-image')
    officeIcon.classList.add('office-icon')

    const addressText = document.createElement('span')
    addressText.classList.add('contact-text')
    addressText.classList.add('address-text')
    addressText.textContent = '2436 Naples Avenue, Panama City FL 32405'

    const contactAddress = document.createElement('div')
    contactAddress.classList.add('contact-address')
    contactAddress.appendChild(officeIcon)
    contactAddress.appendChild(addressText)

    const contactMap = new Image()
    contactMap.src = MapImage
    contact.alt = 'Map Image'
    contactMap.classList.add('contact-map')

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