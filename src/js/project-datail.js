import projects_data from "./data.js"

const renderProjectsDetail = (data, element) => {
    const htmls = data.map(project => `
        <h3 class="title">Hình ảnh dự án</h3>
        <div class="images">
            ${project.path_images.map((image) => `
                <div class="image">
                    <img src="${image}" alt="">
                </div>
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
    element.innerHTML = htmls
}

(() => {
    const projectDetail = document.querySelector('.project-detail')
    const currentIdProject = JSON.parse(localStorage.getItem('idProject'))
    const result = projects_data.filter(project => project.id === currentIdProject)
    renderProjectsDetail(result, projectDetail)
})()
