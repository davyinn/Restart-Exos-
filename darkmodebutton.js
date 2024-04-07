let themebutton = document.getElementById("themecolor");
themebutton.addEventListener("click", function() {
    document.body.classList.toggle("darkMode");
    if ( document.body.classList.contains("darkMode")) {
        themebutton.textContent = "lightMode";
    }else { 
        themebutton.textContent = "darkMode"
    }
});

  