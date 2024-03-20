import projects_data from "./data.js";

const image_detail = (() => {
    const leftBtn = document.querySelector('.left')
    const leftRight = document.querySelector('.right')
    const showImage = document.querySelector('.show-image')
    const currentIdProject = JSON.parse(localStorage.getItem('idProject'))
    let currentImage = JSON.parse(localStorage.getItem('indexImage'))
    const imageList = projects_data[currentIdProject].path_images

    return {
        handleEvent() {
            const images = document.querySelectorAll('.show-image img')
            images[currentImage].classList.add('active')

            leftBtn.addEventListener('click', () => {
                currentImage--
                if (currentImage < 0) {
                    currentImage = images.length - 1
                }
                this.changeImage(currentImage, images)
            })

            leftRight.addEventListener('click', () => {
                currentImage++
                leftBtn.style.display = 'block'
                if (currentImage > images.length - 1) {
                    currentImage = 0
                }
                this.changeImage(currentImage, images)
            })
        },
        changeImage(index, element) {
            element.forEach(image => image.classList.remove('active'))
            element[index].classList.add('active')
        },
        renderImage(data) {
            const htmls = data.map(image => `
                <img src="${image}" alt="">
            `).join('')
            showImage.innerHTML = htmls
        },
        start() {
            this.renderImage(imageList)
            this.handleEvent()
        }
    }
})()
image_detail.start()