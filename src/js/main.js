import projects_data from "./data.js"

const root = (() => {
    const $ = document.querySelector.bind(document)
    const projects = $('.projects')
    const main = $('.main-container')
    const menuButton = $('.menu-button')
    const closeButton = $('.close-button')
    const menuItem = $('.menu-items')
    const menuItemMobile = $('.mobile-menu-items .menu-items')
    window.menuItemMobile = menuItemMobile
    
    return {
        handleEvent() {
            projects.addEventListener('click', (e) => {
                e.preventDefault()
                const seeButton = e.target.closest('.see-now')
                if (seeButton) {
                    const currentId = Number(seeButton.dataset.index)
                    const result = projects_data.filter(project => project.id === currentId)
                    this.renderProjectsDetail(result)
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
        },
        renderProjectsDetail(data) {
            const htmls = data.map(childData => `
                <video autoplay loop muted>
                    <source src="./assets/video/bg.mp4" type="video/mp4" />
                </video>
                <div class="bg-overlay"></div>
                <nav>
                    <div class="logo">
                        <a href="./index.html">PHOHOCCODE</a>
                    </div>
                    <a href="./index.html" class="back-main-page">
                        <i class="fa-light fa-xmark"></i>
                    </a>
                </nav>
                <div class="project-detail">
                    <h3 class="title">Hình ảnh dự án</h3>
                    <div class="images">
                        ${childData.path_images.map((image) => `
                            <div class="image">
                                <img src="${image}" alt="">
                            </div>
                        `).join('')}
                    </div>
                    <div class="project-info">
                        <h3 class="project-name">Tên dự án: ${childData.name}</h3>
                        <span class="project-language">Ngôn ngữ sử dụng: ${childData.language}</span>
                        <ul class="project-func">
                            Chức năng:
                            ${childData.func.map(childFunc => `
                                <li>${childFunc}</li>
                            `).join('')}
                        </ul>
                        <p class="project-des">Mô tả dự án: ${childData.des}</p>
                        <div class"project-link">Link trang web: <a target="blank" href="${childData.link}">${childData.link}</a></div>
                        <a target="blank" href="${childData.link_source_code}" class="view-soucre">Xem mã nguồn dự án</a>
                    </div>
                </div>
            `).join('')
            main.innerHTML = htmls
        },
        renderProjects() {
            const htmls = projects_data.map((childData, index) => `
                <div class="project">
                    <div class="project-background">
                        <figure>
                            <img src="${childData.background}" alt="">
                        </figure>
                        <a data-index="${index}" href="./project-detail.html" class="see-now">Xem dự án</a>
                    </div>
                </div>
            `).join('')
            projects.innerHTML = htmls
        },

        start() {
            this.renderProjects()
            this.handleEvent()
        }
    }
})()

root.start()
