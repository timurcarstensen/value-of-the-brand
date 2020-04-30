// Visualisation 1
var divElement = document.getElementById('viz1584552521657');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
        vizElement.style.minWidth = '420px';
        vizElement.style.maxWidth = '1050px';
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '587px';
        vizElement.style.maxHeight = '887px';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else if (divElement.offsetWidth > 500) {
        vizElement.style.minWidth = '420px';
        vizElement.style.maxWidth = '1050px';
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '587px';
        vizElement.style.maxHeight = '887px';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
    }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

// Visualisation 2
var divElement = document.getElementById('viz1584561649185');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
        vizElement.style.minWidth = '420px';
        vizElement.style.maxWidth = '1050px';
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '587px';
        vizElement.style.maxHeight = '887px';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else if (divElement.offsetWidth > 500) {
        vizElement.style.minWidth = '420px';
        vizElement.style.maxWidth = '1050px';
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '587px';
        vizElement.style.maxHeight = '887px';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
    }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

// Visualisation 3
var divElement = document.getElementById('viz1584721833216');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
        vizElement.style.minWidth = '420px';
        vizElement.style.maxWidth = '1050px';
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '587px';
        vizElement.style.maxHeight = '887px';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else if (divElement.offsetWidth > 500) {
        vizElement.style.minWidth = '420px';
        vizElement.style.maxWidth = '1050px';
        vizElement.style.width = '100%';
        vizElement.style.minHeight = '587px';
        vizElement.style.maxHeight = '887px';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
    }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

// Cookie Banner
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 2000);

// Hovering Navigation Bar
window.onscroll = function() {
    myFunction()
};
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky"); // makes the navigation bar sticky when scrolling
        navbar.classList.add("dropShadow"); // adds a shadow to thwe navigation bar when scrolling
    } else {
        navbar.classList.remove("sticky"); // removes sticky property from navigation bar when reaching top
        navbar.classList.remove("dropShadow"); //removes the drop shadow when reaching the top of the site
    }
}