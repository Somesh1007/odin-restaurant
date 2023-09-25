export function loadMenu() {
    const menu = document.createElement('div')
    menu.classList.add('menu')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')
    menuContainer.appendChild(createMenuItem('Manchurian Noodles', ''))
    menuContainer.appendChild(createMenuItem('Hakka Noodles', ''))
    menuContainer.appendChild(createMenuItem('Japanese Pan Noodles', ''))
    menuContainer.appendChild(createMenuItem('Buttered Noodles', ''))
    menuContainer.appendChild(createMenuItem('Pasta Fresca', ''))
    menuContainer.appendChild(createMenuItem('Pad Thai', ''))
    menuContainer.appendChild(createMenuItem('Spicy Korean Noodles', ''))


    menu.appendChild(menuContainer)

    return menu
}


function createMenuItem(itemName, imagePath) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    const itemImage = document.createElement('img')
    itemImage.classList.add('item-image')
    itemImage.setAttribute('src', imagePath)
    itemImage.setAttribute('alt', itemName)

    const menuItemContent = document.createElement('div')
    menuItemContent.classList.add('menu-item-content')

    const itemNameDiv = document.createElement('div')
    itemNameDiv.classList.add('item-name')
    itemNameDiv.textContent = itemName

    const orderButton = document.createElement('button')
    orderButton.classList.add('order-button')
    orderButton.textContent = 'Order Now'

    menuItemContent.appendChild(itemImage)
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