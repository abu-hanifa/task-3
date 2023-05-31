
const description = () => {
    const h2 = document.createElement('h2')
    h2.textContent = 'Работа с DOM'
    return document.body.prepend(h2)
}
description()