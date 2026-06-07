function togglenav() {
    var x = document.getElementById("nav");
    if (x.className === 'nav') {
        x.classList.replace("nav", "verticalnav")
    } else if(x.className == "verticalnav"){
        x.classList.replace("verticalnav", "nav")
    }
}