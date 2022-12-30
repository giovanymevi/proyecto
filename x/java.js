"use strict"
const typed = new typed(".typed",{
    stringsElement:"#cadena",
    typeSpeed:50,
    startDelay:0,
    backSpeed:50,
    smarBackSpeed:false,
    backDelay:3000,
    loop:true,
    loopCount:false,
    showCursor:false,
    cursorChar:'|',


})
const ul = document.querySelector(".displacement >ul");
const li = document.querySelectorAll(".displacement > ul li");

function frames(){
    const animacion = ul.animate([
{transform:"traslateY(0rem)"},
{transform:"traslateY(-7rem)"}
    ],{
     easing:"linear"
     duration:200,
     iterations:1
    })
    return animacion.finish;
}
function overlay() {
    frames()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll(".displacement > ul li")[0])

    })
    
}
setInterval(()=>{
    overlay();
},3000);