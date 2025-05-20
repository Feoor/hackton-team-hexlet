const initOptions = () => {
    const optionsContainer = document.querySelector('.options')
    const options = document.querySelectorAll('.option')

    optionsContainer.style.setProperty('--total-options', options.length)

    optionsContainer.addEventListener('click', (event) => {
        const clickedOption = event.target.closest('.option')

        if (!clickedOption || clickedOption.classList.contains('active')) return

        options.forEach((option) => {
            option.classList.remove('active')
            const cornerBtn = option.querySelector('.corner-button')
            if (cornerBtn) cornerBtn.classList.remove('orange')
        })

        clickedOption.classList.add('active')
        const activeCornerBtn = clickedOption.querySelector('.corner-button')
        if (activeCornerBtn) activeCornerBtn.classList.add('orange')
    })
}

document.addEventListener('DOMContentLoaded', initOptions)