const randomcolor = function(){
    const hex = "1234567890ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId 
const startChanagingColor = function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomcolor();
    }
    intervalId = setInterval(changeBgColor,1000);
}
document.querySelector("#start").addEventListener("click",startChanagingColor);

const stopChangingColor = function(){
clearInterval(intervalId);
}
document.querySelector("#stop").addEventListener("click",stopChangingColor);