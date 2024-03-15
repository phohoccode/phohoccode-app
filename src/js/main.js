const menuButton = document.querySelector(".main-container nav .menu-button");
const closeButton = document.querySelector(".mobile-menu-items .close-button");
const mainContainer = document.querySelector(".main-container");
const menuItems = document.querySelector('.menu-items')

menuButton.addEventListener("click", () => {
  mainContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  mainContainer.classList.remove("active");
});

menuItems.addEventListener('click', (e) => {
    const item = e.target.closest('.menu-items li')
    console.log(item)
    document.querySelector('li.active').classList.remove('active')
    item.classList.add('active')
})