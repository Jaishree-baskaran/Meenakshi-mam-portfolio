window.onscroll = function() {
    var nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        nav.style.background = "#fdfdfd";
    } else {
        nav.style.boxShadow = "none";
    }
};