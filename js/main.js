const model = document.querySelector(".model")
const sidebar = document.querySelector(".sidebar")

function showModel(){
    model.style.display = "block"
}
function closeModel(){
    model.style.display = "none"
}

function showSidebar(){
    sidebar.style.left = 0
}
function closeSidebar(){
    sidebar.style.left = "-400px"
}
