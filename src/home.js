import HomeImage from '../images/home-noodles.avif'


export function loadHome() {
    const home = document.createElement('div')
    home.classList.add('home')


    const quoteText = document.createElement('div')
    quoteText.classList.add('quote-text')
    quoteText.textContent = `Best Noodles In the Country`

    const yearText = document.createElement('div')
    yearText.classList.add('year-text')
    yearText.textContent = `- Since 1970`

    const homeImage = new Image()
    homeImage.src = HomeImage
    homeImage.alt = 'Home Noodles Image'
    homeImage.classList.add('home-image')

    const homeFooter = document.createElement('div')
    homeFooter.classList.add('home-footer')
    homeFooter.textContent = `Order Online or Visit Us!!!`


    home.appendChild(quoteText)
    home.appendChild(yearText)
    home.appendChild(homeImage)
    home.appendChild(homeFooter)

    return home
}

export function removeHome() {
    const home = document.querySelector('#content .home')

    if (home) {
        home.remove()
    }
}