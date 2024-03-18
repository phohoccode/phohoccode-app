const textContent = ['']
let index = 0
const animationText = ((element, text, isReversed) => {
    let currentIndex = isReversed ? text.length : 0
    const interve = isReversed ? -1 : 1

    const animate = setInterval(() => {
        element.textContent = text.substring(0, currentIndex)
        currentIndex += interve

        if (isReversed ? currentIndex < 0 : currentIndex > text.length) {
            clearInterval(animate)
            setTimeout(() => {
                if (isReversed) {
                    index = (index + 1) % textContent.length
                }
                animationText(element, textContent[index], !isReversed)
            }, 1000)
        }
    }, 80)
})

export default animationText


