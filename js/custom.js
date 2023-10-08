const currentTime = () => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    updateTime(hour);
    updateTime(min);
    updateTime(sec)

    const clock = document.querySelector('#clock') 
    clock.innerText = hour + " : " + min + " : " + sec
    setTimeout(() => {
        currentTime() 
    }, 1000)

}
const updateTime = (k) => {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}
currentTime();

let text = document.querySelector(".prikol");

setInterval(() => {
if(text.style.color == "black"){
    text.style.cssText = `
        color: white;
        textShadow: 0 0 10px black; 
    `
} else {
    text.style.cssText = `
        color: black;
        textShadow: 0 0 10px white; 
    `
}
},0.01);