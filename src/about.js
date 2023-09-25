export function loadAbout() {
    const about = document.createElement('div')
    about.classList.add('about')


    const aboutHistory = document.createElement('div')
    aboutHistory.classList.add('about-history')
    aboutHistory.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
    software like Aldus PageMaker including versions of Lorem Ipsum.`

    const aboutFooter = document.createElement('div')
    aboutFooter.classList.add('about-footer')
    aboutFooter.textContent = `Somesh Joshi`

    about.appendChild(aboutHistory)
    about.appendChild(aboutFooter)

    return about
}

export function removeAbout() {
    const about = document.querySelector('#content .about')

    if (about) {
        about.remove()
    }
}
