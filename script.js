const menu = document.querySelector(".hamburger_menu")
const sidebar = document.querySelector(".sidebar")
// const closeMsg = document.querySelector(".show_message")
const headerBtn = document.querySelector(".discover_btn")
const aboutUs = document.querySelector(".about_us")
const year = document.querySelector("#year")
const header = document.getElementById("header")
const scrollBtn = document.querySelector(".scroll_btn")


menu.addEventListener("click", () => {
    // console.log(123)
    if(!sidebar.classList.contains("open_sidebar")){
        sidebar.classList.add("open_sidebar")
        menu.classList.add("line_change")
        // closeMsg.classList.add("message_change")
    }else{
        sidebar.classList.remove("open_sidebar")
        menu.classList.remove("line_change")
        // closeMsg.classList.remove("message_change")
    }
})

headerBtn.addEventListener("click", () => {
    aboutUs.scrollIntoView({behavior:"smooth"})
})

const today = new Date ().toLocaleDateString("en-US", {year:"numeric"});
year.textContent = today

const obsCallback = (entries, observer) => {
    const [entry] = entries;
    if(entry.isIntersecting){
        scrollBtn.classList.remove("add_scroll_btn")
    }else{
        scrollBtn.classList.add("add_scroll_btn")
    }
}

const obsOptions = {
    root:null,
    threshold:0.4,
}

const obsever = new IntersectionObserver(obsCallback, obsOptions);
obsever.observe(header)