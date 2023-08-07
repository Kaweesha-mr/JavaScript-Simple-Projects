const color_text = document.querySelector(".color-code");
const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);

    var bgColor = "rgb("+x+","+y+","+z+")";
    color_text.textContent = bgColor;
    container.style.backgroundColor=bgColor;
})