const searchInput = document.querySelector('#scp-search')
const scpCards = document.querySelectorAll('.scp-card')

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase()

    scpCards.forEach((card) => {
        const title = card.querySelector('.scp-title').textContent.toLowerCase()
        const id = card.querySelector('.scp-id').textContent.toLowerCase()

        if (title.includes(query) || id.includes(query)) {
            card.style.display = '' // show
        } else {
            card.style.display = 'none' // hide
        }
    })
})
