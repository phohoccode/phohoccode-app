import projects_data from "./data.js"

const project_detail = (() => {

    return {
        renderProjectsDetail(data) {
            const projectDetail = document.querySelector('.project-detail')
            const htmls = data.map(project => `
                <h3 class="title">Hình ảnh dự án</h3>
                <div class="images">
                    ${project.path_images.map((image, index) => `
                    <a href="./image-detail.html" data-index="${index}" class="image">
                    <img src="${image}" alt="">
                    </a>
                    `).join('')}
                </div>
                <div class="project-info">
                    <h3 class="project-name">Tên dự án: ${project.name}</h3>
                    <span class="project-language">Ngôn ngữ sử dụng: ${project.language}</span>
                    <ul class="project-func">
                        Chức năng:
                        ${project.func.map(childFunc => `
                        <li>${childFunc}</li>
                        `).join('')}
                        </ul>
                    <p class="project-des">Mô tả dự án: ${project.des}</p>
                    <div class"project-link">Link trang web: <a target="blank" href="${project.link}">${project.link}</a></div>
                    <a target="blank" href="${project.link_source_code}" class="view-soucre">Xem mã nguồn dự án</a>
                </div>
                `).join('')
            projectDetail.innerHTML = htmls
        },
        handelEvent() {
            const images = document.querySelector('.images')
            images.addEventListener('click', (e) => {
                const image = e.target.closest('.image')
                if (image) {
                    const currentIndex = Number(image.dataset.index)
                    localStorage.setItem('indexImage', JSON.stringify(currentIndex))
                }
            })
        },
        start() {
            const currentIdProject = JSON.parse(localStorage.getItem('idProject'))
            const result = projects_data.filter(project => project.id === currentIdProject)
            this.renderProjectsDetail(result)
            this.handelEvent()
        }
    }
})()

project_detail.start()
