import ManchurianNoodles from '../images/manchurian-noodles.webp'
import HakkaNoodles from '../images/hakka-noodles.webp'
import JapanesePanNoodles from '../images/japanese-pan-noodles.webp'
import ButteredNoodles from '../images/buttered-noodles.webp'
import PastaFresca from '../images/pasta-fresca.webp'
import PadThai from '../images/pad-thai.webp'
import SpicyKoreanNoodles from '../images/spicy-korean-noodles.webp'

export function loadMenu() {
    const menu = document.createElement('div')
    menu.classList.add('menu')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')
    menuContainer.appendChild(createMenuItem('Manchurian Noodles', ManchurianNoodles))
    menuContainer.appendChild(createMenuItem('Hakka Noodles', HakkaNoodles))
    menuContainer.appendChild(createMenuItem('Japanese Pan Noodles', JapanesePanNoodles))
    menuContainer.appendChild(createMenuItem('Buttered Noodles', ButteredNoodles))
    menuContainer.appendChild(createMenuItem('Pasta Fresca', PastaFresca))
    menuContainer.appendChild(createMenuItem('Pad Thai', PadThai))
    menuContainer.appendChild(createMenuItem('Spicy Korean Noodles', SpicyKoreanNoodles))

    menu.appendChild(menuContainer)

    return menu
}


function createMenuItem(itemName, imagePath) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    const itemImage = new Image()
    itemImage.src = imagePath
    itemImage.alt = itemName
    itemImage.classList.add('item-image')

    const menuItemContent = document.createElement('div')
    menuItemContent.classList.add('menu-item-content')

    const itemNameDiv = document.createElement('div')
    itemNameDiv.classList.add('item-name')
    itemNameDiv.textContent = itemName

    const orderButton = document.createElement('button')
    orderButton.classList.add('order-button')
    orderButton.textContent = 'Order Now'

    menuItemContent.appendChild(itemNameDiv)
    menuItemContent.appendChild(orderButton)

    menuItem.appendChild(itemImage)
    menuItem.appendChild(menuItemContent)

    return menuItem
}

export function removeMenu() {
    const menu = document.querySelector('#content .menu')

    if (menu) {
        menu.remove()
    }
}