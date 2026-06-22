//side bar Active Menu change
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");

    });
});

//Search Bar
const searchInput = document.querySelector(".search-box input");
const articles = document.querySelectorAll(".article");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    articles.forEach(article => {

        let title = article.querySelector("h2")
                           .textContent
                           .toLowerCase();

        if(title.includes(value)){
            article.style.display = "flex";
        }
        else{
            article.style.display = "none";
        }
    });

});

//Bookmark Button Toggle
const bookmarks = document.querySelectorAll(".bookmark-btn");

bookmarks.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("saved");

    });

});


//Like Counter Increase
const likes = document.querySelectorAll(".like-btn");

likes.forEach(btn => {

    btn.addEventListener("click", () => {

        let count = btn.querySelector(".count");

        count.textContent = Number(count.textContent) + 1;

    });

});


//Recommended Topics Click
const topics = document.querySelectorAll(".topics span");

topics.forEach(topic => {

    topic.addEventListener("click", () => {

        topic.classList.toggle("selected");

    });

});


//Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

//Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});