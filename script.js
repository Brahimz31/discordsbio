//     Variables    //
const body = document.querySelector("body");
const html = document.querySelector("html");
const lang = document.documentElement.lang;
const page = document.querySelector("*");
const toggle = document.querySelector("#toggle-container");
const ball = document.querySelector(".toggle-ball");
const tag = document.querySelector("#main-tag");
const bio = document.querySelector("#small-container");
const text = document.querySelector("#content");


if (lang.value = "en") {
    page.style.fontFamily = "'Cabin', sans-serif";
};
if (lang.value = "en") {
    page.style.fontFamily = "'Tajawal', sans-serif";
};


ball.addEventListener("click", () =>{
    ball.classList.toggle("active");
    
    if(ball.classList.contains("active")){
        body.style.backgroundColor = "#DCDCDC";
        tag.style.color = "#303135";
        bio.style.backgroundColor = "#DCDCDC";
        text.style.color = "#3B3D3C";
        toggle.style.backgroundColor = "#595EED";
        ball.style.backgroundColor = "#C5C8F5";
        
        
    }else{
        body.style.backgroundColor = "#303135";
        tag.style.color = "#DCDCDC";
        bio.style.backgroundColor = "#0D0F0E";
        text.style.color = "#DCDCDC";
        toggle.style.backgroundColor = "#72757C";
        ball.style.backgroundColor = "#ECECEC";
    }
});
