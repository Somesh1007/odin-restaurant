import { loadHome, removeHome } from "./home";
import { loadMenu, removeMenu } from "./menu";
import { loadContact, removeContact } from "./contact";
import { loadAbout, removeAbout } from "./about";

loadInitialContent()


function loadInitialContent() {
    const content = document.querySelector('#content')

    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = `Noodles Restaurant`

    const tabs = document.createElement('div')
    tabs.classList.add('tabs')
    tabs.appendChild(createTabButton('Home'))
    tabs.appendChild(createTabButton('Menu'))
    tabs.appendChild(createTabButton('Contact'))
    tabs.appendChild(createTabButton('About'))

    content.appendChild(header)
    content.appendChild(tabs)

    const home = loadHome()
    const homeButton = document.querySelector('.home-button')
    homeButton.style.backgroundColor = 'green'
    homeButton.style.borderBottom = '5px solid black'
    homeButton.style.color = 'white'


    content.appendChild(home)
    addEventListenersOnTabButtons()

}


function createTabButton(buttonName) {
    const button = document.createElement('button')
    button.classList.add(`tab-button`)
    button.classList.add(`${buttonName.toLowerCase()}-button`)

    button.textContent = buttonName

    return button
}

function addEventListenersOnTabButtons() {
    const content = document.querySelector('#content')
    const homeButton = document.querySelector('.tab-button.home-button')
    const menuButton = document.querySelector('.tab-button.menu-button')
    const contactButton = document.querySelector('.tab-button.contact-button')
    const aboutButton = document.querySelector('.tab-button.about-button')
    const buttons = [homeButton, menuButton, contactButton, aboutButton]

    homeButton.addEventListener('click', function (event) {
        removeAllTabs()
        removeStyles(buttons)
        addStyles(homeButton)
        content.appendChild(loadHome())
    })
    menuButton.addEventListener('click', function (event) {
        removeAllTabs()
        removeStyles(buttons)
        addStyles(menuButton)
        content.appendChild(loadMenu())
    })
    contactButton.addEventListener('click', function (event) {
        removeAllTabs()
        removeStyles(buttons)
        addStyles(contactButton)
        content.appendChild(loadContact())
    })
    aboutButton.addEventListener('click', function (event) {
        removeAllTabs()
        removeStyles(buttons)
        addStyles(aboutButton)
        content.appendChild(loadAbout())
    })

}

function removeAllTabs() {
    removeHome()
    removeMenu()
    removeContact()
    removeAbout()
}

function addStyles(button) {
    button.style.backgroundColor = 'green'
    button.style.borderBottom = '5px solid black'
    button.style.color = 'white'
}

function removeStyles(buttons) {
    buttons.forEach(button => {
        button.style.backgroundColor = ''
        button.style.borderBottom = ''
        button.style.color = ''
    })
}