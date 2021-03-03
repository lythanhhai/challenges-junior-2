const navbar1 = document.getElementById("navbar1");
const remove1 = document.getElementById("remove1");
const menu1 = document.getElementById("menu1");
const header1 = document.getElementById("header1");
const interactive1 = document.getElementById("interactive1");
const creation1 = document.getElementById("creation1");
const footer1 = document.getElementById("footer1");

menu1.style.display = "none";
navbar1.addEventListener("click",function()
{
menu1.style.display = "block";
header1.style.display = "none";
interactive1.style.display = "none";
creation1.style.display = "none";
footer1.style.display = "none";
});

remove1.addEventListener("click",function()
{
    menu1.style.display = "none";
    header1.style.display = "block";
    interactive1.style.display = "block";
    creation1.style.display = "block";
    footer1.style.display = "block";
});