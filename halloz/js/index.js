'use strict'
const btnThemeMode = document.getElementById('theme-toggle-button')
const html = document.documentElement;
const setting = document.getElementById("settings-sidebar") 
const btnSetting = document.getElementById("settings-toggle") 
const closeSetting = document.getElementById("close-settings") 
const btnFonts = document.querySelectorAll("#fonts-btn button")
const btnAlex = document.getElementById("font-alexandria")
const btnTajawal = document.getElementById("font-tajawal")
const btnCairo = document.getElementById("font-cairo")
const themeColor = document.getElementById("theme-colors-grid");
const classColor = ["w-12","h-12",'border-2','cursor-pointer','dark:border-slate-700','transition-transform','shadow-sm','rounded-full','hover:scale-110','border-slate-200','hover:border-primary'] 
const actClass = ['ring-2','ring-primary','ring-offset-2','ring-offset-white','dark:ring-offset-slate-900']
const btnScrol = document.getElementById("scroll-to-top");
const links = document.querySelectorAll("#links a")
const sections = document.querySelectorAll("section")

// nav scrolspy
window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
        ) {
        currentSection = section.getAttribute("id");
        }
    });
    links.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active")
        }
    });
});

// scrollTop
window.addEventListener("scroll",_=>{
    if(window.scrollY > 500){
        btnScrol.classList.remove("opacity-0", 'invisible')
    }else{
        btnScrol.classList.add("opacity-0", 'invisible')
    }
})
btnScrol.addEventListener("click", _ =>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})

// local setting
if(localStorage.getItem("font")){
    document.body.classList.remove('font-alexandria', 'font-tajawal' ,'font-cairo');
    document.body.classList.add(localStorage.getItem("font"))
    if(btnAlex.id == localStorage.getItem("font")){
        fontAlex()
    }else if(btnTajawal.id == localStorage.getItem("font")){
        btnTaj()
    }else if(btnCairo.id == localStorage.getItem("font")){
        btncai()
    }
}


// local color
const root = document.documentElement;
let primary = localStorage.getItem("primary");
let secondary = localStorage.getItem("secondary");
if (primary) {
    root.style.setProperty("--color-primary", primary);
    root.style.setProperty("--color-secondary", secondary);
}
// local mode
localStorage.getItem("mode") == 'ligth'? html.classList.remove('dark') : html.classList.add('dark')
// theme mode
btnThemeMode.addEventListener("click", _ => {
    html.classList.toggle('dark')
    localStorage.setItem("mode", html.classList.contains("dark") ? "dark" : "ligth")
});
// open setting
btnSetting.addEventListener("click", _ => {
    setting.removeAttribute("aria-hidden");
    setting.classList.remove("translate-x-full");
    btnSetting.style.cssText = `right: 20rem;`
})
function closeSet() {
    setting.setAttribute("aria-hidden", "true");
    setting.classList.add("translate-x-full");
    btnSetting.style.cssText = `right: 0;`
}
closeSetting.addEventListener('click', _ => {
    closeSet()
})
// setting fonts
btnAlex.addEventListener('click', _=>{
    fontAlex()
})
btnTajawal.addEventListener('click', _=>{
    btnTaj()
})
btnCairo.addEventListener('click', _=>{
    btncai()
})
function fontAlex(){
    document.body.classList.add('font-alexandria');
    document.body.classList.remove('font-tajawal', 'font-cairo');
    localStorage.setItem("font", 'font-alexandria')
    rmvActFonts();
    btnAlex.classList.add('active')
}
function btnTaj(){
    document.body.classList.add('font-tajawal');
    document.body.classList.remove('font-alexandria', 'font-cairo');
    localStorage.setItem("font", 'font-tajawal')
    rmvActFonts();
    btnTajawal.classList.add('active')
}
function btncai(){
    document.body.classList.add('font-cairo');
    document.body.classList.remove('font-alexandria', 'font-tajawal');
    localStorage.setItem("font", 'font-cairo')
    rmvActFonts();
    btnCairo.classList.add('active')
}
function rmvActFonts (){
    btnFonts.forEach(e=>e.classList.remove('active'))
}
function setColor() {
    const btnPurple = document.createElement("button");
    // color purple
    btnPurple.classList.add(...classColor,...actClass)
    btnPurple.title = 'Purple Blue';
    btnPurple.id = 'actColor'
    btnPurple.setAttribute('data-primary',"#6366f1")
    btnPurple.setAttribute('data-secondary',"#8b5cf6")
    btnPurple.style="background: linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246));"
    // color orange
    const btnOrange = document.createElement("button");
    btnOrange.classList.add(...classColor)
    btnOrange.title = 'Pink Orange';
    btnOrange.setAttribute('data-primary',"#ec4899")
    btnOrange.setAttribute('data-secondary',"#f97316")
    btnOrange.style="background: linear-gradient(135deg, rgb(236, 72, 153), rgb(249, 115, 22));"
    // color grean 
    const btnGrean = document.createElement("button");
    btnGrean.classList.add(...classColor)
    btnGrean.title = 'Green Emerald';
    btnGrean.setAttribute('data-primary',"#10b981")
    btnGrean.setAttribute('data-secondary',"#059669")
    btnGrean.style="background: linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105));"
    // color Cycan
    const btnCycn = document.createElement("button");
    btnCycn.classList.add(...classColor)
    btnCycn.title = 'Blue Cyan';
    btnCycn.setAttribute('data-primary',"#3b82f6")
    btnCycn.setAttribute('data-secondary',"#06b6d4")
    btnCycn.style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212));"
    // color Red
    const btnRed = document.createElement("button");
    btnRed.classList.add(...classColor)
    btnRed.title = 'Red Rose';
    btnRed.setAttribute('data-primary',"#ef4444")
    btnRed.setAttribute('data-secondary',"#f43f5e")
    btnRed.style="background: linear-gradient(135deg, rgb(239, 68, 68), rgb(244, 63, 94));"
    // color Amber
    const btnAmberOran = document.createElement("button");
    btnAmberOran.classList.add(...classColor)
    btnAmberOran.title = 'Amber Orange';
    btnAmberOran.setAttribute('data-primary',"#f59e0b")
    btnAmberOran.setAttribute('data-secondary',"#ea580c")
    btnAmberOran.style="background: linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12));"
    // append
    themeColor.appendChild(btnPurple)
    themeColor.appendChild(btnOrange)
    themeColor.appendChild(btnGrean)
    themeColor.appendChild(btnCycn)
    themeColor.appendChild(btnRed)
    themeColor.appendChild(btnAmberOran)
}
// call fun 
setColor()
const btnsColors =document.querySelectorAll("#theme-colors-grid button")
btnsColors.forEach(btn => {
    btn.addEventListener("click", () => {
    let primary = btn.dataset.primary;
    let secondary = btn.dataset.secondary;
    // override CSS variabls
    root.style.setProperty("--color-primary", primary);
    root.style.setProperty("--color-secondary", secondary);
    // save in local
    localStorage.setItem("primary", primary);
    localStorage.setItem("secondary", secondary);
    // actv class
    btnsColors.forEach(b => b.classList.remove(...actClass));
    btn.classList.add(...actClass);
    });
});
const resetSetting = document.getElementById("reset-settings");
const actColor = document.getElementById("actColor")
resetSetting.addEventListener("click", () => {
btnTaj()
closeSet()
    let primary = actColor.dataset.primary;
    let secondary = actColor.dataset.secondary;
    root.style.setProperty("--color-primary", primary);
    root.style.setProperty("--color-secondary", secondary);
    localStorage.setItem("primary", primary);
    localStorage.setItem("secondary", secondary);
})





// nav & tabs
const tabs = document.querySelectorAll("#portfolio-filters button")
const cards = document.querySelectorAll(".portfolio-item")
tabs.forEach(btn => {
    btn.addEventListener("click", _ => {
        tabs.forEach(b => {
            if(b.getAttribute("data-filter") === "all"){
                b.classList.remove("active","bg-linear-to-r" ,"from-primary" ,"to-secondary" ,"text-white" ,"shadow-lg","shadow-primary/50")
                b.classList.add("bg-white", "dark:bg-slate-800" ,"text-slate-600", "dark:text-slate-300", "border", "border-slate-300","dark:border-slate-700")
            }else{
                b.classList.remove("active","bg-linear-to-r" ,"from-primary" ,"to-secondary" ,"text-white" ,"shadow-lg","shadow-primary/50")
            }  
        })
        btn.classList.add("active","bg-linear-to-r" ,"from-primary" ,"to-secondary" ,"text-white" ,"shadow-lg","shadow-primary/50")
        cards.forEach(card => {
            card.style = 'display: block';
            if(btn.getAttribute("data-filter") === "all"){
                card.style = 'display: block';
            }else if(btn.getAttribute("data-filter") != card.getAttribute("data-category")){
                card.style = 'display: none';
            }
        })
    })
})
// Testmonials Carousel
const tesCard = document.querySelector("#testimonials-carousel")
const arrowLeft =document.getElementById("prev-testimonial")
const arrowRigth =document.getElementById("next-testimonial")
const btnsArrows = document.querySelectorAll("#arrows button")
let index = 0;
const steps = [0, 33.3333, 66.6667, 100];
arrowLeft.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = steps.length - 1;
    }
    tesCard.style.transform = `translateX(${steps[index]}%)`;
    arrows()
});
arrowRigth.addEventListener("click", () => {
    index++;
    if (index >= steps.length) {
        index = 0;
    }
    tesCard.style.transform = `translateX(${steps[index]}%)`;
    arrows()
});
function arrows() {
    btnsArrows.forEach(e=>{
        if(e.getAttribute("data-index") == index){
            e.classList.replace('dark:bg-slate-600',"bg-accent")
        }else{
            e.classList.replace("bg-accent", 'dark:bg-slate-600')
        }
    })
}
btnsArrows.forEach(e => {
    e.addEventListener("click", _ => {
        index = e.getAttribute("data-index")
        tesCard.style.transform = `translateX(${steps[index]}%)`;
        btnsArrows.forEach(r =>{
            r.classList.remove("bg-accent")
        })
        e.classList.replace('dark:bg-slate-600',"bg-accent")
    })
})