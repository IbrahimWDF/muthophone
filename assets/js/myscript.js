// go to top button 
$(".gototop").gototop({
    position: 0,
    duration: 1250,
    visibleAt: 1000,
    classname: "isvisible"
});
//Menu part
function mobileMenuOpen() {
    document.getElementById("mobileMenu").style.width = "250px";
    document.getElementById("mobile_menu_icon").style.marginRight = "100px";
}

function mobileMenuClose() {
    document.getElementById("mobileMenu").style.width = "0";
    document.getElementById("mobile_menu_icon").style.marginRight= "0";
}