import projects_data from "./data.js"
import { sayings_data } from "./data.js"

const root = (() => {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const projects = $('.projects')
    const sayings = $('.sayings')

    return {
        handleEvent() {
            const main = $('.main-container')
            const menuButton = $('.menu-button')
            const closeButton = $('.close-button')
            const menuItem = $('.menu-items')
            const menuItemMobile = $('.mobile-menu-items .menu-items')
            const saying = $$('.saying')
            const sayingLeft = $('.saying-left')
            const sayingRight = $('.saying-right')
            const submitForm = $('.submit')

            let currentSaying = 0
            saying[currentSaying].classList.add('active')

            sayingLeft.addEventListener('click', () => {
                currentSaying--
                if (currentSaying < 0) {
                    currentSaying = saying.length - 1
                }
                this.changeSaying(saying, currentSaying)
            })

            sayingRight.addEventListener('click', () => {
                currentSaying++
                if (currentSaying > saying.length - 1) {
                    currentSaying = 0
                }
                this.changeSaying(saying, currentSaying)
            })


            projects.addEventListener('click', (e) => {
                const seeButton = e.target.closest('.see-now')
                if (seeButton) {
                    const currentId = Number(seeButton.dataset.index)
                    localStorage.setItem('idProject', JSON.stringify(currentId))
                }
            })

            menuButton.addEventListener('click', () => {
                main.classList.add('active')
            })

            closeButton.addEventListener('click', () => {
                main.classList.remove('active')
            })

            menuItem.addEventListener('click', (e) => {
                const item = e.target.closest('.menu-items li')
                if (item) {
                    main.classList.remove('active')
                    $('.menu-items li.active').classList.remove('active')
                    item.classList.add('active')
                }
            })

            menuItemMobile.addEventListener('click', (e) => {
                const itemMobile = e.target.closest('.mobile-menu-items .menu-items li')
                if (itemMobile) {
                    main.classList.remove('active')
                }
            })

            submitForm.addEventListener('click', (e) => {
                const fullName = $('.full-name').value
                const email = $('.email').value
                const message = $('.message').value
                e.preventDefault()

                if (fullName !== '' && this.isEmail(email) && message !== '') {
                    console.log('done')
                    window.location.href = `mailto:qviet092@gmail.com?subject=${fullName}&body=` + encodeURIComponent(message)
                    fullName = ''
                    email = ''
                    message = ''
                } else {
                    console.log('error')
                    alert(`Đã xãy ra lỗi khi gửi!\nNguyên nhân có thể do:\n1. Họ và tên đang trống\n2. Email chưa đúng định dạng\n3. Lời nhắn đang trống`)
                }
            })

        },
        changeSaying(elements, index) {
            elements.forEach(element => element.classList.remove('active'))
            elements[index].classList.add('active')
        },
        isEmail(email) {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return pattern.test(email)
        },
        renderProjects() {
            const htmls = projects_data.map((project, index) => `
                <div class="project">
                    <div class="project-background">
                        <figure>
                            <img src="${project.background}" alt="">
                        </figure>
                        <a data-index="${index}" href="./project-detail.html" class="see-now">Xem dự án</a>
                    </div>
                </div>
            `).join('')
            projects.innerHTML = htmls
        },
        renderSayings() {
            const htmls = sayings_data.map((saying, index) => `
            <div class="saying" data-index=${index}>
                <span>${saying}</span>
            </div>
            `).join('')
            sayings.innerHTML = htmls
        },

        start() {
            this.renderSayings()
            this.renderProjects()
            this.handleEvent()
        }
    }
})()

root.start()
