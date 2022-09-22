// Nav Bar
let navBar = document.querySelector("nav")
let navLogo = document.querySelector("nav .logo img")
let navLinks = document.querySelectorAll("nav .links a")
let navLinkActive = document.querySelector("nav .links a.active")
let body = document.querySelector("body")
document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 200) {
    // navBar.style.backgroundColor = "#FFF";
    navBar.style.cssText = "background-color: #FFF !important";
    navLogo.src = "images/logo-dark.png";
    navLinks.forEach((link) => {
      link.style.color = "#000"
    })
    // navLinkActive.style.color = "#e65f78"
    navLinkActive.style.cssText = "color: #e65f78 !important";
  } else {
    navBar.style.backgroundColor = "transparent";
    navLogo.src = "images/logo.png";
    navLinks.forEach((link) => {
      link.style.color = "#FFF"
    })
    // navLinkActive.style.color = "#e65f78"
    navLinkActive.style.cssText = "color: #e65f78 !important";
  }
})




document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 200) {
    navBar.classList.add("links-bottom")
  } else {
    navBar.classList.remove("links-bottom")
  }
})
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    e.target.parentElement.parentElement.querySelector(".active").classList.remove("active")
    avtiveClass(e)
  })
})



// Header Typing
let typing = new Typed(".typing", {
  strings: ["a graphic designer", "a Web Developer", "a Photographer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
})


// Go Down Icon
let goDownIcon = document.querySelector(".go-down")
goDownIcon.addEventListener("click", () => {
  document.documentElement.scrollTop = window.innerHeight
})

// Go Up Icon
let goUpIcon = document.querySelector(".go-up")
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 500) {
    goUpIcon.style.opacity = "1"
  } else {
    goUpIcon.style.opacity = "0"
  }
})
goUpIcon.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
})


// Client Swiper
let sweiperIcon = document.querySelectorAll("#client .client-swiper span")
let sweiperDivs = document.querySelector("#client .box")

sweiperIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    clientSwiper(e)
  })
})
function clientSwiper(e) {
  avtiveClass(e)
  if (e.target.dataset.client == "swiper-two") {
    sweiperDivs.style.left = "-100%"
  } else if (e.target.dataset.client == "swiper-three") {
    sweiperDivs.style.left = "-200%"
  } else {
    sweiperDivs.style.left = "0%"
  }
}



// Portfolio Menu
let portfolioBtns = document.querySelectorAll("#portfolio .portfolio-btns button")
let portfolioImgs = document.querySelectorAll("#portfolio .col-md-4")
let arrPortfolioImgs = [...portfolioImgs]

portfolioBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    avtiveClass(e);
    if (e.target.dataset.portfolio === "two") {
      show()
      hide(3)
    } else if (e.target.dataset.portfolio === "three") {
      show()
      hide(2)
      hide(4)
      hide(5)
    } else if (e.target.dataset.portfolio === "four") {
      show()
      hide(0)
      hide(2)
      hide(4)
    } else if (e.target.dataset.portfolio === "five") {
      show()
      hide(0)
      hide(1)
      hide(3)
      hide(4)
      hide(5)
    } else {
      show()
    }
  })
})
function show() {
  portfolioImgs.forEach(img => {
    img.style.display = "block"
  })
}
function hide(imgIndex) {
  arrPortfolioImgs[imgIndex].style.display = "none";
}



// Active Class Function
function avtiveClass(e) {
  e.target.parentElement.querySelectorAll(".active").forEach(el => {
    el.classList.remove("active")
  })
  e.target.classList.add("active")
}

navLinks.forEach(el => {
  el.addEventListener("click", (e) => {
    if (e.target.dataset.section === 'home') {
      document.documentElement.scrollTop = 0;
    } else if (e.target.dataset.section === 'about') {
      document.documentElement.scrollTop = window.innerHeight - navBar.offsetHeight;
    } else if (e.target.dataset.section === 'services') {
      document.documentElement.scrollTop = window.innerHeight + document.getElementById("about").offsetHeight - navBar.offsetHeight;
    } else if (e.target.dataset.section === 'client') {
      document.documentElement.scrollTop = window.innerHeight + document.getElementById("about").offsetHeight + document.getElementById("services").offsetHeight - navBar.offsetHeight;
    } else if (e.target.dataset.section === 'portfolio') {
      document.documentElement.scrollTop = window.innerHeight + document.getElementById("about").offsetHeight + document.getElementById("services").offsetHeight + document.getElementById("client").offsetHeight - navBar.offsetHeight;
    } else if (e.target.dataset.section === 'blog') {
      document.documentElement.scrollTop = window.innerHeight + document.getElementById("about").offsetHeight + document.getElementById("services").offsetHeight + document.getElementById("client").offsetHeight + document.getElementById("portfolio").offsetHeight - navBar.offsetHeight;
    } else if (e.target.dataset.section === 'contact') {
      document.documentElement.scrollTop = window.innerHeight + document.getElementById("about").offsetHeight + document.getElementById("services").offsetHeight + document.getElementById("client").offsetHeight + document.getElementById("portfolio").offsetHeight + document.getElementById("blog").offsetHeight - navBar.offsetHeight;
    }
  })
})