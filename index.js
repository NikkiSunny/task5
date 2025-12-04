let mobile = document.querySelector(".mobile");
let btn = document.querySelector(".btn");

btn.addEventListener ("click", function(){
    mobile.classList.toggle("active");
})

mobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobile.classList.remove("active");
    });
});